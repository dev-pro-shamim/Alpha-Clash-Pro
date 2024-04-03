// function play(){
//    //hide the home screen to hide the screen add the class hidden to the home section
//    //show the play ground 
//    const homeSection = document.getElementById('home-screen');
//    //console.log(homeSection);
//    homeSection.classList.add('hidden');

// /*******Show play Ground*/

// const playgroundSection = document.getElementById('play-ground')
// //console.log(playgroundSection);
// playgroundSection.classList.remove('hidden')


// }

function continueGame(){
    //step 1 : genarate a random alphabet
    const alphabet = getArandomAlphabet();
    console.log('your random Number : ',alphabet);


}

function play(){
    hideElementByID('home-screen')
    showElementById('play-ground')
    continueGame()
}

