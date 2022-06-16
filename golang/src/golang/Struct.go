package main

import "fmt"

type Customer struct {
	Name, Address string
	Age int
}

func main() {
	// cara 1
	var customer1 Customer

	customer1.Name = "ilham"
	customer1.Address = "Indonesia"
	customer1.Age = 25
	// memanggil struct method
	customer1.sayHello("Moh. Ilham")
	
	fmt.Println(customer1)

	// cara 1
	customer2 := Customer{
		Name: "jos",
		Address: "Jakarta",
		Age: 23,
	}

	fmt.Println(customer2)

	// cara 3
	customer3 := Customer{"Yrav", "Malang", 21} // bergantung dengan posisi struct

	fmt.Println(customer3)
}

// struct method
func (customer Customer) sayHello(name string) {
	fmt.Println("Hello", name)
}