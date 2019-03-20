const data = {
    staff: [
        { fname: "Jane", lname: "Smith", balance: 10 },
        { fname: "Liam", lname: "Henry", balance: 1000 },
        { fname: "Emma", lname: "Jones", balance: 1330 },
        { fname: "Olivia", lname: "Notly", balance: 310 },
        { fname: "Noah", lname: "Ho", balance: 503 },
        { fname: "William", lname: "Lee", balance: 520 },
        { fname: "Benjamin", lname: "Amis", balance: 150 },
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

    const result = inputArray[0] + '.' + inputArray[1] + '@evolveu.ca';
    return result

}


function makeEmailObject(obj) {

    return (obj.fname + "." + obj.lname + "@evolveu.ca")

}



// Write the function after this comment ---

function loopStaff(objeto) {
    // return ((objeto.fname) + "." +(objeto.fname) + "@evolveu.ca");
    //console.log(objeto)

    const newArr = [];
    objeto.forEach(function(element) {
        //console.log (makeEmailObject(element))

        newArr.push(makeEmailObject(element))


    })

    //console.log (newArr)
    return (newArr)
}

// and before this comment ---

console.log('-----loopStaff')
const staffEmail = loopStaff(data.staff);
// console.log(staffEmail);
assertEquals('Jane.Smith@evolveu.ca', staffEmail[0]);
assertEquals('Olivia.Notly@evolveu.com', staffEmail[3]);
assertEquals('Benjamin.Amis@evolveu.ca', staffEmail[6]);