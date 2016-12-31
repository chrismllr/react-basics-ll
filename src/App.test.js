import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Button from './components/Button/Button';
import HelloMessage from './components/HelloMessage';

import { shallow } from 'enzyme';

describe('(Layout) App', () => {
  let _wrapper;

  beforeEach(() => {
    _wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders a Hello message', () => {
    expect(_wrapper.contains(<HelloMessage />));
  });


  it('passes a name to that hellomessage', () => {
    expect(_wrapper.find(HelloMessage).props('name', 'Michael Jordan'));
  });
});
