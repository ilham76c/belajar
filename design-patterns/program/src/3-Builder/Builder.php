<?php
namespace Builder;

require 'vendor/autoload.php';

use Builder\CustomerBuilder;

$customer = (new CustomerBuilder())
  ->setId("1")
  ->setFirstName("Moh. Ilham")
  ->setLastName("Burhanuddin")
  ->setEmail("ilham@mail.com")
  ->setPhone("085312234")
  ->build();

print_r($customer);
echo "ID: ".$customer->getId()."\n";
echo "Full Name: ".$customer->getFullName()."\n";

$customer2 = (new CustomerBuilder())
  ->setId("1")
  ->setFirstName("Moh. Ilham")
  ->setLastName("Burhanuddin")
  ->build();

print_r($customer2);