


let now = new Date();
// console.log(first)

function countDown(){
    const seconds = 1000,
    minutes = seconds * 60,
    hours = minutes * 60,
    day = hours * 24;   


    let today = new Date()
    let dd = String(today.getDate())
    let mm = String(today.getMonth())
    yyyy = today.getFullYear();

    let nextYear = yyyy + 1,  
    dayMonth = "10/18/",  
    birthday = dayMonth + nextYear;

    today = mm + "/" + dd + "/" + yyyy;
    console.log(today)
    console.log(birthday)

    if (today > birthday) {  
        birthday = dayMonth + nextYear; 

        const countDown = new Date(birthday).getTime();

      


        x = setInterval(function(){
           const now =new Date().getTime(),
           distance = countDown - now; 
           
           document.getElementById("day").innerText = Math.floor(distance / (day))
           document.getElementById("hr").innerText = Math.floor((distance % (day)) / (hours))
           document.getElementById("min").innerText = Math.floor((distance % (hours)) / (minutes))
           document.getElementById("sec").innerText = Math.floor((distance % (minutes)) / (seconds))


           if (distance < 0) {  
            document.getElementById("headline").innerText = "It's my birthday!";  
            distance = 0;
            document.getElementById("content").style.display = "block";  
            clearInterval(x);  
           } 
        },0 )


       } 
    
}

countDown()