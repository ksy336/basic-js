const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
//for (const item of members) {
  if (!Array.isArray(members)){
    return false;
  }


   return  members.filter((item) => typeof item === 'string').flatMap((item) => item.trim()[0].toUpperCase()).sort().join('');
   // myArr.push()
    //return myArr.map(function(item) { return item[0]}).join('').toUpperCase().split('').sort().join('').trim();
  //}
  //let myArr = members.filter((item) => typeof item === 'string'? item : false);
  //let res = myArr.join('').trim().split('');

 //let res =  myArr.toUpperCase().sort().join('').trim();
     //return myArr.map(function(item) { return item[0]}).join('').toUpperCase().split('').sort().join('').trim()/*.reduce (function (prev, curr){return prev + curr},'');

  //} else {
   // return false;
  //}
//}



  //let myArr = members.filter (function(item) {
    //if (typeof members[i] !== 'string') {
     // return false;
    //}
  //let myArr = members.sort().filter(function(item) { return (typeof item === 'string'? item[0].toUpperCase() : false)});
   /*members.sort().filter(function(item) { return (typeof item === 'string'? item : false)})myArr.map((element) => element[0].toUpperCase())*/
  //if (typeof value === 'string') {
    //return members.sort().map(function(item) { return item[0].toUpperCase()}).reduce (function (prev, curr){return prev + curr},'');
  //}
  //return members.sort().map(function(item) { return item[0].toUpperCase()}).reduce (function (prev, curr){return prev + curr},'');
  //if (typeof value !== 'string') {return false};
      //.sort().toUpperCase().join('');
  //else {
   // return false
 // }

};
