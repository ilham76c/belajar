package main

import "fmt"

func main() {
	fmt.Println("Moh. Ilham Burhanuddin") // type data string harus menggunakan petik dua ("")

	// built-in function untuk string
	fmt.Println("panjang string = ", len("Moh. Ilham Burhanuddin")) // menghitung jumlah karakter pada string
	fmt.Println("Moh. Ilham Burhanuddin"[0]) // mengambil karakter ke-0 dan return berupa byte karakter dan bukan string
}