describe("", function() {
it ("a disjunção lógica exclusiva entre verdadeiro e verdadeiro dá falso", function () {
  assert.equal(xor(true, true), false);
})

("a disjunção lógica exclusiva entre verdadeiro e falso dá verdadeiro", function () {
  assert.equal(xor(true, false), true);
})

it("a disjunção lógica exclusiva entre falso e verdadeiro dá verdadeiro", function() {
  assert.equal(xor(false, true), true);
})

it("a disjunção lógica exclusiva entre falso e falso dá falso", function() {
  assert.equal(xor(false, false), false);
});
})
