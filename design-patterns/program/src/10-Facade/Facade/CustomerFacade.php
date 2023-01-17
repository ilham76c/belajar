<?php
namespace Facade;

use Facade\CustomerRepository;
use Facade\AddressRepository;
use Facade\Customer;

class CustomerFacade {
  private CustomerRepository $customerRepository;

  private AddressRepository $addressRepository;

  public function __construct() {
    $this->customerRepository = new CustomerRepository();
    $this->addressRepository = new AddressRepository();
  }

  public function save(Customer $customer) {
    $this->customerRepository->save($customer);

    foreach ($customer->getAddresses() as $address) {
      $this->addressRepository->save($address);
    }
  }
}