<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AjaxController extends Controller
{
    public function updateCustomerRecord(Request $request)
    {
        $data = $request->all(); // This will get all the request data.
        Log::info($data);
        //dd($data); // This will dump and die
    }
}

