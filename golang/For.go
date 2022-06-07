package main

import "fmt"

func main() {
	counter := 1

	// sama seperti while di javascript
	for counter <= 5 {
		fmt.Println("interasi ke -", counter)
		counter++
	}

	slice := []string{"Red", "Green", "Blue"}
	// sama seperti for di javascript
	for i := 0; i < len(slice); i++ {
		fmt.Println("index ke -", i, ":", slice[i])
	}

	// sama seperti foreach atau map di javascript
	for index, value := range slice {
		fmt.Println("index =", index, "value=", value)
	}

	// jika variable tidak digunakan bisa diganti dengan underscore (_) agar tidak error
	for _, value := range slice {
		fmt.Println("value=", value)
	}

	person := make(map[string]string)
	person["name"] = "ilham"
	person["age"] = "24"

	for _, value := range person {
		fmt.Println("person=", value)
	}
}