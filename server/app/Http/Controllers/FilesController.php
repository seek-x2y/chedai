<?php

namespace App\Http\Controllers;

use CloudCreativity\LaravelJsonApi\Http\Controllers\JsonApiController;
use CloudCreativity\LaravelJsonApi\Contracts\Store\StoreInterface;
use CloudCreativity\LaravelJsonApi\Http\Requests\CreateResource;

class FilesController extends JsonApiController
{
    public function create(StoreInterface $store, CreateResource $request)
    {
        dd($request->file('file'));
        // $record = $this->transaction(function () use ($store, $request) {


        //     return $this->doCreate($store, $request);
        // });

        // if ($this->isResponse($record)) {
        //     return $record;
        // }


        // return $this->reply()->created($record);
    }
}
