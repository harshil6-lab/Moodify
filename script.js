async function getQuote(mood) {
  document.getElementById("output").innerHTML = "Thinking... 🤔";

  const response = await fetch("AIzaSyChENV7ZZyOcxIICo-Be8uMRRKTjq0_onU", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_API_KEY"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "user", content: `Give a short comforting message for someone who feels ${mood}.` }
      ]
    })
  });

  const data = await response.json();
  document.getElementById("output").innerHTML = data.choices[0].message.content;
}

function copyText() {
  const text = document.getElementById("output").innerText;
  navigator.clipboard.writeText(text);
  alert("Copied 💛");
}
