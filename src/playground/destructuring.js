// 
// Object destructuring
// 

const person = {
  name: "Aure",
  age: 55,
  location: {
    city: 'bordeaux',
    temp: 35
  }
}

// const name = person.name;
// const age = person.age;

// const { name:firstName = "JohnDoe", age } = person;
// console.log(`${firstName} is ${age} of age`);

// const { temp: temperature, city } = person.location
// if (temperature && city) {
//   console.log(`its ${temperature} actually in ${city}`);
// }


const book = {
  title: 'Ego is the enemy',
  author: 'Ryan Holiday',
  publisher: {
    // name: "Penguin"
  }
}

// const { name:publisherName = "Self" } = book.publisher
// console.log(publisherName);

// 
// Array destructuring
// 

const address = ['123 rue test', 'montreal', 'quebec', 'canada'];
const [, city, province = 'alberta', country] = address;
console.log(`I live in ${city}, ${country}`);

const items = ['Coffee (hot)', '2.50$', '2.80$', '3.00$'];
const [itemName, , medium,] = items;
console.log(`A medium ${itemName} costs ${medium}`);
