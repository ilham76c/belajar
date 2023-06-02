<?php
namespace Bridge;

use Bridge\LandAnimals;

class Goat extends LandAnimals {
    // Override
    public function getName() {
        return "Goat";
    }

    // Override
    public function getNumberOfFeet() {
        return 4;
    }
}