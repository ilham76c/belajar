<?php
namespace Repository;

use Repository\Product;
use ObjectPool\DatabasePool;

class ProductRepository {
    /**
     * @var Database
     */
    private static DatabasePool $db;

    public function __construct() {
        self::$db = new DatabasePool();
    }

    public function insert(Product $product) {
        $conn = self::$db::getConnection();
        $conn->sql("INSERT INTO products(id, name, price) VALUES(".$product->getId().", ".$product->getName().", ".$product->getPrice().")");
        self::$db::close($conn);
    }

    public function update(Product $product) {
        $conn = self::$db::getConnection();
        $conn->sql("UPDATE products SET name = ".$product->getName().", price = ".$product->getPrice()." WHERE id = ".$product->getId()."");
        self::$db::close($conn);
    }

    public function delete(string $id) {
        $conn = self::$db::getConnection();
        $conn->sql("DELETE FROM products WHERE id = $id");
        self::$db::close($conn);
    }
}