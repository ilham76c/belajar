<?php
namespace Bridge;

use Bridge\Animal;

abstract class LandAnimals implements Animal {
     // Override
     public function liveInWater() {
        return false;
    }

    // Override
    public function liveInLand() {
        return true;
    }

    /**
     * @return Number
     */
    public abstract function getNumberOfFeet();
}