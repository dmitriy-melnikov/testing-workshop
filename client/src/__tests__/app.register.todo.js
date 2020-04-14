// Hi! This is for the instructor :)
// add a beforeEach for cleaning up state and intitializing the API

import React from 'react'
import {Simulate} from 'react-dom/test-utils'
import axiosMock from 'axios'
import { renderWithRouter, generate } from '../../test/til-client-test-utils'
import {init as initAPI} from '../utils/api'
import App from '../app'

/*beforeEach(() => {
  window.localStorage.removeItem('token');
  axiosMock.__mock.reset()
  initAPI()
});*/

xtest('register a new user', async () => {
	const {
		container,
		getByTestId,
		getByText,
		finishLoading,
		getByLabelText,
	} = renderWithRouter(<App />)
	await finishLoading()
	const leftClick = {button: 0}
	Simulate.click(getByText('Register'), leftClick)
	expect(window.location.href).toContain('register')

  //
  // fill out the form
  //
  // submit form
  // first use the axiosMock.__mock.instance
  // to mock out the post implementation
  // it should return the fake user + a token
  // which you can generate with generate.token(fakeUser)
  // Now simulate a submit event on the form
  //
  // wait for the mocked requests to finish
  //
  // assert post was called correctly
  // assert localStorage is correct
  // assert the user was redirected (window.location.href)
  // assert the username display is the fake user's username
  // assert the logout button exists
})
