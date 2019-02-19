Nenhuma introdução a Javascript estaria completa sem mostrar a estrutura de controle condicional, conhecida como if.

O `if` nos permite executar um código de acordo com uma condição.

Um exemplo da vida real poderia ser:
**Se o dia está ensolarado, vamos para a praia!** Como pode ver, no exemplo anterior estamos dando uma condição, a ida para a praia só acontecerá se o dia estiver ensolarado.

Muito bem, como podemos transcrever o que vimos para  código? Primeiro devemos entender que o if se divide em 3 partes :

1. A palavra reservada `if`.
2. A condição que queremos validar, ela deve ficar entre parênteses **()**.
3. O bloco de código que é executado quando a condição se cumpre (ou seja quando ela é `true` -verdadeira-), e deve ficar entre chaves **{}**.

Vejamos um exemplo:

```javascript
let numero = 43;

if (numero > 0) {
	console.log('O número é positivo');
}
```

Agora como poderíamos resolver a condição da praia através do código?

Vamos ver:

```javascript
if (eDiaEnsolarado == true) {
	console.log('Vamos para praia!');
}
```

No exemplo anterior, `eDiaEnsolarado` seria uma variável que armazena um valor booleano, e sempre que  esse valor for exatamente igual a `true`, vamos executar bloco de código que se encontra dentro das chaves  `{}`,  nesse caso, o `console.log`.

Vamos fazer uma pequena prática para ir entendendo o conceito.

> Declara a variável `diaDeSemana` que receba uma string `"domingo"`. Depois implemente uma condicional usando o `if` que compare se `diaDeSemana` é igual a `"domingo"`, se for verdadeiro imprima uma string `"Hoje é dia de futebol!!!"`.
