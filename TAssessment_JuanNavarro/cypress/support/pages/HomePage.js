class HomePage{
    elements = {
        urlbase: 'https://www.nba.com/',
        scoresToggle: () => cy.xpath("//span[@data-id='nba:game-tracker:hide-scores:toggle']"),
        scoresContent: () => cy.get('.CarouselDynamic_cd__77Fo_')


    }


    // Verifica si el toggle está activado (data-pos="true")
    verifyScoreToggleActive() {
        this.elements.scoresToggle().should('have.attr', 'data-pos', 'true');
    }

    // Verifica si el toggle está desactivado (data-pos="false")
    verifyScoreToggleInactive() {
        return this.elements.scoresToggle().should('have.attr', 'data-pos', 'false');
    }

    // Alternar el estado del toggle (clic en el toggle)
    ScorestoggleAction() {
        this.elements.scoresToggle().click();
    }

    visitUrl(){
        cy.visit(this.elements.urlbase);
    }

    validHiddenScores(){
        return this.elements.scoresContent().should('be.visible');
    }

    validShownScores(){
        return this.elements.scoresContent().should('be.visible');
    }
}

module.exports = new HomePage();