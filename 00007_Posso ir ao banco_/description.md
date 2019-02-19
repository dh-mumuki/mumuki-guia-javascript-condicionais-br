Agora vamos criar uma função que nos diga se o banco está fechado?

Primeiro de tudo precisamos saber que um banco está fechado quando **é fim de semana (sábado ou domingo)** e não está no horário bancário (9 às 15hs).

> Defina a função `possoIrAoBanco` que, receba dois parâmetros, o primeiro é  `diaDaSemana` (string)  e o segundo `horaAtual`(numero), a função deve retornar `true`, apenas se o banco estiver aberto.

Exemplo:

```javascript
possoIrAoBanco("segunda-feira", 10);
// true, é um dia da semana e está no horário bancário, 10hs
possoIrAoBanco("terça-feira", 18);
// false, é dia da semana e NÃO está no horário bancário, 18hs
possoIrAoBanco("Sábado", 11);
// false, é fim de semana
```

Lembre-se que você pode fazer o que é necessário usando o `return` sem fazer uso de `if/else`.
