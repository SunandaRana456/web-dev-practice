let days=[
    {day:"Mon",hours:2},
    {day:"Tue",hours:1},
    {day:"Wed",hours:3},
    {day:"Thu",hours:2},
    {day:"Fri",hours:0},
]
function checkHours(){
    for(let i=0; i<days.length; i++){
        if(days[i].hours>=2){
            console.log(days[i].day+"  Studied");
        }else{
            console.log(days[i].day+"  Not studied");
        }
    }
};
checkHours();