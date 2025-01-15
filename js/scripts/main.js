window.HSStaticMethods.autoInit();


const collapseButton = document.getElementById('collapse-button');
  const menu = document.getElementById('menu');

  collapseButton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });





// Função para calcular a data de expiração
function setCookieExpiration(days) {
  const now = new Date();
  now.setTime(now.getTime() + (days * 24 * 60 * 60 * 1000)); // 30 dias
  return now.toUTCString(); // Retorna a data no formato UTC
}

// Função para salvar a escolha no localStorage
function savePreference(pref) {
  const expiration = setCookieExpiration(30); // 30 dias
  const data = {
      value: pref, // Salva a escolha do usuário (aceitar ou rejeitar)
      expiration: expiration, // Salva a data de expiração
  };
  localStorage.setItem('cookieConsent', JSON.stringify(data)); // Salva no localStorage
}

// Função para verificar se o consentimento já foi dado
function checkConsent() {
  const storedData = localStorage.getItem('cookieConsent'); // Recupera os dados do localStorage
  if (storedData) {
      const { expiration } = JSON.parse(storedData); // Converte os dados de volta para o formato original
      const now = new Date();
      if (now <= new Date(expiration)) {
          return true; // Se o consentimento ainda é válido, retorna true
      }
  }
  return false; // Caso contrário, retorna false
}

// Função para ocultar o modal
function hideModal() {
  const modal = document.getElementById('cookieConsent'); // Encontra o modal pelo ID
  if (modal) {
      modal.style.display = 'none'; // Oculta o modal
  }
}

// Função para exibir o modal
function showModal() {
  const modal = document.getElementById('cookieConsent'); // Encontra o modal pelo ID
  if (modal) {
      modal.classList.remove('hidden'); // Remove a classe 'hidden' para exibir o modal
  }
}

// Eventos de clique nos botões
document.addEventListener('DOMContentLoaded', () => {
  // Verifica se o consentimento já foi dado
  if (checkConsent()) {
      hideModal(); // Se o consentimento foi dado, oculta o modal
  } else {
      showModal(); // Se não, exibe o modal
  }

  // Seleciona os botões de aceitar e rejeitar
  const acceptBtn = document.querySelector('#accept-cookies');
  const rejectBtn = document.querySelector('#reject-cookies');

  // Evento para aceitar cookies
  if (acceptBtn) {
      acceptBtn.addEventListener('click', () => {
          savePreference('accepted'); // Salva a escolha como 'aceito'
          hideModal(); // Oculta o modal
      });
  }

  // Evento para rejeitar cookies
  if (rejectBtn) {
      rejectBtn.addEventListener('click', () => {
          savePreference('rejected'); // Salva a escolha como 'rejeitado'
          hideModal(); // Oculta o modal
      });
  }
});


