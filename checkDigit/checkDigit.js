/*
Check Digit
Back to questions

Your company assigns each customer a membership ID, and you are implementing a check digit for those IDs.

The check digit should be calculated by adding up all digits in each membership ID. If the result of the sum is a number with more than a single digit, another iteration is required, and the digits of the result also should be added together. This process should repeat until a single-digit number is calculated.

For example, for the membership ID "55555" the sum of all digits is 25. Because this is not a single-digit number, 2 and 5 would be added, and the result, 7, would be the check digit.
*/

/**
 * @prop {string} membershipId: The customer's membership ID.
 * @return {number} The check digit.
 */
function createCheckDigit(membershipId) {
  // Write the code that goes here.

  let g=0;
  let e ="";
  let f = 0;
  for (i=0; i < membershipId.length; i++  )
  {

	g+=Number(membershipId[i]);
  


  }
  e=g+e;
  f = Number(e[0]) + Number(e[1]) 
  return f;
}

console.log(createCheckDigit("55555"));


/*  --- solution 100%
function createCheckDigit(membershipId) {
  var sum = 0;
  for(var i=0;i<membershipId.toString().length;i++){
    sum += parseInt(membershipId.toString()[i]);
  }
  if(sum.toString().length>1){
    sum = createCheckDigit(sum);
  }
  return sum;
}
*/