'use strict';
let userArrChart = [];
let currentUserChart; 

function renderFinanceTable() {
  let table = document.getElementById('table');
  let tr = document.createElement('tr');
  table.appendChild(tr);
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
  table.appendChild(tr);
  let td = document.createElement('td');
  td.textContent = currentUser.afterTax / 12;
  tr.appendChild(td);
  td = document = currentUser.totalExpenses;
  tr.appendChild(td);
  td = document.createElement('td');
  td.textContent = currentUser.afterTax - currentUser.totalExpenses;
  tr.appendChild(td);
}

let retrievedItemChart = localStorage.getItem('userObjects');
currentUserChart = localStorage.getItem('currentUser');

//If data in local storage, access and save to global arr
if (retrievedItemChart) {
  let parsedItem = JSON.parse(retrievedItem);
  userArrChart = parsedItem;
};

