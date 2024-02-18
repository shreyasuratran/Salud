// Select the database to use.
use('my_project_db');

// Insert sample documents into the diseases collection.
db.getCollection('diseases').insertMany([
  { name: 'Diabetes', description: 'A chronic condition affecting how your body turns food into energy.' },
  { name: 'Hypertension', description: 'A condition characterized by high blood pressure.' },
]);

// Insert sample documents into the cuisines collection.
db.getCollection('cuisines').insertMany([
  { name: 'Italian', description: 'A heart-healthy diet rich in fruits, vegetables, whole grains, and lean proteins.', disease: 'Diabetes' },
  { name: 'Mexican', description: 'Dietary Approaches to Stop Hypertension.', disease: 'Hypertension' },
]);

// Insert sample documents into the recipes collection.
db.getCollection('recipes').insertMany([
  { name: 'Chicken & White Bean Soup', ingredients: ['Olive oil', 'Leeks', 'Sage', 'Reduced-Sodium Chicken Broth', 'Water', 'Cannellini Bean', 'Roasted Chicken'], cuisine: 'Italian'},
  { name: 'Vegetarian Chili', ingredients: ['beans', 'tomatoes', 'onions', 'bell peppers', 'spices'], cuisine: 'Mexican' },
]);

// Run a find command to view documents in the diseases collection.
const diseases = db.getCollection('diseases').find();
diseases.forEach(printjson);

// Run a find command to view documents in the cuisines collection.
const cuisines = db.getCollection('cuisines').find();
cuisines.forEach(printjson);

// Run a find command to view documents in the recipes collection.
const recipes = db.getCollection('recipes').find();
recipes.forEach(printjson);
