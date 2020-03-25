<?php

//use Illuminate\Http\Request;
use CloudCreativity\LaravelJsonApi\Facades\JsonApi;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

JsonApi::register('v1')->routes(function ($api) {
    $api->resource('brands');
    $api->resource('car-types');
    $api->resource('configurations');
    $api->resource('fee-rates');
});
