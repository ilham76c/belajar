/*
	Package Initialization
	- Saat kita mambuat package, kita bisa membuat sebuah function yang akan diakses ketika package kita diakses
	- Ini sangat cocok ketika berisi function-function untuk berkomunikasi dengan database,
		kita membuat function inisialisasi untuk membuat koneksi dengan database
	- Untuk membuat function yang diakses secara otomatis ketika package diakses,
		kita cukup membuat function dengan nama init.
*/

package main

import (
	"fmt"
	"workspace/database"
)

func main() {
	fmt.Println(database.GetDatabase())
}