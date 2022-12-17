<?php
namespace AbstractFactory;

use AbstractFactory\GameFactoryInterface;
use AbstractFactory\ArenaHard;
use AbstractFactory\LevelHard;

class GameFactoryHard implements GameFactoryInterface {
  function createLevel() {
    return new LevelHard();
  }

  function createArena() {
    return new ArenaHard();
  }
}