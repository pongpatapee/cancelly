chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const extractedText = message.data;
  console.log(extractedText);
});
