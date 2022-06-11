package main

import "fmt"

func main() {
	runApp(0)
}

func runApp(value int) {
	// defer function adalah function yg dieksekusi setelah sebuah function dieksekusi walaupun terjadi error
	defer log()
	fmt.Println("Run application...")
	result := 10 / value

	fmt.Println("Result", result)
}

func log() {
	fmt.Println("Selesai memanggil function")
}