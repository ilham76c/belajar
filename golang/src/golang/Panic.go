package main

import "fmt"

func main() {
	runApp(true)

	// jika terjadi panic code berikutnya tidak akan di eksekusi
	fmt.Println("Hello world")
}

func runApp(error bool) {
	// defer function akan tetap dipanggil
	defer endApp()
	if error {
		// panic function biasa dipanggil ketika terjadi error
		// sama seperti throw error di javasript
		panic("APLIKASI ERROR")
	}

	fmt.Println("Aplikasi berjalan")
}

func endApp() {
	fmt.Println("Aplikasi selesai")
}