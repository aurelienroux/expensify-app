// children subscription
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log('item removed: ', snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_changed', (snapshot) => {
  console.log('item has changed: ', snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_added', (snapshot) => {
  console.log('item has been added: ', snapshot.key, snapshot.val());
});


// convert as firebase array with unique subscription
database.ref('expenses')
  .once('value')
  .then((snapshot) => {
    const expenses = [];

    snapshot.forEach((el) => {
      expenses.push({
        id: el.key,
        ...el.val()
      })
    })

    console.log(expenses);
  });


// convert as firebase array with permanent subscription
database.ref('expenses').on('value', (snapshot) => {
  const expenses = [];

  snapshot.forEach((el) => {
    expenses.push({
      id: el.key,
      ...el.val()
    })
  });

  console.log(expenses);
}, (e) => {
  console.log('error subscription: ', e);
});


// push to firebase array
database.ref('expenses').push({
  description: 'one',
  note: 'note',
  amount: 100,
  createdAt: 1200
});


// permanent subscription
database.ref().on('value', (snapshot) => {
  const val = snapshot.val();
  console.log(`${val.name} is a ${val.job.title} in ${val.location.city}`);
}, (e) => {
  console.log('error subscription: ', e);
});

setTimeout(() => {
  database.ref('name').set('Mike')
}, 3000);

const onValueChange = database.ref().on('value', (snapshot) => {
  console.log(snapshot.val());
}, (e) => {
  console.log('Error with subscription', e);
});

setTimeout(() => {
  database.ref('age').set(29);
}, 3500);

// cancel subscription
setTimeout(() => {
  database.ref().off('value', onValueChange);
}, 7000);

setTimeout(() => {
  database.ref('age').set(30);
}, 10500);


// unique subscription
database.ref()
  .once('value')
  .then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
  })
  .catch((e) => {
    console.log('error: ', e);
  });


// create
database.ref().set({
  name: 'Andrew',
  age: 26,
  stressLevel: 6,
  job: {
    title: 'software dev',
    company: 'Google'
  },
  location: {
    city: 'Philly',
    country: 'USA'
  }
}).then(() => {
  console.log('data is saved');
}).catch((e) => {
  console.log('error: ', e);
});


// update
database.ref().update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'location/city': 'Seattle'
});


// delete
database.ref('teach')
  .remove()
  .then(() => {
    console.log('remove successful');
  })
  .catch((e) => {
    console.log('error in removing: ', e);
  })
