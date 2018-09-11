/// <reference path="../../shared/global.d.ts" />
/// <reference path="../../shared/ScriptUI.d.ts" />

/**
 *
 */
declare class Sequence {
  /**
   *
   */
  readonly audioTracks: TrackCollection

  /**
   *
   */
  readonly end: string

  /**
   *
   */
  readonly frameSizeHorizontal: number

  /**
   *
   */
  readonly frameSizeVertical: number

  /**
   *
   */
  readonly id: number

  /**
   *
   */
  readonly markers: MarkerCollection

  /**
   *
   */
  name: string

  /**
   *
   */
  readonly projectItem: ProjectItem

  /**
   *
   */
  readonly sequenceID: string

  /**
   *
   */
  readonly timebase: string

  /**
   *
   */
  readonly videoTracks: TrackCollection

  /**
   *
   */
  readonly zeroPoint: string

  /**
   *
   */
  attachCustomProperty(propertyID: string, propertyValue: string): void

  /**
   *
   */
  bind(eventName: string, function_: any): void

  /**
   *
   */
  clone(): void

  /**
   *
   */
  exportAsFinalCutProXML(exportPath: string, suppressUI: number): boolean

  /**
   *
   */
  exportAsMediaDirect(outputFilePath: string, presetPath: string, workAreaType?: number): string

  /**
   *
   */
  exportAsProject(exportPath: string): void

  /**
   *
   */
  getExportFileExtension(presetFilePath: string): string

  /**
   *
   */
  getInPoint(): string

  /**
   *
   */
  getOutPoint(): string

  /**
   *
   */
  getPlayerPosition(): Time

  /**
   *
   */
  setInPoint(seconds: number): void

  /**
   *
   */
  setOutPoint(seconds: number): void

  /**
   *
   */
  setPlayerPosition(pos: string): void

  /**
   *
   */
  setTimeout(eventName: string, function_: any, milliseconds: number): void

  /**
   *
   */
  setZeroPoint(ticks: string): void

  /**
   *
   */
  unbind(eventName: string): void
}

/**
 *
 */
declare class SequenceCollection {
  /**
   *
   */
  readonly numSequences: number

  /**
   *
   */
  bind(eventName: string, function_: any): void

  /**
   *
   */
  setTimeout(eventName: string, function_: any, milliseconds: number): void

  /**
   *
   */
  unbind(eventName: string): void
}

/**
 *
 */
declare class Metadata {
  /**
   *
   */
  readonly getMetadata: string

  /**
   *
   */
  addMarker(): void

  /**
   *
   */
  bind(eventName: string, function_: any): void

  /**
   *
   */
  deleteMarker(): void

  /**
   *
   */
  setMarkerData(): void

  /**
   *
   */
  setMetadataValue(): void

  /**
   *
   */
  setTimeout(eventName: string, function_: any, milliseconds: number): void

  /**
   *
   */
  unbind(eventName: string): void

  /**
   *
   */
  updateMarker(): void
}

/**
 *
 */
declare class Anywhere {
  /**
   *
   */
  bind(eventName: string, function_: any): void

  /**
   *
   */
  getAuthenticationToken(): string

  /**
   *
   */
  getCurrentEditingSessionActiveSequenceURL(): string

  /**
   *
   */
  getCurrentEditingSessionSelectionURL(): string

  /**
   *
   */
  getCurrentEditingSessionURL(): string

  /**
   *
   */
  isProductionOpen(): boolean

  /**
   *
   */
  listProductions(): RemoteProductionCollection

  /**
   *
   */
  openProduction(inProductionURL: string): boolean

  /**
   *
   */
  setAuthenticationToken(inAuthToken: string, inEmail: string): boolean

  /**
   *
   */
  setTimeout(eventName: string, function_: any, milliseconds: number): void

  /**
   *
   */
  unbind(eventName: string): void
}

/**
 *
 */
declare class CsxsResourceCentral {
  /**
   *
   */
  bind(eventName: string, function_: any): void

  /**
   *
   */
  getBrightness(): string

  /**
   *
   */
  openURL(urlString: string): void

  /**
   *
   */
  setTimeout(eventName: string, function_: any, milliseconds: number): void

  /**
   *
   */
  unbind(eventName: string): void

  /**
   *
   */
  validateClient(token: string): boolean
}

/**
 *
 */
declare class SourceMonitor {
  /**
   *
   */
  bind(eventName: string, function_: any): void

  /**
   *
   */
  closeAllClips(): void

  /**
   *
   */
  closeClip(): void

  /**
   *
   */
  openFilePath(filePath: string): boolean

  /**
   *
   */
  play(speed?: number): void

  /**
   *
   */
  setTimeout(eventName: string, function_: any, milliseconds: number): void

  /**
   *
   */
  unbind(eventName: string): void
}

/**
 *
 */
declare class Time {
  /**
   *
   */
  seconds: number

  /**
   *
   */
  ticks: string

  /**
   *
   */
  bind(eventName: string, function_: any): void

  /**
   *
   */
  setTimeout(eventName: string, function_: any, milliseconds: number): void

  /**
   *
   */
  unbind(eventName: string): void
}

/**
 *
 */
declare class ProjectItemType {
  /**
   *
   */
  readonly BIN: number

  /**
   *
   */
  readonly CLIP: number

  /**
   *
   */
  readonly FILE: number

  /**
   *
   */
  readonly ROOT: number

  /**
   *
   */
  bind(eventName: string, function_: any): void

  /**
   *
   */
  setTimeout(eventName: string, function_: any, milliseconds: number): void

  /**
   *
   */
  unbind(eventName: string): void
}

/**
 *
 */
declare class Project {
  /**
   *
   */
  activeSequence: Sequence

  /**
   *
   */
  readonly documentID: string

  /**
   *
   */
  readonly name: string

  /**
   *
   */
  readonly path: string

  /**
   *
   */
  readonly rootItem: ProjectItem

  /**
   *
   */
  readonly sequences: SequenceCollection

  /**
   *
   */
  addPropertyToProjectMetadataSchema(name: string, label: string, type: number): boolean

  /**
   *
   */
  bind(eventName: string, function_: any): void

  /**
   *
   */
  closeDocument(): boolean

  /**
   *
   */
  createNewSequence(sequenceName: string, placeholderID: string): void

  /**
   *
   */
  deleteAsset(): void

  /**
   *
   */
  deleteSequence(sequence: Sequence): boolean

  /**
   *
   */
  exportAAF(
    sequence: Sequence,
    filePath: string,
    mixDownVideo: number,
    explodeToMono: number,
    sampleRate: number,
    bitsPerSample: number,
    embedAudio: number,
    audioFileFormat: number,
    trimSources: number,
    handleFrames: number,
  ): number

  /**
   *
   */
  exportFinalCutProXML(exportPath: string, suppressUI: number): boolean

  /**
   *
   */
  exportOMF(
    sequence: Sequence,
    filePath: string,
    OMFTitle: string,
    sampleRate: number,
    bitsPerSample: number,
    audioEncapsulated: number,
    audioFileFormat: number,
    trimAudioFiles: number,
    handleFrames: number,
    includePan: number,
  ): number

  /**
   *
   */
  exportTimeline(exportControllerName: string): number

  /**
   *
   */
  getInsertionBin(): ProjectItem

  /**
   *
   */
  getProjectPanelMetadata(): void

  /**
   *
   */
  importAEComps(arg1: any): boolean

  /**
   *
   */
  importAllAEComps(arg1: any): boolean

  /**
   *
   */
  importFiles(arg1: any): boolean

  /**
   *
   */
  importSequences(arg1: any): boolean

  /**
   *
   */
  openSequence(sequenceID: string): boolean

  /**
   *
   */
  pauseGrowing(pausedOrNot: number): boolean

  /**
   *
   */
  placeAsset(arg1: any): boolean

  /**
   *
   */
  save(): void

  /**
   *
   */
  saveAs(saveAsPath: string): boolean

  /**
   *
   */
  setProjectPanelMetadata(): void

  /**
   *
   */
  setTimeout(eventName: string, function_: any, milliseconds: number): void

  /**
   *
   */
  unbind(eventName: string): void
}

/**
 *
 */
declare class Track {
  /**
   *
   */
  readonly clips: TrackItemCollection

  /**
   *
   */
  readonly id: number

  /**
   *
   */
  readonly mediaType: string

  /**
   *
   */
  readonly transitions: TrackItemCollection

  /**
   *
   */
  bind(eventName: string, function_: any): void

  /**
   *
   */
  insertClip(clipProjectItem: ProjectItem, time: object): void

  /**
   *
   */
  isMuted(): boolean

  /**
   *
   */
  overwriteClip(clipProjectItem: ProjectItem, time: object): void

  /**
   *
   */
  setMute(arg1?: number): void

  /**
   *
   */
  setTimeout(eventName: string, function_: any, milliseconds: number): void

  /**
   *
   */
  unbind(eventName: string): void
}

/**
 *
 */
declare class TrackItem {
  /**
   *
   */
  readonly components: any

  /**
   *
   */
  readonly duration: Time

  /**
   *
   */
  readonly end: Time

  /**
   *
   */
  readonly inPoint: Time

  /**
   *
   */
  readonly mediaType: string

  /**
   *
   */
  name: string

  /**
   *
   */
  readonly outPoint: Time

  /**
   *
   */
  projectItem: ProjectItem

  /**
   *
   */
  readonly start: Time

  /**
   *
   */
  readonly type: number

  /**
   *
   */
  bind(eventName: string, function_: any): void

  /**
   *
   */
  getLinkedItems(): TrackItemCollection

  /**
   *
   */
  isSelected(): boolean

  /**
   *
   */
  setSelected(isSelected: number, updateUI?: number): void

  /**
   *
   */
  setTimeout(eventName: string, function_: any, milliseconds: number): void

  /**
   *
   */
  unbind(eventName: string): void
}

/**
 *
 */
declare class ProjectItem {
  /**
   *
   */
  readonly children: ProjectItemCollection

  /**
   *
   */
  name: string

  /**
   *
   */
  readonly nodeId: string

  /**
   *
   */
  readonly treePath: string

  /**
   *
   */
  readonly type: number

  /**
   *
   */
  readonly videoComponents: any

  /**
   *
   */
  attachProxy(mediaPath: string, isHiRes: number): boolean

  /**
   *
   */
  bind(eventName: string, function_: any): void

  /**
   *
   */
  canChangeMediaPath(): boolean

  /**
   *
   */
  canProxy(): boolean

  /**
   *
   */
  changeMediaPath(mediaPath: string): boolean

  /**
   *
   */
  createBin(name: string): void

  /**
   *
   */
  createSmartBin(name: string, query: string): void

  /**
   *
   */
  createSubClip(
    name: string,
    startTime: object,
    endTime: object,
    hasHardBoundaries: number,
    takeVideo?: number,
    takeAudio?: number,
  ): ProjectItem

  /**
   *
   */
  deleteBin(): void

  /**
   *
   */
  findItemsMatchingMediaPath(matchString: string, ignoreSubclips?: number): void

  /**
   *
   */
  getColorLabel(): number

  /**
   *
   */
  getMarkers(): MarkerCollection

  /**
   *
   */
  getMediaPath(): string

  /**
   *
   */
  getProjectMetadata(): string

  /**
   *
   */
  getProxyPath(): string

  /**
   *
   */
  getXMPMetadata(): string

  /**
   *
   */
  hasProxy(): boolean

  /**
   *
   */
  moveBin(destination: ProjectItem): void

  /**
   *
   */
  refreshMedia(): string

  /**
   *
   */
  renameBin(name: string): boolean

  /**
   *
   */
  select(): void

  /**
   *
   */
  setColorLabel(): void

  /**
   *
   */
  setOverridePixelAspectRatio(numerator: number, denominator: number): boolean

  /**
   *
   */
  setProjectMetadata(buffer: string): void

  /**
   *
   */
  setScaleToFrameSize(): void

  /**
   *
   */
  setStartTime(arg1: object): void

  /**
   *
   */
  setTimeout(eventName: string, function_: any, milliseconds: number): void

  /**
   *
   */
  setXMPMetadata(buffer: string): boolean

  /**
   *
   */
  startTime(): Time

  /**
   *
   */
  unbind(eventName: string): void
}

/**
 *
 */
declare class ProjectCollection {
  /**
   *
   */
  readonly numProjects: number

  /**
   *
   */
  bind(eventName: string, function_: any): void

  /**
   *
   */
  setTimeout(eventName: string, function_: any, milliseconds: number): void

  /**
   *
   */
  unbind(eventName: string): void
}

/**
 *
 */
declare class ProjectItemCollection {
  /**
   *
   */
  readonly numItems: number

  /**
   *
   */
  bind(eventName: string, function_: any): void

  /**
   *
   */
  setTimeout(eventName: string, function_: any, milliseconds: number): void

  /**
   *
   */
  unbind(eventName: string): void
}

/**
 *
 */
declare class TrackCollection {
  /**
   *
   */
  readonly numTracks: number

  /**
   *
   */
  bind(eventName: string, function_: any): void

  /**
   *
   */
  setTimeout(eventName: string, function_: any, milliseconds: number): void

  /**
   *
   */
  unbind(eventName: string): void
}

/**
 *
 */
declare class TrackItemCollection {
  /**
   *
   */
  readonly numItems: number

  /**
   *
   */
  bind(eventName: string, function_: any): void

  /**
   *
   */
  setTimeout(eventName: string, function_: any, milliseconds: number): void

  /**
   *
   */
  unbind(eventName: string): void
}

/**
 *
 */
declare class ScratchDiskType {
  /**
   *
   */
  readonly FirstAudioCaptureFolder: string

  /**
   *
   */
  readonly FirstAudioPreviewFolder: string

  /**
   *
   */
  readonly FirstAutoSaveFolder: string

  /**
   *
   */
  readonly FirstCClibrariesFolder: string

  /**
   *
   */
  readonly FirstCapsuleMediaFolder: string

  /**
   *
   */
  readonly FirstVideoCaptureFolder: string

  /**
   *
   */
  readonly FirstVideoPreviewFolder: string

  /**
   *
   */
  bind(eventName: string, function_: any): void

  /**
   *
   */
  setTimeout(eventName: string, function_: any, milliseconds: number): void

  /**
   *
   */
  unbind(eventName: string): void
}

/**
 *
 */
declare class Csxs {
  /**
   *
   */
  readonly resourceCentral: CsxsResourceCentral

  /**
   *
   */
  bind(eventName: string, function_: any): void

  /**
   *
   */
  setTimeout(eventName: string, function_: any, milliseconds: number): void

  /**
   *
   */
  unbind(eventName: string): void
}

/**
 *
 */
declare class RemoteProductionCollection {
  /**
   *
   */
  readonly numProductions: number

  /**
   *
   */
  bind(eventName: string, function_: any): void

  /**
   *
   */
  setTimeout(eventName: string, function_: any, milliseconds: number): void

  /**
   *
   */
  unbind(eventName: string): void
}

/**
 *
 */
declare class RemoteProduction {
  /**
   *
   */
  readonly description: string

  /**
   *
   */
  readonly name: string

  /**
   *
   */
  readonly url: string

  /**
   *
   */
  bind(eventName: string, function_: any): void

  /**
   *
   */
  setTimeout(eventName: string, function_: any, milliseconds: number): void

  /**
   *
   */
  unbind(eventName: string): void
}

/**
 *
 */
declare class Encoder {
  /**
   *
   */
  readonly ENCODE_ENTIRE: number

  /**
   *
   */
  readonly ENCODE_IN_TO_OUT: number

  /**
   *
   */
  readonly ENCODE_WORKAREA: number

  /**
   *
   */
  bind(eventName: string, function_: any): void

  /**
   *
   */
  encodeFile(
    inputFilePath: string,
    outputFilePath: string,
    presetPath: string,
    removeOnCompletion?: number,
    startTime?: object,
    stopTime?: object,
  ): string

  /**
   *
   */
  encodeProjectItem(
    projectItem: ProjectItem,
    outputFilePath: string,
    presetPath: string,
    WorkAreaType?: number,
    removeOnCompletion?: number,
  ): string

  /**
   *
   */
  encodeSequence(
    sequence: Sequence,
    outputFilePath: string,
    presetPath: string,
    WorkAreaType?: number,
    removeOnCompletion?: number,
  ): string

  /**
   *
   */
  launchEncoder(): boolean

  /**
   *
   */
  setEmbeddedXMPEnabled(enable: number): void

  /**
   *
   */
  setSidecarXMPEnabled(enable: number): void

  /**
   *
   */
  setTimeout(eventName: string, function_: any, milliseconds: number): void

  /**
   *
   */
  startBatch(): boolean

  /**
   *
   */
  unbind(eventName: string): void
}

/**
 *
 */
declare class Properties {
  /**
   *
   */
  bind(eventName: string, function_: any): void

  /**
   *
   */
  clearProperty(propertyKey: string): void

  /**
   *
   */
  doesPropertyExist(propertyKey: string): boolean

  /**
   *
   */
  getProperty(propertyKey: string): void

  /**
   *
   */
  isPropertyReadOnly(propertyKey: string): boolean

  /**
   *
   */
  setProperty(propertyKey: string): void

  /**
   *
   */
  setTimeout(eventName: string, function_: any, milliseconds: number): void

  /**
   *
   */
  unbind(eventName: string): void
}

/**
 *
 */
declare class App {
  /**
   *
   */
  readonly anywhere: Anywhere

  /**
   *
   */
  readonly build: string

  /**
   *
   */
  readonly csxs: Csxs

  /**
   *
   */
  readonly encoder: Encoder

  /**
   *
   */
  readonly getAppPrefPath: string

  /**
   *
   */
  readonly getAppSystemPrefPath: string

  /**
   *
   */
  readonly getPProPrefPath: string

  /**
   *
   */
  readonly getPProSystemPrefPath: string

  /**
   *
   */
  readonly metadata: Metadata

  /**
   *
   */
  project: Project

  /**
   *
   */
  readonly projects: ProjectCollection

  /**
   *
   */
  readonly properties: Properties

  /**
   *
   */
  readonly sourceMonitor: SourceMonitor

  /**
   *
   */
  readonly userGuid: string

  /**
   *
   */
  readonly version: string

  /**
   *
   */
  bind(eventName: string, function_: any): void

  /**
   *
   */
  broadcastPrefsChanged(preferencesThatChanged: string): boolean

  /**
   *
   */
  getEnableProxies(): number

  /**
   *
   */
  isDocument(filePath: string): boolean

  /**
   *
   */
  isDocumentOpen(): boolean

  /**
   *
   */
  openDocument(): boolean

  /**
   *
   */
  openFCPXML(): boolean

  /**
   *
   */
  quit(): void

  /**
   *
   */
  setEnableProxies(enable: number): boolean

  /**
   *
   */
  setExtensionPersistent(extensionID: string, state?: number): void

  /**
   *
   */
  setSDKEventMessage(value: string, eventType: string): boolean

  /**
   *
   */
  setScratchDiskPath(value: string, type: string): boolean

  /**
   *
   */
  setTimeout(eventName: string, function_: any, milliseconds: number): void

  /**
   *
   */
  showCursor(enable: boolean): void

  /**
   *
   */
  trace(message: string): void

  /**
   *
   */
  unbind(eventName: string): void
}

/**
 *
 */
declare class MarkerCollection {
  /**
   *
   */
  readonly numMarkers: number

  /**
   *
   */
  bind(eventName: string, function_: any): void

  /**
   *
   */
  createMarker(time: number): Marker

  /**
   *
   */
  deleteMarker(marker: Marker): void

  /**
   *
   */
  getFirstMarker(): Marker

  /**
   *
   */
  getLastMarker(): Marker

  /**
   *
   */
  getNextMarker(marker: Marker): Marker

  /**
   *
   */
  getPrevMarker(marker: Marker): Marker

  /**
   *
   */
  setTimeout(eventName: string, function_: any, milliseconds: number): void

  /**
   *
   */
  unbind(eventName: string): void
}

/**
 *
 */
declare class Marker {
  /**
   *
   */
  comments: string

  /**
   *
   */
  end: Time

  /**
   *
   */
  readonly guid: string

  /**
   *
   */
  name: string

  /**
   *
   */
  start: Time

  /**
   *
   */
  type: string

  /**
   *
   */
  bind(eventName: string, function_: any): void

  /**
   *
   */
  getWebLinkFrameTarget(): string

  /**
   *
   */
  getWebLinkURL(): string

  /**
   *
   */
  setTimeout(eventName: string, function_: any, milliseconds: number): void

  /**
   *
   */
  setTypeAsChapter(): void

  /**
   *
   */
  setTypeAsComment(): void

  /**
   *
   */
  setTypeAsSegmentation(): void

  /**
   *
   */
  setTypeAsWebLink(url: string, frameTarget: string): void

  /**
   *
   */
  unbind(eventName: string): void
}

/**
 *
 */
declare class Document {
  /**
   *
   */
  bind(eventName: string, function_: any): void

  /**
   *
   */
  getFilePath(): string

  /**
   *
   */
  importFiles(arg1: any): boolean

  /**
   *
   */
  setTimeout(eventName: string, function_: any, milliseconds: number): void

  /**
   *
   */
  unbind(eventName: string): void
}
