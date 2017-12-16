/// <reference path="../../shared/global.d.ts" />
/// <reference path="../../shared/ScriptUI.d.ts" />

/**
 * The Metadata class provides access to document metadata
 */
declare class Metadata {
	/**
	 * XMP metatdata string of the according document
	 */
	xmp: string;

}

/**
 * DynamicLink provides access to DynamicLink objects.
 */
declare class DynamicLink {
	/**
	 * AMEServer object identifier
	 */
	static readonly AMEServer: string;

	/**
	 * 
	 */
	static __(): any;

	/**
	 * 
	 * @param name Create connection to the named DynaicLink object Create Connection.
	 */
	static createConnection(name: string): object;

}

/**
 * An event to inform about connection status changes
 */
declare class DynamicLinkConnectionEvent {
	/**
	 * An event with this type is propagated if the connection state to a DynamikLink server object has changed
	 * Connection state to DynamikLink server object changed event type
	 */
	static readonly EVENT_CONNECTION: string;

	/**
	 * Return connection status.
	 */
	readonly isConnected: boolean;

	/**
	 * Return server name.
	 */
	readonly serverName: string;

	/**
	 * 
	 */
	static __(): any;

}

/**
 * UIControl event object
 */
declare class UIControlEvent {
	/**
	 * A UI control is about to change its value.
	 */
	static readonly EVENT_VALUE_CHANGED: string;

	/**
	 * Absolut path to UI control.
	 */
	readonly ctrlPath: string;

	/**
	 * 
	 */
	static __(): any;

}

/**
 * An object that represents a particular multitrack document.
 */
declare class MultitrackDocument {
	/**
	 * Collection of all currently selected audio clips of this multitrack document.
	 */
	readonly audioClipSelection: AudioClipSelectionCollection;

	/**
	 * Collection of all audio tracks of the multitrack document.
	 */
	readonly audioTracks: MixedAudioTrackCollection;

	/**
	 * Display name of the document as shown in the UI. It doesn't necessarily refers to the file name without filename extension.
	 */
	readonly displayName: string;

	/**
	 * Duration in samples
	 */
	readonly duration: number;

	/**
	 * Unique identifier of this document.
	 */
	readonly id: string;

	/**
	 * Returns an array of marker objects. Each marker object consists of the properties 'start' 'length' 'name' 'description' and 'type'.
	 */
	readonly markers: any[];

	/**
	 * Returns the document's current metadata as a vanilla Object. Each property is readonly and represents an metadata entry.
	 */
	readonly metadata: Metadata;

	/**
	 * Returns a platform-specific path to the document on disk or empty if it doesn't currently have a path.
	 */
	readonly path: string;

	/**
	 * The current playhead position in samples
	 */
	playheadPosition: number;

	/**
	 * The audio sample rate (Hz) of the current document.
	 */
	readonly sampleRate: number;

	/**
	 * Makes the current document the active (front-most) document.
	 */
	activate(): boolean;

	/**
	 * 
	 * @param start 
	 * @param duration 
	 * @param name 
	 * @param type 
	 * @param description Add a new marker to the document. Possible marker types are 'cue' 'track' 'cart' 'subclip'
	 */
	addMarker(start: number, duration: number, name: string, type: string, description: string): boolean;

	/**
	 * Close the document. Returns false if the document can't be closed right now (e.g. due to ongoing document operations)
	 */
	closeDocument(): boolean;

}

/**
 * Represents any waveform document
 */
declare class WaveDocument {
	/**
	 * The audio format of the document (sample rate bit depth channel layout)
	 */
	readonly audioFormat: object;

	/**
	 * Returns that amount of progress from 0 to 100 for the document's current operation.
	 */
	readonly busyProgress: number;

	/**
	 * Display name of the document as shown in the UI. It doesn't necessarily refers to the file name without filename extension.
	 */
	readonly displayName: string;

	/**
	 * Duration in samples
	 */
	readonly duration: number;

	/**
	 * true if the document exists.
	 */
	readonly exists: boolean;

	/**
	 * Unique identifier of this document.
	 */
	readonly id: string;

	/**
	 * true if the document is busy (e.g. in the process of being saved).
	 */
	readonly isBusy: boolean;

	/**
	 * Returns an array of marker objects. Each marker object consists of the properties 'start' 'length' 'name' 'description' and 'type'.
	 */
	readonly markers: any[];

	/**
	 * Returns the document's current metadata as a vanilla Object. Each property is readonly and represents an metadata entry.
	 */
	readonly metadata: Metadata;

	/**
	 * Returns a platform-specific path to the document on disk or empty if it doesn't currently have a path.
	 */
	readonly path: string;

	/**
	 * The current playhead position in samples
	 */
	playheadPosition: number;

	/**
	 * The audio sample rate (Hz) of the current document.
	 */
	readonly sampleRate: number;

	/**
	 * Makes the current document the active (front-most) document.
	 */
	activate(): boolean;

	/**
	 * 
	 * @param start 
	 * @param duration 
	 * @param name 
	 * @param type 
	 * @param description Add a new marker to the document. Possible marker types are 'cue' 'track' 'cart' 'subclip'
	 */
	addMarker(start: number, duration: number, name: string, type: string, description: string): boolean;

	/**
	 * 
	 * @param name Apply a registered favorite to this document
	 */
	applyFavorite(name: string): boolean;

	/**
	 * Close the document. Returns false if the document can't be closed right now (e.g. due to ongoing document operations)
	 */
	closeDocument(): boolean;

	/**
	 * 
	 * @param path 
	 * @param export Save the document at the given location. Do an export if the parameter 'export' is true. Returns true on success.
	 */
	saveAs(path: string, export_: boolean): boolean;

}

/**
 * Collection of audio tracks of the according multitrack document.
 */
declare class AudioTrackCollection {
	/**
	 * Returns an audio track by its index
	 */
	readonly index: AudioTrack;

	/**
	 * Number of audio tracks.
	 */
	readonly length: number;

	/**
	 * 
	 * @param layout Add new track
	 */
	add(layout: AudioChannelLayout): AudioTrack;

	/**
	 * 
	 * @param name Return audio track by its name
	 */
	getAudioTrack(name: string): AudioTrack;

	/**
	 * 
	 * @param track Remove track
	 */
	remove(track: AudioTrack): boolean;

}

/**
 * Represents a single audio track of a multitrack document.
 */
declare class AudioTrack {
	/**
	 * Audio bus track type.
	 */
	static readonly AUDIOTRACKTYPE_BUS: number;

	/**
	 * Audio clip track type.
	 */
	static readonly AUDIOTRACKTYPE_CLIP: number;

	/**
	 * Audio master track type.
	 */
	static readonly AUDIOTRACKTYPE_MASTER: number;

	/**
	 * Unknown track type
	 */
	static readonly AUDIOTRACKTYPE_UNKOWN: number;

	/**
	 * 
	 */
	readonly ancestor: any;

	/**
	 * True if this track is armed for record
	 */
	armed: boolean;

	/**
	 * Collection of all currently selected audio clips of this track.
	 */
	readonly audioClipSelection: AudioClipSelectionCollection;

	/**
	 * Collection of all audio clips of this track.
	 */
	readonly audioClips: AudioClipCollection;

	/**
	 * The audio format of the track (sample rate bit depth channel layout)
	 */
	readonly audioFormat: object;

	/**
	 * Unique id of the track.
	 */
	readonly id: number;

	/**
	 * True if this track is muted
	 */
	mute: boolean;

	/**
	 * Get the name of this track.
	 */
	name: string;

	/**
	 * Selection state of the track.
	 */
	selected: boolean;

	/**
	 * True if this track is soloed
	 */
	solo: boolean;

	/**
	 * Type of the track. The value is one of AUDIOTRACKTYPE_CLIP AUDIOTRACKTYPE_BUS AUDIOTRACKTYPE_MASTER or AUDIOTRACKTYPE_UNKOWN
	 */
	readonly type: number;

	/**
	 * 
	 */
	static __(): any;

	/**
	 * 
	 */
	static addEventListener(): any;

	/**
	 * 
	 */
	static removeEventListener(): any;

}

/**
 * AudioFormat describes the format in the form of the sample rate, the bit depth and the channel layout.
 */
declare class AudioFormat {
	/**
	 * 16 bit signed integer
	 */
	static readonly SAMPLETYPE_16: number;

	/**
	 * 24 bit signed integer
	 */
	static readonly SAMPLETYPE_24: number;

	/**
	 * 32 bit floating point
	 */
	static readonly SAMPLETYPE_32: number;

	/**
	 * 8 bit unsigned integer
	 */
	static readonly SAMPLETYPE_8: number;

	/**
	 * Bit depth of a sample as well as its data format. Always normalized to 8 bit unsigned integer 16 bit signed integer little endian 24 bit signed integer little endian packed or 32 bit floating point (range -1.0 to 1.0)
	 */
	bitDepth: number;

	/**
	 * Channel layout
	 */
	channelLayout: object;

	/**
	 * Samplerate
	 */
	sampleRate: number;

	/**
	 * 
	 * @param samplerate 
	 * @param bitDepth 
	 * @param channelLayout Constructs a new AudioFormat object.
	 */
	constructor(samplerate: number, bitDepth: number, channelLayout: AudioChannelLayout);

	/**
	 * 
	 */
	static __(): any;

}

/**
 * Collection of selected audio clips.
 */
declare class AudioClipSelectionCollection {
	/**
	 * Returns an audio clip by its index
	 */
	readonly index: AudioClipCollection;

	/**
	 * Number of audio clips.
	 */
	readonly length: number;

	/**
	 * 
	 * @param AudioClip Add clip to the selection.
	 */
	add(AudioClip: any): object;

	/**
	 * Clear the selection
	 */
	clear(): boolean;

	/**
	 * 
	 * @param AudioClipSelectionCollection Remove clip from the selection.
	 */
	remove(AudioClipSelectionCollection: any): boolean;

}

/**
 * This events is fired if one or more documents related event happened.
 */
declare class AudioClipEvent {
	/**
	 * This event is fired after a clip was added to a multitrack document.
	 */
	static readonly EVENT_ADDED: string;

	/**
	 * This event is fired after a clip was moved within a multitrack document.
	 */
	static readonly EVENT_MOVED: string;

	/**
	 * This event is fired after a clip was removed from a multitrack document.
	 */
	static readonly EVENT_REMOVED: string;

	/**
	 * Unique clip ID.
	 */
	readonly clipID: string;

	/**
	 * Unique document ID.
	 */
	readonly documentID: string;

	/**
	 * Document file path.
	 */
	readonly path: string;

	/**
	 * Unique track ID.
	 */
	readonly trackID: number;

	/**
	 * Track name.
	 */
	readonly trackName: string;

	/**
	 * 
	 */
	static __(): any;

}

/**
 * Collection of audio clips of the according audio track.
 */
declare class AudioClipCollection {
	/**
	 * Returns an audio clip by its index
	 */
	readonly index: AudioClipCollection;

	/**
	 * Number of audio clips.
	 */
	readonly length: number;

	/**
	 * 
	 * @param AudioClip 
	 * @param sourceChannelRouting Add new clip to the track based on the passed in document or move the passed in clip to this track.
	 */
	add(AudioClip: any, sourceChannelRouting: any): object;

	/**
	 * 
	 * @param AudioClipCollection Remove clip from this track.
	 */
	remove(AudioClipCollection: any): boolean;

}

/**
 * An object representing a particular audio clip as part of a multitrack session.
 */
declare class AudioClip {
	/**
	 * 
	 */
	readonly ancestor: any;

	/**
	 * The audio format of the clip (sample rate bit depth channel layout)
	 */
	readonly audioFormat: object;

	/**
	 * The end time of the clip measured in samples (exclusive) at the multitrack document's sample rate.
	 */
	readonly endTime: number;

	/**
	 * Unique id of the clip.
	 */
	readonly id: string;

	/**
	 * Document associated with this clip.
	 */
	link: object;

	/**
	 * The name of the clip.
	 */
	readonly name: string;

	/**
	 * Selection state of this audio clip.
	 */
	readonly selected: boolean;

	/**
	 * Mapping of source channels to clip channels. The array contains indices of source channels which are routed to the according clip channels. The array has to have as many source channel indices as there are clip channels. Each source channel can be routed to exactly one clip channel.
	 */
	sourceChannelRouting: any[];

	/**
	 * The start time of the clip measured in samples at the multitrack document's sample rate.
	 */
	startTime: number;

}

/**
 * AudioChannelLayout represents a channel layout with named channels proved as constants AUDIOCHANNELLABEL_ ... An AudioChannelLayout can be created using an Array of these constants or it could be created using one of the constants CHANNELLAYOUT_ ... to create a common layout.
 */
declare class AudioChannelLayout {
	/**
	 * Ambisonic-W
	 */
	static readonly AUDIOCHANNELLABEL_AMBISONIC_W: number;

	/**
	 * Ambisonic-X
	 */
	static readonly AUDIOCHANNELLABEL_AMBISONIC_X: number;

	/**
	 * Ambisonic-Y
	 */
	static readonly AUDIOCHANNELLABEL_AMBISONIC_Y: number;

	/**
	 * Ambisonic-Z
	 */
	static readonly AUDIOCHANNELLABEL_AMBISONIC_Z: number;

	/**
	 * Back-Center
	 */
	static readonly AUDIOCHANNELLABEL_BACKCENTER: number;

	/**
	 * Back-Left
	 */
	static readonly AUDIOCHANNELLABEL_BACKLEFT: number;

	/**
	 * Back-Right
	 */
	static readonly AUDIOCHANNELLABEL_BACKRIGHT: number;

	/**
	 * Bottom-Front-Center
	 */
	static readonly AUDIOCHANNELLABEL_BOTTOMFRONTCENTER: number;

	/**
	 * Bottom-Front-Left
	 */
	static readonly AUDIOCHANNELLABEL_BOTTOMFRONTLEFT: number;

	/**
	 * Bottom-Front-Right
	 */
	static readonly AUDIOCHANNELLABEL_BOTTOMFRONTRIGHT: number;

	/**
	 * Discrete
	 */
	static readonly AUDIOCHANNELLABEL_DISCRETE: number;

	/**
	 * Front-Center
	 */
	static readonly AUDIOCHANNELLABEL_FRONTCENTER: number;

	/**
	 * Front-Left
	 */
	static readonly AUDIOCHANNELLABEL_FRONTLEFT: number;

	/**
	 * Front-Left-Of-Center
	 */
	static readonly AUDIOCHANNELLABEL_FRONTLEFTOFCENTER: number;

	/**
	 * Front-Left-Wide
	 */
	static readonly AUDIOCHANNELLABEL_FRONTLEFTWIDE: number;

	/**
	 * Front-Right
	 */
	static readonly AUDIOCHANNELLABEL_FRONTRIGHT: number;

	/**
	 * Front-Right-Of-Center
	 */
	static readonly AUDIOCHANNELLABEL_FRONTRIGHTOFCENTER: number;

	/**
	 * Front-Right-Wide
	 */
	static readonly AUDIOCHANNELLABEL_FRONTRIGHTWIDE: number;

	/**
	 * Left-Height
	 */
	static readonly AUDIOCHANNELLABEL_LEFTHEIGHT: number;

	/**
	 * Left-Total
	 */
	static readonly AUDIOCHANNELLABEL_LEFTTOTAL: number;

	/**
	 * LFE2
	 */
	static readonly AUDIOCHANNELLABEL_LFE2: number;

	/**
	 * Low-Frequency
	 */
	static readonly AUDIOCHANNELLABEL_LOWFREQUENCY: number;

	/**
	 * Proximity-Left
	 */
	static readonly AUDIOCHANNELLABEL_PROXIMITYLEFT: number;

	/**
	 * Proximity-Right
	 */
	static readonly AUDIOCHANNELLABEL_PROXIMITYRIGHT: number;

	/**
	 * Rear-Surround-Left
	 */
	static readonly AUDIOCHANNELLABEL_REARSURROUNDLEFT: number;

	/**
	 * Rear-Surround-Right
	 */
	static readonly AUDIOCHANNELLABEL_REARSURROUNDRIGHT: number;

	/**
	 * Right-Height
	 */
	static readonly AUDIOCHANNELLABEL_RIGHTHEIGHT: number;

	/**
	 * Right-Total
	 */
	static readonly AUDIOCHANNELLABEL_RIGHTTOTAL: number;

	/**
	 * Side-Left
	 */
	static readonly AUDIOCHANNELLABEL_SIDELEFT: number;

	/**
	 * Side-Right
	 */
	static readonly AUDIOCHANNELLABEL_SIDERIGHT: number;

	/**
	 * Top-Back-Center
	 */
	static readonly AUDIOCHANNELLABEL_TOPBACKCENTER: number;

	/**
	 * Top-Back-Left
	 */
	static readonly AUDIOCHANNELLABEL_TOPBACKLEFT: number;

	/**
	 * Top-Back-Right
	 */
	static readonly AUDIOCHANNELLABEL_TOPBACKRIGHT: number;

	/**
	 * Top-Center
	 */
	static readonly AUDIOCHANNELLABEL_TOPCENTER: number;

	/**
	 * Top-Front-Center
	 */
	static readonly AUDIOCHANNELLABEL_TOPFRONTCENTER: number;

	/**
	 * Top-Front-Left
	 */
	static readonly AUDIOCHANNELLABEL_TOPFRONTLEFT: number;

	/**
	 * Top-Front-Right
	 */
	static readonly AUDIOCHANNELLABEL_TOPFRONTRIGHT: number;

	/**
	 * 6 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right
	 */
	static readonly CHANNELLAYOUT_51: number;

	/**
	 * 8 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Front-Left-Of-Center Front-Right-Of-Center
	 */
	static readonly CHANNELLAYOUT_7_1: number;

	/**
	 * 8 Channel Configuration Front-Left Front-Right Back-Left Back-Right Front-Center Low-Frequency Front-Left-Of-Center Front-Right-Of-Center
	 */
	static readonly CHANNELLAYOUT_7_1EMAGIC: number;

	/**
	 * 8 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Rear-Surround-Left Rear-Surround-Right
	 */
	static readonly CHANNELLAYOUT_7_1ITU: number;

	/**
	 * 8 Channel Configuration Front-Center Front-Left-Of-Center Front-Right-Of-Center Front-Left Front-Right Back-Left Back-Right Low-Frequency
	 */
	static readonly CHANNELLAYOUT_7_1MPEG: number;

	/**
	 * 4 Channel Configuration Ambisonic-W Ambisonic-X Ambisonic-Y Ambisonic-Z
	 */
	static readonly CHANNELLAYOUT_AMBISONICSBFORMAT: number;

	/**
	 * 2 Channel Configuration Bottom-Front-Left Bottom-Front-Right
	 */
	static readonly CHANNELLAYOUT_BFL_BFR: number;

	/**
	 * 6 Channel Configuration Front-LeftFront-Right Front-Center Low-Frequency Back-Left Back-Right
	 */
	static readonly CHANNELLAYOUT_BROADCAST51: number;

	/**
	 * 8 Channel Configuration Front-Left Front-Right Back-Left Back-Right Top-Front-Left Top-Front-Right Top-Back-Left Top-Back-Right
	 */
	static readonly CHANNELLAYOUT_CUBE: number;

	/**
	 * 2 Channel Configuration Front-Center Low-Frequency
	 */
	static readonly CHANNELLAYOUT_C_LFE: number;

	/**
	 * 3 Channel Configuration Front-Center Front-Left Front-Right
	 */
	static readonly CHANNELLAYOUT_C_L_R: number;

	/**
	 * 4 Channel Configuration Front-Center Front-Left Front-Right Back-Center
	 */
	static readonly CHANNELLAYOUT_C_L_R_CS: number;

	/**
	 * 5 Channel Configuration Front-Center Front-Left Front-Right Back-Left Back-Right
	 */
	static readonly CHANNELLAYOUT_C_L_R_LS_RS: number;

	/**
	 * 6 Channel Configuration Front-Center Front-Left Front-Right Back-Left Back-Right Back-Center
	 */
	static readonly CHANNELLAYOUT_C_L_R_LS_RS_CS: number;

	/**
	 * 7 Channel Configuration Front-Center Front-Left Front-Right Back-Left Back-Right Back-Center Low-Frequency
	 */
	static readonly CHANNELLAYOUT_C_L_R_LS_RS_CS_LFE: number;

	/**
	 * 6 Channel Configuration Front-Center Front-Left Front-Right Back-Left Back-Right Low-Frequency
	 */
	static readonly CHANNELLAYOUT_C_L_R_LS_RS_LFE: number;

	/**
	 * 7 Channel Configuration Front-Center Front-Left Front-Right Back-Left Back-Right Rear-Surround-Left Rear-Surround-Right
	 */
	static readonly CHANNELLAYOUT_C_L_R_LS_RS_RLS_RRS: number;

	/**
	 * 8 Channel Configuration Front-Center Front-Left Front-Right Back-Left Back-Right Rear-Surround-Left Rear-Surround-Right Back-Center
	 */
	static readonly CHANNELLAYOUT_C_L_R_LS_RS_RLS_RRS_CS: number;

	/**
	 * 6 Channel Configuration Front-Left Front-Right Back-Left Back-Right Front-Center Back-Center
	 */
	static readonly CHANNELLAYOUT_HEXAGONAL: number;

	/**
	 * 2 Channel Configuration Front-Left-Of-Center Front-Right-Of-Center
	 */
	static readonly CHANNELLAYOUT_LC_RC: number;

	/**
	 * 6 Channel Configuration Front-Left Front-Right Back-Left Back-Right Front-Center Low-Frequency
	 */
	static readonly CHANNELLAYOUT_LEGACY51: number;

	/**
	 * 2 Channel Configuration Side-Left Side-Right
	 */
	static readonly CHANNELLAYOUT_LSD_RSD: number;

	/**
	 * 2 Channel Configuration Back-Left Back-Right
	 */
	static readonly CHANNELLAYOUT_LS_RS: number;

	/**
	 * 3 Channel Configuration Front-Left Front-Center Front-Right
	 */
	static readonly CHANNELLAYOUT_L_C_R: number;

	/**
	 * 4 Channel Configuration Front-Left Front-Center Front-Right Back-Center
	 */
	static readonly CHANNELLAYOUT_L_C_R_CS: number;

	/**
	 * 5 Channel Configuration Front-Left Front-Center Front-Right Back-Center Low-Frequency
	 */
	static readonly CHANNELLAYOUT_L_C_R_CS_LFE: number;

	/**
	 * 4 Channel Configuration Front-Left Front-Center Front-Right Low-Frequency
	 */
	static readonly CHANNELLAYOUT_L_C_R_LFE: number;

	/**
	 * 5 Channel Configuration Front-Left Front-Center Front-Right Back-Left Back-Right
	 */
	static readonly CHANNELLAYOUT_L_C_R_LS_RS: number;

	/**
	 * 6 Channel Configuration Front-Left Front-Center Front-Right Back-Left Back-Right Low-Frequency
	 */
	static readonly CHANNELLAYOUT_L_C_R_LS_RS_LFE: number;

	/**
	 * 3 Channel Configuration Front-Left Front-Right Front-Center
	 */
	static readonly CHANNELLAYOUT_L_R_C: number;

	/**
	 * 3 Channel Configuration Front-Left Front-Right Back-Center
	 */
	static readonly CHANNELLAYOUT_L_R_CS: number;

	/**
	 * 4 Channel Configuration Front-Left Front-Right Back-Center Low-Frequency
	 */
	static readonly CHANNELLAYOUT_L_R_CS_LFE: number;

	/**
	 * 4 Channel Configuration Front-Left Front-Right Front-Center Back-Center
	 */
	static readonly CHANNELLAYOUT_L_R_C_CS: number;

	/**
	 * 4 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency
	 */
	static readonly CHANNELLAYOUT_L_R_C_LFE: number;

	/**
	 * 5 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Center
	 */
	static readonly CHANNELLAYOUT_L_R_C_LFE_CS: number;

	/**
	 * 7 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Back-Center
	 */
	static readonly CHANNELLAYOUT_L_R_C_LFE_LS_RS_CS: number;

	/**
	 * 9 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Back-Center Side-Left Side-Right
	 */
	static readonly CHANNELLAYOUT_L_R_C_LFE_LS_RS_CS_LSD_RSD: number;

	/**
	 * 14 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Back-Center Top-Center Top-Front-Left Top-Front-Center Top-Front-Right Top-Back-Left Top-Back-Center Top-Back-Right
	 */
	static readonly CHANNELLAYOUT_L_R_C_LFE_LS_RS_CS_TS_VHL_VHC_VHR_TBL_TBR: number;

	/**
	 * 9 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Front-Left-Of-Center Front-Right-Of-Center Back-Center
	 */
	static readonly CHANNELLAYOUT_L_R_C_LFE_LS_RS_LC_RC_CS: number;

	/**
	 * 8 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Side-Left Side-Right
	 */
	static readonly CHANNELLAYOUT_L_R_C_LFE_LS_RS_LSD_RSD: number;

	/**
	 * 10 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Side-Left Side-Right Left-Height Right-Height
	 */
	static readonly CHANNELLAYOUT_L_R_C_LFE_LS_RS_LSD_RSD_TSL_TSR: number;

	/**
	 * 8 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Proximity-Left Proximity-Right
	 */
	static readonly CHANNELLAYOUT_L_R_C_LFE_LS_RS_PL_PR: number;

	/**
	 * 12 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Top-Center Top-Front-Left Top-Front-Center Top-Front-Right Top-Back-Left Top-Back-Right
	 */
	static readonly CHANNELLAYOUT_L_R_C_LFE_LS_RS_TS_VHL_VHC_VHR_TBL_TBR: number;

	/**
	 * 11 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Top-Center Top-Front-Left Top-Front-Right Top-Back-Left Top-Back-Right
	 */
	static readonly CHANNELLAYOUT_L_R_C_LFE_LS_RS_TS_VHL_VHR_TBL_TBR: number;

	/**
	 * 10 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Top-Front-Left Top-Front-Right Top-Back-Left Top-Back-Right
	 */
	static readonly CHANNELLAYOUT_L_R_C_LFE_LS_RS_VHL_VHR_TBL_TBR: number;

	/**
	 * 5 Channel Configuration Front-Left Front-Right Front-Center Back-Left Back-Right
	 */
	static readonly CHANNELLAYOUT_L_R_C_LS_RS: number;

	/**
	 * 6 Channel Configuration Front-Left Front-Right Front-Center Back-Left Back-Right Back-Center
	 */
	static readonly CHANNELLAYOUT_L_R_C_LS_RS_CS: number;

	/**
	 * 8 Channel Configuration Front-Left Front-Right Front-Center Back-Left Back-Right Back-Center Side-Left Side-Right
	 */
	static readonly CHANNELLAYOUT_L_R_C_LS_RS_CS_LSD_RSD: number;

	/**
	 * 13 Channel Configuration Front-Left Front-Right Front-Center Back-Left Back-Right Back-Center Top-Center Top-Front-Left Top-Front-Center Top-Front-Right Top-Back-Left Top-Back-Center Top-Back-Right
	 */
	static readonly CHANNELLAYOUT_L_R_C_LS_RS_CS_TS_VHL_VHC_VHR_TBL_TBR: number;

	/**
	 * 7 Channel Configuration Front-Left Front-Right Front-Center Back-Left Back-Right Front-Left-Of-Center Front-Right-Of-Center
	 */
	static readonly CHANNELLAYOUT_L_R_C_LS_RS_LC_RC: number;

	/**
	 * 8 Channel Configuration Front-Left Front-Right Front-Center Back-Left Back-Right Front-Left-Of-Center Front-Right-Of-Center Back-Center
	 */
	static readonly CHANNELLAYOUT_L_R_C_LS_RS_LC_RC_CS: number;

	/**
	 * 7 Channel Configuration Front-Left Front-Right Front-Center Back-Left Back-Right Side-Left Side-Right
	 */
	static readonly CHANNELLAYOUT_L_R_C_LS_RS_LSD_RSD: number;

	/**
	 * 11 Channel Configuration Front-Left Front-Right Front-Center Back-Left Back-Right Top-Center Top-Front-Left Top-Front-Center Top-Front-Right Top-Back-Left Top-Back-Right
	 */
	static readonly CHANNELLAYOUT_L_R_C_LS_RS_TS_VHL_VHC_VHR_TBL_TBR: number;

	/**
	 * 10 Channel Configuration Front-Left Front-Right Front-Center Back-Left Back-Right Top-Center Top-Front-Left Top-Front-Right Top-Back-Left Top-Back-Right
	 */
	static readonly CHANNELLAYOUT_L_R_C_LS_RS_TS_VHL_VHR_TBL_TBR: number;

	/**
	 * 9 Channel Configuration Front-Left Front-Right Front-Center Back-Left Back-Right Top-Front-Left Top-Front-Right Top-Back-Left Top-Back-Right
	 */
	static readonly CHANNELLAYOUT_L_R_C_LS_RS_VHL_VHR_TBL_TBR: number;

	/**
	 * 3 Channel Configuration Front-Left Front-Right Low-Frequency
	 */
	static readonly CHANNELLAYOUT_L_R_LFE: number;

	/**
	 * 4 Channel Configuration Front-Left Front-Right Low-Frequency Back-Center
	 */
	static readonly CHANNELLAYOUT_L_R_LFE_CS: number;

	/**
	 * 5 Channel Configuration Front-Left Front-Right Low-Frequency Back-Left Back-Right
	 */
	static readonly CHANNELLAYOUT_L_R_LFE_LS_RS: number;

	/**
	 * 7 Channel Configuration Front-Left Front-Right Low-Frequency Back-Left Back-Right Side-Left Side-Right
	 */
	static readonly CHANNELLAYOUT_L_R_LFE_LS_RS_LSD_RSD: number;

	/**
	 * 9 Channel Configuration Front-Left Front-Right Low-Frequency Back-Left Back-Right Top-Front-Left Top-Front-Center Top-Front-Right Bottom-Front-Center
	 */
	static readonly CHANNELLAYOUT_L_R_LFE_LS_RS_VHL_VHC_VHR_BFC: number;

	/**
	 * 5 Channel Configuration Front-Left Front-Right Back-Left Back-Right Front-Center
	 */
	static readonly CHANNELLAYOUT_L_R_LS_RS_C: number;

	/**
	 * 7 Channel Configuration Front-Left Front-Right Back-Left Back-Right Front-Center Front-Left-Of-Center Front-Right-Of-Center
	 */
	static readonly CHANNELLAYOUT_L_R_LS_RS_C_LC_RC: number;

	/**
	 * 7 Channel Configuration Front-Left Front-Right Back-Left Back-Right Front-Center Rear-Surround-Left Rear-Surround-Right
	 */
	static readonly CHANNELLAYOUT_L_R_LS_RS_C_RLS_RRS: number;

	/**
	 * 5 Channel Configuration Front-Left Front-Right Back-Left Back-Right Low-Frequency
	 */
	static readonly CHANNELLAYOUT_L_R_LS_RS_LFE: number;

	/**
	 * 6 Channel Configuration Front-Left Front-Right Back-Left Back-Right Side-Left Side-Right
	 */
	static readonly CHANNELLAYOUT_L_R_LS_RS_LSD_RSD: number;

	/**
	 * 2 Channel Configuration Left-Total Right-Total
	 */
	static readonly CHANNELLAYOUT_MATRIXSTEREO: number;

	/**
	 * 1 Channel Configuration Discrete
	 */
	static readonly CHANNELLAYOUT_MONO: number;

	/**
	 * 8 Channel Configuration Front-Left Front-Right Back-Left Back-Right Front-Center Back-Center Side-Left Side-Right
	 */
	static readonly CHANNELLAYOUT_OCTAGONAL: number;

	/**
	 * 5 Channel Configuration Front-Left Front-Right Back-Left Back-Right Front-Center
	 */
	static readonly CHANNELLAYOUT_PENTAGONAL: number;

	/**
	 * 4 Channel Configuration Front-Left Front-Right Back-Left Back-Right
	 */
	static readonly CHANNELLAYOUT_QUADRAPHONIC: number;

	/**
	 * 16 Channel Configuration Discrete Discrete Front-Center Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete
	 */
	static readonly CHANNELLAYOUT_SMPTEDIGITALCINEMA1: number;

	/**
	 * 16 Channel Configuration Left-Total Right-Total Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete
	 */
	static readonly CHANNELLAYOUT_SMPTEDIGITALCINEMA2: number;

	/**
	 * 16 Channel Configuration Front-Left Front-Right Front-Center Discrete Back-Center Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete
	 */
	static readonly CHANNELLAYOUT_SMPTEDIGITALCINEMA4: number;

	/**
	 * 16 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete
	 */
	static readonly CHANNELLAYOUT_SMPTEDIGITALCINEMA6: number;

	/**
	 * 16 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Discrete Discrete Back-Center Discrete Discrete Discrete Discrete Discrete Discrete Discrete
	 */
	static readonly CHANNELLAYOUT_SMPTEDIGITALCINEMA7: number;

	/**
	 * 16 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Front-Left-Of-Center Front-Right-Of-Center Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete
	 */
	static readonly CHANNELLAYOUT_SMPTEDIGITALCINEMA8: number;

	/**
	 * 16 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Front-Left-Of-Center Front-Right-Of-Center Back-Center Discrete Discrete Discrete Discrete Discrete Discrete Discrete
	 */
	static readonly CHANNELLAYOUT_SMPTEDIGITALCINEMA9: number;

	/**
	 * 8 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Left-Total Right-Total
	 */
	static readonly CHANNELLAYOUT_SMPTEDTV: number;

	/**
	 * 2 Channel Configuration Front-Left Front-Right
	 */
	static readonly CHANNELLAYOUT_STEREO: number;

	/**
	 * 2 Channel Configuration Top-Back-Left Top-Back-Right
	 */
	static readonly CHANNELLAYOUT_TBL_TBR: number;

	/**
	 * 2 Channel Configuration Left-Height Right-Height
	 */
	static readonly CHANNELLAYOUT_TSL_TSR: number;

	/**
	 * 2 Channel Configuration Top-Front-Left Top-Front-Right
	 */
	static readonly CHANNELLAYOUT_VHL_VHR: number;

	/**
	 * 12 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Top-Front-Left Top-Front-Center Top-Front-Right Top-Back-Left Top-Back-Right LFE2
	 */
	static readonly CHANNELLAYOUT_VST10_2: number;

	/**
	 * 14 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Front-Left-Of-Center Front-Right-Of-Center Top-Front-Left Top-Front-Center Top-Front-Right Top-Back-Left Top-Back-Right LFE2
	 */
	static readonly CHANNELLAYOUT_VST10_2_PLUS: number;

	/**
	 * 8 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Back-Center Top-Front-Center
	 */
	static readonly CHANNELLAYOUT_VST_7_1_CINE_CENTER_HIGH: number;

	/**
	 * 8 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Top-Front-Left Top-Front-Right
	 */
	static readonly CHANNELLAYOUT_VST_7_1_CINE_FRONT_HIGH: number;

	/**
	 * 8 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Left-Height Right-Height
	 */
	static readonly CHANNELLAYOUT_VST_7_1_CINE_SIDE_HIGH: number;

	/**
	 * 8 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Back-Center Top-Center
	 */
	static readonly CHANNELLAYOUT_VST_7_1_CINE_TOP_CENTER: number;

	/**
	 * Audio channel layout description
	 */
	readonly description: string;

	/**
	 * Returns an audio channel label.
	 */
	readonly index: number;

	/**
	 * Number of audio channels.
	 */
	readonly length: number;

	/**
	 * 
	 */
	static __(): any;

	/**
	 * 
	 * @param labels Create a audio channel layout.
	 */
	static createAudioChannelLayout(labels: any[]): AudioChannelLayout;

	/**
	 * 
	 * @param layout Create a common audio channel layout.
	 */
	static createCommonAudioChannelLayout(layout: number): AudioChannelLayout;

	/**
	 * 
	 * @param label Label string of a single audio channel label
	 */
	static label(label: number): string;

}

/**
 * This events is fired if one or more documents related event happened.
 */
declare class AudioTrackEvent {
	/**
	 * This event is fired after a track was added to a multitrack document.
	 */
	static readonly EVENT_ADDED: string;

	/**
	 * This event is fired after a track was removed from a multitrack document.
	 */
	static readonly EVENT_REMOVED: string;

	/**
	 * Unique document ID.
	 */
	readonly documentID: string;

	/**
	 * Track name.
	 */
	readonly name: string;

	/**
	 * Document file path.
	 */
	readonly path: string;

	/**
	 * Unique track ID.
	 */
	readonly trackID: number;

	/**
	 * 
	 */
	static __(): any;

}

/**
 * An object representing a particular clip as part of a multitrack session.
 */
declare class Clip {
	/**
	 * 
	 */
	readonly ancestor: any;

	/**
	 * The end time of the clip measured in samples (exclusive) at the multitrack document's sample rate.
	 */
	readonly endTime: number;

	/**
	 * Unique id of the clip.
	 */
	readonly id: string;

	/**
	 * Document associated with this clip.
	 */
	link: object;

	/**
	 * The name of the clip.
	 */
	readonly name: string;

	/**
	 * Selection state of this audio clip.
	 */
	readonly selected: boolean;

	/**
	 * The start time of the clip measured in samples at the multitrack document's sample rate.
	 */
	readonly startTime: number;

}

/**
 * An object representing the state of the running application.
 */
declare class Application {
	/**
	 * Performs a scan in the amplitude statistics panel.
	 */
	static readonly COMMAND_ANALYSIS_SCANAMPLITUDESTATISTICS: string;

	/**
	 * Performs a scan in the frequency analysis panel.
	 */
	static readonly COMMAND_ANALYSIS_SCANFREQUENCYANALYSIS: string;

	/**
	 * Aligns the speech of one clip to the speech in another clip.
	 */
	static readonly COMMAND_CLIP_ALIGNWITHRUBBADUB: string;

	/**
	 * Prepare the clip to be ready for Remix.
	 */
	static readonly COMMAND_CLIP_ANALYZEFORRETARGETING: string;

	/**
	 * Toggle whether or not crossfades are automatically created when the selected clip is moved or trimmed.
	 */
	static readonly COMMAND_CLIP_AUTOMATICCROSSFADESENABLED: string;

	/**
	 * Sets the selected clip in front of all other clips.
	 */
	static readonly COMMAND_CLIP_BRINGTOFRONT: string;

	/**
	 * Shows the Clip Color dialog for changing the selected clip or group color.
	 */
	static readonly COMMAND_CLIP_CLIPCOLORDIALOG: string;

	/**
	 * Set the clip gain using Properties panel.
	 */
	static readonly COMMAND_CLIP_CLIPGAIN: string;

	/**
	 * Create new trimmed files for the selected clips to refer to.
	 */
	static readonly COMMAND_CLIP_CONVERTTOUNIQUECOPY: string;

	/**
	 * Edit the source file which the selected clip references.
	 */
	static readonly COMMAND_CLIP_EDITSOURCEFILE: string;

	/**
	 * Choose the Asymmetrical crossfade link type for the clip fade in.
	 */
	static readonly COMMAND_CLIP_FADEINASYMMETRICAL: string;

	/**
	 * Choose the Cosine style for the clip fade in.
	 */
	static readonly COMMAND_CLIP_FADEINCOSINE: string;

	/**
	 * Create the crossfade at the left edge of the selected clip.
	 */
	static readonly COMMAND_CLIP_FADEINCROSSFADE: string;

	/**
	 * Choose the Linear | Logarithmic style for the clip fade in.
	 */
	static readonly COMMAND_CLIP_FADEINLINEAR: string;

	/**
	 * Remove the fade in for the selected clip.
	 */
	static readonly COMMAND_CLIP_FADEINNONE: string;

	/**
	 * Create the fade in for the selected clip.
	 */
	static readonly COMMAND_CLIP_FADEINNORMAL: string;

	/**
	 * Choose the Symmetrical crossfade link type for the clip fade in.
	 */
	static readonly COMMAND_CLIP_FADEINSYMMETRICAL: string;

	/**
	 * Choose the Asymmetrical crossfade link type for the clip fade out.
	 */
	static readonly COMMAND_CLIP_FADEOUTASYMMETRICAL: string;

	/**
	 * Choose the Cosine style for the clip fade out.
	 */
	static readonly COMMAND_CLIP_FADEOUTCOSINE: string;

	/**
	 * Create the crossfade at the right edge of the selected clip.
	 */
	static readonly COMMAND_CLIP_FADEOUTCROSSFADE: string;

	/**
	 * Choose the Linear | Logarithmic style for the clip fade out.
	 */
	static readonly COMMAND_CLIP_FADEOUTLINEAR: string;

	/**
	 * Remove the fade out for the selected clip.
	 */
	static readonly COMMAND_CLIP_FADEOUTNONE: string;

	/**
	 * Create the fade out for the selected clip.
	 */
	static readonly COMMAND_CLIP_FADEOUTNORMAL: string;

	/**
	 * Choose the Symmetrical crossfade link type for the clip fade out.
	 */
	static readonly COMMAND_CLIP_FADEOUTSYMMETRICAL: string;

	/**
	 * Toggles whether the selected clips belong to a group.
	 */
	static readonly COMMAND_CLIP_GROUPCLIPS: string;

	/**
	 * Reconnect all offline clips with media.
	 */
	static readonly COMMAND_CLIP_LINKALLMEDIA: string;

	/**
	 * Reconnect the selected offline clip with media.
	 */
	static readonly COMMAND_CLIP_LINKMEDIA: string;

	/**
	 * Locks the start time of the selected clips.
	 */
	static readonly COMMAND_CLIP_LOCKINTIME: string;

	/**
	 * Enables clip looping.
	 */
	static readonly COMMAND_CLIP_LOOP: string;

	/**
	 * Matches the loudness of a group of clips.
	 */
	static readonly COMMAND_CLIP_MATCHCLIPVOLUME: string;

	/**
	 * Merge the selected clips.
	 */
	static readonly COMMAND_CLIP_MERGECLIPS: string;

	/**
	 * Mutes the selected clips.
	 */
	static readonly COMMAND_CLIP_MUTE: string;

	/**
	 * Nudge the selected clips to the left (by frames when snapping to frames is enabled).
	 */
	static readonly COMMAND_CLIP_NUDGELEFT: string;

	/**
	 * Nudge the selected clips to the left by 5 (by frames when snapping to frames is enabled).
	 */
	static readonly COMMAND_CLIP_NUDGELEFT5: string;

	/**
	 * Nudge the selected clips to the right (by frames when snapping to frames is enabled).
	 */
	static readonly COMMAND_CLIP_NUDGERIGHT: string;

	/**
	 * Nudge the selected clips to the right by 5 (by frames when snapping to frames is enabled).
	 */
	static readonly COMMAND_CLIP_NUDGERIGHT5: string;

	/**
	 * Remove the focus clip from its current group.
	 */
	static readonly COMMAND_CLIP_REMOVEFOCUSCLIPFROMGROUP: string;

	/**
	 * Rename the selected clip using Properties panel.
	 */
	static readonly COMMAND_CLIP_RENAME: string;

	/**
	 * Adjust clip remix parameters using Properties panel.
	 */
	static readonly COMMAND_CLIP_RETARGETPROPERTIES: string;

	/**
	 * Reveal sources of selected clips in the files panel.
	 */
	static readonly COMMAND_CLIP_REVEALCLIPSINFILESPANEL: string;

	/**
	 * Revert remixed clip into original.
	 */
	static readonly COMMAND_CLIP_REVERTRETARGETEDCLIPTOORIGINAL: string;

	/**
	 * Sets the selected clip behind all other clips.
	 */
	static readonly COMMAND_CLIP_SENDTOBACK: string;

	/**
	 * Silence Selected Clips in Time Selection.
	 */
	static readonly COMMAND_CLIP_SILENCESELECTEDCLIPSINRANGE: string;

	/**
	 * Split the selected clips.
	 */
	static readonly COMMAND_CLIP_SPLIT: string;

	/**
	 * Split all clips under the playhead ignoring currently selected clip(s).
	 */
	static readonly COMMAND_CLIP_SPLITALL: string;

	/**
	 * Split the remixed clip into its original segments.
	 */
	static readonly COMMAND_CLIP_SPLITRETARGETEDCLIPINTOSEGMENTS: string;

	/**
	 * Adjust clip stretch properties using Properties panel.
	 */
	static readonly COMMAND_CLIP_STRETCHPROPERTIES: string;

	/**
	 * A global toggle to suspend the auto-selection of groups.This allows individual selection of clips within a group.
	 */
	static readonly COMMAND_CLIP_SUSPENDGROUPINGTOGGLE: string;

	/**
	 * Trim the selected clips to the time selection.
	 */
	static readonly COMMAND_CLIP_TRIMTOTIMESELECTION: string;

	/**
	 * Remove the selected clips from their respective groups.
	 */
	static readonly COMMAND_CLIP_UNGROUPSELECTEDCLIPS: string;

	/**
	 * Sets the current clipboard to be clipboard 1.
	 */
	static readonly COMMAND_EDIT_ACTIVATECLIPBOARD1: string;

	/**
	 * Sets the current clipboard to be clipboard 2.
	 */
	static readonly COMMAND_EDIT_ACTIVATECLIPBOARD2: string;

	/**
	 * Sets the current clipboard to be clipboard 3.
	 */
	static readonly COMMAND_EDIT_ACTIVATECLIPBOARD3: string;

	/**
	 * Sets the current clipboard to be clipboard 4.
	 */
	static readonly COMMAND_EDIT_ACTIVATECLIPBOARD4: string;

	/**
	 * Sets the current clipboard to be clipboard 5.
	 */
	static readonly COMMAND_EDIT_ACTIVATECLIPBOARD5: string;

	/**
	 * Adds a cart timer marker.
	 */
	static readonly COMMAND_EDIT_ADDCARTMARKER: string;

	/**
	 * Adds a cue marker.
	 */
	static readonly COMMAND_EDIT_ADDCUEMARKER: string;

	/**
	 * Adds a cue point marker.
	 */
	static readonly COMMAND_EDIT_ADDCUEPOINTMARKER: string;

	/**
	 * Adds a cue range marker.
	 */
	static readonly COMMAND_EDIT_ADDCUERANGEMARKER: string;

	/**
	 * Adds a subclip marker.
	 */
	static readonly COMMAND_EDIT_ADDSUBCLIPMARKER: string;

	/**
	 * Adds a CD track marker.
	 */
	static readonly COMMAND_EDIT_ADDTRACKMARKER: string;

	/**
	 * Adjust the selection in point to the beginning.
	 */
	static readonly COMMAND_EDIT_ADJUSTINPOINTTOBEGINNING: string;

	/**
	 * Adjust the selection in point to the end.
	 */
	static readonly COMMAND_EDIT_ADJUSTINPOINTTOEND: string;

	/**
	 * Adjust the selection in point to the left.
	 */
	static readonly COMMAND_EDIT_ADJUSTINPOINTTOLEFT: string;

	/**
	 * Adjust the selection in point to the right.
	 */
	static readonly COMMAND_EDIT_ADJUSTINPOINTTORIGHT: string;

	/**
	 * Adjust Left Side To Left.
	 */
	static readonly COMMAND_EDIT_ADJUSTLEFTSIDETOLEFT: string;

	/**
	 * Adjust Left Side To Right.
	 */
	static readonly COMMAND_EDIT_ADJUSTLEFTSIDETORIGHT: string;

	/**
	 * Adjust the selection out point to the beginning.
	 */
	static readonly COMMAND_EDIT_ADJUSTOUTPOINTTOBEGINNING: string;

	/**
	 * Adjust the selection out point to the end.
	 */
	static readonly COMMAND_EDIT_ADJUSTOUTPOINTTOEND: string;

	/**
	 * Adjust the selection out point to the left.
	 */
	static readonly COMMAND_EDIT_ADJUSTOUTPOINTTOLEFT: string;

	/**
	 * Adjust the selection out point to the right.
	 */
	static readonly COMMAND_EDIT_ADJUSTOUTPOINTTORIGHT: string;

	/**
	 * Adjust Right Side To Left.
	 */
	static readonly COMMAND_EDIT_ADJUSTRIGHTSIDETOLEFT: string;

	/**
	 * Adjust Right Side To Right.
	 */
	static readonly COMMAND_EDIT_ADJUSTRIGHTSIDETORIGHT: string;

	/**
	 * Adjust Selection Inward.
	 */
	static readonly COMMAND_EDIT_ADJUSTSELECTIONINWARD: string;

	/**
	 * Adjust Selection Outward.
	 */
	static readonly COMMAND_EDIT_ADJUSTSELECTIONOUTWARD: string;

	/**
	 * Opens the Batch Process panel.
	 */
	static readonly COMMAND_EDIT_BATCHPROCESS: string;

	/**
	 * Change the current selected clips stretch mode to Off.
	 */
	static readonly COMMAND_EDIT_CHANGESTRETCHMODE_OFF: string;

	/**
	 * Change the current selected clips stretch mode to Realtime.
	 */
	static readonly COMMAND_EDIT_CHANGESTRETCHMODE_REALTIME: string;

	/**
	 * Change the current selected clips stretch mode to Rendered.
	 */
	static readonly COMMAND_EDIT_CHANGESTRETCHMODE_RENDERED: string;

	/**
	 * Clear the time selection without changing the playhead position.
	 */
	static readonly COMMAND_EDIT_CLEARTIMESELECTION: string;

	/**
	 * Converts the sample type of the current file.
	 */
	static readonly COMMAND_EDIT_CONVERTSAMPLETYPE: string;

	/**
	 * Copy the current selection to the clipboard.
	 */
	static readonly COMMAND_EDIT_COPY: string;

	/**
	 * Copy the current selection to the clipboard and then paste it into a new file.
	 */
	static readonly COMMAND_EDIT_COPYTONEW: string;

	/**
	 * Crop the current file using the current selection.
	 */
	static readonly COMMAND_EDIT_CROP: string;

	/**
	 * Cut the current selection.
	 */
	static readonly COMMAND_EDIT_CUT: string;

	/**
	 * Delete the current selection - depends on the context.
	 */
	static readonly COMMAND_EDIT_DELETE: string;

	/**
	 * Deletes all markers from the current file.
	 */
	static readonly COMMAND_EDIT_DELETEALLMARKERS: string;

	/**
	 * Deletes selected markers in the Markers panel.
	 */
	static readonly COMMAND_EDIT_DELETESELECTEDMARKERS: string;

	/**
	 * Delete the currently selected track keyframes.
	 */
	static readonly COMMAND_EDIT_DELETETRACKKEYFRAMES: string;

	/**
	 * Remove the selection.In the Multitrack Editor deselect all clips.In the Waveform Editor deselect all audio samples.
	 */
	static readonly COMMAND_EDIT_DESELECTALL: string;

	/**
	 * Open the original project that created this file.
	 */
	static readonly COMMAND_EDIT_EDITORIGINAL: string;

	/**
	 * Export the audio of selected range markers to separate files.
	 */
	static readonly COMMAND_EDIT_EXPORTMARKERRANGES: string;

	/**
	 * Split Frequency Bands to Files.
	 */
	static readonly COMMAND_EDIT_FREQUENCYBANDSPLITTER: string;

	/**
	 * Imports the specified files and inserts them into the active CD Layout as a CD tracks.
	 */
	static readonly COMMAND_EDIT_IMPORTANDINSERTFILESASCDTRACKS: string;

	/**
	 * Inserts the active file into a new CD Layout.
	 */
	static readonly COMMAND_EDIT_INSERTINTONEWCDLAYOUT: string;

	/**
	 * Inserts the active file into a new multitrack session.
	 */
	static readonly COMMAND_EDIT_INSERTINTONEWSESSION: string;

	/**
	 * Inserts the active file or selection into the most recently used session or a new one if no sessions exist.
	 */
	static readonly COMMAND_EDIT_INSERTINTOSESSION: string;

	/**
	 * Inserts the selected range markers in the Markers panel into the playlist.
	 */
	static readonly COMMAND_EDIT_INSERTSELECTEDRANGEMARKERSINTOPLAYLIST: string;

	/**
	 * Inserts silence into the current file.
	 */
	static readonly COMMAND_EDIT_INSERTSILENCE: string;

	/**
	 * Interprets the sample rate of the current file for playback.
	 */
	static readonly COMMAND_EDIT_INTERPRETSAMPLERATE: string;

	/**
	 * Merges the selected markers in the Markers panel into one (or more) range markers.
	 */
	static readonly COMMAND_EDIT_MERGESELECTEDMARKERS: string;

	/**
	 * Mixes the clipboard's contents into the file.
	 */
	static readonly COMMAND_EDIT_MIXPASTE: string;

	/**
	 * Paste the clipboard's contents into the file.
	 */
	static readonly COMMAND_EDIT_PASTE: string;

	/**
	 * Paste the clipboard's contents into a new file.
	 */
	static readonly COMMAND_EDIT_PASTETONEW: string;

	/**
	 * Switches all clips with rendered stretches to realtime.
	 */
	static readonly COMMAND_EDIT_REALTIMEALLSTRETCHEDCLIPS: string;

	/**
	 * Redo the last operation.
	 */
	static readonly COMMAND_EDIT_REDO: string;

	/**
	 * Renames the selected marker in the Markers panel.
	 */
	static readonly COMMAND_EDIT_RENAMESELECTEDMARKER: string;

	/**
	 * Switches all clips with realtime stretches to rendered.
	 */
	static readonly COMMAND_EDIT_RENDERALLSTRETCHEDCLIPS: string;

	/**
	 * Repeats the last command chosen.If appropriate will show dialog so you can adjust settings before applying.
	 */
	static readonly COMMAND_EDIT_REPEATLASTCOMMAND: string;

	/**
	 * Repeats the last command chosen.Will not show any dialogs.
	 */
	static readonly COMMAND_EDIT_REPEATLASTCOMMANDNOUI: string;

	/**
	 * Deletes the gap at the current playhead position in the selected track and shifts the content to fill the gap.
	 */
	static readonly COMMAND_EDIT_RIPPLEDELETEGAPINSELECTEDTRACK: string;

	/**
	 * Deletes the selected clips and shifts the content to fill the gaps.
	 */
	static readonly COMMAND_EDIT_RIPPLEDELETESELECTEDCLIPS: string;

	/**
	 * Deletes the time selection in all tracks and shifts the content to fill the gap.
	 */
	static readonly COMMAND_EDIT_RIPPLEDELETETIMESELECTIONINALLTRACKS: string;

	/**
	 * Deletes the time selection in selected clips and shifts the content to fill the gaps.
	 */
	static readonly COMMAND_EDIT_RIPPLEDELETETIMESELECTIONINSELECTEDCLIPS: string;

	/**
	 * Deletes the time selection in the selected track and shifts the content to fill the gap.
	 */
	static readonly COMMAND_EDIT_RIPPLEDELETETIMESELECTIONINSELECTEDTRACK: string;

	/**
	 * Select all content in the active panel.In the Multitrack Editor select all clips.In the Waveform Editor select all audio samples.
	 */
	static readonly COMMAND_EDIT_SELECTALL: string;

	/**
	 * Selects all clips in the selected track.
	 */
	static readonly COMMAND_EDIT_SELECTALLCLIPSINSELECTEDTRACK: string;

	/**
	 * Create a time selection across all content in the active panel.
	 */
	static readonly COMMAND_EDIT_SELECTALLTIME: string;

	/**
	 * Selects all Clips of the Audio Type Ambience.
	 */
	static readonly COMMAND_EDIT_SELECTCLIPSOFMIXTYPE_AMBIENCE: string;

	/**
	 * Selects all Clips of the Audio Type Dialogue.
	 */
	static readonly COMMAND_EDIT_SELECTCLIPSOFMIXTYPE_DIALOG: string;

	/**
	 * Selects all Clips of the Audio Type Music.
	 */
	static readonly COMMAND_EDIT_SELECTCLIPSOFMIXTYPE_MUSIC: string;

	/**
	 * Selects all Clips of the Audio Type Sound Effects.
	 */
	static readonly COMMAND_EDIT_SELECTCLIPSOFMIXTYPE_SFX: string;

	/**
	 * Selects clips after the playhead in the selected track.
	 */
	static readonly COMMAND_EDIT_SELECTCLIPSTOENDOFSELECTEDTRACK: string;

	/**
	 * Selects clips after the playhead to the end of the session.
	 */
	static readonly COMMAND_EDIT_SELECTCLIPSTOENDOFSESSION: string;

	/**
	 * Selects clips before the playhead to the start of the session.
	 */
	static readonly COMMAND_EDIT_SELECTCLIPSTOSTARTOFSESSION: string;

	/**
	 * Create a time selection across the visible content in the active panel.
	 */
	static readonly COMMAND_EDIT_SELECTCURRENTVIEWTIME: string;

	/**
	 * Invert the spectral selection.
	 */
	static readonly COMMAND_EDIT_SELECTINVERSE: string;

	/**
	 * Selects the next clip in the selected track.
	 */
	static readonly COMMAND_EDIT_SELECTNEXTCLIPINSELECTEDTRACK: string;

	/**
	 * Create a time selection that spans all selected clips.
	 */
	static readonly COMMAND_EDIT_SELECTTIMEAROUNDCLIPS: string;

	/**
	 * Move the selection in point to the playhead position.
	 */
	static readonly COMMAND_EDIT_SETINPOINTTOCTI: string;

	/**
	 * Move the selection out point to the playhead position.
	 */
	static readonly COMMAND_EDIT_SETOUTPOINTTOCTI: string;

	/**
	 * Customize the keyboard shortcuts.
	 */
	static readonly COMMAND_EDIT_SHORTCUTS: string;

	/**
	 * Extract Channels to Mono Files.
	 */
	static readonly COMMAND_EDIT_SPLITTOMONO: string;

	/**
	 * Toggle the enable state of all channels.
	 */
	static readonly COMMAND_EDIT_TOGGLEALLCHANNELS: string;

	/**
	 * Toggle the enable state of the center channel.
	 */
	static readonly COMMAND_EDIT_TOGGLECENTERCHANNEL: string;

	/**
	 * Toggle the visibility of clip stretch handles.
	 */
	static readonly COMMAND_EDIT_TOGGLECLIPSTRETCHING: string;

	/**
	 * Toggle the enable state of the front left channel.
	 */
	static readonly COMMAND_EDIT_TOGGLEFRONTLEFTCHANNEL: string;

	/**
	 * Toggle the enable state of the front right channel.
	 */
	static readonly COMMAND_EDIT_TOGGLEFRONTRIGHTCHANNEL: string;

	/**
	 * Toggle the enable state of the left surround channel.
	 */
	static readonly COMMAND_EDIT_TOGGLELEFTSURROUNDCHANNEL: string;

	/**
	 * Toggle the enable state of the low frequency effect channel.
	 */
	static readonly COMMAND_EDIT_TOGGLELFECHANNEL: string;

	/**
	 * Toggle the enable state of the right surround channel.
	 */
	static readonly COMMAND_EDIT_TOGGLERIGHTSURROUNDCHANNEL: string;

	/**
	 * Toggle all timeline snapping on|off.
	 */
	static readonly COMMAND_EDIT_TOGGLESNAPPING: string;

	/**
	 * Toggle snapping to clips.
	 */
	static readonly COMMAND_EDIT_TOGGLESNAPTOCLIPS: string;

	/**
	 * Toggle snapping to frames when viewing a frame time format.
	 */
	static readonly COMMAND_EDIT_TOGGLESNAPTOFRAMES: string;

	/**
	 * Toggle snapping to loop boundaries.
	 */
	static readonly COMMAND_EDIT_TOGGLESNAPTOLOOPS: string;

	/**
	 * Toggle snapping to markers.
	 */
	static readonly COMMAND_EDIT_TOGGLESNAPTOMARKERS: string;

	/**
	 * Toggle snapping to major ruler tick marks.
	 */
	static readonly COMMAND_EDIT_TOGGLESNAPTORULERCOARSE: string;

	/**
	 * Toggle snapping to all ruler tick marks.
	 */
	static readonly COMMAND_EDIT_TOGGLESNAPTORULERFINE: string;

	/**
	 * Toggle snapping to zero crossings.
	 */
	static readonly COMMAND_EDIT_TOGGLESNAPTOZEROCROSSINGS: string;

	/**
	 * Undo the last operation.
	 */
	static readonly COMMAND_EDIT_UNDO: string;

	/**
	 * Processes an adaptive noise reduction.
	 */
	static readonly COMMAND_EFFECTS_ADAPTIVENOISEREDUCTION: string;

	/**
	 * Amplifies channels of the waveform.
	 */
	static readonly COMMAND_EFFECTS_AMPLIFY: string;

	/**
	 * Add Analog Delay to waveform.
	 */
	static readonly COMMAND_EFFECTS_ANALOGDELAY: string;

	/**
	 * Removes clicks from the waveform.
	 */
	static readonly COMMAND_EFFECTS_AUTOCLICKREMOVER: string;

	/**
	 * Corrects the phase in a stereo waveform.
	 */
	static readonly COMMAND_EFFECTS_AUTOPHASECORRECTION: string;

	/**
	 * Learns sound model from the waveform selection.
	 */
	static readonly COMMAND_EFFECTS_CAPTUREDYNAMICNOISEREMOVALPROFILE: string;

	/**
	 * Captures noise print from the waveform.
	 */
	static readonly COMMAND_EFFECTS_CAPTURENOISEREDUCTIONPROFILE: string;

	/**
	 * Extract Center Channel.
	 */
	static readonly COMMAND_EFFECTS_CENTERCHANNELEXTRACT: string;

	/**
	 * Mixing Channels.
	 */
	static readonly COMMAND_EFFECTS_CHANNELMIXER: string;

	/**
	 * Add Chorus to waveform.
	 */
	static readonly COMMAND_EFFECTS_CHORUS: string;

	/**
	 * Add Chorus|Flanger to waveform.
	 */
	static readonly COMMAND_EFFECTS_CHORUSFLANGER: string;

	/**
	 * Clears the contents of the Effects Rack panel.
	 */
	static readonly COMMAND_EFFECTS_CLEAREFFECTSRACK: string;

	/**
	 * Apply the Click|Pop Eliminator effect.
	 */
	static readonly COMMAND_EFFECTS_CLICKPOPELIMINATOR: string;

	/**
	 * Analyzes and fixes click|pop defects from the waveform.
	 */
	static readonly COMMAND_EFFECTS_CLICKPOPELIMINATORANALYSIS: string;

	/**
	 * Analyzes and fixes clipped samples from the waveform.
	 */
	static readonly COMMAND_EFFECTS_CLIPRESTORATIONANALYSIS: string;

	/**
	 * Add Convolution Reverb to waveform.
	 */
	static readonly COMMAND_EFFECTS_CONVOLUTIONREVERB: string;

	/**
	 * Add DeEsser to waveform.
	 */
	static readonly COMMAND_EFFECTS_DEESSER: string;

	/**
	 * Add DeHummer to waveform.
	 */
	static readonly COMMAND_EFFECTS_DEHUMMER: string;

	/**
	 * Add Delay to waveform.
	 */
	static readonly COMMAND_EFFECTS_DELAY: string;

	/**
	 * Deletes all effects from the Effects Rack.
	 */
	static readonly COMMAND_EFFECTS_DELETEALLEFFECTS: string;

	/**
	 * Deletes selected effects from the Effects Rack.
	 */
	static readonly COMMAND_EFFECTS_DELETESELECTEDEFFECTS: string;

	/**
	 * Analyzes and removes silence from the waveform.
	 */
	static readonly COMMAND_EFFECTS_DELETESILENCEANALYSIS: string;

	/**
	 * Add Distortion to waveform.
	 */
	static readonly COMMAND_EFFECTS_DISTORTION: string;

	/**
	 * Apply Doppler effect to waveform.
	 */
	static readonly COMMAND_EFFECTS_DOPPLER: string;

	/**
	 * Processes the dynamics of the waveform.
	 */
	static readonly COMMAND_EFFECTS_DYNAMICS: string;

	/**
	 * Add echo to waveform.
	 */
	static readonly COMMAND_EFFECTS_ECHO: string;

	/**
	 * Enables the Effects Rack panel to edit clip effects.
	 */
	static readonly COMMAND_EFFECTS_EDITCLIPEFFECTS: string;

	/**
	 * Edits the selected effect in the Effects Rack.
	 */
	static readonly COMMAND_EFFECTS_EDITSELECTEDEFFECT: string;

	/**
	 * Enables the Effects Rack panel to edit track effects.
	 */
	static readonly COMMAND_EFFECTS_EDITTRACKEFFECTS: string;

	/**
	 * 
	 */
	static readonly COMMAND_EFFECTS_EFFECTSRACKPANELTOFRONTANDACTIVE: string;

	/**
	 * Processes a fade envelope using an amplification percentage scale.
	 */
	static readonly COMMAND_EFFECTS_FADEENVELOPE: string;

	/**
	 * Apply FFT Filter to waveform.
	 */
	static readonly COMMAND_EFFECTS_FFTFILTER: string;

	/**
	 * Add Flanger to waveform.
	 */
	static readonly COMMAND_EFFECTS_FLANGER: string;

	/**
	 * Add reverb to waveform.
	 */
	static readonly COMMAND_EFFECTS_FULLREVERB: string;

	/**
	 * Processes a gain envelope using a decibel scale.
	 */
	static readonly COMMAND_EFFECTS_GAINENVELOPE: string;

	/**
	 * Creates specified noise as a new file.
	 */
	static readonly COMMAND_EFFECTS_GENERATENOISE: string;

	/**
	 * Creates specified speech as a new file.
	 */
	static readonly COMMAND_EFFECTS_GENERATESPEECH: string;

	/**
	 * Creates specified tone as a new file.
	 */
	static readonly COMMAND_EFFECTS_GENERATETONES: string;

	/**
	 * Apply graphic EQ to waveform.
	 */
	static readonly COMMAND_EFFECTS_GRAPHICEQ10BANDS: string;

	/**
	 * Apply graphic EQ to waveform.
	 */
	static readonly COMMAND_EFFECTS_GRAPHICEQ20BANDS: string;

	/**
	 * Apply graphic EQ to waveform.
	 */
	static readonly COMMAND_EFFECTS_GRAPHICEQ30BANDS: string;

	/**
	 * Apply the Graphic Phase Shifter effect.
	 */
	static readonly COMMAND_EFFECTS_GRAPHICPHASESHIFTER: string;

	/**
	 * Add GuitarSuite to waveform.
	 */
	static readonly COMMAND_EFFECTS_GUITARSUITE: string;

	/**
	 * Hard limits the waveform.
	 */
	static readonly COMMAND_EFFECTS_HARDLIMIT: string;

	/**
	 * Processes a hiss reduction.
	 */
	static readonly COMMAND_EFFECTS_HISSREDUCTIONPROCESS: string;

	/**
	 * Corrects the leveling of a waveform (best for speech).
	 */
	static readonly COMMAND_EFFECTS_INTRACLIP: string;

	/**
	 * Inverts the audio in the current selection.
	 */
	static readonly COMMAND_EFFECTS_INVERT: string;

	/**
	 * Analyzes and marks non-silence in the waveform.
	 */
	static readonly COMMAND_EFFECTS_MARKAUDIOANALYSIS: string;

	/**
	 * Add Mastering to waveform.
	 */
	static readonly COMMAND_EFFECTS_MASTERING: string;

	/**
	 * Opens the Match Loudness panel.
	 */
	static readonly COMMAND_EFFECTS_MATCHVOLUME: string;

	/**
	 * Add Multiband Compressor to waveform.
	 */
	static readonly COMMAND_EFFECTS_MULTIBANDCOMPRESSOR: string;

	/**
	 * Processes a noise reduction.
	 */
	static readonly COMMAND_EFFECTS_NOISEREDUCTIONPROCESS: string;

	/**
	 * Normalizes the waveform.
	 */
	static readonly COMMAND_EFFECTS_NORMALIZE: string;

	/**
	 * Apply Notch Filter to waveform.
	 */
	static readonly COMMAND_EFFECTS_NOTCHFILTER: string;

	/**
	 * Processes the dynamics of the waveform.
	 */
	static readonly COMMAND_EFFECTS_PARAMETRICDYNAMICS: string;

	/**
	 * Apply Parametric EQ to waveform.
	 */
	static readonly COMMAND_EFFECTS_PARAMETRICEQ: string;

	/**
	 * Add Phaser to waveform.
	 */
	static readonly COMMAND_EFFECTS_PHASER: string;

	/**
	 * Processes a pitch envelope over time.
	 */
	static readonly COMMAND_EFFECTS_PITCHBENDER: string;

	/**
	 * Automatically correct the pitch.
	 */
	static readonly COMMAND_EFFECTS_PITCHCORRECT: string;

	/**
	 * Correct pitch manually over time with an envelope.
	 */
	static readonly COMMAND_EFFECTS_PITCHCORRECTMANUAL: string;

	/**
	 * Shift or stretch the pitch.
	 */
	static readonly COMMAND_EFFECTS_PITCHSHIFTER: string;

	/**
	 * Opens the Audio plug-in manager dialog.
	 */
	static readonly COMMAND_EFFECTS_PLUGINMANAGER: string;

	/**
	 * Toggles the power state of the entire effects rack.
	 */
	static readonly COMMAND_EFFECTS_POWEREFFECTSRACK: string;

	/**
	 * Toggles the power state of selected effects in the effects rack.
	 */
	static readonly COMMAND_EFFECTS_POWERSELECTEDEFFECTS: string;

	/**
	 * Add Loudness Radar Meter to waveform.
	 */
	static readonly COMMAND_EFFECTS_RADARMETER: string;

	/**
	 * Renders all effects from the Effects Rack into the current audio file.
	 */
	static readonly COMMAND_EFFECTS_RENDEREFFECTSRACK: string;

	/**
	 * Replace unwanted selected sound with surrounding material.
	 */
	static readonly COMMAND_EFFECTS_REPAIR: string;

	/**
	 * Add reverb to waveform.
	 */
	static readonly COMMAND_EFFECTS_REVERB: string;

	/**
	 * Reverses the audio in the current selection.
	 */
	static readonly COMMAND_EFFECTS_REVERSE: string;

	/**
	 * Apply Scientific Filter to waveform.
	 */
	static readonly COMMAND_EFFECTS_SCIENTIFICFILTER: string;

	/**
	 * Silences the audio in the current selection.
	 */
	static readonly COMMAND_EFFECTS_SILENCE: string;

	/**
	 * Add Single-band Compressor to waveform.
	 */
	static readonly COMMAND_EFFECTS_SINGLEBANDCOMPRESSOR: string;

	/**
	 * Removes a specified sound.
	 */
	static readonly COMMAND_EFFECTS_SOUNDREMOVALPROCESS: string;

	/**
	 * Position and expand the stereo image.
	 */
	static readonly COMMAND_EFFECTS_STEREOEXPANDER: string;

	/**
	 * Stretch waveform.
	 */
	static readonly COMMAND_EFFECTS_STRETCH: string;

	/**
	 * Add reverb to waveform.
	 */
	static readonly COMMAND_EFFECTS_STUDIOREVERB: string;

	/**
	 * Add Surround Reverb to waveform.
	 */
	static readonly COMMAND_EFFECTS_SURROUNDREVERB: string;

	/**
	 * Add Tube-modeled Compressor to waveform.
	 */
	static readonly COMMAND_EFFECTS_TUBEMODELEDCOMPRESSOR: string;

	/**
	 * Add Vocal Enhancer to waveform.
	 */
	static readonly COMMAND_EFFECTS_VOCALENHANCER: string;

	/**
	 * 
	 */
	static readonly COMMAND_FAVORITES_AUTO_HEAL: string;

	/**
	 * 
	 */
	static readonly COMMAND_FAVORITES_CONVERT_TO_5_1: string;

	/**
	 * 
	 */
	static readonly COMMAND_FAVORITES_CONVERT_TO_MONO: string;

	/**
	 * 
	 */
	static readonly COMMAND_FAVORITES_CONVERT_TO_STEREO: string;

	/**
	 * Allows the user to delete a favorite.
	 */
	static readonly COMMAND_FAVORITES_DELETEFAVORITE: string;

	/**
	 * 
	 */
	static readonly COMMAND_FAVORITES_DE_ESSER: string;

	/**
	 * Open the Favorites panel to edit favorites.
	 */
	static readonly COMMAND_FAVORITES_EDITFAVORITES: string;

	/**
	 * 
	 */
	static readonly COMMAND_FAVORITES_FADE_IN: string;

	/**
	 * 
	 */
	static readonly COMMAND_FAVORITES_FADE_OUT: string;

	/**
	 * 
	 */
	static readonly COMMAND_FAVORITES_HARD_LIMIT_TO__0_1_DB: string;

	/**
	 * 
	 */
	static readonly COMMAND_FAVORITES_LOWER_PITCH: string;

	/**
	 * 
	 */
	static readonly COMMAND_FAVORITES_NORMALIZE_TO__0_1_DB: string;

	/**
	 * 
	 */
	static readonly COMMAND_FAVORITES_NORMALIZE_TO__3_DB: string;

	/**
	 * 
	 */
	static readonly COMMAND_FAVORITES_RAISE_PITCH: string;

	/**
	 * 
	 */
	static readonly COMMAND_FAVORITES_REMOVE_60_HZ_HUM: string;

	/**
	 * 
	 */
	static readonly COMMAND_FAVORITES_REMOVE_VOCALS: string;

	/**
	 * 
	 */
	static readonly COMMAND_FAVORITES_REPAIR_DC_OFFSET: string;

	/**
	 * Start recording editor actions into a favorite.
	 */
	static readonly COMMAND_FAVORITES_STARTRECORDINGFAVORITE: string;

	/**
	 * Stop recording editor actions and create a new favorite.
	 */
	static readonly COMMAND_FAVORITES_STOPRECORDINGFAVORITE: string;

	/**
	 * 
	 */
	static readonly COMMAND_FAVORITES_TELEPHONE_VOICE: string;

	/**
	 * 
	 */
	static readonly COMMAND_FAVORITES_VOICE_OVER_COMPRESSOR: string;

	/**
	 * Clear the recent files listed.
	 */
	static readonly COMMAND_FILE_CLEARRECENT: string;

	/**
	 * Close the current file.
	 */
	static readonly COMMAND_FILE_CLOSE: string;

	/**
	 * Close all files.
	 */
	static readonly COMMAND_FILE_CLOSEALL: string;

	/**
	 * Close current session and its referenced media.
	 */
	static readonly COMMAND_FILE_CLOSESESSIONANDITSMEDIA: string;

	/**
	 * Close files that are not referenced by any open session.
	 */
	static readonly COMMAND_FILE_CLOSEUNUSEDMEDIA: string;

	/**
	 * Exports application settings to chosen file.
	 */
	static readonly COMMAND_FILE_EXPORTAPPLICATIONSETTINGS: string;

	/**
	 * Export the audio of all range markers to separate files.
	 */
	static readonly COMMAND_FILE_EXPORT_ALLMARKERRANGES: string;

	/**
	 * Burn the audio file to a blank compact disc.
	 */
	static readonly COMMAND_FILE_EXPORT_BURNAUDIOTOCD: string;

	/**
	 * Export the current session to a new XML file that can be opened by Adobe Premiere Pro.
	 */
	static readonly COMMAND_FILE_EXPORT_EXPORTTOADOBEPREMIEREPRO: string;

	/**
	 * Mixdown the output of a track selection and export it with Adobe Media Encoder.
	 */
	static readonly COMMAND_FILE_EXPORT_EXPORTWITHADOBEMEDIAENCODER: string;

	/**
	 * Export the current session to FCP XML Interchange Format.
	 */
	static readonly COMMAND_FILE_EXPORT_FCXML: string;

	/**
	 * Export the current file to a new file.
	 */
	static readonly COMMAND_FILE_EXPORT_FILE: string;

	/**
	 * Export selected markers to file.
	 */
	static readonly COMMAND_FILE_EXPORT_MARKERS: string;

	/**
	 * Mixdown the entire output of master track to new file.
	 */
	static readonly COMMAND_FILE_EXPORT_MULTITRACKMIXDOWNALL: string;

	/**
	 * Mixdown the output of the master track in the selected clips to a new file.
	 */
	static readonly COMMAND_FILE_EXPORT_MULTITRACKMIXDOWNSELECTEDCLIPS: string;

	/**
	 * Mixdown to one or more files the output of the master track in regions corresponding to the selected range markers.
	 */
	static readonly COMMAND_FILE_EXPORT_MULTITRACKMIXDOWNSELECTEDMARKERRANGES: string;

	/**
	 * Mixdown the output of the master track in the time selection to a new file.
	 */
	static readonly COMMAND_FILE_EXPORT_MULTITRACKMIXDOWNSELECTION: string;

	/**
	 * Export the current session to a new OMF file.
	 */
	static readonly COMMAND_FILE_EXPORT_OMF: string;

	/**
	 * Export the current session to a new file.
	 */
	static readonly COMMAND_FILE_EXPORT_SESSION: string;

	/**
	 * Export the current session as a template for creating future sessions.
	 */
	static readonly COMMAND_FILE_EXPORT_SESSIONASTEMPLATE: string;

	/**
	 * Extracts audio from audio CD tracks.
	 */
	static readonly COMMAND_FILE_EXTRACTAUDIOFROMCD: string;

	/**
	 * Imports application settings from chosen file.
	 */
	static readonly COMMAND_FILE_IMPORTAPPLICATIONSETTINGS: string;

	/**
	 * Imports chosen file.
	 */
	static readonly COMMAND_FILE_IMPORTFILE: string;

	/**
	 * Imports chosen files with a user-specified data type.
	 */
	static readonly COMMAND_FILE_IMPORTRAWDATA: string;

	/**
	 * Imports markers from chosen file.
	 */
	static readonly COMMAND_FILE_IMPORT_MARKERS: string;

	/**
	 * Creates an empty audio file.
	 */
	static readonly COMMAND_FILE_NEWAUDIOFILE: string;

	/**
	 * Creates an empty CD Layout.
	 */
	static readonly COMMAND_FILE_NEWCDLAYOUT: string;

	/**
	 * Creates an empty session.
	 */
	static readonly COMMAND_FILE_NEWSESSION: string;

	/**
	 * Open an existing file.
	 */
	static readonly COMMAND_FILE_OPEN: string;

	/**
	 * Open existing files and append them to the end of the current open file.
	 */
	static readonly COMMAND_FILE_OPENAPPENDTOCURRENT: string;

	/**
	 * Open existing files and append them to the end of a new file.
	 */
	static readonly COMMAND_FILE_OPENAPPENDTONEW: string;

	/**
	 * Opens the most recently used file.
	 */
	static readonly COMMAND_FILE_OPENMRUFILE: string;

	/**
	 * Opens the most recently used session.
	 */
	static readonly COMMAND_FILE_OPENMRUSESSION: string;

	/**
	 * Exit the application.
	 */
	static readonly COMMAND_FILE_QUIT: string;

	/**
	 * Reveal chosen file in the OS.
	 */
	static readonly COMMAND_FILE_REVEAL: string;

	/**
	 * Reveal chosen file in the Media Browser panel.
	 */
	static readonly COMMAND_FILE_REVEALINMEDIABROWSER: string;

	/**
	 * Save the current file.
	 */
	static readonly COMMAND_FILE_SAVE: string;

	/**
	 * Save all files.
	 */
	static readonly COMMAND_FILE_SAVEALL: string;

	/**
	 * Save all audio files to a specific format.
	 */
	static readonly COMMAND_FILE_SAVEALLAUDIOASBATCHPROCESS: string;

	/**
	 * Save the current file to a new file.
	 */
	static readonly COMMAND_FILE_SAVEAS: string;

	/**
	 * Save the current selection to a new file.
	 */
	static readonly COMMAND_FILE_SAVESELECTIONAS: string;

	/**
	 * Switch to the next opened File.
	 */
	static readonly COMMAND_FILE_SWITCHTONEXTFILE: string;

	/**
	 * Switch to the previous opened File.
	 */
	static readonly COMMAND_FILE_SWITCHTOPREVIOUSFILE: string;

	/**
	 * Open the About dialog.
	 */
	static readonly COMMAND_HELP_ABOUT: string;

	/**
	 * Browse Addons.
	 */
	static readonly COMMAND_HELP_ADDONS: string;

	/**
	 * Open Audition Help.
	 */
	static readonly COMMAND_HELP_ADOBEAUDITIONHELP: string;

	/**
	 * Download SDKs and other developer resources.
	 */
	static readonly COMMAND_HELP_DEVELOPERCENTER: string;

	/**
	 * Download Effects and other content.
	 */
	static readonly COMMAND_HELP_DOWNLOAD: string;

	/**
	 * Launch Improvement Program Options Dialog.
	 */
	static readonly COMMAND_HELP_IMPROVEMENTPROGRAM: string;

	/**
	 * Go to Audition Keyboard Shortcuts Help.
	 */
	static readonly COMMAND_HELP_KEYBOARDSHORTCUTS: string;

	/**
	 * Open Audition Learn.
	 */
	static readonly COMMAND_HELP_ONBOARDING: string;

	/**
	 * Reveals the log files for Adobe Audition in the OS.
	 */
	static readonly COMMAND_HELP_REVEALLOGFILES: string;

	/**
	 * Submit a bug report or feature request.
	 */
	static readonly COMMAND_HELP_SENDFEEDBACK: string;

	/**
	 * Go to Audition Support Center.
	 */
	static readonly COMMAND_HELP_SUPPORTCENTER: string;

	/**
	 * Go to Audition User Forums.
	 */
	static readonly COMMAND_HELP_USERFORUMS: string;

	/**
	 * Executes the End key.
	 */
	static readonly COMMAND_KEYBOARD_END: string;

	/**
	 * Executes the Enter key.
	 */
	static readonly COMMAND_KEYBOARD_ENTER: string;

	/**
	 * Executes the ESC key.
	 */
	static readonly COMMAND_KEYBOARD_ESCAPE: string;

	/**
	 * Executes the Home key.
	 */
	static readonly COMMAND_KEYBOARD_HOME: string;

	/**
	 * Show Dynamic Peaks.
	 */
	static readonly COMMAND_METERING_DYNAMICPEAKS: string;

	/**
	 * Resets Clip Indicators.
	 */
	static readonly COMMAND_METERING_RESETINDICATORS: string;

	/**
	 * Sets the range of level meter to 120dB.
	 */
	static readonly COMMAND_METERING_SET120DBRANGE: string;

	/**
	 * Sets the range of level meter to 24dB.
	 */
	static readonly COMMAND_METERING_SET24DBRANGE: string;

	/**
	 * Sets the range of level meter to 48dB.
	 */
	static readonly COMMAND_METERING_SET48DBRANGE: string;

	/**
	 * Sets the range of level meter to 60dB.
	 */
	static readonly COMMAND_METERING_SET60DBRANGE: string;

	/**
	 * Sets the range of level meter to 72dB.
	 */
	static readonly COMMAND_METERING_SET72DBRANGE: string;

	/**
	 * Sets the range of level meter to 96dB.
	 */
	static readonly COMMAND_METERING_SET96DBRANGE: string;

	/**
	 * Displays LED like meter bars.
	 */
	static readonly COMMAND_METERING_SHOWLEDMETERS: string;

	/**
	 * Displays the meter bars with a color gradient.
	 */
	static readonly COMMAND_METERING_SHOWMETERBARSGRADIENT: string;

	/**
	 * Show Valleys.
	 */
	static readonly COMMAND_METERING_SHOWVALLEYS: string;

	/**
	 * Show Static Peaks.
	 */
	static readonly COMMAND_METERING_STATICPEAKS: string;

	/**
	 * Enable Input Metering.
	 */
	static readonly COMMAND_METERING_TOGGLEMETERINPUTSIGNAL: string;

	/**
	 * Add a new 5.1 audio track.
	 */
	static readonly COMMAND_MULTITRACK_ADD51AUDIOTRACK: string;

	/**
	 * Add a new 5.1 bus track.
	 */
	static readonly COMMAND_MULTITRACK_ADD51BUSTRACK: string;

	/**
	 * Add a new mono audio track.
	 */
	static readonly COMMAND_MULTITRACK_ADDMONOAUDIOTRACK: string;

	/**
	 * Add a new mono bus track.
	 */
	static readonly COMMAND_MULTITRACK_ADDMONOBUSTRACK: string;

	/**
	 * Add a new stereo audio track.
	 */
	static readonly COMMAND_MULTITRACK_ADDSTEREOAUDIOTRACK: string;

	/**
	 * Add a new stereo bus track.
	 */
	static readonly COMMAND_MULTITRACK_ADDSTEREOBUSTRACK: string;

	/**
	 * Add a new video track.
	 */
	static readonly COMMAND_MULTITRACK_ADDVIDEOTRACK: string;

	/**
	 * Bounce selected track to a new track.
	 */
	static readonly COMMAND_MULTITRACK_BOUNCESELECTEDTRACKTONEWTRACK: string;

	/**
	 * Bounce selected clips in the time selection to a new track.
	 */
	static readonly COMMAND_MULTITRACK_BOUNCETONEWTRACKSELECTEDCLIPSINRANGE: string;

	/**
	 * Bounce selected clips only to a new track.
	 */
	static readonly COMMAND_MULTITRACK_BOUNCETONEWTRACKSELECTEDCLIPSONLY: string;

	/**
	 * Bounce a time selection to a new track.
	 */
	static readonly COMMAND_MULTITRACK_BOUNCETONEWTRACKTIMESELECTIONRANGE: string;

	/**
	 * Delete the currently selected track.
	 */
	static readonly COMMAND_MULTITRACK_DELETETRACK: string;

	/**
	 * Duplicate a track.
	 */
	static readonly COMMAND_MULTITRACK_DUPLICATETRACK: string;

	/**
	 * Edit the metronome pattern.
	 */
	static readonly COMMAND_MULTITRACK_EDITMETRONOMEPATTERN: string;

	/**
	 * Show clip keyframe nodes and allow editing.
	 */
	static readonly COMMAND_MULTITRACK_ENABLECLIPKEYFRAMEEDITING: string;

	/**
	 * Toggle Solo for the Selected Track Exclusively.
	 */
	static readonly COMMAND_MULTITRACK_EXCLUSIVELYTOGGLESOLOFORSELECTED: string;

	/**
	 * Imports the specified files and inserts them into the active session as a clips.
	 */
	static readonly COMMAND_MULTITRACK_IMPORTANDINSERTFILESASCLIPS: string;

	/**
	 * Minimize the currently selected track.
	 */
	static readonly COMMAND_MULTITRACK_MINIMIZESELECTEDTRACK: string;

	/**
	 * Mixdown the entire output of master track to new unsaved file.
	 */
	static readonly COMMAND_MULTITRACK_MIXDOWNALLTONEWFILE: string;

	/**
	 * Mixdown the output of the master track in the selected clips to a new unsaved file.
	 */
	static readonly COMMAND_MULTITRACK_MIXDOWNSELECTEDCLIPSTONEWFILE: string;

	/**
	 * Mixdown the output of the master track in the time selection to a new unsaved file.
	 */
	static readonly COMMAND_MULTITRACK_MIXDOWNSELECTIONTONEWFILE: string;

	/**
	 * Move the currently selected track down.
	 */
	static readonly COMMAND_MULTITRACK_MOVETRACKDOWN: string;

	/**
	 * Move the currently selected track up.
	 */
	static readonly COMMAND_MULTITRACK_MOVETRACKUP: string;

	/**
	 * Toggle Solo for the Selected Track Non-exclusively.
	 */
	static readonly COMMAND_MULTITRACK_NONEXCLUSIVELYTOGGLESOLOFORSELECTED: string;

	/**
	 * Play hidden clips.
	 */
	static readonly COMMAND_MULTITRACK_PLAYHIDDENCLIPS: string;

	/**
	 * Export the current session to a new XML file that can be opened by Adobe Premiere Pro.
	 */
	static readonly COMMAND_MULTITRACK_PREMIEREPROXMLSEQUENCE: string;

	/**
	 * Moves the selection to the next track.
	 */
	static readonly COMMAND_MULTITRACK_SELECTNEXTTRACK: string;

	/**
	 * Moves the selection to the previous track.
	 */
	static readonly COMMAND_MULTITRACK_SELECTPREVIOUSTRACK: string;

	/**
	 * Set the metronome sound type to African 1.
	 */
	static readonly COMMAND_MULTITRACK_SETMETRONOMESOUNDTYPEAFRICAN1: string;

	/**
	 * Set the metronome sound type to African 2.
	 */
	static readonly COMMAND_MULTITRACK_SETMETRONOMESOUNDTYPEAFRICAN2: string;

	/**
	 * Set the metronome sound type to Beeps.
	 */
	static readonly COMMAND_MULTITRACK_SETMETRONOMESOUNDTYPEBEEPS: string;

	/**
	 * Set the metronome sound type to Cymbals.
	 */
	static readonly COMMAND_MULTITRACK_SETMETRONOMESOUNDTYPECYMBALS: string;

	/**
	 * Set the metronome sound type to Kit.
	 */
	static readonly COMMAND_MULTITRACK_SETMETRONOMESOUNDTYPEKIT: string;

	/**
	 * Set the metronome sound type to Latin 1.
	 */
	static readonly COMMAND_MULTITRACK_SETMETRONOMESOUNDTYPELATIN1: string;

	/**
	 * Set the metronome sound type to Latin 2.
	 */
	static readonly COMMAND_MULTITRACK_SETMETRONOMESOUNDTYPELATIN2: string;

	/**
	 * Set the metronome sound type to Latin 3.
	 */
	static readonly COMMAND_MULTITRACK_SETMETRONOMESOUNDTYPELATIN3: string;

	/**
	 * Set the metronome sound type to Sticks.
	 */
	static readonly COMMAND_MULTITRACK_SETMETRONOMESOUNDTYPESTICKS: string;

	/**
	 * Set the metronome sound type to Tabla.
	 */
	static readonly COMMAND_MULTITRACK_SETMETRONOMESOUNDTYPETABLA: string;

	/**
	 * Toggle Arm for Record for All Tracks.
	 */
	static readonly COMMAND_MULTITRACK_TOGGLEARMFORRECORDFORALL: string;

	/**
	 * Toggle Arm for Record for the Selected Track.
	 */
	static readonly COMMAND_MULTITRACK_TOGGLEARMFORRECORDFORSELECTED: string;

	/**
	 * Toggle the multitrack metronome.
	 */
	static readonly COMMAND_MULTITRACK_TOGGLEMETRONOME: string;

	/**
	 * Toggle Monitor Input for All Tracks.
	 */
	static readonly COMMAND_MULTITRACK_TOGGLEMONITORINPUTFORALL: string;

	/**
	 * Toggle Monitor Input for the Selected Track.
	 */
	static readonly COMMAND_MULTITRACK_TOGGLEMONITORINPUTFORSELECTED: string;

	/**
	 * Toggle Mute for All Tracks.
	 */
	static readonly COMMAND_MULTITRACK_TOGGLEMUTEFORALL: string;

	/**
	 * Toggle Mute for the Selected Track.
	 */
	static readonly COMMAND_MULTITRACK_TOGGLEMUTEFORSELECTED: string;

	/**
	 * Toggle Solo for All Tracks.
	 */
	static readonly COMMAND_MULTITRACK_TOGGLESOLOFORALL: string;

	/**
	 * Toggle Solo Safe for the Selected Track.
	 */
	static readonly COMMAND_MULTITRACK_TOGGLESOLOSAFEFORSELECTED: string;

	/**
	 * Open the Audio Channel Mapping pane in the Preferences dialog.
	 */
	static readonly COMMAND_PREFERENCES_AUDIOCHANNELMAPPING: string;

	/**
	 * Open the Audio Hardware pane in the Preferences dialog.
	 */
	static readonly COMMAND_PREFERENCES_AUDIOHARDWARE: string;

	/**
	 * Open the Auto Save pane of the Preferences dialog.
	 */
	static readonly COMMAND_PREFERENCES_AUTOSAVE: string;

	/**
	 * Open the Control Surface pane of the Preferences dialog.
	 */
	static readonly COMMAND_PREFERENCES_CONTROLSURFACE: string;

	/**
	 * Open the Data pane in the Preferences dialog.
	 */
	static readonly COMMAND_PREFERENCES_DATA: string;

	/**
	 * Open the Effects pane in the Preferences dialog.
	 */
	static readonly COMMAND_PREFERENCES_EFFECTS: string;

	/**
	 * Open the General pane of the Preferences dialog.
	 */
	static readonly COMMAND_PREFERENCES_GENERAL: string;

	/**
	 * Open the most recently accessed pane of the Preferences dialog.
	 */
	static readonly COMMAND_PREFERENCES_LASTPANE: string;

	/**
	 * Open the Media & Disk Cache pane in the Preferences dialog.
	 */
	static readonly COMMAND_PREFERENCES_MEDIA: string;

	/**
	 * Open the Memory pane in the Preferences dialog.
	 */
	static readonly COMMAND_PREFERENCES_MEMORY: string;

	/**
	 * Open the Markers & Metadata pane of the Preferences dialog.
	 */
	static readonly COMMAND_PREFERENCES_METADATA: string;

	/**
	 * Open the Multitrack pane of the Preferences dialog.
	 */
	static readonly COMMAND_PREFERENCES_MULTITRACK: string;

	/**
	 * Open the Multitrack Clips pane of the Preferences dialog.
	 */
	static readonly COMMAND_PREFERENCES_MULTITRACKCLIPS: string;

	/**
	 * Open the Playback pane of the Preferences dialog.
	 */
	static readonly COMMAND_PREFERENCES_PLAYBACK: string;

	/**
	 * Open the Spectral Displays pane of the Preferences dialog.
	 */
	static readonly COMMAND_PREFERENCES_SPECTRALDISPLAY: string;

	/**
	 * Open the Time Display pane of the Preferences dialog.
	 */
	static readonly COMMAND_PREFERENCES_TIMEDISPLAY: string;

	/**
	 * Toggle the "Enable input metering when arming tracks for record" preference.
	 */
	static readonly COMMAND_PREFERENCES_TOGGLEENABLEINPUTMETERING: string;

	/**
	 * Toggle the "Enable smart monitoring when arming tracks for record" preference.
	 */
	static readonly COMMAND_PREFERENCES_TOGGLEENABLESMARTMONITORING: string;

	/**
	 * Toggle the "Play audio while scrubbing the playhead" preference.
	 */
	static readonly COMMAND_PREFERENCES_TOGGLEPLAYAUDIOWHILESCRUBBING: string;

	/**
	 * Toggle the "Auto-scroll during playback and recording" preference.
	 */
	static readonly COMMAND_PREFERENCES_TOGGLEPLAYBACKAUTOSCROLLENABLED: string;

	/**
	 * Toggle the "Play only selected frequencies when a spectral frequency selection exists" preference.
	 */
	static readonly COMMAND_PREFERENCES_TOGGLEPLAYONLYSELECTEDFREQUENCIES: string;

	/**
	 * Toggle the "Stop at the end of the selection when playback starts within a selected region" preference.
	 */
	static readonly COMMAND_PREFERENCES_TOGGLEPLAYONLYSELECTEDREGION: string;

	/**
	 * Toggle the "Return playhead to start position on stop" preference.
	 */
	static readonly COMMAND_PREFERENCES_TOGGLEPLAYSTYLEISLEGACY: string;

	/**
	 * Toggle the "Centered auto-scrolling in Waveform Editor" preference.
	 */
	static readonly COMMAND_PREFERENCES_TOGGLESMOOTHSCROLLEV: string;

	/**
	 * Toggle the "Centered auto-scrolling in Multitrack Editor" preference.
	 */
	static readonly COMMAND_PREFERENCES_TOGGLESMOOTHSCROLLMT: string;

	/**
	 * Toggle the "Synchronize playhead selection and zoom range between documents" preference.
	 */
	static readonly COMMAND_PREFERENCES_TOGGLESYNCSELECTIONVIEWCTI: string;

	/**
	 * Open the Appearance pane in the Preferences dialog.
	 */
	static readonly COMMAND_PREFERENCES_USERINTERFACE: string;

	/**
	 * Open the Video pane of the Preferences dialog.
	 */
	static readonly COMMAND_PREFERENCES_VIDEO: string;

	/**
	 * Decrease the spectral frequency display brush opacity.
	 */
	static readonly COMMAND_TOOLS_DECREASEBRUSHOPACITY: string;

	/**
	 * Decrease the spectral frequency display brush size.
	 */
	static readonly COMMAND_TOOLS_DECREASEBRUSHSIZE: string;

	/**
	 * Choose the Spot Healing Brush tool.
	 */
	static readonly COMMAND_TOOLS_HEALINGBRUSH: string;

	/**
	 * Increase the spectral frequency display brush opacity.
	 */
	static readonly COMMAND_TOOLS_INCREASEBRUSHOPACITY: string;

	/**
	 * Increase the spectral frequency display brush size.
	 */
	static readonly COMMAND_TOOLS_INCREASEBRUSHSIZE: string;

	/**
	 * Choose the Lasso Selection tool.
	 */
	static readonly COMMAND_TOOLS_LASSOSELECTION: string;

	/**
	 * Choose the Marquee Selection tool.
	 */
	static readonly COMMAND_TOOLS_MARQUEESELECTION: string;

	/**
	 * Choose the Move tool.
	 */
	static readonly COMMAND_TOOLS_MOVE: string;

	/**
	 * Choose the Paintbrush Selection tool.
	 */
	static readonly COMMAND_TOOLS_PAINTBRUSHSELECTION: string;

	/**
	 * Choose the current Razor tool or cycle through the razor tools.
	 */
	static readonly COMMAND_TOOLS_RAZOR: string;

	/**
	 * Choose the Razor tool which acts on all clips.
	 */
	static readonly COMMAND_TOOLS_RAZORALLCLIPS: string;

	/**
	 * Choose the Razor tool which acts on selected clips.
	 */
	static readonly COMMAND_TOOLS_RAZORSELECTEDCLIPS: string;

	/**
	 * Choose the Slip tool.
	 */
	static readonly COMMAND_TOOLS_SLIP: string;

	/**
	 * Choose the Time Selection tool.
	 */
	static readonly COMMAND_TOOLS_TIMESELECTION: string;

	/**
	 * Remove the selection if it exists and move the playhead to the left.
	 */
	static readonly COMMAND_TRANSPORT_COLLAPSESELECTIONLEFT: string;

	/**
	 * Remove the selection if it exists and move the playhead one page to the left.
	 */
	static readonly COMMAND_TRANSPORT_COLLAPSESELECTIONPAGELEFT: string;

	/**
	 * Remove the selection if it exists and move the playhead one page to the right.
	 */
	static readonly COMMAND_TRANSPORT_COLLAPSESELECTIONPAGERIGHT: string;

	/**
	 * Remove the selection if it exists and move the playhead to the right.
	 */
	static readonly COMMAND_TRANSPORT_COLLAPSESELECTIONRIGHT: string;

	/**
	 * Move the playhead one page to the left.
	 */
	static readonly COMMAND_TRANSPORT_MOVECTIPAGELEFT: string;

	/**
	 * Move the playhead one page to the right.
	 */
	static readonly COMMAND_TRANSPORT_MOVECTIPAGERIGHT: string;

	/**
	 * Remove the selection if it exists and move the playhead to the beginning.
	 */
	static readonly COMMAND_TRANSPORT_MOVECTITOBEGINNING: string;

	/**
	 * Remove the selection if it exists and move the playhead to the end.
	 */
	static readonly COMMAND_TRANSPORT_MOVECTITOEND: string;

	/**
	 * Move the playhead to the selection in point.
	 */
	static readonly COMMAND_TRANSPORT_MOVECTITOINPOINT: string;

	/**
	 * Move the playhead to the left.
	 */
	static readonly COMMAND_TRANSPORT_MOVECTITOLEFT: string;

	/**
	 * Move the playhead to the next interesting point relative to playhead's location.
	 */
	static readonly COMMAND_TRANSPORT_MOVECTITONEXT: string;

	/**
	 * Move the playhead to the next Marker relative to playhead's location.
	 */
	static readonly COMMAND_TRANSPORT_MOVECTITONEXTMARKER: string;

	/**
	 * Move the playhead to the selection out point.
	 */
	static readonly COMMAND_TRANSPORT_MOVECTITOOUTPOINT: string;

	/**
	 * Move the playhead to the previous interesting point relative to playhead's location.
	 */
	static readonly COMMAND_TRANSPORT_MOVECTITOPREVIOUS: string;

	/**
	 * Move the playhead to the previous Marker relative to playhead's location.
	 */
	static readonly COMMAND_TRANSPORT_MOVECTITOPREVIOUSMARKER: string;

	/**
	 * Move the playhead to the right.
	 */
	static readonly COMMAND_TRANSPORT_MOVECTITORIGHT: string;

	/**
	 * Start playback from the start position.
	 */
	static readonly COMMAND_TRANSPORT_PLAY: string;

	/**
	 * Shuttle Left.
	 */
	static readonly COMMAND_TRANSPORT_SHUTTLELEFT: string;

	/**
	 * Shuttle Right.
	 */
	static readonly COMMAND_TRANSPORT_SHUTTLERIGHT: string;

	/**
	 * Shuttle Stop.
	 */
	static readonly COMMAND_TRANSPORT_SHUTTLESTOP: string;

	/**
	 * Stop playback.
	 */
	static readonly COMMAND_TRANSPORT_STOP: string;

	/**
	 * Toggle the looped playback state.
	 */
	static readonly COMMAND_TRANSPORT_TOGGLELOOPING: string;

	/**
	 * Pause|Resume playback and recording.
	 */
	static readonly COMMAND_TRANSPORT_TOGGLEPAUSE: string;

	/**
	 * Start|Stop playback.
	 */
	static readonly COMMAND_TRANSPORT_TOGGLEPLAYBACK: string;

	/**
	 * Start|Stop recording.
	 */
	static readonly COMMAND_TRANSPORT_TOGGLERECORDING: string;

	/**
	 * Toggle between instant recording and timed recording.
	 */
	static readonly COMMAND_TRANSPORT_TOGGLERECORDMODE: string;

	/**
	 * Toggle the skip selection playback state.
	 */
	static readonly COMMAND_TRANSPORT_TOGGLESKIPSELECTION: string;

	/**
	 * Toggles the Preview Editor within the Editor panel.
	 */
	static readonly COMMAND_VIEW_ALTVIEW: string;

	/**
	 * Shows the CD Editor.
	 */
	static readonly COMMAND_VIEW_CDEDITOR: string;

	/**
	 * Decrease the spectral display resolution.
	 */
	static readonly COMMAND_VIEW_DECREASESPECTRALRESOLUTION: string;

	/**
	 * Open the Metadata Display dialog to customize the Files panel.
	 */
	static readonly COMMAND_VIEW_DISPLAYFORFILESPANEL: string;

	/**
	 * Open the Markers Display dialog to customize the Markers panel.
	 */
	static readonly COMMAND_VIEW_DISPLAYFORMARKERSPANEL: string;

	/**
	 * Open the Metadata Display dialog to customize the Metadata panel.
	 */
	static readonly COMMAND_VIEW_DISPLAYFORMETADATAPANEL: string;

	/**
	 * 
	 */
	static readonly COMMAND_VIEW_EDITCUSTOMFRAMERATE: string;

	/**
	 * 
	 */
	static readonly COMMAND_VIEW_EDITTEMPO: string;

	/**
	 * Hide all of the opened rack effect windows
	 */
	static readonly COMMAND_VIEW_HIDEALLRACKEFFECTWINDOWS: string;

	/**
	 * Increase the spectral display resolution.
	 */
	static readonly COMMAND_VIEW_INCREASESPECTRALRESOLUTION: string;

	/**
	 * Shows the Multitrack Editor.
	 */
	static readonly COMMAND_VIEW_MULTITRACKEDITOR: string;

	/**
	 * Cycle through the available time display formats (forward).
	 */
	static readonly COMMAND_VIEW_NEXTTIMEDISPLAYFORMAT: string;

	/**
	 * Cycle through the available time display formats (backwards).
	 */
	static readonly COMMAND_VIEW_PREVIOUSTIMEDISPLAYFORMAT: string;

	/**
	 * Scroll the view backward in time.
	 */
	static readonly COMMAND_VIEW_SCROLLLEFT: string;

	/**
	 * Scroll the view backward in time one page.
	 */
	static readonly COMMAND_VIEW_SCROLLPAGELEFT: string;

	/**
	 * Scroll the view forward in time one page.
	 */
	static readonly COMMAND_VIEW_SCROLLPAGERIGHT: string;

	/**
	 * Scroll the view forward in time.
	 */
	static readonly COMMAND_VIEW_SCROLLRIGHT: string;

	/**
	 * Scroll the view so the playhead is visible.
	 */
	static readonly COMMAND_VIEW_SCROLLTOCTI: string;

	/**
	 * Scroll the view so the selection is visible.
	 */
	static readonly COMMAND_VIEW_SCROLLTOSELECTION: string;

	/**
	 * Scroll the view so the playback start time is visible.
	 */
	static readonly COMMAND_VIEW_SCROLLTOSTI: string;

	/**
	 * Set navigation bar to display channels like the waveform editor.
	 */
	static readonly COMMAND_VIEW_SETNAVBARCHANNELDISPLAYFROMEDITOR: string;

	/**
	 * Set navigation bar to display layered channels.
	 */
	static readonly COMMAND_VIEW_SETNAVBARCHANNELSLAYERED: string;

	/**
	 * Set navigation bar to display separated channels.
	 */
	static readonly COMMAND_VIEW_SETNAVBARCHANNELSSEPARATED: string;

	/**
	 * Opens or closes the status bar.
	 */
	static readonly COMMAND_VIEW_SHOWSTATUS: string;

	/**
	 * Adjust the spectral frequency scale to be fully linear.
	 */
	static readonly COMMAND_VIEW_SPECTRALFREQUENCYFULLLINEAR: string;

	/**
	 * Adjust the spectral frequency scale to be fully logarithmic.
	 */
	static readonly COMMAND_VIEW_SPECTRALFREQUENCYFULLLOGARITHMIC: string;

	/**
	 * Adjust the spectral frequency scale to be more linear and less logarithmic.
	 */
	static readonly COMMAND_VIEW_SPECTRALFREQUENCYMORELINEAR: string;

	/**
	 * Adjust the spectral frequency scale to be more logarithmic and less linear.
	 */
	static readonly COMMAND_VIEW_SPECTRALFREQUENCYMORELOGARITHMIC: string;

	/**
	 * Toggle whether or not the active file should synchronize with time and tempo preferences.
	 */
	static readonly COMMAND_VIEW_SYNCWITHTIMEPREFS: string;

	/**
	 * 
	 */
	static readonly COMMAND_VIEW_TIMEDISPLAYFORMATBARSANDBEATS: string;

	/**
	 * 
	 */
	static readonly COMMAND_VIEW_TIMEDISPLAYFORMATCOMPACTDISC: string;

	/**
	 * 
	 */
	static readonly COMMAND_VIEW_TIMEDISPLAYFORMATCUSTOM: string;

	/**
	 * 
	 */
	static readonly COMMAND_VIEW_TIMEDISPLAYFORMATDECIMAL: string;

	/**
	 * 
	 */
	static readonly COMMAND_VIEW_TIMEDISPLAYFORMATSAMPLES: string;

	/**
	 * 
	 */
	static readonly COMMAND_VIEW_TIMEDISPLAYFORMATSMPTE23976: string;

	/**
	 * 
	 */
	static readonly COMMAND_VIEW_TIMEDISPLAYFORMATSMPTE24: string;

	/**
	 * 
	 */
	static readonly COMMAND_VIEW_TIMEDISPLAYFORMATSMPTE25: string;

	/**
	 * 
	 */
	static readonly COMMAND_VIEW_TIMEDISPLAYFORMATSMPTE2997: string;

	/**
	 * 
	 */
	static readonly COMMAND_VIEW_TIMEDISPLAYFORMATSMPTE30: string;

	/**
	 * 
	 */
	static readonly COMMAND_VIEW_TIMEDISPLAYFORMATSMPTE5994: string;

	/**
	 * 
	 */
	static readonly COMMAND_VIEW_TIMEDISPLAYFORMATSMPTE5994DROP: string;

	/**
	 * 
	 */
	static readonly COMMAND_VIEW_TIMEDISPLAYFORMATSMPTEDROP: string;

	/**
	 * Toggle the show state of the clip effect envelopes.
	 */
	static readonly COMMAND_VIEW_TOGGLECLIPEFFECTENVELOPES: string;

	/**
	 * Toggle the show state of the clip pan envelopes.
	 */
	static readonly COMMAND_VIEW_TOGGLECLIPPANENVELOPES: string;

	/**
	 * Toggle the show state of the clip volume envelopes.
	 */
	static readonly COMMAND_VIEW_TOGGLECLIPVOLUMEENVELOPES: string;

	/**
	 * Toggle uniquely colored waveform channels.
	 */
	static readonly COMMAND_VIEW_TOGGLECOLOREDCHANNELS: string;

	/**
	 * Toggle the show state of the Editor panel controls.
	 */
	static readonly COMMAND_VIEW_TOGGLEEDITORCONTROLS: string;

	/**
	 * Toggles between Waveform Editor and Multitrack Editor
	 */
	static readonly COMMAND_VIEW_TOGGLEEDITORS: string;

	/**
	 * Toggle the show state of the Editor heads up display (HUD).
	 */
	static readonly COMMAND_VIEW_TOGGLEHUD: string;

	/**
	 * Toggle layered waveform channels.
	 */
	static readonly COMMAND_VIEW_TOGGLELAYEREDCHANNELS: string;

	/**
	 * Toggle showing the spectral pitch display.
	 */
	static readonly COMMAND_VIEW_TOGGLEPITCHDISPLAY: string;

	/**
	 * Toggle visibility of data under mouse cursor in status bar.
	 */
	static readonly COMMAND_VIEW_TOGGLESHOWSTATUSBARDATAUNDERCURSOR: string;

	/**
	 * Toggle visibility of file errors warnings and processing status in status bar.
	 */
	static readonly COMMAND_VIEW_TOGGLESHOWSTATUSBARDOCMODALERRORSWARNINGS: string;

	/**
	 * Toggle visibility of dropped audio indicator in status bar.
	 */
	static readonly COMMAND_VIEW_TOGGLESHOWSTATUSBARDROPPEDAUDIO: string;

	/**
	 * Toggle visibility of duration information in status bar.
	 */
	static readonly COMMAND_VIEW_TOGGLESHOWSTATUSBARDURATION: string;

	/**
	 * Toggle visibility of free space information in status bar.
	 */
	static readonly COMMAND_VIEW_TOGGLESHOWSTATUSBARFREESPACE: string;

	/**
	 * Toggle visibility of free space (shown in terms of time) information in status bar.
	 */
	static readonly COMMAND_VIEW_TOGGLESHOWSTATUSBARFREESPACETIME: string;

	/**
	 * Toggle visibility of sample type information in status bar.
	 */
	static readonly COMMAND_VIEW_TOGGLESHOWSTATUSBARSAMPLETYPE: string;

	/**
	 * Toggle visibility of uncompressed audio size information in status bar.
	 */
	static readonly COMMAND_VIEW_TOGGLESHOWSTATUSBARUNCOMPRESSEDAUDIOSIZE: string;

	/**
	 * Toggle visibility of video frame rate in status bar.
	 */
	static readonly COMMAND_VIEW_TOGGLESHOWSTATUSBARVIDEOFRAMERATE: string;

	/**
	 * Toggle showing the spectral frequency display.
	 */
	static readonly COMMAND_VIEW_TOGGLESPECTRALDISPLAY: string;

	/**
	 * Decode video at full resolution for display in the Video Panel.
	 */
	static readonly COMMAND_VIEW_VIDEODISPLAYFULLRESOLUTION: string;

	/**
	 * Switch video display to full resolution when playback stops.
	 */
	static readonly COMMAND_VIEW_VIDEODISPLAYFULLRESOLUTIONONSTOP: string;

	/**
	 * Toggle video display to full screen and back.
	 */
	static readonly COMMAND_VIEW_VIDEODISPLAYFULLSCREEN: string;

	/**
	 * Decode video at one half resolution for display in the Video Panel.
	 */
	static readonly COMMAND_VIEW_VIDEODISPLAYQUARTERRESOLUTION: string;

	/**
	 * Set scaling of video in the Video Panel to 100 percent.
	 */
	static readonly COMMAND_VIEW_VIDEODISPLAYSETSCALE100: string;

	/**
	 * Set scaling of video in the Video Panel to 200 percent.
	 */
	static readonly COMMAND_VIEW_VIDEODISPLAYSETSCALE200: string;

	/**
	 * Set scaling of video in the Video Panel to 25 percent.
	 */
	static readonly COMMAND_VIEW_VIDEODISPLAYSETSCALE25: string;

	/**
	 * Set scaling of video in the Video Panel to 50 percent.
	 */
	static readonly COMMAND_VIEW_VIDEODISPLAYSETSCALE50: string;

	/**
	 * Set scaling of video to fit the size of the Video Panel.
	 */
	static readonly COMMAND_VIEW_VIDEODISPLAYSETSCALEBESTFIT: string;

	/**
	 * Decode video at one quarter resolution for display in the Video Panel.
	 */
	static readonly COMMAND_VIEW_VIDEODISPLAYSIXTEENTHRESOLUTION: string;

	/**
	 * Decode video at one eighth resolution for display in the Video Panel.
	 */
	static readonly COMMAND_VIEW_VIDEODISPLAYSIXTYFOURTHRESOLUTION: string;

	/**
	 * Toggle video timecode overlay.
	 */
	static readonly COMMAND_VIEW_VIDEOSHOWTIMECODE: string;

	/**
	 * Shows the Waveform Editor.
	 */
	static readonly COMMAND_VIEW_WAVEFORMEDITOR: string;

	/**
	 * Zoom in on the amplitude scale.
	 */
	static readonly COMMAND_VIEW_ZOOMINAMPLITUDE: string;

	/**
	 * Zoom in at the time selection In point.
	 */
	static readonly COMMAND_VIEW_ZOOMINATINPOINT: string;

	/**
	 * Zoom in at the time selection Out point.
	 */
	static readonly COMMAND_VIEW_ZOOMINATOUTPOINT: string;

	/**
	 * Zoom in on the frequency scale.
	 */
	static readonly COMMAND_VIEW_ZOOMINFREQUENCY: string;

	/**
	 * Zoom in on the time scale.
	 */
	static readonly COMMAND_VIEW_ZOOMINTIME: string;

	/**
	 * Zoom out on the amplitude scale.
	 */
	static readonly COMMAND_VIEW_ZOOMOUTAMPLITUDE: string;

	/**
	 * Zoom out on the frequency scale.
	 */
	static readonly COMMAND_VIEW_ZOOMOUTFREQUENCY: string;

	/**
	 * Reset the zoom on all scales.
	 */
	static readonly COMMAND_VIEW_ZOOMOUTFULL: string;

	/**
	 * Toggle zoom out full on the selected track.
	 */
	static readonly COMMAND_VIEW_ZOOMOUTFULLSELECTEDTRACK: string;

	/**
	 * Zoom out on the time scale.
	 */
	static readonly COMMAND_VIEW_ZOOMOUTTIME: string;

	/**
	 * Reset the zoom on the amplitude scale.
	 */
	static readonly COMMAND_VIEW_ZOOMRESETAMPLITUDE: string;

	/**
	 * Reset the zoom on the frequency scale.
	 */
	static readonly COMMAND_VIEW_ZOOMRESETFREQUENCY: string;

	/**
	 * Reset the zoom on the time scale.
	 */
	static readonly COMMAND_VIEW_ZOOMRESETTIME: string;

	/**
	 * Toggle zoom in full on the selected track.
	 */
	static readonly COMMAND_VIEW_ZOOMSELECTEDTRACK: string;

	/**
	 * Zoom to the time selection.
	 */
	static readonly COMMAND_VIEW_ZOOMTOSELECTION: string;

	/**
	 * Zoom way in at the time selection In point.
	 */
	static readonly COMMAND_VIEW_ZOOMWAYINATINPOINT: string;

	/**
	 * Zoom way in at the time selection Out point.
	 */
	static readonly COMMAND_VIEW_ZOOMWAYINATOUTPOINT: string;

	/**
	 * Opens or closes the Amplitude Statistics panel.
	 */
	static readonly COMMAND_WINDOW_AMPLITUDESTATISTICS: string;

	/**
	 * Opens or closes the Diagnostics panel.
	 */
	static readonly COMMAND_WINDOW_ANALYSISEFFECTS: string;

	/**
	 * Opens or closes the Essential Sound panel.
	 */
	static readonly COMMAND_WINDOW_BASICADJUSTMENTS: string;

	/**
	 * Opens or closes the Batch Process panel.
	 */
	static readonly COMMAND_WINDOW_BATCHPROCESS: string;

	/**
	 * 
	 */
	static readonly COMMAND_WINDOW_BROWSEANDRUNSCRIPT: string;

	/**
	 * Opens the Clip Properties panel.
	 */
	static readonly COMMAND_WINDOW_CLIPPROPERTIES: string;

	/**
	 * 
	 */
	static readonly COMMAND_WINDOW_CONSOLE: string;

	/**
	 * 
	 */
	static readonly COMMAND_WINDOW_DEBUGMONITOR: string;

	/**
	 * 
	 */
	static readonly COMMAND_WINDOW_DEBUGRENDERGRAPH: string;

	/**
	 * Opens or closes the Editor panel.
	 */
	static readonly COMMAND_WINDOW_EDITOR: string;

	/**
	 * Opens or closes the Effects Rack panel.
	 */
	static readonly COMMAND_WINDOW_EFFECTSRACK: string;

	/**
	 * Opens or closes the Favorites panel.
	 */
	static readonly COMMAND_WINDOW_FAVORITES: string;

	/**
	 * Opens or closes the Files panel.
	 */
	static readonly COMMAND_WINDOW_FILES: string;

	/**
	 * Opens or closes the Frequency Analysis panel.
	 */
	static readonly COMMAND_WINDOW_FREQUENCYANALYSIS: string;

	/**
	 * Opens or closes the History panel.
	 */
	static readonly COMMAND_WINDOW_HISTORY: string;

	/**
	 * Opens or closes the Level Meters panel.
	 */
	static readonly COMMAND_WINDOW_LEVELS: string;

	/**
	 * Opens or closes the Markers panel.
	 */
	static readonly COMMAND_WINDOW_MARKERS: string;

	/**
	 * Opens or closes the Match Loudness panel.
	 */
	static readonly COMMAND_WINDOW_MATCHVOLUME: string;

	/**
	 * Opens or closes the Media Browser panel.
	 */
	static readonly COMMAND_WINDOW_MEDIABROWSER: string;

	/**
	 * Opens or closes the Metadata panel.
	 */
	static readonly COMMAND_WINDOW_METADATA: string;

	/**
	 * Minimizes the window.
	 */
	static readonly COMMAND_WINDOW_MINIMIZE: string;

	/**
	 * Opens or closes the Mixer panel.
	 */
	static readonly COMMAND_WINDOW_MIXER: string;

	/**
	 * Opens or closes the Phase Analysis panel.
	 */
	static readonly COMMAND_WINDOW_PHASEANALYSIS: string;

	/**
	 * Opens or closes the Phase Meter panel.
	 */
	static readonly COMMAND_WINDOW_PHASEMETER: string;

	/**
	 * Opens or closes the Playlist panel.
	 */
	static readonly COMMAND_WINDOW_PLAYLIST: string;

	/**
	 * Opens or closes the Properties panel.
	 */
	static readonly COMMAND_WINDOW_PROPERTIES: string;

	/**
	 * Opens or closes the Selection|View panel.
	 */
	static readonly COMMAND_WINDOW_SELECTIONVIEW: string;

	/**
	 * Opens the Session Properties panel.
	 */
	static readonly COMMAND_WINDOW_SESSIONPROPERTIES: string;

	/**
	 * Opens or closes the Track Panner panel.
	 */
	static readonly COMMAND_WINDOW_SURROUNDPANNER: string;

	/**
	 * Opens or closes the Time panel.
	 */
	static readonly COMMAND_WINDOW_TIME: string;

	/**
	 * Toggle the active frame between maximum and normal size.
	 */
	static readonly COMMAND_WINDOW_TOGGLEMAXIMIZEACTIVEFRAME: string;

	/**
	 * Opens or closes the toolbar.
	 */
	static readonly COMMAND_WINDOW_TOOLS: string;

	/**
	 * Opens or closes the Transport panel.
	 */
	static readonly COMMAND_WINDOW_TRANSPORT: string;

	/**
	 * 
	 */
	static readonly COMMAND_WINDOW_UINODESPY: string;

	/**
	 * Opens or closes the Video panel.
	 */
	static readonly COMMAND_WINDOW_VIDEO: string;

	/**
	 * Opens or closes the Zoom panel.
	 */
	static readonly COMMAND_WINDOW_ZOOM: string;

	/**
	 * Opens the Edit Workspaces dialog to delete or reorder saved workspaces.
	 */
	static readonly COMMAND_WORKSPACE_EDITWORKSPACES: string;

	/**
	 * Saves the current workspace with a user enterable name.
	 */
	static readonly COMMAND_WORKSPACE_NEWWORKSPACE: string;

	/**
	 * Reverts changes to the current workspace and resets to the saved layout of the workspace.
	 */
	static readonly COMMAND_WORKSPACE_RESETWORKSPACE: string;

	/**
	 * Saves the current layout of the workspace to be recalled later.
	 */
	static readonly COMMAND_WORKSPACE_SAVEWORKSPACE: string;

	/**
	 * Switch to first workspace in Workspace menu.
	 */
	static readonly COMMAND_WORKSPACE_WORKSPACE1: string;

	/**
	 * Switch to second workspace in Workspace menu.
	 */
	static readonly COMMAND_WORKSPACE_WORKSPACE2: string;

	/**
	 * Switch to third workspace in Workspace menu.
	 */
	static readonly COMMAND_WORKSPACE_WORKSPACE3: string;

	/**
	 * Switch to fourth workspace in Workspace menu.
	 */
	static readonly COMMAND_WORKSPACE_WORKSPACE4: string;

	/**
	 * Switch to fifth workspace in Workspace menu.
	 */
	static readonly COMMAND_WORKSPACE_WORKSPACE5: string;

	/**
	 * Switch to sixth workspace in Workspace menu.
	 */
	static readonly COMMAND_WORKSPACE_WORKSPACE6: string;

	/**
	 * Switch to seventh workspace in Workspace menu.
	 */
	static readonly COMMAND_WORKSPACE_WORKSPACE7: string;

	/**
	 * Switch to eighth workspace in Workspace menu.
	 */
	static readonly COMMAND_WORKSPACE_WORKSPACE8: string;

	/**
	 * Switch to ninth workspace in Workspace menu.
	 */
	static readonly COMMAND_WORKSPACE_WORKSPACE9: string;

	/**
	 * Get the currently active document.
	 */
	readonly activeDocument: Document;

	/**
	 * Application build number
	 */
	readonly buildNumber: string;

	/**
	 * Get currently opened documents
	 */
	readonly documents: Document[];

	/**
	 * Engine local persitent settings.
	 */
	readonly localPreferences: Preferences;

	/**
	 * Path of the application executable.
	 */
	readonly location: string;

	/**
	 * Application name
	 */
	readonly name: string;

	/**
	 * Application platform
	 */
	readonly platform: string;

	/**
	 * Playing recording and navigating time
	 */
	readonly transport: object;

	/**
	 * Application version
	 */
	readonly version: string;

	/**
	 * 
	 */
	static __(): any;

	/**
	 * 
	 */
	static addEventListener(): any;

	/**
	 * 
	 */
	static dispatchEvent(): any;

	/**
	 * 
	 * @param command Invokes a particular application command by its identifier string. These are similar to the commands shown in the Keyboard Shortcuts dialog. Returns true on success.
	 */
	invokeCommand(command: string): boolean;

	/**
	 * 
	 * @param command Returns true if the current application command is enabled and can be called in the current state.
	 */
	isCommandEnabled(command: string): boolean;

	/**
	 * 
	 * @param openParameter Open a document using specified DocumentOpenParameter.
	 */
	openDocument(openParameter: DocumentOpenParameter): Document;

	/**
	 * Quit application
	 */
	quit(): boolean;

	/**
	 * 
	 */
	static removeEventListener(): any;

}

/**
 * Command event object
 */
declare class CommandEvent {
	/**
	 * A command is about to be invoked
	 */
	static readonly EVENT_INVOKE_COMMAND: string;

	/**
	 * Description of the command.
	 */
	readonly description: string;

	/**
	 * Name of the command.
	 */
	readonly name: string;

	/**
	 * Title of the command.
	 */
	readonly title: string;

	/**
	 * 
	 */
	static __(): any;

}

/**
 * This is the base class for all document types. There are also specialized types for certain document types like e.g. WaveDocument
 */
declare class Document {
	/**
	 * Display name of the document as shown in the UI. It doesn't necessarily refers to the file name without filename extension.
	 */
	readonly displayName: string;

	/**
	 * Unique identifier of this document.
	 */
	readonly id: string;

	/**
	 * Returns a platform-specific path to the document on disk or empty if it doesn't currently have a path.
	 */
	readonly path: string;

}

/**
 * This events is fired if one or more documents related event happened.
 */
declare class DocumentEvent {
	/**
	 * This event is fired when a document was closed.
	 */
	static readonly EVENT_CLOSED: string;

	/**
	 * This event is fired when a document was created or opened.
	 */
	static readonly EVENT_NEW: string;

	/**
	 * This event is fired after a document was saved.
	 */
	static readonly EVENT_SAVED: string;

	/**
	 * This event is fired after the time selection of a document has changed.
	 */
	static readonly EVENT_TIMESELECTIONCHANGED: string;

	/**
	 * Unique document ID.
	 */
	readonly documentID: string;

	/**
	 * Document file path.
	 */
	readonly path: string;

	/**
	 * 
	 */
	static __(): any;

}

/**
 * A set of parameters used to open an existing document
 */
declare class DocumentOpenParameter {
	/**
	 * Full path of document
	 */
	path: string;

	/**
	 * 
	 * @param documentPath Construct a new DocumentOpenParameter object
	 */
	constructor(documentPath: string);

	/**
	 * 
	 */
	static __(): any;

}

/**
 * This events propagates changes of the Audition transport like e.g. playback started.
 */
declare class TransportEvent {
	/**
	 * This event is fired when looping was switched on.
	 */
	static readonly EVENT_LOOPSTARTED: string;

	/**
	 * This event is fired when looping was switched off.
	 */
	static readonly EVENT_LOOPSTOPPED: string;

	/**
	 * This event is fired when the currently active player has paused to play.
	 */
	static readonly EVENT_PAUSESTARTED: string;

	/**
	 * This event is fired when the currently active player has unpaused to play.
	 */
	static readonly EVENT_PAUSESTOPPED: string;

	/**
	 * This event is fired when the currently active player has started to play.
	 */
	static readonly EVENT_PLAYERSTARTED: string;

	/**
	 * This event is fired when the currently active player has stopped to play.
	 */
	static readonly EVENT_PLAYERSTOPPED: string;

	/**
	 * This event is fired when the currently active player has started to record.
	 */
	static readonly EVENT_RECORDSTARTED: string;

	/**
	 * This event is fired when the currently active player has stopped to record.
	 */
	static readonly EVENT_RECORDSTOPPED: string;

	/**
	 * 
	 */
	static __(): any;

}

/**
 * The Transport object provides access to the Audition transport layer.
 */
declare class Transport {
	/**
	 * true if playback or recording is paused
	 */
	readonly isPaused: boolean;

	/**
	 * true if playing is enabled
	 */
	readonly isPlayEnabled: boolean;

	/**
	 * true if currently playing audio
	 */
	readonly isPlaying: boolean;

	/**
	 * true if recording is enabled
	 */
	readonly isRecordEnabled: boolean;

	/**
	 * true if currently recording audio
	 */
	readonly isRecording: boolean;

	/**
	 * enable|disable looping
	 */
	loop: boolean;

	/**
	 * pause|unpause playing or recording audio
	 */
	pause(): boolean;

	/**
	 * start|continue playing current audio
	 */
	play(): boolean;

	/**
	 * start|continue recording audio
	 */
	record(): boolean;

	/**
	 * stop playing or recording audio
	 */
	stop(): boolean;

}

/**
 * Collection of all audio tracks of the according multitrack document as a mixed collection consiting of audio clip tracks, audio bus tracks and the master track. If accessed by index then the index starts with audio clip tracks, followed by audio bus tracks and the master track as the last entry.
 */
declare class MixedAudioTrackCollection {
	/**
	 * Collection of all audio bus tracks of the multitrack document.
	 */
	readonly audioBusTracks: AudioTrackCollection;

	/**
	 * Collection of all audio clip tracks of the multitrack document.
	 */
	readonly audioClipTracks: AudioTrackCollection;

	/**
	 * Returns an audio track by its index
	 */
	readonly index: AudioTrack;

	/**
	 * Number of audio tracks.
	 */
	readonly length: number;

	/**
	 * The master track of the multitrack document.
	 */
	readonly masterTrack: AudioTrack;

	/**
	 * 
	 * @param layout 
	 * @param trackType Add new track
	 */
	add(layout: AudioChannelLayout, trackType: number): AudioTrack;

	/**
	 * 
	 * @param name Return audio track by its name
	 */
	getAudioTrack(name: string): AudioTrack;

	/**
	 * 
	 * @param track Remove track
	 */
	remove(track: AudioTrack): boolean;

}

/**
 * Onboarding Support
 */
declare class OnboardingSupport {
	/**
	 * 
	 */
	readonly currentUserUID: string;

	/**
	 * Construct new OnboardingSupportObject object
	 */
	constructor();

	/**
	 * 
	 */
	static __(): any;

	/**
	 * 
	 * @param CommandID 
	 */
	indicateMainMenuItem(CommandID: string): boolean;

	/**
	 * 
	 * @param stepData WorkflowStatus : [String] workflow step action WorkflowID : [String] workflow guid WorkflowName : [String] name WorkflowSessionID : [String] session identifier WorkflowAttempts : [Number] number of attempts WorkflowStepsTotal : [Number] total number of steps WorkflowDurationMS : [Number] duration
	 */
	onWorkflowAction(stepData: object): boolean;

	/**
	 * 
	 * @param stepData WorkflowStatus : [String] workflow step action WorkflowID : [String] workflow guid WorkflowName : [String] name WorkflowSessionID : [String] session identifier WorkflowAttempts : [Number] number of attempts WorkflowStepsTotal : [Number] total number of steps WorkflowStepInteractivity : [String] step interactivity WorkflowStep : [Number] current step WorkflowStepDurationMS : [Number] duration WorkflowStepRetries : [Number] number of retries WorkflowDurationMS : [Number] duration
	 */
	onWorkflowStepAction(stepData: object): boolean;

}

/**
 * An event to inform about succes or failures of an add multitrack document to queue operation.
 */
declare class AMEAddMultitrackDocumentToQueueEvent {
	/**
	 * An event with this type is propagated if a multitrack document failed to be added to the Adobe Media Encoder queue
	 * Add to queue failed event type
	 */
	static readonly EVENT_ADDMULTITRACKDOCUMENTTOQUEUE_ERROR: string;

	/**
	 * An event with this type is propagated if a multitrack document was added to the Adobe Media Encoder queue successfully
	 * Add to queue succeeded event type
	 */
	static readonly EVENT_ADDMULTITRACKDOCUMENTTOQUEUE_SUCCESS: string;

	/**
	 * Provides additional information for this event esspecially in the case of an error.
	 */
	readonly message: string;

	/**
	 * 
	 */
	static __(): any;

}

/**
 * An event to inform about the audio channel configuration of a preset.
 */
declare class AMEAudioChannelConfigurationEvent {
	/**
	 * An event with this type is propagated if a request for audio channel configuration failed
	 * Request audio channel configuration failed event type
	 */
	static readonly EVENT_REQUESTAUDIOCHANNELCONFIGURATION_ERROR: string;

	/**
	 * An event with this type is propagated if a request for audio channel configuration succeeded
	 * Request audio channel configuration succeeded event type
	 */
	static readonly EVENT_REQUESTAUDIOCHANNELCONFIGURATION_SUCCESS: string;

	/**
	 * The audio channel configuration of this preset. You have to request it by calling requestAudioChannelConfiguration beforehands.
	 */
	readonly audioChannelConfiguration: string;

	/**
	 * 
	 */
	static __(): any;

}

/**
 * Representation of an effect instance in either the effects rack of a wave document, clip or track. New effects can be created by calling the insertEffect method on an effect rack slot.
 */
declare class Effect {
	/**
	 * The component ID of the effect.
	 */
	readonly componentID: string;

	/**
	 * The name of this effect.
	 */
	readonly name: string;

	/**
	 * Return an array of objects containing information about each parameter of the effect.Each object provides the following properties; name - paramater name; label - parameter title; unit - unit of the parameter values (not all effects provide this information); minimum - the lower bound of the arameter value range (not all effects provide this information); maximum - the upper bound of the parameter value range (not all effects provide this information)
	 */
	readonly parameterInfos: any[];

	/**
	 * Return an array containing all presets of this effect.
	 */
	readonly presets: EffectPreset[];

	/**
	 * 
	 * @param paramName Return the physical value of the parameter specified by paramName. All available parameters and their names can be retrieved by using the parameterInfos property.
	 */
	getParameter(paramName: string): number;

	/**
	 * 
	 * @param paramName 
	 * @param value Set the physical value of the parameter specified by paramName. All available parameters and their names can be retrieved by using the parameterInfos property.
	 */
	setParameter(paramName: string, value: number): number;

	/**
	 * 
	 * @param preset Set the specified preset.
	 */
	setPreset(preset: EffectPreset): boolean;

}

/**
 * An EffectPreset represents a particular preset of an effect component.
 */
declare class EffectPreset {
	/**
	 * The name of this effect preset.
	 */
	readonly name: string;

}

/**
 * This object represents an effect rack of a multitrack session clip or track. It provides access to all effects of the rack as well as to the slots of the rack.
 */
declare class EffectRack {
	/**
	 * EffectRackSlotCollection which gives access to the single slots of the rack.
	 */
	readonly slots: EffectRackSlotCollection;

}

/**
 * An EffectRackSlot represents a slot of an effect rack.
 */
declare class EffectRackSlot {
	/**
	 * The slot effect.
	 */
	readonly effect: Effect;

	/**
	 * Power state of the slot.
	 */
	power: boolean;

	/**
	 * 
	 * @param nameOrComponentID Create a new instance of an effect and store it within this slot.
	 */
	insertEffect(nameOrComponentID: string): boolean;

	/**
	 * Remove the effect stored within this slot.
	 */
	removeEffect(): boolean;

}

/**
 * EffectRackSlotCollection provides access to all slots of an effect rack. Beside that new effects can be assigned to a slot or an existing effect can be removed from a slot.
 */
declare class EffectRackSlotCollection {
	/**
	 * Slot at index
	 */
	readonly index: EffectRackSlot;

	/**
	 * Number of available slots.
	 */
	readonly length: number;

}

/**
 * A small overlay window pointing to a certain point in the applications user interface
 */
declare class IndicatorOverlay {
	/**
	 * Anchor point bottom edge
	 */
	static readonly ANCHOR_BOTTOM_EDGE: number;

	/**
	 * Anchor point left edge
	 */
	static readonly ANCHOR_LEFT_EDGE: number;

	/**
	 * Anchor point right edge
	 */
	static readonly ANCHOR_RIGHT_EDGE: number;

	/**
	 * Anchor point top edge
	 */
	static readonly ANCHOR_TOP_EDGE: number;

	/**
	 * 
	 * @param ctrlPath 
	 * @param direction 
	 * @param text 
	 * @param animation 
	 * @param persistent Construct new IndicatorOverlay object
	 */
	constructor(ctrlPath: string, direction: number, text: string, animation: boolean, persistent: boolean);

	/**
	 * 
	 */
	static __(): any;

	/**
	 * Hide the overlay
	 */
	hide(): boolean;

	/**
	 * Show the overlay
	 */
	show(): boolean;

}

/**
 * AMEFormat represents a format of the Adobe Media Encoder
 */
declare class AMEFormat {
	/**
	 * The file name extension used by this format.
	 */
	readonly extension: string;

	/**
	 * The name of this format.
	 */
	readonly name: string;

	/**
	 * Request the available user match source and system presets for this format from Adobe Media Encoder. An event with type AMEPresetsEvent.EVENT_RequestPresetsSuccess or AMEPresetsEvent.EVENT_RequestPresetsError will be sent to notify about success or failure.
	 * Request the available presets for this format from AME.
	 */
	requestPresets(): boolean;

}

/**
 * An event to inform about formats that are availbe for running an export.
 */
declare class AMEFormatsEvent {
	/**
	 * An event with this type is propagated if a request for formats from Adobe Media Encoder failed
	 * Request formats failed event type
	 */
	static readonly EVENT_REQUESTFORMATS_ERROR: string;

	/**
	 * An event with this type is propagated if a request for formats from Adobe Media Encoder succeeded
	 * Request formats succeeded event type
	 */
	static readonly EVENT_REQUESTFORMATS_SUCCESS: string;

	/**
	 * The formats available for running an export.
	 */
	readonly formats: any[];

	/**
	 * 
	 */
	static __(): any;

}

/**
 * An event to inform about the exporter settings summary of a preset.
 */
declare class AMEExporterSettingsSummaryEvent {
	/**
	 * An event with this type is propagated if a request for exporter settings summary failed
	 * Request exporter settings summary failed event type
	 */
	static readonly EVENT_REQUESTEXPORTERSETTINGSSUMMARY_ERROR: string;

	/**
	 * An event with this type is propagated if a request for exporter settings summary succeeded
	 * Request exporter settings summary succeeded event type
	 */
	static readonly EVENT_REQUESTEXPORTERSETTINGSSUMMARY_SUCCESS: string;

	/**
	 * The exporter settings summary of this preset.
	 */
	readonly exporterSettingsSummary: string;

	/**
	 * 
	 */
	static __(): any;

}

/**
 * Compute the MD5 hash of the audio data within a wave document so that it can be easily compared against a baseline.
 */
declare class MD5 {
	/**
	 * 
	 */
	static __(): any;

	/**
	 * 
	 * @param wavedocument Compute the MD5 hash of the audio data within a wave document
	 */
	static hash(wavedocument: WaveDocument): string;

}

/**
 * Persistence object that store/restore any values.
 */
declare class Preferences {
	/**
	 * 
	 * @param key Retrieve value as boolean
	 */
	getBoolValue(key: string): boolean;

	/**
	 * 
	 * @param key Retrieve value as number
	 */
	getNumberValue(key: string): number;

	/**
	 * 
	 * @param key Retrieve value as string
	 */
	getStringValue(key: string): string;

	/**
	 * 
	 * @param key 
	 * @param value Set value as boolean
	 */
	setBoolValue(key: string, value: boolean): boolean;

	/**
	 * 
	 * @param key 
	 * @param value Set value as number
	 */
	setNumberValue(key: string, value: number): boolean;

	/**
	 * 
	 * @param key 
	 * @param value Store value as string
	 */
	setStringValue(key: string, value: string): boolean;

}

/**
 * AMEServer represents a DynanicLink connection to Adobe Media Encoder
 */
declare class AMEServer {
	/**
	 * 
	 */
	static __(): any;

	/**
	 * 
	 */
	static addEventListener(): any;

	/**
	 * 
	 * @param multitrackDocument 
	 * @param trackRouting 
	 * @param preset 
	 * @param temporaryFilesDir 
	 * @param outputFile Add the selected tracks of a multitrack document to the AME queue. The routing information is passed in as an array of tracks. The first track in the array will be routed to the first channels in the output file. A channel can be left unassigned by adding null to the array "trackRouting". Beside the final output file you have to specify a directory to store temporary wave files as well as the temporary project file. The temporary files will be deleted by AME after the export has been completed. An event with type AMEAddMultitrackDocumentToQueueEvent.EVENT_ADDMULTITRACKDOCUMENTTOQUEUE_SUCCESS or AMEAddMultitrackDocumentToQueueEvent.EVENT_ADDMULTITRACKDOCUMENTTOQUEUE_ERROR will be sent to notify about success or failure. Add the selected tracks of a multitrack document to the AME queue.
	 */
	addMultitrackDocumentAndRoutingToQueue(multitrackDocument: Document, trackRouting: any[], preset: AMEPreset, temporaryFilesDir: string, outputFile: string): boolean;

	/**
	 * Connect to AME. An event with type DynamicLinkConnectionEvent.EVENT_CONNECTION will be sent to notify about success or failure.
	 * Connect to AME.
	 */
	connect(): boolean;

	/**
	 * Disconnect from AME.
	 */
	disconnect(): boolean;

	/**
	 * 
	 */
	static dispatchEvent(): any;

	/**
	 * 
	 */
	static removeEventListener(): any;

	/**
	 * Request the available formats from AME. An event with type AMEFormatsEvent.EVENT_REQUESTFORMATS_SUCCESS or AMEFormatsEvent.EVENT_REQUESTFORMATS_ERROR will be sent to notify about success or failure.
	 * Request the available formats from AME.
	 */
	requestFormats(): boolean;

}

/**
 * AMEPreset represents a single preset of Adobe Media Encoder
 */
declare class AMEPreset {
	/**
	 * The name of this preset.
	 */
	readonly name: string;

	/**
	 * Request the audio channel configuration of this preset from AME. An event with type AMEAudioChannelConfigurationEvent.EVENT_RequestAudioChannelConfigurationSuccess or AMEAudioChannelConfigurationEvent.EVENT_RequestAudioChannelConfigurationError will be sent to notify about success or failure.
	 * Request the audio channel configuration of this preset from AME.
	 */
	requestAudioChannelConfiguration(): boolean;

	/**
	 * Request the exporter settings summary of this preset from AME.Request the exporter settings summary of this preset from AME. An event with type AMEExporterSettingsSummaryEvent.EVENT_RequestExporterSettingsSummarySuccess or AMEExporterSettingsSummaryEvent.EVENT_RequestExporterSettingsSummaryError will be sent to notify about success or failure.
	 */
	requestExporterSettingsSummary(): boolean;

}

/**
 * An event to inform about the available user, match source and system presets of a format.
 */
declare class AMEPresetsEvent {
	/**
	 * An event with this type is propagated if a request for Adobe Media Encoder presets failed
	 * Request Adobe Media Encoder presets failed event type
	 */
	static readonly EVENT_REQUESTPRESETS_ERROR: string;

	/**
	 * An event with this type is propagated if a request for Adobe Media Encoder presets succeeded
	 * Request Adobe Media Encoder presets succeeded event type
	 */
	static readonly EVENT_REQUESTPRESETS_SUCCESS: string;

	/**
	 * Available match source presets for this format.
	 */
	readonly matchSourcePresets: any[];

	/**
	 * Available system presets for this format.
	 */
	readonly systemPresets: any[];

	/**
	 * Available user presets for this format.
	 */
	readonly userPresets: any[];

	/**
	 * 
	 */
	static __(): any;

}

