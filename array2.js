//delete() : array mein ke ek element ko dlete krte hai aur uski jgh vaisehi khali rkhata hai //
// const q=["html","css","js","react"];
// var r= q.delete[2];
// document.writeln(r);
// document.writeln("<br>");

//concat() : ye two array ko add krta hai (merge krta hai)//
const mygirls =["minal","vaidehi","shrawni"];
const myboys =["akash","ayush","lokesh"];
var s= mygirls.concat(myboys);
document.writeln(s);
document.writeln("<br>");

//copywithin() : array ke elements mein se konse position se cut hoga ,, aur konse position se add hoga ye btata hai//
const t=["minal","b","c","akash","e","ayush","g"];
var u=t.copyWithin(3,6);
document.writeln(u);
document.writeln("<br>");   

//flat() : we can create multiple array at main array//
const myarr=[[1,2],[3,4],[5,6],[7,8],[9,10]];
var newarr=myarr.flat();
document.writeln(newarr);
document.writeln("<br>");

//flatmap : original array mein rendeing krakr new array bnate hai jaise addition,division,multiplication,division//
const arr1=[1,2,3,4,5];
var arr2=arr1.flatMap((num)=> num *3);
document.writeln(arr2);
document.writeln("<br>");

const arr3=[1,2,3,4,5];
var arr4=arr3.flatMap((num)=> num +3);
document.writeln(arr4);
document.writeln("<br>");

const arr5=[1,2,3,4,5];
var arr6=arr5.flatMap((num)=> num -3);
document.writeln(arr6);
document.writeln("<br>");

const arr7=[1,2,3,4,5];
var arr8=arr7.flatMap((num)=> num /3);
document.writeln(arr8);
document.writeln("<br>");

