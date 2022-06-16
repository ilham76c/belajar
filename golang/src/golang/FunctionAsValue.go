package main

import "fmt"

func main() {
	// assign function ke variable, sama seperti javascript
	hello := sayHello
	fmt.Println(hello("ilham"))
}

func sayHello(name string) string {
	return "Hello " + name
}