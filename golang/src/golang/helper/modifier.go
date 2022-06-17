package helper

var version = "1.0.0" // tidak bisa diakses dari package lain
var Application = "Belajar Golang" // bisa diakses dari package lain

// tidak bisa diakses dari package lain
func sayGoodBye(name string) string {
	return "Good by " + name
}

// bisa diakses dari package lain
func SayGoodBye(name string) string {
	return "Good by " + name
}
