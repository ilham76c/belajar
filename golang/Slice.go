package main

import "fmt"

func main() {
	// array
	var months = [...]string{
		"Januari",
		"Februari",
		"Maret",
		"April",
		"Mei",
		"Juni",
		"Juli",
		"Agustus",
		"September",
		"Oktober",
		"November",
		"Desember",
	}

	// slice
	var slice1 = months[4:7]
	fmt.Println(slice1)
	
	// panjang slice 3 karena index dimulai dari 4 dan bekahir di 6
	fmt.Println(len(slice1))

	// panjang kapasitas 8 karena index 4 (Mei) ke index terakhir (Desember)
	fmt.Println(cap(slice1))

	// mengubah nilai slice juga akan mengubah nilai array
	slice1[0] = "Tes"
	fmt.Println(months)

	// slice
	var slice2 = months[10:]
	fmt.Println(slice2)

	// append: jika kapasitas array tidak muat maka slice akan membuat array baru,
	// jika masih muat maka index yg existing akan di replace
	var slice3 = append(slice2, "Ilham")
	fmt.Println(slice3)

	// make: membuat slice
	var slice4 = make([]string, 2, 2)
	slice4[0] = "Moh."
	slice4[1] = "Ilham"
	fmt.Println(slice4)

	// copy: copy slice ke variable baru
	// ketika copy len dan capacity harus sama agar data tidak terpotong
	var copyslice4 = make([]string, len(slice4), cap(slice4))
	copy(copyslice4, slice4)
	fmt.Println(copyslice4)

	// jika di dalam kurun [] tidak mendifiniskan angka atau titik tiga (...) maka akan menjadi slice dan bukan array
	var iniArray = [...]int{1,2,3,4,5}
	var iniSlice = []int{1,2,3,4,5}
	fmt.Println(iniArray)
	fmt.Println(iniSlice)
}