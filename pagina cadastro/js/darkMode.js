document.addEventListener('DOMContentLoaded', () => {
  // Verifique se a preferência do modo escuro está armazenada no Local Storage
  const darkModePreference = localStorage.getItem('darkMode');

  // Função para aplicar o modo escuro
  function applyDarkMode() {
    document.body.classList.add('dark');
    const chk = document.getElementById('chk');
    chk.checked = true;
  }

  // Função para remover o modo escuro
  function removeDarkMode() {
    document.body.classList.remove('dark');
    const chk = document.getElementById('chk');
    chk.checked = false;
  }

  // Verifique se a preferência é "enabled"
  if (darkModePreference === 'enabled') {
    applyDarkMode();
  }

  // Adicione o evento de mudança para alternar o modo escuro
  const chk = document.getElementById('chk');
  chk.addEventListener('change', () => {
    if (chk.checked) {
      applyDarkMode();
      localStorage.setItem('darkMode', 'enabled');
    } else {
      removeDarkMode();
      localStorage.setItem('darkMode', 'disabled');
    }
  });

  // Verifique se a guia foi aberta por outra guia
  const isChildTab = window.opener ? true : false;

  // Verifique se a preferência é "enabled" e a guia não é uma guia filha
  if (darkModePreference === 'enabled' && !isChildTab) {
    applyDarkMode();
  }
});
