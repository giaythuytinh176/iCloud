<?php


//Route::get('/', 'Backend\BackendController@dashboard');
Route::get('dashboard', 'Backend\BackendController@dashboard');

Route::group(['prefix' => 'customer'], function() {
    Route::get('/', 'Backend\CustomerController@index')->name('show-list');
    Route::get('/add', 'Backend\CustomerController@showAddForm')->name('show-add');
    Route::get('/edit/{id}', 'Backend\CustomerController@showEditForm')->name('show-edit');
    Route::post('/edit', 'Backend\CustomerController@edit')->name('edit');
});

Route::get('test','Backend\BackendController@test');