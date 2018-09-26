describe("", function() {
	it("hojeSeJoga(\"domingo\") deveria dizer se joga ", function() {
	assert.equal(hojeSeJoga("domingo"), "Hoje é dia de futebol!!!");
  });
  it("hojeSeJoga(\"terça\") devería dizer que não joga ", function() {
	assert.equal(hojeSeJoga("terça"), "Hoje não é dia de futebol :(");
  });
})
