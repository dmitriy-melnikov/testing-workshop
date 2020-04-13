import React from 'react'
import ReactDOM from 'react-dom'
import Editor from '../editor.todo'
import * as utilsMock from '../../utils/api'

jest.mock('../../utils/api', () => {
  return {
    posts: {
      create: jest.fn(() => Promise.resolve()),
    },
  }
})

const flashPromises = () => {
  return new Promise(resolve => {
    setTimeout(resolve, 0)
  })
}

test('calls onSubmit with the username and password when submitted', async () => {
  const container = document.createElement('div')
  const fakeUser = {id: 'fale'}
  const fakeHistory = {
    push: jest.fn(),
  }

  ReactDOM.render(<Editor user={fakeUser} history={fakeHistory} />, container)
  const form = container.querySelector('form')
  const {title, content, tags} = form.elements
  title.value = 'I like snick'
  content.value = 'I like cool'
  tags.value = 'twix,          my     , likes'
  const submit = new window.Event('submit')
  form.dispatchEvent(submit)

  await flashPromises()

  expect(fakeHistory.push).toHaveBeenCalledTimes(1)
  expect(fakeHistory.push).toHaveBeenCalledWith('/')
  expect(utilsMock.posts.create).toHaveBeenCalledTimes(1)
  expect(utilsMock.posts.create).toHaveBeenCalledWith({
    authorId: fakeUser.id,
    content: content.value,
    tags: ['twix', 'my', 'likes'],
    title: title.value,
    date: expect.any(String),
  })
})
