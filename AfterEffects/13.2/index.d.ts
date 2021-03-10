/// <reference path="../../shared/global.d.ts" />
/// <reference path="../../shared/ScriptUI.d.ts" />
/// <reference path="../13.1/index.d.ts" />

declare interface TextDocument {
  /** True if a text layer has faux bold enabled */
  readonly fauxBold: boolean

  /** True if a text layer has faux italic enabled */
  readonly fauxItalic: boolean

  /** True if a text layer has allcaps enabled */
  readonly allCaps: boolean

  /** True if a text layer has smallcaps enabled */
  readonly smallCaps: boolean

  /** True if a text layer has superscript enabled- */
  readonly superscript: boolean

  /** True if a text layer has subscript enabled- */
  readonly subscript: boolean

  /** This text layer’s vertical scale in pixels. */
  readonly verticalScale: number

  /** This text layer’s horizontal scale in pixels. */
  readonly horizontalScale: number

  /** This text layer’s baseline shift in pixels. */
  readonly baselineShift: number

  /** This text layer’s tsume value. */
  readonly tsume: number

  /** The layer coordinates from a paragraph (box) text layer’s anchor point as a [width, height] array of pixel dimensions. */
  readonly boxTextPos: [number, number]
}

declare interface AVLayer {
  /** Converts composition coordinates, such as sourcePointToComp, to layer coordinates. */
  sourcePointToComp(point: [number, number]): [number, number]

  /** Converts composition coordinates, such as sourcePointToComp, to layer coordinates. */
  compPointToSource(point: [number, number]): [number, number]
}
