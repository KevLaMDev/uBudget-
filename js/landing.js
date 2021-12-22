'use strict';


//Legal Disclaimer function. This is the most basic solution. Stretch goal coul be to  build a more complex modal popup with HTML, CSS, and JS.
function disclaimer() {
  alert('Legal Disclaimer:\n\n' + 'The Content is for informational purposes only, you should not construe any such information or other material as legal, tax, investment, financial, or other advice. Nothing contained on our Site constitutes a solicitation, recommendation, endorsement, or offer by μBudget or any third party service provider to buy or sell any securities or other financial instruments in this or in in any other jurisdiction in which such solicitation or offer would be unlawful under the securities laws of such jurisdiction.\n\n' + 'All Content on this site is information of a general nature and does not address the circumstances of any particular individual or entity. Nothing in the Site constitutes professional and/or financial advice, nor does any information on the Site constitute a comprehensive or complete statement of the matters discussed or the law relating thereto. μBudget is not a fiduciary by virtue of any person’s use of or access to the Site or Content. You alone assume the sole responsibility of evaluating the merits and risks associated with the use of any information or other Content on the Site before making any decisions based on such information or other Content. In exchange for using the Site, you agree not to hold μBudget, its affiliates or any third party service provider liable for any possible claim for damages arising from any decision you make based on information or other Content made available to you through the Site.');
}

// Helper function for inputing multiple attributes into one element
// let input = document.createElement('input');
// input.type = 'text';
// input.name = 'user';
// input.id = 'user';
// input.placeholder = 'Ex. John Doe';
// input.required = 'required';

// Dynamic form builder function to allow the user to enter name, income, and budget information.
function formBuilder() {
  //Creating initial elements needed for our DOM
  let section = document.getElementById('budget-form');
  let formTag = document.createElement('form');
  formTag.id = 'form-tag';
  section.appendChild(formTag);
  let fieldset = document.createElement('fieldset');
  formTag.append(fieldset);
  let legend = document.createElement('legend');
  legend.textContent = 'μBudget Form';
  fieldset.append(legend);

  //Name Input Field of Form
  let div = document.createElement('div');
  div.id = 'name';
  legend.append(div);
  let label = document.createElement('label');
  label.for = 'name';
  label.textContent = 'Name: ';
  div.append(label);
  let input = document.createElement('input');
  input.type = 'text';
  input.name = 'name';
  input.id = 'name';
  input.placeholder = 'Ex. Elon';
  input.required = 'required';
  label.append(input);

  //Income Input Field of Form
  div = document.createElement('div');
  div.id = 'income';
  legend.append(div);
  label = document.createElement('label');
  label.for = 'income';
  label.textContent = 'Income: ';
  div.append(label);
  input = document.createElement('input');
  input.type = 'number';
  input.name = 'income';
  input.id = 'income';
  input.placeholder = 'Ex. 1234';
  input.step = 'any';
  input.min = '1';
  input.required = 'required';
  label.append(input);

  //Housing Input Field of Form
  div = document.createElement('div');
  div.id = 'housing';
  legend.append(div);
  label = document.createElement('label');
  label.for = 'housing';
  label.textContent = 'Housing: ';
  div.append(label);
  input = document.createElement('input');
  input.type = 'number';
  input.name = 'income';
  input.id = 'income';
  input.placeholder = 'Ex. 1234';
  input.step = 'any';
  input.min = '0';
  input.required = 'required';
  label.append(input);

  //Food Input Field of Form
  div = document.createElement('div');
  div.id = 'food';
  legend.append(div);
  label = document.createElement('label');
  label.for = 'food';
  label.textContent = 'Food: ';
  div.append(label);
  input = document.createElement('input');
  input.type = 'number';
  input.name = 'food';
  input.id = 'food';
  input.placeholder = 'Ex. 1234';
  input.step = 'any';
  input.min = '0';
  input.required = 'required';
  label.append(input);

  //Car Input Field of Form
  div = document.createElement('div');
  div.id = 'car';
  legend.append(div);
  label = document.createElement('label');
  label.for = 'car';
  label.textContent = 'Auto/Transportation: ';
  div.append(label);
  input = document.createElement('input');
  input.type = 'number';
  input.name = 'car';
  input.id = 'car';
  input.placeholder = 'Ex. 1234';
  input.step = 'any';
  input.min = '0';
  input.required = 'required';
  label.append(input);

  //Insurance Input Field of Form
  div = document.createElement('div');
  div.id = 'insurance';
  legend.append(div);
  label = document.createElement('label');
  label.for = 'insurance';
  label.textContent = 'Insurance: ';
  div.append(label);
  input = document.createElement('input');
  input.type = 'number';
  input.name = 'insurance';
  input.id = 'insurance';
  input.placeholder = 'Ex. 1234';
  input.step = 'any';
  input.min = '0';
  input.required = 'required';
  label.append(input);

  //Medical/Healthcare Input Field of Form
  div = document.createElement('div');
  div.id = 'medical';
  legend.append(div);
  label = document.createElement('label');
  label.for = 'medical';
  label.textContent = 'Medical/Healthcare: ';
  div.append(label);
  input = document.createElement('input');
  input.type = 'number';
  input.name = 'medical';
  input.id = 'medical';
  input.placeholder = 'Ex. 1234';
  input.step = 'any';
  input.min = '0';
  input.required = 'required';
  label.append(input);

  //Phone Input Field of Form
  div = document.createElement('div');
  div.id = 'phone';
  legend.append(div);
  label = document.createElement('label');
  label.for = 'phone';
  label.textContent = 'Phone: ';
  div.append(label);
  input = document.createElement('input');
  input.type = 'number';
  input.name = 'phone';
  input.id = 'phone';
  input.placeholder = 'Ex. 1234';
  input.step = 'any';
  input.min = '0';
  input.required = 'required';
  label.append(input);

  //Internet Input Field of Form
  div = document.createElement('div');
  div.id = 'Internet';
  legend.append(div);
  label = document.createElement('label');
  label.for = 'Internet';
  label.textContent = 'Internet: ';
  div.append(label);
  input = document.createElement('input');
  input.type = 'number';
  input.name = 'Internet';
  input.id = 'Internet';
  input.placeholder = 'Ex. 1234';
  input.step = 'any';
  input.min = '0';
  input.required = 'required';
  label.append(input);

  //Utilities Input Field of Form
  div = document.createElement('div');
  div.id = 'utilities';
  legend.append(div);
  label = document.createElement('label');
  label.for = 'utilities';
  label.textContent = 'Utilities: ';
  div.append(label);
  input = document.createElement('input');
  input.type = 'number';
  input.name = 'utilities';
  input.id = 'utilities';
  input.placeholder = 'Ex. 1234';
  input.step = 'any';
  input.min = '0';
  input.required = 'required';
  label.append(input);

  //Entertainment Input Field of Form
  div = document.createElement('div');
  div.id = 'entertainment';
  legend.append(div);
  label = document.createElement('label');
  label.for = 'entertainment';
  label.textContent = 'Entertainment: ';
  div.append(label);
  input = document.createElement('input');
  input.type = 'number';
  input.name = 'entertainment';
  input.id = 'entertainment';
  input.placeholder = 'Ex. 1234';
  input.step = 'any';
  input.min = '0';
  input.required = 'required';
  label.append(input);

  //Investing Input Field of Form
  div = document.createElement('div');
  div.id = 'investing';
  legend.append(div);
  label = document.createElement('label');
  label.for = 'investing';
  label.textContent = 'Investing: ';
  div.append(label);
  input = document.createElement('input');
  input.type = 'number';
  input.name = 'investing';
  input.id = 'investing';
  input.placeholder = 'Ex. 1234';
  input.step = 'any';
  input.min = '0';
  input.required = 'required';
  label.append(input);

  //Retirement Input Field of Form
  div = document.createElement('div');
  div.id = 'retirement';
  legend.append(div);
  label = document.createElement('label');
  label.for = 'retirement';
  label.textContent = 'Retirement: ';
  div.append(label);
  input = document.createElement('input');
  input.type = 'number';
  input.name = 'retirement';
  input.id = 'retirement';
  input.placeholder = 'Ex. 1234';
  input.step = 'any';
  input.min = '0';
  input.required = 'required';
  label.append(input);

  //Savings Input Field of Form
  div = document.createElement('div');
  div.id = 'savings';
  legend.append(div);
  label = document.createElement('label');
  label.for = 'savings';
  label.textContent = 'Savings: ';
  div.append(label);
  input = document.createElement('input');
  input.type = 'number';
  input.name = 'savings';
  input.id = 'savings';
  input.placeholder = 'Ex. 1234';
  input.step = 'any';
  input.min = '0';
  input.required = 'required';
  label.append(input);

  //Misc Input Field of Form
  div = document.createElement('div');
  div.id = 'misc';
  legend.append(div);
  label = document.createElement('label');
  label.for = 'misc';
  label.textContent = 'Misc : ';
  div.append(label);
  input = document.createElement('input');
  input.type = 'number';
  input.name = 'misc';
  input.id = 'misc';
  input.placeholder = 'Ex. 1234';
  input.step = 'any';
  input.min = '0';
  input.required = 'required';
  label.append(input);

  //other Input Field of Form
  div = document.createElement('div');
  div.id = 'other';
  legend.append(div);
  label = document.createElement('label');
  label.for = 'other';
  label.textContent = 'Other: ';
  div.append(label);
  input = document.createElement('input');
  input.type = 'number';
  input.name = 'other';
  input.id = 'other';
  input.placeholder = 'Ex. 1234';
  input.step = 'any';
  input.min = '0';
  input.required = 'required';
  label.append(input);

  //Form Submit Button
  div = document.createElement('div');
  div.id = 'other';
  legend.append(div);
  let buttonSubmit = document.createElement('button');
  buttonSubmit.textContent = 'Submit';
  div.append(buttonSubmit);

}

formBuilder();

disclaimer();
