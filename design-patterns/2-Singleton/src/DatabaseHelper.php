<?php
namespace Singleton;

use Singleton\Connection;

class DatabaseHelper {
  private static $connection = null;
  
  public static function getConnection() {
    if (self::$connection === null) {
      self::$connection = new Connection("localhost", "root", "root");
    }

    return self::$connection;
  }
}