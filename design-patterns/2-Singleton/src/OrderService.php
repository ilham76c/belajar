<?php
namespace Singleton;
use Singleton\DatabaseHelper;

class OrderService {
  public function save($orderId) {
    DatabaseHelper::getConnection()->sql("INSERT INTO TBL_ORDER...".$orderId);
  }
}