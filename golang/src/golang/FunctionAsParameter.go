package main

import "fmt"

// function type declarations
type Filter func(string) string

func main() {
	// function spamFilter berfungsi seperti callback di javascript
	hello := sayHelloWithFilter("Anjing", spamFilter)
	fmt.Println(hello)

	hello2 := sayHelloWithTypeDeclaration("Anjing", spamFilter)
	fmt.Println(hello2)
}

func sayHelloWithFilter(name string, filter func(string) string) string {
	nameFiltered := filter(name)
	return nameFiltered
}

func sayHelloWithTypeDeclaration(name string, filter Filter) string {
	nameFiltered := filter(name)
	return nameFiltered
}

func spamFilter(name string) string {
	if name == "Anjing" {
		return "...."
	} else {
		return name
	}
}
