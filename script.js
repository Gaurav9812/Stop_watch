var ms=document.getElementById("milli_seconds");
var sec=document.getElementById("seconds");
var min=document.getElementById("minutes");
var start=document.getElementById("start");
var stop=document.getElementById("stop");
var reset=document.getElementById("reset");

function startStopWatch(){
var time= setInterval(function(){

    ms.innerText=String((1+parseInt(ms.innerText))).padStart(2,'0');
    if(parseInt(ms.innerText)==100)
    {
        ms.innerText=0;
        seconds();
    }
},10);
stop.addEventListener('click',function()
{
    clearInterval(time)
});
reset.addEventListener('click',function()
{
    clearInterval(time);
    ms.innerText="00";
    sec.innerText="00";
    min.innerText="00";
});
}

function seconds()
{
    sec.innerText=String(1+parseInt(sec.innerText)).padStart(2,'0');
    if(parseInt(sec.innerText)==60)
    {
        sec.innerText=0;
        minutes();
    }
}
function minutes()
{
    min.innerText=String(1+parseInt(min.innerText)).padStart(2,'0');
}
start.addEventListener('click',function()
{
    startStopWatch();
});