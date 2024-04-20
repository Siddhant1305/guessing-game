const maxNum = prompt("Enter a Max Number!");

const randomNum = Math.floor(Math.random() * maxNum) + 1;

let guessNum = prompt("Guess the Number!");

while(true) {
    if(guessNum == "quit") {
        console.log("User Quit");
        break;
    }

    if(guessNum == randomNum) {
        console.log("You Are Right! CONGRATS!!!");
        break;
    } else if(guessNum < randomNum) {
        guessNum = prompt("Hint:Your Guess was too Small, Please try Again!!!");
    } else {
        guessNum = prompt("Hint:Your Guess was too Large, Please try Again!!!");
    }
}  