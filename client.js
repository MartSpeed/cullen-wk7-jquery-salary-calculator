// javaScript console test
console.log('ja: client.js');
$(document).ready(onReady);

// generated list that will accept input vales that will be pushed into a new array
// each key will be assigned a function or number
// use the Number method to return whole numbers.
// remember the use of ParseInt() and ParseFloat()
let employee = {
  firstName: 'firstName',
  lastName: 'lastName',
  idNumber: 0,
  jobTitle: 'jobTitle',
  annualSalary: 0,
};

function onReady() {
  // jQuery console test
  console.log('jQuery Activated');

  /**
   *  List of functions, objects and elements that need to be entered
   *
   *  ***List of ID references***
   *  ul = #
   *  li = #
   *  form = #
   *  input = #
   *  submit button = #button_addEmployee
   *
   *  ***Employee Info***
   *  fistName = #input_firstName
   *  lastName = #input_lastName
   *  idNumber = #input_idNumber
   *  jobTitle = #input_jobTitle
   *
   *
   *  ***List of class references***
   *  .red =
   *  .yellow =
   *  .green =
   *  .blue =
   *
   *
   */

  // button click even for the submit employee button
  $(document).on('click', '#button_addEmployee', addEmployee);
}

//add Employee function for the click event
function addEmployee(event) {
  // stops the from from refreshing with the page to hold the input values
  event.preventDefault();

  // grabbing the employee information
  // starting with first name in the console test
  // variable names for input values
  let firstName = $('#input_firstName').val();
  let lastName = $('#input_lastName').val();
  let idNumber = $('#input_idNumber').val();
  let jobTitle = $('#input_jobTitle').val();
}
