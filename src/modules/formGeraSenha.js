import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada');

const qnt = document.querySelector('.qnt-caracteres');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');

const gerarSenha = document.querySelector('.gerar-senha');

export default () => {
  gerarSenha.addEventListener('click', () => {
    senhaGerada.innerHTML = gera();
  });
};

function gera() {
  const senha = geraSenha(
    qnt.value,
    chkMinusculas.checked,
    chkMaiusculas.checked,
    chkNumeros.checked,
    chkSimbolos.checked
  );
  return senha || 'Nenhuma opção foi selecionada.';
}
