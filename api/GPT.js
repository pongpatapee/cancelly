import apiKey from "./secrets.js";
const endpoint = `https://api.openai.com/v1/chat/completions`;

function getGPTResponse(messageArray) {
  const data = {
    model: "gpt-3.5-turbo",
    messages: messageArray,
  };

  fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },

    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

export default getGPTResponse;
