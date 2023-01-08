const x=document.getElementById("top-nav");
window.addEventListener('scroll',function(){
    if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
      x.style.backgroundColor="rgba(0,0,0,1)";
    }
  else{
         x.style.backgroundColor="rgba(0,0,0,0.4)";
  }
});