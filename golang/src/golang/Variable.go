package main

import "fmt"

func main() {
	// golang hanya dapat melakukan assign ulang data dengan type sama dengan data sebelumnya
	var name string // jika tidak langsung melakukan assign data maka type data harus didefinisikan
	name = "Moh. Ilham Burhanuddin"
	fmt.Println(name)
	
	//name = true // akan muncul error: cannot use true (untyped bool constant) as string value in assignment

	// var tidak wajib jika deklarasi awal menggunakan titik (:) dan langsung melakukan assign data
	alamat := "Bangkalan"
	fmt.Println(alamat)

	// deklarasi multiple variable
	var (
		firstName = "Moh. Ilham"
		lastName = "Burhanuddin"
	)
	fmt.Println(firstName)
	fmt.Println(lastName)
}