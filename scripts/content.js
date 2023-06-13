console.log("Running content script");

function getTextInputFields() {
  const inputFields = document.querySelectorAll("textarea"); //TODO add regular inputs later
  return inputFields;
}

function handleOnChange(event) {
  console.log(`new text: "${event.target.value}"`);
  chrome.runtime.sendMessage({ data: event.target.value });
}

const inputFields = getTextInputFields();
inputFields.forEach((inputField) => {
  // inputField.addEventListener("change", (e) => {
  // });
  inputField.addEventListener("change", handleOnChange);
});
