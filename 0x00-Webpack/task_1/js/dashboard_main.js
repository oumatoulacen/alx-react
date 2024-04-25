import $ from 'jquery';
import _ from 'lodash';  // Importing Lodash

// Adding the required elements to the page
$('body').append('<p>Holberton Dashboard</p>');  // First paragraph
$('body').append('<p>Dashboard data for the students</p>');  // Second paragraph
$('body').append('<button id="start-button">Click here to get started</button>');  // Button
$('body').append("<p id='count'></p>");  // Paragraph with ID 'count'
$('body').append('<p>Copyright - Holberton School</p>');  // Final paragraph

// Variable to track the button click count
let clickCount = 0;

// Function to update the click count
function updateCounter() {
  clickCount++;
  $('#count').text(`${clickCount} clicks on the button`);
}

// Using Lodash's debounce function with a delay of 300ms
const debouncedUpdateCounter = _.debounce(updateCounter, 300);

// Bind the debounced function to the button's click event
$('#start-button').on('click', debouncedUpdateCounter);
