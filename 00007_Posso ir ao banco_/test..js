describe("", function() {
  it("possoIrAoBanco('sexta-feira', 10)", function() {
    assert.equal(possoIrAoBanco("sexta-feira", 10), true)
  });
   it("possoIrAoBanco('terça-feira', 18)", function() {
    assert.equal(possoIrAoBanco("terça-feira", 18), false)
  });
   it("possoIrAoBanco('sábado', 11)", function() {
    assert.equal(possoIrAoBanco("sábado", 11), false)
  });
  it("possoIrAoBanco('sábado', 12)", function() {
    assert.equal(possoIrAoBanco("sábado", 11), false)
  });
  it("possoIrAoBanco('sábado', 13)", function() {
    assert.equal(possoIrAoBanco("sábado", 11), false)
  });
   it("possoIrAoBanco('sábado', 14)", function() {
    assert.equal(possoIrAoBanco("sábado", 11), false)
  });
})