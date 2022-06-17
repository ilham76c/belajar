/*
	Black Identifier
	- Kadang kita hanya inging menjalankan init function di package tanpa harus mengeksekusi dalah satu function yang ada di package
	- Secara default, Go-Lang akan komplain ketika ada package yg di import namun tidak digunakan
	- Untuk menangani hal tersebut, kita bisa menggunakan Blank Identifier (_) sebelum nama package ketika melakukan import
*/

package main

import (
	"fmt"
	_ "workspace/database"
)

func main() {
	fmt.Println("tes")
}
