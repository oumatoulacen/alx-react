import React from 'react';
import Login from './Login';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

describe("testing the <Login /> component", () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();  // Suppress style injection
    wrapper = shallow(<Login />);
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();  // Resume style injection
  });

  it("Login component renders without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("Login component renders 2 input tags", () => {
    expect(wrapper.find("input")).toHaveLength(2);
  });

  it("Login component renders 2 label tags", () => {
    expect(wrapper.find("label")).toHaveLength(2);
  });
});
