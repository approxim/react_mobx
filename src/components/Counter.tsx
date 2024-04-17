import React from 'react'
import counterStore from '../stores/counter-store.tsx';
import { observer } from 'mobx-react-lite';

const Counter = observer(() => {
  const { count, total, increment, decrement } = counterStore;

  return (
    <>
      <button type='button' onClick={() => increment(1)}>+</button>
      <span>{count}</span>
      <button type='button' onClick={() => decrement(1)}>-</button>
      <span>{total}</span>
    </>
  )
})

export default Counter;