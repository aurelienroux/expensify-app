# react-indecision
Andrew Mead react [Udemy course](https://www.udemy.com/react-2nd-edition/learn/v4/overview),  
This course was just updated to support React v16 (React Fiber)

## requirements

### packages managers
---
[node](https://nodejs.org/en/) minimum version 8.0.0  
[npm](https://www.npmjs.com/) minimum version 5.0.0  
[yarn](https://yarnpkg.com/lang/en/) minimum version 1.3.0

install [Yarn](https://yarnpkg.com/lang/en/) globally
```
npm install -g yarn
```

install [live-server](https://yarnpkg.com/en/package/live-server) globally and launch
```
yarn global add live-server
```
```
live-server $folder-name
```

### Babel
---
install babel-cli
```
yarn global add babel-cli@6.24.1
```

install babel dependencies [env](https://babeljs.io/docs/plugins/preset-env/) and [react](https://babeljs.io/docs/plugins/preset-react/)
```
yarn add babel-preset-react@6.25.1 babel-preset-env@1.5.2
```

setup Babel and launch watcher
```
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
```

### Webpack
---

launch server and watcher
```
npm run dev-server
```