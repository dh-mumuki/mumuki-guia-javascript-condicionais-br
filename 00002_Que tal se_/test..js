describe("", function() {
  it("Declarada a variável diaDeSemana", function() {
	assert.notEqual(diaDeSemana, "undefined");
  });
	it("Atribuido o valor \"domingo\" para  diaDeSemana", function() {
	assert.equal(diaDeSemana, "domingo");
  });
	 it("debería imprimir ''Hoy se juega al futbol!!!''", function() {
    assert.equal(console.toString(), "Hoy se juega al futbol!!!");
  });
})
