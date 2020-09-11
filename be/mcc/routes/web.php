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

$router->get('/', function () use ($router) {
    return $router->app->version();
});


$router->get('/first', function () use ($router){
        return  app()->environment();
});


$router->group(['prefix' => 'mccap'], function($router){
        $router->get('companydata', 'CompanyDataController@showCompanyData');   
        $router->get('companydata/{id}', 'CompanyDataController@showSingleData');
        $router->post('companydata', 'CompanyDataController@createnNew');  
        $router->put('companydata/{id}',  'CompanyDataController@updatedetails');
}); 


$router->group(['prefix' => 'mccapi'], function($router){
         $router->post('teams', 'TeamController@createTeam');
         $router->put('teams/{id}', 'TeamController@updateTeam');
         $router->delete('teams/{id}', 'TeamController@deactivateTeam');     
});

$router->group(['prefix' => 'mccapi'], function($router){
        $router->get('player', 'PlayerController@showAllPlayers');
        $router->post('player', 'PlayerController@createNewPlayer');
        $router->put('player/{id}', 'PlayerController@updatePlayerDetails');
});