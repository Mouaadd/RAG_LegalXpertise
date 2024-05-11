document.addEventListener("DOMContentLoaded", function() {
  const chatBox = document.getElementById("chat-box");
  const userInput = document.getElementById("user-input");
  const sendBtn = document.getElementById("send-btn");

  sendBtn.addEventListener("click", function() {
    const userMessage = userInput.value.trim();
    if (userMessage !== "") {
      addMessage(userMessage, "user");
      // Here you can add your logic to handle the user's message
      // For demonstration purposes, let's just reply with a dummy message
      setTimeout(function() {
           $.ajax({
           type: "POST",
           url: 'get_response/',
           data: { csrfmiddlewaretoken: '{{ csrf_token }}', userMessage:userMessage},
           success: function callback(response){
                 addMessage(response, "bot");
               }
           });

      }, 500);
      userInput.value = "";
    }
  });

  function addMessage(message, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.className = "chat-message " + sender;
    const avatarDiv = document.createElement("div");
    avatarDiv.className = "avatar "+sender;
    const messageContentDiv = document.createElement("div");
    messageContentDiv.className = "message-content";
    const messageTextDiv = document.createElement("div");
    messageTextDiv.className = "message-text";
    messageTextDiv.textContent = message;
    const messageTimeDiv = document.createElement("div");
    messageTimeDiv.className = "message-time";
    const now = new Date();
    const timeString = now.getHours().toString().padStart(2, "0") + ":" + now.getMinutes().toString().padStart(2, "0");
    messageTimeDiv.textContent = timeString;

    messageContentDiv.appendChild(messageTextDiv);
    messageContentDiv.appendChild(messageTimeDiv);
    messageDiv.appendChild(avatarDiv);
    messageDiv.appendChild(messageContentDiv);
    chatBox.appendChild(messageDiv);

    // Scroll chat box to bottom
    chatBox.scrollTop = chatBox.scrollHeight;
  }


});
