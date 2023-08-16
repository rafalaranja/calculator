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
}

function deleteAll(){
    document.getElementById("display").innerHTML = "";
    sum = "";
}

function signal(){
    let display = document.getElementById("display").innerHTML;

    if(display[0] == "-"){
        document.getElementById("display").innerHTML = display.substring(1, display.length);}
    else{
        document.getElementById("display").innerHTML = "-" + display;}

    sum = document.getElementById("display").innerHTML;
}

function equal(){
    try{
    result = eval(sum);
    rounded = result.toString().length > max_length ? result.toFixed(4) : result;   //verify if the result is bigger than the max_length
    document.getElementById("display").innerHTML = rounded
    sum = document.getElementById("display").innerHTML;
    }
    catch(err){
        alert("Invalid operation");
    }
}

function root(){
    let root = Math.sqrt(sum);
    if(isNaN(root)){                                                                //verify if the result is valid
        alert("Invalid operation");
    }
    else{
        root = root.toString().length > max_length ? root.toFixed(4) : root;        //verify if the result is bigger than the max_length
        document.getElementById("display").innerHTML = root;
        sum = document.getElementById("display").innerHTML;
    }   
}

