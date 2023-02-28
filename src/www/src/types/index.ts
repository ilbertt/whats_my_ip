export type APIResponse = {
  [key: string]: string;
};

export type Result = {
  res: APIResponse | null;
  ip: string | null;
  latency: number | null;
};

export type LordIconTrigger =
  | "hover"
  | "click"
  | "loop"
  | "loop-on-hover"
  | "morph"
  | "morph-two-way";

export type LordIconProps = {
  src?: string;
  trigger?: LordIconTrigger;
  delay?: number;
  size?: number;
};

export type DevToolsProps = {
  showDevTools: boolean;
  result: Result;
  devToolsRef: React.RefObject<HTMLDivElement>;
};
export type GenericProps = {
  result: Result;
};

export type LordIconElement = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> &
  LordIconProps;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "lord-icon": LordIconElement;
    }
  }
}
