/// <reference types="cypress" />

describe('Orange HRM Login functionality', () => {

    it('Validate Login with valid credentials', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //Using CSS Selectors
        
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        
    //Using Xpath
        // cy.xpath('//input[@placeholder="Username"]').type('Admin')
        // cy.xpath('//input[@placeholder="Password"]').type('admin123')
        // cy.xpath('//button[normalize-space()="Login"]').click()
    })

    //Using Cypress Chrome Recorder
    it("Test- Cypress Chrome Recorder", () => {
        cy.viewport(1528, 413);
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input").click();
        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input").type("Admin");
        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input").click();
        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input").type("admin123");
        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button").click();
        cy.location("href").should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
        cy.get("#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-header > div.oxd-topbar-header-userarea > ul > li > span > i").click();
        cy.get("#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-header > div.oxd-topbar-header-userarea > ul > li > ul > li:nth-child(4) > a").click();
        cy.location("href").should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      
    })



})
