import AutPractForm from "../pageObjects/AutPractForm.page";
import Sortable from "../pageObjects/Sortable.page";

describe('Tools QA', () => {
  context("Automation Practice Form scenarios", () => {
    beforeEach(() => {
      AutPractForm.visit();
    });  
      it('1. Forms - Practice forms', () => {
        AutPractForm.firstName.type("test_FirstName");
        AutPractForm.lastName.type("test_lastName");
        AutPractForm.email.type("test_email@tdl.com");
        AutPractForm.gender.click({force: true});
        AutPractForm.number.type("12345678");
        // by setting value
        // AutPractForm.dob.clear(); last number should stay 2 because of blank page bug
        // use loop for deleting 10 times, leave 2 as first number
        // and add 9 Feb 1984 for this case, not sure for the ones 
        // where the date would be 1 or 3
        // AutPractForm.dob.type("{backspace}29 Feb 1984");
        // AutPractForm.dob.should("have.value","29 Feb 1984");
        //by calendar widget
        AutPractForm.dob.click();
        AutPractForm.month.select("February");
        AutPractForm.year.select("1984");
        AutPractForm.date.click();
        AutPractForm.subject.type("Maths{enter}");
        AutPractForm.hobbies.click({force: true});
        AutPractForm.adress.type("Brivibas 75, Riga, 1001");
        // AutPractForm.open.click();
        // AutPractForm.state.click();
        // AutPractForm.validateFirstName.should("contain", "test_firstName");
      });
      it('2. Interactions - Sortable', () => {
        
      });

  });

  
});