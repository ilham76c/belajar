// mengubah tipe return value dari function bertype interface kosong
// jika type assertions dikonversi ke type yg salah maka akan terjadi panic

package main

import "fmt"

func main() {
	var result interface{} = random()
	// konversi type data menggunakan type assertions
	var resultToString string = result.(string)

	fmt.Println(resultToString)

	// mengecek return type menggunakan switch statement
	var result2 interface{} = random2()
	switch result2.(type) {
	case string:
		fmt.Println("Value", result2, "is string")
	case int:
		fmt.Println("Value", result2, "is integer")
	case bool:
		fmt.Println("Value", result2, "is boolean")
	}
}

func random() interface{} {
	return "Ups"
}

func random2() interface{} {
	return true
}