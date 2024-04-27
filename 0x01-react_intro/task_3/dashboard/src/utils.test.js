import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

// Test for getFullYear
describe('getFullYear', () => {
    it('should return the correct year', () => {
        const currentYear = getFullYear();
        const expectedYear = new Date().getFullYear();
        expect(currentYear).toBe(expectedYear);
    });
})

// Test for getFooterCopy
describe('getFooterCopy', () => {
  it('should return "Holberton School" when true is passed as an argument', () => {
    const footerText = getFooterCopy(true);
    expect(footerText).toBe('Holberton School');
  });

  it('should return "Holberton School main dashboard" when false is passed as an argument', () => {
    const footerText = getFooterCopy(false);
    expect(footerText).toBe('Holberton School main dashboard');
  });
});

// Test for getLatestNotification
describe('getLatestNotification', () => {
  it('should return the correct notification string', () => {
    const expectedNotification = '<strong>Urgent requirement</strong> - complete by EOD';
    const notificationText = getLatestNotification();
    expect(notificationText).toBe(expectedNotification);
  });
});
