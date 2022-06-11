package main

import "fmt"

func main() {
	// Nil: nilai nil bisa digunakan di beberapa type data seperti interface, function map, slice, pointer dan channel

	// contoh 1
	person1 := NewMap("")
	fmt.Println(person1)

	person2 := NewMap("ilham")
	fmt.Println(person2)

	// contoh 2
	var person map[string]string = NewMap("")

	if person == nil {
		fmt.Println("data kosong")
	} else {
		fmt.Println(person)
	}

	var person4 map[string]string = NewMap("jos")

	if person4 == nil {
		fmt.Println("data kosong")
	} else {
		fmt.Println(person4)
	}
}

func NewMap(name string) map[string]string {
	if name == "" {
		return nil
	} else {
		return map[string]string {
			"name": name,
		}
	}
}