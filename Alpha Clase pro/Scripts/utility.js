function hideElementByID(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}


//Get Random Alphabet
 function getArandomAlphabet(){
    //get an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('')
    //console.log(alphabets);

    //get a random index between 0-25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
  


    const alphabet = alphabets[index];
    //console.log(index,alphabet);
    return alphabet;
   
 }