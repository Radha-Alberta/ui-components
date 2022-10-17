import "@testing-library/jest-dom";
import { render, cleanup } from "@testing-library/svelte";
import GoAFormItem from "./FormItem.svelte"

afterEach(cleanup);

describe("GoA FormItem", () => {

  it("should render with no params", async () => {
    const result = render(GoAFormItem);
    const el = result.container.querySelector(".goa-form-item");

    const label = el.querySelector(".label");
    expect(label).toBeFalsy();

    const requirement = document.querySelector("em");
    expect(requirement).toBeFalsy();

    const helpText = document.querySelector(".help-msg");
    expect(helpText).toBeFalsy();

    const errMsg = document.querySelector(".error-msg");
    expect(errMsg).toBeFalsy();
  });

  it("should not show optional text for a required (default) field", async () => {
    const result = render(GoAFormItem, {
      label: "Credit Card Number"
    });
    const el = result.container.querySelector(".goa-form-item");

    const label = el.querySelector(".label");
    expect(label).toBeTruthy();

    const requirement = document.querySelector("em");
    expect(requirement).toBeFalsy();

    const helpText = document.querySelector(".help-msg");
    expect(helpText).toBeFalsy();

    const errMsg = document.querySelector(".error-msg");
    expect(errMsg).toBeFalsy();
  });


  it("should show required text for a field when requirement set to required", async () => {
    const result = render(GoAFormItem, {
      label: "Credit Card Number",
      requirement: "required"
    });
    const el = result.container.querySelector(".goa-form-item");

    const label = el.querySelector(".label");
    expect(label).toBeTruthy();

    const requirement = document.querySelector("em");
    expect(requirement).toContain("required");

    const helpText = document.querySelector(".help-msg");
    expect(helpText).toBeFalsy();

    const errMsg = document.querySelector(".error-msg");
    expect(errMsg).toBeFalsy();
  });


  it("should render all params", async () => {
    render(GoAFormItem, {
      label: "the label",
      helptext: "the helptext",
      requirement: "optional",
      error: "the error",
    });

    const label = document.querySelector(".label");
    expect(label.innerHTML).toContain("the label");

    const requirement = document.querySelector("em");
    expect(requirement.innerHTML).toContain("optional");

    const helpText = document.querySelector(".help-msg");
    expect(helpText.innerHTML).toContain("the helptext");

    const errMsg = document.querySelector(".error-msg");
    expect(errMsg.innerHTML).toContain("the error");
  });

  it("should not render options if not provided", async () => {
    render(GoAFormItem, {});

    const label = document.querySelector(".label");
    expect(label).toBeNull();

    const helpText = document.querySelector(".help-msg");
    expect(helpText).toBeNull();

    const errMsg = document.querySelector(".help-msg");
    expect(errMsg).toBeNull();

    const requirement = document.querySelector("em");
    expect(requirement).toBeNull();
  });

});
