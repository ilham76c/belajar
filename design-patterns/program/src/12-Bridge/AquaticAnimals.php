<?php
namespace Bridge;

use Bridge\Animal;

// implements digunakan untuk abstract class
abstract class AquaticAnimals implements Animal {
     // Override
     public function liveInWater() {
        return true;
    }

    // Override
    public function liveInLand() {
        return false;
    }
}