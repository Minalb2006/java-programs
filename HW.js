
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

//Do while loop//
var i = 1, sum = 0;
do {
  sum = i;
  i++;
} 
while (i <= 5);

//For loop//

for (let i = 1; i <= 5; i++) 
{
 console.log(i);
}




//PROMPT :user who type //
//  var age=confirm("Enter your age:");

// if(age==true);
// {
//     alert("you can vote");
// }
// else if(age==false)
// {
//     alert("you can't vote");
// }
// else
// {
//     alert("please enter valid age");
// }

//character ki length ko detect krna with .length//
// var a="aayush";
// var num=a.length;
// console.log(num);

//chartAt used for detecting the letter number//
// var a="aayush";
// var num=a.chartAt(3);
// console.log(num);

//aski code detect krta hai//
// var a="aayush";
// var num=a.chartAt(3);
// console.log(num);

//name.addto 


let age=17;
let votingCard=false
if(age>=18 && votingCard==true)
{
    console.log("you are eligible for voting");
}
else{
    console.log("you are not eligible for voting");     
}



if(age>=18 || votingCard==true)
{
    console.log("you are eligible for voting");
}
else{
    console.log("you are not eligible for voting");     
}