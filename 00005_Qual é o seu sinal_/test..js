describe("", function() {
  it("sinal(10) é 1", function() {
	assert.equal(signo(10), 1)
  });
  it("sinal(1) é 1", function() {
	assert.equal(signo(1), 1)
  })
  it("sinal(0) é 0", function() {
	assert.equal(signo(0), 0)
  })
  it("sinal(-65) é -1", function() {
	assert.equal(signo(-65), -1)
  })
})
