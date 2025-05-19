<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

// Route::get('/winners/{year?}', function ($year = null) {
//     return Inertia::render('Winners', ['year' => $year]);
// })->name('winners');

// Route::get('/gallery', function () {
//     return Inertia::render('Gallery');
// })->name('gallery');

// Route::get('/contact', function () {
//     return Inertia::render('Contact');
// })->name('contact');

/*
|--------------------------------------------------------------------------
| Authenticated Routes
|--------------------------------------------------------------------------
*/

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    // Example: Profile or account settings
    Route::get('/profile', function () {
        return Inertia::render('Profile');
    })->name('profile');
});

/*
|--------------------------------------------------------------------------
| Include Modular Route Files
|--------------------------------------------------------------------------
*/

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
