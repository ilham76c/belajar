package main

import "fmt"

func main() {
	var name = "ilham"
	var counter = 0

	// closure: sebuah function atau block scope yg bisa berinteraksi dengan scope yg lain
	increment := func() {
		// deklarasi ulang variable agar tidak merubah variable yg ada diluar
		var name = "Jos"
		counter++
		fmt.Println(name,":", counter)
	}

	increment()
	increment()
	fmt.Println(name)
}