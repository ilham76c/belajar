package main

import "fmt"

func main() {
	runApp(true)
	fmt.Println("Hello world")
}

func runApp(error bool) {
	// defer function akan tetap dipanggil
	defer endApp()
	if error {
		// panic function biasa dipanggil ketika terjadi error dan ingin aplikasi berhenti
		panic("APLIKASI ERROR")
	}

	fmt.Println("Aplikasi berjalan")
}

func endApp() {
	// function recover berfungsi untuk menangkap data dari function panic
	message := recover()
	fmt.Println("Error Message:", message)
	fmt.Println("Aplikasi selesai")
}