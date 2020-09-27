import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import { shallow, mount } from 'enzyme';

describe('App Component Header text PhoneBook Testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('should render the title of App', () => {
    expect(wrapper.find('h1').text()).toContain('Phonebook ');
  });

  test('should render the row of App component that contains the Routes to other components', () => {
    expect(wrapper.find(`[data-test="row"]`).length).toBe(1);
  });
});
