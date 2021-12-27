'use strict';
let userArrChart = [];
let username; 
let currentUserChart;
let ctx = document.getElementById('myChart').getContext('2d');

let retrievedItemChart = localStorage.getItem('userObjects');
//If data in local storage, access and save to global arr
if (retrievedItemChart) {
  let parsedItem = JSON.parse(retrievedItemChart);
  userArrChart = parsedItem;
};
username = localStorage.getItem('currentUser');
currentUserChart = findCurrentUser();

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




function findCurrentUser() {
  let user;
  for (let i = 0; i < userArrChart.length; i++) {
    if (userArrChart[i].person === username) user = userArrChart[i];
  }
  return user;
};

console.log(currentUserChart)
let taxes = taxBracket(currentUserChart); // Total Taxes
let netIncome = currentUserChart.afterTax - currentUserChart.totalExpenses;

const chartData = {
  type: 'doughnut',
  data: {
    labels: ["Annual Net Income", "Annual Taxes", "Annual Expenses"],
    datasets: [
      {
        label: "Net Income Vs Taxes and Expenses",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
        data: [
          netIncome, // Take Home Income
          taxes, // Total Taxes
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

function renderChartPage() {
  renderFinanceTable();
  new Chart(ctx, chartData);
};
console.log(currentUserChart)
renderChartPage();

function taxBracket(obj) {
 let tax;
 if (obj.income >= 523, 601) tax = .37;
 if (obj.income >= 209, 426) tax = .35;
 if (obj.income >= 164, 926) tax = .32;
 if (obj.income >= 86, 376) tax = .24;
 if (obj.income >= 40, 526) tax = .22;
 if (obj.income >= 9, 951) tax = .12;
 if (obj.income < 9, 951) tax = .10;
 let taxes = obj.income * tax;
 return taxes;
};
