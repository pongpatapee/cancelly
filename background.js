import getGPTResponse from "./api/GPT.js";

const messageArray = [
  { role: "system", content: "You are a helpful assistant." },
  // { role: "user", content: "hi could you tell me what you are." },
];

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const extractedText = message.data;
  messageArray.push({ role: "user", content: extractedText });

  console.log("current message array");
  console.log(messageArray);
  console.log(`getting GPT response`);
  getGPTResponse(messageArray);
});

console.log("background.js");
