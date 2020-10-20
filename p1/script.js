// This component will display the history of each match
Vue.component('match-result', {
  data() {
    return {}
  },
  props: ['roundnumber','results','computerthrow','userthrow'],
  template: '#match-result',
});

function resetData(){
  /* Resets Data of app */
  return {
    choices: ["Rock","Paper","Scissors"],
    userChoice: '',
    userScoreCount: 0,
    computerScoreCount: 0,
    resultsText: '',
    versusText: '',
    matches: [],
    round: 1,
    level: 0,
    lastUserChoice: '',
    lastUserChoice2: '',
    lastMatchLost: false,
    choicesWereMatch: false,
    matchEnd: null,
    levelChosen: false
  }
}


const app = new Vue({
  el: '#app',
  data() {
    return resetData();
  },
  computed: {
  computerScore() {
      let cScore1 = this.computerScoreCount;
      return cScore1;
    }
  ,
  userScore() {
      let uScore1 = this.userScoreCount;
      return uScore1;
  }
  },
  methods: {
    start(){     
      // Retrieve level user chose and set it                 
      this.levelChosen = true;
    },
    play(){
      let choice = this.userChoice;
      if(choice){
        this.getResult(choice);   
        }
      },
    reset(){
      // Resets data by assigning reset data to global data object 
      Object.assign(this.$data, resetData()); 
    },
    getResult(choice){
      let computerChoice;
      if(this.level == 0){
        computerChoice = this.choices[Math.floor((Math.random() * 3))];   
      }else if(this.level == 1){
        computerChoice = this.difficultChoice(choice);
      }
      // It's a tie if choices match
      if(choice == computerChoice){ 
        this.resultsText = "It's a tie!";
        this.matchEnd = "tie";
      }else if( (choice == "Rock" && computerChoice == "Scissors") || 
        (choice == "Paper" && computerChoice == "Rock") || 
        (choice == "Scissors" && computerChoice == "Paper")){
        this.userScoreCount++;   
        this.resultsText = "You won!";
        this.matchEnd = true;

        // Proceed if the user won and their last two choices were the same 
        if(this.choicesWereMatch){ 
          // The lastMatchLost is true so the computer knows to switch their choice 
          // to one that will beat the user's last 2 choices, 
          // they will use this to win the next match 
          this.lastMatchLost = true; 
        }
      }else{
        this.computerScoreCount++;
        this.resultsText = "You lose!";
        this.matchEnd = false;
        // Proceed if the user won and their last two choices were the same
        if(this.choicesWereMatch){
          // The lastMatchLost is false so the computer knows they have beaten the user, 
          // The computer will use this to win the next match 
          this.lastMatchLost = false; 
        }
      }
      // This current match history will be printed to the user
      this.versusText = choice + " vs. " + computerChoice; 

      // Save match details to match history
      this.matches.push({   
        roundnumber: this.round++,
        results: this.resultsText,
        userthrow: choice,
        computerthrow: computerChoice
      })  

      },
      difficultChoice(choice){
        let computerChoice;
          
        // Checks if the user made the same choice twice in a row
        if(this.lastUserChoice && (this.lastUserChoice == this.lastUserChoice2)){

          // (Scissors) If the user made the same choice twice, throw this option
          if(this.lastUserChoice == 'Scissors' && this.lastMatchLost == false){
            computerChoice = 'Paper';
          // (Scissors) If the user made the same choice 3 times 
          // and the computer lost the match the third time, 
          // throw this option
          }else if(this.lastUserChoice == 'Scissors' && this.lastMatchLost == true){
            computerChoice = 'Rock';
          // (Paper) If the user made the same choice twice, throw this option*/
          }else if(this.lastUserChoice == 'Paper' && this.lastMatchLost == false){
            computerChoice = 'Rock'; 
          //(Paper) If the user made the same choice 3 times 
          // and the computer lost the match the third time, 
          // throw this option
          }else if(this.lastUserChoice == 'Paper' && this.lastMatchLost == true){
            computerChoice = 'Scissors';
          // (Rock) If the user made the same choice twice, throw this option
          }else if(this.lastUserChoice == 'Rock' && this.lastMatchLost == false){
            computerChoice = 'Scissors'; 
          // (Rock) If the user made the same choice 3 times 
          // and the computer lost the match the third time, 
          // throw this option
          }else if(this.lastUserChoice == 'Rock' && this.lastMatchLost == true){
            computerChoice = 'Paper';
          }
          this.choicesWereMatch = true;
          }else{
            // If the user didn't throw the same choice twice, computer chooses randow throw
            computerChoice = this.choices[Math.floor((Math.random() * 3))]; 
            // The choices weren't a match so we set that to false
            this.choicesWereMatch = false;
          }      
          // Set the last user choice to the second to last choice
          this.lastUserChoice2 = this.lastUserChoice; 
          this.lastUserChoice = choice; /*Set the current user choice to last choice*/
          return computerChoice;
        }
    }
});