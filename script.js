//for addition:
function addition(){
    let first = +document.getElementById("firstnum").value;
    let second = +document.getElementById("secondnum").value;

    //clear previous calculation

    document.getElementById("result").innerHTML = "";

    document.getElementById("result").innerHTML = `${first} + ${second} = ${first + second}`;
}


//for subtraction
function subtraction(){
    let first = +document.getElementById("firstnum").value;
    let second = +document.getElementById("secondnum").value;

    //clear previous calculation

    document.getElementById("result").innerHTML = "";

    document.getElementById("result").innerHTML = `${first} - ${second} = ${first - second}`;
}


//for multiplication:
function multiplication(){
    let first = +document.getElementById("firstnum").value;
    let second = +document.getElementById("secondnum").value;

    //clear previous calculation

    document.getElementById("result").innerHTML = "";

    document.getElementById("result").innerHTML = `${first} X ${second} = ${first * second}`;
}


//for division:
function division(){
    let first = +document.getElementById("firstnum").value;
    let second = +document.getElementById("secondnum").value;

    //clear previous calculation

    document.getElementById("result").innerHTML = "";

    document.getElementById("result").innerHTML = `${first} / ${second} = ${first / second}`;
}


//for refresh
function refresh(){
   
    document.getElementById("firstnum").value = "";
    document.getElementById("secondnum").value = "";
    document.getElementById("result").innerHTML = "Result";
   

} 