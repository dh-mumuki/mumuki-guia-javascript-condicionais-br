Você pode não se lembrar bem disso, mas quando passamos pela escola nós aprendemos que quando uma expressão matemática tem vários operadores, as multiplicações e divisões serão feitas antes que a adição e a subtração sejam feitas após as adições, isso é chamado **precedência** Vamos ver um exemplo simples:

```javascript
5 * 3 + 8 / 4 - 3 = 14
```
Vamos entender melhor o que aconteceu acima:

```javascript
((5 * 3) + (8 / 4)) - 3 = 14
```
A primeira coisa que acontece é multiplicação e depois a divisão e depois as somas dos resultados. O resultado seria:

```javascript
(15 + 2) - 3 = 14
```
Agora que vimos que Javascript segue a mesma **precedência** que a matemática.

Vamos ver um exemplo disso em uma função:

```javascript
function pagarComCartao
(temJuros, taxasDoCartao, dinheiroDisponivel) {
  return !temJuros && taxasDoCartao >= 3 || dinheiroDisponivel < 100;
}
```

> Teste no console os seguintes exemplos e veja o resultado:

>* `ム pagarComCartao(true, 6, 320)`
>* `ム pagarComCartao(false, 8, 80)`
>* `ム pagarComCartao(true, 2, 215)`
>* `ム pagarComCartao(true, 1, 32)`
