export function giveRecipe(coffee: string): string {
  //code here
  switch (coffee) {
    case "espresso":
      return `${coffee} ingredients:\n- ${["espresso"].join(",\n- ")}`;
    case "macchiato":
      return `${coffee} ingredients:\n- ${["espresso", "milk foam"].join(",\n- ")}`;
    case "latte":
      return `${coffee} ingredients:\n- ${["espresso", "milk foam", "steamed milk"].join(",\n- ")}`;
    case "cappuccino":
      return `${coffee} ingredients:\n- ${["espresso", "milk foam", "steamed milk", "chocolate"].join(",\n- ")}`;
    case "americano":
      return `${coffee} ingredients:\n- ${["espresso", "water"].join(",\n- ")}`;
    default:
      return `Sorry, ${coffee} does not exist on our list.`;
  }
}
