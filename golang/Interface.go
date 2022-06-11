package main

import "fmt"

func main() {
	var person Person
	person.Name = "ilham"
	sayHello(person)

	cat := Animal{
		Name: "Widow",
	}
	sayHello(cat)
}

type Person struct {
	Name string
}

func (person Person) GetName() string {
	return person.Name
}

type HasName interface {
	GetName() string
}

func sayHello(hasName HasName) {
	fmt.Println("Hello", hasName.GetName())
}

type Animal struct {
	Name string
}

func (animal Animal) GetName() string {
	return animal.Name
}