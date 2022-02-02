// Paste your previous `Tree` class here.
abstract class Tree {
  protected _age: number;
  protected _height: number;
  protected _alive: boolean = true;

  constructor(age: number) {
    this._age = age;
    this._height = this.updateHeight();
  }

  updateHeight(): number {
    if (this._age <= 9) {
      return this._age * 25;
    } else if (this._age <= 20) {
      return 9 * 25 + 10 * (this._age - 9);
    } else {
      return 9 * 25 + 11 * 10;
    }
  }

  seed(): void {
    this._age = 0;
    this._height = 0;
    this._alive = true;
  }

  _isAlive(): boolean {
    const randomNumber = Math.floor(Math.random() * 100);
    if (this._age >= randomNumber && this._age > 50) {
      return false;
    } else return true;
  }

  ageOneYear(): void {
    this._age++;
    this._height = this.updateHeight();
    this._alive = this._isAlive();
  }
}

// Leave the line below for tests to work properly.
export { Tree };
