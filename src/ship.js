//create a ship factory function
const Ship = (length) => {
  const getLength = () => length;

  //this is the array that represents from what part of the x axis the ship starts, and ends where
  let shipParts = [];
  //the following creates the shipParts array
  for (let i = 0; i < length; i++) {
    shipParts.push(i);
  }
  //hit function takes the number and if the number is contained within the shipParts array, it replaces that index with the "hit" string
  //i.e. markst hat part of the ship as "hit"
  const hit = (number) => {
    if (shipParts.indexOf(number) > -1) {
      let findIndex = shipParts.indexOf(number);
      shipParts.splice(findIndex, 1, "hit");
      console.log(shipParts);
      return "hit!";
    } else {
      console.log(shipParts);
      return "miss!";
    }
  };
  //if the shipParts are all spliced, the ship has sunk
  //what would happend if I passed shipparts as a parameter to the below function?
  const isSunk = () => {
    if (shipParts === ["hit", "hit", "hit", "hit"]) {
      return true;
    } else {
      return false;
    }
  };

  return { shipParts, getLength, hit, isSunk };
};

module.exports = Ship;
