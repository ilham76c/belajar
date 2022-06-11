package main

import "fmt"

func main() {
	runApp(true)
}

func runApp(error bool) {
	// defer function akan tetap dipanggil
	defer endApp()
	if error {
		// panic function biasa dipanggil ketika terjadi error dan ingin aplikasi berhenti
		panic("APLIKASI ERROR")
	}
}

func endApp() {
	fmt.Println("Aplikasi selesai")
}