/// <reference path="../../shared/global.d.ts" />
/// <reference path="../../shared/ScriptUI.d.ts" />
/// <reference path="../14.2/index.d.ts" />

declare interface _AppVersion {
  CC2018: 15.0,
}

declare interface Property<A> {
  /** Adds the property to the Essential Graphics panel for the specified composition. */
  addToMotionGraphicsTemplate(comp: CompItem): boolean

  /** Test whether or not the property can be added to the Essential Graphics panel for the specified composition. */
  canAddToMotionGraphicsTemplate(comp: CompItem): boolean
}

declare interface CompItem {
    /** Read or write the name property in the Essential Graphics panel for the composition. */
    motionGraphicsTemplateName: string

  /** Exports the composition as a Motion Graphics template. */
  exportAsMotionGraphicsTemplate(
    doOverWriteFileIfExisting: boolean,
    file_path?: string
  ): boolean

  /** Opens the composition in the Essential Graphics panel. */
  openInEssentialGraphics(): void
}
