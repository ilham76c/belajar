package main

import "fmt"

func main() {
	// constant tidak seperti var yg akan dikomplain/error ketika tidak digunakan
	// deklarasi constant harus langsung assign data jika tidak maka akan error
	const firstName string = "Moh. Ilham"
	const lastName = "Burhanuddin"

	fmt.Println(firstName)	
	fmt.Println(lastName)

	// deklarasi multiple constant
	const (
		nama = "ilham"
		alamat = "Bangkalan"
	)
	fmt.Println(nama)
	fmt.Println(alamat)
}