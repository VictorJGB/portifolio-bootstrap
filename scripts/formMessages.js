const messageContainer = document.querySelector('#cardsContainer');
const userMessage = JSON.parse(localStorage.getItem('userMessage'));

var cardsHtml = '';

if (userMessage) {
  userMessage.map((message, index) => {
    cardsHtml += `
        <div class="message-card container w-100 p-4 rounded shadow">
    <div class="container w-100 p-4 text-start"><h1> ${message.email} </h1></div>
    <div class="container w-100 p-4 text-center">
      <p>
        ${message.message}
      </p>
    </div>
    </div>
  `;

    messageContainer.innerHTML = cardsHtml;
  });
} else {
  cardsHtml = `<h1 class="no-message-title fw-bold">Nenhuma mensagem recebida</h1>`;

  messageContainer.innerHTML = cardsHtml;
}

function clearMessages() {
  localStorage.clear();
  window.location.reload();
}
