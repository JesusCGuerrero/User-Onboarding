describe("Test Form", function() {

    it("check name", () => {
        cy.visit("http://localhost:3000");
        cy.get('.nameTest')
          .type("Gordon Freeman")
          .should("have.value", "Gordon Freeman")
    });

    it("check email", () => {
        cy.visit("http://localhost:3000");
        cy.get('.emailTest')
          .type("gfreeman@email.com")
          .should("have.value", "gfreeman@email.com");
    });

    it("Check password", () => {
        cy.visit("http://localhost:3000");
        cy.get('.passwordTest')
          .type("12345")
          .should("have.value", "12345");
    });

    it("Checkbox", () => {
        cy.visit("http://localhost:3000");
        cy.get('.checkboxTest')
          .check()
          .should('be.checked');
    });

    it("check submit", () => {
        cy.visit("http://localhost:3000");
        cy.get(".submitTest")
          .should('be.disabled')
    });

    it("Checks if fields are empty", () => {
        cy.visit("http://localhost:3000");
        cy.get('.nameTest')
        cy.get('.emailTest')
        cy.get('.passwordTest')
        cy.get('.checboxTest')
          .should('not.be.empty')
    })
});