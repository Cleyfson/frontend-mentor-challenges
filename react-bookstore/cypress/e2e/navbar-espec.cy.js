describe('My First Test', () => {
	beforeEach(() => {
		cy.visit('http://localhost:5173/');
	});

	it('get navbar', () => {
		cy.get('.navbar').contains('.navbar');
	});
});
