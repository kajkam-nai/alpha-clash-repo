function continueGame(){
    const alphabet = randomAlphabet();
    // console.log(alphabet);
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    backgroundColorSet(alphabet);
   
}

// function getElementValue(valueId){
//     const currentValue = document.getElementById(valueId);
//     const value = currentValue.innerText;
//     const properValue = parseInt(value);

// }


function keyHandlerButton(event){
    const pressKeyAlphabet = event.key;
    const currentAlphabet = document.getElementById('current-alphabet');
    const suggestAlphabet = currentAlphabet.innerText;
    const expectedAlphabet = suggestAlphabet.toLowerCase();
    console.log(expectedAlphabet,pressKeyAlphabet);
    if(pressKeyAlphabet === expectedAlphabet){
        backgroundColorRemove(expectedAlphabet);
        continueGame();
        const currentScoreElement = document.getElementById('current-score');
        const currentText = currentScoreElement.innerText;
        const currentValue = parseInt(currentText);
        const newScore = currentValue + 1;
        currentScoreElement.innerText = newScore;
        const newsScore = document.getElementById('score');
        newsScore.innerText= newScore;
    }
    else{
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLifeValue = parseInt(currentLifeText);
        const newLifeScore = currentLifeValue - 1;
        currentLifeElement.innerText = newLifeScore;

        // const currentScoreElement = document.getElementById('current-score');
        // const currentText = currentScoreElement.innerText;
        // const currentValue = parseInt(currentText);
        // const newScore = currentValue - 2;
        // currentScoreElement.innerText = newScore;

        if(newLifeScore === 0){
            console.log('play end');
            getElementId('play-ground');
            getShowId('again-play');
            // const removeHidden = document.getElementById('again-play');
            // removeHidden.classList.remove('hidden');
        }
            

    }
        
        // console.log('you lost your life');     
}

function setElementValue(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

document.addEventListener('keyup',keyHandlerButton);

function play(){
    
    homeScreen = getElementId('home-screen');
    playGround = getShowId('play-ground');
    continueGame();
}


function playAgain(){
    getElementId('again-play');
    getShowId('play-ground');
    setElementValue('current-score', 0)
    setElementValue('current-life', 5)
    continueGame();
}