package models

import "time"

type Config struct {
	ID        uint      `gorm:"primaryKey"`
	Key       string    `gorm:"unique;not null"`
	Value     string    `gorm:"not null"`
	UpdatedAt time.Time `gorm:"autoUpdateTime"`
}
