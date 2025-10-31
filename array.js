//Methods of array//
// .length : array mein kitne element hai ginkr deta hai//
const a=["apple","banana","pinapple"];
let b = a.length;
document.writeln(b);
document.writeln("<br>");


// .toString() : string mein convert krta hai//
const c=[3,4,76,888,2957];
var d = c.toString();
document.writeln(d);
document.writeln("<br>");

// typeof=(d) : ye output konse type ka hai voh btata hai//

//.at() : array store data mein se konse no par konsa element hai voh btata hai//
const e=[1,2,3,4,5];
var f = e.at(3);
document.writeln(f);
document.writeln("<br>");

//join() : array mein comma ke jghh par dusra speacial character add krta hai//
const g=["red","blue","black","white"];
var h=g.join("-");
document.writeln(h)  ;
document.writeln("<br>");


//pop() : array mein se last character ko cut krta hai//
const i=["akash","ayush","lokesh","lucky","jay"];
var j=i.pop();
document.writeln(i);
document.writeln("<br>");


//push() : array mein se last character ko add krta hai//
const k=["akash","ayush","lokesh","lucky"];
var l=k.push("minal");
document.writeln(k);
document.writeln("<br>");


//shift() : array mein se first character ko cut krta hai//
const m=["red","blue","green","black"];
var n=m.shift();
document.writeln(m);
document.writeln("<br>");


//unshift() : array mein se first character mein add krta hai//
const o=["parrot","dog","cat","tiger"];
var p=o.unshift("snake");
document.writeln(o);
document.writeln("<br>");

