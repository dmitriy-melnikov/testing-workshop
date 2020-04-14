import React from 'react';
import {render, Simulate} from 'react-testing-library';
import {generate} from '../../../test/til-client-test-utils';

import Login from '../login'

xtest('calls onSubmit with the username and password when submitted', () => {

	const fakeUser = generate.loginForm();
	console.log(fakeUser);

	/*const fakeUser = {
		username: 'chucknorris',
		password: '(╯°□°）╯︵ ┻━┻'
	};*/

	const handleSubmit = jest.fn();

	const {container, getByLabelText, getByText} = render(<Login onSubmit={handleSubmit}/>);

	const usernameNode = getByLabelText('username');
	const passwordNode = getByLabelText('password');
	const formNode = container.querySelector('form');
	const submitButtonNode = getByText('Submit');
	usernameNode.value = fakeUser.username;
	passwordNode.value = fakeUser.password;

	Simulate.submit(formNode);

	expect(handleSubmit).toHaveBeenCalledTimes(1);
	expect(handleSubmit).toHaveBeenCalledWith(fakeUser);
	expect(submitButtonNode.type).toBe('submit');
});
