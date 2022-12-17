<?php
namespace AbstractFactory;

interface GameFactoryInterface {
  function createLevel();
  function createArena();
}