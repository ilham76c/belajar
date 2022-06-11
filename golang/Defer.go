package main

import "fmt"

func main() {
	runApp(0)
}

func runApp(value int) {
	// function log akan tetap dijalankan walaupun terjadi error
	defer log()
	fmt.Println("Run application...")
	result := 10 / value

	fmt.Println("Result", result)
}

func log() {
	fmt.Println("Selesai memanggil function")
}