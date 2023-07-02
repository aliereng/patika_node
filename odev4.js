const fs = require('fs');

fs.writeFile("employees.json", '{"name": "Employee 1 Name", "salary": 2000}', 'utf-8', (err)=> {
    if(err) console.log(err)
})

fs.readFile('employees.json', 'utf-8', (err, data)=> {
    if(err) console.log(err);
    console.log(data)
})

fs.writeFile("employees.json", '{"name": "Employee 1 Name Updated", "salary": 2000}', 'utf-8', (err)=> {
    if(err) console.log(err)
})

setTimeout(() => {
    fs.unlink('employees.json', (err)=> {
        if(err) console.log(err)
    })
}, 10000);