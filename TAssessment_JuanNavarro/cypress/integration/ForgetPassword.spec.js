import ForgetPasswordPage from "../support/pages/ForgetPasswordPage";
import { ForgetPasswordtests } from "../fixtures/ForgetPasswordData";

describe('Pruebas de Forget Password', () => {
    ForgetPasswordtests.forEach(test => {
        it(test.name, function () {
            cy.intercept('GET', '**', (req) => {
                req.headers['Accept-Language'] = 'es';
              }).as('setLanguage');

            ForgetPasswordPage.visitUrl()
            cy.wait('@setLanguage');

            // Intentar cerrar el modal de cookies si aparece
            cy.get('body').then(($body) => {
                if ($body.find('#onetrust-reject-all-handler').length > 0) {
                    cy.get('#onetrust-reject-all-handler', { timeout: 5000 }).click();
                    cy.scrollTo('top');
                } else {
                    cy.log('El modal de cookies no apareció.');
                }
            });

            if(test.name === 'CTC_22_Forget_Password_cancel'){
                ForgetPasswordPage.clickCancelLink();
                cy.url().should('eq', 'https://www.nba.com/account/sign-in');
            }
        })
    });
});