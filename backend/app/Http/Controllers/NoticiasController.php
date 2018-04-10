<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Noticias;

class NoticiasController extends Controller
{
    function __construct() {
        try{
            $content = file_get_contents("https://www.spaceboxing.com/mma-valetudo/feed/");
            $x = new \SimpleXmlElement($content);
            foreach($x->channel->item as $entry){
                $noticia = new Noticias;
                $noticia->category="kick-boxing";
                $noticia->title = $entry->title;
                $noticia->description="";
                $noticia->url = $entry->link;
                $noticia->save();
            }
        } catch (\Exception $e) {
        }

        try{
            $content = file_get_contents("https://www.soloboxeo.com/feed/");
            $x = new \SimpleXmlElement($content);
            foreach($x->channel->item as $entry){
                $noticia = new Noticias;
                $noticia->category="boxeo";
                $noticia->title = $entry->title;
                $noticia->description="";
                $noticia->url = $entry->link;
                $noticia->save();
            }
        } catch (\Exception $e) {
        }

        try{
            $content = file_get_contents("https://www.mrprepor.com/feed/");
            $x = new \SimpleXmlElement($content);
            foreach($x->channel->item as $entry){
                $noticia = new Noticias;
                $noticia->category="karate";
                $noticia->title = $entry->title;
                $noticia->description="";
                $noticia->url = $entry->link;
                $noticia->save();
            }
        } catch (\Exception $e) {
        }
    }
 
   public function getnoticias ($category){
       return Noticias::where('category',$category)->get();
   }

   public function getnoticia ($id){
    return Noticias::where('id',$id)->get();
}
}
