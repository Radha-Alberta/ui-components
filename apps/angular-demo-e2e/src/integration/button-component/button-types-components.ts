import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import properties from "../../fixtures/properties.json";
import { remToPx, hexToRgb } from '../../support/utils'

Given(/^cs I am a user of GOA application$/, function () {
  cy.visit("http://localhost:4200/");
});

When(/^cs Navigating to Button Type primary component$/, function () {
  cy.get("[label='Button']").click();
});

Then(/^cs I should be able to validate primary button css property$/, function () {
  cy.get('goa-button[type="primary"]').find('button.primary').should("have.css", "border");
  cy.get('goa-button[type="primary"]').find('button.primary').should("have.css", "border-radius", remToPx(properties["border-radius"]));
  cy.get('goa-button[type="primary"]').find('button.primary').should("have.css", "background-color", hexToRgb(properties["goa-color-interactive"]));
  cy.get('goa-button[type="primary"]').find('button.primary').eq(0).rightclick({ force: true }).should("have.css", "border-color", hexToRgb(properties["goa-color-interactiveactive"]));
  // cy.get('goa-button[type="primary"]').find('button.primary').eq(0).click({ force: true }).should("have.css", "box-shadow", "0 0 0 3px " + hexToRgb(properties["goa-color-interactivefocus"]));
  cy.get('goa-button[type="primary"]').find('button.primary').should("have.css", "font-family", properties["font-family"]);
  cy.get('goa-button[type="primary"]').find('button.primary').should("have.css", "color", hexToRgb(properties["goa-color-text-light"]));
  cy.get('goa-button[type="primary"]').find('button.primary').should("have.css", "font-size", remToPx(properties["fs-lg"]));
});

Then(/^cs I should be able to validate secondary button css property$/, function () {
  cy.get('goa-button[type="secondary"]').find('button.secondary').should("have.css", "border");
  cy.get('goa-button[type="secondary"]').find('button.secondary').should("have.css", "border-radius", remToPx(properties["border-radius"]));
  cy.get('goa-button[type="secondary"]').find('button.secondary').should("have.css", "font-family", properties["font-family"]);
  cy.get('goa-button[type="secondary"]').find('button.secondary').should("have.css", "color", hexToRgb(properties["goa-color-interactive"]));
  cy.get('goa-button[type="secondary"]').find('button.secondary').eq(0).rightclick({ force: true }).should("have.css", "border-color", hexToRgb(properties["goa-color-interactivehover"]));
  // cy.get('goa-button[type="secondary"]').find('button.secondary').eq(0).click({ force: true }).should("have.css", "box-shadow", hexToRgb(properties["goa-color-interactivefocus"]));
  cy.get('goa-button[type="secondary"]').find('button.secondary').should("have.css", "font-size", remToPx(properties["fs-lg"]));
});

Then(/^cs I should be able to validate Tertiary button css property$/, function () {
  cy.get('goa-button[type="tertiary"]').find('button.tertiary').should("have.css", "border");
  cy.get('goa-button[type="tertiary"]').find('button.tertiary').should("have.css", "border-radius", remToPx(properties["border-radius"]));
  cy.get('goa-button[type="tertiary"]').find('button.tertiary').should("have.css", "font-family", properties["font-family"]);
  cy.get('goa-button[type="tertiary"]').find('button.tertiary').should("have.css", "color", hexToRgb(properties["goa-color-interactive"]));
  cy.get('goa-button[type="tertiary"]').find('button.tertiary').eq(0).rightclick({ force: true }).should("have.css", "border-color", hexToRgb(properties["color-gray-100"]));
  // cy.get('goa-button[type="tertiary"]').find('button.tertiary').eq(0).click({ force: true }).should("have.css", "box-shadow", hexToRgb(properties["goa-color-interactivefocus"]));
  cy.get('goa-button[type="tertiary"]').find('button.tertiary').should("have.css", "font-size", remToPx(properties["fs-lg"]));
});

Then(/^cs I should be able to validate Getting started button css property$/, function () {
  cy.get('goa-button[type="start"]').find('start.trailing').should("have.css", "border");
  cy.get('goa-button[type="start"]').find('start.trailing').should("have.css", "border-radius", remToPx(properties["border-radius"]));
  cy.get('goa-button[type="start"]').find('start.trailing').should("have.css", "font-family", properties["font-family"]);
  cy.get('goa-button[type="start"]').find('start.trailing').should("have.css", "color", hexToRgb(properties["goa-color-interactive"]));
  cy.get('goa-button[type="start"]').find('start.trailing').eq(0).rightclick({ force: true }).should("have.css", "border-color", hexToRgb(properties["goa-color-interactivehover"]));
  // cy.get('goa-button[type="start"]').find('start.trailing').eq(0).click({ force: true }).should("have.css", "box-shadow", hexToRgb(properties["goa-color-interactivefocus"]));
  cy.get('goa-button[type="start"]').find('start.trailing').should("have.css", "font-size", remToPx(properties["fs-lg"]));
});