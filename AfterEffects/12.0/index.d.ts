/// <reference path="../../shared/global.d.ts" />
/// <reference path="../../shared/ScriptUI.d.ts" />
/// <reference path="../11.0/index.d.ts" />

declare interface _AppVersion {
  CC: 12.0,
}

declare enum FastPreviewType {
  FP_OFF,
  FP_ADAPTIVE_RESOLUTION,
  FP_DRAFT,
  FP_FAST_DRAFT,
  FP_WIREFRAME,
}

declare enum LayerSamplingQuality {
  BICUBIC,
  BILINEAR,
}

declare interface Application {
  /** The effects available in the application. */
  readonly effects: { displayName: string; matchName: string; version: string; category: string }[]
}

declare interface ViewOptions {
  fastPreview: FastPreviewType
}

declare interface AVLayer {
  /** The layer sampling quality setting. */
  samplingQuality: LayerSamplingQuality
}
