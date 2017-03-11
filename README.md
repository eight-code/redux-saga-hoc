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
#### RootComponent.js

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

````

