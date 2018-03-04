// @flow
import React, { Component } from 'react';
import Counter from '../components/Counter';

// export default Counter;
type Props = {};

export default class CounterPage extends Component<Props> {
  props: Props;

  render() {
    return (
      <Counter />
    );
  }
}
