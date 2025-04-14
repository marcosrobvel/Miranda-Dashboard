describe('Redirect to login', () => {

  it("User redirected to /login after trying to get to /", () => {
    cy.visit("http://localhost:5173");

    cy.url().should("include", "http://localhost:5173/login");
  });

})

describe('Login', () => {
  it("User can login with correct credentials", () => {
    cy.visit("http://localhost:5173/login");

    cy.get('[data-testid="username-input"]').type("admin");
    cy.get('[data-testid="password-input"]').type("admin");

    cy.get('[data-testid="loginBtn"]').click();

    cy.url().should("include", "http://localhost:5173/");
  });
})

describe('Login Error', () => {
  it("User cannot login with incorrect credentials", () => {
    cy.visit("http://localhost:5173/login");

    cy.get('[data-testid="username-input"]').type("wronguser");
    cy.get('[data-testid="password-input"]').type("wrongpass");

    cy.get('[data-testid="loginBtn"]').click();

    cy.url().should("include", "http://localhost:5173/login");
  });
})

describe('Logout', () => {
  it("User can logout", () => {
    cy.visit("http://localhost:5173/login");

    cy.get('[data-testid="username-input"]').type("admin");
    cy.get('[data-testid="password-input"]').type("admin");

    cy.get('[data-testid="loginBtn"]').click();

    cy.url().should("include", "http://localhost:5173/");

    cy.get('[data-testid="logout-icon"]').click();

    cy.url().should("include", "http://localhost:5173/login");
  });
})
