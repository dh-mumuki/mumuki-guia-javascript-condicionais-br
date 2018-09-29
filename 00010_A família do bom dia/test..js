it("arcadio e aurelianoJose são meio irmãos", function() {
  assert.equal(saoMeioIrmaos(arcadio, aurelianoJose), true);
})

it("aurelianoSegundo e remedios não são meio irmãos", function() {
  assert.equal(saoMeioIrmaos(aurelianoSegundo, remedios), false);
})

it("aurelianoSegundo e aurelianoJose não são meio irmãos", function() {
  assert.equal(saoMeioIrmaos(aurelianoSegundo, aurelianoJose), false);
})

it("remedios e arcadio não são meio irmãos", function() {
  assert.equal(saoMeioIrmaos(remedios, arcadio), false);
})