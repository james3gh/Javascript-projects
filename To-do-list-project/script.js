renderDate();
function renderDate(){
var mydate = new Date();
var year = mydate.getFullYear();
     if(year<1000)
        year+=1900
var day = mydate.getDay();
var month = mydate.getMonth();
var daym = mydate.getDate();
var dayarray = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
var montharray = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");

var myCal = document.getElementById("TodayDate");
myCal.textContent = "" + dayarray[day] + " " + daym + " " + montharray[month] + " " + year ;
myCal.innerText = "" + dayarray[day] + " " + daym + " " + montharray[month] + " " + year ;
}


////////////////////////////////////////////////////////////////////////////////////////////////////


$("#button-addon2").click(function(){
    var text = $("#add-text").val();
    var trimmed_text = $.trim(text);
    console.log(trimmed_text);
    if(trimmed_text!="")
    {
        
        $("#list-block").append('<div class="to-do-items"> <div id="checkbox-list" class="text-center"><div class="input-group-text"> <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"></div><div id="list-items">' + trimmed_text + '</div></div><button class="ms-1 del-btn"><i class="bi bi-trash"></i></button></div>');
    }
    trimmed_text="";
    var text = $("#add-text").val(trimmed_text);
    $(".del-btn").click(function(){
    var del_parent = $(this).parent().hide();
    $(this).hide(); 
})
}
);

$(".del-btn").click(function(){
var del_parent = $(this).parent().hide();
$(this).hide(); 
});
