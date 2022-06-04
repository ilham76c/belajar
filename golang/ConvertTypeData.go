package main

import "fmt"

func main() {
	var nilai32 int32 = 150
	var nilai64 int64 = int64(nilai32)

	// nilai berubah jika nilai mencapai limit maksimum dan default ke batas akhir type data
	// maksimum int8 adalah 127
	var nilai8 int8 = int8(nilai32)
	
	fmt.Println(nilai32)
	fmt.Println(nilai64)
	fmt.Println(nilai8)

	var name = "Moh. Ilham"
	// jika mengambil karakter dari string, return nya bertype byte dari karakter yg diambil
	var e byte = name[0]
	var eString = string(e)
	fmt.Println(name)
	fmt.Println(e)
	fmt.Println(eString)
}