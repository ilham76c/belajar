<?php
namespace Bridge;

require 'vendor/autoload.php';

use Bridge\Dog;
use Bridge\Goat;
use Bridge\Cat;
use Bridge\Koi;
use Bridge\Shark;
use Bridge\AquaticAnimals;
use Bridge\LandAnimals;

class Main {
    public function run() {
        $animals = array(
            new Dog(),
            new Goat(),
            new Cat(),
            new Koi(),
            new Shark()
        );

        foreach ($animals as $key => $animal) {
            if ($animal instanceof AquaticAnimals) {
                // $aquaticAnimal = (AquaticAnimals) $animal; //php7+
                echo $animal->getName()." hidup di air.\n";
            } elseif ($animal instanceof LandAnimals) {
                // $landAnimal = (LandAnimal) $animal; //php7+
                echo $animal->getName()." hidup di darat dengan kaki ".$animal->getNumberOfFeet().".\n";
            }
        }
    }
}

$main = new Main();
$main->run();