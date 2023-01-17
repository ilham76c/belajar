<?php
namespace Facade;

use Facade\Customer;

class CustomerRepository {
  public function save(Customer $customer) {
    echo "Save customer...\n";
  }
}