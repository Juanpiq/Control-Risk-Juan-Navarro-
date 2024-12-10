import HomePage from "../support/pages/HomePage";

beforeEach(() => {
    /*cy.intercept('GET', '**', (req) => {
        req.headers['Accept-Language'] = 'es';
      }).as('setLanguage');*/
    HomePage.visitUrl();
    //cy.wait('@setLanguage');

    cy.get('body').then(($body) => {
        if ($body.find('#onetrust-reject-all-handler').length > 0) {
            cy.get('#onetrust-reject-all-handler', { timeout: 8000 }).click();
            cy.scrollTo('top');
        } else {
            cy.log('El modal de cookies no apareció.');
        }
    });
});

describe('Pruebas para esconder y mostrar los resultados de partidos', () =>{
    it('CTC_24_Home_Page_Hide_Scores', () =>{
        HomePage.verifyScoreToggleActive();
        HomePage.validShownScores();
        cy.contains('Content is hidden to prevent spoilers. ').should('not.exist');
        HomePage.ScorestoggleAction();
        cy.contains('Content is hidden to prevent spoilers. ').should('be.visible');
        HomePage.verifyScoreToggleInactive();
        //HomePage.validHiddenScores();

    });

    it('CTC_25_Home_Page_Show_Scores', () =>{
        HomePage.verifyScoreToggleActive();
        HomePage.validShownScores();
        cy.contains('Content is hidden to prevent spoilers. ').should('not.exist');
        HomePage.ScorestoggleAction();
        cy.contains('Content is hidden to prevent spoilers. ').should('be.visible');
        HomePage.verifyScoreToggleInactive();
        
        HomePage.ScorestoggleAction();
        HomePage.verifyScoreToggleActive();
        cy.contains('Content is hidden to prevent spoilers. ').should('not.exist');
    });

    it('CTC_26_Cart_Add_item_to_cart', () => {
        HomePage.hoverStore();
    });


});