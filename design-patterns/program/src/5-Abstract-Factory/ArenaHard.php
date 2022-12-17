<?php
namespace AbstractFactory;

use AbstractFactory\ArenaInterface;

class ArenaHard implements ArenaInterface {
  function start() {
    echo "Arena Hard\n";
  }
}