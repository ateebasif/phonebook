import React from 'react';
import { shallow } from 'enzyme';
import ContactDetails from '../ContactDetails';

describe('Contact Details Testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ContactDetails />);
  });

  test('Should Render the Contact Details Component', () => {
    expect(wrapper.find(`[data-test="contact_details"]`).length).toBe(1);
  });
});
