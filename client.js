$(document).ready(onReady);

let employee = {
  firstName: 'firstName',
  lastName: 'lastName',
  idNumber: 0,
  jobTitle: 'jobTitle',
  annualSalary: 0,
};
function onReady() {
  console.log('jQuery Activated');

  console.log('this is my employee list', employee);
  console.log('this is the employee ID', employee.idNumber);
}
