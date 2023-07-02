const circle = require("./circle.js");

const arguments = process.argv.slice(2);
const calculateCircleArea = circle.circleArea;
const  calculateCicleCircummference = circle.circleCircumference;

const calculatedArea = calculateCircleArea(parseInt(arguments[0]));
const calculatedCicleCircummference = calculateCicleCircummference(parseInt(arguments[0]));

console.log(`area: ${calculatedArea}\ncircumference: ${calculatedCicleCircummference}`);

