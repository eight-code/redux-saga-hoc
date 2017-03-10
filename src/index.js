import React, { Component } from 'react';
import { take, cancel, fork } from 'redux-saga/effects';

export default function sagaHOC(WrappedComponent, sagas) {
  return class SagaHOC extends Component {
    constructor(props) {
      super(props);
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
          yield take('CANCEL_SAGAS');
          yield cancel(sagaTask);
        };
      }
      return saga;
    }

    startSagas = () => {
      sagas.map(this.createAbortableSaga).forEach(saga => this.context.store.runSaga(saga));
    }

    cancelSagas = () => {
      this.context.store.dispatch({
        type: 'CANCEL_SAGAS',
      });
    }

    componentWillUnmount() {
      this.cancelSagas();
    }

    render() {
      return (<WrappedComponent
        cancelSagas={this.cancelSagas}
        runLocalSaga={this.createAbortableSaga}
        {...this.props}
      />);
    }
  };
}
