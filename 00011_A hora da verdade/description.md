Agora vamos pensar qual seria a tabela verdade que representa o comportamento da função que você acabou de fazer.
 
As proposições serão `temAMesmaMae` e` temOMesmoPai`, porque elas carregam um valor booleano (` true / false`) dependendo de quais pessoas estão sendo avaliadas.

E o valor booleano final resultará de operá-los através da função `saoMeioIrmaos`:

<table class="table table-striped table-bordered table-condensed text-center">
  <tr>
    <th class ="text-center" style="padding: 5px 8px">tem a mesma mãe</th>
    <th class ="text-center" style="padding: 5px 8px">tem o mesmo pai</th>
    <th class ="text-center" style="padding: 5px 8px">são meio irmãos</th>
  </tr>
  <tr>
    <td>true</td>
    <td>true</td>
    <td>false</td>
  </tr>
  <tr>
    <td>true</td>
    <td>false</td>
    <td>true</td>
  </tr>
  <tr>
    <td>false</td>
    <td>true</td>
    <td>true</td>
  </tr>
  <tr>
    <td>false</td>
    <td>false</td>
    <td>false</td>
  </tr>
</table>
> Teste sua função `saoMeioIrmaos` com os seguintes valores e verifique se ela se comporta como a tabela:
 
> * `ム saoMeioIrmaos(cleo, fiuk)`
> * `ム saoMeioIrmaos(sandy, junior)`
