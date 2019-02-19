No exercício anterior analisamos o seguinte código:

```javascript
if (eDiaEnsolarado == true) {
	console.log('Vamos para praia!');
}
```

E comentamos que sempre que valor de **eDiaEnsolarado** seja exatamente igual a `true`, vamos executar o seguinte bloco de código que se encontra dentro das `{}`.

Mas e se o dia não está ensolarado? É aí que entra o else, a outra parte do if. Escrevemos assim:

```javascript
if (eDiaEnsolarado == true) {
	console.log('Vamos para praia!');
} else {
	console.log('Que pena é melhor ficarmos por aqui!');
}
```

A condicional `else` nos permite executar um bloco de código, caso a condição do `if` não se cumpra, porém o else tem apenas duas partes:

1. A palavra reservada `else`.
2. O bloco de código que se executa caso a condição do `if` não se cumpra.

Agora que sabemos como `if` e o `else` funciona, vamos ver um exemplo de uma função que nos retorna `true` se um número é maior que 5, ou `false` em caso contrário:

```javascript
function eMaior(umNumero) {
   if (umNumero > 5) {
 	return true;
   } else {
 	return false;
   }
}
```

No exemplo anterior, a função se encarregará de receber um número por parâmetro e utilizando `if` e `else`, retorna `true` ou `false` se o mesmo é maior a 5.

> Define a função `hojeSeJoga`, que receba por parâmetro uma string que informe o día da semana. Esta função deve retornar`"Hoje é dia de futebol!!!"` se parâmetro for `"domingo"`, caso contrário deve retornar `"Hoje não é dia de futebol :("`.
