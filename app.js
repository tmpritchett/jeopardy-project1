

let gameQuesAndAns = {

    'categoryOneQuesOne':{
    question: 'She is a sword carrying baddie in a post apolyptic world where the dead walk.',
    answer: 'Who is Michonne?',
    pointsAwarded: 200
},

    'categoryTwoQuesOne':{
    question: "Say hello to my little friend.",
    answer: 'Who is Scarface?',
    pointsAwarded: 200
},
    'categoryThreeQuesOne': {
    question: 'This person invented the traffic light.',
    answer: 'Who is Garret Morgan?',
    pointsAwarded: 200
},
    'categoryFourQuesOne': {
    question: 'He is green and large and you would not want to make him angry.',
    answer: 'Who is the Hulk?',
    pointsAwarded: 200
},
    'categoryFiveQuesOne': {
    question: 'This popular eighties band told us to not stop believing.',
    answer: 'Who is Journey?',
    pointsAwarded: 200
},

    'categoryOneQuesTwo': {
    question: 'This blonde beauty was once Toxic.',
    answer: 'Who is Brittney Spears?',
    pointsAwarded: 400
},
    'categoryTwoQuesTwo': {
    question: "Are you not entrtained?",
    answer: 'Who is Gladiator?',
    pointsAwarded: 400
},

    'categoryThreeQuesTwo': {
    question: 'He helped draft the patent for both the telephone and the light bulb',
    answer: 'Who is Lewis Howard Latimer?',
    pointsAwarded: 400
},
     'categoryFourQuesTwo':{
    question: 'He can leap tall buildings in a single bound!',
    answer: 'Who is Superman',
    pointsAwarded: 400
},

    'categoryFiveQuesTwo':{
    question: 'This duo asked to wake me up before you go go.',
    answer: 'Who is Wham?',
    pointsAwarded: 400
},

    'categoryOneQuesThree':{
    question: 'She is a fixer of sorts with strong White House affiliations and loves a Scandal.',
    answer: 'Who is Olivia Pope?',
    pointsAwarded: 600
},
    'categoryTwoQuesThree': {
    question: "Show me the money!",
    answer: 'Who is Jerry Maquire?',
    pointsAwarded: 600
},
    'categoryThreeQuesThree': {
    question: 'She invented the ironing board',
    answer: 'Who is Sarah Boone?',
    pointsAwarded: 600
},
    'categoryFourQuesThree':{
    question: 'He can shrink in size and posesses super human strength.',
    answer: 'Who is Antman?',
    pointsAwarded: 600
},
    'categoryFiveQuesThree': {
    question: 'Miss me blind was sung by this popular eighties band',
    answer: 'Who is Culture Club',
    pointsAwarded: 600
},
    'categoryOneQuesFour':{
    question: 'She is a hot shot detective and dealing with special victims is her speciality.',
    answer: 'Who is Detective Olivia Benson?',
    pointsAwarded: 800
},
    'categoryTwoQuesFour': {
    question: 'To infinity and beyond!',
    answer: 'Who is Toy Story',
    pointsAwarded: 800
},  
    'categoryThreeQuesFour':{
    question: 'He led the team that designed the ISA bus a hardware interface that allows multiple devices to be plugged into a computer.',
    answer: 'Who is Mark E. Dean?',
    pointsAwarded: 800
},
    'categoryFourQuesFour': {
    question: 'She flys an invisible plane?',
    answer: 'Who is Wonder Woman?',
    pointsAwarded: 800
},
     'categoryFiveQuesFour':{
    question: 'I wonder if I take you home was sung by what popular eighties band?',
    answer: 'Who is Lisa Lisa and the Cult Jam?',
    pointsAwarded: 800
},
    'categoryOneQuesFive':{
    question: 'She is the mother of dragons.',
    answer: 'Who is Daenerys Targaryen?',
    pointsAwarded: 1000
},
    'categoryTwoQuesFive':{
    question: 'I see dead people.',
    answer: 'Who is the Sixth Sense?',
    pointsAwarded: 1000
},
    'categoryThreeQuesFive':{
    question: 'She invented the automated shoemaking machine.',
    answer: 'Who is Jane Ernst Matzeliger?',
    pointsAwarded: 1000
},
     'categoryFourQuesFive':{
    question: 'He wears am American flag costume and carries an indestructible sheild taht he uses as protection and a weapon.',
    answer: 'Who is Captain America?',
    pointsAwarded: 1000
},

    'categoryFiveQuesFive': {
    question: 'This band let us know that everybody wants to rule the world.',
    answer: 'Who is Tears for Fears.',
    pointsAwarded: 1000
},

}

let gamePoints = 0
function gamePlay (tableId) {
    tableData  = gameQuesAndAns[tableId]; 
    let question = tableData.question;
    let answer = tableData.rightAnswer;
    let points = tableData.pointsAwarded;
    let score = document.getElementById('pointsAwarded')

    playerAnswer = prompt (question);
    if (playerAnswer === answer){
        document.getElementById(tableId).innerHTML = 
        'You are correct!';
        pointsaAwarded += points;
        score.innerHTML = pointsAwarded;

    }else {
        document.getElementById(tableId).innerHTML=
        'Sorry wrong answer.';
        pointsAwarded -= points;
    };
}
