package routes

import (
	"aygo-mvp-be/controllers"
	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()

	r.GET("/configs", controllers.GetConfigs)
	r.POST("/configs", controllers.CreateConfig)
	r.PUT("/configs/:id", controllers.UpdateConfig)
	r.DELETE("/configs/:id", controllers.DeleteConfig)

	return r
}
