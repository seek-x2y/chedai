<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UploadController extends Controller
{
    public function index(Request $request){
        Log::info('is here');
        if($request->hasFile('file')) {
            Log::info('has file');
        }
        $file =  $request->file('file');
        
        dump('this is on upload');
        Log::info('test', json_encode($request));

        return respon()->json([
            'is here'
        ]);
    }
}
