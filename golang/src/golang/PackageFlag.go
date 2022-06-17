/*
	Package Flag
	- Package flag berisikan fungsionalitas untuk memparsing command line argument
*/
package main

import (
	"fmt"
	"flag"
)

func main() {
	host := flag.String(
		"host",
		"localhost", // default value
		"Put your database host",
	)
	userid := flag.Int("userid", 0, "Put your database userid")
	var password *string = flag.String("password", "root", "Put your database password")

	// jika tidak memanggil parse maka akan me-return nilai default
	flag.Parse()

	fmt.Println("host :", host, "userid :", userid, "password :", password)
	// tanda * adalah pointer untuk mengambil value-nya
	fmt.Println("host :", *host, "userid :", *userid, "password :", *password)

	// run di terminal "go run PackageFlag.go -host=localhost -userid=1767 -password=jos"
}