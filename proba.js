//linea 22

const newRecipe = {
    //model recipe
}

Recipe.create(newRecipe);
/* }) */
// .then(result => console.log("recipecreated", result))

//.then (() => Recipe.insertMany(data))

//then(result => {
    //console.log('Created recipe:', result);
    //console.log('Created ${result.length} recipe');
    return Recipe.findOneAndUpdate({title:"Rigatoni alla Genovese"}, {duration: 100, creator: "Chef Mario"})
})
