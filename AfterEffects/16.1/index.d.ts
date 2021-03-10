/// <reference path="../../shared/global.d.ts" />
/// <reference path="../../shared/ScriptUI.d.ts" />
/// <reference path="../16.0/index.d.ts" />

declare interface Viewer {
  /** When true, indicates guides are locked in the viewer. */
  guidesLocked: boolean

  /** When true, indicates layers snap to guides when dragged in the viewer. */
  guidesSnap: boolean

  /** When true, indicates guides are visible in the viewer. */
  guidesVisibility: boolean

  /** When true, indicates rulers are shown in the viewer. */
  rulers: boolean
}

declare interface Item {
  /** Creates a new guide and adds it to the guides object of the Item. */
  addGuide(
    orientationType: number,
    position: number
  ): number

  /** Removes an existing guide. */
  removeGuide(
    guideIndex: number
  ): void

  /** Modifies the position of an existing guide. */
  setGuide(
    position: number,
    guideIndex: number
  ): void
}

declare interface CompItem {
  /** The number of properties in the Essential Graphics panel for the composition. */
  readonly motionGraphicsTemplateControllerCount: number

  /** Gets the name of a single property in the Essential Graphics panel. */
  getMotionGraphicsTemplateControllerName(
    index: number
  ): string

  /** Sets the name of a single property in the Essential Graphics panel. */
  setMotionGraphicsControllerName(
    index: number,
    newName: string,
  ): string
}

declare interface Property<A> {
  /** Adds the property to the Essential Graphics panel for the specified composition, providing a name. */
  addToMotionGraphicsTemplateAs(comp: CompItem, name: string): boolean
}
