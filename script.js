
var ms=document.getElementById("milli_seconds");
var sec=document.getElementById("seconds");
var min=document.getElementById("minutes");
var hours=document.getElementById("hour");
var start=document.getElementById("start");
var stop=document.getElementById("stop");
var reset=document.getElementById("reset");
var lap=document.getElementById('lap');
var lap_div=document.getElementById('lap-div');
var lap_heading=document.getElementById('lap-heading');

// function to start watch

function startStopWatch(){
var time= setInterval(function(){

    ms.innerText=String((1+parseInt(ms.innerText))).padStart(2,'0');
    if(parseInt(ms.innerText)==100)
    {
        ms.innerText=00;
        seconds();
    }
},10);
//to stop the watch
stop.addEventListener('click',function()
{
    started=false;
    clearInterval(time)
});
//to reset the watch
reset.addEventListener('click',function()
{   
    started=false;
    clearInterval(time);
    
    // clearing the timer
            ms.innerText="00";
            sec.innerText="00";
            min.innerText="00";
    
            // hidding buttons
            lap_div.style.visibility="hidden";
            stop.style.display="none";
            reset.style.display="none";
            lap.style.display="none";
            
            //removing  laps
            var child=document.querySelectorAll('#lap-div p');
    
            lap_heading.style.visibility="hidden";
    for(let i=0;i< child.length;i++)
    {console.log(child);
        lap_div.removeChild(child[i]);
    }
    num=1;
});

}
var num=1;
//func to add laps
lap.addEventListener('click',function(){
    if(started) 
    { 
        lap_div.style.visibility="visible";
        lap_heading.style.visibility="visible";
        var p = document.createElement('p');
        p.classList.add('para-style');
      p.innerHTML=num+". "+hours.innerText+":"+min.innerText+":"+sec.innerText+":"+ms.innerText;
         num++;
        lap_div.appendChild(p);
        lap_div.scrollBy(0,50);
    }
});



function seconds()
{
    sec.innerText=String(1+parseInt(sec.innerText)).padStart(2,'0');
    if(parseInt(sec.innerText)==60)
    {
        sec.innerText=00;
        minutes();
    }
}
function minutes()
{
    min.innerText=String(1+parseInt(min.innerText)).padStart(2,'0');
    if(parseInt(min.innerText)==60)
    {
        min.innerText=00;
        hour();
    }
}
function hour()
{
    hours.innerText=String(1+parseInt(hour.innerText)).padStart(2,'0');
    if(parseInt(hours.innerText)==24)
    {
        alert('stop dude ');

    }
}
var started=false;
start.addEventListener('click',function()
{
    if(!started)
       { started=true;
            stop.style.display="inline-block";
            reset.style.display="inline-block";
            lap.style.display="inline-block";
            
           startStopWatch();
        
       }
});