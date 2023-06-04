<?php

namespace Composite;

require 'vendor/autoload.php';

use Composite\Category;
use Composite\CompositeCategory;

class Main {
    public function run() {
        $categories = array(
            new CompositeCategory("Handphone", array(
                new Category("Android"),
                new Category("iOS")
            )),
            new CompositeCategory("Computer", array(
                new Category("Laptop"),
                new Category("PC")
            )),
            new CompositeCategory("Fashion", array(
                new CompositeCategory("Fashion Pria", array(
                    new Category("Celana Pria"),
                    new CompositeCategory("Baju Pria", array(
                        new Category("Kaos Pria"),
                        new Category("Kemeja Pria")
                    ))
                )),
                new Category("Fashion Wanita")
            ))
        );

        foreach ($categories as $key => $category) {
            $this->printCategory($category);
        }
    }

    private static function printCategory($category) {
        if ($category instanceof Category) {
            echo $category->getName()."\n";
        }
        if ($category instanceof CompositeCategory) {
            foreach ($category->getCategories() as $key => $value) {
                self::printCategory($value);
            }
        }
    }
}

$main = new Main();
$main->run();