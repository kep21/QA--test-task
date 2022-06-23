



describe('', ()=> {
	const user_email = 'testing2022@gmail.com'
	const password = 'Rts3178'

	it('test positive', ()=> {
		cy.visit('https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php')


		cy.get('input[type="text"]').type(user_email).click()
		cy.get('input[type="password"]').type(password).click()
		cy.get('.btn').click()
	})
})
