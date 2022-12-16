<?php
namespace Factory;

use Factory\AnimalInterface;

class Dog implements AnimalInterface {
  function speak() {
    echo "Gug gug!";
  }
}