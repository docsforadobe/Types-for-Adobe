/// <reference path="../../shared/global.d.ts" />
/// <reference path="../../shared/ScriptUI.d.ts" />
/// <reference path="../12.0/index.d.ts" />

declare interface _AppVersion {
  CC2014: 13.0,
}

declare enum GetSettingsFormat {
  STRING,
  STRING_SETTABLE,
  NUMBER,
  NUMBER_SETTABLE,
  SPEC,
}

declare interface RenderQueueItem {
  getSetting(key: string): string | number

  getSettings(format: GetSettingsFormat): object

  setSetting(key: string, value: string | number): void

  setSettings(settings: object): void
}

declare interface OutputModule {
  getSetting(key: string): string | number

  getSettings(
    format?: GetSettingsFormat,
  ): {
    "Audio Bit Depth": string
    "Audio Channels": string
    "Audio Sample Rate": string
    Channels: string
    Color: string
    Crop: string
    "Crop Bottom": string
    "Crop Left": string
    "Crop Right": string
    "Crop Top": string
    Depth: string
    Format: string
    "Include Project Link": string
    "Include Source XMP Metadata": string
    "Lock Aspect Ratio": string
    "Output Audio": string
    "Output File Info": string
    "Post-Render Action": string
    Resize: string
    "Resize Quality": string
    "Resize to": object
    "Starting #": string
    "Use Comp Frame Number": string
    "Use Region of Interest": string
    "Video Output": string
  }

  setSetting(key: string, value: string | number): void

  setSettings(settings: object): void
}

declare interface Project {
  /** Retrieves an item by its Item ID */
  itemById(id: number): Item
}
