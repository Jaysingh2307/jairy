
const messages = document.getElementById("messages");
const input = document.getElementById("input");

function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  addMessage("user", text);
  input.value = "";

  setTimeout(() => {
    const response = generateBotReply(text);
    addMessage("bot", response);
  }, 500);
}

function addMessage(sender, text) {
  const msg = document.createElement("div");
  msg.className = "message " + sender;
  msg.style.marginBottom = "12px";
  msg.style.padding = "10px";
  msg.style.borderRadius = "10px";
  msg.style.maxWidth = "75%";
  msg.style.background = sender === "user" ? "#00bcd4" : "#2c2c2c";
  msg.style.color = sender === "user" ? "#000" : "#e0e0e0";
  msg.innerText = text;
  msg.style.alignSelf = sender === "user" ? "flex-end" : "flex-start";
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}

function generateBotReply(input) {
  const lowered = input.toLowerCase();
  if (
    lowered.includes("politics") ||
    lowered.includes("religion") ||
    lowered.includes("abuse")
  ) {
    return "⚠️ JaiBo Alert: Please keep the conversation respectful and educational only.";
  }
  if (lowered.includes("ncert") || lowered.includes("biology")) {
    return "You can explore Biology NCERT questions in our NEET section. Want me to show a sample?";
  }
  return "Thanks for your message! JaiBo will get back to you with a study-related reply.";
}
