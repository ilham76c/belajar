package main

import (
	"fmt"
	"sort"
)

type User struct {
	Name string
	Age int
}

type UserSlice []User

func main() {
	users := []User{
		{"ilham", 20},
		{"jos", 12},
		{"waw", 15},
	}

	sort.Sort(UserSlice(users))

	fmt.Println(users)
}

func (value UserSlice) Len() int {
	return len(value)
}

func (value UserSlice) Less(i, j int) bool {
	return value[i].Age < value[j].Age
}

func (value UserSlice) Swap(i, j int) {
	value[i], value[j] = value[j], value[i]
}