function assertEquals(a, b) {
	if (a === b) {
		console.log("OK =>", a);
		return  true;
	} 
		console.log("the two values are not the same: ");
		console.log("p1 =>", a);
		console.log("p2 =>", b);
		return false;
	
}


/*	
	Write the function to format an email based on an array
*/

// Write the function after this comment ---


 function makeEmailArr (inputArray)
 {

 const result = inputArray[0]+ '.' + inputArray[1] + '@evolveu.ca' ;
 return result

 }



// and before this comment ---

const arrayLarry = ['larry', 'shumlich'];
assertEquals('larry.shumlich@evolveu.ca', makeEmailArr(arrayLarry));
assertEquals('bill.smith@evolveu.com', makeEmailArr(['bill','smith']));
assertEquals('amy.jones@evolveu.ca', makeEmailArr(['amy','jones']));