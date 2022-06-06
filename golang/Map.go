package main

import "fmt"

func main() {
	person := map[string]string{
		"name": "ilham",
		"address": "Bangkalan",
	}

	person["age"] = "24"
	fmt.Println(person)
	fmt.Println(person["name"])

	var book map[string]string = make(map[string]string)
	book["title"] = "Atomic Habbit"
	book["author"] = "Tes"

	fmt.Println(book)
	delete(book, "author")
	fmt.Println(book)
}