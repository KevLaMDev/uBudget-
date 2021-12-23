'use strict';

console.log('hello world');

//Global variable section:

// let capBudget = 0;
let expenseArray = [1, 2, 3];

// DOM


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



