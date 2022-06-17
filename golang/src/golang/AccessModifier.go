/*
	Di golang, untuk menentukan access modifier cukup dengan nama function atau variable.
	Jika namanya diawali huruf besar, maka artinya bisa diakses dari package lain,
	Jika diawali dengan huruf kecil, artinya tidak bisa diakses dari package lain.
*/

package main

import (
	"fmt"
	"workspace/helper"
)

func main() {
	fmt.Println(helper.Application)
	fmt.Println(helper.SayGoodBye("ilham")) // tidak error jika function diawali huruf besar karena merupakan public
	//fmt.Println(helper.sayGoodBye("ilham")) // error karena function yg diawali huruf kecil merupakan private
}