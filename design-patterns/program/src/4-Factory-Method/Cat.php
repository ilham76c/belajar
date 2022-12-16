<?php
namespace Factory;

use Factory\AnimalInterface;

class Cat implements AnimalInterface {
  function speak() {
    echo "Meong..";
  }
}