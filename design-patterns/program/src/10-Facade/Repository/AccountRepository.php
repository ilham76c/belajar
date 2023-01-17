<?php
namespace Facade;

use Facade\Account;

class AccountRepository {
  // set 'public' hanya untuk testing
  public static array $listAccount = [];

  public function __construct() {
    $account1 = new Account("0001", 500000);
    $account2 = new Account("0002", 250000);
    $account3 = new Account("0003", 0);

    $this->create($account1);
    $this->create($account2);
    $this->create($account3);
  }

  public function create(Account $account) {
    array_push(self::$listAccount, $account);
  }

  public function findById(string $no) {
    foreach (self::$listAccount as $account) {
      if ($account->getNo() === $no) {
        return $account;
      }
    }

    return null;
  }

  public function update(Account $accountChanged) {
    foreach (self::$listAccount as $index => $account) {
      if ($account->getNo() === $accountChanged->getNo()) {
        self::$listAccount[$index] = $accountChanged;    

        echo "Account updated...\n";
        return $accountChanged;
      }
    }

    echo "No account updated...\n";
    return null;
  }
}