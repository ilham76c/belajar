<?php
namespace Repository;

class Product {
    /**
     * @var ID
     */
    private string $id;

    /**
     * @var Name
     */
    private string $name;

    /**
     * @var Price
     */
    private int $price;

    public function getId() : string {
        return $this->id;
    }

    public function setId(string $id) {
        $this->id = $id;
    }

    public function getName() : string {
        return $this->name;
    }

    public function setName(string $name) {
        $this->name = $name;
    }

    public function getPrice() : int {
        return $this->price;
    }

    public function setPrice(int $price) {
        $this->price = $price;
    }
}