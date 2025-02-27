export type Spacing =
  | "none"
  | "3xs"
  | "2xs"
  | "xs"
  | "s"
  | "m"
  | "l"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9";

const conversions = {
  "0": "none",
  "1": "3xs",
  "2": "2xs",
  "3": "xs",
  "4": "s",
  "5": "m",
  "6": "l",
  "7": "xl",
  "8": "2xl",
  "9": "3xl",
  "10": "4xl",
};

/**
 * Allow for 0-10 values to be used along side the existing Spacing values
 */
function convertSpacing(size: Spacing): Spacing {
  if (!Number.isInteger(+size)) {
    return size;
  }
  return conversions[size] || "";
}

/**
 * import type { Spacing } from "../../common/types";
 * import { calculateMargin } from "../../common/types";
 *
 * export let mt: Spacing = null;
 * export let mr: Spacing = null;
 * export let mb: Spacing = null;
 * export let ml: Spacing = null;
 *
 * // add the following style attribute to the root element
 * style={calculateMargin(mt, mr, mb, ml)}
 */
export function calculateMargin(
  mt: Spacing,
  mr: Spacing,
  mb: Spacing,
  ml: Spacing,
) {
  mt = convertSpacing(mt);
  mb = convertSpacing(mb);
  ml = convertSpacing(ml);
  mr = convertSpacing(mr);
  return [
    mt && `margin-top:var(--goa-space-${mt});`,
    mr && `margin-right:var(--goa-space-${mr});`,
    mb && `margin-bottom:var(--goa-space-${mb});`,
    ml && `margin-left:var(--goa-space-${ml});`,
  ].join(" ");
}

/**
 * This allows for :host styles that are dependent on component variables.
 * The injectCss function also allow for dynamic styling to be added where, within the component template, there
 * is nothing that matches the selector, resulting in the selector being removed on compile.
 *
 * <script>
 *   let el: HTMLElement;
 *   onMount(() => injectCss(el, "span", { color: "red" }))
 * </script>
 * <div bind:this={el}>
 *   <span>Foobar</span>
 * </div
 *
 */
export function injectCss(
  el: HTMLElement,
  rootSelector: string,
  css: Record<string, string | number>,
  media?: string,
) {
  if (!el) return;
  const style = document.createElement("style");
  const _css = Object.entries(css)
    .map((entry) => `${entry[0]}: ${entry[1]};`)
    .join(" ");
  if (media) {
    style.innerHTML = `@media (${media}) { ${rootSelector} {${_css}} }`;
  } else {
    style.innerHTML = `${rootSelector} {${_css}}`;
  }
  el.appendChild(style);
}
