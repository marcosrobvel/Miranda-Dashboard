describe('Redirect to login', () => {

  it("User redirected to /login after trying to get to /", () => {
    cy.visit("http://localhost:5173");

    cy.url().should("include", "http://localhost:5173/login");
  });

})

describe('Login', () => {
  it("User can login with correct credentials", () => {
    cy.visit("http://localhost:5173/login");

    cy.get('input[placeholder="Username"]').type("admin");
    cy.get('input[placeholder="Password"]').type("admin");

    cy.get('button[type="submit"]').click();

    cy.url().should("include", "http://localhost:5173/");
  });
})

describe('Login Error', () => {
  it("User cannot login with incorrect credentials", () => {
    cy.visit("http://localhost:5173/login");

    cy.get('input[placeholder="Username"]').type("wronguser");
    cy.get('input[placeholder="Password"]').type("wrongpass");

    cy.get('button[type="submit"]').click();

    cy.url().should("include", "http://localhost:5173/login");
  });
})

describe('Logout', () => {
  it("User can logout", () => {
    cy.visit("http://localhost:5173/login");

    cy.get('input[placeholder="Username"]').type("admin");
    cy.get('input[placeholder="Password"]').type("admin");

    cy.get('button[type="submit"]').click();

    cy.url().should("include", "http://localhost:5173/");

    cy.get('[data-testid="logout-icon"]').click();

    cy.url().should("include", "http://localhost:5173/login");
  });
})