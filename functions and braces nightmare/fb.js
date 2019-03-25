console.log("Hello from exercises");

const array1 = [3, 1];

// write the function that will make this work

function orderArray(inpArray) {
    let a = inpArray[0];
    let b = inpArray[1];
    let c = [];
    if (a > b) {
        c = [b, a];
    } else {
        c = [a, b];
    }

    return c;
}

console.log("Should Be: 1, 3:", orderArray(array1));

console.log("Should Be: 1, 5:", orderArray([1, 5]));

console.log("Should Be: 10, 20:", orderArray([20, 10]));