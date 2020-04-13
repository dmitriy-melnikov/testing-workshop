import React from 'react';
import ReactDOM from 'react-dom';
import ItemList from '../item-list';

/*const container = document.createElement('div');
ReactDOM.render(<ItemList/>, container);*/
//
//   Make your assertion(s) on the textContent of the container
//   (tip: expect's toMatch function might be what you want
//   for example: `expect('some text content').toMatch('text')`)
//
// For your second test, it will be very similar to the first.

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=basic%20react%20test&em=
*/
test('simple react test', () => {
	const container = document.createElement('div');
	ReactDOM.render(<ItemList items={[]}/>, container);
	expect(container.textContent).toMatch('no items');

});

test('simple react test2', () => {
	const container = document.createElement('div');
	ReactDOM.render(<ItemList items={['apple', 'orange', 'pear']}/>, container);
	expect(container.textContent).toMatch('apple');

});
