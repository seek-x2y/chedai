<?php

use CloudCreativity\LaravelJsonApi\Facades\JsonApi;
use Illuminate\Support\Facades\Route;

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
Route::group([
    'middleware' => 'api',
    'prefix' => 'auth',
], function () {
    Route::post('login', 'AuthController@login')->name('login');
    Route::post('logout', 'AuthController@logout')->name('logout');
    Route::post('refresh', 'AuthController@refresh')->name('refresh');
});


JsonApi::register('v1')->middleware('auth:api')->routes(function ($api) {
    // $api->post('upload', 'UploadController@index')->name('upload');
    $api->get('me', 'AuthController@me')->name('currentUser');

    $api->resource('files')->controller();  
    // $api->resource('brands');
    // $api->resource('car-types');
    // $api->resource('configurations');
    // $api->resource('fee-rates');
});
