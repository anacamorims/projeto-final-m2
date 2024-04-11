document.addEventListener('DOMContentLoaded', () => {
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
  

  
  if (darkModePreference === 'enabled') {
    applyDarkMode();
  }
  

  
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
  
  
  const isChildTab = window.opener ? true : false;
  
  
  if (darkModePreference === 'enabled' && !isChildTab) {
    applyDarkMode();
  }


});