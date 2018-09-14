Estamos indo agora com um desafio um pouco mais complexo.

Todos nós sabemos que as árvores genealógicas podem se tornar complicadas quando há muitas pessoas e relacionamentos envolvidos.

Certamente você conhece o romance Cem Anos de Solidão, em que acompanhar aqueles que são irmãos e meio-irmãos se torna um pouco confuso, porque a linhagem cruzou várias vezes, então para colocar alguns exemplos:

Arcadio é filho de José Arcadio e de Pilar Ternera
Aureliano José é filho do Coronel Aureliano e Pilar Ternera
Aureliano Segundo e Remedios são filhos de Arcadio e Sofía De La Piedad

Portanto poderíamos definir que Arcadio e Aureliano José são meio irmãos eles têm a mesma mãe, mas não o mesmo pai.

Para que você possa resolver este exercício, definimos para você as funções `maeDe` e `paiDe`, que, recebendo um filho (string), retorna o nome (string) da mãe ou pai conforme apropriado. Exemplo:

```javascript
ム paiDe(aurelianoJose)
"Coronel Aureliano"
ム maeDe(aurelianoSegundo)
"Sofía De La Piedad"
```

> Agora é a sua vez de nos ajudar a entender melhor o romance Cem Anos de Solidão. Para isso, você terá que definir 3 funções:
`temAMesmaMae` que tem dois filhos por parâmetro e retornará `true` ou` false` se eles realmente compartilharem a mesma mãe. Sabendo disso você pode usar a função que nós lhe damos  `maeDe`.  

> `temOMesmoPai` que como o anterior, pega dois filhos por parâmetro e retorne `true` ou` false` se eles compartilharem o mesmo pai. Sabendo disso você pode usar a função que nós lhe damos `paiDe`.  

> E `saoMeioIrmaos`, que, recebendo dois filhos por parâmetro, nos diga se de fato são meio-irmãos. Você deve usar as duas funções anteriores aqui. Lembre-se que os meios irmãos são dados quando, dois filhos compartilham a mesma mãe, mas NÃO o mesmo pai ou vice-versa. Bem, se ambos têm a mesma mãe e o mesmo pai, nesse caso eles seriam irmãos! :sweat_smile:
