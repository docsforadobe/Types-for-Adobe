/// <reference path="../../shared/global.d.ts" />
/// <reference path="../../shared/ScriptUI.d.ts" />
/// <reference path="../13.0/index.d.ts" />

declare interface TextDocument {
  /** Path of font file, providing its location on disk (not guaranteed to be returned for all font types; return value may be empty string for some kinds of fonts) */
  readonly fontLocation: string

  /** Style information — e.g., “bold”, “italic” */
  readonly fontStyle: string

  /** The name of the font family */
  readonly fontFamily: string
}
