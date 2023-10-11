class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.hit = function () {
      this.hits += 1;
    };
    this.isSunk = function () {
      return this.hits >= this.length ? true : false;
    };
  }
}

export default Ship;
