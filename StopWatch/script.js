// Get the buttons
let Start = document.getElementById('start');
let Stop = document.getElementById('stop');
let Reset = document.getElementById('reset');


//  get the Time
let Hour = document.getElementById('hr');
let Minute = document.getElementById('min');
let Second = document.getElementById('sec');
let Count = document.getElementById('count');

//Initialise the time
let hour = 0;
let minute = 0;
let second = 0;
let count = 0;

Hour.textContent = "00";
Minute.textContent = "00";
Second.textContent = "00";
Count.textContent = "00";

let timer = false;


// Onclick start event
Start.addEventListener("click", function(){
    timer = true;
    
    startWatch()
})


// Onclick stop event
Stop.addEventListener("click", function(){
    stopWatch()
})


// Onclick reset event
Reset.addEventListener("click", function(){
    resetWatch()
})


// Start the watch function
function startWatch(){
    if(timer){
        count++;


        if (count == 100) {
            second++;
            count = 00;
        }
  
        if (second == 60) {
            minute++;
            second = 00;
        }
  
        if (minute == 60) {
            hour++;
            minute = 00;
            second = 00;
        }
  
    }
var hrString = hour;
        var minString = minute;
        var secString = second;
        var countString = count;


    if (hour < 10) {
         hrString = "0" + hrString;
    }

    if (minute < 10) {
          minString = "0" + minString;
    }

    if (second < 10) {
         secString = "0" + secString;
    }

    if (count < 10) {
         countString = "0" + countString;
    }

    document.getElementById('hr').innerHTML = hrString;
    document.getElementById('min').innerHTML = minString;
    document.getElementById('sec').innerHTML = secString;
    document.getElementById('count').innerHTML = countString;

   
    setTimeout(startWatch, 10)
    console.log("clicke")
}

// Stop the timer function
function stopWatch(){
    timer = false;
}


//reset timer function
function resetWatch(){
    timer = false;
    count = 0;
    second = 0;
    minute = 0;
    hour = 0;
}