const first = [
'Today is your day to',
'The time is now to',
'When in doubt,',
'The magic 8 ball says: ',
'The focus of your day is to',
'You already know what you need to know: ',
'Your stars have aligned and they are saying: ',
];

const second = [
' go stir up some good ol\'trouble',
' stop looking at Instagram',
' give Birdie dog some treats',
' eat a big healthy salad',
' drink a glass of water',
' write the first chapter of your memoir',
' truly learn how to set your own boundaries',
' buy a plane ticket to somewhere new',
' re-read one of your favorite books',
' be the kindest, most patient driver on the road'
];

const third = [
    ", but don't forget",
    ", oh and also",
    ", and consider that",
    ", and some food for thought for you:"
];

const fourth = [
' the difference between "they\'re" "there" and "their" is very important.',
' if your house\'s windows are too clean, birds might fly into them.',
' you should always eat breakfast before making big decisions.',
' there really is such a thing as too many houseplants.',
' cats and dogs really CAN be friends.',
' mansplaining is never the solution. Never.',
' that song about wearing your sunscreen is still totally relevant.',
' ...remember when Party City sent out their corporate approach to fighting COVID-19?',
" the Undo Send option in Gmail can be as long as 30 seconds and it's not a bad idea.",
" financially supporting journalism benefits everyone.",
" the plural of 'octopus' is 'octopuses' and not 'octopi'. They are also seriously smart."

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