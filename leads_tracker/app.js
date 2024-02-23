let myLeads = [];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const tabBtn = document.getElementById("tab-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");

const leadFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadFromLocalStorage) {
  myLeads = leadFromLocalStorage;
  render(myLeads);
}

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `<li><a href='${leads[i]} ' target='_blank'>${leads[i]}<a/></li>`;
  }
  ulEl.innerHTML = listItems;
}

tabBtn.addEventListener("click", () => {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

deleteBtn.addEventListener("click", () => {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

// myLeads = JSON.parse(myLeads);
// myLeads = JSON.stringify(myLeads);

// Local Storage
// localStorage.setItem("myLead", "www.bslo.com");
// localStorage.getItem("myLead");
// localStorage.clear();

// Create Element
// const li = document.createElement("li");
// Set text context
// li.textContent = myLeads[i];
// append Element
// ulEl.append(li);
