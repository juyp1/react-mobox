# `create-react-app + mobx + yarn `

## Javascript : 

react , 
mobx , 
mobx-react , 
yarn , 
react-app-rewired , 
react-app-rewire-mobx ,
---
## Step :  
#### 1. yarn install create-react-app --save -g
#### 2. create-react-app react-mobx-demo
#### 3. yarn add react-app-rewire-mobx react-app-rewired mobx mobx-react --save
#### 4. modify the `package.json`
```
- //modify 
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test --env=jsdom",
  "eject": "react-scripts eject"
}
+ //add
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test --env=jsdom",
    "eject": "react-app-rewired eject"
  }
```
#### 5. create js file `config-overrides.js `
```
const { injectBabelPlugin } = require("react-app-rewired");
const rewireMobX = require("react-app-rewire-mobx");

module.exports = function override(config, env) {
  config = rewireMobX(config, env);

  return config;
};
```
`That's ok! U can use react with mobx like VUE;`

`How to use the mobx ? `

## first -create `store.js` to use mobx 
```
import { observable , action } from 'mobx'

class Store {
    @observable numbers = 0;

    @action.bound adds(){
        this.numbers += 1;
    }
}

export default new Store();
```

## second modify `index.js`
```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
+ import { Provider } from 'mobx-react'
+ import stores from './stores'

ReactDOM.render(
+    <Provider store={stores}>
        <App />
+    </Provider>, document.getElementById('root'));
registerServiceWorker();
```
## find one component to use store 
```
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
+ import { observer , inject } from 'mobx-react'

+ @inject('store')
+ @observer
class App extends Component {
  render() {
+    console.log(this.props)
+    const store = this.props.store
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
 +       <p className="App-intro" onClick={store.adds}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
 +       {store.numbers}
      </div>
    );
  }
}

export default App;
```
`yarn start` start server
`yarn build` build server