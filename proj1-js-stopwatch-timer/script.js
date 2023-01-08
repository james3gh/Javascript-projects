// var start = document.getElementById("btn")
// btn.addEventListener("click",digclock)

var hr = 0;
var min = 0;
var sec = 0;
var flag = 0;

function start(){
    flag = 1;
    timer();
} 
function stop(){
    flag = 0;  
}
function reset(){
    flag = 0;  
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
}

function timer(){
    if(flag){
    sec += 1;
    if(sec<10) 
    document.getElementById("sec").innerHTML = "0" + sec;
    else
    document.getElementById("sec").innerHTML = sec;
    if(sec == 60){
        min += 1;
        sec = 0;
        if(min<10) 
        document.getElementById("min").innerHTML = "0" + min;
        else
        document.getElementById("min").innerHTML = min;
    }
    if(min == 60){
        hr += 1;
        min = 0; sec = 0;
        document.getElementById("hr").innerHTML = hr;
    }
    setTimeout("timer()" , 1000);
    }
}