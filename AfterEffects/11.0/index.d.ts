/// <reference path="../../shared/global.d.ts" />
/// <reference path="../../shared/ScriptUI.d.ts" />
/// <reference path="../10.5/index.d.ts" />

declare interface _AppVersion {
  CS6: 11.0
}

declare enum ChannelType {
  CHANNEL_RGB,
  CHANNEL_RED,
  CHANNEL_GREEN,
  CHANNEL_BLUE,
  CHANNEL_ALPHA,
  CHANNEL_RED_COLORIZE,
  CHANNEL_GREEN_COLORIZE,
  CHANNEL_BLUE_COLORIZE,
  CHANNEL_RGB_STRAIGHT,
  CHANNEL_ALPHA_OVERLAY,
  CHANNEL_ALPHA_BOUNDARY,
}

declare enum ViewerType {
  VIEWER_COMPOSITION,
  VIEWER_LAYER,
  VIEWER_FOOTAGE,
}

/** The Viewer object represents a Composition, Layer, or Footage panel. */
declare interface Viewer {
  /** The type of content in the viewer. */
  readonly type: ViewerType

  /** When true, the viewer is focused. */
  readonly active: boolean

  activeViewIndex: number

  readonly views: View[]

  /** When true, the viewer is at its maximized size. */
  maximized: boolean

  /** Moves the viewer to front and places focus on it. */
  setActive(): boolean
}

declare interface View {
  readonly active: boolean
  readonly options: ViewOptions

  setActive(): void
}

declare interface ViewOptions {
  channels: ChannelType
  checkerboards: boolean
  exposure: number
  zoom: number
}

declare interface Application {
  /** The currently focused or last-focused viewer panel. */
  readonly activeViewer: Viewer | null
}

declare interface AVLayer {
  /** Opens the layer in a Layer panel. */
  openInViewer(): Viewer | null

  /** When true, this is an environment layer. */
  environmentLayer: boolean
}

declare interface CompItem {
  /** Opens the composition in a Composition panel. */
  openInViewer(): Viewer | null
}

declare interface FootageItem {
  /** Opens the footage in a Footage panel. */
  openInViewer(): Viewer | null
}

declare interface Property<A> {
  /** When true, the expression can be set by a script. */
  readonly canSetExpression: boolean
}

declare interface MaskPropertyGroup {
  /** The feather falloff mode for the mask. */
  maskFeatherFalloff: MaskFeatherFalloff
}

declare interface Shape {
  /** The mask path segment (sections of a mask path between vertices) containing each feather point. */
  featherSegLocs: number[]

  /** The relative position of each feather point on its mask path segment. */
  featherRelSegLocs: number[]

  /** The feather amount (radius) for each feather point. */
  featherRadii: number[]

  /** The feather radius interpolation type for each feather point. */
  featherInterps: number[]

  /** The feather tension at each feather point. */
  featherTensions: number[]

  /** The direction (inner or outer) of each feather point. */
  featherTypes: number[]

  /** The relative angle between the two normals on either side of a curved outer feather boundary at a corner on a mask path. */
  featherRelCornerAngles: number[]
}
