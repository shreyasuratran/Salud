from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from pymongo import MongoClient
# Create your views here.
client = MongoClient('mongodb+srv://shreema_v:VP8R5qMZ0C2SQF1m@disease-cuisine-food.xgh0zuq.mongodb.net/')
db = client['disease-cuisine-food']
cuisines = db['cuisine']
diseases = db['disease']
recipes = db['recipe']

@api_view(['GET'])
def get_recipes(request):
    rec_dict = {}
    for recipe in recipes.find():
        rec_dict[recipe['cuisine_id']] = []
    for recipe in recipes.find():
        rec_dict[recipe['cuisine_id']].append({'_id': recipe['_id'], 'name': recipe['name'], 'ingredients': recipe['ingredients'], 'instructions': recipe['instructions'], 'price': recipe['price']})
    return Response(rec_dict)

        

