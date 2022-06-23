describe('Test PHP', function() {

	it('btn', ()=> {
cy.visit('https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php')
cy.get('input[type="text"]').should('be.visible').click()
cy.get('input[type="password"]').should('be.visible').click()
cy.get('a [class="btn btn-success"]').should('be visible').click()
	})

})

