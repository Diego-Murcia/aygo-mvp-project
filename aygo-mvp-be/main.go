package main

import (
	"aygo-mvp-be/database"
	"aygo-mvp-be/routes"
	"log"
)

func main() {
	database.Connect()

	r := routes.SetupRouter()

	log.Printf("Listening on port 8080")
	r.Run(":8080")
}
