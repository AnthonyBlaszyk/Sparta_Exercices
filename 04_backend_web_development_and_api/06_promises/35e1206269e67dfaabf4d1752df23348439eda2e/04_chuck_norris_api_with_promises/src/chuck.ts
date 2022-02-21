import fetch, { Response } from "node-fetch";

function getCategories(): Promise<string[]> {
  // Your code goes here
  return fetch("https://api.chucknorris.io/jokes/categories").then((response) => response.json());
}

function getJoke(categories: string): Promise<string> {
  // Your code goes here
  return fetch(`https://api.chucknorris.io/jokes/random?category=${categories}`).then((response) =>
    response.json().then((joke) => joke.value),
  );
}

// Leave the line below for tests to work properly
export { getCategories, getJoke };
