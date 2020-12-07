import React, { FC, FormEvent } from 'react';

export const SignUp: FC = () => {
  const onSubmit = (e: FormEvent): void => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        email
        <input />
      </label>
      <label>
        first name
        <input />
      </label>
      <label>
        last name
        <input />
      </label>
      <label>
        password
        <input type='password' />
      </label>
      <button type='submit'>
        Sign Up
      </button>
    </form>
  );
};
