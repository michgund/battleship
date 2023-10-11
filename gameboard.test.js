import { objectExpression } from "@babel/types";
import Gameboard from "./Gameboard";

test("placeship creates a ship with cords on the gameboard", () => {
  const player1 = new Gameboard();
  player1.placeShip(4, [3, 3]);
  expect(player1.ships[0].cords).toStrictEqual([3, 3]);
});

test("cannot add ship where ship exists", () => {
  const player1 = new Gameboard();
  player1.placeShip(4, [3, 3]);
  player1.placeShip(4, [4, 3]);
  expect(player1.placeShip(4, [3, 3])).toBe("Ship exists at coordinates.");
});
