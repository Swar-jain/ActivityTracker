var clicks = 68;
    var a = 60;
    function onClickPlus() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
        if(clicks>100){
          window.alert("Heart Pulse rate is high!!!");
        }
        else if(clicks<68){
            window.alert("Heart Pulse rate is low! Take rest!")
        }
    };
    function onClickMinus() {
        clicks -= 1;
        
        document.getElementById("clicks").innerHTML = clicks;
        if(clicks>100){
            window.alert("Heart Pulse rate is high!!!");
          }
          else if(clicks<68){
              window.alert("Heart Pulse rate is low! Take rest!")
          }
    };
    function onClickPlusBP() {
        a += 1;
        console.log("+");
        document.getElementById("a").innerHTML = a;
        if(clicks>90){
            window.alert("High BP! Take a chill pill!");
          }
          else if(clicks<60){
              window.alert("Low BP grab a sweet bite!")
          }
    };
    function onClickMinusBP() {
        a -= 1;
        console.log("-");
        document.getElementById("a").innerHTML = a;
        if(clicks>90){
            window.alert("High BP! Take a chill pill!");
          }
          else if(clicks<60){
              window.alert("Low BP grab a sweet bite!")
          }
    };
    function colorchange(){
      document.getElementById("GS").style.backgroundColor = "lightblue";
    };

    var caloriesToBeConsumed
    var caloriesToBeBurnt
var caloriesConsumed 
// var caloriesConsumed = document.getElementById('ip1').value
var caloriesBurnt 

// var goalStatus = function()
// {
//     status =''
//     if(caloriesConsumed < caloriesToBeConsumed || caloriesBurnt < caloriesToBeBurnt)
//     status = 'Not Achieved'
//     else
//     status = 'Achieved'
//     return status
// }
// var calTobeConsumed = function()
// {
    
//     caloriesToBeConsumed = 1400
//     return caloriesToBeConsumed
// }
// var calTobeBurnt = function()
// {
//     caloriesToBeBurnt = 300
//     return caloriesToBeBurnt
// }
// document.getElementById('op1').value = calTobeConsumed();
// document.getElementById('op2').value = calTobeBurnt();
// document.getElementById('op3').value = goalStatus();

function calculateBMI(){
    var BMI = 0;
    var age = Number(document.getElementById('Age').value);
    var weight = Number(document.getElementById('weight').value);
    var height = Number(document.getElementById('height').value);
    height = height/100;
    BMI = weight / (height * height);
    document.getElementById("BMI").innerHTML = BMI;     
    var output = BMI;
    console.log(output)
    if (output < 18.5){
        document.getElementById("comment").innerText = "Underweight";
        flag = 1;
    }
    else if (output >= 18.5 && output <= 25){
        document.getElementById("comment").innerText = "Normal";
        flag = 2;
    }
    else if (output >= 25 && output <= 30){
        document.getElementById("comment").innerText = "Obese";
        flag = 3;
    }
    else if (output > 30){
        document.getElementById("comment").innerText = "Overweight";
        flag = 4;
    }
    var gender = document.getElementById('gender').value;  
    var GI = document.getElementById('GI').value;
    console.log(GI);
    // Calories conditions
    //underweight female
    if(flag == 1 && gender == "1" ){
        if(GI == "1"){
            caloriesToBeConsumed = 2500;
            document.getElementById("op1").value = caloriesToBeConsumed;
            caloriesToBeBurnt = 200; 
            document.getElementById("op2").value = caloriesToBeBurnt;
        }
        else if(GI == "2"){
            caloriesToBeConsumed = 2700;
            document.getElementById("op1").value = caloriesToBeConsumed;
            caloriesToBeBurnt = 300; 
            document.getElementById("op2").value = caloriesToBeBurnt;

        }
        else{
            caloriesToBeConsumed = 2900;
            document.getElementById("op1").value = caloriesToBeConsumed;
            caloriesToBeBurnt = 400; 
            document.getElementById("op2").value = caloriesToBeBurnt;
        }
       
    }

    //normal female
    if(flag == 2 && gender == "1" ){
        if(GI == "1"){
            caloriesToBeConsumed = 2000;
            document.getElementById("op1").value = caloriesToBeConsumed;
            caloriesToBeBurnt = 700; 
            document.getElementById("op2").value = caloriesToBeBurnt;
        }
        else if(GI == "2"){
            caloriesToBeConsumed = 2200;
            document.getElementById("op1").value = caloriesToBeConsumed;
            caloriesToBeBurnt = 800; 
            document.getElementById("op2").value = caloriesToBeBurnt;

        }
        else{
            caloriesToBeConsumed = 2400;
            document.getElementById("op1").value = caloriesToBeConsumed;
            caloriesToBeBurnt = 900; 
            document.getElementById("op2").value = caloriesToBeBurnt;
        }
       
    }

    //overweight female

    if(flag == 3 && gender == "1" ){
        if(GI == "1"){
            caloriesToBeConsumed = 2000;
            document.getElementById("op1").value = caloriesToBeConsumed;
            caloriesToBeBurnt = 750; 
            document.getElementById("op2").value = caloriesToBeBurnt;
        }
        else if(GI == "2"){
            caloriesToBeConsumed = 2000;
            document.getElementById("op1").value = caloriesToBeConsumed;
            caloriesToBeBurnt = 850; 
            document.getElementById("op2").value = caloriesToBeBurnt;

        }
        else{
            caloriesToBeConsumed = 2000;
            document.getElementById("op1").value = caloriesToBeConsumed;
            caloriesToBeBurnt = 950; 
            document.getElementById("op2").value = caloriesToBeBurnt;
        }
       
    }

    //obese female
    if(flag == 4 && gender == "1" ){
        if(GI == "1"){
            caloriesToBeConsumed = 2200;
            document.getElementById("op1").value = caloriesToBeConsumed;
            caloriesToBeBurnt = 600; 
            document.getElementById("op2").value = caloriesToBeBurnt;
        }
        else if(GI == "2"){
            caloriesToBeConsumed = 2200;
            document.getElementById("op1").value = caloriesToBeConsumed;
            caloriesToBeBurnt = 700; 
            document.getElementById("op2").value = caloriesToBeBurnt;

        }
        else{
            caloriesToBeConsumed = 2200;
            document.getElementById("op1").value = caloriesToBeConsumed;
            caloriesToBeBurnt = 800; 
            document.getElementById("op2").value = caloriesToBeBurnt;
        }
       
    }




    //underweight male 

    if(flag == 1 && gender == "2"){
        if(GI == "1"){
            caloriesToBeConsumed = 3000;
            document.getElementById("op1").value = caloriesToBeConsumed;
            caloriesToBeBurnt = 300; 
            document.getElementById("op2").value = caloriesToBeBurnt;
        }
        else if(GI == "2"){
            caloriesToBeConsumed = 3200;
            document.getElementById("op1").value = caloriesToBeConsumed;
            caloriesToBeBurnt = 400; 
            document.getElementById("op2").value = caloriesToBeBurnt;

        }
        else{
            caloriesToBeConsumed = 3400;
            document.getElementById("op1").value = caloriesToBeConsumed;
            caloriesToBeBurnt = 500; 
            document.getElementById("op2").value = caloriesToBeBurnt;
        }
     }

     //Normal Male 

     if(flag == 2 && gender == "2"){
        if(GI == "1"){
            caloriesToBeConsumed = 2500;
            document.getElementById("op1").value = caloriesToBeConsumed;
            caloriesToBeBurnt = 800; 
            document.getElementById("op2").value = caloriesToBeBurnt;
        }
        else if(GI == "2"){
            caloriesToBeConsumed = 2700;
            document.getElementById("op1").value = caloriesToBeConsumed;
            caloriesToBeBurnt = 900; 
            document.getElementById("op2").value = caloriesToBeBurnt;

        }
        else{
            caloriesToBeConsumed = 2900;
            document.getElementById("op1").value = caloriesToBeConsumed;
            caloriesToBeBurnt = 1000; 
            document.getElementById("op2").value = caloriesToBeBurnt;
        }
     }

     //male overweight

     if(flag == 3 && gender == "2"){
        if(GI == "1"){
            caloriesToBeConsumed = 2200;
            document.getElementById("op1").value = caloriesToBeConsumed;
            caloriesToBeBurnt = 850; 
            document.getElementById("op2").value = caloriesToBeBurnt;
        }
        else if(GI == "2"){
            caloriesToBeConsumed = 2200;
            document.getElementById("op1").value = caloriesToBeConsumed;
            caloriesToBeBurnt = 950; 
            document.getElementById("op2").value = caloriesToBeBurnt;

        }
        else{
            caloriesToBeConsumed = 2200;
            document.getElementById("op1").value = caloriesToBeConsumed;
            caloriesToBeBurnt = 1000; 
            document.getElementById("op2").value = caloriesToBeBurnt;
        }
     }

     //male obese

     if(flag == 4 && gender == "2"){
        if(GI == "1"){
            caloriesToBeConsumed = 2000;
            document.getElementById("op1").value = caloriesToBeConsumed;
            caloriesToBeBurnt = 700; 
            document.getElementById("op2").value = caloriesToBeBurnt;
        }
        else if(GI == "2"){
            caloriesToBeConsumed = 2000;
            document.getElementById("op1").value = caloriesToBeConsumed;
            caloriesToBeBurnt = 800; 
            document.getElementById("op2").value = caloriesToBeBurnt;

        }
        else{
            caloriesToBeConsumed = 2000;
            document.getElementById("op1").value = caloriesToBeConsumed;
            caloriesToBeBurnt = 900; 
            document.getElementById("op2").value = caloriesToBeBurnt;
        }
     }



    caloriesToBeConsumed = 1400
    return caloriesToBeConsumed;


};

var burn = 0;
var steps = 0;
var stair = 0;
function onClickStep(){
    steps += 50;
    burn = (steps * 5) + (stair * 10);
    document.getElementById("Steps").innerHTML = steps;
    displaygoalstatus();
};
function onClickStair(){
    stair += 1;
    burn = (steps * 5) + (stair * 10);
    document.getElementById("Stair").innerHTML = stair;
    displaygoalstatus();
};
function displaygoalstatus() {
    status =''
    if(burn < caloriesToBeBurnt)
        status = 'Not Achieved'
    else
        status = 'Achieved'
    document.getElementById('op3').value = status;


};

//Time

function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function() {
      startTime()
    }, 500);
  }
  startTime();
