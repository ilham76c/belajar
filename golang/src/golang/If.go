package main

import "fmt"

func main() {
	var name = "ilham"

	if name != "" {
		fmt.Println("Hai", name)
	} else if name == "tes" {
		fmt.Println("Testing")
	} else {
		fmt.Println("Name is empty")
	}

	if length := len(name); length > 0 {
		fmt.Println("Panjang name : ", len(name))
	} else {
		fmt.Println("Nama kosong!")
	}
}