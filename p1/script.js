const app = Vue.createApp({
    data() {
        return {
            item: '',
            items: [],
            choices: ["Rock","Paper","Scissors"],
            submit: document.getElementById("shoot"),
            result: document.getElementById("result"),
            userScore: document.getElementById("user-score"),
            computerScore: document.getElementById("computer-score"),
            versus: document.getElementById("versus"),
            userScoreCount: 0,
            computerScoreCount: 0
        }
    },
    methods: {
          play(){
            this.versus.style.display = "block";
            /*this.result.style.display = "block";

            let choice = document.querySelector('input[name="choice"]:checked').value;
            if(choice){
              getResult(choice);   
            }*/
            console.log("play");
          },
          getResult(choice){
  
            let computerChoice = choices[Math.floor((Math.random() * 3))];


            if(choice == computerChoice){
                  this.result.innerHTML = "It's a tie!";
                  this.versus.innerHTML = choice + " vs " + computerChoice;
            }else if( (choice == "Rock" && computerChoice == "Scissors") || (choice == "Paper" && computerChoice == "Rock") || (choice == "Scissors" && computerChoice == "Paper")){
              this.userScoreCount++;   
              this.userScore.querySelector("span").innerHTML = userScoreCount;
              this.result.innerHTML = "You won!";
              this.versus.innerHTML = choice + " vs " + computerChoice;
            }else{
              computerScoreCount++;
              computerScore.querySelector("span").innerHTML = computerScoreCount;
              this.result.innerHTML = "You lose!";
              this.versus.innerHTML = choice + " vs " + computerChoice;
            }

        }
    }
}).mount('#app');





/*submit.addEventListener("click", function(event){
  event.preventDefault();
  play();
});*/