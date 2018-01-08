# Redux Saga HOC (Higher Order Component):clock1230:
is a react HOC that comes to be plugged into components and the sagas, it allows to run, cancel saga.
# ![alt tag](http://i.imgur.com/sfbpiE8.png)

### Installation
To install the stable version:

```js
npm install --save redux-saga-hoc
```
This assumes you are using npm as your package manager.

### Usage

#### Entry
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

```
#### RootComponent

redux-saga-hoc takes in parameter the component and a array of sagas and when the component is mounted it launches the sagas passed in parametre

```js
import React, { Component } from 'react';
import sagaHOC from 'redux-saga-hoc';

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
export default sagaHOC(RootComponent, [saga1, saga2, saga3]);

```

### AFTER (SAGA HOC)

#### in saga
```js
function* rootSaga() {
  yield takeEvery('ACTION_1', saga_1);
  yield takeLatest('ACTION_2', saga_2);
  yield takeEvery('ACTION_3', saga_3);
  yield takeEvery('ACTION_4', saga_4);
}
```
The problem is to throw all sagas even the one we do not need, the simplest solution is to find a way to throw that sagas we need

### BEFORE
#### in saga
```js
function* saga() {
  yield takeEvery('ACTION_1', saga_1);
}
```
#### in react component
```js
export default sagaHOC(MyComponent, saga);
```

## Support on Beerpay
Hey dude! Help me out for a couple of :beers:!

[![Beerpay](https://beerpay.io/hajjiTarik/redux-saga-hoc/badge.svg?style=beer-square)](https://beerpay.io/hajjiTarik/redux-saga-hoc)  [![Beerpay](https://beerpay.io/hajjiTarik/redux-saga-hoc/make-wish.svg?style=flat-square)](https://beerpay.io/hajjiTarik/redux-saga-hoc?focus=wish)

## Licence
MIT

## Author
Hajji Tarik.
