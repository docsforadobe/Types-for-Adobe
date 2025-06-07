/// <reference path="../../shared/global.d.ts" />

/**
 * TypeScript definitions for Premiere Pro's ExtendScript API would not have happened
 * without the efforts of Eric Robinson and Pravdomil Toman. If you find these definitions
 * useful, it's thanks to them. If you find problems with them, they're mine.
 *
 * -bbb
 * 4/15/19
 *
 */

/**
 * 0 = false,
 * 1 = true
 */

type NumericalBool = 0 | 1
type MediaType = "Video" | "Audio" | "any"
type SampleRateOption = 48000 | 96000
type BitsPerSampleOption = 16 | 24
type SDKEventType = "warning" | "info" | "error"

declare enum WorkAreaType {
  ENCODE_ENTIRE = 0,
  ENCODE_IN_TO_OUT = 1,
  ENCODE_WORK_AREA = 2,
}

/**
 * Video time display formats.
 */
type VideoTimeDisplay  =
  | 100 /** TIMEDISPLAY_24Timecode: Timecode 24 fps. */
  | 101 /** TIMEDISPLAY_25Timecode: Timecode 25 fps. */
  | 102 /** TIMEDISPLAY_2997DropTimecode: Timecode 29.97 fps, drop frame. */
  | 103 /** TIMEDISPLAY_2997NonDropTimecode: Timecode 29.97 fps, non-drop frame. */
  | 104 /** TIMEDISPLAY_30Timecode: Timecode 30 fps. */
  | 105 /** TIMEDISPLAY_50Timecode: Timecode 50 fps. */
  | 106 /** TIMEDISPLAY_5994DropTimecode: Timecode 59.94 fps, drop frame. */
  | 107 /** TIMEDISPLAY_5994NonDropTimecode: Timecode 59.94 fps, non-drop frame. */
  | 108 /** TIMEDISPLAY_60Timecode: Timecode 60 fps. */
  | 109 /** TIMEDISPLAY_Frames: Frames. */
  | 110 /** TIMEDISPLAY_23976Timecode: Timecode 23.976 fps. */
  | 111 /** TIMEDISPLAY_16mmFeetFrames: 16mm Feet+Frames. */
  | 112 /** TIMEDISPLAY_35mmFeetFrames: 35mm Feet+Frames. */
  | 113 /** TIMEDISPLAY_48Timecode: Timecode 48 fps. */

type AudioTimeDisplay  =
  | 200 /** TIMEDISPLAY_AudioSamplesTimecode: Audio Samples. */
  | 201 /** TIMEDISPLAY_AudioMsTimecode: Audio Milliseconds. */;

/**
 * @See {@link VideoTimeDisplay} and {@link AudioTimeDisplay}
 */
type TIME_FORMAT =
  | VideoTimeDisplay
  | AudioTimeDisplay

type InterpolationType =
  | 0 /** KF_Interp_Mode_Linear */
  | 1 /** kfInterpMode_EaseIn_Obsolete */
  | 2 /** kfInterpMode_EaseOut_Obsolete */
  | 3 /** kfInterpMode_EaseInEaseOut_Obsolete */
  | 4 /** KF_Interp_Mode_Hold */
  | 5 /** KF_Interp_Mode_Bezier */
  | 6 /** KF_Interp_Mode_Time */
  | 7 /** kfInterpMode_TimeTransitionStart */
  | 8 /** kfInterpMode_TimeTransitionEnd */

interface $ {
  _PPP_: any
}

interface Collection<T> {
  readonly length: number
  readonly [index: number]: T
}

declare class Properties {
  clearProperty(propertyKey: string): void;
  doesPropertyExist(propertyKey: string): boolean;
  getProperty(propertyKey: string): any;
  isPropertyReadOnly(propertyKey: string): boolean;
  setProperty(
    property: string,
    value: any,
    persistent?: number,
    createIfNotExist?: boolean,
  ): void;
}

declare class AudioChannelMapping {
  readonly audioChannelsType: number;
  readonly audioClipsNumber: number;
  setMappingForChannel(channelIndex: number, sourceChannelIndex: number): boolean;
}

interface FootageInterpretation {
  alphaUsage: number;
  fieldType: number;
  ignoreAlpha: boolean;
  invertAlpha: boolean;
  frameRate: number;
  pixelAspectRatio: number;
  removePulldown: boolean;
  vrConformProjectionType: number;
  vrLayoutType: number;
  vrHorizontalView: number;
  vrVerticalView: number;
}

/**
 * ColorSpaceObject exposes various helpful scripting functions which are useful when working with color spaces
 */
declare class ColorSpace {
  /**
   * Is the color space empty
   */
  readonly empty: boolean;

  /**
   * Is the color space scene referred
   */
  readonly isSceneReferred: boolean;

  /**
   * The color matrix equation code associated with the color space
   */
  readonly matrixEquation: number;

  /**
   * The name of the associated color space
   */
  readonly name: string;

  /**
   * The color primaries code associated with the color space
   */
  readonly primaries: number;

  /**
   * The color transfer characteristic code associated with the color space
   */
  readonly transferCharacteristic: number;
}

/**
 * Structure containing sequence settings.
 */
declare class SequenceSettings {
  audioChannelCount: number
  audioChannelType: number
  audioDisplayFormat: AudioTimeDisplay
  audioSampleRate: Time
  compositeLinearColor: boolean
  editingMode: String
  maximumBitDepth: boolean
  maximumRenderQuality: boolean
  previewCode: String
  previewFileFormat: String
  previewFrameHeight: number
  previewFrameWidth: number
  videoDisplayFormat: VideoTimeDisplay
  videoFieldType: number
  videoFrameRate: Time
  videoFrameHeight: number
  videoFrameWidth: number
  videoPixelAspectRatio: string
  vrHorzCapturedView: number
  vrLayout: number
  vrProjection: number
  vrVertCapturedView: number
  workingColorSpaceList: Array<any>
  workingColorSpace: String
}

/**
 * A sequence.
 */
declare class Sequence {
  /**
   * Subtitle (Default)
   */
  static readonly CAPTION_FORMAT_SUBTITLE: number

  /**
   * CEA-608
   */
  static readonly CAPTION_FORMAT_608: number

  /**
   * CEA-708
   */
  static readonly CAPTION_FORMAT_708: number

  /**
   * Teletext
   */
  static readonly CAPTION_FORMAT_TELETEXT: number

  /**
   * EBU Subtitle
   */
  static readonly CAPTION_FORMAT_OPEN_EBU: number

  /**
   * OP-42
   */
  static readonly CAPTION_FORMAT_OP42: number

  /**
   * OP-47
   */
  static readonly CAPTION_FORMAT_OP47: number

  /**
   *
   */
  sequenceSettings: SequenceSettings

  /**
   * The audio display format of the sequence. Will be one of the following:
   * @See {@link AudioTimeDisplay}
   */
  audioDisplayFormat: AudioTimeDisplay;

  /**
   * A collection of the sequence's audio tracks.
   */
  readonly audioTracks: TrackCollection

  /**
   * Timecode (as a string) of the end of the sequence.
   */
  readonly end: string

  /**
   * Width
   */
  readonly frameSizeHorizontal: number

  /**
   * Height
   */
  readonly frameSizeVertical: number

  /**
   * Sequence ID
   */
  readonly id: number

  /**
   * The sequence's markers.
   */
  readonly markers: MarkerCollection

  /**
   * The available colorspaces
   */
  readonly workingColorSpaceList: Array<any>

  /**
   * The color space in use by the sequence
   */
  workingColorSpace: string

  /**
   * Name (writable).
   */
  name: string

  /**
   *
   */
  videoDisplayFormat: number

  /**
   * The `projectItem` corresponding to the sequence.
   */
  readonly projectItem: ProjectItem

  /**
   * Permanent ID of the sequence, within its project.
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
   * The starting timecode of the first frame of the sequence, as a string.
   */
  readonly zeroPoint: string

  /**
   * Adds a new metadata key to the sequence, and sets its value.
   * @param propertyID Name of new property
   * @param propertyValue Value of new property
   */
  attachCustomProperty(propertyID: string, propertyValue: string): void

  /**
   *
   */
  bind(eventName: string, function_: any): void

  /**
   * Clones a sequence.
   * @returns the clone Sequence.
   */
  clone(): Sequence

  /**
   * Closes the sequence.
   */
  close(): boolean;

  /**
   * Creates a caption track in the active sequence using caption data from a project item.
   * @param projectItem A captions source clip (e.g. .srt)
   * @param startAtTime Offset in seconds from start of sequence
   * @param captionsFormat (Optional, defaults to subtitle) Caption format of the new track (see table below).
   */
  createCaptionTrack(projectItem: ProjectItem, startAtTime: number, captionFormat: number): Sequence

  /**
   * Creates a new sequence from the source sequence's in and out points.
   * @param ignoreMapping If True the current selection, not track targeting, will determine
   * the clips to include in the new sequence.
   *
   * If there is no selection, track targeting determines which clips are included in the new sequence.
   */
  createSubsequence(ignoreMapping: Boolean): Sequence

  /**
   * Exports a new FCP XML file representing this sequence.
   * @param exportPath The full file path (with file name) to create.
   * @param suppressUI Optional; quiets any warnings or errors encountered during export.
   */
  exportAsFinalCutProXML(exportPath: string, suppressUI?: number): boolean

  /**
   * Premiere Pro exports the sequence immediately.
   * @param outputFilePath The output file path (with name).
   * @param presetPath The .epr file to use.
   * @param workAreaType Optional work area specifier.
   */
  exportAsMediaDirect(
    outputFilePath: string,
    presetPath: string,
    workAreaType?: WorkAreaType,
  ): string

  /**
   * Exports the sequence (and its constituent media) as a new PPro project.
   * @param path Output file path, including file name.
   */
  exportAsProject(exportPath: string): void

  /**
   * Retrieves the file extension associated with a given output preset (.epr file).
   * @param presetFilePath full path to .epr file
   */
  getExportFileExtension(presetFilePath: string): string

  /**
   * Retrieves the sequence's in point, as a timecode string.
   */
  getInPoint(): string

  /**
   * Retrieves the sequence's out point, as a timecode string.
   */
  getOutPoint(): string

  /**
   * Retrieves the sequence's in point, as a `Time` object.
   */
  getInPointAsTime(): Time

  /**
   * Retrieves the sequence's out point, as a `Time` object.
   */
  getOutPointAsTime(): Time

  /**
   * Retrieves the current player position, as a `Time` object.
   */
  getPlayerPosition(): Time

  /**
   * Sets the in point of the sequence to the specified time.
   * @param time Time of in point. Can be given as a number in seconds, a string representing ticks, or a {@link Time} object.
   */
  setInPoint(time: number | string | Time): null

  /**
   * Sets the out point of the sequence.
   * @param seconds Time of out point. Can be given as a number in seconds, a string representing ticks, or a {@link Time} object.
   */
  setOutPoint(time: number | string | Time): null

  /**
   * Sets the current player position.
   * @param pos The new position, as a string, representing ticks.
   */
  setPlayerPosition(pos: string): void

  /**
   *
   */
  setTimeout(eventName: string, function_: any, milliseconds: number): void

  /**
   * Sets the timecode of the first frame of the sequence.
   * @param newStartTime The new starting time, in `ticks`.
   */
  setZeroPoint(newStartTime: string): void

  /**
   * Links the currently-selected `trackItems` together, if possible.
   * @returns `True` if successful.
   */
  linkSelection(): boolean

  /**
   * Unlinks the currently-selected `trackItems`, if possible.
   * @returns `True` if successful.
   */
  unlinkSelection(): boolean

  /**
   * Imports a Motion Graphics Template (.mogrt) into the sequence
   * @param pathToMOGRT Complete path to .mogrt
   * @param timeInTicks Time (in ticks) at which to insert
   * @param videoTrackOffset The offset from first video track to targeted track
   * @param audioTrackOffset The offset from first audio track to targeted track
   * @returns newly-created `trackItem` representing the .mogrt
   */
  importMGT(
    pathToMOGRT: String,
    timeInTicks: String,
    videoTrackOffset: number,
    audioTrackOffset: number,
  ): TrackItem

  /**
   * Imports a Motion Graphics Template (.mogrt) from a Creative Cloud Library.
   * @param libraryName The name of Library (from the current PPro user’s Creative Cloud Libraries).
   * @param mgtName The name of .mogrt within that library.
   * @param time The time at which to insert .mogrt, in ticks.
   * @param vidTrackOffset How many tracks from the zero-th video track, into which to insert .mogrt content.
   * @param audTrackOffset How many tracks from the zero-th audio track, into which to insert .mogrt content.
   * @returns newly-created {@link TrackItem} representing the .mogrt
   */
  importMGTFromLibrary(libraryName: string, mgtName: string, time: string, vidTrackOffset: number, audTrackOffset: number): TrackItem;

  /**
   * Returns `true` if work area is enabled.
   */
  isWorkAreaEnabled(): Boolean

  /**
   * Sets the enabled state of the seqeuence work area.
   * @param enableState The desired state
   */
  setWorkAreaEnabled(enableState: Boolean): void

  /**
   * Returns the work area in point, in seconds.
   */
  getWorkAreaInPoint(): number

  /**
   * Specify the work area in point, in seconds.
   * @param time new in point time. Can be given as a number in seconds, a string representing ticks, or a {@link Time} object.
   */
  setWorkAreaInPoint(time: number | string | Time): null

  /**
   * Returns the work area out point, in seconds.
   */
  getWorkAreaOutPoint(): number

  /**
   * Specify the work area out point, in seconds.
   * @param time new out point time. Can be given as a number in seconds, a string representing ticks, or a {@link Time} object.
   */
  setWorkAreaOutPoint(tme: number | string | Time): null

  /**
   * @returns the work area in point, as a `Time` object.
   */
  getWorkAreaInPointAsTime(): Time

  /**
   * @returns the work area out point, as a `Time` object.
   */
  getWorkAreaOutPointAsTime(): Time

  /**
   * Inserts a clip (`trackItem`) into the sequence.
   * @param projectItem The project item to insert.
   * @param time Time at which to insert.
   * @param vidTrackOffset The offset from the first video track to targeted track
   * @param audTrackOffset The offset from the first audio track to targeted track
   */
  insertClip(
    projectItem: ProjectItem,
    time: Time,
    vidTrackOffset: number,
    audTrackOffset: number,
  ): TrackItem

  /**
   * Overwrites a clip into the sequence.
   * @param projectItem A project item from which to get media.
   * @param time The time at which to add project item. Can be given as a number in seconds, a string representing ticks, or a {@link Time} object.
   * @param vTrackIndex The (zero-based) track index, into which to insert video.
   * @param aTrackIndex The (zero-based) track index, into which to insert audio.
   */
  overwriteClip(projectItem: ProjectItem, time: string|number|Time, vTrackIndex: number, aTrackIndex: number): boolean;

  /**
   * @returns currently-selected clips, as an `Array` of `trackItems`
   */
  getSelection(): Array<TrackItem>

  /**
   * Returns the current sequence settings.
   * @returns SequenceSettings
   */
  getSettings(): SequenceSettings

  /**
   * Specifies the sequence settings to use.
   * @param newSettings New settings
   */
  setSettings(newSettings: SequenceSettings): void

  /**
   *  @returns true if effect analysis is complete
   */

  isDoneAnalyzingForVideoEffects(): Boolean

  /**
   *
   * @param numerator Numerator of desired frame aspect ratio
   * @param denominator Denominator of desired frame aspect ratio
   * @param motionPreset Either "default", "faster" or "slower"
   * @param sequenceName Name for created sequence
   * @param nest Use nested sequences?
   */

  autoReframeSequence(
    numerator: Number,
    denominator: Number,
    motionPreset: String,
    sequenceName: String,
    nest: Boolean,
  ): Sequence

  /**
   *
   * @param action Either 'ApplyCuts' or 'CreateMarkers'
   * @param applyCutsToLinkedAudio Operate on linked audio too?
   * @param sensitivity 'LowSensitivity', 'MediumSensitivity', or 'HighSensitivity'
   */
  performCutDetectionOnSelection(
    action: String,
    applyCutsToLinkedAudio: Boolean,
    sensitivity: String,
  ): void
  /**
   *
   */
  unbind(eventName: string): void
}

/**
 * Structure containing all available options for the `ProjectManager`.
 */
declare class ProjectManagerOptions {
  /**
   * Transfer mode setting: Copy source media
   */
  readonly CLIP_TRANSFER_COPY: string

  /**
   * Transfer mode setting: Transcode source media
   */
  readonly CLIP_TRANSFER_TRANSCODE: string

  /**
   * Transcode mode setting: Transcode source media to a specific preset
   */
  readonly CLIP_TRANSCODE_MATCH_PRESET: string

  /**
   * Transcode mode setting: Transcode source media to match clips
   */
  readonly CLIP_TRANSCODE_MATCH_CLIPS: string

  /**
   * Transcode mode setting: Transcode source media to match sequence settings
   */
  readonly CLIP_TRANSCODE_MATCH_SEQUENCE: string

  /**
   * Which transcode option to use; will be one of these:
   * 	`CLIP_TRANSCODE_MATCH_PRESET`
   *  `CLIP_TRANSCODE_MATCH_CLIPS`
   * 	`CLIP_TRANSCODE_MATCH_SEQUENCE`
   */
  clipTranscoderOption: string

  /**
   * Which transfer option to use; will be one of these:
   * 	`CLIP_TRANSFER_COPY`
   *  `CLIP_TRANSFER_TRANSCODE`
   */
  clipTransferOption: string

  /**
   * If `true`, projectItems not used in a sequence are not transferred
   */
  excludeUnused: boolean

  /**
   * The number of 'handle' frames to provide, before and after the in/out points of clips in the sequence.
   */
  handleFrameCount: number

  /**
   * If `true`, preview files will also be transferred.
   */
  includePreviews: boolean

  /**
   * If `true`, conformed audio files will also be transferred.
   */
  includeConformedAudio: boolean

  /**
   * If `true`, media files will be renamed to match clip names.
   */
  renameMedia: boolean

  /**
   * The containing directory for the consolidation/transfer.
   */
  destinationPath: String

  /**
   * If `true`, all sequences in the project will be transferred.
   */
  includeAllSequences: boolean

  /**
   * An `Array` of all sequences affected by the transfer.
   */
  affectedSequences: Array<Sequence>

  /**
   * Path the the encoder preset (.epr file) to be used.
   */
  encoderPresetFilePath: String

  /**
   * If `true`, image sequences will be transcoded.
   */
  convertImageSequencesToClips: boolean

  /**
   * If `true`, synthetic importer clips will be transcoded.
   */
  convertSyntheticsToClips: boolean

  /**
   * If `true`, After Effects compositions will be transcoded.
   */
  convertAECompsToClips: boolean

  /**
   * If `true`, source media will be copied not transcoded, if transcoding would have resulted in loss of alpha information.
   */
  copyToPreventAlphaLoss: boolean
}

declare class ProjectManager {
  /**
   * An array of strings describing errors encountered.
   */
  errors: Array<Error>

  /**
   * The `ProjectManagerOptions` structure.
   */
  options: ProjectManagerOptions

  /**
   * Perform the consolidation and transfer.
   * @param project the `Project` to consolidate.
   */
  process(project: Project): number

  /**
   *
   */
  unbind(eventName: string): void
}

/**
 *
 */
interface SequenceCollection extends Collection<Sequence> {
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
   * @returns 0 if successful
   */
  openProjectItem(itemToOpen: ProjectItem): void

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

  /**
   *
   */
  getPosition(): Time

  /**
   * Returns project item if successful, null if not.
   */
  getProjectItem(): ProjectItem | null;
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
   * @param Time A Time object to compare against.
   * @param timeFormat See {@link VideoTimeDisplay} and {@link AudioTimeDisplay}
   */
  getFormatted(Time: Time, timeFormat: TIME_FORMAT): String

  /**
   * Sets the Time object to a time in seconds, resulting from dividing the numerator by the denominator.
   */
  setSecondsAsFraction(numerator: number, denominator: number): boolean;

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
  static readonly BIN: number

  /**
   *
   */
  static readonly CLIP: number

  /**
   *
   */
  static readonly FILE: number

  /**
   *
   */
  static readonly ROOT: number

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
   *f
   */
  activeSequence: Sequence

  /**
   * The ID of the cloud project.
   */
  readonly cloudProjectlocalID: string;

  /**
   *
   */
  readonly documentID: string

  /**
   * Whether the project is a cloud project.
   */
  readonly isCloudProject: boolean;

  /**
   *
   */
  readonly name: string

  /**
   * Warning: in MacOS Ventura, fetching the project path can throw an error during shutdown
   * Bug ID:  DVAPR-4242199
   *
   * Workaround: put any path checks in a try/catch block if checking may coincide with shutdown
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
   * Adds a property to the project metadata schema.
   * @param name A name for the property to be added.
   * @param label A label for the property to be added.
   * @param type The type of the property. Must be one of the following:
   *             `0` (Integer),
   *             `1` (Real),
   *             `2` (String),
   *             `3` (Boolean)
   * @returns `true` if the property was successfully added, `false` if it failed, or `undefined` if the operation is not supported or an error occurred.
   */
  addPropertyToProjectMetadataSchema(name: string, label: string, type: 0 | 1 | 2 | 3): boolean | undefined

  /**
   *
   */
  bind(eventName: string, function_: any): void

  /**
   *
   */
  closeDocument(saveFirst?: number, promptIfDirty?: number): boolean

  /**
   *
   */
  createNewSequence(sequenceName: string, placeholderID: string): Sequence

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
  consolidateDuplicates(): void

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
  getProjectPanelMetadata(): string

  /**
   * Returns the path to the location to which shared files are to be copied.
   */
  getSharedLocation(): string;

  /**
   * Determines whether copying to a shared location is enabled, for this project.
   */
  isSharedLocationCopyEnabled(): boolean;

  /**
   * Creates a media clip containing bars and tone.
   * @param name Name of the new clip
   * @returns `true` if successful
   */
  newBarsAndTone(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, name: string): boolean;
  newBarsAndTone(): boolean;

  /**
   *
   */
  newSequence(name: string, pathToSequencePreset: string): Sequence;

  /**
   * Controls the enablement of transcode-upon-ingest behavior, for the given project.
   * @param state The desired state.
   */
  setEnableTranscodeOnIngest(state: boolean): boolean;

  /**
   * Changes the specified scratch disk path to a new path
   * @returns 0 if unsuccessful
   */
  setScratchDiskPath(newPath: string, whichScratchDiskPath: ScratchDiskType): boolean;

  /**
   *
   */
  importAEComps(aepPath: String, compsToImport: Array<any>, projectBin: ProjectItem): boolean

  /**
   *
   */
  importAllAEComps(arg1: any, compsToImport: Array<any>, projectBin: ProjectItem): boolean

  /**
   * Imports files into the project.
   * @param arrayOfFilePathsToImport An array of paths to files to import
   * @param suppressUI optional; if true, suppress any warnings, translation reports, or errors.
   * @param projectBin optional; if present, the bin into which to import the new media.
   * @param importAsNumberedStill optiona; if present, interprets the file paths as a series of numbered stills.
   */
  importFiles(
    arrayOfFilePathsToImport: string[],
    suppressUI?: boolean,
    projectBin?: ProjectItem,
    importAsNumberedStill?: boolean,
  ): boolean

  /**
   * Imports sequences from a project.
   * @param projectPath Path to project from which to import sequences.
   * @param sequences An array of sequence IDs to import, from the project.
   */
  importSequences(projectPath: String, sequencesToImport: Array<string>): boolean

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
  setProjectPanelMetadata(newMetadata: string): void

  /**
   *
   * @param newSequenceName 	Name for newly-created sequence
   * @param projectItems 		Array of project items to be added to sequence
   * @param targetBin 		Bin in which new sequence should be created
   */

  createNewSequenceFromClips(
    newSequenceName: string,
    projectItems: Array<ProjectItem>,
    targetBin: ProjectItem,
  ): Sequence

  /**
   *
   */
  getSupportedGraphicsWhiteLuminances(): Array<any>

  /**
   *
   */
  getGraphicsWhiteLuminance(): number

  /**
   *
   * @param newGWL
   */
  setGraphicsWhiteLuminance(newGWL: number): boolean

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
  name: String

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
   * Inserts a clip relative to the time of the last item on that track
   */
  insertClip(clipProjectItem: ProjectItem, time: number): boolean

  /**
   *
   */
  isMuted(): boolean

  /**
   *
   */
  isLocked(): boolean

  /**
   * Overwrites a clip at an absolute time on a track
   */
  overwriteClip(clipProjectItem: ProjectItem, time: number | Time): boolean

  /**
   *
   */
  setMute(arg1?: number): void

  /**
   *
   */
  setLocked(arg1?: number): void

  /**
   *
   */
  setTimeout(eventName: string, function_: any, milliseconds: number): void

  /**
   *
   */
  isTargeted(): boolean

  /**
   *
   */
  setTargeted(isTargeted: boolean, shouldBroadcast: boolean): boolean

  /**
   *
   */
  unbind(eventName: string): void
}

/**
 *
 */

interface ComponentCollection extends Collection<Component> {
  /**Number of items
   *
   */
  readonly numItems: number

}

declare class Component {
  /**
   *
   */
  readonly displayName: string

  /**
	 * 
	 */
	readonly instanceName: string;

  /**
   *
   */
  readonly matchName: string

  /**
   *
   */
  readonly properties: ComponentParamCollection
}

declare class TrackItem {
  /**
   *
   */
  readonly components: ComponentCollection

  /**
   *
   */
  readonly duration: Time

  /**
   *
   */
  readonly nodeId: string

  /**
   *
   */
  end: Time

  /**
   *
   */
  inPoint: Time

  /**
   *
   */
  outPoint: Time

  /**
   *
   */
  readonly matchName: string;

  /**
   *
   */
  readonly mediaType: string

  /**
   *
   */
  name: string

  /**
   * @version 22.0
   */
  disabled: boolean

  /**
   * @version 22.0
   */
  readonly parentTrackIndex: number

  /**
   *
   */
  projectItem: ProjectItem

  /**
   *
   */
  start: Time

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
  getMatchName(): string;

  /**
	 * 
	 */
	isMGT(): boolean;

  /**
   *
   */
  isSelected(): boolean

  /**
   *
   */
  isSpeedReversed(): 0 | 1

  /**
   *
   */
  setSelected(isSelected: boolean, updateUI?: boolean): void

  /**
   *
   */
  isAdjustmentLayer(): boolean

  /**
   *
   */
  remove(rippleEdit: boolean, alignToVideo: boolean): boolean

  /**
   *
   */
  getSpeed(): number

  /**
   *
   */
  getMGTComponent(): Component

  /**
   *
   */
  getColorSpace(): String

  /**
   * Move the track item by the specified time along the track. It will not move any linked media (like linked audio)
   * @param time Can be given as a number in seconds, a string representing ticks, or a {@link Time} object.
   */
  move(time: Time|number|string): boolean

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
  readonly teamProjectsAssetId: string;

  /**
   *
   */
  readonly treePath: string

  /**
   *
   */
  readonly type: number

  /**
   * @See {@link VideoTimeDisplay} and {@link AudioTimeDisplay}
   */
  timeDisplayFormat: TIME_FORMAT

  /**
   *
   */
  videoComponents: () => ComponentCollection | undefined

  /**
   *
   */
  attachProxy(mediaPath: string, isHiRes: number): boolean

  /**
   *
   */
  detachProxy(): boolean

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
  changeMediaPath(mediaPath: string, suppressWarnings: boolean): boolean

  /**
   *
   */
  createBin(name: string): ProjectItem

  /**
   *
   */
  createSmartBin(name: string, query: string): void

  /**
      * 	Returns whether the projectItem represents a sequence.
        @returns true, if projectItem is a sequence.
     */
  isSequence(): boolean

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
  getAudioChannelMapping(): AudioChannelMapping;

  /**
   *
   */
  getOverrideColorSpaceList(): Array<ColorSpace>;

  /**
   *
   */
  isOffline(): boolean;

  /**
   *
   */
  setOffline(): boolean;

  /**
   *
   */
  getFootageInterpretation(): FootageInterpretation;

  /**
   *
   */
  setFootageInterpretation(interpretation: FootageInterpretation): boolean;

  /**
   *
   */
  getOriginalColorSpace(): ColorSpace;

  /**
   *
   */
  getProjectColumnsMetadata(): string;

  /**
   *
   */
  getEmbeddedLUTID(): string;

  /**
   *
   */
  getInputLUTID(): string;

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
  setColorLabel(newColor: number): void

  /**
   *
   */
  setOverridePixelAspectRatio(numerator: number, denominator: number): boolean

  /**
   *
   */
  setOverrideFrameRate(newFrameRate: number): boolean

  /**
   *
   */
  setProjectMetadata(buffer: String, keysToBeUpdated: Array<any>): void

  /**
   *
   */
  setScaleToFrameSize(): void

  /**
   *
   */
  setStartTime(arg1: object): void

  /**
   * Sets the in point of the clip.
   * @param seconds Time of in point.
   */
  setInPoint(seconds: Time | number | string, p2: number): void

  /**
   * Sets the out point of the clip.
   * @param seconds Time of out point.
   */
  setOutPoint(seconds: Time | number | string, p2: number): void

  /**
   * Clears the in point of the clip.
   */
  clearInPoint(): boolean

  /**
   * Clears the out point of the clip.
   */
  clearOutPoint(): boolean

  /**
   *
   */
  setTimeout(eventName: string, function_: any, milliseconds: number): void

  /**
   *
   */
  setXMPMetadata(buffer: String): boolean

  /**
   *
   */
  startTime(): Time

  /**
   *
   * @param newColorSpace value must be available via sequence.workingColorSpaceList
   */
  setOverrideColorSpace(newColorSpace: String): void

  /**
   *
   */
  getColorSpace(): String

  /**
   *
   */
  isMultiCamClip(): boolean

  /**
   *
   */
  isMergedClip(): boolean

  /**
   *
   */
  getInPoint(): Time

  /**
   * @param mediaType Optional: 1 for video only, 2 for audio only, none for all media
   */
  getOutPoint(mediaType?: number): Time

  /**
   *
   */
  unbind(eventName: string): void
}

/**
 *
 */
interface ProjectCollection extends Collection<Project> {
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
interface ProjectItemCollection extends Collection<ProjectItem> {
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
interface TrackCollection extends Collection<Track> {
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
interface TrackItemCollection extends Collection<TrackItem> {
  /**Number of items
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
  static readonly FirstAudioCaptureFolder: string

  /**
   *
   */
  static readonly FirstAudioPreviewFolder: string

  /**
   *
   */
  static readonly FirstAutoSaveFolder: string

  /**
   *
   */
  static readonly FirstCClibrariesFolder: string

  /**
   *
   */
  static readonly FirstCapsuleMediaFolder: string

  /**
   *
   */
  static readonly FirstVideoCaptureFolder: string

  /**
   *
   */
  static readonly FirstVideoPreviewFolder: string

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
interface RemoteProductionCollection extends Collection<RemoteProduction> {
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

type EncoderEvent =
  | "onEncoderJobCanceled"
  | "onEncoderJobQueued"
  | "onEncoderJobComplete"
  | "onEncoderJobError"
  | "onEncoderJobProgress"
  | "onEncoderLaunched"

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
  bind(eventName: EncoderEvent, function_: any): void

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
  getExporters(): Array<any>
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
  lastExportMediaFolder(): String

  /**
   *
   */
  unbind(eventName: string): void
}

/**
 *
 */
interface ComponentParamCollection extends Collection<ComponentParam> {
  /** Number of items */
  readonly numItems: number

  getParamForDisplayName(paramName: string): ComponentParam | null
}

declare class ComponentParam {
  readonly displayName: string
  /**
   * Adds a keyframe at the specified time. You must use the time within the clip, not the sequence.
   * @param time Can be a {@link Time} object, a number for seconds, or a string for ticks
   * @param updateUI If `true`, the UI will be updated after adding the keyframe.
   */
  addKey(time: Time|number|string, updateUI?: boolean): boolean

  areKeyframesSupported(): boolean

  /**
   * Gets the time of the nearest keyframe to the specified time, within the given threshold. You must use the time within the clip, not the sequence.
   * @param timeToCheck Can be a {@link Time} object, a number for seconds, or a string for ticks
   * @param threshold Can be a {@link Time} object, a number for seconds, or a string for ticks
   * @returns A {@link Time} object representing the nearest keyframe, or `undefined` if no keyframe is found within the threshold.
   */
  findNearestKey(timeToCheck: Time|string|number, threshold: Time|string|number): Time | undefined

  findNextKey(timeToCheck: Time|string|number): Time | undefined
  findPreviousKey(timeToCheck: Time|string|number): Time
  getColorValue(): any[]

  /**
   * Get the time of all keys in the component parameter.
   * @returns An array of {@link Time} objects representing the times of all keys, or `undefined` if there are no keys or it's not time-varying.
   */
  getKeys(): Time[] | undefined

  /**
   * Gets the value of the component parameter. It may be a single value or an array of values, depending on the parameter type.
   */
  getValue(): any

  getValueAtKey(time: Time): any
  getValueAtTime(time: Time): any
  isEmpty(): boolean

  isTimeVarying(): boolean
  /**
   * Checks if a key exists at the specified time. You must use the time within the clip, not the sequence.
   * @param time Can be a {@link Time} object, a number for seconds, or a string for ticks
   * @returns `true` if a key exists at the specified time, `false` otherwise.
   */
  keyExistsAtTime(time: Time|number|string): boolean

  removeKey(time: Time): boolean
  removeKeyRange(start: Time, end: Time): boolean
  setColorValue(p0: number, p1: number, p2: number, p3: number, p4: boolean): boolean

  /**
   * Set the interpolation type for a keyframe at the specified time.
   * @param interpolationType See {@link InterpolationType}
   * @param updateUI If `true`, the UI will be updated after setting the interpolation type.
   */
  setInterpolationTypeAtKey(time: Time, interpolationType: InterpolationType, updateUI?: boolean): boolean

  setTimeVarying(setTimeVarying: boolean, p1?: boolean): boolean
  setValue(value: any, updateUI?: boolean | number): boolean

  /**
   * Sets the keyframe value of a the component parameter at a specific time. A keyframe must already exist at that time.
   * Check using {@link areKeyframesSupported()} before calling this method. And a keyframe can be added using {@link addKey()}.
   * @param time 
   * @param value New value to set at the keyframe
   * @param updateUI 1 to update the UI after setting the value, 0 to not update the UI
   */
  setValueAtKey(time: Time, value: any, updateUI?: boolean | number): boolean
}
/**
 *
 */
declare class PrProduction {
  /**
   *
   */
  name: string

  /**
   *
   */
  readonly path: string;

  /**
   *
   */
  projects: ProjectCollection

  /**
   *
   */
  addProject(srcProjectPath: string, destProjectPath: string): boolean;

  /**
   *
   */
  close(): void

  /**
   *
   */
  getLocked(project: Project): Boolean

  /**
   *
   */
  setLocked(project: Project, newLockState: Boolean): void

  /**
   *
   */
  moveToTrash(projectPath: String, suppressUI: Boolean, saveProject: Boolean): Boolean
}

type ApplicationEvent =
  | "onSourceClipSelectedInProjectPanel"
  | "onSequenceActivated"
  | "onActiveSequenceChanged"
  | "onActiveSequenceSelectionChanged"
  | "onActiveSequenceTrackItemAdded"
  | "onActiveSequenceTrackItemRemoved"
  | "onActiveSequenceStructureChanged"
  | "onProjectChanged"
  | "onProjectEndDrop"

/**
 *
 */
declare class Application {
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
  readonly projectManager: ProjectManager

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
  readonly learnPanelContentDirPath: string;

  /**
   *
   */
  readonly learnPanelExampleProjectDirPath: string;

  /**
   *
   */
  readonly metadata: Metadata

  /**
   *
   */
  readonly path: string;

  /**
   * This is the current active project.
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
  bind(eventName: ApplicationEvent, function_: Function): void

  /**
   * Notifies App that Preferences have changed
   * Only valid argument currently is 'BE::PreferencesScratchDisksChanged'
   */
  broadcastPrefsChanged(preferencesThatChanged: string): boolean

  /**
   *
   */
  getEnableProxies(): number

  /**
   * Gets an arra of ProjectItem objects that are currently selected in the Project panel.
   */
  getCurrentProjectViewSelection(): Array<ProjectItem> | undefined;

  /**
   * Checks whether file specified is a doc
   * @param filePath This is the path to be checked
   * @returns true if the document at that path is openable as a PPro project
   */
  isDocument(filePath: string): boolean

  /**
   *
   */
  isDocumentOpen(): boolean

  /**
   *
   */
  openDocument(
    filePath: string,
    bypassConversionDialog?: boolean,
    bypassLocateFile?: boolean,
    bypassWarningDialog?: boolean,
    hideFromMRUList?: boolean,
  ): boolean

  /**
   * @param newValueForTranscodeOnIngest
   * @returns the newly-set state for whether or not PPro transcodes files upon ingest.
   */
  setEnableTranscodeOnIngest(newValueForTranscodeOnIngest: boolean): void

  /**
   *
   */
  openFCPXML(path: string, projPath: string): boolean

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
  getProjectViewIDs(): Array<string>

  /**
   *
   */
  getProjectFromViewID(viewID: String): Project

  /**
   *
   */
  showCursor(enable: boolean): void

  /**
   *
   */
  getProjectViewSelection(viewID: String): Array<ProjectItem>

  /**
   *
   */
  setProjectViewSelection(projectItems: Array<ProjectItem>, viewID: String): void

  /**
   *
   */
  onItemAddedToProjectSuccess: undefined

  /**
   * @returns an array of the names of all available workspaces.
   */
  getWorkspaces(): Array<string>

  /**
   * @param workspaceName Name of workspace to use
   * @returns true if successful
   */
  setWorkspace(workspaceName: string): void

  /**
   *
   * @param eventName event to which to subscribe
   * @param function_ function to be called
   */
  addEventListener(eventName: string, function_: any): void

  /**
   *
   */
  trace(message: string): boolean

  /**
   *
   */
  unbind(eventName: string): void

  /**
   *
   */
  enableQE(): void

  /**
   *
   */
  newProject(projectName: string): boolean

  /**
   *
   */
  production: PrProduction

  /**
   *
   */
  openPrProduction(path: string): PrProduction
}

/**
 *
 */
interface MarkerCollection extends Collection<Marker> {
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
  createMarker(start: number, name: string, duration: number, comments: string): Marker

  /**
   *
   */
  deleteMarker(marker: Marker): boolean

  /**
   *
   */
  getFirstMarker(): Marker | undefined

  /**
   *
   */
  getLastMarker(): Marker | undefined

  /**
   *
   */
  getNextMarker(marker: Marker): Marker | undefined

  /**
   *
   */
  getPrevMarker(marker: Marker): Marker | undefined

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
  getColorByIndex(): number

  /**
   *
   */
  setColorByIndex(index: number): void

  /**
   *
   */
  unbind(eventName: string): void
}

/**
 * FrameRate class
 */
declare class FrameRate {
	/**
	 * Read|Write property to get|set ticks per frame.
	 */
	ticksPerFrame: number;

	/**
	 * Get the number of frames per second.
	 */
	readonly value: number;

	/**
	 * Constructs a FrameRateObject object
	 */
	constructor();

	/**
	 * 
	 */
	static createWithValue(p0: number): FrameRate;
}

/**
 * TimeDisplay class
 */
declare class TimeDisplay {
	/**
	 * Read|Write property to get|set the time display custom frames per second value
	 */
	customFPS: number;

	/**
	 * Read|Write property to get|set the time display type numeric code
   * @see {@link VideoTimeDisplay} and {@link AudioTimeDisplay}
	 */
	type: TIME_FORMAT;

	/**
	 * Constructs a TimeDisplay object
	 */
	constructor();

}

/**
 * TickTime class
 */
declare class TickTime {
	/**
	 * Invalid Tick Time Constant
	 */
	static readonly TIME_INVALID: TickTime;

	/**
	 * Max Tick Time Constant
	 */
	static readonly TIME_MAX: TickTime;

	/**
	 * Min Tick Time Constant
	 */
	static readonly TIME_MIN: TickTime;

	/**
	 * One Hour Tick Time Constant
	 */
	static readonly TIME_ONE_HOUR: TickTime;

	/**
	 * One Second Tick Time Constant
	 */
	static readonly TIME_ONE_MINUTE: TickTime;

	/**
	 * One Second Tick Time Constant
	 */
	static readonly TIME_ONE_SECOND: TickTime;

	/**
	 * Zero Tick Time Constant
	 */
	static readonly TIME_ZERO: TickTime;

	/**
	 * Get the TickTime in seconds
	 */
	readonly seconds: number;

	/**
	 * Get the TickTime in ticks as a string
	 */
	readonly ticks: string;

	/**
	 * Get the TickTime in ticks as a number
	 */
	readonly ticksNumber: number;

	/**
	 * Constructs a TickTime object
	 */
	constructor();

	/**
	 * 
	 * @param tickTime Add another TickTime to this one and return it. This TickTime is not modified.
	 */
	add(tickTime: TickTime): TickTime;

	/**
	 * 
	 * @param FrameRate alignToFrame will return a TickTime that is aligned to the nearest frame boundary less than the given time for a given frame rate by rounding any fractional portion.
	 */
	alignToFrame(FrameRate: object): TickTime;

	/**
	 * 
	 * @param FrameRate AlignToNearestFrame will return a TickTime that is aligned to the nearest frame boundary greater than or less than the given time for a given frame rate by rounding any fractional portion.
	 */
	alignToNearestFrame(FrameRate: object): TickTime;

	/**
	 * 
	 * @param frameRate Constructs a TickTime object with a frame and a frame rate.
	 */
	static createWithFrameAndFrameRate(frameCount: number, frameRate: FrameRate): TickTime;

	/**
	 * 
	 * @param seconds Constructs a TickTime object with seconds.
	 */
	static createWithSeconds(seconds: number): TickTime;

	/**
	 * 
	 * @param ticks Constructs a TickTime object with ticks as a string.
	 */
	static createWithTicks(ticks: string): TickTime;

	/**
	 * 
	 * @param ticksNumber Constructs a TickTime object with ticks as a number.
	 */
	static createWithTicksNumber(ticksNumber: number): TickTime;

	/**
	 * 
	 * @param divisor Divide this TickTime by a divisor and return it. In case of a division by zero TIME_INVALID is returned. This TickTime is not modified.
	 */
	divide(divisor: number): TickTime;

	/**
	 * 
	 * @param TickTime Returns true if the given TickTime is equal to the TickTime object
	 */
	equals(TickTime: object): boolean;

	/**
	 * 
	 * @param factor Multiply this TickTime with a factor and return it. This TickTime is not modified.
	 */
	multiply(factor: number): TickTime;

	/**
	 * 
	 * @param tickTime Subtract another TickTime from this one and return it. This TickTime is not modified.
	 */
	subtract(tickTime: TickTime): TickTime;

	/**
	 * 
	 * @param TimeDisplay Convert a TickTime to a string using the current display format
	 */
	static timeToTimecode(TickTime: TickTime, FrameRate: object, TimeDisplay: TimeDisplay): string;

	/**
	 * 
	 * @param TimeDisplay Convert a timecode string to a TickTime using the current display format
	 */
	static timecodeToTime(TimecodeString: string, FrameRate: object, TimeDisplay: TimeDisplay): TickTime;

	/**
	 * 
	 * @param frameRate Convert the TickTime to a frame number with respect to the provided frame rate.
	 */
	toFrame(frameRate: FrameRate): number;

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

declare const document: Document

interface SystemCompatibilityReport {
  /**
   * @param fullOutputPath The path and filename at which to write the report.
   */
  CreateReport(fullOutputPath: string): void
}

declare const SystemCompatibilityReport: SystemCompatibilityReport