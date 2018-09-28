it("la disyunción lógica excluyente entre true y true da false", function() {
  assert.equal(xor(true, true), false);
})

it("la disyunción lógica excluyente entre true y false da true", function() {
  assert.equal(xor(true, false), true);
})

it("la disyunción lógica excluyente entre false y true da true", function() {
  assert.equal(xor(false, true), true);
})

it("la disyunción lógica excluyente entre false y false da false", function() {
  assert.equal(xor(false, false), false);
})

