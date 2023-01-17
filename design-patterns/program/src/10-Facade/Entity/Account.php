<?php
namespace Facade;

class Account {
  private string $no;

  private float $balance;

  public function __construct(string $no, float $balance) {
    $this->no = $no;
    $this->balance = $balance;
  }

  public function getNo(): string {
    return $this->no;
  }

  public function setNo() {
    $this->no = $no;
  }

  public function getBalance(): float {
    return $this->balance;
  }

  public function setBalance(float $balance) {
    $this->balance = $balance;
  }
}