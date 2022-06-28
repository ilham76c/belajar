package main

import (
	"fmt"
	"time"
)

func main() {
	now := time.Now()

	fmt.Println(now)
	fmt.Println(now.Year())
	fmt.Println(now.Month())
	fmt.Println(now.Day())
	fmt.Println(now.Hour(),":",now.Minute())

	utc := time.Date(2020, 12, 21, 23, 59, 59, 10, time.UTC)
	fmt.Println(utc)

	layout := "2006-01-02" // or time.RFC3339
	parse, _ := time.Parse(layout, "2022-02-18")
	fmt.Println(parse)
}