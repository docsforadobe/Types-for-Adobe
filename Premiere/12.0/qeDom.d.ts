// ----------------- DISCLAIMER -------------------
// The Premiere Pro QE DOM is offically UNSUPPORTED/
// This means these methods can change at any time
// and usage will not be supported by the Adobe team.
//
// Use at your own risk.
//
// --------------- END DISCLAIMER ------------------
//
// Type definitions for Premiere Pro's QE DOM API
// Definitions based off of Eric Robinson's work
/**
 * All interfaces in this document should extend this
 * one. We currently keep it out to keep noise to a
 * minimum.
 */
interface ExtendScriptBase {
  toLocaleString(): any
  hasOwnProperty(): any
  propertyIsEnumerable(): any
  isPrototypeOf(): any
  toSource(): any
  unwatch(): any
  watch(): any
}
/**
 * The `qe` object provides access to the application's
 * "Quality Engineering" DOM APIs.
 *
 * **WARNING:** This API is meant for Adobe-internal use
 * only. It is subject to change at any time and may
 * contain serious bugs. Use these APIs at your own peril.
 * **YOU HAVE BEEN WARNED.**
 */

interface QEApplication {
  ea: QE.EA
  name: string
  version: string
  config: string
  location: string
  platform: string
  language: string
  /** The QE representation of the Project. */
  project: QE.Project
  codeProfiler: QE.CodeProfiler
  audioChannelMapping: number
  source: QE.Source
  getDebugDatabaseEntry(): any
  executeConsoleCommand(): any
  outputToConsole(): any
  exit(): any
  stop(): any
  open(): any
  enablePlayStats(): any
  startPlayback(): any
  stopPlayback(): any
  newProject(): any
  wait(): any
  localize(): any
  enablePerformanceLogging(): any
  disablePerformanceLogging(): any
  isPerformanceLoggingEnabled(): any
  getSequencePresets(): any
  setAudioChannelMapping(): any
  beginDroppedFrameLogging(): any
  log(): any
  getModalWindowID(): any
  setDebugDatabaseEntry(): any
}
declare namespace QE {
  interface EA {
    getSessionSyncStatus(): any
    getRemoteServerBuildVersion(): any
    isSyncCommandEnabled(): any
    isShareCommandEnabled(): any
    isLoggedIn(): any
    convertProjectIntoProduction(): any
    convertProductionIntoProject(): any
    isConvertProjectIntoProductionRunning(): any
    getProcessID(): any
    getUsername(): any
    getAuthToken(): any
    setAuthToken(): any
    getProductionList(): any
    getArchivedProductionList(): any
    getInviteList(): any
    openProduction(): any
    sync(): any
    canShare(): any
    share(): any
    getConflicts(): any
    resolveConflict(): any
    doesEditingSessionHaveLocalMedia(): any
    benchmarkReflectEverything(): any
    waitForCurrentReflectionToComplete(): any
    isCollaborationOnly(): any
    isHostedCollaborationOnly(): any
    getLoggedInDataServerVersion(): any
    getDiscoveryURL(): any
    getURL(): any
    postURL(): any
    createProduction(): any
    setLocalHubConnectionStatus(): any
    getLoggedInUserDisplayId(): any
    renameProduction(): any
  }
  interface Project {
    importFailures: any
    currentRendererName: string
    isAudioConforming: boolean
    isIndexing: boolean
    isAudioPeakGenerating: boolean
    numConformedFiles: number
    numIndexedFiles: number
    numAudioPeakGeneratedFiles: number
    name: string
    path: string
    numSequences: number
    numItems: number
    numBins: number
    numSequenceItems: number
    numActiveProgressItems: number
    newSmartBin(): any
    undo(): any
    redo(): any
    undoStack(): any
    undoStackIndex(): any
    importProject(): any
    importPSD(): any
    newBarsAndTone(): any
    newCaption(): any
    newUniversalCountingLeader(): any
    newTransparentVideo(): any
    newBlackVideo(
      width: number,
      height: number,
      framerate: number,
      aspectNumerator: number,
      aspectDenominator: number,
    ): boolean
    newColorMatte(): any
    import(): any
    getRendererNames(): any
    setRenderer(): any
    /** Get the QE representation of the currently active Sequence. */
    getActiveSequence(): Sequence
    getRemainingMetadataCacheIndexCount(): any
    resetNumFilesCounter(): any
    init(): any
    save(): any
    saveAs(): any
    close(): any
    importFiles(): any
    importAEComps(): any
    importAllAEComps(): any
    getSequenceAt(): any
    getItemAt(): any
    getBinAt(): Bin
    getSequenceItemAt(): SequenceItem
    getVideoEffectByName(): any
    getAudioEffectByName(): any
    /**
     * See: https://github.com/Adobe-CEP/Samples/blob/00366bf8a86e44bd83704a04a8f4f0cdc75fd38f/PProPanel/jsx/PPRO/Premiere.jsx#L425
     *
     * @param name The name of the new Sequence.
     * @param pathToPreset The path the the sequence preset to use.
     */
    newSequence(name: string, pathToPreset: string): boolean
    sizeOnDisk(): any
    getVideoTransitionByName(): any
    getAudioTransitionByName(): any
    getVideoEffectList(): string[]
    getAudioEffectList(): string[]
    getVideoTransitionList(): string[]
    getAudioTransitionList(): string[]
    /**
     * Delete cached preview files for the specified media type.
     */
    deletePreviewFiles(type: MediaType): any
    newBin(): Bin
  }
  interface CodeProfiler {
    start(): any
    stop(): any
    reset(): any
    get(): any
  }
  interface Bin {
    name: string
    numItems: number
    numSequences: number
    numSequenceItems: number
    numBins: number
    getItemAt(): BinItem
    getBinAt(): any
    getSequenceAt(): any
    newBin(): any
    getSequenceItemAt(): any
  }
  interface BinItem {
    name: string
    clip: Clip
  }
  interface SequenceItem {
    name: string
    openInSource(): any
    isPending(): boolean
    isAudioConforming(): boolean
    isIndexing(): boolean
    isAudioPeakGenerating(): boolean
  }
  interface Source {
    player: Player
    clip: Clip
    openFilePath(): any
  }
  interface Player {
    loopPlayback: false
    droppedFrames: string
    totalFrames: string
    audioDropouts: number
    audioMediaNotFound: number
    audioClockJitters: number
    audioIOOverloads: number
    audioIODropouts: number
    audioPrefetchBehinds: number
    audioDeviceLoadAvg: number
    audioDeviceLoadMin: number
    audioDeviceLoadMax: number
    audioDeviceLoadStdDev: number
    play(): any
    stop(): any
    step(): any
    startScrubbing(): any
    setLoopPlayback(): any
    enableStatistics(): any
    disableStatistics(): any
    clearAudioDropoutStatus(): any
    captureAudioDeviceLoad(): any
    getPosition(): any
  }
  interface Clip {
    name: string
    filePath: string
    duration: string
    videoFieldType: number
    videoHasAlpha: boolean
    videoPixelAspectRatio: string
    videoFrameWidth: number
    videoFrameHeight: number
    videoFrameRate: number
    audioFrameRate: number
    audioSampleSize: number
    audioChannelType: number
    audioNumChannels: number
    setInPoint(): any
    setOutPoint(): any
    clearInPoint(): any
    clearOutPoint(): any
    setDuration(): any
    numOfChildClipsInUse(): any
    clearChildClips(): any
    numOfChildClips(): any
    hasChildClipsInUse(): any
    containsCaptions(): any
    containsCaptioningStream(): any
    numCaptioningStreams(): any
    getCaptioningStreamAt(): any
    setVideoInPoint(): any
    setVideoOutPoint(): any
    setAudioInPoint(): any
    setAudioOutPoint(): any
  }
  interface Sequence {
    /** Name of the sequence. */
    name: string
    numVideoTracks: 3
    numAudioTracks: 4
    /**
     * The Current Time Indicator for the active sequence.
     *
     * See: https://github.com/Adobe-CEP/Samples/blob/00366bf8a86e44bd83704a04a8f4f0cdc75fd38f/PProPanel/jsx/PPRO/Premiere.jsx#L499
     */
    CTI: Time
    inPoint: Time
    outPoint: Time
    workInPoint: Time
    workOutPoint: Time
    useMaxBitDepth: boolean
    useMaxRenderQuality: boolean
    videoDisplayFormat: 110
    audioDisplayFormat: 200
    previewFrameSize: [number, number]
    presetList: string[]
    previewPresetPath: string
    previewPresetCodec: number
    editingMode: string
    videoFrameSize: [number, number]
    audioFrameRate: number
    videoFrameRate: number
    par: number
    fieldType: number
    guid: string
    player: Player
    multicam: Multicam
    getVideoTrackAt(idx: number): Track
    getAudioTrackAt(idx: number): Track
    makeCurrent(): any
    close(): any
    isOpen(): boolean
    renderPreview(): any
    renderAll(): any
    renderAudio(): any
    /**
     * Adds tracks to the current sequence as specified.
     * @param numVideo The number of Video Tracks to add. [Default: 1]
     * @param videoIndex The index at which added Video Track(s) should be inserted into the Video Tracks list. [Default: 0]
     * @param numAudio The number of Audio Tracks to add. [Default: 1]
     * @param audioChannelType The Audio Channel configuration that added Audio Tracks should support. [Default: 1]
     * @param audioIndex The index at which added Audio Track(s) should be inserted into the Audio Tracks list. [Default: 0]
     * @param numSubAudio The number of SubAudio Tracks (Submix Tracks) to add. [Default: 0]
     * @param subAudioChannelType The Audio Channel configuration that added SubAudio Tracks (Submix tracks) should support. [Default: 1]
     * @param subAudioIndex The index at which added SubAudio Track(s) (Submix Track(s)) should be inserted into the SubAudio Tracks list. [Default: 0?]
     */
    addTracks(
      numVideo?: number,
      videoIndex?: number,
      numAudio?: number,
      audioChannelType?: AudioChannelType,
      audioIndex?: number,
      numSubAudio?: number,
      subAudioChannelType?: AudioChannelType,
      subAudioIndex?: number,
    ): boolean
    removeTracks(): any
    removeVideoTrack(): any
    removeAudioTrack(): any
    removeEmptyVideoTracks(): any
    removeEmptyAudioTracks(): any
    exportToAME(): any
    exportDirect(): any
    getExportComplete(): any
    createExportJob(): any
    /**
     * Retrieve the file
     */
    getExportFileExtension(): any
    razor(): any
    setCTI(): any
    setInPoint(): any
    setOutPoint(): any
    setInOutPoints(): any
    lift(): any
    extract(): any
    setWorkInPoint(): any
    setWorkOutPoint(): any
    setWorkInOutPoints(): any
    lockTracks(): any
    syncLockTracks(): any
    muteTracks(): any
    deletePreviewFiles(): any
    getRedBarTimes(): any
    getGreenBarTimes(): any
    getYellowBarTimes(): any
    getEmptyBarTimes(): any
    setUseMaxBitDepth(): any
    setUseMaxRenderQuality(): any
    setVideoDisplayFormat(): any
    setAudioDisplayFormat(): any
    setPreviewFrameSize(): any
    setPreviewPresetPath(): any
    exportFrameDPX(): any
    /**
     * See: https://github.com/Adobe-CEP/Samples/blob/00366bf8a86e44bd83704a04a8f4f0cdc75fd38f/PProPanel/jsx/PPRO/Premiere.jsx#L71
     *
     * @param timecode The timecode of the frame to export. Format may require replacing [semi-]colons (";:") with underscores ("_").
     * @param filePath The path (including filename) at which to export the png file.
     */
    exportFramePNG(timecode: string, filePath: string): any
    exportFrameTarga(): any
    exportFrameJPEG(): any
    exportFrameTIFF(): any
    flushCache(): any
  }
  interface Time {
    ticks: number
    secs: number
    frames: number
    timecode: string
  }
  interface Multicam {
    play(): any
    stop(): any
    changeCamera(): any
    record(): any
    enable(): any
  }
  interface Track {
    name: string
    index: number
    type: string
    numItems: number
    numTransitions: number
    numComponents: number
    getItemAt(): any
    getTransitionAt(): any
    setName(): any
    insert(): any
    overwrite(): any
    addAudioEffect(): any
    getComponentAt(): any
    razor(): any
    setLock(): any
    isLocked(): boolean
    setSyncLock(): any
    isSyncLocked(): boolean
    setMute(): any
    isMuted(): boolean
  }
  /**
   * Options are:
   * - `0`: Mono
   * - `1`: Stero
   * - `2`: 5.1
   * - `3`: Multichannel
   * - `4`: 4 Channel
   * - `5`: 8 Channel
   *
   */
  type AudioChannelType = 0 | 1 | 2 | 3 | 4 | 5
  /**
   * Options are:
   * - `228CDA18-3625-4d2d-951E-348879E4ED93`: Video
   * - `80B8E3D5-6DCA-4195-AEFB-CB5F407AB009`: Audio
   * - `FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF`: Any
   */
  type MediaType =
    | "228CDA18-3625-4d2d-951E-348879E4ED93"
    | "80B8E3D5-6DCA-4195-AEFB-CB5F407AB009"
    | "FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF"
}
