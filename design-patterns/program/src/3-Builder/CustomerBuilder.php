<?php
namespace Builder;

use Builder\Customer;

class CustomerBuilder {
   /**
   * @var string
   */
  private $id;

  /**
   * @var string
   */
  private $firstName = "";

  /**
   * @var string
   */
  private $lastName = "";

  /**
   * @var string
   */
  private $email = "";

  /**
   * @var string
   */
  private $phone = "";

  /**
   * @param mixed $id
   */
  public function setId($id) {
    $this->id = $id;
    return $this;
  }

  /**
   * @param mixed $firstName
   */
  public function setFirstName($firstName) {
    $this->firstName = $firstName;
    return $this;
  }

   /**
   * @param mixed $lastName
   */
  public function setLastName($lastName) {
    $this->lastName = $lastName;
    return $this;
  }

   /**
   * @param mixed $email
   */
  public function setEmail($email) {
    $this->email = $email;
    return $this;
  }

   /**
   * @param mixed $phone
   */
  public function setPhone($phone) {
    $this->phone = $phone;
    return $this;
  }

  public function build() {
    return new Customer(
      $this->id,
      $this->firstName,
      $this->lastName,
      $this->email,
      $this->phone 
    );
  }
}