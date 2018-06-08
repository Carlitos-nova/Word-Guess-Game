// Audio playback
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "assets/Pokemon BlueRed - Pokemon Center.mp3");

// Variables
var game = {
    winNum : 0,
    hiddenWord : "",
    words : ["pikachu", "feraligatr", "medicham", "infernape", "scolipede", "Xerneas", "decidueye", "steelix", "garchomp"],
    word : "",
    guesses : 0,


    gameStart:function() {
        
        document.getElementById("GuessCounter").textContent = "";
        
        this.hiddenWord = "";
        
        // Create random generator from the words array
        this.word = this.words[Math.floor(Math.random()*this.words.length)];

        // if Statement then for loop
        if (this.hiddenWord == ""){
            
            for (var i = 0; i < this.word.length; i ++){
                this.hiddenWord = this.hiddenWord + "_"
            }
            document.getElementById("text").textContent = this.hiddenWord;
        }
        
        this.guesses = this.word.length + 3;
        document.getElementById("Counter").textContent = this.guesses;

    },

    gameSetup:function(a) {
        
        // Counter
        this.guesses -= 1;
        document.getElementById("Counter").textContent = this.guesses;
        document.getElementById("GuessCounter").textContent = document.getElementById("GuessCounter").textContent + " " + a.key;

        for (var y = 0; y < this.word.length; y ++){
            if (this.word[y] == a.key) {
                this.hiddenWord = this.hiddenWord.substr(0, y) + a.key  + this.hiddenWord.substr(y + 1);
                document.getElementById("text").textContent = this.hiddenWord;
            }
        }
    },

    // Score Counter
    win:function() {
        document.getElementById("text").textContent = "You win!";
        audioElement.play();
        if (this.word != ""){
          this.winNum ++;
        }
        document.getElementById("winNum").textContent = this.winNum;
    },

    lose : function() {
        document.getElementById("text").textContent = "You lose!";
    }

};

document.onkeyup = function(a) {
    
    if (word = ""){
        game.gameStart();
    }
    game.gameSetup(a);
    
    // Condition
    if (game.hiddenWord == game.word) {
        game.win();
        game.gameStart();
        
    } else if (game.guesses == 0) {
        game.lose();
        game.gameStart();
    }
}
