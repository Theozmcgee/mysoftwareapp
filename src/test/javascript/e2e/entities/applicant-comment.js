'use strict';

describe('ApplicantComment e2e test', function () {

    var username = element(by.id('username'));
    var password = element(by.id('password'));
    var entityMenu = element(by.id('entity-menu'));
    var accountMenu = element(by.id('account-menu'));
    var login = element(by.id('login'));
    var logout = element(by.id('logout'));

    beforeAll(function () {
        browser.get('/');

        accountMenu.click();
        login.click();

        username.sendKeys('admin');
        password.sendKeys('admin');
        element(by.css('button[type=submit]')).click();
    });

    it('should load ApplicantComments', function () {
        entityMenu.click();
        element.all(by.css('[ui-sref="applicant-comment"]')).first().click().then(function() {
            expect(element.all(by.css('h2')).first().getText()).toMatch(/Applicant Comments/);
        });
    });

    it('should load create ApplicantComment dialog', function () {
        element(by.css('[ui-sref="applicant-comment.new"]')).click().then(function() {
            expect(element(by.css('h4.modal-title')).getText()).toMatch(/Create or edit a Applicant Comment/);
            element(by.css('button.close')).click();
        });
    });

    afterAll(function () {
        accountMenu.click();
        logout.click();
    });
});
