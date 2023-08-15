const max_length = 12;
let sum = "";

function calculation(number){
    if(sum.length < max_length){
        sum += number;
        document.getElementById("display").innerHTML = sum;
    }
}

function deleteOne(){
    let display = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = display.substring(0, display.length-1);
    sum = document.getElementById("display").innerHTML;
    console.log(sum);
}

function deleteAll(){
    document.getElementById("display").innerHTML = "";
    sum = "";
}

function equal(){
    document.getElementById("display").innerHTML = eval(sum)
    sum = document.getElementById("display").innerHTML;
}

function signal(){
    let display = document.getElementById("display").innerHTML;

    if(display[0] == "-"){
        document.getElementById("display").innerHTML = display.substring(1, display.length);}
    else{
        document.getElementById("display").innerHTML = "-" + display;}

    sum = document.getElementById("display").innerHTML;
}

