const a = parseFloat(prompt("Enter a"));
const b = parseFloat(prompt("Enter b"));
const c = parseFloat(prompt("Enter c"));



const result = calculateQdE(a, b, c);
alert(result);

function calculateQdE(a, b, c) {

    const discrim = b * b - 4 * a * c;
    const xOne = (-b+Math.sqrt(discrim))/(2*a);
    const xTwo = (-b-Math.sqrt(discrim))/(2*a);
    if (discrim > 0) {
    return ["X1= " + xOne + ", X2= " + xTwo];
}else{
    return "D <= 0"
}
}