/// <reference types="cypress" />

describe('Orange HRM Login functionality', () => {

    it('Validate Login with valid credentials', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.xpath('//input[@placeholder="Username"]').type('Admin')
        cy.xpath('//input[@placeholder="Password"]').type('admin123')
        cy.xpath('//button[normalize-space()="Login"]').click()
        cy.get(':nth-child(3) > .oxd-main-menu-item > .oxd-text').click()
        // cy.get('.oxd-topbar-body-nav > ul').contains('my leave',{matchCase:false}).click()
    
    //Using contains
    // cy.contains('My Leave').click()
    
    //Using regular expression- RegEx
        cy.get('.oxd-topbar-body-nav > ul').contains(/^M\w+/).click()


    })

})
