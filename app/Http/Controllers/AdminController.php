<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index()
    {
        
        return view('admin.index');
    }


    public function healthchecklist()
    {
        return view('admin.healthchecklist');
    }
    
    public function loginAdmin()
    {
        return view('admin.loginAdmin');
    }



    




}
