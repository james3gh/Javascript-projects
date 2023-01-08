// variables 
var temp1 = document.querySelector("#temp1");
var temp2 = document.querySelector("#temp2");
var c1 = document.querySelector("#dropdown1 .C");
var f1 = document.querySelector("#dropdown1 .F");
var c2 = document.querySelector("#dropdown2 .C");
var f2 = document.querySelector("#dropdown2 .F");
var t1,t2,conversion;


// Eventlistener for temp1 input 

temp1.addEventListener("input",function(){
    if(this.value == "")
        temp2.value = "";
    else {
        if(t1 == "Celsius" && t2 == "Fahrenheit"){
            conversion = (this.value)*1.8 + 32;
            temp2.value = conversion;
        }
        else if(t1 == "Celsius" && t2 == "Kelvin"){
            conversion = Number(this.value) + 273.15;
            temp2.value = conversion;   
        }
        else if(t1 == "Kelvin" && t2 == "Fahrenheit"){
            conversion = ((this.value) - 273.15)*9/5 + 32;
            temp2.value = conversion.toFixed(3);
        }
        else if(t1 == "Kelvin" && t2 == "Celsius"){
            conversion = Number(this.value) - 273.15;
            temp2.value = conversion.toFixed(3);    
        }
        else if(t1 == "Fahrenheit" && t2 == "Celsius"){
            conversion = ((this.value) - 32)*5/9;
            temp2.value = conversion.toFixed(3);  
        }
        else if(t1 == "Fahrenheit" && t2 == "Kelvin"){
            conversion = ((this.value) - 32)*5/9 + 273.15;
            temp2.value = conversion.toFixed(4);
        }
    }
})


// Eventlistener for temp2 input 

temp2.addEventListener("input",function(){

    if(this.value == "")
        temp1.value = "";
    else {
        if(t1 == "Celsius" && t2 == "Fahrenheit"){
            conversion = ((this.value) - 32)*5/9;
            temp1.value = conversion.toFixed(3);
        }
        else if(t1 == "Celsius" && t2 == "Kelvin"){
            conversion = Number(this.value) - 273.15;
            temp1.value = conversion;   
        }
        else if(t1 == "Kelvin" && t2 == "Fahrenheit"){
            conversion = ((this.value) - 32)*5/9 + 273.15;
            temp1.value = conversion.toFixed(3);
        }
        else if(t1 == "Kelvin" && t2 == "Celsius"){
            conversion = Number(this.value) + 273.15;
            temp1.value = conversion;    
        }
        else if(t1 == "Fahrenheit" && t2 == "Celsius"){
            conversion = (this.value)*1.8 + 32;
            temp1.value = conversion;
        }
        else if(t1 == "Fahrenheit" && t2 == "Kelvin"){
            conversion = ((this.value) - 273.15)*9/5 + 32;
            temp1.value = conversion.toFixed(3);  
        }
    }
})

// function calls

disp();
function disp(){
t1 = document.getElementById("dropdown1").value;
t2 = document.getElementById("dropdown2").value;
temp1.value = "";
temp2.value = "";
}

// function call for input temp1
function change1(){

    disp();
    if(t1 === "Celsius" && t2 === "Celsius"){
        f2.selected = "true";
        t2 = "Fahrenheit";
    }
    else if(t2 === "Fahrenheit" && t1 === "Fahrenheit"){
        c2.selected = "true";
        t2 = "Celsius";
    }
    else if(t2 === "Kelvin" && t1 === "Kelvin"){
        f2.selected = "true";
        t2 = "Fahrenheit";
    }
 
}

// function call for input temp2
function change2(){
    
    disp();
    if(t1 === "Celsius" && t2 === "Celsius"){
        f1.selected = "true";
        t1 = "Fahrenheit";
    }
    else if(t2 === "Fahrenheit" && t1 === "Fahrenheit"){
        c1.selected = "true";
        t1 = "Celsius";
    }
    else if(t2 === "Kelvin" && t1 === "Kelvin"){
        f1.selected = "true";
        t1 = "Fahrenheit";
    }
 
}
