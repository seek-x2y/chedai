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
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
//    Route::post('me', 'AuthController@me');
});

JsonApi::register('v1')->authorizer('default')->routes(function ($api) {
    $api->post('/upload', 'UploadController@index')->name('upload');
    $api->resource('users')->controller()->routes(function($users){
        $users->get('current', 'current')->name('current');
    });
    $api->resource('brands');
    $api->resource('car-types');
    $api->resource('configurations');
    $api->resource('fee-rates');
});
