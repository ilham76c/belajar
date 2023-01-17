<?php
namespace Facade;

class Address {
  private string $id;

  private string $street;

  private string $country;

  public function __construct(string $id, string $street, string $country) {
    $this->id = $id;
    $this->street = $street;
    $this->country = $country;
  }

  public function getId(): string {
    return $this->id;
  }

  public function setId(string $id) {
    $this->id = $id;
  }

  public function getStreet(): string {
    return $this->street;
  }

  public function setStreet(string $street) {
    $this->street = $street;
  }

  public function getCountry(): string {
    return $this->country;
  }

  public function setCountry(string $country) {
    $this->country = $country;
  }
}