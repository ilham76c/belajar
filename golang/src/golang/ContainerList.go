package main

import (
	"fmt"
	"container/list"
)

func main() {
	data := list.New()
	data.PushBack("Satu")
	data.PushBack("Dua")
	data.PushBack("Tiga")

	data.PushFront("TES")

	fmt.Println(data.Front().Value)
	fmt.Println(data.Front().Next().Value)
	fmt.Println(data.Back().Value)
	fmt.Println(data.Back().Prev().Value)

	fmt.Println("----------------")

	for element := data.Front(); element != nil; element = element.Next() {
		fmt.Println(element.Value)
	}

	fmt.Println("----------------")

	for element := data.Back(); element != nil; element = element.Prev() {
		fmt.Println(element.Value)
	}
}