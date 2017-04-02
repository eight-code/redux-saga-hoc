import React, { Component } from 'react';
import { take, cancel, fork } from 'redux-saga/effects';

export default (WrappedComponent, sagas = []) => 
  class SideEffects extends Component {
    constructor(props) {
      super(props);
      this.constructor.displayName = `SideEffects(${WrappedComponent.name})`;
    }

    static contextTypes = { store: React.PropTypes.object };

    componentDidMount = () => {
      this.startSagas();
    }

    createSaga = (saga) => {
      if (process.env.NODE_ENV === 'development') {
        return function* main() {
          const sagaTask = yield fork(saga);
          yield take('CANCEL_SAGAS');
          yield cancel(sagaTask);
        };
      }
      return saga;
    }

    startSagas = () => {
      ((sagas instanceof Array) ? sagas : [sagas])
        .map(this.createSaga)
        .forEach(saga => this.context.store.runSaga(saga));
    }

    cancelSagas = () => {
      this.context.store.dispatch({
        type: 'CANCEL_SAGAS',
      });
    }

    componentWillUnmount = () => {
      this.cancelSagas();
    }

    render() {
      return (<WrappedComponent
        cancelSagas={this.cancelSagas}
        runLocalSaga={this.createSaga}
        {...this.props}
      />);
    }
  };
