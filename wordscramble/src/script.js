import Vue from 'vue';
import FeedbackBlock from './components/FeedbackBlock.vue';


let app = new Vue({
  el: '#app',
  components: {
    'feedback-block': FeedbackBlock,
  },
  data: {
    playerName: "",
    startGameStatus: false,
    words: [
    ['apple', 'Sometimes red, sometimes delicious'],
    ['washington', 'Rushmore’s left edge'],
    ['pumpkin', 'Halloween’s favorite fruit'],
    ['football', 'Play with your hands or feet, depending on your location']
     ],
    wordIndex: '',
    hintIndex: '',
    correctWord: '',
    iscorrect: false,
    result: false,
    guess: '',
    scrambledWord: '',
    lastWord: ''
  },
  methods: {
    startGame(event){
      this.startGameStatus = true;
    
      while(this.correctWord == this.lastWord){
        this.wordIndex = Math.floor((Math.random() * this.words.length));
        this.correctWord = this.words[this.wordIndex][0];
        let correctWordLength = this.correctWord.length;
        this.scrambledWord = this.correctWord.split('').sort(function(){return 0.5-Math.random()}).join('');
      }
    },
    submitGuess(){
      this.iscorrect = this.guess == this.correctWord;
      this.result = true;
    },
    playAgain(){
      this.playerName = '';
      this.lastWord = this.correctWord;
      this.guess = '';
      this.result = false;
      this.startGameStatus = false;
    }
  },
  computed: {
    mysteryWord() {
      let scrambledWord = this.scrambledWord;
      return scrambledWord;
    },
    hint(){
      return this.words[this.wordIndex][1];
    }
  }

})