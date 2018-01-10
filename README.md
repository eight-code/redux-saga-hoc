# redux-saga-hoc
is a react HOC that comes to be plugged into react components and the saga middleware saga, it allows to add the saga functions within the react component, also to start one or more saga(s) and possiblity to stop them.

### Installation
To install the stable version:

```js
npm install --save redux-saga-hoc
````
This assumes you are using npm as your package manager.

### Usage

#### Entry.js
This part may differ for each of you.
```js

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ConfigStore from './ConfigStore';
import rootComponent from './rootComponent';

const store = new ConfigStore();

ReactDOM.render(
  <Provider store={store}>
    <rootComponent />
  </Provider>,
  document.getElementById('app-entry'),
);

````

### IMPORTANT
in your store API you must have a function called runSaga :
```js

class ConfigureStore {
  // all store logic
  const sagaMiddleware = createSagaMiddleware();
  
  Object.assign(this, reduxStore, {
    runSaga: sagaMiddleware.run
  });
}

````

#### RootComponent.js

redux-saga-hoc takes in parameter the component and a array of sagas and when the component is mounted it launches the sagas passed in parametre

```js
import React, { Component } from 'react';
import HOCsaga from 'redux-saga-hoc';

import { saga1, saga2, saga3 } from './sagas';

class RootComponent extends Component {
  
  contructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="example">
        <button onClick={() => this.props.cancelSagas()}>Stop Sagas</button>
        <subComponent />
      </div>
    );
  }
}
export default HOCsaga(RootComponent, [saga1, saga2, saga3]);

````

## Support on Beerpay
Hey dude! Help me out for a couple of :beers:!

[![Beerpay](https://beerpay.io/hajjiTarik/redux-saga-hoc/badge.svg?style=beer-square)](https://beerpay.io/hajjiTarik/redux-saga-hoc)  [![Beerpay](https://beerpay.io/hajjiTarik/redux-saga-hoc/make-wish.svg?style=flat-square)](https://beerpay.io/hajjiTarik/redux-saga-hoc?focus=wish)

## Licence
MIT

## Author
Hajji Tarik.
