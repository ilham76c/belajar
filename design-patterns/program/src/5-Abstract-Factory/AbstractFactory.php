<?php
namespace AbstractFactory;

require 'vendor/autoload.php';

use AbstractFactory\Game;
use AbstractFactory\GameFactoryEasy;
use AbstractFactory\GameFactoryMedium;
use AbstractFactory\GameFactoryHard;

$gameEasy = new Game(new GameFactoryEasy());
$gameEasy->start();

$gameMedium = new Game(new GameFactoryMedium());
$gameMedium->start();

$gameHard = new Game(new GameFactoryHard());
$gameHard->start();