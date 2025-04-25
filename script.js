const BASE_URL ="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1";
const dropdown = document.querySelectorAll(".dropdown select");
const button = document.querySelector("form button");
const fromCurrency = document.querySelector(".from select");
const toCurrency = document.querySelector(".to select");
const message = document.querySelector(".message");

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

button.addEventListener("click", async (eve) => {
  eve.preventDefault(); // let us keep our page default before submission
  let amount = document.querySelector(".amount input");
  let amountValue = amount.value;
  if (amountValue === "" || amountValue < 1) {
    amountValue = 1;
    amount.value = "1";
  }

  const URL = `${BASE_URL}/currencies/${fromCurrency.value.toLowerCase()}.json`;
  let resp = await fetch(URL); //sends an HTTPS req and waits for response
  let data = await resp.json(); //converts raw response into JSON or javaScript formate

  let rate =
    data[fromCurrency.value.toLowerCase()][toCurrency.value.toLowerCase()];
  let FinalAmt = amountValue * rate;
  message.innerText = `${amountValue} ${fromCurrency.value}=${FinalAmt} ${toCurrency.value}`;
});
