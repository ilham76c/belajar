<?php
namespace AbstractFactory;

use AbstractFactory\ArenaInterface;

class ArenaEasy implements ArenaInterface {
  function start() {
    echo "Arena Easy\n";
  }
}