package main

import "fmt"

func main() {
	fmt.Println(factorialLoop(5))
	fmt.Println(factorialRec(5))
}

// menghitung nilai factorial menggunakan looping
func factorialLoop(number int) int {
	result := 1
	for i := number; i > 0; i-- {
		result *= i
	}
	return result
}

// menghitung nilai factorial menggunakan recursive function
func factorialRec(number int) int {
	if number == 1 {
		return 1
	} else {
		return number * factorialRec(number - 1)
	}
}