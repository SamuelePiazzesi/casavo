describe("Product builder", () => {
	it("user can be build a car", () => {
		//visit page
		cy.visit("");
		//select a model
		cy.findByRole("button", {
			name: /bmw i3 bmw i3 from \$42,400 check/i,
		}).click();
		//click color step
		cy.findByRole("button", { name: /colors chevron\-right/i }).click();
		//select a different color
		cy.get(
			"#root > div > div > div > div > div > div > ul > li:nth-child(2) > div"
		).click();
		//click accessories step
		cy.findByRole("button", { name: /accessories chevron\-right/i }).click();
		//select some accessories and remove it
		cy.get("#root > div > div > div > div > div > div:nth-child(1)").click();
		cy.get("#root > div > div > div > div > div > div:nth-child(2)").click();
		cy.get("#root > div > div > div > div > div > div:nth-child(1)").click();
		// go to summary
		cy.findByRole("button", { name: /summary chevron\-right/i }).click();
	});
});
