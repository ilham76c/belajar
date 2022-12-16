<?php
namespace Factory;

use Factory\Employee;

class EmployeeFactory {
  public static function createManager($name) {
    return new Employee($name, "Manager", 15000000);
  }
  public static function createStaff($name) {
    return new Employee($name, "Staff", 6000000);
  }
}