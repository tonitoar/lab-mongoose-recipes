const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://0.0.0.0:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
.connect(MONGODB_URI)

  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })

  .then(() => {
    // Run your code here, after you have insured that the connection was made
    const recipes = data; 
    return Recipe.insertMany(recipes); 

  })
  .then(insertedRecipes => {
    insertedRecipes.forEach(recipe => {
      console.log(`Inserted recipe: ${recipe.title}`);
    });
  })
  .then(() => {
    return Recipe.findOneAndUpdate(
      { title: 'Rigatoni alla Genovese' },
      { duration: 100 },
      { new: true }
    );
  })
  .then(updatedRecipe => {
    console.log(`Updated recipe: ${updatedRecipe.title}`);
  })
  .then(() => {

    return Recipe.deleteOne({ title: 'Carrot Cake' });
  })
  .then(() => {
    console.log('Successfully removed the "Carrot Cake" recipe.');
    mongoose.connection.close();
  })
  .then(() => {
    console.log('Database connection closed.');
  })

  .catch(error => {
    console.error('Error connecting to the database', error);
  });


