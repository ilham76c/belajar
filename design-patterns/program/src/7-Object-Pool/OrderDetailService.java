package belajar.designpattern.objectpool;

import belajar.designpattern.objectpool.DatabasePool;

public class OrderDetailService {
    public void save(String orderId, String product) {
        Connection connection = DatabasePool.getConnection();
        connection.sql("INSERT INTO order_details ...");
        DatabasePool.close(connection);
    }
}