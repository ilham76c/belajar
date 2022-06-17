package main

import (
	"fmt"
	"strings"
)

func main() {
	var name = " Moh. ilham B. "

	fmt.Println(strings.Contains(name, "ilham"))
	fmt.Println(strings.Split(name, " "))
	fmt.Println(strings.ToLower(name))
	fmt.Println(strings.ToUpper(name))
	fmt.Println(strings.ToTitle(name))
	fmt.Println(strings.Trim(name, " "))
	fmt.Println(strings.ReplaceAll(name, " ", "-"))
}