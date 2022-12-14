<?php
namespace Singleton;

require 'vendor/autoload.php';

use Singleton\OrderService;
use Singleton\OrderDetailService;

class Singleton {
  public function main() {
    $orderService = new OrderService();
    $orderService->save("0001");

    $orderDetailService = new OrderDetailService();
    $orderDetailService->save("0001", "IndoMie");
    $orderDetailService->save("0001", "MieSedap");
    $orderDetailService->save("0001", "Sarimi");
  }
}

$singleton = new Singleton();
$singleton->main();