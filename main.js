const first = [
    'Today is your day to',
'The time is now to',
'When in doubt,',
'The magic 8 ball says:',
];

const second = [
    ' go stir up some trouble',
' stop looking at Instagram ',
' give BirdDog some treats',
' eat a lot of cookies',
' drink a glass of water',
' write your memoir'
];

const third = [
    ", but don't forget",
    ", oh and also",
    ", and consider that",
];

const fourth = [
' there is an important difference between "they\'re" "there" and "their".',
' if your windows are too clean birds might hit them.',
' you should always eat breakfast first.',
' there really is such a thing as too many houseplants.',
' cats and dogs really CAN be friends.',
' mansplaining is never the solution.'
];



const generateSentence = () => {
    let one = first[Math.floor(Math.random() * first.length)];
    let two = second[Math.floor(Math.random() * second.length)];
    let three = third[Math.floor(Math.random() * third.length)];
    let four = fourth[Math.floor(Math.random() * fourth.length)];

    return `${one}${two}${three}${four}`;
}

let button = document.getElementById('advice-button');
const giveAdvice = () => {
    let sentence = generateSentence();
    document.getElementById('empty').innerHTML = sentence;
    button.innerHTML = 'GET MORE ADVICE';

}





button.addEventListener('click', giveAdvice);