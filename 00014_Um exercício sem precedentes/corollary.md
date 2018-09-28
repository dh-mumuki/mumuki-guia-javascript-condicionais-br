E se nós delegarmos? Poderíamos separar a lógica da seguinte maneira:
 
```javascript
function podeSeAposentar(idade, sexo, anosContribuicoes) {
  return cumpreIdadeMinima(idade, sexo) && temContribuicaoSuficiente(anosContribuicao);
}
```

**Ao delegar corretamente**, há momentos em que não é necessário alterar a ordem de precedência, outro ponto a favor da delegação! :muscle:

