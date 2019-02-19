Seguindo as abordagens filosóficas e analisando a seguinte tabela, podemos concluir que, na lógica booleana, o comportamento de uma expressão pode ser definido por meio de uma tabela de verdade. Onde A e B são expressões que avaliam `true` ou` false` e usam o símbolo ^ (que representa a conjunção deles), podemos determinar se a união deles gera True ou False.


<table class="table table-striped table-bordered table-condensed text-center">
  <tr>
    <th class ="text-center" style="width: 75px">A</th>
    <th class ="text-center" style="width: 75px">B</th>
    <th class ="text-center" style="width: 100px">A ^ B</th>
  </tr>
  <tr>
    <td>V</td>
    <td>V</td>
    <td>V</td>
  </tr>
  <tr>
    <td>V</td>
    <td>F</td>
    <td>F</td>
  </tr>
  <tr>
    <td>F</td>
    <td>V</td>
    <td>F</td>
  </tr>
  <tr>
    <td>F</td>
    <td>F</td>
    <td>F</td>
  </tr>
</table>

No mundo da lógica, essas expressões são chamadas de proposições. Mas ... o que pode ser uma proposição?
Eles só precisam ter um valor de verdade, isto é, qualquer expressão booleana pode ser uma proposição.

Teste sua função `filosofoHipster` no console com os seguintes valores e verifique se ela se comporta como na tabela:

```javascript
filosofoHipster('Músico', 'Brasil', 5) // true
filosofoHipster('Jogador de Futebol', 'Alemanha', 12) // false
filosofoHipster('Músico', 'Argentina', 1) // false
filosofoHipster('Docente', 'Canadá', 12) // false
```