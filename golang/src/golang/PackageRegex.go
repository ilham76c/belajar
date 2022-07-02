package main

import (
	"fmt"
	"regexp"
)

func main() {
	var regex *regexp.Regexp = regexp.MustCompile("i([a-z]*)m")

	fmt.Println(regex.MatchString("ilham"))
	fmt.Println(regex.MatchString("jos"))

	searchOne := regex.FindAllString("tm ilham jos tes ilham oke wkwk", 1)
	fmt.Println(searchOne)

	searchAll := regex.FindAllString("tm ilham jos tes ilham oke wkwk ilham", -1)
	fmt.Println(searchAll)
}