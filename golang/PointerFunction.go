package main

import "fmt"

type Address struct {
	City, Privince, Country string
}

func main() {
	var alamat1 = Address{"Bangkalan", "Jawa Timur", "Indonesia"}
	changeCountry1(alamat1, "Singapura")
	fmt.Println(alamat1)

	var alamat2 = Address{"Bangkalan", "Jawa Timur", "Indonesia"}
	// tambah karakter (&) untuk menjadikan variable sebagai pointer
	changeCountry2(&alamat2, "Belanda")
	fmt.Println(alamat2)
}

// function tidak akan mengubah data address, karena variable address merupakan pass by value
func changeCountry1(address Address, country string) {
	address.Country = country
}

// tambah karakter bintang (*) untuk membuat variable menjadi pointer atau pass by reference
// function akan mengubah data address
func changeCountry2(address *Address, country string) {
	address.Country = country
}