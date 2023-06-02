<?php
namespace Bridge;

use Bridge\LandAnimals;

class Dog extends LandAnimals {
    // Override
    public function getName() {
        return "Dog";
    }

    // Override
    public function getNumberOfFeet() {
        return 4;
    }
}