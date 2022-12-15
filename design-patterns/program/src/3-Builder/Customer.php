<?php
namespace Builder;

class Customer {
  /**
   * @var string
   */
  private $id;

  /**
   * @var string
   */
  private $firstName;

  /**
   * @var string
   */
  private $lastName;

  /**
   * @var string
   */
  private $email;

  /**
   * @var string
   */
  private $phone;

  /**
   * Customer constructor
   * @param string $id
   * @param string $firstName
   * @param string $lastName
   * @param string $email
   * @param string $phone
   */

  public function __construct($id, $firstName, $lastName, $email, $phone) {
    $this->id = $id;
    $this->firstName = $firstName;
    $this->lastName = $lastName;
    $this->email = $email;
    $this->phone = $phone;
  }

  /**
   * @return mixed
   */
  public function getId() {
    return $this->id;
  }

  /**
   * @param mixed $id
   */
  public function setId($id) {
    $this->id = $id;
  }

  /**
   * @return mixed
   */
  public function getFullName() {
    return $this->firstName." ".$this->lastName;
  }
}