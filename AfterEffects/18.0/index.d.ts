/// <reference path="../../shared/global.d.ts" />
/// <reference path="../../shared/ScriptUI.d.ts" />
/// <reference path="../17.1/index.d.ts" />

declare interface Property<A> {
  /** The alternate render source for Media Replacement */
  readonly alternateSource: AVItem

  /** True if the property allows Media Replacement */
  readonly canSetAlternateSource: boolean

  /** Set the alternate source for this property. */
  setAlternateSource(newSource: AVItem): void
}

declare interface AVItem {
  /** True if the AVItem can be used as an alternate source when calling Property.setAlternateSource */
  readonly isMediaReplacementCompatible: boolean
}

declare interface AVLayer {
  /** Adds the layer to the Essential Graphics Panel for the specified composition. */
  addToMotionGraphicsTemplate(comp: CompItem): boolean

  /** Adds the layer to the Essential Graphics Panel for the specified composition. */
  addToMotionGraphicsTemplateAs(comp: CompItem, name: string): boolean

  /** True if the layer can be added to the EGP for the specified composition */
  canAddToMotionGraphicsTemplate(comp: CompItem): boolean
}
