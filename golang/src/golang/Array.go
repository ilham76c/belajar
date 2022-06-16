package main

import "fmt"

func main() {
	// di golang panjang array bersifat fixed, sesuai dengan panjang saat di deklarasikan yaitu 3
	// jadi jika kita melakukan assign dengan nilai index 3, maka akan muncul error
	var colors [3]string
	colors[0] = "Red"
	colors[1] = "Green"
	colors[2] = "Blue"
	
	fmt.Println(colors[0])
	fmt.Println(colors[1])
	fmt.Println(colors[2])

	// deklarasi array dengan values
	var name = [5]string {"Moh.", "Ilham", "Burhanuddin"}
	fmt.Println(name)

	// function len() berfungsi untuk menghitung panjang array dan bukan jumlah data pada array
	fmt.Println("Panjang array name = ", len(name))
}