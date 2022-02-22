import fetch from "node-fetch";

export type Repo = {
  url: string;
  name: string;
  [key: string]: string | number | boolean | null;
};

export type GitHub = {
  message: string;
  repos_url: string;
};

export async function getReposUrl(nickname: string): Promise<string> {
  const response = await fetch(`https://api.github.com/users/${nickname}`);
  const result = await response.json();

  if ((await result.message) === "Not Found") {
    throw new Error("user doesn't exist");
  } else {
    return result.repos_url;
  }
}

export const getRepos = (url: string): Promise<Repo[]> => {
  // Code here
  return fetch(url).then((result) => result.json());
};

export const printRepos = (repos: Repo[]): Repo[] => {
  // Code here
  for (let i = 0; i < repos.length; i++) {
    console.log(`${i + 1} - ${repos[i].name}`);
  }
  return repos;
};

export const printRepository = (repo: Repo): void => {
  // Code here
  console.log(repo.name);
  console.log(repo.description);
  console.log(repo.subscribers_count);
  console.log(repo.stargazers_count);
  console.log(repo.language);
  console.log(repo.url);
};

export const getProjectInformations = (url: string): Promise<Repo> => {
  // Code here
  return fetch(url).then((result) => result.json());
};
