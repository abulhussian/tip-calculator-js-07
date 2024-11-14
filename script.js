"use strict";

const inputBill = document.querySelector(".bill");
const inputTip = document.querySelectorAll(".tip");
// console.log(inputTip);
const customTip = document.querySelector(".custom-tip");
const inputPerson = document.querySelector(".person");

const errorMsg = document.querySelector(".error-msg");

const tipPerPerson = document.querySelector(".tipPerPerson");
const amountPerPerson = document.querySelector(".amountPerPerson");

const reset = document.querySelector(".reset");

inputTip.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    e.preventDefault();
    // console.log(ele);
    const person = Number(inputPerson.value);
    if (person <= 0) {
      inputPerson.classList.add("active");
      errorMsg.classList.remove("hidden");
    } else {
      inputPerson.classList.remove("active");
      errorMsg.classList.add("hidden");
    }
    const bill = Number(inputBill.value);
    const tipNumber = Number(ele.textContent.match(/\d+/g));
    // console.log(tipNumber, bill, person);
    const tipAmount = (bill * tipNumber) / 100;
    const totalAmount = bill + tipAmount;

    const tipAmountPerson = tipAmount / person;
    const totalAmountPerson = totalAmount / person;

    tipPerPerson.textContent = tipAmountPerson;
    amountPerPerson.textContent = totalAmountPerson.toFixed(2);

    console.log(
      `bill:${bill},persons:${person},Tip Percentage:${tipNumber},tip Amount:${tipAmount},
      tipAmountPerson: ${tipAmountPerson},
      totalAmount:${totalAmount},
      totalAmountPerson:${totalAmountPerson}`
    );
  });
});

customTip.addEventListener("input", function (e) {
  e.preventDefault();
  // console.log(ele);
  const person = Number(inputPerson.value);
  if (person <= 0) {
    inputPerson.classList.add("active");
    errorMsg.classList.remove("hidden");
  } else {
    inputPerson.classList.remove("active");
    errorMsg.classList.add("hidden");
  }
  const bill = Number(inputBill.value);
  const tipNumber = Number(customTip.value.match(/\d+/g));
  // console.log(tipNumber, bill, person);
  const tipAmount = (bill * tipNumber) / 100;
  const totalAmount = bill + tipAmount;

  const tipAmountPerson = tipAmount / person;
  const totalAmountPerson = totalAmount / person;

  tipPerPerson.textContent = tipAmountPerson;
  amountPerPerson.textContent = totalAmountPerson.toFixed(2);
});

reset.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.reload();
});
