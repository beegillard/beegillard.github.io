const first = [
    'Today is your day to',
'Today it is definitely a bad idea to',
'The time is now to',
'When in doubt,',
'The magic 8 ball says:',
];

const second = [
    'go cause some trouble',
'take some time for introspection',
'give BirdDog some treats',
'eat a lot of cookies',
'drink a glass of water'
];

const third = [
    ",but don't forget",
    ", oh and also",
    ", but you're a terrible person if you didn't know",
    ", and have you considered the fact that",
];

const fourth = [
' the difference between "they\'re" "there" and "their".',
' capitalism is a death cult.',
' to eat breakfast first.',
' I just took a DNA test turns out I\'m 100% that bitch.',
];



const generateSentence = () => {
    let one = first[Math.floor(Math.random() * first.length)];
    let two = second[Math.floor(Math.random() * second.length)];
    let three = third[Math.floor(Math.random() * third.length)];
    let four = fourth[Math.floor(Math.random() * fourth.length)];

    return `${one} ${two} ${three} ${four}`;
}

let button = document.getElementById('advice-button');
const giveAdvice = () => {
    let sentence = generateSentence();
    document.getElementById('empty').innerHTML = sentence;
    button.innerHTML = 'GET MORE ADVICE';

}





button.addEventListener('click', giveAdvice);