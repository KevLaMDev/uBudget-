'use strict';

console.log('hello world');

//Global variable section:

// let capBudget = 0;
let expenseArray = [1, 2, 3];

// DOM


// Constructor Function
// function Expenses(div) {
//   this.div = div.id;
//   expenseArray.push(this);
// }

// object instances
// new Expenses();
// Functions:




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



