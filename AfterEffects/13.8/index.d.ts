/// <reference path="../../shared/global.d.ts" />
/// <reference path="../../shared/ScriptUI.d.ts" />
/// <reference path="../13.6/index.d.ts" />

declare interface _AppVersion {
  CC2015_2: 13.7,
  CC2015_3: 13.8,
}

declare enum GpuAccelType {
  CUDA,
  METAL,
  OPENCL,
  SOFTWARE,
}

declare interface Project {
  /** Get or set the current projects GPU Acceleration option. */
  gpuAccelType: GpuAccelType
}
