
//HOMEWORK//

//And && Operator//
var a=12;
var b=30;
if(a==12 && b==30)
{
    console.log("The time is 12:30");
}

//OR || Operator//
var hour=9;
if(hour<10 || hour>18)
{
    console.log("The office is closed.");
}

//NOT ! Operator//
var loggedIn=false;
if(!loggedIn)
{
    console.log("Please log in first!");
}
else{
    console.log("Login Denied")
}

// while loop //
var i=0;
while(i<3) 
{
    console.log(i);
    i++;
}

// character ki length ko detect krna with .length//
var a="aayush";
var num=a.length;
console.log(num);

// red


//If else example//
var age=17;
let votingCard=false
if(age>=18 && votingCard==true)
{
    console.log("you are eligible for voting");
}
else{
    console.log("you are not eligible for voting");     
}


//If else example//
if(age>=18 || votingCard==true)
{
    console.log("you are eligible for voting");
}
else{
    console.log("you are not eligible for voting");     
}


//If else example//
let colo=prompt("Enter the color of traffic light:");
if(colo=="red")
{
    console.log("Stop");
}else if(colo=="yellow")
{
    console.log("Ready");
}else if(colo=="green")
{
    console.log("Go");
}else{
    console.log("Invalid color");
}


//for loop example//
for(a=0;a>=10;a++){
    console.log(a);
}

//Else if statement HOMEWORK TODAY//
var age=12;

if(age==10)
{
    console.log("payment has been credited by 1000 rupees only");
}
else if(age==11)
{
    console.log("payment credited 2000 rupees only");
}
else if(age==12)
{
    console.log("payment has been credited by 3000 rupees only");
}
else if(age==13)
{
    console.log("payment has been credited by 4000 rupees only");
}
else if(age==14)
{
    console.log("payment has been credited by 5000 rupees only");
}
else if(age==15)
{
    console.log("payment has been credited by 6000 rupees only");
}
else{
    console.log("no payment has been credited");
}

//Else if statement HOMEWORK TODAY 2//
var button=2;

if(button==1)
{
    console.log("turn on fan");
}
else if(button==2)
{
    console.log("turn on T.V");
}
else if(button==3)
{
    console.log("turn on lights");
}
else if(button==4)
{
    console.log("turn on AC");
}
else if(button==5)
{
    console.log("turn on geyser");
}
else if(button==6)
{
    console.log("turn on gas");
}
else if(button==7)
{
    console.log("turn on fridge");
}
else if(button==8)
{
    console.log("turn off all appliances at same time");
}
else{
    console.log("no appliance is on");
}