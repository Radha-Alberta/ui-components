import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import GoAIcon from './Icon.svelte'

describe("Icon", () => {
  describe("Margins", () => {
    it(`should add the margin`, async () => {
      const baseElement = render(GoAIcon, {
        testid: "icon-test",
        type: "ellipse",
        mt: "s",
        mr: "m",
        mb: "l",
        ml: "xl",
      });
      const icon = await baseElement.findByTestId("icon-test");

      expect(icon).toBeTruthy();
      expect(icon).toHaveStyle("margin-top:var(--goa-space-s)");
      expect(icon).toHaveStyle("margin-right:var(--goa-space-m)");
      expect(icon).toHaveStyle("margin-bottom:var(--goa-space-l)");
      expect(icon).toHaveStyle("margin-left:var(--goa-space-xl)");
      expect(icon.getAttribute("role")).toBe("presentation");
    });
    it(`should change icon's role to be 'img' and add aria-label so the screen reader can read, when aria-label is set`, async () => {
      const baseElement = render(GoAIcon, {
        testid: "icon-test",
        type: "ellipse",
        arialabel: "aria-label-test",
        });
      const icon = await baseElement.findByTestId("icon-test");
      expect(icon).toBeTruthy();
      expect(icon.getAttribute("role")).toBe("img");
      expect(icon.getAttribute("aria-label")).toBe("aria-label-test");
    });
  });
})
