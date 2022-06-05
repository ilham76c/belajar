package main

import "fmt"

func main() {
	fmt.Println(10 > 5 && 1 > 6)
	fmt.Println(10 > 5 || 1 > 6)
	fmt.Println(!(1 == 1))
}