<?php
namespace AbstractFactory;

use AbstractFactory\LevelInterface;

class LevelMedium implements LevelInterface {
  function start() {
    echo "Level Medium\n";
  }
}