package controllers

import (
	"aygo-mvp-be/database"
	"aygo-mvp-be/models"
	"github.com/gin-gonic/gin"
	"net/http"
)

func GetConfigs(c *gin.Context) {
	var configs []models.Config

	database.DB.Find(&configs)
	c.JSON(http.StatusOK, configs)
}

func CreateConfig(c *gin.Context) {
	var config models.Config

	if err := c.ShouldBindJSON(&config); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	database.DB.Create(&config)
	c.JSON(http.StatusOK, config)
}

func UpdateConfig(c *gin.Context) {
	var config models.Config

	if err := database.DB.First(&config, c.Param("id")).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Config not found"})
		return
	}

	if err := c.ShouldBindJSON(&config); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	database.DB.Save(&config)
	c.JSON(http.StatusOK, config)
}

func DeleteConfig(c *gin.Context) {
	if err := database.DB.Delete(&models.Config{}, c.Param("id")).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Configuración no encontrada"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Configuración eliminada"})
}
