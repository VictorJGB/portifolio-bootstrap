const messageContainer = document.querySelector('#cardsContainer');
const userMessage = JSON.parse(localStorage.getItem('userMessage'));

var cardsHtml = '';

if (userMessage) {
  userMessage.map((message) => {
    cardsHtml += `
        <div class="message-card container-fluid w-100 py-4 px-0 rounded shadow">
          <div class="card-header container-fluid w-100 py-2 px-4 text-start">
            <h1 class="card-header-title fw-bold">${message.email}</h1>
          </div>
          <div class="card-body w-100 p-4 text-center">
            <p class="card-body-text fw-regular">
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
