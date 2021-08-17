//create a ship factory function
const Ship = (length) => {
  const getLength = () => length;

  //this is the array that represents from what part of the x axis the ship starts, and ends where
  let shipParts = [];
  //the following creates the shipParts array
  for (let i = 0; i < length; i++) {
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
  //what would happend if I passed shipparts as a parameter to the below function?
  const isSunk = () => {
    if (shipParts.length == 0) {
      return true;
    } else {
      return false;
    }
  };

  return { shipParts, getLength, hit, isSunk };
};

module.exports = Ship;
