package helper

/* 
	nama function yg akan digunakan oleh file lain (di import oleh file lain),
	harus diawali oleh huruf besar, jika tidak maka akan muncul error
	ketika memanggil nama function dari file yang di import.
*/
func SayHello(name string) string {
	return "Hello " + name
}