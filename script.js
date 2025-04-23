const Base_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json";
const dropdown = document.querySelectorAll(".dropdown select");
const button = document.querySelector("form button")
const fromCurrency = document.querySelector(".from select")
const toCurrency = document.querySelector(".to select")
//creating all the individual countries in CountryList into newOption and pusing into select
for (let select of dropdown) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;

    //to keep "from" - "USD" and "To" - "INR"
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (eve) => {
    updateFlag(eve.target); //const updateFlag = (element)=>{ inside this i have eve.target so any changes in select appiles here
  });
}
//As currCode changes and symultaneously change the country flag
const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

button.addEventListener("click",async (eve) => {
  eve.preventDefault(); // let us keep our page default before submission
  let amount = document.querySelector("form input");
  let amountValue = amount.value;
  if (amountValue === "" || amountValue < 1) {
    amountValue = 1;
    amount.value = "1";
  }
  // console.log(amountValue); //  line to see the value
  // console.log(fromCurrency.value,toCurrency.value)
const URL = `${Base_URL}/${fromCurrency.value.toLowerCase()}/${toCurrency.value.toLowerCase()}.json`
let response = await fetch(URL)
let data = await response.json();
  let rate = data[toCurr.value.toLowerCase()];



});
