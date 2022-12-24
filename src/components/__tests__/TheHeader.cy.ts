import TheHeader from '../TheHeader.vue';

describe('The Header', () => {
	it('renders properly', () => {
		cy.mount(TheHeader, { props: { title: 'Monster Slayer' } });
		cy.get('h1').should('contain', 'Monster Slayer');
	});
});
