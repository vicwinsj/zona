package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type sauna struct {
    ID     string  `json:"id"`
	Name string  `json:"name"`
    Place  string  `json:"place"`
	Coordinates Coordinates `json:"coordinates"`
    Owner string  `json:"owner"`
    Price  float64 `json:"price"`
}

type Coordinates struct {
    Latitude  float64 `json:"latitude"`
    Longitude float64 `json:"longitude"`
}

var saunas = []sauna{
    {ID: "1", Name: "Hommelsauna", Place: "Hommelvik", Coordinates: Coordinates{Latitude: 65.2222, Longitude: 23.2222,}, Owner: "Jørgen Badstu", Price: 599.00},
    {ID: "2", Name: "Sildvigen Spa", Place: "Råkvåg", Coordinates: Coordinates{Latitude: 66.2222, Longitude: 23.2222,}, Owner: "Sandy Hwrdebak", Price: 699.00},
   {ID: "3", Name: "Kruttønna", Place: "Røros", Coordinates: Coordinates{Latitude: 62.2222, Longitude: 23.2222,}, Owner: "Ola Larsen", Price: 399.00},
}

func main() {
    router := gin.Default()
    router.GET("/saunas", getSaunas)

    router.Run("localhost:8080")
}

func getSaunas(c *gin.Context) {
    c.IndentedJSON(http.StatusOK, saunas)
}