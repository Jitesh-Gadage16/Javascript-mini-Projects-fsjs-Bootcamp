const error =  document.querySelector(".error");
const age =  document.querySelector(".age");



function getAge(){
    
    let yourAge = new Date(document.getElementById("dob").value);  //gets input value in  indian standard time
// console.log(yourAge)
    let  presetDate = new Date();    //gets preset value in  indian standard time
    // console.log(presetDate  )   

// get your date month and  year

    let myDate = yourAge.getDate()
    let myMonth = yourAge.getMonth()
    let myYear = yourAge.getFullYear()
        // console.log(myDate)
        // console.log(myMonth)
        // console.log(myYear)
        calcAge(presetDate,myDate,myMonth,myYear)
}

function calcAge(presetDate,myDate,myMonth,myYear){ 
    
    let todaysDate = presetDate.getDate();
    let todaysMonth = presetDate.getMonth();
    let todaysYear = presetDate.getFullYear()
    // console.log(todaysDate)
    // console.log(todaysMonth)
    // console.log(todaysYear)

// check if selected age is eqaul to curret age 

    if(myDate == todaysDate && myMonth == todaysMonth && myYear == todaysYear){
        age.style.display = "none";
        error.style.display = "block";
        error.textContent = "You are not yet born..!!! Time Traveller";
        return;
    }

// check if selected age is greater than curret age 


    if(myDate > todaysDate || myMonth > todaysMonth || myYear > todaysYear ){
        age.style.display = "none";
        error.style.display = "block";
        error.textContent = "Invalid age enterd...!!! Time Traveller";
        return;
    }

    let mytotalYear = todaysYear - myYear
    let mytotalMonth = todaysMonth - myMonth
    let mytotalDays = todaysDate - myDate
    let mayage = `${todaysDate - myDate} / ${todaysMonth - myMonth} / ${todaysYear - myYear} ` 
    console.log(mayage)

    error.style.display = "block";
    // console.log(mytotalMonth)
    // console.log(mytotalDays)

    displayAge(mytotalYear,mytotalMonth,mytotalDays)

}

function displayAge(mytotalYear,mytotalMonth,mytotalDays){

    let year = document.getElementById("years");
    let months = document.getElementById("months");
    let days = document.getElementById("days");
    let disc = document.querySelector(".desc")


    year.innerText = mytotalYear
    months.innerText = mytotalMonth
    days.innerText = mytotalDays


 
    disc.innerText = `Your Age is : ${mytotalYear}`
    
    
}

