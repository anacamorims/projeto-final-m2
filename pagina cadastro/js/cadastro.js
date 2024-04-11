
class Usuario {
  constructor(nome) {
    this.nome = nome;
  }
}



let listaUser = [];

let labelNome = document.querySelector('#labelNome');
let nome = document.querySelector('#nome');
let validenome = false;



let labelIdade = document.querySelector('#labelidade');
let idade = document.querySelector('#idade');



idade.addEventListener('input', () => {

  if (idade.value >= 16) {
    labelIdade.setAttribute('style', 'color: green');
    labelIdade.innerHTML = 'Idade';
  } else {
    labelIdade.setAttribute('style', 'color: red');
    labelIdade.innerHTML = 'Idade * Mínimo aceito é de 16 anos ';
  }

});




nome.addEventListener('input', () => {
  

  nome.value = nome.value.replace(/[^a-zA-Z\s]/g, '');


  if (nome.value.length >= 15 && nome.value.length < 60) {
    labelNome.setAttribute('style', 'color: green');
    labelNome.innerHTML = 'Nome';
    validenome = true;
  } else {
    labelNome.setAttribute('style', 'color: red');
    labelNome.innerHTML = 'Nome * Insira no mínimo 15 caracteres';
    validenome = false;
  }

});




$(document).ready(function () {
  $("#numeroCelular").mask("(00) 00000-0000");
});




function cadastrar() {
  if (validenome) {
    let usuario = new Usuario(nome.value);
    listaUser.push(usuario);


    localStorage.setItem('listaUser', JSON.stringify(listaUser));
    setTimeout(() => {
      window.open("../index.html", "_blank");
    }, 3000);


    document.getElementById('mensagem').innerHTML = 'Cadastro realizado com sucesso!';
    return false;
  } else {
    document.getElementById('mensagem').innerHTML = 'Preencha o formulário corretamente.';
    return false;
  }

}




