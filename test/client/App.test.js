import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import { AppComponent } from '../../client/components/App';

test('example', t => {
  console.log('See https://github.com/avajs/ava for how to use');
  t.pass();
});

test('AppComponent renders an input', t => {
  const app = shallow(<AppComponent />);
  t.is(app.find('input').length, 2);
});
