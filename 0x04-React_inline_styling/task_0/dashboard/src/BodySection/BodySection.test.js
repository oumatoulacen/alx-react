import React from 'react';
import {shallow} from 'enzyme';
import BodySection from './BodySection';

describe('<BodySection />', () => {
    it('renders an <BodySection /> component', () => {
        const wrapper = shallow(<BodySection />);
        expect(wrapper).toHaveLength(1);
    });
    
    it('renders an <h2> element and a <div> element', () => {
        const wrapper = shallow(<BodySection />);
        expect(wrapper.find('h2')).toHaveLength(1);
        expect(wrapper.find('div')).toHaveLength(1);
    });
    
    it('renders an <h2> element and a <div> element with the class `bodySection`', () => {
        const wrapper = shallow(<BodySection />);
        expect(wrapper.find('h2')).toHaveLength(1);
        expect(wrapper.find('div.bodySection')).toHaveLength(1);
    });
    
    it('renders children when passed in', () => {
        const wrapper = shallow((
        <BodySection>
            <p>test children node</p>
        </BodySection>));
        expect(wrapper.contains(<p>test children node</p>)).toEqual(true);
    });
});
