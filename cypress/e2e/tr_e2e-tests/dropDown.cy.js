/// <reference types="cypress" />

describe('Dropdown list test', () => {
        
    it('Validate select based dropdown', ()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.product_sort_container').select('Price (high to low)')
        cy.get('.product_sort_container').select('Price (low to high)')
        cy.get('.product_sort_container').select('Name (A to Z)')
    })

    it('Validate auto complete based dropdown', ()=>{
        cy.visit('https://www.google.com/')
        cy.get('.gLFyf').type('Cypress automation')
        cy.contains('cypress automation example').click()

    })




    

})
