/// <reference types="cypress" />

describe('Tourradar - Europe Tours and Trips webpage test suite', () => {
  before( () =>{
    console.log('running my tests')
  })

  beforeEach( ()=>{
    cy.visit('https://www.tourradar.com/d/europe')
    cy.viewport(1024,768)
    cy.wait(2000)
  })

  it('Test01: Europe Tours & Trips page validation', () => {
    cy.get(':nth-child(2) > .js-ao-common-breadcrumbs-list__breadcrumb-link').should('have.text', 'Europe tours')
    cy.get('.js-ao-serp-hero__title').should('have.text', 'Europe Tours & Trips')
    cy.get('[data-type="destinations"] > .ao-header-navigation__item-link').should('contain', 'Destination')
    cy.get('[data-type="styles"] > .ao-header-navigation__item-link').should('contain', 'Adventure Styles')
    cy.get('.deals').should('contain', 'Deals')
    cy.get('.contact-flow__link > .ao-header-navigation__item-link').should('contain', 'Contact')
    cy.get('.serp-parameters__title').should('contain', 'Sort & filter')
  })

  it('Test02: View tours & trips details', () => {
    cy.get('[data-cy="serp-tours--list"] > ul').should('contain','Europe Escape - 12 Days')
    cy.get('[itemscope=""][data-id="14263"] > .bm > .values').should('contain','Italy, Austria, Germany, Netherlands, Belgium, France, Switzerland')
    cy.get('.js-ao-serp-hero__title').should('have.text', 'Europe Tours & Trips')
    cy.get('[data-type="destinations"] > .ao-header-navigation__item-link').should('contain', 'Destination')
    cy.get('[data-type="styles"] > .ao-header-navigation__item-link').should('contain', 'Adventure Styles')
    cy.get('.deals').should('contain', 'Deals')
    cy.get('.contact-flow__link > .ao-header-navigation__item-link').should('contain', 'Contact')
    cy.get('.serp-parameters__title').should('contain', 'Sort & filter')
    cy.get('[itemscope=""][data-id="14263"] > .br > .br__button-wrapper > .aa-btn--primary').click()
  })

  it('Test03: Downloading a brochure', () => { 
  cy.get('[itemscope=""][data-id="14263"] > .br > .br__button-wrapper > [data-cy="serp-tour--download-brochure"]').click()
  cy.get('[data-cy="common-download-brochure--email-input"]').clear('m');
  cy.get('[data-cy="common-download-brochure--email-input"]').type('manjunatha2207@gmail.com')
  cy.get('.aa-checkbox__icon').click();
  cy.get('[data-cy="common-download-brochure--optin"]').check({force: true});
  cy.get('[data-cy="common-download-brochure--submit"]').click({force: true});
  cy.get('#callback_popup > .js-scout-component__modal-dialog > .scout-component__modal-top').should('contain','Brochure successfully sent!');
  })

  it('Test04: Departure date filter', function() {
    cy.get('.b_dep > .c > .ao-serp-filters-show-more__wrapper > .aa-btn').click()
    cy.get('[data-pid="february-2025"] > .ao-serp-filters-checkbox__link > .ao-serp-filters-checkbox__label').click()
    // cy.get('.js-am-serp-results-stats').should('contain','155 Europe tour packages')
  })

  it('Test05: Adventure Type filter', function() {
    cy.get('[data-pid="384"] > .ao-serp-filters-checkbox__label').click()
    cy.get('.js-am-serp-results-stats').should('contain','2 Europe tour packages')
    cy.get('main').should('contain','Romania UNESCO 7-Day Private Tour')
    cy.get('main').should('contain','MADAME BUTTERFLY IN BREGENZ, AUSTRIA')
  })

  it('Test06: Adventure Styles filter', function() {
    cy.get('[data-pid="385"] > .ao-serp-filters-checkbox__label').click()
    cy.get('[data-pid="189"] > .ao-serp-filters-checkbox__label').click()
    cy.get('.js-am-serp-results-stats').should('contain','4 Europe tour packages')
  })

  it('Test07: Accommodation type filter', function() {
    cy.get('.b_acc > h5').click()
    cy.get('[data-cy="serp-filters--accommodation-list"] > [data-pid="4"] > .ao-serp-filters-checkbox__label').click()
    cy.get('.b_acc > h5').click()
    cy.get('.js-am-serp-results-stats').should('contain','50 Europe tour packages')
  })

  it('Test08: Sign Up to Tourradar Accout', function() {
    cy.get('.ao-header-navigation__dropdown > .ao-header-navigation__dropdown-list--profile > .ao-header-navigation__dropdown-button-wrapper > .aa-btn--secondary').click({force: true})
    cy.get('.reg-page-bg').click()
    cy.get('[data-cy="sign-up--name"]').type('Manjunatha')
    cy.get('[data-cy="sign-up--email"]').clear()
    cy.get('[data-cy="sign-up--email"]').type('manjunatha2207@gmail.com');
    cy.get('[data-cy="sign-up--password"]').clear()
    cy.get('[data-cy="sign-up--password"]').type('Mytour@1234')
    cy.get('[data-cy="sign-up--password-repetition"]').clear()
    cy.get('[data-cy="sign-up--password-repetition"]').type('Mytour@1234')
    cy.get('#subscribe').check()
    cy.get('.title').click()
  })

  it('Test09: Login to Tourradar Account', function() {
    cy.get('.ao-header-navigation__dropdown > .ao-header-navigation__dropdown-list--profile > .ao-header-navigation__dropdown-button-wrapper > .aa-btn--primary').click({force: true})
    cy.get('[data-cy="login--email"]').type('manjunatha2207@gmail.com')
    cy.get('[data-cy="login--password"]').type('Mytour@1234')
    cy.get('.title').click()
    cy.get('.ao-header-navigation__dropdown-list--profile-active > :nth-child(2) > .ao-header-navigation__dropdown-link').click({force: true})
   // Change language from English to German to English
    cy.get('.ao-profile-top__edit-link').click();
    cy.get('#language').select('de');
    cy.get('.ao-settings-top__save-container > .ah-grid-col > .aa-btn').click();
    cy.wait(4000)
    cy.get('.tb').click({force: true});
    cy.get('.ao-settings-top__title').click();
    cy.get('.ao-header-navigation__profile-link > .initials').click();
    cy.get('.ao-profile-top__edit-link').click();
    cy.get('#language').select('en');
    cy.get('.ao-settings-top__save-container > .ah-grid-col > .aa-btn').click();
    cy.get('.ao-header-navigation__profile-link > .initials').click();
    cy.get('.ao-profile-top__profile-details-greeting').click();
    cy.get('.ao-profile-top__profile-details').click();
  })

  it('Test10: Last Minute Deals', function() {
    cy.get(':nth-child(3) > .js-top-menu-deals__submenu-link').click({force: true} );
    cy.get('.ao-clp-sale-hero__heading').should('contain','Last Minute Deals')
    cy.get('.ao-clp-sales-destinations__title').should('contain','Last Minute Destinations')
  });

  it('Test11: Contact Menu - Ask a question', function() {
    cy.get('.contact-flow__link > .ao-header-navigation__item-link').click()
    cy.get('.js-contact_us_options_link > span').click()
    cy.get('.js-contact_us_message > span').click()
    cy.get('[data-cy="tdp-ask-question--popup"] > .js-scout-component__modal-dialog > .scout-component__modal-top > .scout-component__modal-heading').should('contain','Ask a Question')
    cy.get('[data-cy="tdp-ask-question--traveller-name-input"]').type('Manjunatha')
    cy.get('[data-cy="tdp-ask-question--traveller-email-input"]').type('manjunatha2207@gmail.com')
    cy.get('[data-cy="tdp-ask-question--traveller-phone-input"]').type('+49 1234 1234')
    cy.get('[data-cy="tdp-ask-question--message-textarea"]').type('Test question - Not sending')
    cy.get('.scout-element__checkbox-field').click()
    cy.get('[data-cy="tdp-ask-question--receive-newsletter-input"]').click({force: true})
    cy.get('[data-cy="tdp-ask-question--close-btn"]').click()
  })

  it('Test12: Change Language', function() {
    cy.get('[href="/de/"]').click()
    cy.url().should('include', 'tourradar.com/de/')
    cy.wait(4000)
    cy.get('[href="/nl/"]').click();
    cy.url().should('include', 'tourradar.com/nl/')
    cy.wait(4000)
    cy.get('[href="/"]').click();
    cy.url().should('include', 'tourradar.com')
  })

})
