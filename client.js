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
   *  ul = #output_employee
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
   *  annualSalary = #input_annualSalary
   *
   *
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
  // stops the from from refreshing with the page to hold the input values when using the submit button
  event.preventDefault();

  // grabbing the employee information
  // variable names for input values
  let firstName = $('#input_firstName').val();
  let lastName = $('#input_lastName').val();
  let idNumber = $('#input_idNumber').val();
  let jobTitle = $('#input_jobTitle').val();
  let annualSalary = $('#input_annualSalary').val();

  /*
  ***TODO***
  [x] append the information to the unordered list
  [] push that information into a new array and store it
  [] create a delete button for the input fields
  [] delete button should remove the appended item only using the $(this) jQuery method
  [] submit button should clear the field when clicked
  */
  console.log('**THIS IS THE APPEND TEST***');

  /**
   * ---variable info to append to---
   * ul = #output_employee
   * #firstName
   * #lastName
   * #idNumber
   * #jobTitle
   * #annual Salary
   *
   * #input_firstName
   *
   * Table elements align right to left.
   * Table headers go inside of the table row but before table definitions
   * Table definitions go inside of the table rows but after table headers
   * table headers = <th></th>
   * table row = <tr></tr>
   * table = <table></table>
   * table definition = <td></td>
   */
  $('#output_employee').append(`
  <tr>
  <td>${firstName}</td>
  <td>${lastName}</td>
  <td>${idNumber}</td>
  <td>${jobTitle}</td>
  <td>${annualSalary}</td>
  </tr>
`);

  // clear the inputs after the button is click for new values
  // use element "ID" values to grab and clear the list after the inputs
  $('#input_firstName').val('');
  $('#input_lastName').val('');
  $('#input_idNumber').val('');
  $('#input_jobTitle').val('');
  $('#input_annualSalary').val('');
}
