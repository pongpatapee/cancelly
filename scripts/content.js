console.log("Running content script");

function getTextInputFields() {
  const inputFields = document.querySelectorAll("textarea"); //TODO add regular inputs later
  return inputFields;
}

function handleOnChange(event) {
  console.log(`new text: "${event.target.value}"`);
  let extractedText = event.target.value ? event.target.value : "";

  try {
    chrome.runtime.sendMessage({ data: extractedText }, () => {
      console.error(chrome.runtime.lastError);
    });
  } catch (err) {
    console.error(
      "there was an error trying to send extractedText to background script"
    );
  }
}

const inputFields = getTextInputFields();
inputFields.forEach((inputField) => {
  // inputField.addEventListener("change", (e) => {
  // });
  inputField.addEventListener("change", handleOnChange);
});
