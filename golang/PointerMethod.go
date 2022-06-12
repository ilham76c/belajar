package main

import "fmt"

type Man struct {
	Name string
}

func main() {
	result1 := Man{"ilham"}
	result1.Married1()

	fmt.Println(result1.Name)

	result2 := Man{"jos"}
	result2.Married2()

	fmt.Println(result2.Name)
}

// pass by value
func (man Man) Married1() {
	man.Name = "Mr. " + man.Name
}

// pass by reference
func (man *Man) Married2() {
	man.Name = "Mr. " + man.Name
}