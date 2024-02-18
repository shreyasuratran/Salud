from django.urls import path
from . import views

urlpatterns = [
    path('getrecipes/', views.get_recipes, name = 'recipes')
]