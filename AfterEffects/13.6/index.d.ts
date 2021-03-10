/// <reference path="../../shared/global.d.ts" />
/// <reference path="../../shared/ScriptUI.d.ts" />
/// <reference path="../13.2/index.d.ts" />

declare interface _AppVersion {
  CC2015: 13.5,
  CC2015_1: 13.6,
}

/** Generates random numbers. */
declare var generateRandomNumber: () => number

declare interface TextDocument {
  /** The baseline (x,y) locations for a text layer. */
  readonly baselineLocs: number[]
}
