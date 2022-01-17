function slice(ingredients) {
  // Code here
  return ingredients.map((ingredient) => {
    return "sliced " + ingredient;
  });
}

function makeSandwich(ingredients) {
  // Code here
  if (
    ingredients.every((ingredient) => {
      return ingredient.includes("sliced");
    })

  ) {
    console.log(ingredients);
    return "A tasty sandwich made of" + ingredients.map((ingredient) => {
      return ingredient.slice(6);
    });

  } else {
    return "I can't make a sandwich with non-sliced ingredients";
  }
}

// console.log(slice(["ham", "lettuce", "tomato"]));
// console.log(makeSandwich(["sliced ham", "sliced lettuce", "sliced tomato"]));
// console.log(makeSandwich(["sliced ham", "sliced lettuce", "tomato"]));

// Do not remove the following line, it is for tests
module.exports = {
  slice,
  makeSandwich,
};
