class Base {
    static get url() {
      return "";
    }
  
    static visit() {
      cy.visit(this.url, { failOnStatusCode: false });
    }
    
  }
  
  export default Base;
  