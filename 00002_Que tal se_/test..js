describe("", function() {
  it("Declarada a variável diaDeSemana", function() {
	assert.notEqual(diaDeSemana, "undefined");
  });
	it("Atribuido o valor \"domingo\" para  diaDeSemana", function() {
	assert.equal(diaDeSemana, "domingo");
  });
	it("deveria imprimir ''Hoje é dia de futebol!!!''", function() {
	assert.equal(console.toString(), "Hoje é dia de futebol!!!");
  });
})
