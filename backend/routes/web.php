<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

/** @var Router */
$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => 'api'], function () use ($router) {
    $router->group(['prefix' => 'votings'], function () use ($router) {
        $router->get('/', 'VotingController@index');
        $router->post('/create', 'VotingController@store');
        $router->get('/{id}', 'VotingController@show');
        $router->put('/{id}', 'VotingController@update');
        $router->delete('/{id}', 'VotingController@destroy');
    });
});
