import React from 'react';
import ReactDOM from 'react-dom';

import Login from '../login';


xtest('calls onSubmit with the username and password when submitted', () => {
  const fakeUser = {
    username: 'Dima',
    password: '1234'
  };
  const mockOnSubmit = jest.fn();
  const container = document.createElement('div');
  ReactDOM.render(<Login onSubmit={mockOnSubmit} />, container);
	const form = container.querySelector('form');
	const { username, password } = form.elements;

	username.value = fakeUser.username;
	password.value = fakeUser.password;

	const submit = new window.Event('submit');
	form.dispatchEvent(submit);

	expect(mockOnSubmit).toHaveBeenCalledTimes(1);
	expect(mockOnSubmit).toHaveBeenCalledWith(fakeUser);
});
