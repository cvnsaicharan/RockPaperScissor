let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");

const scoreBoard_div = document.querySelector(".score");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

const reset_div = document.getElementById("RESET");
const result_div = document.getElementById("result");

const background_div = document.getElementsByClassName("game");

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0)
        document.getElementById("y").src="rock.png";
    if(randomNumber === 1)
        document.getElementById("y").src="paper.png";
    if(randomNumber === 2)
        document.getElementById("y").src="scissor.png";
    return choices[randomNumber];
}

function win(user , computer){
    userScore++;
    userScore_span.innerHTML=userScore;
}

function lose(user , computer){
    compScore++;
    compScore_span.innerHTML=compScore;
}

function draw(user , computer){
    userScore_span.innerHTML=userScore;
    compScore_span.innerHTML=compScore;
}

function game(userChoice){
    const computerChoice = getComputerChoice();

    switch(userChoice + computerChoice){
        case "pr":
        case "rs":
        case "sp":
            win(userChoice, computerChoice);
            result_div.innerHTML = "<span style='color: white;font-size: 60px;'> YOU WON! </span>";
            document.body.background = "party.gif"
            setTimeout(function(){document.body.background = "";} , 500);
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice, computerChoice);
            result_div.innerHTML = "<span style='color: white;font-size: 60px;'> YOU LOST! </span>";
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, computerChoice);
            result_div.innerHTML = "<span style='color: white;font-size: 60px;'> DRAW! </span>";
            break;
    }
}


function main(){
rock_div.addEventListener('click', function(){
    document.getElementById("x").src="rock1.png";
    game("r");
})

paper_div.addEventListener('click', function(){
    document.getElementById("x").src="paper1.png";
    game("p");
})

scissor_div.addEventListener('click', function(){
    document.getElementById("x").src="scissor1.png";
    game("s");
})
    
reset_div.addEventListener('click', function(){
    userScore=0;
    compScore=0;
    userScore_span.innerHTML=userScore;
    compScore_span.innerHTML=compScore;
    document.getElementById("x").src="white.jpg";
    document.getElementById("y").src="white.jpg";
    result_div.innerHTML = "";
})  
}


main();
