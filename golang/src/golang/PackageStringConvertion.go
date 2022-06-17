package main

import (
	"fmt"
	"strconv"
)

func main() {
	boolean, err := strconv.ParseBool("true")

	if err == nil {
		fmt.Println(boolean)
	} else {
		fmt.Println("Error :", err.Error())
	}

	number, err := strconv.ParseInt(
		"1000000", // value to parse
		10, // base int
		64, // bit size
	)

	if err == nil {
		fmt.Println(number)
	} else {
		fmt.Println("Error :", err.Error())
	}

	value := strconv.FormatInt(
		500, // value to format
		2, // base int (2 is binary base)
	)

	fmt.Println(value)
}