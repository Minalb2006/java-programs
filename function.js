//Function javascript
var a=prompt("Enter the value of a");
var b=prompt("Enter the value of b");
a=Number(a);
b=Number(b);
function add(a,b);
return (a+b);
function sub(a,b);
return (a-b);
function mul(a,b);
return (a*b);
function div(a,b);
return(a/b);

let user=prompt ("Enter the operation that uh have to perform at the calculator");
user=Number(user);

switch(user){
case 1:
    let r1=add(a,b);
    document.write(r1);
    break;
case 2:
    let r2=sub(a,b);
    document.write(r1);
    break;
case 3:
    let r3=mul(a,b);
    document.write(r1);
    break;
case 4:
    let r4=div(a,b);
    document.write(r1);
    break;
}
    
