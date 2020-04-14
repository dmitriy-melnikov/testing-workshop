import './global.css'
import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import Calculator from './calculator'

ReactDOM.render(
  <Fragment>
    <Calculator />
    <div style={{marginTop: 30, textAlign: 'center'}}>
      Calculator component{' '}
      <a href="https://codepen.io/mjijackson/pen/xOzyGX">created</a> by
      <br />
      <a href="https://twitter.com/mjackson">Michael Jackson</a> of{' '}
      <a href="https://reacttraining.com/">React Training</a>
    </div>
  </Fragment>,
  document.getElementById('app'),
);