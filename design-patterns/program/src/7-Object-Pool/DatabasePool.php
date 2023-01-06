<?php
namespace ObjectPool;

use ObjectPool\Connection;

class DatabasePool {
    /**
     * @var Pool
     */
    private static $pool = array();

    public function __construct() {
        for ($i = 0; $i < 5; $i++) { 
            $connection = new Connection("localhost", "root", "root");
            array_push(self::$pool, $connection);
        }
    }

    public static function getConnection(): Connection {
        try {
            if (count(self::$pool) === 0) {
                throw new \Exception("Pool connection is Empty!");
            } else {
                return array_shift(self::$pool);
            }
        } catch (\Exception $e) {
            echo $e->getMessage();
        }
    }

    public static function close(Connection $connection) {
        array_push(self::$pool, $connection);
    }
}