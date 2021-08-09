//create a ship factory function
const Ship= (length, coordinate)=>{
    let position=[];
    for( let i= coordinate; i< (coordinate + length); i++){
position.push(i)
    }

    
return(position)    

}

module.exports=Ship;