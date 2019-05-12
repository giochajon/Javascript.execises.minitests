let people = [
    { fname: "Alex", lname: "Smith", province: "BC", age: 33 },
    { fname: "Angela", lname: "Jones", province: "AB", age: 61 },
    { fname: "Anne", lname: "Bird", province: "SK", age: 35 },
    { fname: "Brent", lname: "Riddle", province: "MN", age: 79 },
    { fname: "Byron", lname: "Cardenas", province: "BC", age: 38 },
    { fname: "Carrie", lname: "Ramirez", province: "AB", age: 89 },
    { fname: "Cheryl", lname: "Glenn", province: "SK", age: 70 },
    { fname: "Dima", lname: "Curry", province: "MN", age: 67 },
    { fname: "Dustin", lname: "Bullock", province: "BC", age: 59 },
    { fname: "Eva", lname: "Keiths", province: "AB", age: 24 },
    { fname: "Faith", lname: "Liu", province: "SK", age: 46 },
    { fname: "Fawad", lname: "Bowman", province: "MN", age: 69 },
    { fname: "Forest", lname: "Vaughn", province: "BC", age: 52 },
    { fname: "Giovanni", lname: "Browning", province: "AB", age: 32 },
    { fname: "Greg", lname: "Hogan", province: "SK", age: 55 },
    { fname: "Harpreet", lname: "Ramsey", province: "MN", age: 18 },
    { fname: "Ian", lname: "Fitzgerald", province: "BC", age: 16 },
    { fname: "James", lname: "Kramer", province: "AB", age: 57 },
    { fname: "Jarvis", lname: "Ortega", province: "SK", age: 69 },
    { fname: "Jawad", lname: "Huerta", province: "MN", age: 35 },
    { fname: "Jinbong", lname: "Robinson", province: "BC", age: 26 },
    { fname: "Jingnan", lname: "Hatfield", province: "AB", age: 71 },
    { fname: "Joe", lname: "Banks", province: "SK", age: 37 },
    { fname: "Kristina", lname: "Dalton", province: "MN", age: 73 },
    { fname: "Latora", lname: "Matthews", province: "BC", age: 25 },
    { fname: "Lauren", lname: "McClure", province: "AB", age: 42 },
    { fname: "Licedt", lname: "Rasmussen", province: "SK", age: 30 },
    { fname: "Linden", lname: "Pierce", province: "MN", age: 68 },
    { fname: "Luis", lname: "Price", province: "BC", age: 23 },
    { fname: "Marcela", lname: "Perez", province: "AB", age: 20 },
    { fname: "Marilou", lname: "Graham", province: "SK", age: 32 },
    { fname: "Matt", lname: "Novak", province: "MN", age: 29 },
    { fname: "Monica", lname: "Giles", province: "BC", age: 34 },
    { fname: "Niloufar", lname: "Carson", province: "AB", age: 29 },
    { fname: "Omar", lname: "Olson", province: "SK", age: 69 },
    { fname: "Roger", lname: "Woodard", province: "MN", age: 84 },
    { fname: "Roman", lname: "Swanson", province: "BC", age: 21 },
    { fname: "Seun", lname: "Kelly", province: "AB", age: 60 },
    { fname: "Shane", lname: "Frost", province: "SK", age: 87 },
    { fname: "Steven", lname: "Haynes", province: "MN", age: 47 },
    { fname: "Thomas", lname: "Hart", province: "BC", age: 14 },
    { fname: "Trent", lname: "Kerr", province: "AB", age: 12 },
    { fname: "Darrell", lname: "Koch", province: "SK", age: 10 },
    { fname: "Tylor", lname: "Torres", province: "MN", age: 98 }
];




//function 1 testing the filter
/*
function processPeople (data)
{
let abbc = data.filter(function(element) {return ((element.province === "BC" || element.province === "AB")&&(element.age <=25))  });
console.log (abbc) 
}
processPeople(people)
*/

//version 2 passes the filter, returns filtered the array
// let processPeople = function(data, callback) {

// let a = data.filter (callback)

// console.log (a) 	
// }
// //
// // Here is invoking the processPeople function.  Write the callback
// // function as an anonymous function
// //
// processPeople(people, function(item) {return ((item.province === "BC" || item.province === "AB")&&(item.age <=25))  });


//version 3 returns the filtered array
/*
let processPeople = function(data, callback) {
 let a = data.filter (function(element) {return ((element.province === "BC" || element.province === "AB")&&(element.age <=25))  });
  a.forEach((element) => {callback (element.fname +" "+ element.lname + " " + element.age)})
}
 //
 // Here is invoking the processPeople function.  Write the callback
 // function as an anonymous function
 //
 processPeople(people, function(item) {console.log(item) });

*/

// version 4 send filter for over 25 in the callback and the console as per instructions and video 
let processPeople = function(data, callback) {
    let a = data.filter(function(element) { return ((element.province === "BC" || element.province === "AB")) });
    a.forEach((element) => { callback(element) })
}
//
// Here is invoking the processPeople function.  Write the callback
// function as an anonymous function
//
//processPeople(people, function(item) { if (item.age < 25) { console.log(item.fname + " " + item.lname + " " + item.age) } });

processPeople(people, function(item) { if (item.age < 25) { console.log(item.fname + " " + item.lname + " " + item.age) } });



let determineTotal = function() { 
	a = 0
	b = 0
	processPeople(people, function(item) {  a++ ; {b=b+item.age} } );
	console.log ("Exercise Apr 29 total items =" + a + " total Ages ="+b +" average ages ="+ (b/a) )

};
//
determineTotal();