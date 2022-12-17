<?php
namespace AbstractFactory;

use AbstractFactory\LevelInterface;

class LevelEasy implements LevelInterface {
  function start() {
    echo "Level Easy\n";
  }
}