<<<<<<< HEAD
// printRecipes.js
require('dotenv').config();
const mongoose = require('mongoose');
const Recipe = require('./model/recipeModel');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

Recipe.find({})
    .then(recipes => {
        console.log(recipes);
        mongoose.disconnect();
    })
    .catch(err => {
        console.error('Error fetching recipes:', err);
        mongoose.disconnect();
=======
// printRecipes.js
require('dotenv').config();
const mongoose = require('mongoose');
const Recipe = require('./model/recipeModel');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

Recipe.find({})
    .then(recipes => {
        console.log(recipes);
        mongoose.disconnect();
    })
    .catch(err => {
        console.error('Error fetching recipes:', err);
        mongoose.disconnect();
>>>>>>> ca6e898d31b9d8458364a87d8eefd84ac0568db9
    });