module.exports = actual


//El método sort() ordena los elementos de un (array) localmente y devuelve el array ordenado.




function actual(){
let employsActual  = ["Manolo","Juanito","Helena","Manolo","Juanito","Helena","Antonio","Beatriz", "Ermenegilda","Tomasa"];
let newList = [];
 
let tempArray = [...employsActual].sort();
 
for (let i = 0; i < tempArray.length; i++) {
  if (tempArray[i + 1] === tempArray[i]) {    
    return employsActual.splice(tempArray[i],1)
    
  }
  else{
    return newList.push(tempArray[i])
  }
}
 

}