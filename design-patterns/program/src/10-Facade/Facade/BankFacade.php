<?php
namespace Facade;

use Facade\AccountRepository;

class BankFacade {
  private AccountRepository $accountRepository;

  public function __construct() {
    $this->accountRepository = new AccountRepository();
  }

  public function transfer(string $fromAccountNo, string $toAccountNo, float $amount) {
    $account1 = $this->accountRepository->findById($fromAccountNo);
    $account2 = $this->accountRepository->findById($toAccountNo);

    /* transfer 1.000.000 from account1 to account2 */
    $account1->setBalance($account1->getBalance() - $amount);
    $account2->setBalance($account2->getBalance() + $amount);

    $this->accountRepository->update($account1);
    $this->accountRepository->update($account2);
  }
}