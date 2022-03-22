const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function clock(){
    const now = new Date();
    
    const second = now.getSeconds();
    const secondDegree = ((second / 60)* 360) + 90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;

    const minute = now.getMinutes();
    const minuteDegree = ((minute / 60) * 360) + ((second/60)*6) + 90;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

    const hour = now.getHours();
    const hourDegree = ((hour / 12) * 360) + ((minute/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
 
}

setInterval(clock ,1000);


const time = document.querySelector('.time');
const day = document.querySelector('.day');
const date = document.querySelector('.date');
const vibeNote = document.querySelector('.vibeNote')

function fnDigital(){
    const now = new Date();
    const weekDay = [
            'sunDay',
            'monDay',
            'tueDay',
            'wednesDay',
            'thursDay',
            'friDay',
            'saturDay'
    ]
     
    day.innerText= weekDay[now.getDay()];

    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    time.innerText = `${hour} : ${minute} : ${second}`;

    const month = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August', 'September',
         'October', 'November', 'December'
    ];

    const getMonths = month[now.getMonth()];
   
    date.innerText = `${now.getDate()} : ${getMonths} : ${now.getFullYear()} `

   
}

const vibes = [
        "Time is what we want most, but what we use worst.",
        "Bad vibes don't go with my outfit",
        "Don't stress. Do your best. Forget the rest.",
        "Today is a perfect day to start living your dreams.",
        "Don't think too much, just do what makes you happy."
    
];

    let i=0; 

function displayNote(){
     if(vibes.length > i){
        vibeNote.innerText = vibes[i];
        i++;
    }
    else {
        i=0;
    }
}   

setInterval(displayNote, 5000);
setInterval(fnDigital,1000);
