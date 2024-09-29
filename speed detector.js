let speed = prompt("Input Speed: ");
let limit = 70;
function speedDetector(){
    let responce;
    if(speed <= limit){
        responce = "Ok";
    }else{
        // initialise the point which are every 5km above the limit
        let points = (speed - limit)/5;
        if (points < 12){
            responce = 'points'=Number;
        }else{
            responce = "License suspended";
        }
    }
    return responce;
}
// print to console the result
console.log(speedDetector());