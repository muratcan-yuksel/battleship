//create a ship factory function
const Ship = (coordinate, length, number) => {
  const getLength = () => length;
  const getCoordinate = () => coordinate;
  const getNumber = () => number;
  //this is the array that represents from what part of the x axis the ship starts, and ends where
  let shipParts = [];
  //the following creates the shipParts array
  for (let i = coordinate; i < coordinate + length; i++) {
    shipParts.push(i);
  }
  //hit function takes the number and if the number is contained within the shipParts array, it deletes that index
  //i.e. destroys a part of the ship
  const hit = (number) => {
    if (shipParts.indexOf(number) > -1) {
      let deleteHit = shipParts.indexOf(number);
      shipParts.splice(deleteHit, 1);
      return "hit!";
    } else {
      return "miss!";
    }
  };
  //if the shipParts are all spliced, the ship has sunk
  const isSunk = () => {
    if (shipParts.length == 0) {
      return true;
    } else {
      return false;
    }
  };

  return { shipParts, getLength, getCoordinate, getNumber, hit, isSunk };
};

module.exports = Ship;
