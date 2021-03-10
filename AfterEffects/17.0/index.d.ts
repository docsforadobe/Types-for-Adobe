/// <reference path="../../shared/global.d.ts" />
/// <reference path="../../shared/ScriptUI.d.ts" />
/// <reference path="../16.1/index.d.ts" />

declare interface _AppVersion {
  CC2020: 17.0,
}

declare interface Property<A> {
  /** When true, the property is the Menu property of a Dropdown Menu Control effect. */
  readonly isDropdownEffect: boolean

  /** Sets parameters for a Dropdown Menu Control’s Menu Property. */
  setPropertyParameters(
    items: string[],
  ): void
}
