const fmChatBox = document.getElementById("fmChatBox");
const txtChatBox = document.getElementById("txtChatBox");
const socket = io();

fmChatBox.addEventListener("submit", event => {
  event.preventDefault();

  console.log("message", txtChatBox.value);
});
