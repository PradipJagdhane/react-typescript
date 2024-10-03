import React, { useState } from 'react';
import { increment, decrement, incrementByAmount } from '../../../redux/slice/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';

const Counter: React.FC = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState<number>(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      <input
        type="number"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(Number(e.target.value))}
      />
      <button onClick={() => dispatch(incrementByAmount(incrementAmount))}>
        Increment by Amount
      </button>
    </div>
  );
};

export default Counter;
