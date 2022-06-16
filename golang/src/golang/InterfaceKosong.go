package main

import "fmt"

func main() {
	// interface kosong digunakan ketika ingin sebuah parameter bisa menerima type data apapun
	var data1 interface{} = Ups(1)
	fmt.Println("data", data1)

	var data2 interface{} = Ups(8)
	fmt.Println("data", data2)
}

func Ups(i int) interface{} {
	if i == 1 {
		return true
	} else if i < 0 {
		return i
	} else {
		return "Ups"
	}
}