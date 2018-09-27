describe("", function() {
  it("possoIrAoBanco('sexta-feira', 10)", function() {
    assert.equal(puedoIrAlBanco("sexta-feira", 10), true)
  });
   it("possoIrAoBanco('terça-feira', 18)", function() {
    assert.equal(puedoIrAlBanco("terça-feira", 18), false)
  });
   it("possoIrAoBanco('sábado', 11)", function() {
    assert.equal(puedoIrAlBanco("sábado", 11), false)
  });
  it("possoIrAoBanco('sábado', 12)", function() {
    assert.equal(puedoIrAlBanco("sábado", 11), false)
  });
  it("possoIrAoBanco('sábado', 13)", function() {
    assert.equal(puedoIrAlBanco("sábado", 11), false)
  });
   it("possoIrAoBanco('sábado', 14)", function() {
    assert.equal(puedoIrAlBanco("sábado", 11), false)
  });
})