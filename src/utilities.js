function addNumbers(a, b) {
    return a + b;
}

let countriesCollection = [
    'United States',
    'United Kingdom',
    'Nigeria',
    'India',
    'China'
]

let johnDoe = {
    name: "John Doe",
    age: 26,
    sex : "male",
    occupation: "Accountant"
}

function asyncPrint() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve("Hello World");
        }, 2000)
    })
}

module.exports = {
    addNumbers,
    countriesCollection,
    johnDoe,
    asyncPrint
}