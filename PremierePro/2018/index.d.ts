/// <reference path="../../global/index.d.ts" />

/**
 * 
 */
declare class Sequence {
	/**
	 * 
	 */
	readonly audioTracks: TrackCollection;

	/**
	 * 
	 */
	readonly end: string;

	/**
	 * 
	 */
	readonly frameSizeHorizontal: number;

	/**
	 * 
	 */
	readonly frameSizeVertical: number;

	/**
	 * 
	 */
	readonly id: number;

	/**
	 * 
	 */
	readonly markers: MarkerCollection;

	/**
	 * 
	 */
	name: string;

	/**
	 * 
	 */
	readonly projectItem: ProjectItem;

	/**
	 * 
	 */
	readonly sequenceID: string;

	/**
	 * 
	 */
	readonly timebase: string;

	/**
	 * 
	 */
	readonly videoTracks: TrackCollection;

	/**
	 * 
	 */
	readonly zeroPoint: string;

	/**
	 * 
	 * @param propertyID 
	 * @param propertyValue 
	 */
	attachCustomProperty(propertyID: string, propertyValue: string): void;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 */
	bind(eventName: string, function: any): void;

	/**
	 * 
	 */
	clone(): void;

	/**
	 * 
	 * @param exportPath 
	 * @param suppressUI 
	 */
	exportAsFinalCutProXML(exportPath: string, suppressUI: number): boolean;

	/**
	 * 
	 * @param outputFilePath 
	 * @param presetPath 
	 * @param workAreaType 
	 */
	exportAsMediaDirect(outputFilePath: string, presetPath: string, workAreaType?: number): string;

	/**
	 * 
	 * @param exportPath 
	 */
	exportAsProject(exportPath: string): void;

	/**
	 * 
	 * @param presetFilePath 
	 */
	getExportFileExtension(presetFilePath: string): string;

	/**
	 * 
	 */
	getInPoint(): string;

	/**
	 * 
	 */
	getOutPoint(): string;

	/**
	 * 
	 */
	getPlayerPosition(): Time;

	/**
	 * 
	 * @param seconds 
	 */
	setInPoint(seconds: number): void;

	/**
	 * 
	 * @param seconds 
	 */
	setOutPoint(seconds: number): void;

	/**
	 * 
	 * @param pos 
	 */
	setPlayerPosition(pos: string): void;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 * @param milliseconds 
	 */
	setTimeout(eventName: string, function: any, milliseconds: number): void;

	/**
	 * 
	 * @param ticks 
	 */
	setZeroPoint(ticks: string): void;

	/**
	 * 
	 * @param eventName 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class SequenceCollection {
	/**
	 * 
	 */
	readonly numSequences: number;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 */
	bind(eventName: string, function: any): void;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 * @param milliseconds 
	 */
	setTimeout(eventName: string, function: any, milliseconds: number): void;

	/**
	 * 
	 * @param eventName 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class Metadata {
	/**
	 * 
	 */
	readonly getMetadata: string;

	/**
	 * 
	 */
	addMarker(): void;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 */
	bind(eventName: string, function: any): void;

	/**
	 * 
	 */
	deleteMarker(): void;

	/**
	 * 
	 */
	setMarkerData(): void;

	/**
	 * 
	 */
	setMetadataValue(): void;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 * @param milliseconds 
	 */
	setTimeout(eventName: string, function: any, milliseconds: number): void;

	/**
	 * 
	 * @param eventName 
	 */
	unbind(eventName: string): void;

	/**
	 * 
	 */
	updateMarker(): void;

}

/**
 * 
 */
declare class Anywhere {
	/**
	 * 
	 * @param eventName 
	 * @param function 
	 */
	bind(eventName: string, function: any): void;

	/**
	 * 
	 */
	getAuthenticationToken(): string;

	/**
	 * 
	 */
	getCurrentEditingSessionActiveSequenceURL(): string;

	/**
	 * 
	 */
	getCurrentEditingSessionSelectionURL(): string;

	/**
	 * 
	 */
	getCurrentEditingSessionURL(): string;

	/**
	 * 
	 */
	isProductionOpen(): boolean;

	/**
	 * 
	 */
	listProductions(): RemoteProductionCollection;

	/**
	 * 
	 * @param inProductionURL 
	 */
	openProduction(inProductionURL: string): boolean;

	/**
	 * 
	 * @param inAuthToken 
	 * @param inEmail 
	 */
	setAuthenticationToken(inAuthToken: string, inEmail: string): boolean;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 * @param milliseconds 
	 */
	setTimeout(eventName: string, function: any, milliseconds: number): void;

	/**
	 * 
	 * @param eventName 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class CsxsResourceCentral {
	/**
	 * 
	 * @param eventName 
	 * @param function 
	 */
	bind(eventName: string, function: any): void;

	/**
	 * 
	 */
	getBrightness(): string;

	/**
	 * 
	 * @param urlString 
	 */
	openURL(urlString: string): void;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 * @param milliseconds 
	 */
	setTimeout(eventName: string, function: any, milliseconds: number): void;

	/**
	 * 
	 * @param eventName 
	 */
	unbind(eventName: string): void;

	/**
	 * 
	 * @param token 
	 */
	validateClient(token: string): boolean;

}

/**
 * 
 */
declare class SourceMonitor {
	/**
	 * 
	 * @param eventName 
	 * @param function 
	 */
	bind(eventName: string, function: any): void;

	/**
	 * 
	 */
	closeAllClips(): void;

	/**
	 * 
	 */
	closeClip(): void;

	/**
	 * 
	 * @param filePath 
	 */
	openFilePath(filePath: string): boolean;

	/**
	 * 
	 * @param speed 
	 */
	play(speed?: number): void;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 * @param milliseconds 
	 */
	setTimeout(eventName: string, function: any, milliseconds: number): void;

	/**
	 * 
	 * @param eventName 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class Time {
	/**
	 * 
	 */
	seconds: number;

	/**
	 * 
	 */
	ticks: string;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 */
	bind(eventName: string, function: any): void;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 * @param milliseconds 
	 */
	setTimeout(eventName: string, function: any, milliseconds: number): void;

	/**
	 * 
	 * @param eventName 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class ProjectItemType {
	/**
	 * 
	 */
	readonly BIN: number;

	/**
	 * 
	 */
	readonly CLIP: number;

	/**
	 * 
	 */
	readonly FILE: number;

	/**
	 * 
	 */
	readonly ROOT: number;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 */
	bind(eventName: string, function: any): void;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 * @param milliseconds 
	 */
	setTimeout(eventName: string, function: any, milliseconds: number): void;

	/**
	 * 
	 * @param eventName 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class Project {
	/**
	 * 
	 */
	activeSequence: Sequence;

	/**
	 * 
	 */
	readonly documentID: string;

	/**
	 * 
	 */
	readonly name: string;

	/**
	 * 
	 */
	readonly path: string;

	/**
	 * 
	 */
	readonly rootItem: ProjectItem;

	/**
	 * 
	 */
	readonly sequences: SequenceCollection;

	/**
	 * 
	 * @param name 
	 * @param label 
	 * @param type 
	 */
	addPropertyToProjectMetadataSchema(name: string, label: string, type: number): boolean;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 */
	bind(eventName: string, function: any): void;

	/**
	 * 
	 */
	closeDocument(): boolean;

	/**
	 * 
	 * @param sequenceName 
	 * @param placeholderID 
	 */
	createNewSequence(sequenceName: string, placeholderID: string): void;

	/**
	 * 
	 */
	deleteAsset(): void;

	/**
	 * 
	 * @param sequence 
	 */
	deleteSequence(sequence: Sequence): boolean;

	/**
	 * 
	 * @param sequence 
	 * @param filePath 
	 * @param mixDownVideo 
	 * @param explodeToMono 
	 * @param sampleRate 
	 * @param bitsPerSample 
	 * @param embedAudio 
	 * @param audioFileFormat 
	 * @param trimSources 
	 * @param handleFrames 
	 */
	exportAAF(sequence: Sequence, filePath: string, mixDownVideo: number, explodeToMono: number, sampleRate: number, bitsPerSample: number, embedAudio: number, audioFileFormat: number, trimSources: number, handleFrames: number): number;

	/**
	 * 
	 * @param exportPath 
	 * @param suppressUI 
	 */
	exportFinalCutProXML(exportPath: string, suppressUI: number): boolean;

	/**
	 * 
	 * @param sequence 
	 * @param filePath 
	 * @param OMFTitle 
	 * @param sampleRate 
	 * @param bitsPerSample 
	 * @param audioEncapsulated 
	 * @param audioFileFormat 
	 * @param trimAudioFiles 
	 * @param handleFrames 
	 * @param includePan 
	 */
	exportOMF(sequence: Sequence, filePath: string, OMFTitle: string, sampleRate: number, bitsPerSample: number, audioEncapsulated: number, audioFileFormat: number, trimAudioFiles: number, handleFrames: number, includePan: number): number;

	/**
	 * 
	 * @param exportControllerName 
	 */
	exportTimeline(exportControllerName: string): number;

	/**
	 * 
	 */
	getInsertionBin(): ProjectItem;

	/**
	 * 
	 */
	getProjectPanelMetadata(): void;

	/**
	 * 
	 * @param arg1 
	 */
	importAEComps(arg1: any): boolean;

	/**
	 * 
	 * @param arg1 
	 */
	importAllAEComps(arg1: any): boolean;

	/**
	 * 
	 * @param arg1 
	 */
	importFiles(arg1: any): boolean;

	/**
	 * 
	 * @param arg1 
	 */
	importSequences(arg1: any): boolean;

	/**
	 * 
	 * @param sequenceID 
	 */
	openSequence(sequenceID: string): boolean;

	/**
	 * 
	 * @param pausedOrNot 
	 */
	pauseGrowing(pausedOrNot: number): boolean;

	/**
	 * 
	 * @param arg1 
	 */
	placeAsset(arg1: any): boolean;

	/**
	 * 
	 */
	save(): void;

	/**
	 * 
	 * @param saveAsPath 
	 */
	saveAs(saveAsPath: string): boolean;

	/**
	 * 
	 */
	setProjectPanelMetadata(): void;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 * @param milliseconds 
	 */
	setTimeout(eventName: string, function: any, milliseconds: number): void;

	/**
	 * 
	 * @param eventName 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class Track {
	/**
	 * 
	 */
	readonly clips: TrackItemCollection;

	/**
	 * 
	 */
	readonly id: number;

	/**
	 * 
	 */
	readonly mediaType: string;

	/**
	 * 
	 */
	readonly transitions: TrackItemCollection;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 */
	bind(eventName: string, function: any): void;

	/**
	 * 
	 * @param clipProjectItem 
	 * @param time 
	 */
	insertClip(clipProjectItem: ProjectItem, time: Object): void;

	/**
	 * 
	 */
	isMuted(): boolean;

	/**
	 * 
	 * @param clipProjectItem 
	 * @param time 
	 */
	overwriteClip(clipProjectItem: ProjectItem, time: Object): void;

	/**
	 * 
	 * @param arg1 
	 */
	setMute(arg1?: number): void;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 * @param milliseconds 
	 */
	setTimeout(eventName: string, function: any, milliseconds: number): void;

	/**
	 * 
	 * @param eventName 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class TrackItem {
	/**
	 * 
	 */
	readonly components: ComponentCollection;

	/**
	 * 
	 */
	readonly duration: Time;

	/**
	 * 
	 */
	readonly end: Time;

	/**
	 * 
	 */
	readonly inPoint: Time;

	/**
	 * 
	 */
	readonly mediaType: string;

	/**
	 * 
	 */
	name: string;

	/**
	 * 
	 */
	readonly outPoint: Time;

	/**
	 * 
	 */
	projectItem: ProjectItem;

	/**
	 * 
	 */
	readonly start: Time;

	/**
	 * 
	 */
	readonly type: number;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 */
	bind(eventName: string, function: any): void;

	/**
	 * 
	 */
	getLinkedItems(): TrackItemCollection;

	/**
	 * 
	 */
	isSelected(): boolean;

	/**
	 * 
	 * @param isSelected 
	 * @param updateUI 
	 */
	setSelected(isSelected: number, updateUI?: number): void;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 * @param milliseconds 
	 */
	setTimeout(eventName: string, function: any, milliseconds: number): void;

	/**
	 * 
	 * @param eventName 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class ProjectItem {
	/**
	 * 
	 */
	readonly children: ProjectItemCollection;

	/**
	 * 
	 */
	name: string;

	/**
	 * 
	 */
	readonly nodeId: string;

	/**
	 * 
	 */
	readonly treePath: string;

	/**
	 * 
	 */
	readonly type: number;

	/**
	 * 
	 */
	readonly videoComponents: ComponentCollection;

	/**
	 * 
	 * @param mediaPath 
	 * @param isHiRes 
	 */
	attachProxy(mediaPath: string, isHiRes: number): boolean;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 */
	bind(eventName: string, function: any): void;

	/**
	 * 
	 */
	canChangeMediaPath(): boolean;

	/**
	 * 
	 */
	canProxy(): boolean;

	/**
	 * 
	 * @param mediaPath 
	 */
	changeMediaPath(mediaPath: string): boolean;

	/**
	 * 
	 * @param name 
	 */
	createBin(name: string): void;

	/**
	 * 
	 * @param name 
	 * @param query 
	 */
	createSmartBin(name: string, query: string): void;

	/**
	 * 
	 * @param name 
	 * @param startTime 
	 * @param endTime 
	 * @param hasHardBoundaries 
	 * @param takeVideo 
	 * @param takeAudio 
	 */
	createSubClip(name: string, startTime: Object, endTime: Object, hasHardBoundaries: number, takeVideo?: number, takeAudio?: number): ProjectItem;

	/**
	 * 
	 */
	deleteBin(): void;

	/**
	 * 
	 * @param matchString 
	 * @param ignoreSubclips 
	 */
	findItemsMatchingMediaPath(matchString: string, ignoreSubclips?: number): void;

	/**
	 * 
	 */
	getColorLabel(): number;

	/**
	 * 
	 */
	getMarkers(): MarkerCollection;

	/**
	 * 
	 */
	getMediaPath(): string;

	/**
	 * 
	 */
	getProjectMetadata(): string;

	/**
	 * 
	 */
	getProxyPath(): string;

	/**
	 * 
	 */
	getXMPMetadata(): string;

	/**
	 * 
	 */
	hasProxy(): boolean;

	/**
	 * 
	 * @param destination 
	 */
	moveBin(destination: ProjectItem): void;

	/**
	 * 
	 */
	refreshMedia(): string;

	/**
	 * 
	 * @param name 
	 */
	renameBin(name: string): boolean;

	/**
	 * 
	 */
	select(): void;

	/**
	 * 
	 */
	setColorLabel(): void;

	/**
	 * 
	 * @param numerator 
	 * @param denominator 
	 */
	setOverridePixelAspectRatio(numerator: number, denominator: number): boolean;

	/**
	 * 
	 * @param buffer 
	 */
	setProjectMetadata(buffer: string): void;

	/**
	 * 
	 */
	setScaleToFrameSize(): void;

	/**
	 * 
	 * @param arg1 
	 */
	setStartTime(arg1: Object): void;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 * @param milliseconds 
	 */
	setTimeout(eventName: string, function: any, milliseconds: number): void;

	/**
	 * 
	 * @param buffer 
	 */
	setXMPMetadata(buffer: string): boolean;

	/**
	 * 
	 */
	startTime(): Time;

	/**
	 * 
	 * @param eventName 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class ProjectCollection {
	/**
	 * 
	 */
	readonly numProjects: number;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 */
	bind(eventName: string, function: any): void;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 * @param milliseconds 
	 */
	setTimeout(eventName: string, function: any, milliseconds: number): void;

	/**
	 * 
	 * @param eventName 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class ProjectItemCollection {
	/**
	 * 
	 */
	readonly numItems: number;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 */
	bind(eventName: string, function: any): void;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 * @param milliseconds 
	 */
	setTimeout(eventName: string, function: any, milliseconds: number): void;

	/**
	 * 
	 * @param eventName 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class TrackCollection {
	/**
	 * 
	 */
	readonly numTracks: number;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 */
	bind(eventName: string, function: any): void;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 * @param milliseconds 
	 */
	setTimeout(eventName: string, function: any, milliseconds: number): void;

	/**
	 * 
	 * @param eventName 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class TrackItemCollection {
	/**
	 * 
	 */
	readonly numItems: number;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 */
	bind(eventName: string, function: any): void;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 * @param milliseconds 
	 */
	setTimeout(eventName: string, function: any, milliseconds: number): void;

	/**
	 * 
	 * @param eventName 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class ScratchDiskType {
	/**
	 * 
	 */
	readonly FirstAudioCaptureFolder: string;

	/**
	 * 
	 */
	readonly FirstAudioPreviewFolder: string;

	/**
	 * 
	 */
	readonly FirstAutoSaveFolder: string;

	/**
	 * 
	 */
	readonly FirstCClibrariesFolder: string;

	/**
	 * 
	 */
	readonly FirstCapsuleMediaFolder: string;

	/**
	 * 
	 */
	readonly FirstVideoCaptureFolder: string;

	/**
	 * 
	 */
	readonly FirstVideoPreviewFolder: string;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 */
	bind(eventName: string, function: any): void;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 * @param milliseconds 
	 */
	setTimeout(eventName: string, function: any, milliseconds: number): void;

	/**
	 * 
	 * @param eventName 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class Csxs {
	/**
	 * 
	 */
	readonly resourceCentral: CsxsResourceCentral;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 */
	bind(eventName: string, function: any): void;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 * @param milliseconds 
	 */
	setTimeout(eventName: string, function: any, milliseconds: number): void;

	/**
	 * 
	 * @param eventName 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class RemoteProductionCollection {
	/**
	 * 
	 */
	readonly numProductions: number;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 */
	bind(eventName: string, function: any): void;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 * @param milliseconds 
	 */
	setTimeout(eventName: string, function: any, milliseconds: number): void;

	/**
	 * 
	 * @param eventName 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class RemoteProduction {
	/**
	 * 
	 */
	readonly description: string;

	/**
	 * 
	 */
	readonly name: string;

	/**
	 * 
	 */
	readonly url: string;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 */
	bind(eventName: string, function: any): void;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 * @param milliseconds 
	 */
	setTimeout(eventName: string, function: any, milliseconds: number): void;

	/**
	 * 
	 * @param eventName 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class Encoder {
	/**
	 * 
	 */
	readonly ENCODE_ENTIRE: number;

	/**
	 * 
	 */
	readonly ENCODE_IN_TO_OUT: number;

	/**
	 * 
	 */
	readonly ENCODE_WORKAREA: number;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 */
	bind(eventName: string, function: any): void;

	/**
	 * 
	 * @param inputFilePath 
	 * @param outputFilePath 
	 * @param presetPath 
	 * @param removeOnCompletion 
	 * @param startTime 
	 * @param stopTime 
	 */
	encodeFile(inputFilePath: string, outputFilePath: string, presetPath: string, removeOnCompletion?: number, startTime?: Object, stopTime?: Object): string;

	/**
	 * 
	 * @param projectItem 
	 * @param outputFilePath 
	 * @param presetPath 
	 * @param WorkAreaType 
	 * @param removeOnCompletion 
	 */
	encodeProjectItem(projectItem: ProjectItem, outputFilePath: string, presetPath: string, WorkAreaType?: number, removeOnCompletion?: number): string;

	/**
	 * 
	 * @param sequence 
	 * @param outputFilePath 
	 * @param presetPath 
	 * @param WorkAreaType 
	 * @param removeOnCompletion 
	 */
	encodeSequence(sequence: Sequence, outputFilePath: string, presetPath: string, WorkAreaType?: number, removeOnCompletion?: number): string;

	/**
	 * 
	 */
	launchEncoder(): boolean;

	/**
	 * 
	 * @param enable 
	 */
	setEmbeddedXMPEnabled(enable: number): void;

	/**
	 * 
	 * @param enable 
	 */
	setSidecarXMPEnabled(enable: number): void;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 * @param milliseconds 
	 */
	setTimeout(eventName: string, function: any, milliseconds: number): void;

	/**
	 * 
	 */
	startBatch(): boolean;

	/**
	 * 
	 * @param eventName 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class Properties {
	/**
	 * 
	 * @param eventName 
	 * @param function 
	 */
	bind(eventName: string, function: any): void;

	/**
	 * 
	 * @param propertyKey 
	 */
	clearProperty(propertyKey: string): void;

	/**
	 * 
	 * @param propertyKey 
	 */
	doesPropertyExist(propertyKey: string): boolean;

	/**
	 * 
	 * @param propertyKey 
	 */
	getProperty(propertyKey: string): void;

	/**
	 * 
	 * @param propertyKey 
	 */
	isPropertyReadOnly(propertyKey: string): boolean;

	/**
	 * 
	 * @param propertyKey 
	 */
	setProperty(propertyKey: string): void;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 * @param milliseconds 
	 */
	setTimeout(eventName: string, function: any, milliseconds: number): void;

	/**
	 * 
	 * @param eventName 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class App {
	/**
	 * 
	 */
	readonly anywhere: Anywhere;

	/**
	 * 
	 */
	readonly build: string;

	/**
	 * 
	 */
	readonly csxs: Csxs;

	/**
	 * 
	 */
	readonly encoder: Encoder;

	/**
	 * 
	 */
	readonly getAppPrefPath: string;

	/**
	 * 
	 */
	readonly getAppSystemPrefPath: string;

	/**
	 * 
	 */
	readonly getPProPrefPath: string;

	/**
	 * 
	 */
	readonly getPProSystemPrefPath: string;

	/**
	 * 
	 */
	readonly metadata: Metadata;

	/**
	 * 
	 */
	project: Project;

	/**
	 * 
	 */
	readonly projects: ProjectCollection;

	/**
	 * 
	 */
	readonly properties: Properties;

	/**
	 * 
	 */
	readonly sourceMonitor: SourceMonitor;

	/**
	 * 
	 */
	readonly userGuid: string;

	/**
	 * 
	 */
	readonly version: string;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 */
	bind(eventName: string, function: any): void;

	/**
	 * 
	 * @param preferencesThatChanged 
	 */
	broadcastPrefsChanged(preferencesThatChanged: string): boolean;

	/**
	 * 
	 */
	getEnableProxies(): number;

	/**
	 * 
	 * @param filePath 
	 */
	isDocument(filePath: string): boolean;

	/**
	 * 
	 */
	isDocumentOpen(): boolean;

	/**
	 * 
	 */
	openDocument(): boolean;

	/**
	 * 
	 */
	openFCPXML(): boolean;

	/**
	 * 
	 */
	quit(): void;

	/**
	 * 
	 * @param enable 
	 */
	setEnableProxies(enable: number): boolean;

	/**
	 * 
	 * @param extensionID 
	 * @param state 
	 */
	setExtensionPersistent(extensionID: string, state?: number): void;

	/**
	 * 
	 * @param value 
	 * @param eventType 
	 */
	setSDKEventMessage(value: string, eventType: string): boolean;

	/**
	 * 
	 * @param value 
	 * @param type 
	 */
	setScratchDiskPath(value: string, type: string): boolean;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 * @param milliseconds 
	 */
	setTimeout(eventName: string, function: any, milliseconds: number): void;

	/**
	 * 
	 * @param enable 
	 */
	showCursor(enable: boolean): void;

	/**
	 * 
	 * @param message 
	 */
	trace(message: string): void;

	/**
	 * 
	 * @param eventName 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class MarkerCollection {
	/**
	 * 
	 */
	readonly numMarkers: number;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 */
	bind(eventName: string, function: any): void;

	/**
	 * 
	 * @param time 
	 */
	createMarker(time: number): Marker;

	/**
	 * 
	 * @param marker 
	 */
	deleteMarker(marker: Marker): void;

	/**
	 * 
	 */
	getFirstMarker(): Marker;

	/**
	 * 
	 */
	getLastMarker(): Marker;

	/**
	 * 
	 * @param marker 
	 */
	getNextMarker(marker: Marker): Marker;

	/**
	 * 
	 * @param marker 
	 */
	getPrevMarker(marker: Marker): Marker;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 * @param milliseconds 
	 */
	setTimeout(eventName: string, function: any, milliseconds: number): void;

	/**
	 * 
	 * @param eventName 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class Marker {
	/**
	 * 
	 */
	comments: string;

	/**
	 * 
	 */
	end: Time;

	/**
	 * 
	 */
	readonly guid: string;

	/**
	 * 
	 */
	name: string;

	/**
	 * 
	 */
	start: Time;

	/**
	 * 
	 */
	type: string;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 */
	bind(eventName: string, function: any): void;

	/**
	 * 
	 */
	getWebLinkFrameTarget(): string;

	/**
	 * 
	 */
	getWebLinkURL(): string;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 * @param milliseconds 
	 */
	setTimeout(eventName: string, function: any, milliseconds: number): void;

	/**
	 * 
	 */
	setTypeAsChapter(): void;

	/**
	 * 
	 */
	setTypeAsComment(): void;

	/**
	 * 
	 */
	setTypeAsSegmentation(): void;

	/**
	 * 
	 * @param url 
	 * @param frameTarget 
	 */
	setTypeAsWebLink(url: string, frameTarget: string): void;

	/**
	 * 
	 * @param eventName 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class Document {
	/**
	 * 
	 * @param eventName 
	 * @param function 
	 */
	bind(eventName: string, function: any): void;

	/**
	 * 
	 */
	getFilePath(): string;

	/**
	 * 
	 * @param arg1 
	 */
	importFiles(arg1: any): boolean;

	/**
	 * 
	 * @param eventName 
	 * @param function 
	 * @param milliseconds 
	 */
	setTimeout(eventName: string, function: any, milliseconds: number): void;

	/**
	 * 
	 * @param eventName 
	 */
	unbind(eventName: string): void;

}
