it("uma pessoa que mede 1.5m, não está acompanhada por um adulto e não tem problemas cardíacos pode subir na atração", function() {
  assert.equal(podeSubir(1.5, false, false), true);
})

it("uma pessoa que mede 1.7m, não está acompanhada por um adulto e tem problemas cardíacos não pode subir na atração", function() {
  assert.equal(podeSubir(1.7, false, true), false);
})

it("uma pessoa que mede 1.2m, está acompanhada por um adulto e não tem problemas cardíacos pode subir na atração", function() {
  assert.equal(podeSubir(1.2, true, false), true);
})

it("uma pessoa que mede 1.2m, não está acompanhada por um adulto e não tem problemas cardíacos não pode subir na atração", function() {
  assert.equal(podeSubir(1.2, false, false), false);
})

it("uma pessoa que mede 1.1m, está acompanhada por um adulto e não tem problemas cardíacos não pode subir na atração", function() {
  assert.equal(podeSubir(1.1, true, false), false);
})
