/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetings, selectAllGreetings } from './redux/greetingSlice';

const Greeting = () => {
  const { entities } = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  return (
    <>
      {entities !== null
      && (
      <div style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      }}
      >
        <p> This is a random message: </p>
        {useSelector((state) => selectAllGreetings(state)).map((greet) => (
          <p
            key={greet.id}
            style={{ fontSize: '5em' }}
          >
            {greet.message}
          </p>
        ))}
      </div>
      )}
    </>
  );
};

export default Greeting;
