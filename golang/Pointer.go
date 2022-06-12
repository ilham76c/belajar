package main

import "fmt"

type Address struct {
	City, Privince, Country string
}

func main() {
	/* 
		di golang ketika kita melakukan assign data dari variable satu ke variable lainnya,
		data akan di duplicate lalu di assign (pass by value),
		sehingga ketika kita mengubah data di variable kedua, 
		maka data variable pertama tidak akan berubah (bukan pass by reference)
	*/
	address1 := Address{"Surabaya", "Jawa Timur", "Indonesia"}

	// pass by value
	address2 := address1
	address2.City = "Jakarta"
	fmt.Println("address2", address2, "address1", address1)

	// pass by reference (pointer), dengan menambahkan karakter (&) di depan variable
	address3 := &address1
	address3.City = "Jakarta"
	fmt.Println("address3", address3, "address1", address1)

	// operator bintang (*), mengubah semua yg mengacu pada memory yg sama
	var address4 Address = Address{"Jogja", "Jawa Tengah", "Indonesia"}
	var address5 *Address = &address4
	var address6 *Address = &address4
	// variable address4 dan address5 akan berubah jika menggunakan operator bintang
	*address6 = Address{"Bandung", "Jawa Barat", "Indonesia"}

	// value di variable address4 dan address5 akan sama dengan value pada variable address6
	fmt.Println(address4)
	fmt.Println(address5)
	fmt.Println(address6)

	// function new berfungsi untuk membuat pointer dengan data kosong
	var alamat *Address = new(Address)
	alamat.City = "Sumenep"
	fmt.Println(alamat)
}