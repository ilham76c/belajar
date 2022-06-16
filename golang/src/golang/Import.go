package main

// run "go mod init <nama root module>" untuk membuat root package agar bisa melakukan local import file
import (
	"fmt"
	"workspace/other"
	"workspace/helper"
)

func main() {
	/* 
		nama function yang di import harus diawali huruf besar,
		jika menggunakan huruf kecil makan akan muncul error "/Import.go:6:9: undefined: helper.sayHello"
	*/
	fmt.Println(helper.SayHello("ilham"))
	fmt.Println(other.FullName())
}