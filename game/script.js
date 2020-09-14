// The elements on the page we will be using
let choices = ["Rock","Paper","Scissors"];
let submit = document.getElementById("shoot");
let result = document.getElementById("result");
let userScore = document.getElementById("user-score");
let computerScore = document.getElementById("computer-score");
let versus = document.getElementById("versus");
let userScoreCount = 0;
let computerScoreCount = 0;

function play(){
	// The blocks that show the user and computer choices and the outcome of the match are displayed
	versus.style.display = "block";
	result.style.display = "block";
  
  	// We get the user's choice (rock, paper or scissors)
	let choice = document.querySelector('input[name="choice"]:checked').value;

	// If the form was submitted with a choice made, then we call getResult
	// getResult gets the result of the match (win or lose)
	if(choice){
		getResult(choice);   
	}
}

function getResult(choice){
  
	// We generate a random number from 0-2
	// We use that number to index the choices array to get either rock, paper or scissors
	let computerChoice = choices[Math.floor((Math.random() * 3))];
  
  	// If both choices match, then it's a tie
	if(choice == computerChoice){
		// Print to the screen the match choices and the outcome
    	result.innerHTML = "It's a tie!";
    	versus.innerHTML = choice + " vs " + computerChoice;
    	// This statement holds all of the winning pairings
	}else if( (choice == "Rock" && computerChoice == "Scissors") || (choice == "Paper" && computerChoice == "Rock") || (choice == "Scissors" && computerChoice == "Paper")){
    	// The user won, so the score increased
    	userScoreCount++;   
    	userScore.querySelector("span").innerHTML = userScoreCount;
    	result.innerHTML = "You won!";
    	versus.innerHTML = choice + " vs " + computerChoice;
    	//	If our match pairing doesn't match any of the above conditions, then the user lost
	}else{
		// The computer won, so their score increased
    	computerScoreCount++;
  		computerScore.querySelector("span").innerHTML = computerScoreCount;
  		result.innerHTML = "You lose!";
    	versus.innerHTML = choice + " vs " + computerChoice;
  	}
   
}

// When the submit button is clicked, the default submit form behavior is prevented
// Then the play function is called
submit.addEventListener("click", function(event){
	event.preventDefault();
	play();
});
