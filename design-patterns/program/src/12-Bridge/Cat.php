<?php
namespace Bridge;

use Bridge\LandAnimals;

class Cat extends LandAnimals {
    // Override
    public function getName() {
        return "Cat";
    }

    // Override
    public function getNumberOfFeet() {
        return 4;
    }
}