import { fireEvent, render } from "@testing-library/react";

import Calendar from "./calendar";

describe("Calendar", () => {
  it("should render successfully", () => {
    const noop = () => {};
    const { baseElement, container } = render(<Calendar onChange={noop} />);
    expect(baseElement).toBeTruthy();

    const calendar = container.querySelector("goa-calendar");
    expect(calendar).toBeTruthy();
  });

  it("handle the event", () => {
    const onChange = jest.fn();
    const name = "birthdate";
    const { container } = render(<Calendar onChange={onChange} name={name} />);
    const calendar = container.querySelector("goa-calendar");

    const detail = { type: "date", value: new Date(), name };
    fireEvent(calendar, new CustomEvent("_change", { detail }));
    expect(onChange).toBeCalled();
  });
});
