const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

function appendMessage(text, isUser = false, isTyping = false) {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('msg', isUser ? 'user' : 'bot');
  if (isTyping) msgDiv.classList.add('typing');
  msgDiv.innerText = text;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
  return msgDiv;
}

async function handleInference() {
  const inputPayload = userInput.value.trim();
  if (!inputPayload) return;

  // Add User Question & Clear Input
  appendMessage(inputPayload, true);
  userInput.value = '';
  sendBtn.disabled = true;

  // Render Temporary Typing Indicator
  const typingBubble = appendMessage('Processing', false, true);

  try {
    const rawResponse = await fetch('/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: inputPayload })
    });
    
    if (!rawResponse.ok) throw new Error("Network fault encountered");
    
    const parsedData = await rawResponse.json();
    
    // Remove indicator and print response
    typingBubble.remove();
    appendMessage(parsedData.answer || "No response received.");
    
  } catch (error) {
    typingBubble.remove();
    appendMessage("Error: Failed to process request on local engine.");
  } finally {
    sendBtn.disabled = false;
    userInput.focus();
  }
}

sendBtn.addEventListener('click', handleInference);
userInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') handleInference();
});
