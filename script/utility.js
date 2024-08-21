function getElementId(hiddenId){
    const element = document.getElementById(hiddenId);
    element.classList.add('hidden');
}
function getShowId(showId){
    const element = document.getElementById(showId);
    element.classList.remove('hidden');
}

function randomAlphabet(){
    const alpha = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alpha.split('');
    // console.log(alphabets);
    const randomValue = Math.random() * 25;
    const index = Math.round(randomValue);

    const alphabetValue = alphabets[index];
    // console.log(alphabetValue);
    return alphabetValue;
}

function backgroundColorSet(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function backgroundColorRemove(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

