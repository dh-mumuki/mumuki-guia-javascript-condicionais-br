describe("", function() {
  it("eMaior(10, 9)", function() {
	assert.equal(eMaior(10, 9), 10)
  });
  it("eMaior(5, 11)", function() {
	assert.equal(eMaior(5, 11), 11)
  });
  it("eMaior(4, 4)", function() {
	assert.equal(eMaior(4, 4), 4)
  });
  it("eMaior(2, 120)", function() {
	assert.equal(eMaior(2, 120), 120)
  });
})
