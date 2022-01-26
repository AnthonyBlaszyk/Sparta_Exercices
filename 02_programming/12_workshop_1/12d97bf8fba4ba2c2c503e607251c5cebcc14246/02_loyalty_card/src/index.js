import readline from "readline";
import {start} from "./interface.js";

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

start(reader);
