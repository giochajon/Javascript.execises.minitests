// Advanced Arrays

const array = [3, 2, 10, 16];

const double = [];

const newArray = array.forEach(num => {
	double.push(num * 2);
});

console.log("forEach", double);

// map filter and reduce

const mapArray = array.map(num => num * 2);

console.log("map", mapArray);

// filter

const filterArray = array.filter(num => {
	return num > 5;
});

console.log("filter", filterArray);

const reduceArray = array.reduce((accumulator, num) => {return accumulator + num}, 0);

console.log("reduce", reduceArray);
