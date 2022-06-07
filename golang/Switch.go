package main

import "fmt"

func main() {
	direction := "right"

	switch direction {
		case "right":
			fmt.Println("right ->")
		case "left":
			fmt.Println("<- left")
		default:
			fmt.Println("-")
	}

	// short statement
	switch length := len(direction); length > 0 {
	case true:
		fmt.Println("direction len:", len(direction))
	case false:
		fmt.Println("direction empty")
	}

	switch {
	case len(direction) > 0:
		fmt.Println("direction len:", len(direction))
	case len(direction) == 0:
		fmt.Println("direction empty")
	}
}