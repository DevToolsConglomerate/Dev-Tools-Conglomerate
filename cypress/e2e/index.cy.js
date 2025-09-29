describe('Index Page', () => {
    beforeEach(() => {
        cy.visit('/index.html');
    });

    it('should load the home page', () => {
        cy.contains('Empower Your Development').should('be.visible');
    });

    it('should have responsive navigation', () => {
        cy.viewport('mobile');
        cy.get('button[aria-label="Toggle navigation menu"]').should('be.visible');
    });

    it('should toggle navigation menu', () => {
        cy.viewport('mobile');
        cy.get('button[aria-label="Toggle navigation menu"]').click();
        cy.get('#nav-menu').should('not.have.class', 'hidden');
    });

    it('should toggle dark mode', () => {
        cy.get('button[aria-label="Toggle dark mode"]').click();
        cy.get('html').should('have.class', 'dark');
    });

    it('should have fade-in animations', () => {
        cy.get('section').first().should('have.class', 'opacity-100');
    });
});
