Como vimos em exercícios anteriores, um operador que é chamado de conjunção lógica `&&` (também chamado de "E"), que só retorna `true` quando ambas as expressões são verdadeiras.

Da mesma forma, já sabemos que podemos unir várias expressões para serem avaliadas por este operador e se alguma delas não for verdadeira (`false`) o resultado final será falso.

Por exemplo, se analisarmos a seguinte função:


```javascript
function eBomCantor(cdsEditados, 
recitaisRealizados, gravouAlgumCd) {
        return cdsEditados > = 10 && 
        recitaisRealizados > = 20 && gravouAlgumCd;
}
```

Podemos perceber que para um cantor ser considerado um bom cantor, ele precisa ter participado de pelo menos 10 CDs, tenha realizado 20 ou mais recitais e que tenha gravado algum CDs.

Podemos perceber que não é necessário que um cantor tenha gravado um DVD para ser considerado bem-sucedido 😞 mesmo que tenha editado 10 ou mais CDs e tenha realizado 20 ou mais recitais.

Como sempre, agora é a sua vez.


> Defina a função `filosofoHipster` que recebe como parâmetro: a profissão de uma pessoa (string), nacionalidade (string) e o número de quilômetros que ele anda por dia (número). E para avaliar se essa pessoa é ou não (`true / false`), um filósofo Hipster. Tenha em mente que um filósofo Hipster é alguém do Brasil, um músico e que gosta de andar mais de 2 quilômetros por dia.


```javascript
Exemplo:
filosofoHipster ('Músico', 'Brasil', 5) // verdadeiro
filosofoHipster ('Jogador de futebol', 'Alemanha', 12) // false
filosofoHipster ('Músico', 'Argentina', 1) // false

