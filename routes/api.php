<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\LineController;

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
Route::get('/getUsers', [LineController::class, 'getUsers']);
Route::post('/line/send', [LineController::class, 'sendMessage']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
