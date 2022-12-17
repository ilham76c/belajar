<?php
namespace AbstractFactory;

use AbstractFactory\LevelInterface;

class LevelHard implements LevelInterface {
  function start() {
    echo "Level Hard\n";
  }
}