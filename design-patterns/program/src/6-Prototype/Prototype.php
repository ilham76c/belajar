<?php
namespace Prototype;

require 'vendor/autoload.php';

use Prototype\Store;

$store = new Store("Toko X", "Jakarta", "Indonesia", "Gadget");

echo $store->getCity()."\n";
print_r($store);

$store2 = $store->clone(); /* prototype pattern */
$store2->setName("Toko Y");
$store2->setCity("Surabaya");
$store2->setCategory("Fashion");
print_r($store2);

$store3 = $store2->clone(); /* prototype pattern */
$store3->setName("Toko Z");
$store3->setCity("Canberra");
$store3->setCountry("Australia");
$store3->setCategory("Food & Beverage");
print_r($store3);
