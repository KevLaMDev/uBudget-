'use strict';
let userArrChart = [];
let currentUserChart;
let ctx = document.getElementById('myChart').getContext('2d');

let retrievedItemChart = localStorage.getItem('userObjects');
//If data in local storage, access and save to global arr
if (retrievedItemChart) {
  let parsedItem = JSON.parse(retrievedItemChart);
  userArrChart = parsedItem;
}
// access saved named in local storage
let username = localStorage.getItem('currentUser');
// find correct obj instance via association w/ person property
currentUserChart = findCurrentUser();

// renders the finances table
function renderFinanceTable() {
  let div = document.getElementById('table');
  let table = document.createElement('table');
  div.appendChild(table);
  let thead = document.createElement('thead');
  table.appendChild(thead);
  let tbody = document.createElement('tbody');
  table.appendChild(tbody);
  let tr = document.createElement('tr');
  thead.appendChild(tr);
  let th = document.createElement('th');
  th.textContent = 'Monthly Income';
  tr.appendChild(th);
  th = document.createElement('th');
  th.textContent = 'Monthly Expenses'
  tr.appendChild(th);
  th = document.createElement('th');
  th.textContent = 'Remaining Funds';
  tr.appendChild(th);
  tr = document.createElement('tr');
  tbody.appendChild(tr);
  let td = document.createElement('td');
  td.textContent = currentUserChart.afterTax / 12;
  tr.appendChild(td);
  td = document.createElement('td')
  td.textContent = currentUserChart.totalExpenses;
  tr.appendChild(td);
  td = document.createElement('td');
  td.textContent = (currentUserChart.afterTax / 12) - currentUserChart.totalExpenses;
  tr.appendChild(td);
};

// associates saved name input with correct obj instance 
function findCurrentUser() {
  let user;
  for (let i = 0; i < userArrChart.length; i++) {
    if (userArrChart[i].person === username) user = userArrChart[i];
  }
  return user;
}

const chartData = {
  type: 'doughnut',
  data: {
    labels: ["Annual Net Income", "Annual Taxes", "Annual Expenses"],
    datasets: [
      {
        label: "Net Income Vs Taxes and Expenses",
        backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f"],
        data: [
          currentUserChart.afterTax - currentUserChart.totalExpenses, // Take Home Income
          taxBracket(currentUserChart)[0], // Total Taxes
          currentUserChart.totalExpenses * 12 // Total expenses
        ]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Net Income Vs Taxes and Expenses'
    }
  }
};

// renders the chart page
function renderChartPage() {
  renderFinanceTable();
  new Chart(ctx, chartData);
}
console.log(currentUserChart)
renderChartPage();

// returns array of annual taxes and net income afterTax
function taxBracket(obj, income) {
  let tax;
  let taxes;
  let afterTax;
  if (obj !== undefined && income === undefined) {
    if (obj.income >= 523, 601) tax = .37;
    if (obj.income >= 209, 426) tax = .35;
    if (obj.income >= 164, 926) tax = .32;
    if (obj.income >= 86, 376) tax = .24;
    if (obj.income >= 40, 526) tax = .22;
    if (obj.income >= 9, 951) tax = .12;
    if (obj.income < 9, 951) tax = .10;
    taxes = obj.income * tax;
    afterTax = obj.income - taxes;
  } else if (obj === undefined && income !== undefined) {
    if (income >= 523, 601) tax = .37;
    if (income >= 209, 426) tax = .35;
    if (income >= 164, 926) tax = .32;
    if (income >= 86, 376) tax = .24;
    if (income >= 40, 526) tax = .22;
    if (income >= 9, 951) tax = .12;
    if (income < 9, 951) tax = .10;
    taxes = income * tax;
    afterTax = income - taxes;
  }
  return [taxes, afterTax];
};

// code in button in chart.html 
// add event listener to button
// create cb event handler
// event handler will create a new form below the chart: 
// 1 input field: income
// save input from formName.target.income.value
// chartData.data.datasets[0].data[0] = taxBracket(null, input) - currentUserChart.totalExpenses
// ctx = null; 
// renderChartPage()

let button = document.getElementById('button1');
button.addEventListener('click', button1EventHandler);

// creates a new form for user to enter in new income to be calculated and rendered in chart
function button1EventHandler(event) {
  let div = document.getElementById('form');
  let form = document.createElement('form');
  div.appendChild(form);
  let fieldset = document.createElement('fieldset');
  form.appendChild(fieldset);
  let label = document.createElement('label');
  fieldset.appendChild(label);
  label.for = 'income';
  label.name = 'income';
  label.innerHTML = 'New Income:'
  let input = document.createElement('input');
  fieldset.appendChild(input);
  input.type = 'number';
  input.name = 'income';
  input.id = 'income';
  let submit = document.createElement('button');
  submit.innerHTML = 'Submit'
  fieldset.appendChild(submit);
  button.removeEventListener('click', button1EventHandler)

  form.addEventListener('submit', button2EventHandler);
};

// handles submission of the form; updates chart data object with new data, deletes the old chart and re-renders a new chart
function button2EventHandler(event) {
  event.preventDefault();
  let newIncome = +event.target.income.value;
  if (newIncome !== 0) {
    // updating new chart
    chartData.data.datasets[0].data[0] = taxBracket(undefined, newIncome)[1] - currentUserChart.totalExpenses;
    chartData.data.datasets[0].data[1] = taxBracket(undefined, newIncome)[0];
    let chart = document.querySelector('canvas');
    chart.remove();
    chart = document.createElement('canvas');
    chart.id = 'myChart';
    chart.width = '1400'
    chart.height = '1400'
    let div = document.getElementById('chart');
    div.appendChild(chart);
    ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, chartData);

    // updating new table
    let table = document.querySelector('table');
    table.remove();
    div = document.getElementById('table');
    table = document.createElement('table');
    div.appendChild(table);
    let thead = document.createElement('thead');
    table.appendChild(thead);
    let tbody = document.createElement('tbody');
    table.appendChild(tbody);
    let tr = document.createElement('tr');
    thead.appendChild(tr);
    let th = document.createElement('th');
    th.textContent = 'Monthly Income';
    tr.appendChild(th);
    th = document.createElement('th');
    th.textContent = 'Monthly Expenses'
    tr.appendChild(th);
    th = document.createElement('th');
    th.textContent = 'Remaining Funds';
    tr.appendChild(th);
    tr = document.createElement('tr');
    tbody.appendChild(tr);
    let td = document.createElement('td');
    td.textContent = taxBracket(undefined, newIncome)[1] / 12;
    tr.appendChild(td);
    td = document.createElement('td')
    td.textContent = currentUserChart.totalExpenses;
    tr.appendChild(td);
    td = document.createElement('td');
    td.textContent = (taxBracket(undefined, newIncome)[1] / 12) - currentUserChart.totalExpenses;
    tr.appendChild(td);
  } else {
    alert('Please enter a valid number.')
  }
}



