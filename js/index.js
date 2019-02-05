const a = parseFloat(prompt("Enter a"));
const b = parseFloat(prompt("Enter b"));
const c = parseFloat(prompt("Enter c"));

const discriminant = b*b-4*a*c;
const xOne = (-b+Math.sqrt(discriminant))/(2*a);
const xTwo = (-b-Math.sqrt(discriminant))/(2*a);

const result = calculateQuadraticEquation(a, b, c);
alert(result);

function calculateQuadraticEquation(a, b, c) {
    if (discriminant > 0) {
        return ["X1 = " + xOne + " and X2 = " + xTwo]
    } else {
        return "discriminant equal or less then zero";
    }
}


