from django.db import models

# Create your models here.
class Disease(models.Model):
    name = models.CharField(max_length=100)

class Cuisine(models.Model):
    name = models.CharField(max_length=100)
    disease = models.ForeignKey(Disease, on_delete=models.CASCADE)

class Recipe(models.Model):
    name = models.CharField(max_length=100)
    cuisine = models.ForeignKey(Cuisine, on_delete=models.CASCADE)
    ingredients = models.TextField()
    instructions = models.TextField()

