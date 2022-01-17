const dob="17 Aug 2022"
const days=document.getElementById("day");
const hours=document.getElementById("hour");
const mins=document.getElementById("min");
const secs=document.getElementById("sec");
const textss=document.querySelector(".text");
function countdown(){
    const dateofbirth=new Date(dob);
    const today=new Date();
    const total=(dateofbirth-today)/1000;
    const day=Math.floor(total/3600/24);
    const hour=Math.floor(total/3600)%24;
    const min=Math.floor(total/60)%60;
    const sec=Math.floor(total)%60;
    days.innerHTML=colorchange(day);
    hours.innerHTML=colorchange(hour);
    mins.innerHTML=colorchange(min);
    secs.innerHTML=colorchange(sec);


}
function colorchange(time){
    return time<10 ? "0"+time : time;

}

setInterval(function(){
   countdown();   
});

