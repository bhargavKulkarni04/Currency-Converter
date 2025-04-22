const Base_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json";
const dropdown = document.querySelectorAll(".dropdown select");

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
  select.addEventListener("change",(eve)=>{
    updateFlag(eve.target)
  })
}
//As currCode changes and symultaneously change the country flag
const updateFlag = ()=>{

}
