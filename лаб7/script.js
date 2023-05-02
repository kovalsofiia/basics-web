
let form = document.getElementById("form");
let inputCollection = form.getElementsByTagName("input");
function test(){
    let randomNum1 = Number(Math.floor(Math.random()*10));
    let randomNum2 = Number(Math.floor(Math.random()*10));
    inputCollection[0].value = randomNum1;
    inputCollection[1].value = randomNum2;
}

let result = Number.inputCollection[0].value + Number.inputCollection[1].value;
function onclick(){
    let answer = Number(inputCollection[2].value);
    if(result==answer){
        document.getElementById("result").innerHTML = "Ok";
        
    }
    else{
        document.getElementById("result").innerHTML = "Not okay";
    }
}


