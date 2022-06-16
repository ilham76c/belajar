package main

import "fmt"

func main() {
	fmt.Println(sum())
	fmt.Println(sum(5,5,5))

	numbers := []int{10,10,10}
	// titik tiga (...) di akhir variable sama seperti spread operator di javascript
	fmt.Println(sum(numbers...))
}

// sama seperti parameter arguments di javascript
// variable arguments hanya bisa diletakkan di paling belakang jika parameter lebih dari satu
// titik tiga (...int) akan membuat variable seperti slice ([]int)
func sum(numbers ...int) int {
	total := 0
	for _, number := range numbers {
		total += number
	}

	return total
}