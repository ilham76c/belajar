<?php
namespace AbstractFactory;

use AbstractFactory\GameFactoryInterface;
use AbstractFactory\ArenaMedium;
use AbstractFactory\LevelMedium;

class GameFactoryMedium implements GameFactoryInterface {
  function createLevel() {
    return new LevelMedium();
  }

  function createArena() {
    return new ArenaMedium();
  }
}