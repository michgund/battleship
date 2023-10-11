import Ship from "./ship.js";

class Gameboard {
  constructor() {
    this.ships = [];
  }

  placeShip(length, cords) {
    for (let i = 0; i < this.ships.length; i++) {
      if (
        this.ships[i].cords[0] === cords[0] &&
        this.ships[i].cords[1] === cords[1]
      )
        return "Ship exists at coordinates.";
    }
    return this.ships.push({
      ship: new Ship(length),
      cords: cords,
    });
  }
}

export default Gameboard;
