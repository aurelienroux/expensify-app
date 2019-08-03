import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDz32J-Qj6-LgLXan5JgYNg9D20UZzZt0",
  authDomain: "expensify-9deae.firebaseapp.com",
  databaseURL: "https://expensify-9deae.firebaseio.com",
  projectId: "expensify-9deae",
  storageBucket: "expensify-9deae.appspot.com",
  messagingSenderId: "867802824954",
  appId: "1:867802824954:web:caf5e2ce5bca605b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref('expenses').push({
  description: 'one',
  note: 'note',
  amount: 100,
  createdAt: 1200
});

database.ref('expenses').push({
  description: 'two',
  note: 'nothing',
  amount: 30000,
  createdAt: 2000
});

database.ref('expenses').push({
  description: 'three',
  note: 'another note',
  amount: 321,
  createdAt: 1234444321
});


// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} in ${val.location.city}`);
// }, (e) => {
//   console.log('error subscription: ', e);
// });

// setTimeout(() => {
//   database.ref('name').set('Mike')
// }, 3000);

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with subscription', e);
// });

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//   database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('error: ', e);
//   });

// database.ref().set({
//   name: 'Andrew',
//   age: 26,
//   stressLevel: 6,
//   job: {
//     title: 'software dev',
//     company: 'Google'
//   },
//   location: {
//     city: 'Philly',
//     country: 'USA'
//   }
// }).then(() => {
//   console.log('data is saved');
// }).catch((e) => {
//   console.log('error: ', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref('teach')
//   .remove()
//   .then(() => {
//     console.log('remove successful');
//   })
//   .catch((e) => {
//     console.log('error in removing: ', e);
//   })
