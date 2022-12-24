// https://docs.cypress.io/api/introduction/api.html

describe('Header', () => {
	it('title renders properly', () => {
		cy.visit('/');
		cy.contains('h1', 'Monster Slayer');
	});
});
