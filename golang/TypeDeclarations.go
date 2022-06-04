package main

import "fmt"

func main() {
	// type declaration adalah membuat data baru menggunakan type data yg sudah ada
	type telepon string

	var noTelepon telepon = "08787682211"
	fmt.Println(noTelepon)
}