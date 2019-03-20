const people = [
    { name: "Alex", age: 5 },
    { name: "Gio", age: 6 },
    { name: "Roman", age: 15 },
    { name: "Tylor", age: 24 },
    { name: "Faith", age: 17 },
    { name: "Jawad", age: 33 },

]

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

function totAge(a) {
    //	console.log (acc)
    //console.log( a.reduce((b, c) => ({age: b.age + c.age})))
    let promedio = (a.reduce((b, c) => ({ age: b.age + c.age })))
    return (promedio.age)
}


function avgAge(a) {
    return totAge(a) / a.length
}


assertEquals(totAge(people), 100)
//console.log(totAge(people))
assertEquals(avgAge(people), 16.166)
//console.log(avgAge(people))