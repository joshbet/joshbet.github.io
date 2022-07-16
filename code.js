//This file has all scripts and functions for uatSpace.html


//Function for countdownTimer V1 for week1-2
function blastoffTimerV1(){
    console.log("blastoffTimerV1() function started");
    // created variable currTime, set it equal to 10
    var currTime = 10;
    //Logs currTime to the console
    console.log(currTime);
    setTimeout(function(){
        //What we do after the delay
        //Countdown 10
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 1000)

    //Countdown 9
    setTimeout(function(){
        //What we do after the delay
        //Subtracts 1 from currTime everytime the timer goes down 1 second to display the correct number on the webpage
        currTime = currTime -1;
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 2000)
    
    //Countdown 8
    setTimeout(function(){
        //What we do after the delay
        currTime = currTime -1;
        //Logs currTime to the console
        console.log(currTime);
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 3000)

    //Countdown 7
    setTimeout(function(){
        //What we do after the delay
        currTime = currTime -1;
        //Logs currTime to the console
        console.log(currTime);
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 4000)
    
    //Countdown 6
    setTimeout(function(){
        //What we do after the delay
        currTime = currTime -1;
        //Logs currTime to the console
        console.log(currTime);
        document.getElementById("countdownStatus").innerHTML = currTime;


    }, 5000)
    
    //Countdown 5
    setTimeout(function(){
        //What we do after the delay
        currTime = currTime -1;
         //Logs currTime to the console
        console.log(currTime);
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 6000)
    
    //Countdown 4
    setTimeout(function(){
        //What we do after the delay
        //Logs currTime to the console
        currTime = currTime -1;
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 7000)

   //Countdown 3
    setTimeout(function(){
        //What we do after the delay
        currTime = currTime -1;
        //Logs currTime to the console
        console.log(currTime);
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 8000)
    
    //Countdown 2
    setTimeout(function(){
        //What we do after the delay
        currTime = currTime -1;
        //Logs currTime to the console
        console.log(currTime);
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 9000)

    //Countdown 1
    setTimeout(function(){
        //What we do after the delay
        currTime = currTime -1;
        //Logs currTime to the console
        console.log(currTime);
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 10000)
    
    //Countdown Blastoff
    setTimeout(function(){
        //What we do after the delay
        document.getElementById("countdownStatus").innerHTML = "Blastoff!";
    }, 11000)
}

//every line of code commented on...
function playCraps(){
    console.log("playCraps started")
    //generate variables
    var die1;
    var die2;
    var sum;
    var diceImage;
    var diceImage2;   

    //Roll dice
    //Die is rolled using Math.random which will generate a random number between 1 and 6
    die1 = Math.floor(Math.random() * 6) + 1;
    console.log(die1);
    //A second die is rolled using the same rules as the first one.
    die2 = Math.floor(Math.random() * 6) + 1;
    console.log(die2);

    //Determine the sum of the two dice and save it in sum
    sum = die1 + die2;
    console.log("sum is equal to " + sum);
    //follow the rules of Craps and tell the status in crapsStatus
  
    //If statements below here for assigning an image based on the result of die1 and die2
//-------------------------------------------------------------------------------------------------
    if(die1 == 1){
        diceImage = "images/dice1.png"
    }
    if(die2 == 1){
        diceImage2 = "images/dice1.png"
    }

    if(die1 == 2){
        diceImage = "images/dice2.png"
    }
    if(die2 == 2){
        diceImage2 = "images/dice2.png"
    }

    if(die1 == 3){
        diceImage = "images/dice3.png"
    }
    if(die2 == 3){
        diceImage2 = "images/dice3.png"
    }

    if(die1 == 4){
        diceImage = "images/dice4.png"
    }
    if(die2 == 4){
        diceImage2 = "images/dice4.png"
    }

    if(die1 == 5){
        diceImage = "images/dice5.png"
    }
    if(die2 == 5){
        diceImage2 = "images/dice5.png"
    }

    if(die1 == 6){
        diceImage = "images/dice6.png"
    }
    if(die2 == 6){
        diceImage2 = "images/dice6.png"
    }
//-------------------------------------------------------------------------------------------------


    //If statement which says that if sum is equal to 7 or 11 you lose.
    if(sum == 7 || sum == 11){
        //Displays losing statement to the user.
        document.getElementById("crapsStatus").innerHTML = "Craps!! You lose!"
        //Displays the correct die image to diceImage and diceImage2 accordingly
        document.getElementById("diceImage").src = diceImage;
        document.getElementById("diceImage2").src = diceImage2;
        //Else if statement checks if die1 equals die2 and checks that they are both even, if these conditions are met you win.
    } else if(die1 == die2 && die1%2 == 0){
        //Displays winning statement to the user.
        document.getElementById("crapsStatus").innerHTML = "You win!!"
        //Displays the correct die image to diceImage and diceImage2 accordingly
        document.getElementById("diceImage").src = diceImage;
        document.getElementById("diceImage2").src = diceImage2;
        
    }
    
    //If sum is not equal to any of the conditions specified above the below statement will be displayed to the user.
    else {
        document.getElementById("crapsStatus").innerHTML = "You did not win or lose, please roll again."
        //Displays the correct die image to diceImage and diceImage2 accordingly
        document.getElementById("diceImage").src = diceImage;
        document.getElementById("diceImage2").src = diceImage2;
        
    }

}

function blastoffTimerV2(){
    console.log("blastoffTimerV2() function started");
    //Want a loop that runs 11 times, 10-1 and then blastoff
    var countdownTimer = 10;
    for(var i = 0; i < 10; i = i + 1){
        setTimeout(function(){
            document.getElementById("countdownStatus").innerHTML = countdownTimer;
            countdownTimer = countdownTimer - 1;
        }, 1000 * i)

    }
    setTimeout(function(){
        //What we do after the delay
        document.getElementById("countdownStatus").innerHTML = "Blastoff!";
    }, 10000)
}

function blastoffTimerV3(){
    console.log("blastoffTimerV2() function started");
    //Want a loop that runs 11 times, 10-1 and then blastoff
    var countdownTimer = 10;
    for(var i = 0; i <= 10; i = i + 1){
        setTimeout(function(){
            if(countdownTimer <= 0){
                document.getElementById("countdownStatus").innerHTML = "Blastoff!";
            } else if(countdownTimer < 5){
                document.getElementById("countdownStatus").innerHTML = "Warning, less than halfway to launch!" + countdownTimer;
            } else {
                document.getElementById("countdownStatus").innerHTML = countdownTimer;
            }
            countdownTimer = countdownTimer - 1;
        }, 1000 * i)

    }
}

function startStop(cancel){ 
    var countdownLoop;
    if(cancel == 0){
    console.log("startFun() started");
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    var countdownTimer = 10;
    
    for(var i = 0; i <= 10; i = i + 1){
    countdownLoop = setTimeout(function(){
            console.log(countdownLoop)
            if(countdownTimer <= 0){
                document.getElementById("countdownStatus").innerHTML = "Blastoff!";
            } else if(countdownTimer < 5){
                document.getElementById("countdownStatus").innerHTML = "Warning, less than halfway to launch!" + countdownTimer;
            } 
            else {
                document.getElementById("countdownStatus").innerHTML = countdownTimer;
            }
            
            countdownTimer = countdownTimer - 1;
            console.log(countdownTimer);
        }, 1000 * i)
        

if(cancel == 1 ){
    countdownTimer = -1;
    console.log(countdownLoop);
    clearTimeout(countdownLoop);
    document.getElementById("countdownStatus").innerHTML = "Countdown Stopped.";

}
    }
}


}
var countdownLoop;
function startFun(cancel){
    if(cancel == 0){
    console.log("startFun(0) started");
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    var countdownTimer = 10;
    }
    for(var i = 0; i <= 10; i = i + 1){
            setTimeout(function(){
            
            if(cancel == 1){
                i = null;
                countdownTimer = null;
            }
            if(countdownTimer <= 0){
                document.getElementById("countdownStatus").innerHTML = "Blastoff!";
            } else if(countdownTimer < 5){
                document.getElementById("countdownStatus").innerHTML = "Warning, less than halfway to launch!" + countdownTimer;
            } 
            else {
                document.getElementById("countdownStatus").innerHTML = countdownTimer;
            }
            
            countdownTimer = countdownTimer - 1;
            console.log(countdownTimer);
        }, 1000 * i)
        
    }
}

function stopFun(){
    console.log("stopFun() started");
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
    
    console.log(countdownLoop);
    clearTimeout(countdownLoop);
    
    if(countdownTimer <= 0){
        
        document.getElementById("countdownStatus").innerHTML = "Countdown Stopped.";
    }
}


//Function to add sound
//-----------------------------------------------------------------------------------------------------------------------------------

function playStation(){
    console.log("playStation() started");
    //play spaceStation sounds here
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}

function sound(srcFile){
    console.log("sound function started");
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}
//-----------------------------------------------------------------------------------------------------------------------------------

//Functions for start and stop buttons
//-----------------------------------------------------------------------------------------------------------------------------------
var timerCheck = null;
//function to start the countdown timer
function blastoffTimerV4() {
    console.log("blastoffTimerV4 started");
    //When the start button is pressed, it gets disabled from any further action and the stop button becomes clickable
    document.getElementById("data").rows["seconds"].innerHTML = "reading data";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    //countdownTimer starts at 11 as it is subtracted once before printed to the screen for the first time.
    var countdownTimer = 11;
    //Checks the status of timerCheck, it is declared outside of the function so it can be accessed by both blastoffTimerV4 and stopTimer
    if (timerCheck == null) {
        //setInterval is used as our countdown timer, it will decrease countdownTimer by 1 every second until it is <= 0
        timerCheck = setInterval(function () {
            countdownTimer -= 1;
            //if, else if and else statements print different messages based on the value of countdownTimer.
            if(countdownTimer <= 0){
                document.getElementById("countdownStatus").innerHTML = "Blastoff!";
                clearInterval(timerCheck);
            } else if(countdownTimer < 5){
                document.getElementById("countdownStatus").innerHTML = "Warning, less than halfway to launch!" + countdownTimer;
            } 
            else {
                document.getElementById("countdownStatus").innerHTML = countdownTimer;
            }
        }, 1000);
    }
}

//Function to stop the countdown timer
function stopTimer() {
    console.log("stopTimer() started")
    clearInterval(timer)
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
    //timerCheck gets cleared when the stopTimer function runs, variable is also reset so that the countdown can be run again.
    clearInterval(timerCheck);
    timerCheck = null;
    
    //lets the user know that the timer has stopped.
    document.getElementById("countdownStatus").innerHTML = "Timer stopped.";
}
//-----------------------------------------------------------------------------------------------------------------------------------
