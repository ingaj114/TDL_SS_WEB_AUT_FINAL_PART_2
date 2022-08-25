import Base from "./BasePage.page";

class AutPractForm extends Base {
    static get url() {
        return "/automation-practice-form";
    }

    static get firstName() {
        return cy.get("#firstName");
    }
    
    static get lastName() {
        return cy.get("[placeholder='Last Name']");
    }

    static get email() {
        return cy.get("[placeholder='name@example.com']");
    }

    static get gender() {
        return cy.get("#gender-radio-2");
    }

    static get number() {
        return cy.get("#userNumber");
    }

    static get dob() {
        return cy.get("#dateOfBirthInput");
    }

    static get month() {
        return cy.get(".react-datepicker__month-select");
    }

    static get year() {
        return cy.get(".react-datepicker__year-select");
    }

    static get date() {
        return cy.get("[aria-label='Choose Wednesday, February 29th, 1984']")
    }

    static get subject() {
        return cy.get(".subjects-auto-complete__control.css-yk16xz-control")
    }

    static get hobbies() {
        return cy.get("#hobbies-checkbox-1");
    }

    static get adress() {
        return cy.get("#currentAddress");
    }
    
    static get open() {
        return cy.get("#state");
    }
    static get state() {
        return cy.get(".css-1wa3eu0-placeholder");
    }

    static get validateFirstName() {
        return cy.get("[placeholder='First Name']");
    }

}

export default AutPractForm;