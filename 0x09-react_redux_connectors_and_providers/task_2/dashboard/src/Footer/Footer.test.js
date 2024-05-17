import React from 'react';
import { StatelessFooter } from './Footer';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

describe('<StatelessFooter />', () => {
	let wrapper;
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
		const user = { email: 'alice@gmail.com', password: 'password' };
		wrapper = shallow(<StatelessFooter user={user} />);
	});
	afterEach(() => {
		StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
	});
	
	it('Footer renders without crashing', () => {
		expect(wrapper.exists()).toBe(true);
	});
	
	it('Footer at the very least render the text “Copyright”', () => {
		const text = wrapper.text();
		expect(text).toContain('Copyright');
	});
	it('verify that the link is not displayed when the user is logged out within the context', () => {
		const user = null;
		const footer = shallow(<StatelessFooter user={user} />);
	
		const link = footer.find('a');
		expect(link.exists()).toBe(false);
	});
	it('verify that the link is displayed when the user is logged in within the context', () => {
		const link = wrapper.find('a');
		expect(link.exists()).toBe(true);
	});
});
