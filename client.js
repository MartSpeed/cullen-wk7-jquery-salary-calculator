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
  idNumber: Number(0),
  jobTitle: 'jobTitle',
  annualSalary: Number(0),
};
function onReady() {
  // jQuery console test
  console.log('jQuery Activated');

  /**
   *  List of functions, objects and elements that need to be entered
   *
   *  List of ID references
   *  ul = #
   *  li = #
   *  form = #
   *  input = #
   *  button = #
   *
   *  List of class references
   *  .red =
   *  .yellow =
   *  .green =
   *  .blue =
   *
   *
   */

  console.log('this is my employee list', employee);
  console.log('this is the length of the employee list');
}
