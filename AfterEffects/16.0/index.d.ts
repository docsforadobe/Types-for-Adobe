/// <reference path="../../shared/global.d.ts" />
/// <reference path="../../shared/ScriptUI.d.ts" />
/// <reference path="../15.0/index.d.ts" />

declare interface _AppVersion {
  CC2019: 16.0,
}

declare interface MarkerValue {
  /** The label color for a composition or layer marker. */
  label: number

  /** State of the Protected Region option in the Composition Marker dialog box. */
  protectedRegion: boolean
}

declare interface Project {
  /** The current project’s working gamma value, either 2.2 or 2.4. */
  workingGamma: 2.2 | 2.4

  /** A string which is the color profile description for the project’s color working space. */
  workingSpace: string

  /** True if Linearize Working Space should be enabled for this project. */
  linearizeWorkingSpace: boolean

  /** True if Compensate for Scene-referred Profiles should be enabled for this project. */
  compensateForSceneReferredProfiles: boolean

  /** The Expressions Engine setting in the Project Settings dialog box. */
  expressionEngine: "extendscript" | "javascript-1.0"

  /** Returns an array of color profile descriptions that can be set as the project’s color working space. */
  listColorProfiles(): string[]

  /** Sets the folder that will be shown in the file import dialog. */
  setDefaultImportFolder(folder: Folder): boolean
}

declare interface Application {
  /** Set to true to disable rendering as if Caps Lock were turned on. */
  disableRendering: boolean
}
