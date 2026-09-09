//tingimuslause

if (true) { //kui tõene
 //siis teeb
}
else if (false) {
    //teeb seda kui tõene
}
else {
    //kui ei eelmised siis teeb seda
}

const month: number = 9;
let monthName: string;
switch (month) {
    case 1:
        monthName = "jaanuar"
        break;
    case 5:
        monthName = "mai";
        break;
    case 9: 
        monthName = "september";
        break;
    default:
        monthName = "unown";
        break;
}

console.log(monthName);
let isThisOddOrEven = 9;
let oddEvenBool = isThisOddOrEven % 2 == 0 ? "even" : "odd"
console.log(oddEvenBool)

//loogilised operaatorid
if (month && monthName) {
    console.log("on mõlemad")
}
if (month || monthName) {
    console.log("on üks või teine")
}
if (!month) {
    console.log("kuu arv puudub")
}