<?php
namespace Prototype;

class Store {
  /**
   * @var Name
   */
  private $name;

  /**
   * @var City
   */
  private $city;

  /**
   * @var Country
   */
  private $country;

  /**
   * @var Category
   */
  private $category;

  public function __construct(string $name, string $city, string $country, string $category) {
    $this->name = $name;
    $this->city = $city;
    $this->country = $country;
    $this->category = $category;
  }

  /**
   * @return mixed
   */
  public function getName(): string {
    return $this->name;
  }

  /**
   * @param mixed $name
   * @return Store
   */
  public function setName(string $name): Store {
    $this->name = $name;
    return $this;
  }

  /**
   * @return mixed
   */
  public function getCity(): string {
    return $this->city;
  }

  /**
   * @param mixed $city
   * @return Store
   */
  public function setCity(string $city): Store {
    $this->city = $city;
    return $this;
  }

  /**
   * @return mixed
   */
  public function getCountry(): string {
    return $this->country;
  }

  /**
   * @param mixed $country
   * @return Store
   */
  public function setCountry(string $country): Store {
    $this->country = $country;
    return $this;
  }

  /**
   * @return mixed
   */
  public function getCategory(): string {
    return $this->category;
  }

  /**
   * @param mixed $category
   * @return Store
   */
  public function setCategory(string $category): Store {
    $this->category = $category;
    return $this;
  }

  public function clone(): Store {
    // clone dengan memanfaatkan built-in function
    return clone $this;

    // clone secara manual
    /* return new Store(
      $this->name,
      $this->city,
      $this->country,
      $this->category
     ); */
  }
}