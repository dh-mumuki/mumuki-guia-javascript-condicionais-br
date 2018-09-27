describe("Filósofo Hipster", function() {
  it("filosofoHipster('Músico', 'Brasil', 5)", function() {
    assert.equal(filosofoHipster('Músico', 'Brasil', 5), true)
  });
   it("filosofoHipster('Jogador de Futebol', 'Brasil', 12)", function() {
    assert.equal(filosofoHipster('Jogador de Futebol', 'Brasil', 12), false)
  });
  it("('Músico', 'Argentina', 1)", function() {
    assert.equal(filosofoHipster('Músico', 'Argentina', 1), false)
  });
})