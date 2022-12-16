<?php
namespace Factory;

class Employee {
  private $name;

  private $position;

  private $salary;

  public function __construct($name, $position, $salary) {
    $this->name = $name;
    $this->position = $position;
    $this->salary = $salary;
  }

  public function getName() {
    return $this->name;
  }

  public function getPosition() {
    return $this->position;
  }

  public function getSalary() {
    return $this->salary;
  }
}
