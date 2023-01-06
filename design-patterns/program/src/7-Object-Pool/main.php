<?php
namespace ObjectPool;

require 'vendor/autoload.php';

use ObjectPool\OrderService;

$orderService = new OrderService();
$orderService->save();