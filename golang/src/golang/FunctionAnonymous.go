package main

import "fmt"

type BlackList func(string) bool

func main() {
	blackList := func(name string) bool {
		return name == "Anjing"
	}

	registerUser("Jos", blackList)
	registerUser("Anjing", blackList)
}

func registerUser(name string, blackList BlackList) {
	if blackList(name) {
		fmt.Println("You are blocked", name)
	} else {
		fmt.Println("Welcome", name)
	}
}