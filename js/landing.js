'use strict';


//Legal Disclaimer function. This is the most basic solution. Stretch goal coul be to  build a more complex modal popup with HTML, CSS, and JS.
function disclaimer (){
  let answer = alert('Legal Disclaimer:\n\n' + 'The Content is for informational purposes only, you should not construe any such information or other material as legal, tax, investment, financial, or other advice. Nothing contained on our Site constitutes a solicitation, recommendation, endorsement, or offer by μBudget or any third party service provider to buy or sell any securities or other financial instruments in this or in in any other jurisdiction in which such solicitation or offer would be unlawful under the securities laws of such jurisdiction.\n\n' + 'All Content on this site is information of a general nature and does not address the circumstances of any particular individual or entity. Nothing in the Site constitutes professional and/or financial advice, nor does any information on the Site constitute a comprehensive or complete statement of the matters discussed or the law relating thereto. μBudget is not a fiduciary by virtue of any person\’s use of or access to the Site or Content. You alone assume the sole responsibility of evaluating the merits and risks associated with the use of any information or other Content on the Site before making any decisions based on such information or other Content. In exchange for using the Site, you agree not to hold μBudget, its affiliates or any third party service provider liable for any possible claim for damages arising from any decision you make based on information or other Content made available to you through the Site.');
}

// Helper function for inputing multiple attributes into one element

// function inputSetAttributes(elem) {
//   for (let i = 1; i < arguments.length; i+=2) {
//     elem.setAttribute(arguments[i], arguments[i+1]);
//   }
// }

// inputSetAttributes(elem,
//   "src", "http://example.com/something.jpeg",
//   "height", "100%",
//   "width", "100%");

// Dynamic form builder function to allow the user to enter name, income, and budget information.
function formBuilder () {
  let section = document.getElementById('budget-form');
  let formTag = document.createElement('form');
  formTag.setAttribute('id','form-tag');
  section.appendChild(formTag);
  let fieldset = document.createElement('fieldset');
  formTag.append(fieldset);
  let legend = document.createElement('legend');
  legend.textContent = 'μBudget Form';
  fieldset.append(legend);
  let div = document.createElement('div');
  legend.append(div);
  let label = document.createElement('label');
  label.setAttribute('for', 'name');
  label.textContent = 'Name:';
  div.append(label);
  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('name', 'user');
  input.setAttribute('id', 'user');
  input.setAttribute('placeholder', 'Ex. John Doe');
  input.setAttribute('required', 'required');

}

formBuilder();

disclaimer();
