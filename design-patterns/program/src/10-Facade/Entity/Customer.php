<?php
namespace Facade;

class Customer {
  private string $id;

  private string $name;

  private array $addresses = [];

  public function __construct(string $id, string $name) {
    $this->id = $id;
    $this->name = $name;
  }

  public function getId(): string {
    return $this->id;
  }

  public function setId(string $id) {
    $this->id = $id;
  }

  public function getName(): string {
    return $this->name;
  }

  public function setName(string $name) {
    $this->name = $name;
  }

  public function getAddresses(): array {
    return $this->addresses;
  }

  public function setAddresses(array $addresses) {
    $this->addresses = $addresses;
  }
}