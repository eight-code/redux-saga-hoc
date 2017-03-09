import React, { Component } from 'react';
import { take, cancel, fork } from 'redux-saga/effects';

export default function HOCsaga(WrappedComponent, saga) {
  return class extends Component {

    constructor () {
      this.CANCEL_SAGAS_HMR = '';
    }

    componentDidMount() {
      this.startSagas();
    }

    createAbortableSaga = () => {
      if (process.env.NODE_ENV === 'development') {
        return function* main() {
          const sagaTask = yield fork(saga);

          yield take(this.CANCEL_SAGAS_HMR);
          yield cancel(sagaTask);
        };
      }
      return saga;
    }

    startSagas = () => {
      this.sagas.map(this.createAbortableSaga).forEach(saga => this.store.runSaga(saga));
    }

    cancelSagas() {
      this.context.store.dispatch({
        type: 'CANCEL_SAGAS_HMR',
      });
    }

    componentWillUnmount() {
      // Clean up listener
      this.context.store.dispatch('')
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
