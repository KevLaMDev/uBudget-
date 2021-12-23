'use strict';

console.log('hello world');

//Global variable section:

// let capBudget = 0;
let expenseArray = [1, 2, 3];

// DOM


function FederalTaxCalc() {
  let tax;
  if (this.income >= 523,601) tax = .37;
  if (this.income >= 209,426) tax = .35;
  if (this.income >= 164,926) tax = .32;
  if (this.income >= 86,376) tax = .24;
  if (this.income >= 40,526) tax = .22;
  if (this.income >= 9,951) tax = .12;
  if (this.income < 9,951) tax = .10;
  let afterTax = this.income - (this.income * tax);
  this.afterTax = afterTax;
}

// func 'FederalTaxCalc'
  // input: user.income
  // output: user.income - pertaining tax bracket deduction
    // declare afterTax var
    // series of if statements for each income range
      // subtract percentage amt of income from income
      // return income afterTax

// func renderFinanceTable
  // input: access user's afterTax data 
  // output: render chart, 12 months of income vs expenses 

function renderFinanceTable() {
  let table = document.getElementById('table'); 
  let tr = document.createElement('tr');
  
}



let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, { //eslint-disable-line
  type: 'doughnut',
  data: {
    labels: ['rent', 'car', 'fun'],
    datasets: [{
      label: 'Expenses',
      data: expenseArray,
      rotation: 180,
      borderColor: 'lightblue',
      backgroundColor: [
        'red',
        'blue',
        'coral'
      ],
      hoverOffset: 15
    }]
  },
});



