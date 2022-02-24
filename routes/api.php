<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Proizvod;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('proizvod', 'App\Http\Controllers\ProizvodController@index');
 
Route::get('proizvod/{product}', 'App\Http\Controllers\ProizvodController@show');
 
Route::post('proizvod/store','App\Http\Controllers\ProizvodController@store');
 
Route::put('proizvod/{product}/update','App\Http\Controllers\ProizvodController@update');
 
Route::delete('proizvod/{product}/obrisi', 'App\Http\Controllers\ProizvodController@delete');