<?php
namespace AbstractFactory;

class Game {
  /**
   * @var Level
   */
  private $level;

  /**
   * @var Arena
   */
  private $arena;

  public function __construct($gameFactory) {
    $this->level = $gameFactory->createLevel();
    $this->arena = $gameFactory->createArena();
  }

  public function start() {
    $this->level->start();
    $this->arena->start();
  }
}