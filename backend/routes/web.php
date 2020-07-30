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

    $router->group(['prefix' => 'voting-items'], function () use ($router) {
        $router->get('/', 'VotingItemController@index');
        $router->get('/voting/{voting_id}', 'VotingItemController@getItems');
        $router->post('/create', 'VotingItemController@store');
        $router->get('/{id}', 'VotingItemController@show');
        $router->put('/{id}', 'VotingItemController@update');
        $router->delete('/{id}', 'VotingItemController@destroy');
    });
});
