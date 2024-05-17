import React from 'react';
import { StatelessHeader } from './Header';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import AppContext from '../App/AppContext';


describe('<Header />', () => {
  	let header;
	
 	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
		const user = {
			email: '',
			password: '',
		};
		header = shallow(<StatelessHeader user={user} />);
  	});

	afterEach(() => {
		StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
	});

  	it('renders without crashing', () => {
    	expect(header.exists()).toBe(true);
  	});

	it('renders img and h1 tag', () => {
		const img = header.find('img');
		const h1 = header.find('h1');

		expect(img.exists()).toBe(true);
		expect(h1.exists()).toBe(true);
	});

	it('logoutSection is not created', () => {
		const logoutSection = header.find('section#logoutSection');
		expect(logoutSection.exists()).toBe(false);
	});

	it('logoutSection is created', () => {
		const user = {
		email: 'email@email.com',
		password: '123456',
		};

		const header = shallow(<StatelessHeader user={user} />);

		const logoutSection = header.find('section#logoutSection');
		expect(logoutSection.exists()).toBe(true);
	});
});