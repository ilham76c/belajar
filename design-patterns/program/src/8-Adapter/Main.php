<?php
namespace Adapter;

require 'vendor/autoload.php';

use Adapter\Book;
use Adapter\Screencast;
use Adapter\CatalogAdapterInterface;
use Adapter\BookCatalogAdapter;
use Adapter\ScreencastCatalogAdapter;

class Main {
    public function run() {
        CatalogAdapterInterface : $list = array();

        array_push($list, new BookCatalogAdapter(new Book("PHP", "Rasmus Lerdorf")));
        array_push($list, new BookCatalogAdapter(new Book("Python", "Guido van Rossum")));
        array_push($list, new BookCatalogAdapter(new Book("Ruby", "Yukihiro Matsumoto")));

        array_push($list, new ScreencastCatalogAdapter(new Screencast("Laravel", "Taylor Otwell", 60)));
        array_push($list, new ScreencastCatalogAdapter(new Screencast("JQuery", "John Resig", 120)));
        array_push($list, new ScreencastCatalogAdapter(new Screencast("Vue.js", "Evan You", 45)));

        echo "# Menggunakan Adapter #\n";
        /* menggunakan adapater */
        foreach($list as $obj){
            echo $obj->getCatalogTitle()."\n";
        }

        array_push($list, new Book("C", "Dennis Ritchie"));
        array_push($list, new Book("C++", "Bjarne Stroustrup"));
        array_push($list, new Book("Perl", "Larry Wall"));

        array_push($list, new Screencast("Bootstrap", "Mark Otto and Jacob", 60));
        array_push($list, new Screencast("Tailwind", "Adam Wathan", 120));
        array_push($list, new Screencast("Materialize", "Google", 45));

        echo "\n\n# Tanpa Adapter #\n";
        /* tanpa adapter */
        foreach($list as $obj){
            if ($obj instanceof Book) {
                Book : $book = $obj;
                echo $book->getTitle()."\t by ".$book->getAuthor()."\n";
            } elseif ($obj instanceof Screencast) {
                Screencast : $screencast = $obj;
                echo $screencast->getTitle()."\t by ".$screencast->getAuthor()."\n";
            }
        }
    }
}

$main = new Main();
$main->run();