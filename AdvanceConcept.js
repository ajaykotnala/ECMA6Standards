//Set 
var items = new Set(["2",1,2,3,4])
items.add("5");
items.add(5);
// sets are ordered unique list it will not add string 5 again as it allready extists.
items.add("5");
items.clear();
console.log(items.size);
console.log(items.has("5")); //true
console.log(items.has("4")); //true  string 4 doesnot exists


// Maps are dictionaries  like json object
//Maps are ordered the order things in the order things comeout.
//maps should have key in string else error.

var person = new Map([["town","hyd"],["kids",0]]);
person.set("name","ajay");
person.set("age","meture");
person.set("single",true);

person.size; //directly you can check its size.
console.log(person)
if(person.has("name")){
    console.log(`person has key called Name and its value is !! ${person.get("name")}`);
}