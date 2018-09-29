it("arcadio y aurelianoJose son medios hermanos", function() {
  assert.equal(sonMediosHermanos(arcadio, aurelianoJose), true);
})

it("aurelianoSegundo y remedios no son medios hermanos", function() {
  assert.equal(sonMediosHermanos(aurelianoSegundo, remedios), false);
})

it("aurelianoSegundo y aurelianoJose no son medios hermanos", function() {
  assert.equal(sonMediosHermanos(aurelianoSegundo, aurelianoJose), false);
})

it("remedios y arcadio no son medios hermanos", function() {
  assert.equal(sonMediosHermanos(remedios, arcadio), false);
})