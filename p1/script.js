Vue.component('match-result', {
    data() {
        return {
        }
    },
    props: ['roundnumber','results','computerthrow','userthrow'],
    template: '#match-result',
});

function resetData(){
  return {
      choices: ["Rock","Paper","Scissors"],
      result: false,
      versus: false,
      userScoreCount: 0,
      computerScoreCount: 0,
      resultsText: '',
      rounds: [],
      round: 1,
      level: 0,
      lastUserChoice: '',
      lastUserChoice2: '',
      lastMatchLost: false,
      choicesWereMatch: false,
      matchEnd: false,
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
                        
            this.level = document.querySelector('input[name="levelChoice"]:checked').value;
            this.levelChosen = true;
          },
          play(){
            this.versus = true;
            this.result = true;

            let choice = document.querySelector('input[name="choice"]:checked').value;
            if(choice){
              this.getResult(choice);   
            }
          },
          reset(){
            Object.assign(this.$data, resetData());
          },
          getResult(choice){
            let computerChoice;
            if(this.level == 0){
              computerChoice = this.choices[Math.floor((Math.random() * 3))];   
            }else if(this.level == 1){
              computerChoice = this.difficultChoice(choice);
            }
            if(choice == computerChoice){
                  this.resultsText = "It's a tie!";
                  this.matchEnd = "tie";
            }else if( (choice == "Rock" && computerChoice == "Scissors") || (choice == "Paper" && computerChoice == "Rock") || (choice == "Scissors" && computerChoice == "Paper")){
              this.userScoreCount++;   
              this.resultsText = "You won!";
              this.matchEnd = true;
              if(this.choicesWereMatch){
                this.lastMatchLost = true;
              }
            }else{
              this.computerScoreCount++;
              this.resultsText = "You lose!";
              this.matchEnd = false;
              if(this.choicesWereMatch){
                this.lastMatchLost = false;
              }
            }
            this.rounds.push({
              roundnumber: this.round++,
              results: this.resultsText,
              userthrow: choice,
              computerthrow: computerChoice
            })  

        },
        difficultChoice(choice){
          let computerChoice;
          
          if(this.lastUserChoice == '' || this.lastUserChoice2 == ''){
            computerChoice = this.choices[Math.floor((Math.random() * 3))];  
          }
            
          
          if(this.lastUserChoice && (this.lastUserChoice == this.lastUserChoice2) && this.lastMatchLost == false){

            if(this.lastUserChoice == 'Scissors'){
              computerChoice = 'Paper';
            }else if(this.lastUserChoice == 'Paper'){
              computerChoice = 'Rock'; 
            }else if(this.lastUserChoice == 'Rock'){
              computerChoice = 'Scissors'; 
            }  
            this.choicesWereMatch = true;
          }else{
            computerChoice = this.choices[Math.floor((Math.random() * 3))]; 
            this.choicesWereMatch = false;
          }
          
          this.lastUserChoice2 = this.lastUserChoice;
          this.lastUserChoice = choice;
          return computerChoice;
        }
    }
});