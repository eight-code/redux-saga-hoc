import React, { Component } from 'react';
import { take, cancel, fork } from 'redux-saga/effects';

export const sagaHOC = (WrappedComponent, sagas) => class SagaHOC extends Component {
  constructor(props) {
    super(props);
    this.CANCEL_SAGAS = 'CANCEL_SAGAS';
    this.constructor.displayName = `SagaHOC(${WrappedComponent.name})`;
  }

  static contextTypes = { store: React.PropTypes.object };

  componentDidMount() {
    this.startSagas();
  }

  createAbortableSaga = (saga) => {
    if (process.env.NODE_ENV === 'development') {
      return function* main() {
        const sagaTask = yield fork(saga);

        yield take(this.CANCEL_SAGAS);
        yield cancel(sagaTask);
      };
    }
    return saga;
  }

  startSagas = () => {
    sagas.map(this.createAbortableSaga).forEach(saga => this.context.store.runSaga(saga));
  }

  cancelSagas() {
    this.context.store.dispatch({
      type: this.CANCEL_SAGAS,
    });
  }

  componentWillUnmount() {
    this.cancelSagas();
  }

  render() {
  }
};
