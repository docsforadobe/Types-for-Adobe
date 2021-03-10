/// <reference path="../../shared/global.d.ts" />
/// <reference path="../../shared/ScriptUI.d.ts" />
/// <reference path="../9.0/index.d.ts" />

declare interface _AppVersion {
  CS5: 10.0,
  CS5_5: 10.5,
}

declare enum FramesCountType {
  FC_START_0,
  FC_START_1,
  FC_TIMECODE_CONVERSION,
}

declare enum FeetFramesFilmType {
  MM16,
  MM35,
}

declare enum FootageTimecodeDisplayStartType {
  FTCS_START_0,
  FTCS_USE_SOURCE_MEDIA,
}

declare enum TimeDisplayType {
  FRAMES,
  TIMECODE,
}

declare enum LightType {
  PARALLEL,
  SPOT,
  POINT,
  AMBIENT,
}

declare interface Project {
  /** The Frame Count menu setting in the Project Settings dialog box. */
  framesCountType: FramesCountType

  /** The Use Feet + Frames menu setting in the Project Settings dialog box. */
  feetFramesFilmType: FeetFramesFilmType

  /** The Use Feet + Frames setting in the Project Settings dialog box. */
  framesUseFeetFrames: boolean

  /** The Footage Start Time setting in the Project Settings dialog box, which is enabled when Timecode is selected as the time display style. */
  footageTimecodeDisplayStartType: FootageTimecodeDisplayStartType

  /** The time display style, corresponding to the Time Display Style section in the Project Settings dialog box. */
  timeDisplayType: TimeDisplayType
}

declare interface CompItem {
  /** When true, indicates that the composition uses drop-frame timecode. */
  dropFrame: boolean
}

declare interface LayerCollection {
  /** Creates a new paragraph (box) text layer and adds it to this collection. */
  addBoxText(size: [number, number], sourceText?: string | TextDocument): TextLayer
}

declare interface TextDocument {
  /** When true, the text layer is point (unbounded) text. */
  readonly pointText: boolean

  /** When true, the text layer is paragraph (bounded) text. */
  readonly boxText: boolean

  /** For box text, the pixel dimensions for the text bounds. */
  boxTextSize: [number, number]
}

declare interface LightLayer {
  /** For light layers, the type of light. */
  lightType: LightType
}
