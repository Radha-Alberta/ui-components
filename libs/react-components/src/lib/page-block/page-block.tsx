import { ReactNode } from "react";

export interface WCPageBlockProps {
  width: "full" | string;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "goa-page-block": WCPageBlockProps & React.HTMLAttributes<HTMLElement>;
    }
  }
}

export interface GoAPageBlockProps {
  width: "full" | string;
  testId?: string;
  children?: ReactNode;
}

// legacy name
export type PageBlockProps = GoAPageBlockProps;

export function GoAPageBlock(props: PageBlockProps): JSX.Element {
  return (
    <goa-page-block width={props.width} data-testid={props.testId}>
      {props.children}
    </goa-page-block>
  );
};
