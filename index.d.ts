type Monaco = any;
type Dispose = () => void;

/**
 * emmet for `CSS` / `LESS` / `SCSS`
 * @param monaco monaco self, if not provided, will use window.monaco
 */
export function emmetCSS(monaco?: Monaco): Dispose;

/**
 * emmet for `HTML`
 * @param monaco monaco self, if not provided, will use window.monaco
 */
export function emmetHTML(monaco?: Monaco): Dispose;

/**
 * emmet for `JSX` / `TSX`
 * @param monaco monaco self, if not provided, will use window.monaco
 */
export function emmetJSX(monaco?: Monaco): Dispose;

/**
 * internal api, expand `HTML`
 * @param abbr emmet abbr word
 */
export function expandHTML(abbr: string): string;

/**
 * internal api, expand `CSS` / `LESS` / `SCSS`
 * @param abbr emmet abbr word
 */
export function expandCSS(abbr: string): string;
