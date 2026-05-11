/// <reference types="vite/client" />

declare module "gsap-trial/SplitText" {
  export class SplitText {
    chars: Element[];
    words: Element[];
    lines: Element[];
    revert: () => void;
    constructor(target: gsap.DOMTarget, vars?: Record<string, unknown>);
  }
}
