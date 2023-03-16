/// <reference types="cypress" />

describe('Smoke test', () => {

    before(()=> {
        cy.visit('https://www.saucedemo.com/')
    })

    beforeEach(()=>{
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    })

    it('Validate link', ()=>{
        cy.get('#item_4_title_link > .inventory_item_name').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    })

    // it('Validate Add-to-cart', ()=>{
    //     cy.get('#item_4_title_link > .inventory_item_name').click()
    //     cy.get('#data-test="add-to-cart-sauce-labs-backpack').click()
    // })

    afterEach(()=>{
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()

    })

    

})
