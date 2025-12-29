<?php

use App\Http\Controllers\Auth\RegisteredUserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Auth UI Routes
Route::get('/register', fn() => Inertia::render('Auth/Register'));

Route::post('/register', [RegisteredUserController::class, 'store'])
    ->name('register');

Route::get('/SignIn', fn() => Inertia::render('Auth/SignIn'));

// Main Pages
Route::get('/', fn() => Inertia::render('Home'));

Route::get('/movie/{id}', function ($id) {
    return Inertia::render('MovieDetail', ['id' => $id]);
});

Route::get('/favorites', fn() => Inertia::render('Favorites'));

Route::get('/payments', fn() => Inertia::render('Payments'));


require __DIR__.'/auth.php';
