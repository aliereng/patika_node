const circleArea = (r) => {
    const area = Math.PI * r * r;
    return area.toFixed(2);
}

const circleCircumference = (r) => {
    const circumference = 2 * Math.PI * r;
    return circumference.toFixed(2);
}

module.exports = {
    circleArea, 
    circleCircumference
}