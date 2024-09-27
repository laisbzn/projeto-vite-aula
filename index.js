import './style.css';
import { juntaNomes } from './gerenciaDeNomes.js';
import { dividirNumeros } from './calculadora.js';

// Lógica para concatenar nomes
document.getElementById('btn-concatenar').addEventListener('click', () => {
  const nome = document.getElementById('nome').value;
  const sobrenome = document.getElementById('sobrenome').value;
  const resultadoNome = juntaNomes(nome, sobrenome);
  document.getElementById('resultado-nome').textContent = resultadoNome;
});

// Lógica para dividir números
document.getElementById('btn-dividir').addEventListener('click', () => {
  const numero1 = parseFloat(document.getElementById('numero1').value);
  const numero2 = parseFloat(document.getElementById('numero2').value);
  const resultadoDivisao = dividirNumeros(numero1, numero2);
  document.getElementById('resultado-divisao').textContent = resultadoDivisao;
});
