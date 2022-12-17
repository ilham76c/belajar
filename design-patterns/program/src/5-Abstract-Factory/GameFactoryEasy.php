<?php
namespace AbstractFactory;

use AbstractFactory\GameFactoryInterface;
use AbstractFactory\ArenaEasy;
use AbstractFactory\LevelEasy;

class GameFactoryEasy implements GameFactoryInterface {
  function createLevel() {
    return new LevelEasy();
  }

  function createArena() {
    return new ArenaEasy();
  }
}