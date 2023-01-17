<?php
namespace Facade;

use Facade\Address;

class AddressRepository {
  public function save(Address $address) {
    echo "Save address...\n";
  }
}