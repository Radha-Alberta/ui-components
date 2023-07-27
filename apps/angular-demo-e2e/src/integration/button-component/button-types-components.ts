import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import properties from "../../fixtures/properties.json";

Given(/^cs I am a user of GOA application$/, function () {
  cy.visit("http://localhost:4200/button");
});

When(/^cs Navigating to Button Type primary component$/, function () {
  cy.get('[data-testid*="primarySubmit"]').click({ force: true });
});

Then(
  /^cs I should be able to validate primary button css property$/,
  function () {

    //Accordion
    // cy.get('[data-testid*="primaryAccordion"]').click({ force: true })
    //   .contains("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi")
    // cy.get('[data-testid*="primaryAccordion"]').invoke('attr', 'open', 'open');
    // cy.get('[data-testid*="primaryAccordion"]').should('have.attr', 'open', 'open');


    //Badge
    // cy.get('[data-testid*="primaryBadge"]').should('have.attr', 'content', 'Information');
    // cy.get('[data-testid*="primaryBadge"]').should('have.attr', 'type', 'information');

    //Button
    // cy.get('[data-testid*="primarySubmit"]').contains("Primary Submit").click({ force: true })
    // cy.get('[data-testid*="primarySubmit"]').contains("Primary Submit")
    // .shadow().find("button.submit").should("have.css", "border");

    // cy.get('[data-testid*="primarySubmit"]').find("button.submit")
    // .should("have.css","border-radius",remToPx(properties["border-radius"]));


    //CheckBox
    // cy.get('[data-testid*="primaryCheckBox"]').invoke('attr', 'checked', true);
    // cy.get('[data-testid*="primaryCheckBox"]').should('have.attr', 'checked', true);


    //Chip - ALERT ! ! ! should not use shadow to find 'x' element on the chip ==============================
    // cy.get('[data-testid*="primaryChip"]').click({ force: true });

    //Circular Progress
    // cy.get('[data-testid*="primaryProgress"]').invoke('attr', 'visible', 'false');
    // cy.get('[data-testid*="primaryProgress"]').should('have.attr', 'visible', 'false');

    //Dropdown
    // cy.get('[data-testid*="primaryDropdown"]').invoke('attr', 'value', 'red');
    // cy.get('[data-testid*="primaryDropdown"]').should('have.attr', 'value', 'red');

    // Input
    // cy.get('[data-testid*="primaryInput"]').invoke('attr', 'value', 'Hello, Cypress!');
    // cy.get('[data-testid*="primaryInput"]').should('have.attr', 'value', 'Hello, Cypress!');


  }
);

Then(
  /^cs I should be able to validate secondary button css property$/,
  function () {
    cy.get('goa-button[type="secondary"]')
      .find("button.secondary")
      .should("have.css", "border");
    cy.get('goa-button[type="secondary"]')
      .find("button.secondary")
      .should(
        "have.css",
        "border-radius",
        remToPx(properties["border-radius"])
      );
    cy.get('goa-button[type="secondary"]')
      .find("button.secondary")
      .should("have.css", "font-family", properties["font-family"]);
    cy.get('goa-button[type="secondary"]')
      .find("button.secondary")
      .should(
        "have.css",
        "color",
        hexToRgb(properties["goa-color-interactive"])
      );
    cy.get('goa-button[type="secondary"]')
      .find("button.secondary")
      .eq(0)
      .rightclick({ force: true })
      .should(
        "have.css",
        "border-color",
        hexToRgb(properties["goa-color-interactivehover"])
      );
    // cy.get('goa-button[type="secondary"]').find('button.secondary').eq(0).click({ force: true }).should("have.css", "box-shadow", hexToRgb(properties["goa-color-interactivefocus"]));
    cy.get('goa-button[type="secondary"]')
      .find("button.secondary")
      .should("have.css", "font-size", remToPx(properties["fs-lg"]));
  }
);

Then(
  /^cs I should be able to validate Tertiary button css property$/,
  function () {
    cy.get('goa-button[type="tertiary"]')
      .find("button.tertiary")
      .should("have.css", "border");
    cy.get('goa-button[type="tertiary"]')
      .find("button.tertiary")
      .should(
        "have.css",
        "border-radius",
        remToPx(properties["border-radius"])
      );
    cy.get('goa-button[type="tertiary"]')
      .find("button.tertiary")
      .should("have.css", "font-family", properties["font-family"]);
    cy.get('goa-button[type="tertiary"]')
      .find("button.tertiary")
      .should(
        "have.css",
        "color",
        hexToRgb(properties["goa-color-interactive"])
      );
    cy.get('goa-button[type="tertiary"]')
      .find("button.tertiary")
      .eq(0)
      .rightclick({ force: true })
      .should(
        "have.css",
        "border-color",
        hexToRgb(properties["color-gray-100"])
      );
    // cy.get('goa-button[type="tertiary"]').find('button.tertiary').eq(0).click({ force: true }).should("have.css", "box-shadow", hexToRgb(properties["goa-color-interactivefocus"]));
    cy.get('goa-button[type="tertiary"]')
      .find("button.tertiary")
      .should("have.css", "font-size", remToPx(properties["fs-lg"]));
  }
);

Then(
  /^cs I should be able to validate Getting started button css property$/,
  function () {
    cy.get('goa-button[type="start"]')
      .find("start.trailing")
      .should("have.css", "border");
    cy.get('goa-button[type="start"]')
      .find("start.trailing")
      .should(
        "have.css",
        "border-radius",
        remToPx(properties["border-radius"])
      );
    cy.get('goa-button[type="start"]')
      .find("start.trailing")
      .should("have.css", "font-family", properties["font-family"]);
    cy.get('goa-button[type="start"]')
      .find("start.trailing")
      .should(
        "have.css",
        "color",
        hexToRgb(properties["goa-color-interactive"])
      );
    cy.get('goa-button[type="start"]')
      .find("start.trailing")
      .eq(0)
      .rightclick({ force: true })
      .should(
        "have.css",
        "border-color",
        hexToRgb(properties["goa-color-interactivehover"])
      );
    // cy.get('goa-button[type="start"]').find('start.trailing').eq(0).click({ force: true }).should("have.css", "box-shadow", hexToRgb(properties["goa-color-interactivefocus"]));
    cy.get('goa-button[type="start"]')
      .find("start.trailing")
      .should("have.css", "font-size", remToPx(properties["fs-lg"]));
  }
);

function remToPx(rem) {
  return rem.replace("rem", "") * 16 + "px";
}

//function to convery hex to rgb
// return rgb(r, g, b)
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? "rgb(" +
    parseInt(result[1], 16) +
    ", " +
    parseInt(result[2], 16) +
    ", " +
    parseInt(result[3], 16) +
    ")"
    : null;
}
