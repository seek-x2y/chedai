<?php

namespace App\Http\Controllers;

use App\Imports\CarsImport;
use CloudCreativity\LaravelJsonApi\Http\Controllers\JsonApiController;
use CloudCreativity\LaravelJsonApi\Contracts\Store\StoreInterface;
use CloudCreativity\LaravelJsonApi\Http\Requests\CreateResource;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Maatwebsite\Excel\Facades\Excel;

class FilesController extends JsonApiController
{
    public function create(StoreInterface $store, CreateResource $request)
    {
        // 现在只有all能接收到数据，其他方式不可，为什么？
        $req = $request->all();
        dump('req',$req);
        $file = $request->input('files');
        dd('file', $file);
        // 是否上传成功
        if (!($file->isValid())) {
            return $this->reply()->error(['id' => 4000, 'title' => '文件上传失败！'], 400);
        }

        // 是否符合文件类型
        $fileExtension = $file->getClientOriginalExtension();
        if (!in_array($fileExtension, ['xlsx', 'xls'])) {
            return $this->reply()->error(['id' => '4021', 'title' => '文件类型错误', 'detail' => '目前只允许上传 xlsx 和 xls 格式文件！'], 422);
        }

        $tmpFile = $file->getRealPath();
        if (filesize($tmpFile) >= 2048000) {
            return $this->reply()->error(['id' => '4022', 'title' => '文件不能大于2M！'], 422);
        }

        // 是否是通过HTTP请求表单提交的文件
        if (!is_uploaded_file($tmpFile)) {
            return $this->reply()->error(['id' => '4003', 'title' => '非法请求！'], 403);
        }

        try {
            $fileName = now()->toDateString() . '/' . md5(time() . mt_rand(0, 9999)) . '.' . $fileExtension;
            if (Storage::disk('public')->put($fileName, file_get_contents($tmpFile))) {
                $url = Storage::url($fileName);
                Excel::import(new CarsImport(), $url);
                return $this->reply()->meta(['file' => $url]);
            }
        } catch (\Exception $exception) {
            Log::error('文件上传出现异常：' . $exception->getMessage());
        } finally {
            $this->reply()->error(['id' => '5000', 'title' => '系统错误！'], 500);
        }
    }
}
