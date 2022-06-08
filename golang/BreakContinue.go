package main

import "fmt"

func main() {
	for i := 1; i <= 5; i++ {
	
		if i % 2 == 1 {
			// continue berfungsi skip code setelah continue dan lanjut ke perulangan berikutnya
			continue
		}

		if i == 5 {
			// break berfungsi untuk menghentikan perulangan
			break
		}

		fmt.Println("index -", i)
	}
}