<?php

use Illuminate\Http\Request;

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

Route::get('/noticias/{category}', 'NoticiasController@getnoticias');

Route::get('/noticia/{id}', 'NoticiasController@getnoticia');

Route::post('login', 'API\UserController@login');

Route::post('register', 'API\UserController@register');

Route::post('update', 'API\UserController@update');

Route::get('/user/{id}', 'API\UserController@get_user');

Route::post('newblog', 'BlogController@store');

Route::post('newcomment', 'CommentsController@store');

Route::get('blogs', 'BlogController@show');

Route::get('blogs/{category}', 'BlogController@filter');

Route::get('/entry/{id}', 'BlogController@get_entry');

Route::get('/comments/{id}', 'CommentsController@get_entry_comments');
