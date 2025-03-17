/// <reference path="../../shared/global.d.ts" />

// App

interface App {
  readonly buildNumber: string
  readonly launchTime: number
  assertToConsole(): boolean
  bringToFront(): boolean
  cancelTask(p0: number): boolean
  getBatchEncoder(): object
  getBuildNumber(): string
  getEncoderHost(): object
  getExporter(): object
  getFrontend(): FrontEnd
  getScriptEngineName(): string
  getWatchFolder(): object
  isBlackVideo(p0: string): boolean
  isSilentAudio(p0: string): boolean
  quit(): boolean
  renderFrameSequence(p0: string, p1: string, p2: boolean, p3: number): boolean
  scheduleTask(p0: string, p1: number, p2: boolean): number
  simulateUIEvents(p0: string): boolean
  wait(p0: number): boolean
  write(p0: string): boolean
  addEventListener(): any
  removeEventListener(): any
  dispatchEvent(): any
}

declare interface FrontEnd {
  /**
   * Adds the first comp of an After Effects project resp. the first sequence of a Premiere Pro project to the batch.
   * @param compPath Path to e.g. an After Effects project or Premiere Pro project. The first comp resp. sequence will be used.
   * @param presetPath Optional. If presetPath is empty, then the default preset will be applied.
   * @param outputPath Optional. If outputPath is empty, then the output file name will be generated based on the comp path.
   * @returns Returns true if the item was added to the batch, false otherwise.
   */
  addCompToBatch(compPath: string, presetPath?: string, outputPath?: string): boolean

  /**
   * Adds e.g. an After Effects comp or Premiere Pro sequence to the batch and returns an EncoderWrapper object.
   * @param projectPath E.g. Premiere Pro or After Effects project path.
   * @param format E.g. ‘H.264’
   * @param presetPath Either a preset or a format input must be present. If no preset is used then the default preset of the specified format will be applied.
   * @param guid The unique id of e.g. a Premiere Pro sequence or After Effects composition.
   * @param outputPath Optional. If outputPath is empty, then the output file name will be generated based on the project path.
   * @returns Returns an EncoderWrapper object.
   */
  addDLToBatch(
    projectPath: string,
    format: string,
    presetPath: string,
    guid: string,
    outputPath?: string,
  ): EncoderWrapper

  /**
   * Adds an image sequence to the batch. The images will be sorted in alphabetical order.
   * @param containingFolder The folder containing image files.
   * @param imagePath All images from the containing folder with the same extension will be added to the output file.
   * @param presetPath Optional. If presetPath is empty, then the default preset will be applied.
   * @param outputPath Optional. If outputPath is empty, then the output file name will be generated based on the containingFolder name.
   * @returns Returns true if the item was added to the batch, false otherwise.
   */
  addFileSequenceToBatch(
    containingFolder: string,
    imagePath: string,
    presetPath?: string,
    outputPath?: string,
  ): boolean

  /**
   * Adds a file to the batch and returns an EncoderWrapper object.
   * @param filePath File path of a media source.
   * @param format E.g. ‘H.264’
   * @param presetPath Either a preset or a format input must be present. If no preset is used then the default preset of the specified format will be applied.
   * @param outputPath Optional. If outputPath is empty, then the output file name will be generated based on the file path.
   * @returns Returns an EncoderWrapper object.
   */
  addFileToBatch(
    filePath: string,
    format: string,
    presetPath: string,
    outputPath?: string,
  ): EncoderWrapper

  /**
   * Adds a media source to the batch.
   * @param sourcePath Path of the media source.
   * @returns Returns true if the item was added to the batch, false otherwise.
   */
  addItemToBatch(sourcePath: string): boolean

  /**
   * Adds a team project item to the batch and returns an EncoderWrapper object.
   * @param projectsURL Team Projects URL or Team Projects Snap. You can create a tp2snap file in PPro for a ProjectItem via the scripting API saveProjectSnapshot.
   * @param format E.g. ‘H.264’
   * @param presetPath Either a preset or a format input must be present. If no preset is used then the default preset of the specified format will be applied.
   * @param outputPath Optional. If outputPath is empty, then the output file name will be generated based on the project path.
   * @returns Returns an EncoderWrapper object.
   */
  addTeamProjectsItemToBatch(
    projectsURL: string,
    format: string,
    presetPath: string,
    outputPath: string,
  ): EncoderWrapper

  /**
   * Adds Final Cut Pro xml to the batch.
   * @param xmlPath Path to a Final Cut Pro xml file.
   * @param presetPath Either a preset or a format input must be present. If no preset is used then the default preset of the specified format will be applied.
   * @param outputFolderPath Optional. If outputFolderPath is empty, then the output file name will be generated based on the XML file path.
   * @returns Returns true if the item was added to the batch, false otherwise.
   */
  addXMLToBatch(xmlPath: string, presetPath: string, outputFolderPath?: string): boolean

  /**
   * Returns the list of GUIDs for objects (sequences/comps) at the top/root level.
   * @param projectPath E.g. Premiere Pro or After Effects project path.
   * @returns Returns an array of strings that represent the list of GUIDs.
   */
  getDLItemsAtRoot(projectPath: string): string[]

  /**
   * Adds a batch item for the given media and returns an EncoderWrapper object.
   * @param mediaPaths Semicolon delimited list of media paths.
   * @param format E.g. ‘H.264’
   * @param presetPath Either a preset or a format input must be present. If no preset is used then the default preset of the specified format will be applied.
   * @param outputPath The output path for the encoded media.
   * @returns Returns an EncoderWrapper object.
   */
  stitchFiles(
    mediaPaths: string,
    format: string,
    presetPath: string,
    outputPath: string,
  ): EncoderWrapper

  /**
   * Stops the batch.
   * @returns Returns true if the batch was stopped, false otherwise.
   */
  stopBatch(): boolean

  addEventListener(
    type: "onBatchItemCreationFailed",
    listener: (eventObj: AMEBatchItemCreationFailedEvent) => void,
    useCapture?: boolean
  ): void;
  removeEventListener(): any
  dispatchEvent(): any
}

// app specific ---------------------- //
