<?php
namespace Factory;

use Factory\Tiger;
use Factory\Cat;
use Factory\Dog;

class AnimalFactory {
  public static function create($type) {
    switch ($type) {
      case 'tiger':
        return new Tiger();
        break;
      case 'cat':
        return new Cat();
        break;
      case 'dog':
        return new Dog();
        break;
      default:
        # code...
        break;
    }
  }
}