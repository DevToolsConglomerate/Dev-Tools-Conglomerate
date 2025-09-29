describe('Dashboard Page', () => {
    beforeEach(() => {
        cy.visit('/dashboard.html');
    });

    it('should load the dashboard page', () => {
        cy.contains('Available APIs').should('be.visible');
    });

    it('should display API cards', () => {
        cy.get('.grid > div').should('have.length.greaterThan', 10);
    });

    it('should have accessible navigation toggle', () => {
        cy.get('button[aria-label="Toggle navigation menu"]').should('exist');
    });

    it('should toggle dark mode', () => {
        cy.get('button[aria-label="Toggle dark mode"]').click();
        cy.get('html').should('have.class', 'dark');
    });

    it('should validate search input', () => {
        cy.get('input[placeholder="Search tools..."]').type('test');
        cy.get('button').contains('Search').click();
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Searching for: test');
        });
    });

    it('should filter API cards on search input', () => {
        cy.get('input[placeholder="Search tools..."]').type('SQL');
        cy.get('.grid > div').should('have.length', 1);
        cy.get('.grid > div h3').should('contain', 'SQL Injection Scanner');
    });

    it('should have keyboard accessible API cards', () => {
        cy.get('.grid > div').first().should('have.attr', 'tabindex', '0');
        cy.get('.grid > div').first().should('have.attr', 'role', 'button');
    });
});
