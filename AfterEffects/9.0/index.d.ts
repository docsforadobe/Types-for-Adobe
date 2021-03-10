/// <reference path="../../shared/global.d.ts" />
/// <reference path="../../shared/ScriptUI.d.ts" />
/// <reference path="../8.0/index.d.ts" />

declare interface _AppVersion {
  CS4: 9.0,
}

declare enum ParagraphJustification {
  LEFT_JUSTIFY,
  CENTER_JUSTIFY,
  RIGHT_JUSTIFY,
  FULL_JUSTIFY_LASTLINE_LEFT,
  FULL_JUSTIFY_LASTLINE_RIGHT,
  FULL_JUSTIFY_LASTLINE_CENTER,
  FULL_JUSTIFY_LASTLINE_FULL,
  MULTIPLE_JUSTIFICATIONS,
}

declare interface Application {
  /** The locale (language and region) in which the application is running. */
  readonly isoLanguage: string
}

declare interface MarkerValue {
  /** The amount of time represented by the marker. */
  duration: number
}

declare interface OutputModule {
  /** When true, writes all source footage XMP metadata to the output file. */
  includeSourceXMP: boolean
}

declare interface Project {
  /** The project’s XMP metadata. */
  xmpPacket: string
}

declare interface Property<A> {
  /** When true, the property’s dimensions are represented as separate properties. */
  dimensionsSeparated: boolean

  /** When true, the property represents one of the separated dimensions for a multidimensional property. */
  readonly isSeparationFollower: boolean

  /** When true, the property is multidimensional and can be separated. */
  readonly isSeparationLeader: boolean

  /** For a separated follower, the dimension it represents in the multidimensional leader. */
  readonly separationDimension: number

  /** The original multidimensional property for this separated follower. */
  readonly separationLeader: Property<A>

  /** For a separated, multidimensional property, retrieves a specific follower property. */
  getSeparationFollower(dim: number): Property<number>
}

declare interface TextDocument {
  /** When true, the text layer shows a fill. */
  applyFill: boolean

  /** When true, the text layer shows a stroke. */
  applyStroke: boolean

  /** The text layer’s fill color. */
  fillColor: [number, number, number]

  /** The text layer’s font specified by its PostScript name. */
  font: string

  /** The text layer’s font size in pixels. */
  fontSize: number

  /** The paragraph justification for the text layer. */
  justification: ParagraphJustification

  /** The text layer’s stroke color. */
  strokeColor: [number, number, number]

  /** Indicates the rendering order for the fill and stroke of a text layer. */
  strokeOverFill: boolean

  /** The text layer’s stroke thickness. */
  strokeWidth: number

  /** The text layer’s spacing between characters. */
  tracking: number

  /** Restores the default character settings in the Character panel. */
  resetCharStyle(): void

  /** Restores the default paragraph settings in the Paragraph panel. */
  resetParagraphStyle(): void
}
