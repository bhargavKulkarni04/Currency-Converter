const Base_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json";
const dropdown = document.querySelectorAll(".dropdown select");
const button = document.querySelector("form button")

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
button.addEventListener("click",(eve)=>{
  eve.preventDefault()// let us keep our page default beofre submission

})
