import { Tree } from "./Tree";

// Paste your previous `OrangeTree` class here.
class OrangeTree extends Tree {
  protected _oranges: string[] = [];

  growOranges(): void {
    this._oranges = [];
    if (this._age >= 5 && this._age <= 10) {
      for (let i = 0; i < 10; i++) {
        this._oranges.push("🍊");
      }
    } else if (this._age > 5 && this._age <= 20) {
      for (let i = 0; i < 20; i++) {
        this._oranges.push("🍊");
      }
    } else if (this._age > 5 && this._age <= 40) {
      for (let i = 0; i < 5; i++) {
        this._oranges.push("🍊");
      }
    }
  }

  pickAnOrange(): void {
    this._oranges.pop();
  }
}

// Leave the line below for tests to work properly.
export { OrangeTree };
