<?php
namespace Singleton;
use Singleton\DatabaseHelper;

class OrderDetailService {
  public function save($orderId, $detail) {
    DatabaseHelper::getConnection()->sql("INSERT INTO TBL_ORDER_DETAILS...".$orderId."-".$detail);
  }
}