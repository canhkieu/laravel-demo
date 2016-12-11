<?php

/*
  |--------------------------------------------------------------------------
  | Web Routes
  |--------------------------------------------------------------------------
  |
  | Here is where you can register web routes for your application. These
  | routes are loaded by the RouteServiceProvider within a group which
  | contains the "web" middleware group. Now create something great!
  |
 */


Route::get('/', function() {
    return view('welcome');
});

Route::get('/mysend/{text}', function ($text) {
    event(new App\Events\NotificationPusher($text));
    return "OK";
});

Route::get('/send', function () {
    $pusher = App::make('pusher');
    $pusher->trigger('my-channel', 'DisplayNotification', array('text' => 'Preparing the Pusher Laracon.eu workshop!'));
    return "OK";
});

Auth::routes();

Route::get('/home', 'HomeController@index');

Route::resource('/users', 'UsersController');
