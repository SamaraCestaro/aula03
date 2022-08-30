//Crie uma função que receba um array de números (Valide os dados dentro do array, reaproveite a função criada no exercício 1) e depois calcule a média de todos os valores dentro do array. Execute a função mostrando na tela o seguinte texto: 'A média dos valores do array é ${(resultado)}'.

function valoresSomados(n1,n2,n3) {
  let total = n1 * n2 + n3
  return total
}

alert(`A soma dos valores é: ${valoresSomados(2,4,10)}`)