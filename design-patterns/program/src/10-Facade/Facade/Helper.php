<?php
namespace Facade;

use Facade\Customer;

class Helper {
  public function toJSON(Customer $customer) {
    $addresses = array_map(function($address) {
      return $address->getStreet().", ".$address->getCountry();
    }, $customer->getAddresses());

    $json = json_encode([
      "id" => $customer->getId(),
      "name" => $customer->getName(),
      "addresses" => $addresses
    ], JSON_PRETTY_PRINT);

    return $json;
  }
}