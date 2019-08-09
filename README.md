# Expensify
Andrew Mead react [Udemy course](https://www.udemy.com/react-2nd-edition/learn/v4/overview),  
This course was just updated to support React v16 (React Fiber)

## Requirements

```npm install```

### packages managers
---
[node](https://nodejs.org/en/) minimum version 8.0.0  
[npm](https://www.npmjs.com/) minimum version 5.0.0  
[yarn](https://yarnpkg.com/lang/en/) minimum version 1.3.0


## Webpack
---

launch server and watcher fro dev purposes
```
npm run dev-server
```

Development build
```
npm run build:dev
```


Production build
```
npm run build:prod
```

## Firebase

create 2 files `.env.development` and `.env.test` for databases
```
FIREBASE_API_KEY=XXXX
FIREBASE_AUTH_DOMAIN=XXXX
FIREBASE_DATABASE_URL=XXXX
FIREBASE_PROJECT_ID=XXXX
FIREBASE_STORAGE_BUCKET=XXXX
FIREBASE_MESSAGING_SENDER_ID=XXXX
FIREBASE_APP_ID=XXXX
```

## Tests

launching test 
```
npm test
```
launching test with watcher 
```
npm test --  --watch
```

## Heroku
CI with Heroku