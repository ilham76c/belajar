package main

import "fmt"

func main() {
	sayHello("ilham")
	fmt.Println(evenOdd(5))

	firstName, lastName := getFullName()
	fmt.Println(firstName, lastName)

	// jika salah satu variable tidak digunakan ganti dengan underscore (_)
	name, _ := getFullName()
	fmt.Println(name)

	firt, middle, last := getCompleteName()
	fmt.Println(firt, middle, last)
}

func sayHello(name string) {
	fmt.Println("Hello", name)
}

func evenOdd(number int) string {
	if number % 2 == 0 {
		return "Number is even"
	}
	return "Number is odd"
}

// return multiple values
func getFullName() (string, string) {
	return "Moh. Ilham", "Burhanuddin"
}

// named return values
// jika return type sama, type bisa hanya diberikan pada parameter terakhir
func getCompleteName() (firstName, middleName, lastName string) {
	firstName = "Moh."
	middleName = "Ilham"
	lastName = "Burhanuddin"
	
	return
}