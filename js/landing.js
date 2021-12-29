'use strict';

// //Global Variables

//Global User Objects Array
let userArr = [];
let currentUser;
// buttonSubmit for form submission
let buttonSubmit = document.getElementById('button-submit');

//legal disclaimer alert
alert('Legal Disclaimer: \n\nThe Content is for informational purposes only, you should not construe any such information or other material as legal, tax, investment, financial, or other advice. Nothing contained on our Site constitutes a solicitation, recommendation, endorsement, or offer by μBudget or any third party service provider to buy or sell any securities or other financial instruments in this or in in any other jurisdiction in which such solicitation or offer would be unlawful under the securities laws of such jurisdiction.\n\nAll Content on this site is information of a general nature and does not address the circumstances of any particular individual or entity. Nothing in the Site constitutes professional and/or financial advice, nor does any information on the Site constitute a comprehensive or complete statement of the matters discussed or the law relating thereto. μBudget is not a fiduciary by virtue of any person’s use of or access to the Site or Content. You alone assume the sole responsibility of evaluating the merits and risks associated with the use of any information or other Content on the Site before making any decisions based on such information or other Content. In exchange for using the Site, you agree not to hold μBudget, its affiliates or any third party service provider liable for any possible claim for damages arising from any decision you make based on information or other Content made available to you through the Site.');


// // Constructor function for user objects

function User(person = 'Joe Doe', income = 1, housing = 0, food = 0, car = 0, insurance = 0, medical = 0, phone = 0, internet = 0, utilities = 0, entertainment = 0, investing = 0, retirement = 0, savings = 0, misc = 0, other = 0) {
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
  this.misc = misc;
  this.other = other;
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


// Dynamic form builder function to allow the user to enter name, income, and budget information.
function formBuilder() {
  //Creating initial elements needed for our DOM
  let section = document.getElementById('budget-form');
  let formTag = document.createElement('form');
  formTag.id = 'form-tag';
  section.appendChild(formTag);
  let fieldset = document.createElement('fieldset');
  fieldset.id = 'name-income';
  formTag.appendChild(fieldset);
  let legend = document.createElement('legend');
  legend.textContent = '\u{03BC}' + 'Budget Form';
  fieldset.appendChild(legend);

  //Fieldset Name and Income
  //Person Input Field of Form
  let div = document.createElement('div');
  div.id = 'person';
  fieldset.appendChild(div);
  let label = document.createElement('label');
  label.for = 'person';
  label.textContent = 'Name: ';
  div.appendChild(label);
  let input = document.createElement('input');
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

  //Insurance Input Field of Form
  div = document.createElement('div');
  div.id = 'insurance';
  fieldset.appendChild(div);
  label = document.createElement('label');
  label.for = 'insurance';
  label.textContent = 'Insurance: ';
  div.appendChild(label);
  input = document.createElement('input');
  input.type = 'number';
  input.name = 'insurance';
  input.id = 'insurance';
  input.placeholder = 'Ex. 1234';
  input.step = 'any';
  input.min = '0';
  label.appendChild(input);

  //Medical/Healthcare Input Field of Form
  div = document.createElement('div');
  div.id = 'medical';
  fieldset.appendChild(div);
  label = document.createElement('label');
  label.for = 'medical';
  label.textContent = 'Medical/Healthcare: ';
  div.appendChild(label);
  input = document.createElement('input');
  input.type = 'number';
  input.name = 'medical';
  input.id = 'medical';
  input.placeholder = 'Ex. 1234';
  input.step = 'any';
  input.min = '0';
  label.appendChild(input);

  //Phone Input Field of Form
  div = document.createElement('div');
  div.id = 'phone';
  fieldset.appendChild(div);
  label = document.createElement('label');
  label.for = 'phone';
  label.textContent = 'Phone: ';
  div.appendChild(label);
  input = document.createElement('input');
  input.type = 'number';
  input.name = 'phone';
  input.id = 'phone';
  input.placeholder = 'Ex. 1234';
  input.step = 'any';
  input.min = '0';
  label.appendChild(input);

  //Internet Input Field of Form
  div = document.createElement('div');
  div.id = 'internet';
  fieldset.appendChild(div);
  label = document.createElement('label');
  label.for = 'internet';
  label.textContent = 'Internet: ';
  div.appendChild(label);
  input = document.createElement('input');
  input.type = 'number';
  input.name = 'internet';
  input.id = 'internet';
  input.placeholder = 'Ex. 1234';
  input.step = 'any';
  input.min = '0';
  label.appendChild(input);

  //Utilities Input Field of Form
  div = document.createElement('div');
  div.id = 'utilities';
  fieldset.appendChild(div);
  label = document.createElement('label');
  label.for = 'utilities';
  label.textContent = 'Utilities: ';
  div.appendChild(label);
  input = document.createElement('input');
  input.type = 'number';
  input.name = 'utilities';
  input.id = 'utilities';
  input.placeholder = 'Ex. 1234';
  input.step = 'any';
  input.min = '0';
  label.appendChild(input);

  //Entertainment Input Field of Form
  div = document.createElement('div');
  div.id = 'entertainment';
  fieldset.appendChild(div);
  label = document.createElement('label');
  label.for = 'entertainment';
  label.textContent = 'Entertainment: ';
  div.appendChild(label);
  input = document.createElement('input');
  input.type = 'number';
  input.name = 'entertainment';
  input.id = 'entertainment';
  input.placeholder = 'Ex. 1234';
  input.step = 'any';
  input.min = '0';
  label.appendChild(input);

  //Investing Input Field of Form
  div = document.createElement('div');
  div.id = 'investing';
  fieldset.appendChild(div);
  label = document.createElement('label');
  label.for = 'investing';
  label.textContent = 'Investing: ';
  div.appendChild(label);
  input = document.createElement('input');
  input.type = 'number';
  input.name = 'investing';
  input.id = 'investing';
  input.placeholder = 'Ex. 1234';
  input.step = 'any';
  input.min = '0';
  label.appendChild(input);

  //Retirement Input Field of Form
  div = document.createElement('div');
  div.id = 'retirement';
  fieldset.appendChild(div);
  label = document.createElement('label');
  label.for = 'retirement';
  label.textContent = 'Retirement: ';
  div.appendChild(label);
  input = document.createElement('input');
  input.type = 'number';
  input.name = 'retirement';
  input.id = 'retirement';
  input.placeholder = 'Ex. 1234';
  input.step = 'any';
  input.min = '0';
  label.appendChild(input);

  //Savings Input Field of Form
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

  //Misc Input Field of Form
  div = document.createElement('div');
  div.id = 'misc';
  fieldset.appendChild(div);
  label = document.createElement('label');
  label.for = 'misc';
  label.textContent = 'Misc : ';
  div.appendChild(label);
  input = document.createElement('input');
  input.type = 'number';
  input.name = 'misc';
  input.id = 'misc';
  input.placeholder = 'Ex. 1234';
  input.step = 'any';
  input.min = '0';
  label.appendChild(input);

  // other Input Field of Form
  div = document.createElement('div');
  div.id = 'other';
  fieldset.appendChild(div);
  label = document.createElement('label');
  label.for = 'other';
  label.textContent = 'Other: ';
  div.appendChild(label);
  input = document.createElement('input');
  input.type = 'number';
  input.name = 'other';
  input.id = 'other';
  input.placeholder = 'Ex. 1234';
  input.step = 'any';
  input.min = '0';
  label.appendChild(input);

  //Form Submit Button
  div = document.createElement('div');
  div.id = 'button-submit';
  fieldset.appendChild(div);
  buttonSubmit = document.createElement('button');
  buttonSubmit.type = 'submit';
  buttonSubmit.textContent = 'Submit';
  div.appendChild(buttonSubmit);

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
  let insurance = +event.target.insurance.value;
  let medical = +event.target.medical.value;
  let phone = +event.target.phone.value;
  let internet = +event.target.internet.value;
  let utilities = +event.target.utilities.value;
  let entertainment = +event.target.entertainment.value;
  let investing = +event.target.investing.value;
  let retirement = +event.target.retirement.value;
  let savings = +event.target.savings.value;
  let misc = +event.target.misc.value;
  let other = +event.target.other.value;

  currentUser = person;

  // control flow: If object
  for (let i = 0; i < userArr.length; i++) {
    if (userArr[i].person === person) {
      userArr[i].income = income;
      userArr[i].housing = housing;
      userArr[i].food = food;
      userArr[i].car = car;
      userArr[i].insurance = insurance;
      userArr[i].medical = medical;
      userArr[i].phone = phone;
      userArr[i].internet = internet;
      userArr[i].utilities = utilities;
      userArr[i].entertainment = entertainment;
      userArr[i].investing = investing;
      userArr[i].retirement = retirement;
      userArr[i].savings = savings;
      userArr[i].misc = misc;
      userArr[i].other = other;
    } else {
      new User(person, income, housing, food, car, insurance, medical, phone, internet, utilities, entertainment, investing, retirement, savings, misc, other);
    }
  }

  new User(person, income, housing, food, car, insurance, medical, phone, internet, utilities, entertainment, investing, retirement, savings, misc, other);
  //Stingify the properties to be stored in local storage
  let stringifiedUser = JSON.stringify(userArr);

  //Save to local storage
  localStorage.setItem('userObjects', stringifiedUser);
  localStorage.setItem('currentUser', currentUser);
  console.log(userArr);
  window.location.replace('chart.html');

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

formBuilder();

// Event Listeners
document.querySelector('form').addEventListener('submit', handleFormSubmission);
