let paraStatus=document.getElementById("status"); 
let paraMessage=document.getElementById("message");
let paraCount=document.getElementById("count");
let studyButton=document.getElementById("studyBtn");
let resetButton=document.getElementById("resetBtn");
let studyCount=0;
studyButton.onclick= function(){
    
    paraStatus.innerText="Status: Studied";
    paraMessage.innerText="Proud of You";
    
    studyCount=studyCount+1;
    paraCount.innerText="Total study days: "+studyCount;
}
resetButton.onclick= function(){
     studyCount=0;
     paraStatus.innerText="Status: Not Studied";
     paraMessage.innerText="Let's try again"; 
     paraCount.innerText="Total study days: 0";
}