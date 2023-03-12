import { ClipboardEvent, MouseEventHandler } from "react";

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

export type DevIconProps = {
  handleDevTools: MouseEventHandler<HTMLDivElement>;
};

export type DevToolsProps = {
  showDevTools: boolean;
  result: Result;
  devToolsRef: React.RefObject<HTMLDivElement>;
};

export type UIProps = {
  result: Result;
  ipRef: React.RefObject<HTMLHeadingElement>;
  handleCopyToClipboard: MouseEventHandler<HTMLDivElement>;
  loading: boolean;
  elapsedTime: number;
  copyCompleted: boolean;
};

export type IPContainer = {
  result: Result;
  ipRef: React.RefObject<HTMLHeadingElement>;
  handleCopyToClipboard: MouseEventHandler<HTMLDivElement>;
  loading: boolean;
  copyCompleted: boolean;
};

export type CtCProps = {
  handleCopyToClipboard: MouseEventHandler<HTMLDivElement>;
  copyCompleted: boolean;
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
