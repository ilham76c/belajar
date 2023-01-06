<?php
namespace ObjectPool;

use ObjectPool\DatabasePool;

class OrderService {
    public function save() {
        try {
            $pool = new DatabasePool();
            $connection1 = $pool::getConnection();
            $connection1->sql("INSERT INTO TBL_ORDER...0001");

            $connection2 = $pool::getConnection();
            $connection2->sql("INSERT INTO TBL_ORDER...0002");

            $connection3 = $pool::getConnection();
            $connection3->sql("INSERT INTO TBL_ORDER...0003");

            $connection4 = $pool::getConnection();
            $connection4->sql("INSERT INTO TBL_ORDER...0004");

            $connection5 = $pool::getConnection();
            $connection5->sql("INSERT INTO TBL_ORDER...0005");

            DatabasePool::close($connection5);

            $connection6 = $pool::getConnection();
            $connection6->sql("INSERT INTO TBL_ORDER...0006"); /* jika tidak ada connection yang di close maka akan error, karena pool hanya berisi 5 connection */
        } catch (\Exception $e) {
            echo $e->getMessage();
        }
    }
}