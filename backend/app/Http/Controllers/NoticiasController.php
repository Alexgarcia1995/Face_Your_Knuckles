<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Noticias;

class NoticiasController extends Controller
{
   public function getnoticias ($category){
       return Noticias::where('category',$category)->get();
   }
}
