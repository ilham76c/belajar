package database

var connection string

// function init akan otomatis dieksekusi ketika package database di import pada file lain
func init() {
	connection = "MySQL"
}

func GetDatabase() string {
	return connection
}