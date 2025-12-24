// task - change text on start button click and reset button
let heading = document.getElementById("status");
let para= document.getElementById("message");
let startButton = document.getElementById("startBtn");
let resetButton = document.getElementById("resetBtn");

startButton.onclick = function(){
    if(heading.innerText==="Ready" && para.innerText==="Waiting..."){
    heading.innerText="Started";
    para.innerText="Work in Progress";
    }else{
        heading.innerText="Ready";
        para.innerText="Waiting...";
    }
    console.log("Button clicked");
}

resetButton.onclick = function(){
    heading.innerText="Ready";
    para.innerText="Waiting...";
    console.log("Button clicked");
}