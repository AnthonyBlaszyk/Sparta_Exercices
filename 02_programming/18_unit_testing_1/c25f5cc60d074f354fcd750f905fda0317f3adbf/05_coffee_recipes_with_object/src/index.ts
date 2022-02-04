export const recipeMaker = {
  //code here
  coffeeRecipes: [
    {
      name: "espresso",
      ingredients: ["espresso"],
    },
    {
      name: "macchiato",
      ingredients: ["espresso", "milk foam"],
    },
    {
      name: "latte",
      ingredients: ["espresso", "milk foam", "steamed milk"],
    },
    {
      name: "cappuccino",
      ingredients: ["espresso", "milk foam", "steamed milk", "chocolate"],
    },
    {
      name: "americano",
      ingredients: ["espresso", "water"],
    },
  ],

  giveRecipe: function (coffee: string): string {
    for (let i = 0; i < this.coffeeRecipes.length; i++) {
      if (this.coffeeRecipes[i].name === coffee) {
        return `${this.coffeeRecipes[i].name} ingredients:\n- ${this.coffeeRecipes[i].ingredients.join(",\n- ")}`;
      }
    }
    return `Sorry, ${coffee} does not exist on our list.`;
  },
};
