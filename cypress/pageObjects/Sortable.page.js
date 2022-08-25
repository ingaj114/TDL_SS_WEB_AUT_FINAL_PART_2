import Base from "./BasePage.page";

class Sortable extends Base {
    static get url() {
        return "/sortable";
    }

    static get table() {
        return cy.get("#demo-tabpane-list");
    }
    
    

}

export default Sortable;