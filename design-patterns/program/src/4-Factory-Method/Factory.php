<?php
namespace Factory;

require 'vendor/autoload.php';

use Factory\EmployeeFactory;
use Factory\AnimalFactory;

$manager = EmployeeFactory::createManager("Moh. Ilham Burhanuddin");
print_r($manager);
echo "Name: ".$manager->getName()."\n";
echo "Position: ".$manager->getPosition()."\n";
echo "Salary: ".$manager->getSalary()."\n";

$staff = EmployeeFactory::createStaff("Yasmin");
print_r($staff);

echo "\n";

$tiger = AnimalFactory::create('tiger');
print_r($tiger);

$cat = AnimalFactory::create('cat');
print_r($cat);

$dog = AnimalFactory::create('dog');
print_r($dog);

echo "\n";
$dog->speak();
echo "\n";
