<?php
namespace Facade;

require 'vendor/autoload.php';

use Facade\Customer;
use Facade\Address;
use Facade\Account;

use Facade\CustomerFacade;
use Facade\BankFacade;
use Facade\Helper;

use Facade\AccountRepository;

class Main {
  public function run() {
    /* Contoh 1 */
    $customer = new Customer("1", "Moh. Ilham B.");

    $address1 = new Address("1", "Jl. Raya Sepulu", "Indonesia");
    $address2 = new Address("1", "Jl. Raya Klampis", "Indonesia");

    $customer->setAddresses([$address1, $address2]);

    $customerFacade = new CustomerFacade();
    $customerFacade->save($customer);

    
    /* Contoh 2 */
    $bankFacade = new BankFacade();

    echo "Before Tranfer: ";
    print_r(AccountRepository::$listAccount);

    $bankFacade->transfer("0001", "0002", 100000);

    $bankFacade->transfer("0001", "0003", 150000);

    echo "After Tranfer: ";
    print_r(AccountRepository::$listAccount);

    /* Contoh 3 */
    $helper = new Helper();

    print_r($customer);
    echo $helper->toJSON($customer);
  }
}

$main = new Main();
$main->run();