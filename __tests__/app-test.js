'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Hello from '../src/Hello'

describe('Blah', () => {

  it('says Blah', () => {
    const blah = TestUtils.renderIntoDocument(<div>Blah</div>)
    expect(blah.textContent).toEqual('Blah');
  })

  // it('says Hello Pete', () => {
  //   expect(Hello({name: 'Pete'})).toEqual('Pete');
  // })

})
