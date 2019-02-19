Chegamos longe o suficiente para entender que as funções `temAMesmaMae` e `temOMesmoPai` são proposições genéricas **A** e **B**. Além disso, se representarmos a operação que executa `saoMeioIrmaos` com o símbolo **⊻** o que temos é ... uma nova tabela verdade!
<table class="table table-striped table-bordered table-condensed text-center">
  <tr>
    <th class ="text-center" style="width: 75px">A</th>
    <th class ="text-center" style="width: 75px">B</th>
    <th class ="text-center" style="width: 100px">A ⊻ B</th>
  </tr>
  <tr>
    <td>V</td>
    <td>V</td>
    <td>F</td>
  </tr>
  <tr>
    <td>V</td>
    <td>F</td>
    <td>V</td>
  </tr>
  <tr>
    <td>F</td>
    <td>V</td>
    <td>V</td>
  </tr>
  <tr>
    <td>F</td>
    <td>F</td>
    <td>F</td>
  </tr>
</table>
Este comportamento existe como um operador dentro da lógica e é chamado `xor` ou disjunção lógica exclusiva.
 
Ao contrário de `e` e` ou`, o `xor` geralmente não é definido nas linguagens de programação. :cry: No entanto, agora que você sabe como funciona, se precisar, você pode defini-lo manualmente. :wink:

> Vamos ver se você entendeu: Defina a função `xor`, que pega dois valores booleanos como parâmetro e retorna o valor correspondente de acordo com a tabela. DICA: é mais simples do que você pensa, você pode resolvê-lo na mesma linha do `return` e talvez você tenha que usar o símbolo de negação `! `.
