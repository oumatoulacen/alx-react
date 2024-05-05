import React from 'react';
import { shallow, mount } from 'enzyme';
import { jest } from '@jest/globals';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe('WithLogging', () => {
    it('should log mount and unmount of pure html', () => {
        console.log = jest.fn();
        const WrappedComponent = () => <div>test</div>;
        const WithLoggingComponent = WithLogging(WrappedComponent);
        const wrapper = shallow(<WithLoggingComponent />);
        expect(console.log).toHaveBeenCalledWith('Component WrappedComponent is mounted');
        wrapper.unmount();
        expect(console.log).toHaveBeenCalledWith('Component WrappedComponent is going to unmount');
        jest.restoreAllMocks();
    });

    it("should make sure console.log was called on mount and on unmount with Component when the wrapped element is pure html", () => {
        console.log = jest.fn();
        const Hoc = WithLogging(() => <p>Hello there</p>);
        const comp = <Hoc title="hello" />;
        let wrapper = mount(comp);
        expect(console.log).toBeCalledWith('Component Component is mounted');
        wrapper.unmount();
        expect(console.log).toBeCalledWith('Component Component is going to unmount');
        jest.restoreAllMocks();
      });

    it("should make sure console.log was called on mount and on unmount with the name of the component when the wrapped element is the Login component", () => {
        console.log = jest.fn();
        const Hoc = WithLogging(Login);
        const comp = <Hoc/>;
        let wrapper = shallow(comp);
        expect(console.log).toBeCalledWith('Component Login is mounted');
        wrapper.unmount();
        expect(console.log).toBeCalledWith('Component Login is going to unmount');
        jest.restoreAllMocks();
      });
    
});
