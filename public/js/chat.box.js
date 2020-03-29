const fmChatBox = document.getElementById("fmChatBox");
const txtChatBox = document.getElementById("txtChatBox");
const messages = document.querySelector(".messages");
const socket = io();

socket.on("message", message => {
  const divMessage = document.createElement("div");
  divMessage.className = "message";
  divMessage.innerHTML = `${message}`;
  messages.appendChild(divMessage);
});

fmChatBox.addEventListener("submit", event => {
  event.preventDefault();

  console.log("message", txtChatBox.value);
});
