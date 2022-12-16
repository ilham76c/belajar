<?php
namespace Factory;

use Factory\AnimalInterface;

class Tiger implements AnimalInterface {
  function speak() {
    echo "Roar!";
  }
}