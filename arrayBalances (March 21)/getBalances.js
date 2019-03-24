const data = {
    staff: [
        { fname: "Jane", lname: "Smith", balance: 10 },
        { fname: "Liam", lname: "Henry", balance: 1000 },
        { fname: "Emma", lname: "Jones", balance: 1330 },
        { fname: "Olivia", lname: "Notly", balance: 310 },
        { fname: "Noah", lname: "Ho", balance: 503 },
        { fname: "William", lname: "Lee", balance: 520 },
        { fname: "Benjamin", lname: "Amis", balance: 150 }
    ],
    company: "EvolveU",
    city: "Calgary",
    prov: "Alberta"
};

function assertEquals(a, b) {
    if (a === b) {
        //console.log ("the two values are the same: " )
        return true;
    }
    console.log("the two values are not the same: ");
    console.log("p1 =>", a);
    console.log("p2 =>", b);
    return false;
}

function makeEmailArr(inputArray) {
    const result = inputArray[0] + "." + inputArray[1] + "@evolveu.ca";
    return result;
}

function makeEmailObject(obj) {
    return obj.fname + "." + obj.lname + "@evolveu.ca";
}

// Write the function after this comment ---

function loopStaff(objeto) {
    // return ((objeto.fname) + "." +(objeto.fname) + "@evolveu.ca");
    //console.log(objeto)

    const newArr = [];
    objeto.forEach(function(element) {
        //console.log (makeEmailObject(element))

        newArr.push(makeEmailObject(element));
    });
    return newArr;
}

// and before this comment ---

/*console.log('-----loopStaff')
const staffEmail = loopStaff(data.staff);
 // console.log(staffEmail);
assertEquals('Jane.Smith@evolveu.ca', staffEmail[0]);
assertEquals('Olivia.Notly@evolveu.com', staffEmail[3]);
assertEquals('Benjamin.Amis@evolveu.ca', staffEmail[6]);
*/

function loopWithEach(objeto) {
    // return ((objeto.fname) + "." +(objeto.fname) + "@evolveu.ca");
    //console.log(objeto)

    const newArr = [];
    objeto.forEach(function(element) {
        //console.log (makeEmailObject(element))

        newArr.push(makeEmailObject(element));
    });
    return newArr;
}

function loopWithMap(objeto) {
    const newArr = objeto.map(element => makeEmailObject(element));
    //console.log (newArr)
    return newArr;
}

console.log("-----emailWithEach");
const emailWithEach = loopWithEach(data.staff);
// console.log(emailWithEach);
assertEquals("Jane.Smith@evolveu.ca", emailWithEach[0]);
assertEquals("Olivia.Notly@evolveu.com", emailWithEach[3]);
assertEquals("Benjamin.Amis@evolveu.ca", emailWithEach[6]);

console.log("-----emailWithMap");
const emailWithMap = loopWithMap(data.staff);
// console.log(emailWithMap);
assertEquals("Jane.Smith@evolveu.ca", emailWithMap[0]);
assertEquals("Olivia.Notly@evolveu.com", emailWithMap[3]);
assertEquals("Benjamin.Amis@evolveu.ca", emailWithMap[6]);

// NOON EXERCISE

function loopWithForOf(objeto) {
    const newArr = [];
    for (let o of objeto) {
        //console.log(o);
        newArr.push(makeEmailObject(o));
    }
    return newArr;
}

function loopWithForIn(objeto) {
    const newArr = [];
    for (let o in objeto) {
        //console.log(objeto[o]);
        newArr.push(makeEmailObject(objeto[o]));
    }
    return newArr;
}


function getBalances(arreglo) {
    const totBalance = arreglo.reduce((acum, nextval) => ({ balance: acum.balance + nextval.balance }));
    return (totBalance.balance)
}

function getTotAges(arreglo) {
    //const totAges = arreglo.reduce((acum, nextval) => ({ x: acum.age + nextval.age }));
    let x = 0
    arreglo.forEach(function(element) { x += element.age })
    return (x)
}

function getAvgAges(arreglo) {
    return  getTotAges(arreglo) / arreglo.length
}


//March 22 
console.log("----get Balances");
console.log("the total balance is", getBalances(data.staff));

const nameAge = [
    { name: "Moe", age: 20 },
    { name: "Larry", age: 25 },
    { name: "Curley", age: 15 },
    { name: "Shemp", age: 35 },
    { name: "Joe", age: 12 }

]

console.log("----names and ages");
console.log("the total ages ", getTotAges(nameAge));
console.log("the average is ", getAvgAges(nameAge));




/*
// March 21
console.log("-----emailForOf");
const emailForOf = loopWithForOf(data.staff);
// console.log(emailForOf);
assertEquals("Jane.Smith@evolveu.ca", emailForOf[0]);
assertEquals("Olivia.Notly@evolveu.com", emailForOf[3]);
assertEquals("Benjamin.Amis@evolveu.ca", emailForOf[6]);

console.log("-----emailForIn");
const emailForIn = loopWithForIn(data.staff);
// console.log(emailForIn);
assertEquals("Jane.Smith@evolveu.ca", emailForIn[0]);
assertEquals("Olivia.Notly@evolveu.com", emailForIn[3]);
assertEquals("Benjamin.Amis@evolveu.ca", emailForIn[6]);
*/