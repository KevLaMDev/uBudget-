'use strict';

// //Global Variables

//Global User Objects Array
let userArr = [];
let currentUser;
// Global form variables buttonSubmit for form submission
let formTag = document.createElement('form');
let fieldset = document.createElement('fieldset');
let legend = document.createElement('legend');
let div = document.createElement('div');
let label = document.createElement('label');
let input = document.createElement('input');
let buttonSubmit = document.getElementById('button-submit');



// Constructor function for user objects

function User(person = 'Joe Doe', income = 1, housing = 0, food = 0, car = 0, insurance = 0, medical = 0, phone = 0, internet = 0, utilities = 0, entertainment = 0, investing = 0, retirement = 0, savings = 0) {
  this.person = person;
  this.income = income;
  this.housing = housing;
  this.food = food;
  this.car = car;
  this.insurance = insurance;
  this.medical = medical;
  this.phone = phone;
  this.internet = internet;
  this.utilities = utilities;
  this.entertainment = entertainment;
  this.investing = investing;
  this.retirement = retirement;
  this.savings = savings;
  this.afterTax = this.federalTaxCalc();
  this.totalExpenses = this.sumExpenses();
  userArr.push(this);
}

User.prototype.sumExpenses = function () {
  let sum = 0;
  sum += this.housing;
  sum += this.food;
  sum += this.car;
  sum += this.insurance;
  sum += this.medical;
  sum += this.phone;
  sum += this.internet;
  sum += this.utilities;
  sum += this.investing;
  sum += this.retirement;
  sum += this.savings;
  sum += this.misc;
  sum += this.other;
  return sum;
};

User.prototype.federalTaxCalc = function () {
  let tax;
  if (this.income >= 523, 601) tax = .37;
  if (this.income >= 209, 426) tax = .35;
  if (this.income >= 164, 926) tax = .32;
  if (this.income >= 86, 376) tax = .24;
  if (this.income >= 40, 526) tax = .22;
  if (this.income >= 9, 951) tax = .12;
  if (this.income < 9, 951) tax = .10;
  let afterTax = this.income - (this.income * tax);
  return afterTax;
};

function buttonForm() {
  //Form Submit Button
  let fieldset = document.getElementById('expenses');
  div = document.createElement('div');
  div.id = 'button-submit';
  fieldset.appendChild(div);
  buttonSubmit = document.createElement('button');
  buttonSubmit.type = 'submit';
  buttonSubmit.textContent = 'Submit';
  div.appendChild(buttonSubmit);
}

// Dynamic form builder function to allow the user to enter name, income, and budget information.
function formMain() {
  //Creating initial elements needed for our DOM
  let section = document.getElementById('budget-form');
  formTag = document.createElement('form');
  formTag.id = 'form-main';
  section.appendChild(formTag);
  fieldset = document.createElement('fieldset');
  fieldset.id = 'name-income';
  formTag.appendChild(fieldset);
  legend = document.createElement('legend');
  legend.textContent = '\u{03BC}' + 'Budget Form';
  fieldset.appendChild(legend);

  //Fieldset Name and Income
  //Person Input Field of Form
  div = document.createElement('div');
  div.id = 'person';
  fieldset.appendChild(div);
  label = document.createElement('label');
  label.for = 'person';
  label.textContent = 'Name: ';
  div.appendChild(label);
  input = document.createElement('input');
  input.type = 'text';
  input.name = 'person';
  input.id = 'person';
  input.placeholder = 'Ex. Joe Doe';
  input.required = 'required';
  label.appendChild(input);

  //Income Input Field of Form
  div = document.createElement('div');
  div.id = 'income';
  fieldset.appendChild(div);
  label = document.createElement('label');
  label.for = 'income';
  label.textContent = 'Income: ';
  div.appendChild(label);
  input = document.createElement('input');
  input.type = 'number';
  input.name = 'income';
  input.id = 'income';
  input.placeholder = 'Ex. 1234';
  input.step = 'any';
  input.min = '1';
  input.required = 'required';
  label.appendChild(input);


  //Fieldset Expenses:
  fieldset = document.createElement('fieldset');
  fieldset.id = 'expenses';
  formTag.appendChild(fieldset);

  //Housing Input Field of Form
  div = document.createElement('div');
  div.id = 'housing';
  fieldset.appendChild(div);
  label = document.createElement('label');
  label.for = 'housing';
  label.textContent = 'Housing: ';
  div.appendChild(label);
  input = document.createElement('input');
  input.type = 'number';
  input.name = 'housing';
  input.id = 'housing';
  input.placeholder = 'Ex. 1234';
  input.step = 'any';
  input.min = '0';
  label.appendChild(input);

  //Food Input Field of Form
  div = document.createElement('div');
  div.id = 'food';
  fieldset.appendChild(div);
  label = document.createElement('label');
  label.for = 'food';
  label.textContent = 'Food: ';
  div.appendChild(label);
  input = document.createElement('input');
  input.type = 'number';
  input.name = 'food';
  input.id = 'food';
  input.placeholder = 'Ex. 1234';
  input.step = 'any';
  input.min = '0';
  label.appendChild(input);

  //Car Input Field of Form
  div = document.createElement('div');
  div.id = 'car';
  fieldset.appendChild(div);
  label = document.createElement('label');
  label.for = 'car';
  label.textContent = 'Auto/Transportation: ';
  div.appendChild(label);
  input = document.createElement('input');
  input.type = 'number';
  input.name = 'car';
  input.id = 'car';
  input.placeholder = 'Ex. 1234';
  input.step = 'any';
  input.min = '0';
  label.appendChild(input);

  // //Savings Input Field of Form

  div = document.createElement('div');
  div.id = 'savings';
  fieldset.appendChild(div);
  label = document.createElement('label');
  label.for = 'savings';
  label.textContent = 'Savings: ';
  div.appendChild(label);
  input = document.createElement('input');
  input.type = 'number';
  input.name = 'savings';
  input.id = 'savings';
  input.placeholder = 'Ex. 1234';
  input.step = 'any';
  input.min = '0';
  label.appendChild(input);

  buttonForm();

}

formMain();

function formBuilder() {

  let section = document.getElementById('add-input-form');
  formTag = document.createElement('form');
  formTag.id = 'form-add';
  section.appendChild(formTag);
  fieldset = document.createElement('fieldset');
  fieldset.id = 'more-input';
  formTag.appendChild(fieldset);
  legend = document.createElement('legend');
  legend.textContent = 'Add Input';
  fieldset.appendChild(legend);
  div = document.createElement('div');
  div.id = 'add';
  fieldset.appendChild(div);
  label = document.createElement('label');
  label.for = 'add';
  label.textContent = 'add: ';
  div.appendChild(label);

  //Input
  input = document.createElement('input');
  input.type = 'text';
  input.name = 'add';
  input.id = 'add';
  input.placeholder = 'Utilities, Internet';
  input.step = 'any';
  input.min = '0';
  label.appendChild(input);

  //Button for Submit
  div = document.createElement('div');
  div.id = 'button-add-input';
  fieldset.appendChild(div);
  buttonSubmit = document.createElement('button');
  buttonSubmit.type = 'submit';
  buttonSubmit.textContent = 'Submit';
  div.appendChild(buttonSubmit);

}

formBuilder();

function handleFormBuilder(event) {
  event.preventDefault();

  console.log('It works');
  let add = event.target.add.value;
  let div1 = document.getElementById('savings');
  div = document.createElement('div');
  div.id = add;
  div1.appendChild(div);
  label = document.createElement('label');
  label.for = add;
  label.textContent = add;
  div.appendChild(label);
  input = document.createElement('input');
  input.type = 'number';
  input.name = add;
  input.id = add;
  input.placeholder = 'Ex. 1234';
  input.step = 'any';
  input.min = '0';
  label.appendChild(input);

}




// //Event Handler function for form submission and instantiates object and saves values to local storage
function handleFormSubmission(event) {
  event.preventDefault();
  console.log('I am here');
  let person = event.target.person.value;
  let income = +event.target.income.value;
  let housing = +event.target.housing.value;
  let food = +event.target.food.value;
  let car = +event.target.car.value;
  let savings = +event.target.savings.value;
  // let insurance = +event.target.insurance.value;
  // let medical = +event.target.medical.value;
  // let phone = +event.target.phone.value;
  // let internet = +event.target.internet.value;
  // let utilities = +event.target.utilities.value;
  // let entertainment = +event.target.entertainment.value;
  // let investing = +event.target.investing.value;
  // let retirement = +event.target.retirement.value;



  currentUser = person;
  // new User(person, income, housing, food, car, insurance, medical, phone, internet, utilities, entertainment, investing, retirement, savings, misc, other);

  new User(person, income, housing, food, car, savings);
  //Stingify the properties to be stored in local storage
  let stringifiedUser = JSON.stringify(userArr);

  //Save to local storage
  localStorage.setItem('userObjects', stringifiedUser);
  localStorage.setItem('currentUser', currentUser);
  console.log(userArr);
  window.location.replace('../chart.html');

}

// Get the User

let retrievedItem = localStorage.getItem('userObjects');

if (retrievedItem) {
  if (retrievedItem.length > 5) {
    let parsedItem = JSON.parse(retrievedItem);
    userArr = parsedItem;
  }
} else {
  new User('Elon', 10000000000, 100000000, 1000000);
  new User('Student', 20000, 800, 200);
  new User('Investor', 100000000, 10000, 600);
  new User('Worker', 50000, 1200, 300);
  new User('Parent', 80000, 2000, 1000);
}




// Event Listeners
document.getElementById('form-main').addEventListener('submit', handleFormSubmission);
document.getElementById('form-add').addEventListener('submit', handleFormBuilder)


// // //Insurance Input Field of Form
// function insuranceInput() {
//   let fieldset = document.getElementById('expenses');
//   div = document.createElement('div');
//   div.id = 'insurance';
//   fieldset.appendChild(div);
//   label = document.createElement('label');
//   label.for = 'insurance';
//   label.textContent = 'Insurance: ';
//   div.appendChild(label);
//   input = document.createElement('input');
//   input.type = 'number';
//   input.name = 'insurance';
//   input.id = 'insurance';
//   input.placeholder = 'Ex. 1234';
//   input.step = 'any';
//   input.min = '0';
//   label.appendChild(input);

// }


// // //Medical/Healthcare Input Field of Form
// function medicalInput() {
//   let fieldset = document.getElementById('expenses');
//   div = document.createElement('div');
//   div.id = 'medical';
//   fieldset.appendChild(div);
//   label = document.createElement('label');
//   label.for = 'medical';
//   label.textContent = 'Medical/Healthcare: ';
//   div.appendChild(label);
//   input = document.createElement('input');
//   input.type = 'number';
//   input.name = 'medical';
//   input.id = 'medical';
//   input.placeholder = 'Ex. 1234';
//   input.step = 'any';
//   input.min = '0';
//   label.appendChild(input);
// }

// // //Phone Input Field of Form
// function phoneInput() {
//   let fieldset = document.getElementById('expenses');
//   div = document.createElement('div');
//   div.id = 'phone';
//   fieldset.appendChild(div);
//   label = document.createElement('label');
//   label.for = 'phone';
//   label.textContent = 'Phone: ';
//   div.appendChild(label);
//   input = document.createElement('input');
//   input.type = 'number';
//   input.name = 'phone';
//   input.id = 'phone';
//   input.placeholder = 'Ex. 1234';
//   input.step = 'any';
//   input.min = '0';
//   label.appendChild(input);
// }

// // //Internet Input Field of Form
// function internetInput() {
//   let fieldset = document.getElementById('expenses');
//   div = document.createElement('div');
//   div.id = 'internet';
//   fieldset.appendChild(div);
//   label = document.createElement('label');
//   label.for = 'internet';
//   label.textContent = 'Internet: ';
//   div.appendChild(label);
//   input = document.createElement('input');
//   input.type = 'number';
//   input.name = 'internet';
//   input.id = 'internet';
//   input.placeholder = 'Ex. 1234';
//   input.step = 'any';
//   input.min = '0';
//   label.appendChild(input);
// }

// // //Utilities Input Field of Form
// function utilitiesInput() {
//   let fieldset = document.getElementById('expenses');
//   div = document.createElement('div');
//   div.id = 'utilities';
//   fieldset.appendChild(div);
//   label = document.createElement('label');
//   label.for = 'utilities';
//   label.textContent = 'Utilities: ';
//   div.appendChild(label);
//   input = document.createElement('input');
//   input.type = 'number';
//   input.name = 'utilities';
//   input.id = 'utilities';
//   input.placeholder = 'Ex. 1234';
//   input.step = 'any';
//   input.min = '0';
//   label.appendChild(input);
// }

// // //Entertainment Input Field of Form
// function entertainmentInput() {
//   let fieldset = document.getElementById('expenses');
//   div = document.createElement('div');
//   div.id = 'entertainment';
//   fieldset.appendChild(div);
//   label = document.createElement('label');
//   label.for = 'entertainment';
//   label.textContent = 'Entertainment: ';
//   div.appendChild(label);
//   input = document.createElement('input');
//   input.type = 'number';
//   input.name = 'entertainment';
//   input.id = 'entertainment';
//   input.placeholder = 'Ex. 1234';
//   input.step = 'any';
//   input.min = '0';
//   label.appendChild(input);
// }

// // //Investing Input Field of Form
// function investingInput() {
//   let fieldset = document.getElementById('expenses');
//   div = document.createElement('div');
//   div.id = 'investing';
//   fieldset.appendChild(div);
//   label = document.createElement('label');
//   label.for = 'investing';
//   label.textContent = 'Investing: ';
//   div.appendChild(label);
//   input = document.createElement('input');
//   input.type = 'number';
//   input.name = 'investing';
//   input.id = 'investing';
//   input.placeholder = 'Ex. 1234';
//   input.step = 'any';
//   input.min = '0';
//   label.appendChild(input);
// }

// // //Retirement Input Field of Form
// function retirementInput() {
//   let fieldset = document.getElementById('expenses');
//   div = document.createElement('div');
//   div.id = 'retirement';
//   fieldset.appendChild(div);
//   label = document.createElement('label');
//   label.for = 'retirement';
//   label.textContent = 'Retirement: ';
//   div.appendChild(label);
//   input = document.createElement('input');
//   input.type = 'number';
//   input.name = 'retirement';
//   input.id = 'retirement';
//   input.placeholder = 'Ex. 1234';
//   input.step = 'any';
//   input.min = '0';
//   label.appendChild(input);
// }


