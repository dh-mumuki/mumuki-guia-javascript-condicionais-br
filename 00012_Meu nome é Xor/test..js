it("a disjunção lógica exclusiva entre true e true é false", function() {
  assert.equal(xor(true, true), false);
})

it("a disjunção lógica exclusiva entre true e false é true", function() {
  assert.equal(xor(true, false), true);
})

it("a disjunção lógica exclusiva entre false e true é true", function() {
  assert.equal(xor(false, true), true);
})

it("a disjunção lógica exclusiva entre false e false é false", function() {
  assert.equal(xor(false, false), false);
})

