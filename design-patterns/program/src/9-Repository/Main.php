<?php
namespace Repository;

require 'vendor/autoload.php';

use Repository\Product;
use Repository\ProductRepository;

class Main {
    public function run() {
        Product : $product = new Product();
        $product->setId("1");
        $product->setName("Topi");
        $product->setPrice(70000);
        
        print_r($product);

        ProductRepository : $repository = new ProductRepository();
        $repository->insert($product);

        print_r($product);

        $product->setPrice(11000);
        $repository->update($product);

        print_r($product);

        $repository->delete($product->getId());
    }
}

$main = new Main();
$main->run();