//create a ship factory function
const Ship= (length, coordinate, number)=>{
  const getLength= () => length;
  const getCoordinate= ()=> coordinate;
  const getNumber=()=> number;
    let shipParts=[];
    for( let i= coordinate; i< (coordinate + length); i++){
shipParts.push(i)
    }
   const hit= (number)=>{
if (shipParts.indexOf(number) > -1){
    let deleteHit= shipParts.indexOf(number);
    shipParts.splice(deleteHit,1)
    return "hit!"
}else {
    return "miss!"
}
    }

    
return{shipParts,getLength, getCoordinate,getNumber,hit}    

}

module.exports=Ship;