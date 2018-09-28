Como você viu no exercício anterior, a operação com maior precedência é negação !, seguida pela conjunção `&&` e depois disjunção `||` mas o que acontece se eu quiser alterar a ordem na qual essas operações são resolvidas?

Exatamente como dissemos no início do exercício anterior, como em matemática, podemos usar os parênteses para agrupar as operações que queremos realizar primeiro.

Agora é a sua vez:

> Escreva a função  `podeSeAposentar` que recebe por parâmetro a idade, o sexo e também, os anos de contribuição previdenciária que uma pessoa tem, exemplo:

> ```javascript
> ム podeSeAposentar(62, "F", 34)
> true
> ```

> Tenha em mente que a idade mínima para completar o procedimento para mulheres é 60 anos, enquanto que para homens é 65. Em ambos os casos, você deve ter pelo menos 30 anos de contribuição.
