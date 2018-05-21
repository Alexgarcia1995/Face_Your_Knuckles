<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Noticias;

class RSSData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'RSSData:updateDb';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update DB from RSS Feed';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        try{
            $content = file_get_contents("https://www.spaceboxing.com/mma-valetudo/feed/");
            $x = new \SimpleXmlElement($content);
            foreach($x->channel->item as $entry){
                $noticia = new Noticias;
                $noticia->category="kick-boxing";
                $noticia->title = $entry->title;
                $noticia->description="";
                $content = file_get_contents($entry->link);
                $dom = new \DOMDocument();
                libxml_use_internal_errors(true);
                $dom->loadHTML($content);
                $xpath = new \DomXPath($dom);
                $nodes = $xpath->query("//div[@class='td-post-content td-pb-padding-side']");
                foreach ($nodes as $node) {
                    $childnodes = $node->childNodes;
                    foreach($childnodes as $child){
                        if($child->nodeName === 'p'){
                            $noticia->description .= $child->nodeValue;
                        };
                    }
                }
                $noticia->url = $entry->link;
                $noticia->save();
            }
        } catch (\Exception $e) {
            print_r('Base de datos actualizada');
        }

        try{
            $content = file_get_contents("https://www.soloboxeo.com/feed/");
            $x = new \SimpleXmlElement($content);
            foreach($x->channel->item as $entry){
                $noticia = new Noticias;
                $noticia->category="boxeo";
                $noticia->title = $entry->title;
                $noticia->description="";
                $content = file_get_contents($entry->link);
                $dom = new \DOMDocument();
                libxml_use_internal_errors(true);
                $dom->loadHTML($content);
                $xpath = new \DomXPath($dom);
                $nodes = $xpath->query("//div[@class='post-container cf']");
                foreach ($nodes as $node) {
                    $noticia->description.=$node->nodeValue;
                } 
                $noticia->url = $entry->link;
                $noticia->save();
            }
        } catch (\Exception $e) {
            print_r("Base de datos actualizada");
        }

        try{
            $content = file_get_contents("https://www.mrprepor.com/feed/");
            $x = new \SimpleXmlElement($content);
            foreach($x->channel->item as $entry){
                $noticia = new Noticias;
                $noticia->category="karate";
                $noticia->title = $entry->title;
                $noticia->description="";
                $content = file_get_contents($entry->link);
                $dom = new \DOMDocument();
                libxml_use_internal_errors(true);
                $dom->loadHTML($content);
                $xpath = new \DomXPath($dom);
                $nodes = $xpath->query("//div[@class='entry-content']");
                foreach ($nodes as $node) {
                    $noticia->description.=$node->nodeValue;
                }
                $noticia->url = $entry->link;
                $noticia->save();
            }
        } catch (\Exception $e) {
            print_r("Base de datos actualizada");
        }
    }

}
