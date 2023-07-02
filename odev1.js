const arguments = process.argv.slice(2);

function calcCircleArea(r){
    let area = Math.PI * r * r;
    console.log(`yarıçap: ${r}\nalan: ${area.toFixed(2)}
    `)
}

calcCircleArea(arguments[0]*1);
