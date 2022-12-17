<?php
namespace AbstractFactory;

use AbstractFactory\ArenaInterface;

class ArenaMedium implements ArenaInterface {
  function start() {
    echo "Arena Medium\n";
  }
}