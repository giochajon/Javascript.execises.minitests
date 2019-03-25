/*



Write a function that converts user entered date formatted as M/D/YYYY to a format required by an API (YYYYMMDD). The parameter "userDate" and the return value are strings.

For example, it should convert user entered date "12/31/2014" to "20141231" suitable for the API.


*/


function AddLeadingZero(num) {
    return (num < 10 ? '0' : '') + num;
}

function formatDate(userDate) {
    // format from M/D/YYYY to YYYYMMDD
    var [month, day, year] = userDate.split('/');
    return year + AddLeadingZero(month) + AddLeadingZero(day);
}


console.log(formatDate("12/31/2014"));