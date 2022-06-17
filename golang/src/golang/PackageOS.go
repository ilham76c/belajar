/*
	Package OS
	- Package os berisikan fungsionalitas untuk mengakses fitur sistem operasi secara independen (bisa diguanakan di semua sistem operasi)
*/

package main

import (
	"fmt"
	"os"
)

func main() {
	args := os.Args

	// Arguments
	fmt.Println("OS arguments :", args)
	// mengambil data arguments
	fmt.Println("args[1] :", args[1])
	fmt.Println("args[2] :", args[2])
	/*
		Contoh: 
		 - run di terminal "go run PackageOS.go ilham burhanuddin"
		 - Maka output akan seperti dibawah ini:
		 	 	OS arguments : [/tmp/go-build168934999/b001/exe/PackageOS ilham burhanuddin]
	*/

	// Hostname
	// hostname balikannya ada dua yaitu string dan error
	hostname, err := os.Hostname()

	if err == nil {
		fmt.Println("Hostname", hostname)
	} else {
		fmt.Println("Error :", err.Error())
	}

	// env
	username := os.Getenv("USERNAME")
	fmt.Println("Username :", username)

	/*
		Contoh:
			- run di terminal "export CONTOH='ini adalah contoh'"
			- code di file:
				contoh := os.Getenv("CONTOH")
			- output
				CONTOH
	*/
	contoh := os.Getenv("CONTOH")
	fmt.Println(contoh)
}

