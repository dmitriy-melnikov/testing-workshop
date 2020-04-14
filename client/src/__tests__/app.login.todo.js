import React from 'react';
import { Simulate } from 'react-dom/test-utils';
import axiosMock from 'axios';
import { renderWithRouter, generate } from 'til-client-test-utils'
import {init as initAPI} from '../utils/api'
import App from '../app';

beforeEach(() => {
	window.localStorage.removeItem('token');
	axiosMock.__mock.reset();
	initAPI();
});

test('login as an existing user', async () => {
	const {
		container,
		getByTestId,
		getByText,
		finishLoading,
		getByLabelText
	} = renderWithRouter(<App/>);

	await finishLoading();

	const fakeUser = generate.loginForm();
	const token = generate.token(fakeUser);
	const loginLink = getByText('Login');
	const leftClick = {button: 0};
	Simulate.click(loginLink, leftClick);
	expect(window.location.href).toContain('login');

	const usernameNode = getByLabelText('Username');
	const passwordNode = getByLabelText('Password');
	const formWrapper = container.querySelector('form');
	usernameNode.value = fakeUser.username;
	passwordNode.value = fakeUser.password;

	const {post} = axiosMock.__mock.instance;
	post.mockImplementationOnce(() =>
		Promise.resolve({
			data: {user: {...fakeUser, token}},
		}),
	);

	Simulate.submit(formWrapper);

	await finishLoading();

	expect(post).toHaveBeenCalledTimes(1);
	expect(post).toHaveBeenCalledWith(
		'/auth/login',
		fakeUser
	);

	expect(window.localStorage.getItem('token')).toBe(token);
  expect(window.location.href).toContain('https://til.test.com/');
  expect(getByTestId('username-display').textContent).toEqual(fakeUser.username);
  expect(getByText('Logout')).toBeTruthy();
});