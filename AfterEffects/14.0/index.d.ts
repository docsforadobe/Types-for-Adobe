/// <reference path="../../shared/global.d.ts" />
/// <reference path="../../shared/ScriptUI.d.ts" />
/// <reference path="../13.8/index.d.ts" />

declare interface _AppVersion {
  CC2017: 14.0,
}

declare enum ToolType {
  Tool_Arrow,
  Tool_Rotate,
  Tool_CameraMaya,
  Tool_CameraOrbit,
  Tool_CameraTrackXY,
  Tool_CameraTrackZ,
  Tool_Paintbrush,
  Tool_CloneStamp,
  Tool_Eraser,
  Tool_Hand,
  Tool_Magnify,
  Tool_PanBehind,
  Tool_Rect,
  Tool_RoundedRect,
  Tool_Oval,
  Tool_Polygon,
  Tool_Star,
  Tool_TextH,
  Tool_TextV,
  Tool_Pen,
  Tool_Feather,
  Tool_PenPlus,
  Tool_PenMinus,
  Tool_PenConvert,
  Tool_Pin,
  Tool_PinStarch,
  Tool_PinDepth,
  Tool_Quickselect,
  Tool_Hairbrush,
}

declare interface Project {
  /** The active tool in the Tools panel. */
  toolType: ToolType
}

declare interface CompItem {
  /** The markers of the composition. */
  readonly markerProperty: Property<MarkerValue>
}

declare interface RenderQueue {
  /** Calls the Queue In AME command */
  queueInAME(render_immediately_in_AME: boolean): void
}

declare interface Application {
  /** The Viewer object for the currently focused or active-focused viewer panel. */
  availableGPUAccelTypes: GpuAccelType
}
