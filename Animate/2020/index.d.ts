// Docs here: https://help.adobe.com/archive/en_US/flash/cs5/flash_cs5_extending.pdf

/// <reference path="../../shared/JavaScript.d.ts" />
/// <reference path="../../shared/ScriptUI.d.ts" />

/*** Helpful Interfaces ***/
declare interface Point {
  x: number
  y: number
}

declare interface Point3D extends Point {
  z: number
}

declare interface SimpleShape {
  left: number
  top: number
  right: number
  bottom: number
}

/**
 * Represents the limits of a sound envelope.
 */
declare interface Limits {
  start: number
  end: number
}

/**
 * Represents a Flash Player installed in the document PI.
 */
declare interface InstalledPlayer {
  /**
   * The string name of the document.
   */
  name: string
  /**
   * Can be used to set the current player for a document, using the Document.setPlayerVersion() function.
   */
  version: string
  /**
   * The minimum ActionScript version required by the document. An integer between the minASVersion and the maxASVersion (inclusive) can be used to set the ActionScript version of the document, using the Document.asVersion property.
   */
  minASVersion: number
  /**
   * The maximum ActionScript version supported by the document.
   */
  maxASVersion: number
  /**
   * The default Stage width in pixels for the given target. For example, for iPhone the default size is 320 x 480 pixels. For Android, the default size is 480 x 800.
   */
  stageWidth: number
  /**
   * The default Stage height in pixels for the given target. For example, for iPhone the default size is 320 x 480 pixels. For Android, the default size is 480 x 800.
   */
  stageHeight: number
}

/**
 * Represents an object returned by fl.findObjectInDoc(ByName/ByType)
 */
declare interface ObjectInDoc {
  /**
   * The keyframe that the element is on.
   */
  keyframe: number
  /**
   * The layer that the keyframe is on.
   */
  layer: Layer
  /**
   * The timeline that the layer is on.
   */
  timeline: Timeline
  /**
   * The parent of the timeline. For example, the timeline might be in a symbol instance.
   */
  parent: any
}

/**
 * Represents an ImageFormat that may be sent in to SpriteSheetExporter.exportSpriteSheet();
 */
declare interface ImageFormat {
  /**
   * Valid values are "png" or "jpg".
   */
  format: string
  /**
   * A valid color value (alpha may be included).
   */
  backgroundColor: string | number
  /**
   * Valid only if ImageFormat.format is "jpg".
   * An integer 1 to 100.
   */
  quality: number
  /**
   * Valid only if ImageFormat.format is "png".
   * An integer which can be 8, 24, or 32.
   */
  bitDepth: number
}

/*** Global Functions ***/
/**
 * Function; Called when the extensible tool becomes active (that is, when the tool is selected in the Tools panel).
 * Use this function to perform any initialization tasks the tool requires.
 */
declare function activate(): void

/**
 * Method; displays a string in a modal Alert dialog box, along with an OK button.
 */
declare function alert(alertText: string): void

/**
 * Function; called when Flash opens and the extensible tool is loaded into the Tools panel.
 * Use this function to set any information Flash needs to know about the tool.
 */
declare function configureTool(): void

/**
 * Method; displays a string in a modal Alert dialog box, along with OK and Cancel buttons.
 * Note: If there are no documents (FLA files) open, this method fails with an error condition.
 */
declare function confirm(strAlert: string): boolean

/**
 * Function; called when the extensible tool becomes inactive (that is, when the active tool changes from this tool to another one).
 * Use this function to perform any cleanup the tool needs.
 * @returns A Boolean value: true if the user clicks OK; false if the user clicks Cancel.
 */
declare function deactivate(): void

/**
 * Function; called when the extensible tool is active and the user presses a key.
 * The script should call tools.getKeyDown() to determine which key was pressed.
 */
declare function keydown(): void

/**
 * Function; called when the extensible tool is active and a key is released.
 */
declare function keyup(): void

/**
 * Function; called when the extensible tool is active and the mouse button is double-clicked on the Stage.
 */
declare function mouseDoubleClick(): void

/**
 * Function; called when the extensible tool is active and the mouse button is pressed while the pointer is over the Stage.
 * @param pt A point that specifies the location of the mouse when the button is pressed. It is passed to the function when the mouse button is pressed. This parameter is optional.
 */
declare function mouseDown(pt?: Point): void

/**
 * Function; called whenever the extensible tool is active and the mouse moves over a specified point on the Stage. The mouse button can be down or up.
 * @param pt A point that specifies the current location of the mouse. It is passed to the function whenever the mouse moves, which tracks the mouse location. If the Stage is in edit or edit-in-place mode, the point coordinates are relative to the object being edited. Otherwise, the point coordinates are relative to the Stage. This parameter is optional.
 */
declare function mouseMove(pt?: Point): void

/**
 * Function; called whenever the extensible tool is active and the mouse button is released after being pressed on the Stage.
 */
declare function mouseUp(): void

/**
 * Function; called when the extensible tool is active and the user changes its options in the Property inspector.
 * You can use the tools.activeTool property to query the current values of the options (see tools.activeTool).
 */
declare function notifySettingsChanged(): void

/**
 * Method; displays a prompt and optional text in a modal Alert dialog box, along with OK and Cancel buttons.
 * @returns The string the user typed if the user clicks OK; null if the user clicks Cancel.
 * @param promptMsg A string to display in the Prompt dialog box (limited to 256 characters in Mac OS X).
 * @param text An optional string to display as a default value for the text field.
 */
declare function prompt(promptMsg: string, text: string): string | null

/**
 * Function; called when the extensible tool is active and the mouse moves, to allow the script to set custom pointers.
 * The script should call tools.setCursor() to specify the pointer to use.
 * For a list that shows which pointers correspond to which integer values, see tools.setCursor().
 */
declare function setCursor(): void

/**
 * The FLfile object lets you write Flash extensions that can access, modify, and remove files and folders on the local file system. The FLfile API is provided in the form of an extension to the JavaScript API. This extension is called a shared library and is located in the following folder:
 * •Windows 7 and 8:
 *    boot drive\Users\username\AppData\Local\Adobe\Flash CC\language\Configuration\External Libraries\FLfile.dll
 * •Mac OS X:
 *    Macintosh HD/Users/username/Library/Application Support/Adobe/Flash CC/language/Configuration/External Libraries/FLfile.dll
 * Note: Don't confuse the shared libraries that contain symbols in your Flash documents with the JavaScript API shared libraries. They are two different things.
 * The FLfile methods work with files or folders (directories) on disk. Therefore, each method takes one or more parameters to specify the location of a file or folder. The location of the file or folder is expressed as a string in a form very similar to a website URL. It is called a file URI (Uniform Resource Identifier) and is formatted as shown here (including the quote marks):
 * "file:///drive|/folder 1/folder 2/.../filename"
 * For example, if you want to create a folder on the C drive called config and place it in the Program Files
 * MyApp folder, use the following command:
 * FLfile.createFolder("file:///C|/Program Files/MyApp/config");
 * If you then want to place a file called config.ini in that folder, use the following command:
 * FLfile.write("file:///C|/Program Files/MyApp/config/config.ini", "");
 * To create a folder on the Macintosh, you could use the following command:
 * FLfile.createFolder("file:///Macintosh/MyApp/config");
 */
declare const FLfile: FLfileClass
declare class FLfileClass {
  /**
   * Copies a file from one location to another. This method returns false if copyURI already exists.
   * @returns A Boolean value of true if successful; false otherwise.
   * @param fileURI A string, expressed as a file:/// URI, that specifies the file you want to copy.
   * @param copyURI A string, expressed as a file:/// URI, that specifies the location and name of the copied file.
   */
  copy(fileURI: string, copyURI: string): boolean
  /**
   * Creates one or more folders at the specified location.
   * You can create multiple folders at one time. For example, the following command creates both the MyData and the TempData folders if they don’t already exist:
   * FLfile.createFolder("file:///c|/MyData/TempData")
   * @returns A Boolean value of true if successful; false if folderURI already exists.
   * @param folderURI A folder URI that specifies the folder structure you want to create.
   */
  createFolder(folderURI: string): boolean
  /**
   * Determines whether a specified file exists. If you specify a folder and a filename, the folder must already exist. To create folders, see FLfile.createFolder().
   * @returns A Boolean value of true if successful; false otherwise.
   * @param fileURI A string, expressed as a file:/// URI, that specifies the file you want to verify.
   */
  exists(fileURI: string): boolean
  /**
   * Returns a string representing the attributes of the specified file or folder, or an empty string if the file has no specific attributes (that it, it is not read-only, not hidden, and so on). You should always use FLfile.exists() to test for the existence of a file or folder before using this method.
   * Characters in the string represent the attributes as follows:
   * •R — fileOrFolderURI is read-only
   * •D — fileOrFolderURI is a folder (directory)
   * •H — fileOrFolderURI is hidden (Windows only)
   * •S — fileOrFolderURI is a system file or folder (Windows only)
   * •A — fileOrFolderURI is ready for archiving (Windows only)
   * For example, if fileOrFolderURI is a hidden folder, the string returned is "DH".
   * @returns A string that represents the attributes of the specified file or folder.
   * Results are unpredictable if the file or folder doesn't exist. You should use FLfile.exists() before using this method.
   * @param fileOrFolderURI A string, expressed as a file:/// URI, specifying the file or folder whose attributes you want to retrieve.
   */
  getAttributes(fileOrFolderURI: string): string
  /**
   * Specifies how many seconds have passed between January 1, 1970 and the time the file or folder was created. This method is used primarily to compare the creation or modification dates of files or folders.
   * @returns A string containing a hexadecimal number that represents the number of seconds that have elapsed between January 1, 1970 and the time the file or folder was created, or "00000000" if the file or folder doesn't exist.
   * @param fileOrFolderURI A string, expressed as a file:/// URI, specifying the file or folder whose creation date and time you want to retrieve as a hexadecimal string.
   */
  getCreationDate(fileOrFolderURI: string): void
  /**
   * Returns a JavaScript Date object that represents the date and time when the specified file or folder was created.
   * @returns A JavaScript Date object that represents the date and time when the specified file or folder was created. If the file doesn't exist, the object contains information indicating that the file or folder was created at midnight GMT on December 31, 1969.
   * @param fileOrFolderURI A string, expressed as a file:/// URI, specifying the file or folder whose creation date and time you want to retrieve as a JavaScript Date object.
   */
  getCreationDateObj(fileOrFolderURI: string): Date
  /**
   * Specifies how many seconds have passed between January 1, 1970 and the time the file or folder was last modified. This method is used primarily to compare the creation or modification dates of files or folders.
   * @returns A string containing a hexadecimal number that represents the number of seconds that have elapsed between January 1, 1970 and the time the file or folder was last modified, or "00000000" if the file doesn't exist.
   * @param fileOrFolderURI A string, expressed as a file:/// URI, specifying the file whose modification date and time you want to retrieve as a hexadecimal string.
   */
  getModificationDate(fileOrFolderURI: string): string
  /**
   * Returns a JavaScript Date object that represents the date and time when the specified file or folder was last modified.
   * @returns A JavaScript Date object that represents the date and time when the specified file or folder was last modified. If the file or folder doesn't exist, the object contains information indicating that the file or folder was created at midnight GMT on December 31, 1969.
   * @param fileOrFolderURI A string, expressed as a file:/// URI, specifying the file or folder whose modification date and time you want to retrieve as a JavaScript Date object.
   */
  getModificationDateObj(fileOrFolderURI: string): Date
  /**
   * Returns an integer that represents the size of the specified file, in bytes, or 0 if the file doesn't exist. If the return value is 0, you can use FLfile.exists() to determine whether the file is a zero-byte file or the file doesn't exist.
   * This method returns correct file size values only for files that are less than or equal to 2GB in size.
   * @returns An integer that represents the size of the specified file, in bytes, or 0 if the file doesn't exist.
   * @param fileURI A string, expressed as a file:/// URI, specifying the file whose size you want to retrieve.
   */
  getSize(fileURI: string): number
  /**
   * Returns an array of strings representing the contents of the folder.
   * @returns An array of strings representing the contents of the folder. If the folder doesn't exist or if no files or folders match the specified criteria, returns an empty array.
   * @param folderURI A string, expressed as a file:/// URI, specifying the folder whose contents you want to retrieve. You can include a wildcard mask as part of folderURI. Valid wildcards are * (matches one or more characters) and ? (matches a single character).
   * @param filesOrDirectories An optional string that specifies whether to return only filenames or only folder (directory) names. If omitted, both filenames and folder names are returned. Acceptable values are "files" and "directories".
   */
  listFolder(folderURI: string, filesOrDirectories?: string): string[]
  /**
   * Converts a filename in a platform-specific format to a file:/// URI.
   * @returns A string expressed as a file:/// URI.
   * @param fileName A string, expressed in a platform-specific format, specifying the filename you want to convert.
   */
  platformPathToURI(fileName: string): string
  /**
   * Returns the contents of the specified file as a string, or null if the read fails.
   * @returns The contents of the specified file as a string, or null if the read fails.
   * @param fileURI A string, expressed as a file:/// URI, specifying the text-based file (such as .js, .txt, or .jsfl) that you want to read.
   */
  read(fileURI: string): string | null
  /**
   * Deletes the specified file or folder. If the folder contains files, those files will be deleted as well. Files with the R (read-only) attribute cannot be removed.
   * @returns A Boolean value of true if successful; false otherwise.
   * @param folderOrFolderURI A string, expressed as a file:/// URI, specifying the file or folder you want to remove (delete).
   */
  remove(folderOrFolderURI: string): boolean
  /**
   * Specifies system-level attributes for the specified file.
   * The following values are valid for strAttrs:
   * •N — No specific attributes (not read-only, not hidden, and so on)
   * •A — Ready for archiving (Windows only)
   * •R — Read-only (on the Macintosh, read-only means “locked”)
   * •W — Writable (overrides R)
   * •H — Hidden (Windows only)
   * •V — Visible (overrides H, Windows only)
   * If you include both R and W in strAttrs, the R is ignored and the file is set as writable. Similarly, if you pass H and V, the H is ignored and the file is set as visible.
   * If you want to make sure the archive attribute is not set, use this command with the N parameter before setting attributes. That is, there is no direct counterpart to A that turns off the archive attribute.
   * @returns A Boolean value of true if successful.
   * Note: Results are unpredictable if the file or folder doesn't exist. You should use FLfile.exists() before using this method.
   * @param fileURI A string, expressed as a file:/// URI, specifying the file whose attributes you want to set.
   * @param strAttrs A string specifying values for the attribute(s) you want to set. For acceptable values for strAttrs, see the “Description” section below.
   */
  setAttributes(fileURI: string, strAttrs: string): boolean
  /**
   * Converts a filename expressed as a file:/// URI to a platform-specific format.
   * @returns A string representing a platform-specific path.
   * @param fileURI A string, expressed as a file:/// URI, specifying the filename you want to convert.
   */
  uriToPlatformPath(fileURI: string): void
  /**
   * Writes the specified string to the specified file (as UTF-8). If the specified file does not exist, it is created. However, the folder in which you are placing the file must exist before you use this method. To create folders, use FLfile.createFolder().
   * @returns A Boolean value of true if successful; false otherwise.
   * @param fileURI A string, expressed as a file:/// URI, specifying the file to which you want to write.
   * @param textToWrite A string representing the text you want to place in the file.
   * @param strAppendMode An optional string with the value "append", which specifies that you want to append textToWrite to the existing file. If omitted, fileURI is overwritten with textToWrite.
   */
  write(fileURI: string, textToWrite: string, strAppendMode?: string): boolean
}

/**
 * The flash object represents the Flash application. You can use flash or fl to refer to this object. This documentation uses fl in code samples throughout.
 */
declare class Flash {
  /**
   * An actionsPanel object, which represents the currently displayed Actions panel. For information on using this property, see actionsPanel object.
   */
  readonly actionsPanel: ActionsPanel
  /**
   * A string that corresponds to the global Classpath setting in the ActionScript 3.0 Settings dialog box. Items in the string are delimited by semi-colons. To view or change ActionScript 2.0 Classpath settings, use fl.packagePaths - dropped.
   */
  as3PackagePaths: string
  /**
   * A compilerErrors object, which represents the Errors panel. For information on using this property, see compilerErrors object.
   */
  readonly compilerErrors: CompilerErrors
  /**
   * A componentsPanel object, which represents the Components panel.
   */
  readonly componentsPanel: ComponentsPanel
  /**
   * A string that specifies the full path for the local user’s Configuration directory in a platform-specific format. To specify this path as a file:/// URI, which is not platform-specific, use fl.configURI.
   */
  readonly configDirectory: string
  /**
   * A string that specifies the full path for the local user’s Configuration directory as a file:/// URI. See also fl.configDirectory.
   */
  readonly configURI: string
  /**
   * A Boolean value that specifies whether Contact Sensitive selection mode is enabled (true) or not (false).
   */
  contactSensitiveSelection: boolean
  /**
   * An array of strings that represent the various types of documents that can be created.
   */
  readonly createNewDocList: string[]
  /**
   * An array of strings that represent the file extensions of the types of documents that can be created. The entries in the array correspond directly (by index) to the entries in the fl.createNewDocList array.
   */
  readonly createNewDocListType: string[]
  /**
   * An array of strings that represent the various types of templates that can be created.
   */
  readonly createNewTemplateList: string[]
  /**
   * An array of Document objects (see Document object) that represent the documents (FLA files) that are currently open for editing.
   */
  readonly documents: Document[]
  /**
   * The drawingLayer object that an extensible tool should use when the user wants to temporarily draw while dragging (for example, when creating a selection marquee).
   */
  drawingLayer: DrawingLayer
  /**
   * A string that contains a list of items in the global ActionScript 3.0 External library path, which specifies the location of SWC files used as runtime shared libraries. Items in the string are delimited by semi-colons. In the authoring tool, the items are specified by choosing Edit > Preferences > ActionScript > ActionScript 3.0 Settings.
   */
  externalLibraryPath: string
  /**
   * A string that specifies the path to the Flex SDK folder, which contains bin, frameworks, lib, and other folders. In the authoring tool, the items are specified by choosing Edit > Preferences > ActionScript > ActionScript 3.0 Settings.
   */
  flexSDKPath: string
  /**
   * An array of generic objects corresponding to the list of installed Flash Players in the document PI.
   */
  readonly installedPlayers: InstalledPlayer[]
  /**
   * A string that returns the five character code identifying the locale of the application’s user interface.
   */
  languageCode: string
  /**
   * A string that contains a list of items in the global ActionScript 3.0 Library path, which specifies the location of SWC files or folders containing SWC files. Items in the string are delimited by semi-colons. In the authoring tool, the items are specified by choosing Edit > Preferences > ActionScript > ActionScript 3.0 Settings.
   */
  libraryPath: string
  /**
   * The Math object provides methods for matrix and point operations.
   */
  readonly Math: Math
  /**
   * An array of the complete filenames in the Most Recently Used (MRU) list that the Flash authoring tool manages.
   */
  readonly mruRecentFileList: string[]
  /**
   * An array of the file types in the MRU list that the Flash authoring tool manages. This array corresponds to the array in the fl.mruRecentFileList property.
   */
  readonly mruRecentFileListType: string[]
  /**
   * A Boolean value that specifies whether the object drawing mode is enabled (true) or the merge drawing mode is enabled (false).
   */
  objectDrawingMode: boolean
  /**
   * Reference to the outputPanel object.
   */
  readonly outputPanel: OutputPanel
  /**
   * A presetPanel object.
   */
  readonly presetPanel: PresetPanel
  /**
   * An integer that sets the maximum size, in megabytes, of the publish cache on disk.
   */
  publishCacheDiskSizeMax: number
  /**
   * A boolean value that sets whether the publish cache is enabled.
   */
  publishCacheEnabled: boolean
  /**
   * An integer that sets the maximum size, in kilobytes, of entries that can be added to the publish cache in memory. Anything at or below this size will be kept in memory; anything larger will be written to disk.
   * Users with a lot of memory might want to raise this value to increase performance, while a user with very little memory might want to make it lower to keep the publish cache from consuming too much memory.
   */
  publishCacheMemoryEntrySizeLimit: number
  /**
   * An integer that sets the maximum size, in megabytes, of the publish cache in memory.
   */
  publishCacheMemorySizeMax: number
  /**
   * A string that represents the path of the currently running JSFL script, expressed as a file:/// URI. If the script was called from fl.runScript(), this property represents the path of the immediate parent script. That is, it doesn't traverse multiple calls to fl.runScript() to find the path of the original calling script.
   */
  readonly scriptURI: string
  /**
   * A string that contains a list of items in the global ActionScript 3.0 Source path, which specifies the location of ActionScript class files. Items in the string are delimited by semi-colons. In the authoring tool the items are specified by choosing Edit > Preferences > ActionScript > ActionScript 3.0 Settings.
   */
  sourcePath: string
  /**
   * Returns an instance of the SpriteSheetExporter object.
   */
  spriteSheetExporter: SpriteSheetExporter
  /**
   * An array of registered swfPanel objects (see swfPanel object). A swfPanel object is registered if it has been opened at least once.
   * A panel’s position in the array represents the order in which it was opened. If the first panel opened is named TraceBitmap and the second panel opened is named AnotherFunction, then fl.swfPanels[0] is the TraceBitmap swfPanel object, fl.swfPanels[1] is the AnotherFunction swfPanel object, and so on.
   * This property is undefined if none of panels have been opened (this behavior is new in Flash Professional CC).
   */
  swfPanels: SWFPanel[] | undefined
  /**
   * An array of Tools objects (see Tools object). This property is used only when creating extensible tools.
   */
  readonly tools: Tools[]
  /**
   * The long string version of the Flash authoring tool, including platform.
   */
  readonly version: string
  /**
   * An XMLUI object. This property lets you get and set XMLUI properties in a XMLUI dialog box and lets you accept or cancel the dialog box programmatically.
   */
  readonly xmlui: XMLUI
  /**
   * Registers a function to be called when a specific event occurs. Note that you can define multiple listeners for the same event.
   * When using this method, be aware that if the event occurs frequently (as might be the case with mouseMove) and the function takes a long time to run, your application might hang or otherwise enter an error state. Additionally, the prePublish and postPublish events should have minimal code and execute quickly.
   * @returns An integer that identifies the event listener. Use this identifier when calling fl.removeEventListener().
   * @param eventType A string that specifies the event type to pass to this callback function. Acceptable values are "documentNew", "documentOpened", "documentClosed", "mouseMove", "documentChanged", "layerChanged""timelineChanged", "frameChanged", “prePublish”, “postPublish”, “selectionChanged”, and "dpiChanged".
   * The documentChanged value doesn't mean that the content of a document has changed; it means that a different document is now in the foreground. That is, fl.getDocumentDOM() will return a different value than it did before this event occurred.
   * @param callbackFunction The name of the function you want to execute every time the event occurs.
   */
  addEventListener(eventType: string, callbackFunction: any): number
  /**
   * Opens a File Open or File Save system dialog box and lets the user specify a file to be opened or saved.
   * @returns The URL of the file, expressed as a file:/// URI; returns null if the user cancels out of the dialog box.
   * @param browseType A string that specifies the type of file browse operation. Valid values are "open", "select" or "save". The values "open" and "select" open the system File Open dialog box. Each value is provided for compatibility with Dreamweaver. The value "save" opens a system File Save dialog box.
   * @param title An optional string that specifies the title for the File Open or File Save dialog box. If this parameter is omitted, a default value is used. This parameter is optional.
   * @param fileDescription An optional string that specifies a file description, for example:
   * FLA Document (*.fla)
   * ActionScript File (*.as)
   * @param fileFilter An optional string that specifies a filter, such that only files that match the filters are displayed in the dialog, for example:
   * "fla"
   * "fla;as"
   * "jsfl;fla;as"
   */
  browseForFileURL(
    browseType: string,
    title?: string,
    fileDescription?: string,
    fileFilter?: string,
  ): string | null
  /**
   * Displays a Browse for Folder dialog box and lets the user select a folder.
   * @returns The URL of the folder, expressed as a file:/// URI; returns null if the user cancels out of the dialog box.
   * @param description An optional string that specifies the description of the Browse For Folder dialog box. If this parameter is omitted, the dialog box title is “Select Folder.”
   */
  browseForFolderURL(description?: string): string | null
  /**
   * Empties the publish cache.
   */
  clearPublishCache(): void
  /**
   * Copies the specified string to the Clipboard.
   * To copy the current selection to the Clipboard, use document.clipCopy().
   * @param string A string to be copied to the Clipboard.
   */
  clipCopyString(string: string): void
  /**
   * Closes all open files (FLA files, SWF files, JSFL files, and so on). If you want to close all open files without saving changes to any of them, pass false for bPromptToSave. This method does not terminate the application.
   * @param bPromptToSave An optional Boolean value that specifies whether to display the Save dialog box for any files that have been changed since they were previously saved, or the Save As dialog box for files that have never been saved. The default value is true.
   */
  closeAll(bPromptToSave?: boolean): void
  /**
   * Closes all the SWF files that were opened with Control > Test Movie.
   * @returns A Boolean value: true if one or more movie windows were open; false otherwise.
   */
  closeAllPlayerDocuments(): boolean
  /**
   * Closes the specified document.
   * @param documentObject A Document object. If documentObject refers to the active document, the Document window might not close until the script that calls this method finishes executing.
   * @param bPromptToSaveChanges A Boolean value. When bPromptToSaveChanges is false, the user is not prompted if the document contains unsaved changes; that is, the file is closed and the changes are discarded. If bPromptToSaveChanges is true, and if the document contains unsaved changes, the user is prompted with the standard yes-or-no dialog box. The default value is true. This parameter is optional.
   */
  closeDocument(documentObject: Document, bPromptToSaveChanges?: boolean): void
  /**
   * Silently copies a library item from a document without exposing the item in the Flash Pro user interface. Call the document.clipPaste() method to paste the item into the new document.
   * @returns A Boolean value: true if the copy succeeds; false otherwise.
   * @param fileURI A string, expressed as a file:/// URI, that contains the path to the FLA or XFL file.
   * @param libraryItemPath A string, that specifies the path to the library item to be copied.
   */
  copyLibraryItem(fileURI: string, libraryItemPath: string): boolean
  /**
   * Opens a new document and selects it. Values for size, resolution, and color are the same as the current defaults.
   * @returns The Document object for the newly created document, if the method is successful. If an error occurs, the value is undefined.
   * @param docType A string that specifies the type of document to create. The only acceptable value is "timeline". The default value is "timeline", which has the same effect as choosing File > New > Flash File (ActionScript 3.0). This parameter is optional.
   */
  createDocument(docType?: string): Document | undefined
  /**
   * Returns a specific document’s publishing profile without having to open the file. The publish profile can also be specified, but this is optional.
   * @returns A string containing the specific document's publishing profile.
   * @param ucfURI A string that specifies the file Uniform Resource Identifier (URI) from which to export the publish settings.
   * @param profileName A string that specifies the profile name to export. This parameter is optional.
   */
  exportPublishProfileString(ucfURI: string, profileName?: string): string
  /**
   * Checks whether a file already exists on disk.
   * @returns A Boolean value: true if the file exists on disk; false otherwise.
   * @param fileURI A string, expressed as a file:/// URI, that contains the path to the file.
   */
  fileExists(fileURI: string): boolean
  /**
   * Lets you target a specific file by using its unique identifier (instead of its index value, for example). Use this method in conjunction with document.id.
   * @returns A Document object, or null if no document exists with the specified id.
   * @param id An integer that represents a unique identifier for a document.
   */
  findDocumentDOM(id: number): Document | null
  /**
   * Returns an array of integers that represent the position of the document name in the fl.documents array. More than one document with the same name can be open (if the documents are located in different folders).
   * @returns An array of integers that represent the position of the document name in the fl.documents array.
   * @param name The document name for which you want to find the index. The document must be open.
   */
  findDocumentIndex(name: string): number[]
  /**
   * Exposes elements in a document with instance names that match the specified text.
   * Note: In some cases, this method works only when run as a command from within a FLA file, not when you are currently viewing or editing the JSFL file.
   * @returns An array of generic objects. Use the .obj property of each item in the array to get the object. The object has the following properties: keyframe, layer, timeline, and parent. You can use these properties to access the hierarchy of the object. For more information on these properties and how to access them, see fl.findObjectInDocByType().
   * You can also access methods and properties for the layer and timeline values; they are equivalent to the Layer object and the Timeline object, respectively.
   * @param instanceName A string that specifies the instance name of an item in the specified document.
   * @param document The Document object in which to search for the specified item.
   */
  findObjectInDocByName(instanceName: string, document: Document): ObjectInDoc[]
  /**
   * Exposes elements of a specified element type in a document.
   * Note: In some cases, this method works only when run as a command from within a FLA file, not when you are currently viewing or editing the JSFL file.
   * @returns An array of generic objects. Use the .obj property of each item in the array to get the element object. Each object has the following properties: keyframe, layer, timeline, and parent. You can use these properties to access the hierarchy of the object.
   * You can also access methods and properties for the layer and timeline values; they are equivalent to the Layer object and the Timeline object, respectively.
   * See documentation for examples: file:///C:/Users/vstinca/Downloads/flash_cs5_extending.pdf
   * @param elementType A string that represents the type of element to search for. For acceptable values, see element.elementType.
   * @param document The Document object in which to search for the specified item.
   */
  findObjectInDocByType(elementType: string, document: Document): ObjectInDoc[]
  /**
   * (Windows only); returns an integer that represents the number of bytes being used in a specified area of Flash.exe memory.
   * @returns An integer that represents the number of bytes being used in a specified area of Flash.exe memory.
   * @param memType An integer that specifies the memory utilization area to be queried. The list of acceptable values:
   * 0 - PAGEFAULTCOUNT
   * 1 - PEAKWORKINGSETSIZE
   * 2 - WORKINGSETSIZE
   * 3 - QUOTAPEAKPAGEDPOOLUSAGE
   * 4 - QUOTAPAGEDPOOLUSAGE
   * 5 - QUOTAPEAKNONPAGEDPOOLUSAGE
   * 6 - QUOTANONPAGEDPOOLUSAGE
   * 7 - PAGEFILEUSAGE
   * 8 - PEAKPAGEFILEUSAGE
   */
  getAppMemoryInfo(memType: number): number
  /**
   * Retrieves the DOM (Document object) of the currently active document (FLA file). If one or more documents are open but a document does not currently have focus (for example, if a JSFL file has focus), retrieves the DOM of the most recently active document.
   * @returns A Document object, or null if no documents are open.
   */
  getDocumentDOM(): Document | null
  /**
   * Returns the SWFPanel object based on the panel's localized name or its SWF filename (without the filename extension).
   * @returns SWFPanel object.
   * @param panelName The localized panel name or the root filename of the panel's SWF file. Pass in false as the second parameter if using the latter.
   * @param useLocalizedPanelName Optional. Defaults to true. If false, the panelName parameter is assumed to be the English (unlocalized) name of the panel, which corresponds to the SWF filename without the file extension.
   */
  getSwfPanel(panelName: string, useLocalizedPanelName?: boolean): SWFPanel
  /**
   *
   * @param themeParamName A string that contains a theme parameter from the list returned by the fl.getThemeColorParameters() method. If the theme parameter is themeUseGradients, this method returns either "true" or "false".
   */
  getThemeColor(themeParamName: string): string | boolean
  /**
   * Returns an Array of strings that contain the theme color parameters. The available theme color parameters are as follows:
   * •themeAppBackgroundColor
   * •themeItemSelectedColor
   * •themeItemHighlightedColor
   * •themeHotTextNormalColor
   * •themeHotTextRolloverColor
   * •themeHotTextDisableColor
   * •themeStaticTextNormalColor
   * •themeStaticTextDisableColor
   * •themeTextEditNormalBackgroundColor
   * •themeTextEditDisableBackgroundColor
   * •themeUseGradients
   * •themeEnableShading
   * •themeDividerLine
   * •themeDividerLineBevel
   * •themeControlFocus
   * •themeControlBorderNormal
   * •themeControlBorderDisabled
   * •themeControlFillNormal
   * •themeControlFillTopNormal
   * •themeControlFillBottomNormal
   * •themeControlFillOver
   * •themeControlFillTopOver
   * •themeControlFillBottomOver
   * •themeControlFillDown
   * •themeControlFillTopDown
   * •themeControlFillBottomDown
   * •themeControlFillDisabled
   * •themeControlFillTopDisabled
   * •themeControlFillBottomDisabled
   * •themeControlFillSelectedOver
   * •themeControlFillTopSelectedOver
   * •themeControlFillBottomSelectedOver
   * •themeGenericIconNormal
   * •themeGenericIconShadowNormal
   * •themeGenericIconDisabled
   * •themeGenericIconShadowDisabled
   * Flash Professional CC introduced 2 UI themes: Dark and Light UI, and this method retrieves the current theme color parameters to help you render your custom content.
   * Note: The "top" and "bottom" colors are for drawing controls when shading is enabled. When shading is disabled, use themeControlFillNormal, themeControlFillOver without the "top" and "bottom" in the names
   * @returns An Array of strings that contain the theme color parameters.
   */
  getThemeColorParameters(): string[]
  /**
   * Returns either the font Style or the font Size that is used to draw the UI of the specified size.
   * @returns A String containing either the font style or the font size for the specifie size.
   * @param infoType A string that contains one of the following:
   * •fontStyle - Return the font style for the size specified by the size parameter.
   * •fontSize - Return the font size for the size specified by the size parameter.
   * @param size A string that specifies either "large" or "small".
   */
  getThemeFontInfo(infoType: string, size: string): string
  /**
   * Determines whether a specified font is installed.
   * @returns A Boolean value of true if the specified font is installed; false otherwise.
   * @param fontName A string that specifies the name of a device font.
   */
  isFontInstalled(fontName: string): boolean
  /**
   * Maps an escaped Unicode URL to a UTF-8 or MBCS URL. Use this method when the string will be used in ActionScript to access an external resource. You must use this method if you need to handle multibyte characters.
   * @returns A string that is the converted URL.
   * @param URI A string that contains the escaped Unicode URL to map.
   * @param returnMBCS A Boolean value that you must set to true if you want an escaped MBCS path returned. Otherwise, the method returns UTF-8. The default value is false. This parameter is optional.
   */
  mapPlayerURL(URI: string, returnMBCS?: boolean): string
  /**
   * Opens a Flash document (FLA file) for editing in a new Flash Document window and gives it focus. For a user, the effect is the same as selecting File > Open and then selecting a file. If the specified file is already open, the window that contains the document comes to the front. The window that contains the specified file becomes the currently selected document.
   * @returns The Document object for the newly opened document, if the method is successful. If the file is not found or is not a valid FLA file, an error is reported and the script is cancelled.
   * @param fileURI A string, expressed as a file:/// URI, that specifies the name of the file to be opened.
   */
  openDocument(fileURI: string): Document // | Error
  /**
   * Opens an existing file or creates a new script (JSFL, AS, ASC) or other file (XML, TXT) in Flash.
   * @param fileURI A string, expressed as a file:/// URI, that specifies the path of the JSFL, AS, ASC, XML, TXT, or other file that should be loaded into Flash.
   */
  openScript(fileURI: string): void
  /**
   *
   * @param bPromptIfNeeded A Boolean value that is true (default) if you want the user to be prompted to save any modified documents. Set this parameter to false if you do not want the user to be prompted to save modified documents. In the latter case, any modifications in open documents will be discarded and the application will exit immediately. Although it is useful for batch processing, use this method with caution. This parameter is optional.
   */
  quit(bPromptIfNeeded?: boolean): void
  /**
   * Rebuilds the Tools panel from the toolconfig.xml file. This method is used only when creating extensible tools. Use this method when you need to reload the Tools panel, for example, after modifying the JSFL file that defines a tool that is already present in the panel.
   */
  reloadTools(): void
  /**
   * Unregisters a function that was registered using fl.addEventListener().
   * @returns A Boolean value of true if the event listener was successfully removed; false if the function was never added to the list with the fl.addEventListener() method.
   * @param eventType A string that specifies the event type to remove from this callback function. Acceptable values are "documentNew", "documentOpened", "documentClosed", "mouseMove", "documentChanged", "layerChanged", "timelineChanged", and "frameChanged".
   * @param id An integer that specifies the listener ID returned from the corresponding fl.addEventListener() call.
   */
  removeEventListener(eventType: string, id: number): boolean
  /**
   * Resets the global Classpath setting in the ActionScript 3.0 Settings dialog box to the default value. To reset the ActionScript 2.0 global Classpath, use fl.resetPackagePaths() - dropped.
   */
  resetAS3PackagePaths(): void
  /**
   * Reverts the specified FLA document to its last saved version. Unlike the File > Revert menu option, this method does not display a warning window that asks the user to confirm the operation. See also document.revert() and document.canRevert().
   * @returns A Boolean value: true if the Revert operation completes successfully; false otherwise.
   * @param documentObject A Document object. If documentObject refers to the active document, the Document window might not revert until the script that calls this method finishes executing.
   */
  revertDocument(documentObject: Document): boolean
  /**
   * Executes a JavaScript file. If a function is specified as one of the arguments, it runs the function and also any code in the script that is not within the function. The rest of the code in the script runs before the function is run.
   * @returns The function's result as a string, if funcName is specified; otherwise, nothing.
   * @param fileURI A string, expressed as a file:/// URI, that specifies the name of the script file to execute.
   * @param funcName A string that identifies a function to execute in the JSFL file that is specified in fileURI. This parameter is optional.
   * @param args An optional parameter that specifies one or more arguments to be passed to funcname.
   */
  runScript(fileURI: string, funcName?: string, ...args: any[]): void
  /**
   * Saves all open documents.
   * If a file has never been saved, the Save As dialog box displays. If a file has not been modified since the last time it was saved, the file isn’t saved. To allow an unsaved or unmodified file to be saved, use fl.saveDocumentAs().
   */
  saveAll(): void
  /**
   * Saves the specified document as a FLA document.
   * This method saves the file regardless of whether it is new, modified, or unmodified.
   * @returns A Boolean value: true if the save operation completes successfully; false otherwise.
   * @param document A Document object that specifies the document to be saved. If document is null, the active document is saved.
   * @param fileURI A string, expressed as a file:/// URI, that specifies the name of the saved document. If the fileURI parameter is null or omitted, the document is saved with its current name. This parameter is optional.
   */
  saveDocument(document: Document | null, fileURI?: string): boolean
  /**
   * Displays the Save As dialog box for the specified document.
   * @returns A Boolean value: true if the Save As operation completes successfully; false otherwise.
   * @param document A Document object that specifies the document to save. If document is null, the active document is saved.
   */
  saveDocumentAs(document: Document | null): boolean
  /**
   * Enables selection or editing of an element. Generally, you will use this method on objects returned by fl.findObjectInDocByName() or fl.findObjectInDocByType().
   * @returns A Boolean value of true if the element was successfully selected; false otherwise.
   * @param elementObject The Element object you want to select.
   * @param editMode A Boolean value that specifies whether you want to edit the element (true) or want only to select it (false).
   */
  selectElement(elementObject: Element, editMode: boolean): boolean
  /**
   * Selects the specified tool in the Tools panel. The acceptable default values for toolName are
   * "arrow", "bezierSelect", "freeXform", "fillXform", "lasso", "pen", "penplus", "penminus", "penmodify", "text", "line", "rect", "oval", "rectPrimitive", "ovalPrimitive", "polystar", "pencil", "brush", "inkBottle", "bucket", "eyeDropper", "eraser", "hand", and "magnifier".
   * If you or a user creates custom tools, the names of those tools can also be passed as the toolName parameter. The list of tool names is located in the following file:
   * •Windows 7: boot drive\Users\username\AppData\Local\Adobe\Flash CC\language\Configuration\Tools\toolConfig.xml
   * •Mac OS X: Macintosh HD/Users/username/Library/Application Support/Adobe/Flash CS3/language/Configuration/Tools/toolConfig.xml
   * @param toolName A string that specifies the name of the tool to select. See “Description” below for information on acceptable values for this parameter.
   */
  selectTool(toolName: string): void
  /**
   * Sets the active window to be the specified document. This method is also supported by Dreamweaver and Fireworks. If the document has multiple views (created by Window > Duplicate Window), the most recently active view is selected.
   * @param document A Document object that specifies the document to select as the active window.
   * @param bActivateFrame An optional parameter that is ignored by Flash and Fireworks and is present only for compatibility with Dreamweaver.
   */
  setActiveWindow(document: Document, bActivateFrame?: boolean): void
  /**
   * Sets a boolean preference value.
   * @param keySection A string that contains the preferences section that contains keyName. (usually this is "Settings").
   * @param keyName A string that contains the name of the boolean preference setting to be set.
   * @param keyValue A string or boolean that contains the value to be set (true or false).
   */
  setPrefBoolean(keySection: string, keyName: string, keyValue: string | boolean): void
  /**
   * Lets you disable the warning about a script running too long (pass false for show). You might want to do this when processing batch operations that take a long time to complete. To re-enable the alert, issue the command again, this time passing true for show.
   * @param show A Boolean value specifying whether to enable or disable the warning about a script running too long.
   */
  showIdleMessage(show: boolean): void
  /**
   * Toggles a breakpoint for the given .as file at the given line. If enable is false, the breakpoint currently stored at that line will be erased.
   * @param fileURI A string; the URI of the the AS file in which to toggle the breakpoint.
   * @param line An integer; the line number at which to toggle the breakpoint.
   * @param enable Boolean; if set to true, the breakpoint is enabled. If set to false, the breakpoint is disabled.
   */
  toggleBreakpoint(fileURI: string, line: number, enable: boolean): void
  /**
   * Sends a text string to the Output panel, terminated by a new line, and displays the Output panel if it is not already visible. This method is identical to outputPanel.trace() and works in the same way as the trace() statement in ActionScript.
   * To send a blank line, use fl.trace("") or fl.trace("\n"). You can use the latter command inline, making \n a part of the message string.
   * @param message A string that appears in the Output panel.
   */
  trace(message: string): void
  /**
   * Launches the XML To UI dialog from a URI that points to an XML-format file.
   * @returns XMLUI. The object returned contains properties for all controls defined in the XML file. All properties are returned as strings. The returned object will have one predefined property named "dismiss," which will have a string value that is either "accept" or "cancel".
   * @param xmlURI A URI specifying the XML file that defines the controls in the panel. You must specify the full path name.
   */
  xmlPanel(xmlURI: string): XMLUI
  /**
   * Launches the XML To UI dialog from an XML-format string.
   * @returns XMLUI
   * @param xmlString A string containing XML that defines a dialog.
   */
  xmlPanelFromString(xmlString: string): XMLUI
}

declare const flash: Flash

/**
 * Short variable name for flash.
 */
declare interface fl extends Flash {}

declare const fl: Flash

/**
 * The SpriteSheetExporter object is a subclass of the
Item object.
 */
declare class SpriteSheetExporter extends Item {
  /**
   * A string indicating which algorithm to use to pack the sprite sheet. Valid values are "basic" (the default), and "maxRects".
   */
  algorithm: string
  /**
   * A boolean value indicating whether the symbol frames can be rotated when packed into the sprite sheet.
   */
  allowRotate: boolean
  /**
   * A boolean value indicating whether the symbol frames can be trimmed of any extra whitespace when packed into the sprite sheet. The default value is true.
   */
  allowTrimming: boolean
  /**
   * A string indicating the name of the application that is generating the sprite sheet. This property is provided for use by any future sprite sheet generator plugins that may be created for Flash Pro.
   */
  readonly app: string
  /**
   * A boolean value indicating whether the sprite sheet exporter should calculate the overall size of the sprite sheet on its own.
   */
  autoSize: boolean
  /**
   * An integer indicating the number of pixels of padding to add around each sprite in the sprite sheet.
   */
  borderPadding: number
  /**
   * A boolean value indicating whether the framework specified by the SpriteSheetExporter.layoutFormat property supports border padding.
   */
  readonly canBorderPad: boolean
  /**
   * A boolean value indicating whether the framework specified by the SpriteSheetExporter.layoutFormat property may rotate symbol frames when adding them to the sprite sheet.
   */
  readonly canRotate: boolean
  /**
   * A boolean value indicating whether the framework specified by the SpriteSheetExporter.layoutFormat property supports shape padding.
   */
  readonly canShapePad: boolean
  /**
   * A boolean value indicating whether the framework specified by the SpriteSheetExporter.layoutFormat property supports stacking duplicate symbol frames within the sprite sheet.
   */
  readonly canStackDuplicateFrames: boolean
  /**
   * A boolean value indicating whether the framework specified by the SpriteSheetExporter.layoutFormat property supports trimming extra whitespace from symbol frames when adding them to the sprite sheet.
   */
  readonly canTrim: boolean
  /**
   * A string value indicating the format of the sprite sheet image file. Possible values include “RGBA8888”, “RGB888x”, and “RGB8”. This property is provided for use by sprite sheet generator plugins.
   */
  readonly format: string
  /**
   * A string value indicating the name of the sprite sheet image file. This property is provided for use by sprite sheet generator plugins.
   */
  readonly image: string
  /**
   * A string value indicating the format of the sprite sheet metadata. Valid values depend on the contents of the Sprite Sheet Plugin directory. “JSON” (JavaScript Object Notation) is one possible value. Your script passes the layout format’s ID string to match one of the .jsfl files defined for the Sprite Sheet plugin (located in the flashroot/Common/Configuration/Sprite Sheet Plugins folder). These files have the naming convention layoutformat.plugin.jsfl and you pass a string set to layoutformat. For example, you would set layoutFormat equal to "Starling", "cocos2D v2", or "cocos2D v3".
   */
  layoutFormat: string
  /**
   * Controls the maximum height of the generated sprite sheet when autoSize = true, clipped to a maximum value of 8192.
   */
  maxSheetHeight: number
  /**
   * Controls the maximum width of the generated sprite sheet when autoSize = true, clipped to a maximum value of 8192.
   */
  maxSheetWidth: number
  /**
   * A boolean value indicating whether all the exported symbol frames cannot fit within the currently specified size of the sprite sheet.
   */
  readonly overflowed: boolean
  /**
   * An integer value indicating how many pixels of padding should be added to each exported symbol frame when adding it to the sprite sheet.
   */
  shapePadding: number
  /**
   * An integer value specifying the height of the sprite sheet. This value is read-only if SpriteSheetExporter.autoSize is set to true.
   */
  sheetHeight: number
  /**
   * An integer value specifying the width of the sprite sheet. This value is read-only if SpriteSheetExporter.autoSize is set to true.
   */
  sheetWidth: number
  /**
   * A boolean value specifying whether the sprite sheet can stack duplicate symbol frames when adding them to the sprite sheet. The default is true.
   */
  stackDuplicateFrames: boolean
  /**
   * A string indicating the version number of the Flash Pro application. This property is provided for use by sprite sheet plugins.
   */
  readonly version: string
  /**
   * Adds the specified bitmap or bitmapItem to the sprite sheet object.
   * @param bitmap The BitmapItem or Bitmap to include in the sprite sheet.
   */
  addBitmap(bitmap: BitmapItem | BitMap): void
  /**
   * Adds the specified SymbolItem or SymbolInstance to be used to generate the sprite sheet.
   * @param symbol The SymbolItem or SymbolInstance to include in the sprite sheet.
   * @param name The name of the symbol instance to add to the sprite sheet.
   * @param beginFrame The beginning frame of the symbol to include in the sprite sheet.
   * @param endFrame The last frame of the symbol to include in the sprite sheet.
   */
  addSymbol(
    symbol: SymbolItem | SymbolInstance,
    name?: string,
    beginFrame?: number,
    endFrame?: number,
  ): boolean
  /**
   * Initializes the SpriteSheetExporter to create a new sprite sheet. This method is not necessary if you create the exporter from new. It is necessary if you reuse the same exporter to make multiple sprite sheets.
   */
  beginExport(): void
  /**
   * Changes the frame range of the symbol that will be used in the sprite sheet.
   * @param symbol A SymbolItem or SymbolInstance that has already been added to the sprite sheet.
   * @param beginFrame Optional. The beginning frame of the symbol to include in the sprite sheet.
   * @param endFrame Optional. The last frame of the symbol to include in the sprite sheet.
   */
  changeSymbol(symbol: SymbolItem | SymbolInstance, beginFrame?: number, endFrame?: number): boolean
  /**
   * Exports the sprite sheet into a an image file and a metadata file based on the path parameter. The return string is the metadata generated by the sprite sheet plugin or nothing if an error occurred.
   * @param path String; A file path with no extension to be used as the base name of the exported files.
   * @param imageFormat String or Object. A string or an object that describes the type of image format to generate.
   * •String: Valid values are either "png" or "jpg", the exporter use whatever values where last used.
   * •Object: If you pass an object, it needs at least a string property "format" which is either "png" or "jpg". Optionally the object may include "backgroundColor," which is a valid color value (alpha may be included); "quality" (jpg only), which is an integer from 1 to 100; and "bitDepth" (png only) which can be 8, 24 or 32.
   * @param writeMetaData Optional. Boolean; Whether or not to write the metadata file with the image file. The default value is true.
   */
  exportSpriteSheet(
    path: string,
    imageFormat?: string | ImageFormat,
    writeMetaData?: boolean,
  ): string
  /**
   * Removes the specified bitmap or bitmapItem from the sprite sheet object.
   * @param bitmap The BitmapItem or Bitmap to remove from the sprite sheet.
   */
  removeBitmap(bitmap: BitmapItem | BitMap): void
  /**
   * Removes the specified SymbolItem or SymbolInstance from the sprite sheet.
   * @param symbol The SymbolItem or SymbolInstance to remove from the sprite sheet.
   */
  removeSymbol(symbol: SymbolItem | SymbolInstance): boolean
}

/**
 * The compilerErrors object, which represents the Compiler Errors panel, is a property of the flash object (fl) and can be accessed by fl.compilerErrors (see flash object (fl)).
 */
declare class CompilerErrors {
  /**
   * Clears the contents of the Compiler Errors panel.
   */
  clear(): void
  /**
   * Saves the contents of the Compiler Errors panel to a local text file.
   * @param fileURI A string, expressed as a file:/// URI, that specifies the filename for the saved file. If fileURI already exists, and you haven’t specified a value of true for bAppendToFile, fileURI is overwritten without warning.
   * @param bAppendToFile An optional Boolean value that specifies whether the contents of the Compiler Errors panel should be appended to fileURI (true) or not (false). The default value is false.
   * @param bUseSystemEncoding An optional Boolean value that specifies whether to save the Compiler Errors panel text using the system encoding. If this value is false (the default), the Compiler Errors panel text is saved using UTF-8 encoding, with Byte Order Mark characters at the beginning of the text. The default value is false.
   */
  save(fileURI: string, bAppendToFile?: boolean, bUseSystemEncoding?: boolean): void
}

/**
 * The componentsPanel object, which represents the Components panel, is a property of the flash object (fl) and can be accessed by fl.componentsPanel (see flash object (fl)).
 */
declare class ComponentsPanel {
  /**
   * Adds the specified component to the document at the specified position.
   * The following examples illustrate some ways to use this method:
   * fl.componentsPanel.addItemToDocument({x:0, y:0}, "User Interface", "CheckBox");
   * fl.componentsPanel.addItemToDocument({x:0, y:100}, "Data", "WebServiceConnector");
   * fl.componentsPanel.addItemToDocument({x:0, y:200}, "User Interface", "Button");
   * @param position A point (for example, {x:0, y:100}) that specifies the location at which to add the component. Specify position relative to the center point of the component—not the component’s registration point (also origin point or zero point).
   * @param categoryName A string that specifies the name of the component category (for example, "Data"). The valid category names are listed in the Components panel.
   * @param componentName A string that specifies the name of the component in the specified category (for example, "WebServiceConnector"). The valid component names are listed in the Components panel.
   */
  addItemToDocument(position: Point, categoryName: string, componentName: string): void
  /**
   * Refreshes the Components panel’s list of components.
   * @returns A Boolean value of true if the Component panel list is refreshed, false otherwise.
   */
  reload(): boolean
}

/**
 * The Document object represents the Stage. That is, only FLA files are considered documents. To return the Document object for the current document, use fl.getDocumentDOM().
 */
declare const document: Document
declare class Document {
  /**
   * A string that is equivalent to the Name field in the Accessibility panel. Screen readers identify objects by reading the name aloud.
   */
  accName: string
  /**
   * A Boolean value that describes whether the instances placed on the Stage are automatically added to userdefined timeline classes. The default value is true.
   */
  as3AutoDeclare: boolean
  /**
   * A string that describes the ActionScript 3.0 “dialect” being used in the specified document. The default value is "AS3". If you wish to allow prototype classes, as permitted in earlier ECMAScript specifications, set this value to "ES".
   */
  as3Dialect: string
  /**
   * An integer that specifies in which frame to export ActionScript 3.0 classes. By default, classes are exported in Frame 1.
   */
  as3ExportFrame: number
  /**
   * A Boolean value that specifies whether the ActionScript 3.0 compiler should compile with the Strict Mode option turned on (true) or off (false). Strict Mode causes warnings to be reported as errors, which means that compilation will not succeed if those errors exist. The default value is true.
   */
  as3StrictMode: boolean
  /**
   * A Boolean value that specifies whether the ActionScript 3.0 compiler should compile with the Warnings Mode option turned on (true) or off (false). Warnings Mode causes extra warnings to be reported that are useful for discovering incompatibilities when updating ActionScript 2.0 code to ActionScript 3.0. The default value is true.
   */
  as3WarningsMode: boolean
  /**
   * An integer that specifies which version of ActionScript is being used in the specified document. Acceptable values are 1, 2, and 3.
   * To determine the targeted player version for the specified document, use document.getPlayerVersion(); this method returns a string, so it can be used by Flash® Lite™ players.
   */
  asVersion: number
  /**
   * A Boolean value that is equivalent to the Auto Label check box in the Accessibility panel. You can use this property to tell Flash to automatically label objects on the Stage with the text associated with them.
   */
  autoLabel: boolean
  /**
   * The color of the background, in one of the following formats:
   * • A string in the format "#RRGGBB" or "#RRGGBBAA"
   * • A hexadecimal number in the format 0xRRGGBB
   * • An integer that represents the decimal equivalent of a hexadecimal number
   */
  backgroundColor: string | number
  /**
   * A string that specifies the name of the active publish profile for the specified document.
   */
  currentPublishProfile: string
  /**
   * An integer that specifies the index of the active timeline. You can set the active timeline by changing the value of this property; the effect is almost equivalent to calling document.editScene(). The only difference is that you don’t get an error message if the index of the timeline is not valid; the property is simply not set, which causes silent failure.
   */
  currentTimeline: number
  /**
   * A string that is equivalent to the Description field in the Accessibility panel. The description is read by the screen reader.
   */
  description: string
  /**
   * A string that specifies the top-level ActionScript 3.0 class associated with the document. If the document isn’t configured to use ActionScript 3.0, this property is ignored.
   */
  docClass: string
  /**
   * A string that contains a list of items in the document’s ActionScript 3.0 External library path, which specifies the location of SWC files used as runtime shared libraries. Items in the string are delimited by semi-colons. In the authoring tool, the items are specified by choosing File > Publish Settings and then choosing ActionScript 3.0 Script Settings on the Flash tab.
   */
  externalLibraryPath: string
  /**
   * A Boolean value that specifies whether the children of the specified object are accessible. This is equivalent to the inverse logic of the Make Child Objects Accessible setting in the Accessibility panel. That is, if forceSimple is true, it is the same as the Make Child Object Accessible option being unchecked. If forceSimple is false, it is the same as the Make Child Object Accessible option being checked.
   */
  forceSimple: boolean
  /**
   * A float value that specifies the number of frames displayed per second when the SWF file plays; the default is 12. Setting this property is the same as setting the default frame rate in the Document Properties dialog box (Modify > Document) in the FLA file.
   */
  frameRate: number
  /**
   * An integer that specifies the height of the document (Stage) in pixels.
   */
  height: number
  /**
   * A unique integer (assigned automatically) that identifies a document during a Flash session. Use this property in conjunction with fl.findDocumentDOM() to specify a particular document for an action.
   */
  readonly id: number
  /**
   * The library object for a document.
   */
  readonly library: Library
  /**
   * A string that contains a list of items in the document’s ActionScript 3.0 Library path, which specifies the location of SWC files or folders containing SWC files. Items in the string are delimited by semi-colons. In the authoring tool, the items are specified by choosing File > Publish Settings and then choosing ActionScript 3.0 Script Settings on the Flash tab.
   */
  libraryPath: string
  /**
   * A Boolean value that specifies whether Live Preview is enabled. If set to true, components appear on the Stage as they will appear in the published Flash content, including their approximate size. If set to false, components appear only as outlines. The default value is true.
   */
  livePreview: boolean
  /**
   * A string that represents the name of a document (FLA file).
   */
  readonly name: string
  /**
   * A string that represents the path of the document in a platform-specific format. If the document has never been saved, this property is undefined.
   */
  readonly path: string | undefined
  /**
   * A string that represents the path of the document, expressed as a file:/// URI. If the document has never been saved, this property is undefined.
   */
  readonly pathURI: string | undefined
  /**
   * An array of the publish profile names for the document.
   */
  readonly publishProfiles: string[]
  /**
   * An array of the selected objects in the document. If nothing is selected, returns an array of length zero. If no document is open, returns null.
   * To add objects to the array, you must first select them in one of the following ways:
   * •Manually select objects on the Stage.
   * •Use one of the selection methods, such as document.setSelectionRect(), document.setSelectionBounds(), document.mouseClick(), document.mouseDblClk(), or document.selectAll().
   * •Manually select a frame or frames.
   * •Use one of the methods of the Timeline object to select a frame or frames, such as timeline.getSelectedFrames(), timeline.setSelectedFrames(), or timeline.selectAllFrames().
   * •Specify all the elements in a particular frame (see Element object). See the first example below.
   * •Create an array of one or more elements and then assign that array to the document.selection array. See the third example below.
   */
  selection: any[] | null
  /**
   * A Boolean value that specifies whether the object is accessible. This is equivalent to the inverse logic of the Make Movie Accessible setting in the Accessibility panel. That is, if document.silent is true, it is the same as the Make Movie Accessible option being unchecked. If it is false, it is the same as the Make Movie Accessible option being checked.
   */
  silent: boolean
  /**
   * A string that contains a list of items in the document’s ActionScript 3.0 Source path, which specifies the location of ActionScript class files. Items in the string are delimited by semi-colons. In the authoring tool, the items are specified by choosing File > Publish Settings and then choosing ActionScript 3.0 Script Settings on the Flash tab.
   */
  sourcePath: string
  /**
   * An integer, returns the JPEG Quality setting from the current Publish Profile in the document.
   */
  swfJPEGQuality: number
  /**
   * An array of Timeline objects (see Timeline object).
   */
  readonly timelines: Timeline[]
  /**
   * A Matrix object. The viewMatrix is used to transform from object space to document space when the document is in edit mode. The mouse location, as a tool receives it, is relative to the object that is currently being edited. See Matrix object.
   * For example, if you create a symbol, double-click to edit it, and draw with the PolyStar tool, the point (0,0) will be at the registration point of the symbol. However, the drawingLayer object expects values in document space, so if you draw a line from (0,0) using the drawingLayer, it will start at the upper left corner of the Stage. The viewMatrix property provides a way to transform from the space of the object being edited to document space.
   */
  readonly viewMatrix: Matrix
  /**
   * An integer that specifies the width of the document (Stage) in pixels.
   */
  width: number
  /**
   * Specifies the zoom percent of the Stage at authoring time. A value of 1 equals 100 percent zoom, 8 equals 800 percent, .5 equals 50 percent, and so on.
   */
  zoomFactor: number
  /**
   * Stores specified data with a document. Data is written to the FLA file and is available to JavaScript when the file reopens.
   * @param name A string that specifies the name of the data to add.
   * @param type A string that defines the type of data to add. Acceptable values are "integer", "integerArray", "double", "doubleArray", "string", and "byteArray".
   * @param data The value to add. Valid types depend on the type parameter.
   */
  addDataToDocument(name: string, type: string, data: any): void
  /**
   * Stores specified data with the selected objects. Data is written to the FLA file and is available to JavaScript when the file reopens. Only symbols and bitmaps support persistent data.
   * @param name A string that specifies the name of the persistent data.
   * @param type Defines the type of data. Acceptable values are "integer", "integerArray", "double", "doubleArray", "string", and "byteArray".
   * @param data The value to add. Valid types depend on the type parameter.
   */
  addDataToSelection(name: string, type: string, data: any): void
  /**
   * Applies a filter to the selected objects and places the filter at the end of the Filters list.
   * @param filterName A string specifying the filter to be added to the Filters list and enabled for the selected objects. Acceptable values are "adjustColorFilter", "bevelFilter", "blurFilter", "dropShadowFilter", "glowFilter", "gradientBevelFilter", and "gradientGlowFilter".
   */
  addFilter(filterName: string): void
  /**
   * Adds an item from any open document or library to the specified Document object.
   * @returns A Boolean value: true if successful; false otherwise.
   * @param position A point that specifies the x and y coordinates of the location at which to add the item. It uses the center of a symbol or the upper left corner of a bitmap or video.
   * @param item An Item object that specifies the item to add and the library from which to add it.
   */
  addItem(position: Point, item: Item): boolean
  /**
   * Adds a new path between two points. The method uses the document’s current stroke attributes and adds the path on the current frame and current layer. This method works in the same way as clicking on the line tool and drawing a line.
   * @param startPoint A pair of floating-point numbers that specify the x and y coordinates where the line starts.
   * @param endpoint A pair of floating-point numbers that specify the x and y coordinates where the line ends.
   */
  addNewLine(startPoint: Point, endpoint: Point): void
  /**
   * Adds a new Oval object in the specified bounding rectangle. This method performs the same operation as the Oval tool. The method uses the document’s current default stroke and fill attributes and adds the oval on the current frame and layer. If both bSuppressFill and bSuppressStroke are set to true, the method has no effect.
   * @param boundingRectangle A rectangle that specifies the bounds of the oval to be added. For information on the format of boundingRectangle, see document.addNewRectangle().
   * @param bSuppressFill A Boolean value that, if set to true, causes the method to create the shape without a fill. The default value is false. This parameter is optional.
   * @param bSuppressStroke A Boolean value that, if set to true, causes the method to create the shape without a stroke. The default value is false. This parameter is optional.
   */
  addNewOval(
    boundingRectangle: SimpleShape,
    bSuppressFill?: boolean,
    bSuppressStroke?: boolean,
  ): void
  /**
   * Adds a new oval primitive fitting into the specified bounds. This method performs the same operation as the Oval Primitive tool. The oval primitive uses the document's current default stroke and fill attributes and is added on the current frame and layer. If both bSuppressFill and bSuppressStroke are set to true, the method has no effect.
   * @param boundingRectangle A rectangle that specifies the bounds within which the new oval primitive is added. For information on the format of boundingRectangle, see document.addNewRectangle().
   * @param bSuppressFill A Boolean value that, if set to true, causes the method to create the oval without a fill. The default value is false. This parameter is optional.
   * @param bSuppressStroke A Boolean value that, if set to true, causes the method to create the oval without a stroke. The default value is false. This parameter is optional.
   */
  addNewPrimitiveOval(
    boundingRectangle: SimpleShape,
    bSuppressFill?: boolean,
    bSuppressStroke?: boolean,
  ): void
  /**
   * Adds a new rectangle primitive fitting into the specified bounds. This method performs the same operation as the Rectangle Primitive tool. The rectangle primitive uses the document's current default stroke and fill attributes and is added on the current frame and layer. If both bSuppressFill and bSuppressStroke are set to true, the method has no effect.
   * @param boundingRectangle A rectangle that specifies the bounds within which the new rectangle primitive is added. For information on the format of boundingRectangle, see document.addNewRectangle().
   * @param roundness An integer between 0 and 999 that represents the number of points used to specify how much the corners should be rounded.
   * @param bSuppressFill A Boolean value that, if set to true, causes the method to create the rectangle without a fill. The default value is false. This parameter is optional.
   * @param bSuppressStroke A Boolean value that, if set to true, causes the method to create the rectangle without a stroke. The default value is false. This parameter is optional.
   */
  addNewPrimitiveRectangle(
    boundingRectangle: SimpleShape,
    roundness: number,
    bSuppressFill?: boolean,
    bSuppressStroke?: boolean,
  ): void
  /**
   * Adds a new publish profile and makes it the current one.
   * @returns An integer that is the index of the new profile in the profiles list. Returns -1 if a new profile cannot be created.
   * @param profileName A String that is the unique name of the new profile. If you do not specify a name, a default name is provided. This parameter is optional.
   */
  addNewPublishProfile(profileName?: string): number
  /**
   * Adds a new rectangle or rounded rectangle, fitting it into the specified bounds. This method performs the same operation as the Rectangle tool. The method uses the document’s current default stroke and fill attributes and adds the rectangle on the current frame and layer. If both bSuppressFill and bSuppressStroke are set to true, the method has no effect.
   * @param boundingRectangle A rectangle that specifies the bounds within which the new rectangle is added, in the format {left:value1,top:value2,right:value3,bottom:value4}. The left and top values specify the location of the upper left corner (e.g., left:0,top:0 represents the upper left corner of the Stage) and the right and bottom values specify the location of the lower-right corner. Therefore, the width of the rectangle is the difference in value between left and right, and the height of the rectangle is the difference in value between top and bottom.
   * In other words, the rectangle bounds do not all correspond to the values shown in the Property inspector. The left and top values correspond to the X and Y values in the Property inspector, respectively. However, the right and bottom values don’t correspond to the W and H values in the Property inspector.
   * For example, consider a rectangle with the following bounds: {left:10,top:10,right:50,bottom:100} This rectangle would display the following values in the Property inspector: X = 10, Y = 10, W = 40, H = 90.
   * @param roundness An integer value from 0 to 999 that specifies the roundness to use for the corners. The value is specified as number of points. The greater the value, the greater the roundness.
   * @param bSuppressFill A Boolean value that, if set to true, causes the method to create the shape without a fill. The default value is false. This parameter is optional.
   * @param bSuppressStroke A Boolean value that, if set to true, causes the method to create the rectangle without a stroke. The default value is false. This parameter is optional.
   */
  addNewRectangle(
    boundingRectangle: SimpleShape,
    roundness: number,
    bSuppressFill?: boolean,
    bSuppressStroke?: boolean,
  ): void
  /**
   * Adds a new scene (Timeline object) as the next scene after the currently selected scene and makes the new scene the currently selected scene. If the specified scene name already exists, the scene is not added and the method returns an error.
   * @returns A Boolean value: true if the scene is added successfully; false otherwise.
   * @param name Specifies the name of the scene. If you do not specify a name, a new scene name is generated.
   */
  addNewScene(name?: string): boolean
  /**
   * Inserts a new text field and optionally places text into the field. If you omit the text parameter, you can call document.setTextString() to populate the text field.
   * @param boundingRectangle Specifies the size and location of the text field. For information on the format of boundingRectangle, see document.addNewRectangle().
   * @param text An optional string that specifies the text to place in the field. If you omit this parameter, the selection in the Tools panel switches to the Text tool. Therefore, if you don’t want the selected tool to change, pass a value for text.
   */
  addNewText(boundingRectangle: SimpleShape, text?: string): void
  /**
   * Aligns the selection.
   * @param alignmode A string that specifies how to align the selection. Acceptable values are "left", "right", "top", "bottom", "vertical center", and "horizontal center".
   * @param bUseDocumentBounds A Boolean value that, if set to true, causes the method to align to the bounds of the document. Otherwise, the method uses the bounds of the selected objects. The default is false. This parameter is optional.
   */
  align(alignmode: string, bUseDocumentBounds?: boolean): void
  /**
   * Arranges the selection on the Stage. This method applies only to non-shape objects.
   * @param arrangeMode Specifies the direction in which to move the selection. Acceptable values are "back", "backward", "forward", and "front". It provides the same capabilities as these options provide on the Modify > Arrange menu.
   */
  allowScreens(arrangeMode: string): void
  /**
   * Arranges the selection on the Stage. This method applies only to non-shape objects.
   * @param arrangeMode Specifies the direction in which to move the selection. Acceptable values are "back", "backward", "forward", and "front". It provides the same capabilities as these options provide on the Modify > Arrange menu.
   */
  arrange(arrangeMode: string): void
  /**
   * Performs a break-apart operation on the current selection.
   */
  breakApart(): void
  /**
   * Indicates whether document.distributeToKeyframes() can be used.
   * @returns A Boolean value: true if document.distributeToKeyframes() is available for use; false otherwise.
   */
  canDistributeToKeyframes(): boolean
  /**
   * Indicates whether the Edit Symbols menu and functionality are enabled. This is not related to whether the selection can be edited. This method should not be used to test whether fl.getDocumentDOM().enterEditMode() is allowed.
   * @returns A Boolean value: true if the Edit Symbols menu and functionality are available for use; false otherwise.
   */
  canEditSymbol(): boolean
  /**
   * Determines whether you can use the document.revert() or fl.revertDocument() method successfully.
   * @returns A Boolean value: true if you can use the document.revert() or fl.revertDocument() methods successfully; false otherwise.
   */
  canRevert(): boolean
  /**
   * Determines whether you can use the document.testMovie() method successfully.
   * @returns A Boolean value: true if you can use the document.testMovie() method successfully: false otherwise.
   */
  canTestMovie(): boolean
  /**
   * Determines whether you can use the document.testScene() method successfully.
   * @returns A Boolean value: true if you can use the document.testScene() method successfully; false otherwise.
   */
  canTestScene(): boolean
  /**
   * Changes the index of the filter in the Filters list. Any filters above or below newIndex are shifted up or down accordingly. For example, using the filters shown below, if you issue the command fl.getDocumentDOM().changeFilterOrder(3, 0), the filters are rearranged as follows:
   * Before: blurFilter, dropShadowFilter, glowFilter, gradientBevelFilter
   * After: gradientBevelFilter, blurFilter, dropShadowFilter, glowFilter
   * If you then issue the command fl.getDocumentDOM().changeFilterOrder(0, 2), the filters are rearranged as follows:
   * Before: gradientBevelFilter, blurFilter, dropShadowFilter, glowFilter
   * After: blurFilter, dropShadowFilter, gradientBevelFilter, glowFilter
   * @param oldIndex An integer that represents the current zero-based index position of the filter you want to reposition in the Filters list.
   * @param newIndex An integer that represents the new index position of the filter in the list.
   */
  changeFilterOrder(oldIndex: number, newIndex: number): void
  /**
   * Copies the current selection from the document to the Clipboard. To copy a string to the Clipboard, use fl.clipCopyString().
   */
  clipCopy(): void
  /**
   * Cuts the current selection from the document and writes it to the Clipboard.
   */
  clipCut(): void
  /**
   * Pastes the contents of the Clipboard into the document.
   * @param bInPlace A Boolean value that, when set to true, causes the method to perform a paste-in-place operation. The default value is false, which causes the method to perform a paste operation to the center of the document. This parameter is optional.
   */
  clipPaste(bInPlace?: boolean): void
  /**
   * Closes the specified document.
   * @param bPromptToSaveChanges A Boolean value that, when set to true, causes the method to prompt the user with a dialog box if there are unsaved changes in the document. If bPromptToSaveChanges is set to false, the user is not prompted to save any changed documents. The default value is true. This parameter is optional.
   */
  close(bPromptToSaveChanges?: boolean): void
  /**
   * Converts lines to fills on the selected objects.
   */
  convertLinesToFills(): void
  /**
   * Converts selected objects in the current frame to a bitmap and inserts the bitmap into the library.
   * @returns Boolean
   */
  convertSelectionToBitmap(): boolean
  /**
   * Converts the selected Stage item(s) to a new symbol. For information on defining linkage and shared asset properties for a symbol, see Item object.
   * @returns An object for the newly created symbol, or null if it cannot create the symbol.
   * @param type A string that specifies the type of symbol to create. Acceptable values are "movie clip", "button", and "graphic".
   * @param name A string that specifies the name for the new symbol, which must be unique. You can submit an empty string to have this method create a unique symbol name for you.
   * @param registrationPoint Specifies the point that represents the 0,0 location for the symbol. Acceptable values are: "top left", "top center", "top right", "center left", "center", "center right", "bottom left", "bottom center", and "bottom right".
   */
  convertToSymbol(type: string, name: string, registrationPoint: string): SymbolItem | null
  /**
   * Uses the top selected drawing object to crop all selected drawing objects underneath it. If no objects are selected, calling this method results in an error and the script breaks at that point.
   */
  crop(): void
  /**
   * Invokes the Debug Movie command on the document.
   * @param abortIfErrorsExist Boolean; the default value is false. If set to true, the debug session will not start and the .swf window will not open if there are compiler errors. Compiler warnings will not abort the command.
   */
  debugMovie(abortIfErrorsExist?: boolean): void
  /**
   * Deletes the envelope (bounding box that contains one or more objects) from the selected objects. If no objects are selected, calling this method results in an error and the script breaks at that point.
   */
  deleteEnvelope(): void
  /**
   * Deletes the currently active profile, if there is more than one. There must be at least one profile left.
   * @returns An integer that is the index of the new current profile. If a new profile is not available, the method leaves the current profile unchanged and returns its index.
   */
  deletePublishProfile(): number
  /**
   * Deletes the current scene (Timeline object) and, if the deleted scene was not the last one, sets the next scene as the current Timeline object. If the deleted scene was the last one, it sets the first object as the current Timeline object. If only one Timeline object (scene) exists, it returns the value false.
   * @returns A Boolean value: true if the scene is successfully deleted; false otherwise.
   */
  deleteScene(): boolean
  /**
   * Deletes the current selection on the Stage. Displays an error message if there is no selection.
   */
  deleteSelection(): void
  /**
   * Disables all filters on the selected objects.
   */
  disableAllFilters(): void
  /**
   * Disables the specified filter in the Filters list.
   * @param filterIndex An integer representing the zero-based index of the filter in the Filters list.
   */
  disableFilter(filterIndex: number): void
  /**
   * Disables all filters except the one at the specified position in the Filters list.
   * @param enabledFilterIndex An integer representing the zero-based index of the filter that should remain enabled after other filters are disabled.
   */
  disableOtherFilters(enabledFilterIndex: number): void
  /**
   * Distributes the selection.
   * @param distributemode A string that specifies where to distribute the selected objects. Acceptable values are "left edge", "horizontal center", "right edge", "top edge", "vertical center", and "bottom edge".
   * @param bUseDocumentBounds A Boolean value that, when set to true, distributes the selected objects using the bounds of the document. Otherwise, the method uses the bounds of the selected objects. The default is false.
   */
  distribute(distributemode: string, bUseDocumentBounds?: boolean): void
  /**
   * Performs a distribute-to-keyframes operation on the current selection—equivalent to selecting Distribute to KeyFrames. A new keyframe is created for every object. New keyframes are created on the active layer immediately after the active frame.
   */
  distributeToKeyframes(): void
  /**
   * Performs a distribute-to-layers operation on the current selection—equivalent to selecting Distribute to Layers. This method displays an error if there is no selection.
   */
  distributeToLayers(): void
  /**
   * Checks the document for persistent data with the specified name.
   * @returns A Boolean value: true if the document has persistent data; false otherwise.
   * @param name A string that specifies the name of the data to check;
   */
  documentHasData(name: string): boolean
  /**
   * Duplicates the currently active profile and gives the duplicate version focus.
   * @returns An integer that is the index of the new profile in the profile list. Returns -1 if the profile cannot be duplicated.
   * @param profileName A string that specifies the unique name of the duplicated profile. If you do not specify a name, the method uses the default name. This parameter is optional.
   */
  duplicatePublishProfile(profileName?: string): number
  /**
   * Makes a copy of the currently selected scene, giving the new scene a unique name and making it the current scene.
   * @returns A Boolean value: true if the scene is duplicated successfully; false otherwise.
   */
  duplicateScene(): boolean
  /**
   * Duplicates the selection on the Stage.
   */
  duplicateSelection(): void
  /**
   * Makes the specified scene the currently selected scene for editing.
   * @param index A zero-based integer that specifies which scene to edit.
   */
  editScene(index: number): void
  /**
   * Enables all the filters on the Filters list for the selected objects.
   */
  enableAllFilters(): void
  /**
   * Enables the specified filter for the selected objects.
   * @param filterIndex An integer specifying the zero-based index of the filter in the Filters list to enable.
   */
  enableFilter(filterIndex: number): void
  /**
   * Switches the authoring tool into the editing mode specified by the parameter. If no parameter is specified, the method defaults to symbol-editing mode, which has the same result as right-clicking the symbol to invoke the context menu and selecting Edit.
   * @param editMode A string that specifies the editing mode. Acceptable values are "inPlace" or "newWindow". If no parameter is specified, the default is symbol-editing mode. This parameter is optional.
   */
  enterEditMode(editMode?: string): void
  /**
   * Exits from symbol-editing mode and returns focus to the next level up from the editing mode. For example, if you are editing a symbol inside another symbol, this method takes you up a level from the symbol you are editing, into the parent symbol.
   */
  exitEditMode(): void
  /**
   * Exports a selected instance of a movie clip, graphic, or button symbol on the Stage to a bitmap in Library.
   * @param frameNumber Integer indicating the frame to be exported.
   * @param bitmapName A string representing the name of the bitmap to be added to the Library.
   */
  exportInstanceToLibrary(frameNumber: number, bitmapName: string): void
  /**
   * Exports a selected instance of a movie clip, graphic, or button symbol on the Stage to a series of PNG files on disk. If no startFrameNum or endFrameNum is given, the output includes all frames in the Timeline.
   * @param outputURI String: The URI to export the PNG Sequence files to. This URI must reference a local file. Example: file:///c|/tests/mytest.png.
   * @param startFrameNum Optional. An integer indicating the first frame to be exported. The default is 1.
   * @param endFrameNum Optional. An Integer indicating the last frame to be exported. The default is 99999.
   * @param matrix Optional. A matrix to be appended to the exported PNG sequence.
   */
  exportInstanceToPNGSequence(
    outputURI: string,
    startFrameNum?: number,
    endFrameNum?: number,
    matrix?: Matrix,
  ): void
  /**
   * Exports the document as one or more PNG files. If fileURI is specified and the file already exists, it is overwritten without warning.
   * Note: If fileURI is empty and bCurrentFrame is true , the Export Movie dialog box does not display and Flash saves the exported PNG file in the same location as the .fla file.
   * Note: If bCurrentPNGSettings is false and bCurrentFrame is true, the Export PNG dialog box does not display and Flash uses the current PNG publish settings.
   * @returns A Boolean value of true if the file is successfully exported as a PNG file; false otherwise.
   * @param fileURI A string, expressed as a file:/// URI, that specifies the filename for the exported file. If fileURI is an empty string or is not specified, Flash displays the Export Movie dialog box.
   * @param bCurrentPNGSettings A Boolean value that specifies whether to use the current PNG publish settings (true) or to display the Export PNG dialog box (false). This parameter is optional. The default value is false.
   * @param bCurrentFrame A Boolean value that specifies whether to export only the current frame (true) or to export all frames, with each frame as a separate PNG file (false). This parameter is optional. The default value is false.
   */
  exportPNG(fileURI?: string, bCurrentPNGSettings?: boolean, bCurrentFrame?: boolean): boolean
  /**
   * Expprts the currently active profile to an XML file.
   * @param fileURI A string, expressed as a file:/// URI, that specifies the path of the XML file to which the profile is exported.
   */
  exportPublishProfile(fileURI: string): void
  /**
   * Returns a string that specifies, in XML format, the specified profile. If you don’t pass a value for profileName, the current profile is exported.
   * @returns An XML string.
   * @param profileName A string that specifies the name of the profile to export to an XML string. This parameter is optional.
   */
  exportPublishProfileString(profileName: string): string
  /**
   * Exports the document in the Flash SWF format.
   * @param fileURI A string, expressed as a file:/// URI, that specifies the name of the exported file. If fileURI is empty or not specified, Flash displays the Export Movie dialog box. This parameter is optional.
   * @param bCurrentSettings A Boolean value that, when set to true, causes Flash to use current SWF publish settings. Otherwise, Flash displays the Export Flash Player dialog box. The default is false. This parameter is optional.
   */
  exportSVG(fileURI: string, unknown: boolean, unknown2: boolean): boolean
  exportSWF(fileURI?: string, bCurrentSettings?: boolean): void
  /**
   * Exports a video from the document and optionally sends it to Adobe Media Encoder to convert the video.
   * @param fileURI A string, expressed as a file:/// URI, that specifies the fully qualified path to which the video is saved.
   * @param convertInAdobeMediaEncoder A boolen value that specifies whether or not to send the recorded video to Adobe Media Encoder. The default value is true, which sends the video to Adobe Media Encoder. This parameter is optional.
   * @param transparent A boolean value that specifies whether or not the background should be included in the video. The default value is false, which includes the movie background in the video. This parameter is optional.
   * @param stopAtFrame A boolean value that specifies whether the video should be recorded until it reaches a certain frame or a specific time. The default value is true, stop when a certain frame is reached. This parameter is optional.
   * @param stopAtFrameOrTime If stopAtFrame is true, this is an int specifying the number of frames to record. If stopAtFrame is false, this is the number of milliseconds to record. The default value is 0 which, if stopAtFrame is true, will record all the frames in the main timeline. This parameter is optional.
   */
  exportVideo(
    fileURI: string,
    convertInAdobeMediaEncoder?: boolean,
    transparent?: boolean,
    stopAtFrame?: boolean,
    stopAtFrameOrTime?: number,
  ): void
  /**
   * Identical to retrieving the value of the To Stage button in the Align panel. Gets the preference that can be used for document.align(), document.distribute(), document.match(), and document.space() methods on the document.
   * @returns A Boolean value: true if the preference is set to align the objects to the Stage; false otherwise.
   */
  getAlignToDocument(): boolean
  /**
   * Returns a string that specifies the blending mode for the selected objects.
   * @returns A string that specifies the blending mode for the selected objects. If more than one object is selected and they have different blending modes, the string reflects the blending mode of the object with the highest depth.
   * Note: The return value is unpredictable if the selection contains objects that don’t support blending modes, or that have a blending mode value of "normal".
   */
  getBlendMode(): string
  /**
   * Retrieves the fill object of the selected shape or, if specified, of the Tools panel and Property inspector.
   * @returns The Fill object specified by the objectToFill parameter, if successful; otherwise, it returns undefined.
   * @param objectToFill A string that specifies the location of the fill object. The following values are valid:
   * • "toolbar" returns the fill object of the Tools panel and Property inspector.
   * • "selection" returns the fill object of the selection.
   * If you omit this parameter, the default value is "selection". If there is no selection, the method returns undefined. This parameter is optional.
   */
  getCustomFill(objectToFill?: string): Fill | undefined
  /**
   * Returns the stroke object of the selected shape or, if specified, of the Tools panel and Property inspector.
   * @returns The Stroke object specified by the locationOfStroke parameter, if successful; otherwise, it returns undefined.
   * @param locationOfStroke A string that specifies the location of the stroke object. The following values are valid:
   * • "toolbar", if set, returns the stroke object of the Tools panel and Property inspector.
   * • "selection", if set, returns the stroke object of the selection.
   * If you omit this parameter, it defaults to "selection". If there is no selection, it returns undefined. This parameter is optional.
   */
  getCustomStroke(locationOfStroke?: string): Stroke | undefined
  /**
   * Retrieves the value of the specified data. The type returned depends on the type of data that was stored.
   * @returns The specified data.
   * @param name A string that specifies the name of the data to return.
   */
  getDataFromDocument(name: string): any
  /**
   * Gets the specified Element property for the current selection. For a list of acceptable values, see the Property summary table for the Element object.
   * @returns The value of the specified property. Returns null if the property is an indeterminate state, as when multiple elements are selected with different property values. Returns undefined if the property is not a valid property of the selected element.
   * @param propertyName A string that specifies the name of the Element property for which to retrieve the value.
   */
  getElementProperty(propertyName: string): any | null | undefined
  /**
   * Gets a specific TextAttrs property of the selected Text objects. Selected objects that are not text fields are ignored. For a list of property names and expected values, see the Property summary table for the TextAttrs object. See also document.setElementTextAttr().
   * @returns If one text field is selected, the property is returned if there is only one value used within the text. Returns undefined if there are several values used inside the text field. If several text fields are selected, and all the text alignment values are equal, the method returns this value. If several text fields are selected, but all the text alignment values are not equal, the method returns undefined. If the optional arguments are not passed, these rules apply to the range of text currently selected or the whole text field if the text is not currently being edited. If only startIndex is passed, the property of the character to the right of the index is returned, if all the selected Text objects match values. If startIndex and endIndex are passed, the value returned reflects the entire range of characters from startIndex up to, but not including, endIndex.
   * @param attrName A string that specifies the name of the TextAttrs property to be returned. For a list of property names and expected values, see the Property summary table for the TextAttrs object.
   * @param startIndex An integer that specifies the index of first character, with 0 (zero) specifying the first position. This parameter is optional.
   * @param endIndex An integer that specifies the index of last character. This parameter is optional.
   */
  getElementTextAttr(attrName: string, startIndex?: number, endIndex?: number): any | undefined
  /**
   * Returns an array that contains the list of filters applied to the currently selected objects. If multiple objects are selected and they don’t have identical filters, this method returns the list of filters applied to the first selected object.
   * @returns An array that contains a list of filters applied to the currently selected objects.
   */
  getFilters(): Filter[]
  /**
   * Returns a string containing the XML metadata associated with the document, or an empty string if there is no metadata.
   * @returns A string containing the XML metadata associated with the document or an empty string if there is no metadata.
   */
  getMetadata(): string
  /**
   * Returns the mobile XML settings for the document.
   * @returns A string that represents the XML settings for the document. If no value has been set, returns an empty string.
   */
  getMobileSettings(): string
  /**
   * Returns a string that represents the targeted player version for the specified document. For a list of values that this method can return, see document.setPlayerVersion().
   * @returns A string that represents the Flash Player version specified by using document.setPlayerVersion(). If no value has been set, returns the value specified in the Publish Settings dialog box.
   */
  getPlayerVersion(): string
  /**
   * Indicates whether publishing of the specified persistent data is enabled for the specified format in this document.
   * @returns Boolean; True if publishing of the specified persistent data is enabled for the specified format in this document. Otherwise False.
   * @param format A string that specifies the publishing format.
   * Note:  _EMBED_SWF_ is a special built-in publishing format for persistent data. If set, the persistent data will be embedded in the SWF file every time a document is published. The persistent data can then be accessed via ActionScript with the .metaData property. This requires SWF version 19 (Flash Player 11.6) and above and is only for symbol instances onstage. Other custom publishing formats may be specified for custom JSFL scripts if this method is called with the same format.
   */
  getPublishDocumentData(format: string): boolean
  /**
   * Gets the bounding rectangle of the current selection. If a selection is non-rectangular, the smallest rectangle encompassing the entire selection is returned. The rectangle is based on the document space or, when in edit mode, the registration point (also origin point or zero point) of the symbol being edited.
   * @returns The bounding rectangle of the current selection, or 0 if nothing is selected. For information on the format of the return value, see document.addNewRectangle().
   */
  getSelectionRect(): SimpleShape
  /**
   * Gets the path to the SWF file that is set in the current Publish profile.
   * @returns The full path to the SWF file that is set in the current Publish profile.
   */
  getSWFPathFromProfile(): string
  /**
   * Indicates whether if the “Enable detailed telemetry” checkbox is selected in the Publish Settings dialog.
   * @returns Returns boolean. Returns true if the “Enable detailed telemetry” checkbox is selected; otherwise false.
   */
  getTelemetryForSwf(): boolean
  /**
   * Gets the currently selected text. If the optional parameters are not passed, the current text selection is used. If text is not currently opened for editing, the whole text string is returned. If only startIndex is passed, the string starting at that index and ending at the end of the field is returned. If startIndex and endIndex are passed, the string starting from startIndex up to, but not including, endIndex is returned.
   * If there are several text fields selected, the concatenation of all the strings is returned.
   * @returns A string that contains the selected text.
   * @param startIndex An integer that is an index of first character to get. This parameter is optional.
   * @param endIndex An integer that is an index of the character after the last character to get. In other words, this index will not be included in the return string. This parameter is optional.
   */
  getTextString(startIndex?: number, endIndex?: number): string
  /**
   * Retrieves the current Timeline object in the document. The current timeline can be the current scene, the current symbol being edited, or the current screen.
   * @returns The current Timeline object.
   */
  getTimeline(): Timeline
  /**
   * Gets the location of the transformation point of the current selection. You can use the transformation point for commutations such as rotate and skew. Note: Transformation points are relative to different locations, depending on the type of item selected. For more information, see document.setTransformationPoint().
   * @returns A point (for example, {x:10, y:20}, where x and y are floating-point numbers) that specifies the position of the transformation point (also origin point or zero point) within the selected element’s coordinate system.
   */
  getTransformationPoint(): Point
  /**
   * Converts the current selection to a group.
   */
  group(): void
  /**
   * Imports a file into a document. This method performs the same operation as the Import To Library or Import To Stage menu command. To import a publish profile, use document.importPublishProfile().
   * @param fileURI A string, expressed as a file:/// URI, that specifies the path of the file to import.
   * @param importToLibrary A Boolean value that specifies whether to import the file only into the document’s library (true) or to also place a copy on the Stage (false). The default value is false.
   * @param showDialog A Boolean value that specifies whether to display the Import dialog box. Specifying true displays the import dialog. If you specify false, the function imports the file using specifications set in the Preferences dialog. The default is true.
   * @param showImporterUI A Boolean value that specifies whether to display errors visually (for example, using the Library Conflict dialog box). The default is false.
   */
  importFile(
    fileURI: string,
    importToLibrary?: boolean,
    showDialog?: boolean,
    showImporterUI?: boolean,
  ): void
  /**
   * Imports a profile from a file.
   * @returns An integer that is the index of the imported profile in the profiles list. Returns -1 if the profile cannot be imported.
   * @param fileURI A string, expressed as a file:/// URI, that specifies the path of the XML file defining the profile to import.
   */
  importPublishProfile(fileURI: string): number
  /**
   * Imports an XML string that represents a publish profile and sets it as the current profile. To generate an XML string to import, use document.exportPublishProfileString() before using this method.
   * @returns A Boolean value of true if the string was successfully imported; false otherwise.
   * @param xmlString A string that contains the XML data to be imported as the current profile.
   */
  importPublishProfileString(xmlString: string): boolean
  /**
   * Creates an intersection drawing object from all selected drawing objects. If no objects are selected, calling this method results in an error and the script breaks at that point.
   */
  intersect(): void
  /**
   * Makes the size of the selected objects the same.
   * @param bWidth A Boolean value that, when set to true, causes the method to make the widths of the selected items the same.
   * @param bHeight A Boolean value that, when set to true, causes the method to make the heights of the selected items the same.
   * @param bUseDocumentBounds A Boolean value that, when set to true, causes the method to match the size of the objects to the bounds of the document. Otherwise, the method uses the bounds of the largest object. The default is false. This parameter is optional.
   */
  match(bWidth: boolean, bHeight: boolean, bUseDocumentBounds?: boolean): void
  /**
   * Performs a mouse click from the Selection tool.
   * @param position A pair of floating-point values that specify the x and y coordinates of the click in pixels.
   * @param bToggleSel A Boolean value that specifies the state of the Shift key: true for pressed; false for not pressed.
   * @param bShiftSel A Boolean value that specifies the state of the application preference Shift select: true for on; false for off.
   */
  mouseClick(position: Point, bToggleSel: boolean, bShiftSel: boolean): void
  /**
   * Performs a double mouse click from the Selection tool.
   * @param position A pair of floating-point values that specify the x and y coordinates of the click in pixels.
   * @param bAltDown A Boolean value that records whether the Alt key is down at the time of the event: true for pressed; false for not pressed.
   * @param bShiftDown A Boolean value that records whether the Shift key was down when the event occurred: true for pressed; false for not pressed.
   * @param bShiftSelect A Boolean value that indicates the state of the application preference Shift select: true for on; false for off.
   */
  mouseDblClk(position: Point, bAltDown: boolean, bShiftDown: boolean, bShiftSelect: boolean): void
  /**
   * If the selection contains at least one path with at least one Bézier point selected, moves all selected Bézier points on all selected paths by the specified amount.
   * @param delta A pair of floating-point values that specify the x and y coordinates in pixels by which the selected Bézier points are moved. For example, passing ({x:1,y:2}) specifies a location that is to the right by one pixel and down by two pixels from the current location.
   */
  moveSelectedBezierPointsBy(delta: Point): void
  /**
   * Moves selected objects by a specified distance.
   * @param distanceToMove A pair of floating-point values that specify the x and y coordinate values by which the method moves the selection. For example, passing ({x:1,y:2}) specifies a location one pixel to the right and two pixels down from the current location.
   */
  moveSelectionBy(distanceToMove: Point): void
  /**
   * Optimizes smoothing for the current selection, allowing multiple passes, if specified, for optimal smoothing. This method is equivalent to selecting Modify > Shape > Optimize.
   * @param smoothing An integer in the range from 0 to 100, with 0 specifying no smoothing and 100 specifying maximum smoothing.
   * @param bUseMultiplePasses A Boolean value that, when set to true, indicates that the method should use multiple passes, which is slower but produces a better result. This parameter has the same effect as clicking the Use Multiple Passes button in the Optimize Curves dialog box.
   */
  optimizeCurves(smoothing: number, bUseMultiplePasses: boolean): void
  /**
   * Publishes the document according to the active publish settings (File > Publish Settings). This method is equivalent to selecting File > Publish.
   */
  publish(): void
  /**
   * Uses the top selected drawing object to punch through all selected drawing objects underneath it. If no objects are selected, calling this method results in an error and the script breaks at that point.
   */
  punch(): void
  /**
   * Removes all filters from the selected objects.
   */
  removeAllFilters(): void
  /**
   * Removes persistent data with the specified name that has been attached to the document.
   * @param name A string that specifies the name of the data to remove.
   */
  removeDataFromDocument(name: string): void
  /**
   * Removes persistent data with the specified name that has been attached to the selection.
   * @param name A string that specifies the name of the persistent data to remove.
   */
  removeDataFromSelection(name: string): void
  /**
   * Removes the specified filter from the Filters list of the selected objects.
   * @param filterIndex An integer specifying the zero-based index of the filter to remove from the selected objects.
   */
  removeFilter(filterIndex: number): void
  /**
   * Renames the current profile.
   * @returns A Boolean value: true if the name is changed successfully; false otherwise.
   * @param profileNewName An optional parameter that specifies the new name for the profile. The new name must be unique. If the name is not specified, a default name is provided.
   */
  renamePublishProfile(profileNewName?: string): boolean
  /**
   * Renames the currently selected scene in the Scenes panel. The new name for the selected scene must be unique.
   * @returns A Boolean value: true if the name is changed successfully; false otherwise. If the new name is not unique, for example, the method returns false.
   * @param name A string that specifies the new name of the scene.
   */
  renameScene(name: string): boolean
  /**
   * Moves the specified scene before another specified scene.
   * @param sceneToMove An integer that specifies which scene to move, with 0 (zero) being the first scene.
   * @param sceneToPutItBefore An integer that specifies the scene before which you want to move the scene specified by sceneToMove. Specify 0 (zero) for the first scene. For example, if you specify 1 for sceneToMove and 0 for sceneToPutItBefore, the second scene is placed before the first scene. Specify -1 to move the scene to the end.
   */
  reorderScene(sceneToMove: number, sceneToPutItBefore: number): void
  /**
   * Sets all values in the Property inspector to default Oval object settings. If any Oval objects are selected, their properties are reset to default values as well.
   */
  resetOvalObject(): void
  /**
   * Sets all values in the Property inspector to default Rectangle object settings. If any Rectangle objects are selected, their properties are reset to default values as well.
   */
  resetRectangleObject(): void
  /**
   * Resets the transformation matrix. This method is equivalent to selecting Modify > Transform > Remove Transform.
   */
  resetTransformation(): void
  /**
   * Reverts the specified document to its previously saved version. This method is equivalent to selecting File > Revert.
   */
  revert(): void
  /**
   * Applies a 3D rotation to the selection. This method is available only for movie clips.
   * @param xyzCoordinate An XYZ coordinate point that specifies the axes for 3D rotation.
   * @param bGlobalTransform A Boolean value that specifies whether the transformation mode should be global (true) or local (false).
   */
  rotate3DSelection(xyzCoordinate: Point3D, bGlobalTransform: boolean): void
  /**
   * Rotates the selection by a specified number of degrees. The effect is the same as using the Free Transform tool to rotate the object.
   * @param angle A floating-point value that specifies the angle of the rotation.
   * @param rotationPoint A string that specifies which side of the bounding box to rotate. Acceptable values are "top right", "top left", "bottom right", "bottom left", "top center", "right center", "bottom center", and "left center". If unspecified, the method uses the transformation point. This parameter is optional.
   */
  rotateSelection(angle: number, rotationPoint?: string): void
  /**
   * Saves the document in its default location. This method is equivalent to selecting File > Save.
   * To specify a name for the file (instead of saving it with the same name), use fl.saveDocument().
   * Note: If the file is new and has not been modified or saved, or if the file has not been modified since the last time it was saved, this method has no effect and false is returned. To allow an unsaved or unmodified file to be saved, use fl.saveDocumentAs().
   * @returns A Boolean value: true if the save operation completes successfully; false otherwise.
   * @param bOkToSaveAs An optional parameter that, if true or omitted, and the file was never saved, opens the Save As dialog box. If false and the file was never saved, the file is not saved.
   */
  save(bOkToSaveAs?: boolean): boolean
  /**
   * Saves a new FLA file based on the existing document object, with an option to save only the current selection on Stage.
   * @returns Boolean; true is saved, false otherwise.
   * @param URI String: The URI to export the new FLA file to. This URI must reference a local file. Example: file:///c|/tests/myTest.fla.
   * @param selectionOnly Optional. A boolean indicating whether only the current Stage selection should be saved to the new FLA file.
   */
  saveAsCopy(URI: string, selectionOnly?: boolean): boolean
  /**
   * Scales the selection by a specified amount. This method is equivalent to using the Free Transform tool to scale the object.
   * @param xScale A floating-point value that specifies the amount of x by which to scale.
   * @param yScale A floating-point value that specifies the amount of y by which to scale.
   * @param whichCorner A string value that specifies the edge about which the transformation occurs. If omitted, scaling occurs about the transformation point. Acceptable values are: "bottom left", "bottom right", "top right", "top left", "top center", "right center", "bottom center", and "left center". This parameter is optional.
   */
  scaleSelection(xScale: number, yScale: number, whichCorner?: string): void
  /**
   * Selects all items on the Stage. This method is equivalent to pressing Control+A (Windows) or Command+A (Macintosh) or selecting Edit > Select All.
   */
  selectAll(): void
  /**
   * Deselects any selected items.
   */
  selectNone(): void
  /**
   * Sets the preferences for document.align(), document.distribute(), document.match(), and document.space() to act on the document. This method is equivalent to enabling the To Stage button in the Align panel.
   * @param bToStage A Boolean value that, if set to true, aligns objects to the Stage. If set to false, it does not.
   */
  setAlignToDocument(bToStage: boolean): void
  /**
   * Sets the blending mode for the selected objects.
   * @param mode A string that represents the desired blending mode for the selected objects. Acceptable values are "normal", "layer", "multiply", "screen", "overlay", "hardlight", "lighten", "darken", "difference", "add", "subtract", "invert", "alpha", and "erase".
   */
  setBlendMode(mode: string): void
  /**
   * Sets the fill settings for the Tools panel, Property inspector, and any selected shapes. This allows a script to set the fill settings before drawing the object, rather than drawing the object, selecting it, and changing the fill settings. It also lets a script change the Tools panel and Property inspector fill settings.
   * @param fill A Fill object that specifies the fill settings to be used. See Fill object.
   */
  setCustomFill(fill: Fill): void
  /**
   * Sets the stroke settings for the Tools panel, Property inspector, and any selected shapes. This allows a script to set the stroke settings before drawing the object, rather than drawing the object, selecting it, and changing the stroke settings. It also lets a script change the Tools panel and Property inspector stroke settings.
   * @param stroke A Stroke object.
   */
  setCustomStroke(stroke: Stroke): void
  /**
   * Sets the specified Element property on selected objects in the document. This method does nothing if there is no selection.
   * @param property A string that specifies the name of the Element property to set. For a complete list of properties and values, see the Property summary table for the Element object.
   * You can’t use this method to set values for read-only properties, such as element.elementType, element.top, or element.left.
   * @param value An integer that specifies the value to set in the specified Element property.
   */
  setElementProperty(property: string, value: number): void
  /**
   * Sets the specified textAttrs property of the selected text items to the specified value. For a list of property names and allowable values, see the Property summary table for the TextAttrs object. If the optional parameters are not passed, the method sets the style of the currently selected text range, or the whole text field if no text is selected. If only startIndex is passed, the method sets that character’s attributes. If startIndex and endIndex are passed, the method sets the attributes on the characters starting from startIndex up to, but not including, endIndex. If paragraph styles are specified, all the paragraphs that fall within the range are affected.
   * @returns A Boolean value: true if at least one text attribute property is changed; false otherwise.
   * @param attrName A string that specifies the name of the TextAttrs property to change.
   * @param attrValue The value to which to set the TextAttrs property. For a list of property names and expected values, see the Property summary table for the TextAttrs object.
   * @param startIndex An integer value that specifies the index of the first character that is affected. This parameter is optional.
   * @param endIndex An integer value that specifies the index of the last character that is affected. This parameter is optional.
   */
  setElementTextAttr(
    attrName: string,
    attrValue: any,
    startIndex?: number,
    endIndex?: number,
  ): boolean
  /**
   * Changes the selection and the tools panel to the specified fill color. For additional information on changing the fill color in the Tools panel and Property inspector, see document.setCustomFill().
   * @param color The color of the fill, in one of the following formats:
   * •A string in the format "#RRGGBB" or "#RRGGBBAA"
   * •A hexadecimal number in the format 0xRRGGBB
   * •An integer that represents the decimal equivalent of a hexadecimal number
   * If set to null, no fill color is set, which is the same as setting the Fill color swatch in the user interface to no fill.
   */
  setFillColor(color: string | number): void
  /**
   * Sets a specified filter property for the currently selected objects (assuming that the object supports the specified filter).
   * @param property A string specifying the property to be set. Acceptable values are "blurX", "blurY", "quality", angle", "distance", "strength", "knockout", "inner", "bevelType", "color", "shadowColor", and "highlightColor".
   * @param filterIndex An integer specifying the zero-based index of the filter in the Filters list.
   * @param value A number or string specifying the value to be set for the specified filter property. Acceptable values depend on the property and the filter being set.
   */
  setFilterProperty(property: string, filterIndex: number, value: number | string): void
  /**
   * Applies filters to the selected objects. Use this method after calling document.getFilters() and making any desired changes to the filters.
   * @param filterArray The array of filters currently specified.
   */
  setFilters(filterArray: Filter[]): void
  /**
   * Sets the opacity of the instance.
   * @param opacity An integer between 0 (transparent) and 100 (completely saturated) that adjusts the transparency of the instance.
   */
  setInstanceAlpha(opacity: number): void
  /**
   * Sets the brightness for the instance.
   * @param brightness An integer that specifies brightness as a value from -100 (black) to 100 (white).
   */
  setInstanceBrightness(brightness: number): void
  /**
   * Sets the tint for the instance.
   * @param color The color of the tint, in one of the following formats:
   * •A string in the format "#RRGGBB" or "#RRGGBBAA"
   * •A hexadecimal number in the format 0xRRGGBB
   * •An integer that represents the decimal equivalent of a hexadecimal number
   * @param strength An integer between 0 and 100 that specifies the opacity of the tint.
   */
  setInstanceTint(color: string | number, strength: number): void
  /**
   * Sets the XML metadata for the specified document, overwriting any existing metadata. The XML passed as strMetadata is validated and may be rewritten before being stored. If it cannot be validated as legal XML or violates specific rules, then the XML metadata is not set and false is returned. (If false is returned, there is no way to get more detailed error information.)
   * Note: Even if true is returned, the XML that is set may not be exactly the same string that you passed in. To get the exact value to which the XML was set, use document.getMetadata().
   * The format of the metadata is RDF that is compliant with the XMP specification. For more information about RDF and XMP, see the following sources:
   * •The RDF Primer at www.w3.org/TR/rdf-primer/
   * •The RDF specification at www.w3.org/TR/1999/REC-rdf-syntax-19990222/
   * •The XMP home page at www.adobe.com/products/xmp/
   * @returns A Boolean value: true if successful; false otherwise.
   * @param strMetadata A string containing the XML metadata to be associated with the document. For more information, see the following description.
   */
  setMetadata(strMetadata: string): boolean
  /**
   * Sets the value of an XML settings string in a mobile FLA file. (Most mobile FLA files have an XML string that describes the settings within the document.)
   * @returns A value of true if the settings were successfully set; false otherwise.
   * @param xmlString A string that describes the XML settings in a mobile FLA file.
   */
  setMobileSettings(xmlString: string): boolean
  /**
   * Specifies a value for a specified property of primitive Oval objects.
   * @param propertyName A string that specifies the property to be set. For acceptable values, see the Property summary table for the Oval object.
   * @param value The value to be assigned to the property. Acceptable values vary depending on the property you specify in propertyName.
   */
  setOvalObjectProperty(propertyName: string, value: any): void
  /**
   * Sets the version of the Flash Player targeted by the specified document. This is the same value as that set in the Publish Settings dialog box.
   * @returns A value of true if the player version was successfully set; false otherwise.
   * @param version A string that represents the version of Flash Player targeted by the specified document. Acceptable values are "FlashLite", "FlashLite11", "FlashLite20" , "FlashLite30", "1", "2", "3", "4", "5", "6", "7", "8", "9", "FlashPlayer10", "FlashPlayer10.3", "FlashPlayer11.1", "FlashPlayer11.2", "FlashPlayer11.3","FlashPlayer11.4", "FlashPlayer11.5", "FlashPlayer11.6", "FlashPlayer11.7", "AdobeAIR1_1", "AdobeAIR1_1", "AdobeAIR2_5", "AdobeAIR3_6", "android3_6", and "PF13_6".
   */
  setPlayerVersion(version: string): boolean
  /**
   * Enables or disables publishing of persistent data for an entire document.
   * @param format A string that specifies the publishing format.
   * Note: _EMBED_SWF_ is a special built-in publishing format for persistent data. If set, the persistent data will be embedded in the SWF file every time a document is published. The persistent data can then be accessed via ActionScript with the .metaData property. This requires SWF version 19 (Flash Player 11.6) and above and is only for symbol instances onstage. Other custom publishing formats may be specified for custom JSFL scripts if this method is called with the same format.
   * @param publish A boolean that indicates whether to enable or disable publishing of persistent data for the specified format.
   */
  setPublishDocumentData(format: string, publish: boolean): void
  /**
   * Specifies a value for a specified property of primitive Rectangle objects.
   * @param propertyName A string that specifies the property to be set. For acceptable values, see the Property summary table for the Rectangle object.
   * @param value The value to be assigned to the property. Acceptable values vary depending on the property you specify in propertyName.
   */
  setRectangleObjectProperty(propertyName: string, value: any): void
  /**
   * Moves and resizes the selection in a single operation.
   * If you pass a value for bContactSensitiveSelection, it is valid only for this method and doesn't affect the Contact Sensitive selection mode for the document (see fl.contactSensitiveSelection).
   * @param boundingRectangle A rectangle that specifies the new location and size of the selection. For information on the format of boundingRectangle, see document.addNewRectangle().
   * @param bContactSensitiveSelection A Boolean value that specifies whether the Contact Sensitive selection mode is enabled (true) or disabled (false) during object selection. The default value is false.
   */
  setSelectionBounds(boundingRectangle: SimpleShape, bContactSensitiveSelection?: boolean): void
  /**
   * Draws a rectangular selection marquee relative to the Stage, using the specified coordinates. This is unlike document.getSelectionRect(), in which the rectangle is relative to the object being edited.
   * This method is equivalent to dragging a rectangle with the Selection tool. An instance must be fully enclosed by the rectangle to be selected.
   * If you pass a value for bContactSensitiveSelection, it is valid only for this method and doesn't affect the Contact Sensitive selection mode for the document (see fl.contactSensitiveSelection
   * Note: Repeating setSelectionRect() using the History panel or menu item repeats the step previous to the setSelectionRect() operation.
   * @param rect A rectangle object to set as selected. For information on the format of rect, see document.addNewRectangle().
   * @param bReplaceCurrentSelection A Boolean value that specifies whether the method replaces the current selection (true) or adds to the current selection (false). The default value is true.
   * @param bContactSensitiveSelection A Boolean value that specifies whether the Contact Sensitive selection mode is enabled (true) or disabled (false) during object selection. The default value is false.
   */
  setSelectionRect(
    rect: SimpleShape,
    bReplaceCurrentSelection?: boolean,
    bContactSensitiveSelection?: boolean,
  ): void
  /**
   * Specifies the vanishing point for viewing 3D objects.
   * @param point point that specifies the x and y coordinates of the location at which to set the vanishing point for viewing 3D objects.
   */
  setStageVanishingPoint(point: Point): void
  /**
   * Specifies the perspective angle for viewing 3D objects.
   * @param angle A floating point value between 0.0 and 179.0.
   */
  setStageViewAngle(angle: number): void
  /**
   * Sets the color, width, and style of the selected stroke. For information on changing the stroke in the Tools panel and Property inspector, see document.setCustomStroke().
   * @param color The color of the stroke, in one of the following formats:
   * •A string in the format "#RRGGBB" or "#RRGGBBAA"
   * •A hexadecimal number in the format 0xRRGGBB
   * •An integer that represents the decimal equivalent of a hexadecimal number
   * @param size A floating-point value that specifies the new stroke size for the selection.
   * @param strokeType A string that specifies the new type of stroke for the selection. Acceptable values are "hairline", "solid", "dashed", "dotted", "ragged", "stipple", and "hatched".
   */
  setStroke(color: string | number, size: number, strokeType: string): void
  /**
   * Changes the stroke color of the selection to the specified color. For information on changing the stroke in the Tools panel and Property inspector, see document.setCustomStroke().
   * @param color The color of the stroke, in one of the following formats:
   * •A string in the format "#RRGGBB" or "#RRGGBBAA"
   * •A hexadecimal number in the format 0xRRGGBB
   * •An integer that represents the decimal equivalent of a hexadecimal number
   */
  setStrokeColor(color: string | number): void
  /**
   * Changes the stroke size of the selection to the specified size. For information on changing the stroke in the Tools panel and Property inspector, see document.setCustomStroke().
   * @param size A floating-point value from 0.25 to 250that specifies the stroke size. The method ignores precision greater than two decimal places.
   */
  setStrokeSize(size: number): void
  /**
   * Changes the stroke style of the selection to the specified style. For information on changing the stroke in the Tools panel and Property inspector, see document.setCustomStroke().
   * @param strokeType A string that specifies the stroke style for the current selection. Acceptable values are "hairline", "solid","dashed", "dotted", "ragged", "stipple", and "hatched".
   */
  setStrokeStyle(strokeType: string): void
  /**
   * Changes the bounding rectangle for the selected text item to the specified size. This method causes the text to reflow inside the new rectangle; the text item is not scaled or transformed. The values passed in boundingRectangle are used as follows:
   * •If the text is horizontal and static, the method takes into account only the width value passed in boundingRectangle; the height is automatically computed to fit all the text.
   * •If the text is vertical (and therefore static), the method takes into account only the height value passed in boundingRectangle; the width is automatically computed to fit all the text.
   * •If the text is dynamic or input, the method takes into account both the width and height values passed in boundingRectangle, and the resulting rectangle might be larger than needed to fit all the text. However, if the parameters specify a rectangle size that is too small to fit all the text, the method takes into account only the width value passed in boundingRectangle (the height is automatically computed to fit all the text).
   * @returns A Boolean value: true if the size of at least one text field is changed; false otherwise.
   * @param boundingRectangle A rectangle that specifies the new size within which the text item should flow. For information on the format of boundingRectangle, see document.addNewRectangle().
   */
  setTextRectangle(boundingRectangle: SimpleShape): boolean
  /**
   * Sets the text selection of the currently selected text field to the values specified by the startIndex and endIndex values. Text editing is activated, if it isn’t already.
   * @returns A Boolean value: true if the method can successfully set the text selection; false otherwise.
   * @param startIndex An integer that specifies the position of the first character to select. The first character position is 0 (zero).
   * @param endIndex An integer that specifies the end position of the selection up to, but not including, endIndex. The first character position is 0 (zero).
   */
  setTextSelection(startIndex: number, endIndex: number): boolean
  /**
   * Inserts a string of text. If the optional parameters are not passed, the existing text selection is replaced; if the Text object isn’t currently being edited, the whole text string is replaced. If only startIndex is passed, the string passed is inserted at this position. If startIndex and endIndex are passed, the string passed replaces the segment of text starting from startIndex up to, but not including, endIndex.
   * @returns A Boolean value: true if the text of at least one text string is set; false otherwise.
   * @param text A string of the characters to insert in the text field.
   * @param startIndex An integer that specifies the first character to replace. The first character position is 0 (zero). This parameter is optional.
   * @param endIndex An integer that specifies the last character to replace. This parameter is optional.
   */
  setTextString(text: string, startIndex?: number, endIndex?: number): boolean
  /**
   * Sets the position of the current selection’s transformation point.
   * @param transformationPoint A point (for example, {x:10, y:20}, where x and y are floating-point numbers) that specifies values for the transformation point of each of the following elements:
   * •Shapes: transformationPoint is set relative to the document (0,0 is the upper left corner of the Stage).
   * •Symbols: transformationPoint is set relative to the symbol’s registration point (0,0 is located at the registration point).
   * •Text: transformationPoint is set relative to the text field (0,0 is the upper left corner of the text field).
   * •Bitmaps/videos: transformationPoint is set relative to the bitmap/video (0,0 is the upper left corner of the bitmap or video).
   * •Drawing objects, primitive ovals and rectangles, and groups: transformationPoint is set relative to the document (0,0 is the upper left corner of the Stage). To set transformationPoint relative to the center point of the object, primitive, or group, use element.setTransformationPoint().
   */
  setTransformationPoint(transformationPoint: Point): void
  /**
   * Skews the selection by a specified amount. The effect is the same as using the Free Transform tool to skew the object.
   * @param xSkew A floating-point number that specifies the amount of x by which to skew, measured in degrees.
   * @param ySkew A floating-point number that specifies the amount of y by which to skew, measured in degrees.
   * @param whichEdge A string that specifies the edge where the transformation occurs; if omitted, skew occurs at the transformation point. Acceptable values are "top center", "right center", "bottom center", and "left center". This parameter is optional.
   */
  skewSelection(xSkew: number, ySkew: number, whichEdge?: string): void
  /**
   * Smooths the curve of each selected fill outline or curved line. This method performs the same action as the Smooth button in the Tools panel.
   */
  smoothSelection(): void
  /**
   * Spaces the objects in the selection evenly.
   * @param direction A string that specifies the direction in which to space the objects in the selection. Acceptable values are "horizontal" or "vertical".
   * @param bUseDocumentBounds A Boolean value that, when set to true, spaces the objects to the document bounds. Otherwise, the method uses the bounds of the selected objects. The default is false. This parameter is optional.
   */
  space(direction: string, bUseDocumentBounds?: boolean): void
  /**
   * Straightens the currently selected strokes. This method is equivalent to using the Straighten button in the Tools panel.
   */
  straightenSelection(): void
  /**
   * Swaps the current selection with the specified one. The selection must contain a graphic, button, movie clip, video, or bitmap. This method displays an error message if no object is selected or the given object could not be found.
   * @param name A string that specifies the name of the library item to use.
   */
  swapElement(name: string): void
  /**
   * Swaps the Stroke and Fill colors.
   */
  swapStrokeAndFill(): void
  /**
   * Executes a Test Movie operation on the document.
   * @param abortIfErrorsExist Boolean; the default value is false. If set to true, the test movie session will not start and the .swf window will not open if there are compiler errors. Compiler warnings will not abort the command. This parameter was added in Flash Professional CS5.
   */
  testMovie(abortIfErrorsExist: boolean): void
  /**
   * Executes a Test Scene operation on the current scene of the document.
   */
  testScene(): void
  /**
   * Performs a trace bitmap on the current selection. This method is equivalent to selecting Modify > Bitmap > Trace Bitmap.
   * @param threshold An integer that controls the number of colors in your traced bitmap. Acceptable values are integers between 0 and 500.
   * @param minimumArea An integer that specifies the radius measured in pixels. Acceptable values are integers between 1 and 1000.
   * @param curveFit A string that specifies how smoothly outlines are drawn. Acceptable values are "pixels", "very tight", "tight", "normal", "smooth", and "very smooth".
   * @param cornerThreshold A string that is similar to curveFit, but it pertains to the corners of the bitmap image. Acceptable values are "many corners", "normal", and "few corners".
   */
  traceBitmap(
    threshold: number,
    minimumArea: number,
    curveFit: string,
    cornerThreshold: string,
  ): void
  /**
   * Performs a general transformation on the current selection by applying the matrix specified in the arguments. For more information, see the element.matrix property.
   * @param a A floating-point number that specifies the (0,0) element of the transformation matrix.
   * @param b A floating-point number that specifies the (0,1) element of the transformation matrix.
   * @param c A floating-point number that specifies the (1,0) element of the transformation matrix.
   * @param d A floating-point number that specifies the (1,1) element of the transformation matrix.
   */
  transformSelection(a: number, b: number, c: number, d: number): void
  /**
   * Sets the XYZ position around which the selection is translated or rotated. This method is available only for movie clips.
   * @param xyzCoordinate An XYZ coordinate that specifies the center point for 3D rotation or translation.
   */
  translate3DCenter(xyzCoordinate: Point3D): void
  /**
   * Applies a 3D translation to the selection. This method is available only for movie clips.
   * @param xyzCoordinate An XYZ coordinate that specifies the axes for 3D translation.
   * @param bGlobalTransform A Boolean value that specifies whether the transformation mode should be global (true) or local (false).
   */
  translate3DSelection(xyzCoordinate: Point3D, bGlobalTransform: boolean): void
  /**
   * Ungroups the current selection.
   */
  unGroup(): void
  /**
   * Combines all selected shapes into a drawing object. If no objects are selected, calling this method results in an error and the script breaks at that point.
   */
  union(): void
  /**
   * Unlocks all locked elements on the currently selected frame.
   */
  unlockAllElements(): void
  /**
   * Posts an XMLUI dialog box. See fl.xmlui.
   * @returns An object that has properties defined for all controls defined in the XML file. All properties are returned as strings. The returned object will have one predefined property named "dismiss" that will have the string value "accept" or "cancel".
   * @param fileURI A string, expressed as a file:/// URI, that specifies the path to the XML file defining the controls in the panel. The full path is required.
   */
  xmlPanel(fileURI: string): any
}

/**
 * This object contains all the properties for all filters. The filter.name property specifies the type of filter, and determines which properties are applicable to each filter. See filter.name.
 * To return the filter list for an object or objects, use document.getFilters(). To apply filters to an object or objects, use document.setFilters(). See document.getFilters() and document.setFilters().
 */
declare class Filter {
  /**
   * A float value that specifies the angle of the shadow or highlight color, in degrees. Acceptable values are between 0 and 360. This property is defined for Filter objects with a value of "bevelFilter", "dropShadowFilter", "gradientBevelFilter", or "gradientGlowFilter" for the filter.name property.
   */
  angle: number
  /**
   * A float value that specifies the amount to blur in the x direction, in pixels. Acceptable values are between 0 and 255. This property is defined for Filter objects with a value of "bevelFilter", "blurFilter", "dropShadowFilter", "glowFilter", "gradientBevelFilter", or "gradientGlowFilter" for the filter.name property.
   */
  blurX: number
  /**
   * A float value that specifies the amount to blur in the y direction, in pixels. Acceptable values are between 0 and 255. This property is defined for Filter objects with a value of "bevelFilter", "blurFilter", "dropShadowFilter", "glowFilter", "gradientBevelFilter", or "gradientGlowFilter" for the filter.name property.
   */
  blurY: number
  /**
   * A float value that specifies the brightness of the filter. Acceptable values are between -100 and 100. This property is defined for Filter objects with a value of "adjustColorFilter" for the filter.name property.
   */
  brightness: number
  /**
   * The color of the filter, in one of the following formats:
   * •A string in the format "#RRGGBB" or "#RRGGBBAA"
   * •A hexadecimal number in the format 0xRRGGBB
   * •An integer that represents the decimal equivalent of a hexadecimal number
   * This property is defined for Filter objects with a value of "dropShadowFilter" or "glowFilter" for the filter.name property.
   */
  color: string | number
  /**
   * A float value that specifies the contrast value of the filter. Acceptable values are between -100 and 100. This property is defined for Filter objects with a value of "adjustColorFilter" for the filter.name property.
   */
  contrast: number
  /**
   * A float value that specifies the distance between the filter’s effect and an object, in pixels. Acceptable values are from -255 to 255. This property is defined for Filter objects with a value of "bevelFilter", "dropShadowFilter", "gradientBevelFilter", or "gradientGlowFilter" for the filter.name property.
   */
  distance: number
  /**
   * A Boolean value that specifies whether the specified filter is enabled (true) or disabled (false).
   */
  enabled: boolean
  /**
   * A Boolean value that specifies whether the source image is hidden (true) or displayed (false). This property is defined for Filter objects with a value of "dropShadowFilter" for the filter.name property.
   */
  hideObject: boolean
  /**
   * The color of the highlight, in one of the following formats:
   * •A string in the format "#RRGGBB" or "#RRGGBBAA"
   * •A hexadecimal number in the format 0xRRGGBB
   * •An integer that represents the decimal equivalent of a hexadecimal number
   * This property is defined for Filter objects with a value of "bevelFilter" for the filter.name property.
   */
  highlightColor: string | number
  /**
   * A float value that specifies the hue of the filter. Acceptable values are between -180 and 180. This property is defined for Filter objects with a value of "adjustColorFilter" for the filter.name property.
   */
  hue: number
  /**
   * A Boolean value that specifies whether the shadow is an inner shadow (true) or not (false). This property is defined for Filter objects with a value of "dropShadowFilter" or "glowFilter" for the filter.name property.
   */
  inner: boolean
  /**
   * A Boolean value that specifies whether the filter is a knockout filter (true) or not (false). This property is defined for Filter objects with a value of "bevelFilter", "dropShadowFilter", "glowFilter", "gradientBevelFilter", or "gradientGlowFilter" for the filter.name property.
   */
  knockout: boolean
  /**
   * A string that specifies the type of filter. The value of this property determines which other properties of the Filter object are available. The value is one of the following: "adjustColorFilter", "bevelFilter", "blurFilter", "dropShadowFilter", "glowFilter", "gradientBevelFilter", or "gradientGlowFilter".
   */
  readonly name: string
  /**
   * A string that specifies the blur quality. Acceptable values are "low", "medium", and "high" ("high" is similar to a Gaussian blur). This property is defined for Filter objects with a value of "bevelFilter", "blurFilter", "dropShadowFilter", "glowFilter", "gradientGlowFilter", or "gradientBevelFilter" for the filter.name property.
   */
  quality: string
  /**
   * A float value that specifies the saturation value of the filter. Acceptable values are from -100 to 100. This property is defined for Filter objects with a value of "adjustColorFilter" for the filter.name property.
   */
  saturation: number
  /**
   * The color of the shadow, in one of the following formats:
   * •A string in the format "#RRGGBB" or "#RRGGBBAA"
   * •A hexadecimal number in the format 0xRRGGBB
   * •An integer that represents the decimal equivalent of a hexadecimal number
   * This property is defined for Filter objects with a value of "bevelFilter" for the filter.name property.
   */
  shadowColor: string | number
  /**
   * An integer that specifies the percentage strength of the filter. Acceptable values are between 0 and 25,500. This property is defined for Filter objects with a value of "bevelFilter", "dropShadowFilter", "glowFilter", "gradientGlowFilter", or "gradientBevelFilter" for the filter.name property.
   */
  strength: number
  /**
   * A string that specifies the type of bevel or glow. Acceptable values are "inner", "outer", and "full". This property is defined for Filter objects with a value of "bevelFilter", "gradientGlowFilter", or "gradientBevelFilter" for the filter.name property.
   */
  type: string
}

/**
 * This object contains all the properties of the Fill color setting of the Tools panel or of a selected shape. To retrieve a Fill object, use document.getCustomFill().
 */
declare class Fill {
  /**
   * A Boolean value that specifies whether the bitmap fill for a shape that is larger than the bitmap is clipped (true) or repeated (false). This property is available only if the value of the fill.style property is "bitmap". If the shape is smaller than the bitmap, this value is false.
   */
  bitmapIsClipped: boolean
  /**
   * A string that specifies the path and name of the bitmap fill in the Library. This property is available only if the value of the fill.style property is "bitmap".
   */
  bitmapPath: string
  /**
   * The color of the fill, in one of the following formats:
   * •A string in the format "#RRGGBB" or "#RRGGBBAA"
   * •A hexadecimal number in the format 0xRRGGBB
   * •An integer that represents the decimal equivalent of a hexadecimal number
   */
  color: string | number
  /**
   * An array of colors in the gradient, expressed as integers. This property is available only if the value of the fill.style property is either "radialGradient" or "linearGradient". See fill.style
   */
  colorArray: number[] | string[]
  /**
   * An integer that specifies the gradient focal point horizontal offset from the transformation point. A value of 10, for example, would place the focal point at 10/255 of the distance from the transformation point to the edge of the gradient. A value of -255 would place the focal point at the left boundary of the gradient. The default value is 0.
   */
  focalPoint: number
  /**
   * A Boolean value that specifies whether to render the fill as a linear or radial RGB gradient. Set this property to true to specify a linear interpolation of a gradient; set it to false to specify a radial interpolation of a gradient. The default value is false.
   */
  linearRGB: boolean
  /**
   * A Matrix object that defines the placement, orientation, and scales for gradient fills.
   */
  matrix: Matrix
  /**
   * A string that specifies the behavior of a gradient’s overflow. Acceptable values are "extend", "repeat", and "reflect"; the strings are not case-sensitive. The default value is "extend".
   */
  overflow: string
  /**
   * An array of integers, each in the range of zero to 255, indicating the position of the corresponding color. This property is available only if the value of the fill.style property is either "radialGradient" or "linearGradient".
   */
  posArray: number[]
  /**
   * A tring that specifies the fill style. Acceptable values are "bitmap", "solid", "linearGradient", "radialGradient", and "noFill".
   * If this value is "linearGradient" or "radialGradient", the fill.colorArray and fill.posArray properties are also available. If this value is "bitmap", the fill.bitmapIsClipped and fill.bitmapPath properties are also available.
   */
  style: string
}

/**
 * The Stroke object contains all the settings for a stroke, including the custom settings. This object represents the information contained in the Property inspector. Using the Stroke object together with the document.setCustomStroke() method, you can change the stroke settings for the Tools panel, the Property inspector, and the current selection. You can also get the stroke settings of the Tools panel and Property inspector, or of the current selection, by using the document.getCustomStroke() method.
 * This object always has the following four properties: style, thickness, color, and breakAtCorners. (In Flash CS3, the breakAtCorners property was deprecated in favor of stroke.joinType.) Other properties can be set, depending on the value of the stroke.style property.
 */
declare class Stroke {
  /**
   * A Boolean value. This property is the same as the Sharp Corners setting in the custom Stroke Style dialog box.
   */
  breakAtCorners: boolean
  /**
   * A string that specifies the type of cap for the stroke. Acceptable values are "none", "round", and "square".
   */
  capType: string
  /**
   * The color of the stroke, in one of the following formats:
   * •A string in the format "#RRGGBB" or "#RRGGBBAA"
   * •A hexadecimal number in the format 0xRRGGBB
   * •An integer that represents the decimal equivalent of a hexadecimal number
   * Note: In Flash 8 and later, this property is deprecated in favor of stroke.shapeFill.color.
   */
  color: string | number
  /**
   * A string that specifies the type of hatching for the stroke. This property can be set only if the stroke.style property is set to "hatched" (see stroke.style). Acceptable values are "straight", "slight curve", "medium curve", and "very curved".
   */
  curve: string
  /**
   * An integer that specifies the lengths of the solid parts of a dashed line. This property is available only if the stroke.style property is set to dashed (see stroke.style).
   */
  dash1: number
  /**
   * An integer that specifies the lengths of the blank parts of a dashed line. This property is available only if the stroke.style property is set to dashed (see stroke.style).
   */
  dash2: number
  /**
   * Atring that specifies the density of a stippled line. This property is available only if the stroke.style property is set to stipple (see stroke.style). Acceptable values are "very dense", "dense", "sparse", and "very sparse".
   */
  density: string
  /**
   * A string that specifies the dot size of a stippled line. This property is available only if the stroke.style property is set to stipple (see stroke.style). Acceptable values are "tiny", "small", "medium", and "large".
   */
  dotSize: string
  /**
   * An integer that specifies the spacing between dots in a dotted line. This property is available only if the stroke.style property is set to dotted. See stroke.style.
   */
  dotSpace: number
  /**
   * A string that specifies the thickness of a hatch line. This property is available only if the stroke.style property is set to hatched (see stroke.style). Acceptable values are "hairline", "thin", "medium", and "thick".
   */
  hatchThickness: string
  /**
   * A string that specifies the jiggle property of a hatched line. This property is available only if the stroke.style property is set to hatched (see stroke.style). Acceptable values are "none", "bounce", "loose", and "wild".
   */
  jiggle: string
  /**
   * A string that specifies the type of join for the stroke. Acceptable values are "miter", "round", and "bevel".
   */
  joinType: string
  /**
   * A string that specifies the length of a hatch line. This property is available only if the stroke.style property is set to hatched (see stroke.style). Acceptable values are "equal", "slight variation", "medium variation", and "random". (The value "random" actually maps to "medium variation".)
   */
  length: string
  /**
   * A float value that specifies the angle above which the tip of the miter will be truncated by a segment. That means the miter is truncated only if the miter angle is greater than the value of miterLimit.
   */
  miterLimit: number
  /**
   * A string that specifies the pattern of a ragged line. This property is available only if the stroke.style property is set to ragged (see stroke.style). Acceptable values are "solid", "simple", "random", "dotted", "random dotted", "triple dotted", and "random triple dotted".
   */
  pattern: string
  /**
   * A string that specifies the rotation of a hatch line. This property is available only if the  stroke.style property is set to hatched (see stroke.style). Acceptable values are "none", "slight", "medium", and "free".
   */
  rotate: string
  /**
   * A string that specifies the type of scale to be applied to the stroke. Acceptable values are "normal", "horizontal", "vertical", and "none".
   */
  scaleType: string
  /**
   * A Fill object that represents the fill settings of the stroke.
   */
  shapeFill: Fill
  /**
   * A string that specifies the spacing of a hatched line. This property is available only if the stroke.style property is set to hatched (see stroke.style). Acceptable values are "very close", "close", "distant", and "very distant".
   */
  space: string
  /**
   * A Boolean value that specifies whether stroke hinting is set on the stroke.
   */
  strokeHinting: boolean
  /**
   * A string that describes the stroke style. Acceptable values are "noStroke", "solid", "dashed", "dotted", "ragged", "stipple", and "hatched". Some of these values require additional properties of the Stroke object to be set, as described in the following list:
   * •If value is "solid" or "noStroke", there are no other properties.
   * •If value is "dashed", there are two additional properties: dash1 and dash2.
   * •If value is "dotted", there is one additional property: dotSpace.
   * •If value is "ragged", there are three additional properties: pattern, waveHeight, and waveLength.
   * •If value is "stipple", there are three additional properties: dotSize, variation, and density .
   * •If value is "hatched", there are six additional properties: hatchThickness, space, jiggle, rotate, curve, and length.
   */
  style: string
  /**
   * An integer that specifies the stroke size.
   */
  thickness: number
  /**
   * A string that specifies the variation of a stippled line. This property is available only if the stroke.style property is set to stipple (see stroke.style). Acceptable values are "one size", "small variation", "varied sizes", and "random sizes".
   */
  variation: string
  /**
   * A string that specifies the wave height of a ragged line. This property is available only if the stroke.style property is set to ragged (see stroke.style). Acceptable values are "flat", "wavy", "very wavy", and "wild".
   */
  waveHeight: string
  /**
   * A string that specifies the wavelength of a ragged line. This property is available only if the stroke.style property is set to ragged (see stroke.style). Acceptable values are "very short", "short", "medium", and "long".
   */
  waveLength: string
}

/**
 * The library object represents the Library panel. It is a property of the Document object (see document.library) and can be accessed by fl.getDocumentDOM().library.
 * The library object contains an array of items of different types, including symbols, bitmaps, sounds, and video.
 */
declare class Library {
  /**
   * An array of item objects in the library.
   */
  items: Item[]
  /**
   * An array of Library Items that are not used in the document. This list is the same list of items selected by the “Select Unused Items” menu item in the Library panel.
   */
  unusedItems: Item[]
  /**
   * Adds the current or specified item to the Stage at the specified position.
   * @returns A Boolean value: true if the item is successfully added to the document; false otherwise.
   * @param position A point that specifies the x,y position of the center of the item on the Stage.
   * @param namePath A string that specifies the name of the item. If the item is in a folder, you can specify its name and path using slash notation. If namePath is not specified, the current library selection is used. This parameter is optional.
   */
  addItemToDocument(position: Point, namePath?: string): boolean
  /**
   * Creates a new item of the specified type in the Library panel and sets the new item to the currently selected item. For more information on importing items into the library, including items such as sounds, see document.importFile().
   * @returns A Boolean value: true if the item is successfully created; false otherwise.
   * @param type A string that specifies the type of item to create. The only acceptable values for type are "video", "movie clip", "button", "graphic", "bitmap", "screen", and "folder" (so, for example, you cannot add a sound to the library with this method). Specifying a folder path is the same as using library.newFolder() before calling this method.
   * @param namePath A string that specifies the name of the item to be added. If the item is in a folder, specify its name and path using slash notation. This parameter is optional.
   */
  addNewItem(type: string, namePath?: string): boolean
  /**
   * Deletes the current items or a specified item from the Library panel. This method can affect multiple items if several are selected.
   * @returns A Boolean value: true if the items are successfully deleted; false otherwise.
   * @param namePath A string that specifies the name of the item to be deleted. If the item is in a folder, you can specify its name and path using slash notation. If you pass a folder name, the folder and all its items are deleted. If no name is specified, Flash deletes the currently selected item or items. To delete all the items in the Library panel, select all items before using this method. This parameter is optional.
   */
  deleteItem(namePath?: string): boolean
  /**
   * Makes a copy of the currently selected or specified item. The new item has a default name (such as item copy) and is set as the currently selected item. If more than one item is selected, the command fails.
   * @returns A Boolean value: true if the item is duplicated successfully; false otherwise. If more than one item is selected, Flash returns false.
   * @param namePath A string that specifies the name of the item to duplicate. If the item is in a folder, you can specify its name and path using slash notation. This parameter is optional.
   */
  duplicateItem(namePath?: string): boolean
  /**
   * Opens the currently selected or specified item in Edit mode.
   * @returns A Boolean value: true if the specified item exists and can be edited; false otherwise.
   * @param namePath A string that specifies the name of the item. If the item is in a folder, you can specify its name and path using slash notation. If namePath is not specified, the single selected library item opens in Edit mode. If none or more than one item in the library is currently selected, the first scene in the main timeline appears for editing. This parameter is optional.
   */
  editItem(namePath?: string): boolean
  /**
   * Returns the library item’s index value (zero-based). The library index is flat, so folders are considered part of the main index. Folder paths can be used to specify a nested item.
   * @returns An integer value representing the item’s zero-based index value.
   * @param namePath A string that specifies the name of the item. If the item is in a folder, you can specify its name and path using slash notation.
   */
  findItemIndex(namePath: string): number
  /**
   * Gets the property for the selected item.
   * @returns A string value for the property.
   * @param property A string. For a list of values that you can use as a property parameter, see the Property summary table for the Item object, along with property summaries for its subclasses.
   */
  getItemProperty(property: string): string
  /**
   * Gets the type of object currently selected or specified by a library path.
   * @returns A string value specifying the type of object. For possible return values, see item.itemType.
   * @param namePath A string that specifies the name of the item. If the item is in a folder, specify its name and path using slash notation. If namePath is not specified, Flash provides the type of the current selection. If more than one item is currently selected and no namePath is provided, Flash ignores the command. This parameter is optional.
   */
  getItemType(namePath?: string): string
  /**
   * Gets the array of all currently selected items in the library.
   * @returns An array of values for all currently selected items in the library.
   */
  getSelectedItems(): Item[]
  /**
   * Checks to see if a specified item exists in the library.
   * @returns A Boolean value: true if the specified item exists in the library; false otherwise.
   * @param namePath A string that specifies the name of the item. If the item is in a folder, specify its name and path using slash notation.
   */
  itemExists(namePath: string): boolean
  /**
   * Moves the currently selected or specified library item to a specified folder. If the folderPath parameter is empty, the items move to the top level.
   * @returns A Boolean value: true if the item moves successfully; false otherwise.
   * @param folderPath A string that specifies the path to the folder in the form "FolderName" or "FolderName/FolderName". To move an item to the top level, specify an empty string ("") for folderPath.
   * @param itemToMove A string that specifies the name of the item to move. If itemToMove is not specified, the currently selected items move. This parameter is optional.
   * @param bReplace A Boolean value. If an item with the same name already exists, specifying true for the bReplace parameter replaces the existing item with the item being moved. If false, the name of the dropped item changes to a unique name. The default value is false. This parameter is optional.
   */
  moveToFolder(folderPath: string, itemToMove?: string, bReplace?: boolean): boolean
  /**
   * Creates a new folder with the specified name, or a default name ("untitled folder #") if no folderName parameter is provided, in the currently selected folder.
   * @returns A Boolean value: true if folder is created successfully; false otherwise.
   * @param folderPath A string that specifies the name of the folder to be created. If it is specified as a path, and the path doesn't exist, the path is created. This parameter is optional.
   */
  newFolder(folderPath?: string): boolean
  /**
   * Renames the currently selected library item in the Library panel.
   * @returns A Boolean value of true if the name of the item changes successfully, false otherwise. If multiple items are selected, no names are changed, and the return value is false (to match user interface behavior).
   * @param name A string that specifies a new name for the library item.
   */
  renameItem(name: string): boolean
  /**
   * Selects or deselects all items in the library.
   * @param bSelectAll A Boolean value that specifies whether to select or deselect all items in the library. Omit this parameter or use the default value of true to select all the items in the library; false deselects all library items. This parameter is optional.
   */
  selectAll(bSelectAll?: boolean): void
  /**
   * Selects a specified library item.
   * @returns A Boolean value: true if the specified item exists; false otherwise.
   * @param namePath A string that specifies the name of the item. If the item is in a folder, you can specify its name and path using slash notation.
   * @param bReplaceCurrentSelection A Boolean value that specifies whether to replace the current selection or add the item to the current selection. The default value is true (replace current selection). This parameter is optional.
   * @param bSelect A Boolean value that specifies whether to select or deselect an item. The default value is true (select). This parameter is optional.
   */
  selectItem(namePath: string, bReplaceCurrentSelection: boolean, bSelect?: boolean): boolean
  /**
   * Deselects all the library items. Same as library.selectAll(false).
   */
  selectNone(): void
  /**
   * Sets the property for all selected library items (ignoring folders).
   * @param property A string that is the name of the property to set. For a list of properties, see the Property summary table for the Item object and property summaries for its subclasses. To see which objects are subclasses of the Item object, see “Summary of the DOM structure” on page 14 (https://help.adobe.com/archive/en_US/flash/cs5/flash_cs5_extending.pdf).
   * @param value The value to assign to the specified property.
   */
  setItemProperty(property: string, value: any): void
  /**
   * Updates the specified item.
   * @returns A Boolean value: true if Flash updated the item successfully; false otherwise.
   * @param namePath A string that specifies the name of the item. If the item is in a folder, specify its name and path using slash notation. This is the same as right-clicking on an item and selecting Update from the menu in the user interface. If no name is provided, the current selection is updated. This parameter is optional.
   */
  updateItem(namePath?: string): boolean
}

/**
 * The Item object is an abstract base class. Anything in the library derives from Item. See also library object.
 */
declare class Item {
  /**
   * A string that specifies the type of element. The value is one of the following: "undefined", "component", "movie clip", "graphic", "button", "folder", "font", "sound", "bitmap", "compiled clip", "screen", or "video". If this property is "video", you can determine the type of video; see videoItem.videoType.
   */
  readonly itemType: string
  /**
   * A string that specifies the ActionScript 3.0 class that will be associated with the symbol. The value specified here appears in the Linkage dialog box in the authoring environment, and in other dialog boxes that include the Linkage dialog box controls, such as the Symbol Properties dialog box. (To specify this value for an ActionScript 2.0 class, use item.linkageClassName.)
   * If the base class is the default for the symbol type (for example, "flash.display.MovieClip" for movie clips, "flash.display.SimpleButton" for buttons, and so on), this property is an empty string (""). Similarly, to make an item the default base class, set this value to an empty string.
   * When you set this value, none of the checks performed by the Linkage dialog box are performed, and no errors are thrown if Flash is unable to set the base class to the specified value. For example, setting this value in the Linkage dialog box forces checks to make sure that the base class can be found in the FLA file’s classpath. It ensures that ActionScript 3.0 is chosen in the Flash tab of the Publish Settings dialog box, and so on. These checks are not performed when you set this property in a script.
   */
  linkageBaseClass: string
  /**
   * A string that specifies the ActionScript 2.0 class that will be associated with the symbol. (To specify this value for an ActionScript 3.0 class, use item.linkageBaseClass.)
   * For this property to be defined, the item.linkageExportForAS and/or item.linkageExportForRS properties must be set to true, and the item.linkageImportForRS property must be set to false.
   */
  linkageClassName: string
  /**
   * A Boolean value. If this property is true, the item is exported for ActionScript. You can also set the item.linkageExportForRS and item.linkageExportInFirstFrame properties to true. If you set this property to true, the item.linkageImportForRS property must be set to false. Also, you must specify an identifier (item.linkageIdentifier) and a URL (item.linkageURL).
   */
  linkageExportForAS: boolean
  /**
   * A Boolean value. If this property is true, the item is exported for run-time sharing. You can also set the item.linkageExportForAS and item.linkageExportInFirstFrame properties to true.
   * If you set this property to true, the item.linkageImportForRS property must be set to false. Also, you must specify an identifier (item.linkageIdentifier) and a URL (item.linkageURL).
   */
  linkageExportForRS: boolean
  /**
   * A Boolean value. If true, the item is exported in the first frame; if false, the item is exported in the frame of the first instance. If the item does not appear on the Stage, it isn’t exported.
   * This property can be set to true only when item.linkageExportForAS and/or item.linkageExportForRS are set to true.
   */
  linkageExportInFirstFrame: boolean
  /**
   * A string that specifies the name Flash will use to identify the asset when linking to the destination SWF file. Flash ignores this property if item.linkageImportForRS, item.linkageExportForAS, and item.linkageExportForRS are set to false. Conversely, this property must be set when any of those properties are set to true.
   */
  linkageIdentifier: string
  /**
   * A Boolean value: if true, the item is imported for run-time sharing. If this property is set to true, both item.linkageExportForAS and item.linkageExportForRS must be set to false. Also, you must specify an identifier (item.linkageIdentifier) and a URL (item.linkageURL).
   */
  linkageImportForRS: boolean
  /**
   * A string that specifies the URL where the SWF file containing the shared asset is located. Flash ignores this property if item.linkageImportForRS, item.linkageExportForAS, and item.linkageExportForRS are set to false. Conversely, this property must be set when any of those properties are set to true. You can specify a web URL or a filename in platform-dependent format (that is, forward slashes [/] or backward slashes [\], depending on the platform).
   */
  linkageURL: string
  /**
   * A string that specifies the name of the library item, which includes the folder structure. For example, if Symbol_1 is inside a folder called Folder_1, the name property of Symbol_1 is "Folder_1/Symbol_1".
   */
  name: string
  /**
   * Adds specified data to a library item.
   * @param name A string that specifies the name of the data.
   * @param type A string that specifies the type of data. Valid types are "integer", "integerArray", "double", "doubleArray", "string", and "byteArray".
   * @param data The data to add to the specified library item. The type of data depends on the value of the type parameter. For example, if type is "integer", the value of data must be an integer, and so on.
   */
  addData(name: string, type: string, data: any): void
  /**
   * Retrieves the value of the specified data.
   * @returns The data specified by the name parameter. The type of data returned depends on the type of stored data.
   * @param name A string that specifies the name of the data to retrieve.
   */
  getData(name: string): any
  /**
   * Indicates whether publishing of the specified persistent data is enabled for the specified format on a specified library item.
   * @returns A Boolean value that indicates whether publishing of the specified persistent data is enabled for the specified format on this library item.
   * @param name A string that contains the name of the persistent data item, as specified in “item.addData()”.
   * @param format A string that specifies the publishing format. Note:  _EMBED_SWF_ is a special built-in publishing format for persistent data. If set, the persistent data is embedded in the SWF file every time a document is published. The persistent data can then be accessed via ActionScript with the .metaData property. This feature applies to SWF version 19 (Flash Player 11.6) and above and only for symbol instances onstage. Other custom publishing formats may be specified for custom JSFL scripts if getPublishPersistentData() is called with the same format.
   */
  getPublishData(name: string, format: string): boolean
  /**
   * Determines whether the library item has the named data.
   * @returns A Boolean value: true if the specified data exists; false otherwise.
   * @param name A string that specifies the name of the data to check for in the library item.
   */
  hasData(name: string): boolean
  /**
   * Removes persistent data from the library item.
   * @param name Specifies the name of the data to remove from the library item.
   */
  removeData(name: string): void
  /**
   * Enables publishing of persistent data for a library item.
   * @param name A string that contains the name of the persistent data item, as specified in “item.addData()”.
   * @param format A string that specifies the publishing format. Note:  _EMBED_SWF_ is a special built-in publishing format for persistent data. If set, the persistent data is embedded in the SWF file every time a document is published. The persistent data can then be accessed via ActionScript with the .metaData property. This feature applies to SWF version 19 (Flash Player 11.6) and above and only for symbol instances onstage. Other custom publishing formats may be specified for custom JSFL scripts if getPublishPersistentData() is called with the same format.
   * @param publish A Boolean that indicates whether to enable or disable publishing of persistent data for the specified format.
   */
  setPublishData(name: string, format: string, publish: boolean): void
}

/**
 * A BitmapItem object refers to a bitmap in the library of a document. The BitmapItem object is a subclass of the Item object (see Item object).
 */
declare class BitmapItem extends Item {
  /**
   * A Boolean value that specifies whether to allow smoothing of a bitmap (true) or not (false).
   */
  allowSmoothing: boolean
  /**
   * A string that determines the type of image compression applied to the bitmap. Acceptable values are "photo" or "lossless". If the value of bitmapItem.useImportedJPEGQuality is false, "photo" corresponds to JPEG with a quality from 0 to 100; if bitmapItem.useImportedJPEGQuality is true, "photo" corresponds to JPEG using the default document quality value. The value "lossless" corresponds to GIF or PNG format (see bitmapItem.useImportedJPEGQuality).
   */
  compressionType: string
  /**
   * A string containing a hexadecimal number that represents the number of seconds that have elapsed between January 1, 1970 and the modification date of the original file at the time the file was imported to the library. If the file no longer exists, this value is "00000000".
   */
  readonly fileLastModifiedDate: string
  /**
   * A boolean indicating if a bitmap in the library has a valid/useful alpha channel. This flag will help you decide if you should export the bitmap item as a PNG instead of a JPEG using the bitmapItem.exportToFile() function.
   */
  readonly hasValidAlphaLayer: boolean
  /**
   * An int that specifies the width of the bitmap, in pixels.
   */
  readonly hPixels: number
  /**
   * A hexadecimal value indicating the modification date and time of the bitmap item. This value is incremented every time the bitmap item is imported. For example, selecting the Update button from the Bitmap Properties dialog will trigger an import.
   */
  readonly lastModifiedDate: string
  /**
   * A string that specifies whether the specified item was imported as an jpeg file. Possible values for this property are “photo” (for jpeg files) and “lossless” (for uncompressed file types such as GIF and PNG).
   */
  readonly originalCompressionType: string
  /**
   * An integer that specifies the quality of the bitmap. To use the default document quality, specify -1; otherwise, specify an integer from 0 to 100. Available only for JPEG compression.
   */
  quality: number
  /**
   * A Boolean value of true if the file that was imported to the Library still exists in the location from where it was imported; false otherwise.
   */
  readonly sourceFileExists: boolean
  /**
   * A Boolean value of true if the file modification date of the Library item is the same as the modification date on disk of the file that was imported ;false otherwise.
   */
  readonly sourceFileIsCurrent: boolean
  /**
   * A string, expressed as a file:/// URI, that represents the path and name of the file that was imported into the Library.
   */
  readonly sourceFilePath: string
  /**
   * A Boolean value that specifies whether deblocking is enabled (true) or not (false).
   */
  useDeblocking: boolean
  /**
   * A Boolean value that specifies whether to use the default imported JPEG quality (true) or not (false). Available only for JPEG compression.
   */
  useImportedJPEGQuality: boolean
  /**
   * An int that specifies the height of the bitmap, in pixels.
   */
  readonly vPixels: number
  /**
   * Exports the specified item to a PNG or JPG file.
   * @returns A Boolean value of true if the file was exported successfully; false otherwise.
   * @param fileURI A string, expressed as a file:/// URI, that specifies the path and name of the exported file.
   * @param quality A number, from 1-100, that determines the quality of the exported image file. A higher number indicates higher quality. The default is 80. New in Flash CS6 Professional.
   */
  exportToFile(fileURI: string, quality: number): boolean
}

/**
 * The folderItem object is a subclass of the Item object. There are no unique methods or properties for folderItem. See Item object.
 */
declare class FolderItem extends Item {}

/**
 * The fontItem object is a subclass of the Item object (see Item object).
 */
declare class FontItem extends Item {
  /**
   * A Boolean value that specifies whether the Font item is bitmapped (true) or not (false).
   */
  bitmap: boolean
  /**
   * A Boolean value that specifies whether the Font item is bold (true) or not (false).
   */
  bold: boolean
  /**
   * A string value that allows you to specify characters to embed within a SWF file so that the characters do not need to be present on the devices the SWF file eventually plays back on. This property provides the same functionality as the Font Embedding dialog box.
   * This property can also be read, allowing you to find out what characters were specified with the Font Embedding dialog box for a given Font item.
   */
  embeddedCharacters: string
  /**
   * A string value that specifies a series of delimited integers that correspond to items that can be selected in the Font Embedding dialog box.
   * This property can also be read, allowing you to find out what characters were specified with the Font Embedding dialog box for a given Font item.
   * Note: The range numbers correspond to the FontEmbedding/UnicodeTables.xml file found in the configuration folder.
   */
  embedRanges: string
  /**
   * Note: While this property is available in Flash CS5 Professional, it has no effect when applied to Text Layout Framework (TLF) text. Beginning in Flash Professional CS5, variant glyphs are always embedded in fonts used with TLF text. The flash.text.engine (FTE) referenced below is only available in Flash Professional CS4.
   * Property; a Boolean value that specifies whether variant glyphs should be output in the font when publishing a SWF file (true) or not (false). Setting this value to true increases the size of your SWF file. The default value is false.
   * Some languages dynamically substitute characters glyphs as you are typing (for example, Thai, Arabic, Hebrew, and Greek). If you are laying out or inputting text in these types of languages, set this property to
true.
   */
  embedVariantGlyphs: boolean
  /**
   * A string that specifies the name of the device font associated with the Font item. If you enter a string that does not correspond to an installed device font, an error message is displayed. To determine if a font exists on the system, use fl.isFontInstalled().
   * Note: When you set this value, the resulting property value might be different from the string you enter. See the following example.
   */
  font: string
  /**
   * A Boolean value that specifies the format of the font that is output when publishing a SWF file. If this value is true, Flash outputs a font that can be used with the flash.text.engine (FTE) APIs. If this value is false, the font can be used with the flash.text APIs, including text fields. The default value is false.
   */
  isDefineFont4Symbol: boolean
  /**
   * A Boolean value that specifies whether the Font item is italic (true) or not (false).
   */
  italic: boolean
  /**
   * An integer that represents the size of the Font item, in points.
   */
  size: number
}

/**
 * The SoundItem object is a subclass of the Item object. It represents a library item used to create a sound. See also frame.soundLibraryItem and Item object.
 */
declare class SoundItem extends Item {
  /**
   * A string that specifies the bit rate of a sound in the library. This property is available only for the MP3 compression type. Acceptable values are "8 kbps", "16 kbps", "20 kbps", "24 kbps", "32 kbps", "48 kbps", "56 kbps", "64 kbps", "80 kbps", "112 kbps", "128 kbps", and "160 kbps". Stereo sounds exported at 8 Kbps or 16 Kbps are converted to mono. The property is undefined for other compression types.
   * If you want to specify a value for this property, set soundItem.useImportedMP3Quality to false.
   */
  bitRate: string | undefined
  /**
   * A string that specifies the bits value for a sound in the library that has ADPCM compression. Acceptable values are "2 bit", "3 bit", "4 bit", and "5 bit".
   */
  bits: string
  /**
   * A string that specifies that compression type for a sound in the library. Acceptable values are "Default", "ADPCM", "MP3", "Raw", and "Speech".
   * If you want to specify a value for this property, set soundItem.useImportedMP3Quality to false.
   */
  compressionType: string
  /**
   * A Boolean value available only for MP3 and Raw compression types. Setting this value to true converts a stereo sound to mono; false leaves it as stereo. For the MP3 compression type, if soundItem.bitRate is less than 20 Kbps, this property is ignored and forced to true (see soundItem.bitRate).
   * If you want to specify a value for this property, set soundItem.useImportedMP3Quality to false.
   */
  convertStereoToMono: boolean
  /**
   * A string containing a hexadecimal number that represents the number of seconds that have elapsed between January 1, 1970, and the modification date of the original file (on disk) at the time the file was imported to the library. If the file no longer exists, this value is "00000000".
   */
  readonly fileLastModifiedDate: string | number
  /**
   * A hexadecimal value indicating the modification date and time of the sound item. This value is incremented every time the sound item is imported. For example, selecting the Update button from the Sound Properties dialog will trigger an import.
   */
  readonly lastModifiedDate: string | number
  /**
   * A string that specifies whether the specified item was imported as an mp3 file. Possible values for this property are “RAW” and “MP3”.
   */
  readonly originalCompressionType: string
  /**
   * A string that specifies the playback quality of a sound in the library. This property is available only for the MP3 compression type. Acceptable values are "Fast", "Medium", and "Best".
   * If you want to specify a value for this property, set soundItem.useImportedMP3Quality to false.
   */
  quality: string
  /**
   * A string that specifies the sample rate for the audio clip. This property is available only for the ADPCM, Raw, and Speech compression types. Acceptable values are "5 kHz", "11 kHz", "22 kHz", and "44 kHz".
   * If you want to specify a value for this property, set soundItem.useImportedMP3Quality to false.
   */
  sampleRate: string
  /**
   * A Boolean value of true if the file that was imported to the Library still exists in the location from where it was imported; false otherwise.
   */
  readonly sourceFileExists: boolean
  /**
   * A Boolean value of true if the file modification date of the Library item is the same as the modification date on disk of the file that was imported; false otherwise.
   */
  readonly sourceFileIsCurrent: boolean
  /**
   * A string, expressed as a file:/// URI, that represents the path and name of the file that was imported into the Library.
   */
  readonly sourceFilePath: string
  /**
   * A Boolean value. If true, all other properties are ignored, and the imported MP3 quality is used.
   */
  useImportedMP3Quality: boolean
  /**
   * Exports the specified item to a WAV or MP3 file. Export settings are based on the item being exported.
   * When exporting sound items, you should check if the soundItem.originalCompressionType property is equal to"RAW." If this check is false, you can only export the file as MP3. (Optionally, you can try exporting as a WAV file, and if the function returns false, then try to export to MP3.)
   * @returns A Boolean value of true if the file was exported successfully; false otherwise.
   * @param fileURI A string, expressed as a file:/// URI, that specifies the path and name of the exported file.
   */
  exportToFile(fileURI: string): boolean
}

/**
 * The SymbolItem object is a subclass of the Item object.
 */
declare class SymbolItem extends Item {
  /**
   * A string that indicates the modification date of the symbol as a hexadecimal value, representing a date and time. This value is incremented every time a symbol's timeline is edited.
   */
  readonly lastModifiedDate: string
  /**
   * A Boolean value that specifies whether 9-slice scaling is enabled for the item.
   */
  scalingGrid: boolean
  /**
   * A Rectangle object that specifies the locations of the four 9-slice guides. For information on the format of the rectangle, see document.addNewRectangle().
   */
  scalingGridRect: Rectangle
  /**
   * A Boolean value that specifies whether the item is updated when the FLA file is published. The default value is false. Used for shared library symbols.
   */
  sourceAutoUpdate: boolean
  /**
   * A string that specifies the path for the source FLA file as a file:/// URI. The path must be an absolute path, not a relative path. This property is used for shared library symbols.
   */
  sourceFilePath: string
  /**
   * A string that specifies the name of the item in the source file library. It is used for shared library symbols.
   */
  sourceLibraryName: string
  /**
   * A string that specifies the type of symbol. Acceptable values are "movie clip", "button", and "graphic".
   */
  symbolType: string
  /**
   * A Timeline Object.
   */
  readonly timeline: Timeline
  /**
   * Converts a symbol item in the library to a compiled movie clip.
   */
  convertToCompiledClip(): void
  /**
   * Exports the symbol item to a SWC file.
   * @param outputURI A string, expressed as a file:/// URI, that specifies the SWC file to which the method will export the symbol. The outputURI must reference a local file. Flash does not create a folder if outputURI does not exist.
   */
  exportSWC(outputURI: string): void
  /**
   * Exports the symbol item to a SWF file.
   * @param outputURI A string, expressed as a file:/// URI, that specifies the SWF file to which the method will export the symbol. The outputURI must reference a local file. Flash does not create a folder if outputURI doesn't exist.
   */
  exportSWF(outputURI: string): void
  /**
   * Exports a frame from the selected instance of movie clip, graphic, or button symbol on the Stage to a bitmap in Library.
   * @param frameNumber An integer indicating the frame within the symbol to be exported.
   * @param bitmapName A string indicating the name of the new bitmap to be added to the Library.
   */
  exportToLibrary(frameNumber: number, bitmapName: string): void
  /**
   * Exports a movie clip, graphic, or button symbol to a sequence of PNG files on disk.
   * @param outputURI The URI to export the PNG sequence files to. This URI must reference a local file. For example: file:///c|/tests/mytest.png.
   * @param startFrameNum An integer indicating the first frame within the symbol to be exported. If this parameter is omitted, all frames are exported.
   * @param endFrameNum An integer indicating the last frame within the symbol to be exported. If this parameter is omitted, all frames are exported.
   * @param matrix Optional. A matrix to be appended to the exported PNG sequence.
   */
  exportToPNGSequence(
    outputURI: string,
    startFrameNum?: number,
    endFrameNum?: number,
    matrix?: Matrix,
  ): void
}

/**
 * The VideoItem object is a subclass of the Item object.
 */
declare class VideoItem extends Item {
  /**
   * A string containing a hexadecimal number that represents the number of seconds that have elapsed between January 1, 1970, and the modification date of the original file (on disk) at the time the file was imported to the library. If the file no longer exists, this value is "00000000".
   */
  readonly fileLastModifiedDate: string
  /**
   * A hexadecimal value indicating the modification date and time of the video item. This value is incremented every time the video item is imported.
   */
  readonly lastModifiedDate: string
  /**
   * A Boolean value of true if the file that was imported to the Library still exists in the location from where it was imported; false otherwise.
   */
  readonly sourceFileExists: boolean
  /**
   * A Boolean value of true if the file modification date of the Library item is the same as the modification date (on disk) of the file that was imported; false otherwise.
   */
  readonly sourceFileIsCurrent: boolean
  /**
   * A string, expressed as a file:/// URI that specifies the path to the video item.
   */
  readonly sourceFilePath: string
  /**
   * A string that specifies the type of video the item represents. Possible values are "embedded video" and "video".
   */
  readonly videoType: string
  /**
   * Exports the specified item to an FLV file.
   * @returns A Boolean value of true if the file is exported successfully; false otherwise.
   * @param fileURI A string, expressed as a file:/// URI, that specifies the path and name of the exported file.
   */
  exportToFLV(fileURI: string): boolean
}

/**
 * The Timeline object represents the Flash timeline, which can be accessed for the current document by using fl.getDocumentDOM().getTimeline(). This method returns the timeline of the current scene or symbol that is being edited.
 * When you work with scenes, each scene’s timeline has an index value, and can be accessed for the current document by fl.getDocumentDOM().timelines[i]. (In this example, i is the index of the value of the timeline.)
 * When you work with frames by using the methods and properties of the Timeline object, remember that the frame value is a zero-based index (not the actual frame number in the sequence of frames in the timeline). That is, the first frame has a frame index of 0.
 */
declare class Timeline {
  /**
   * The zero-based index for the frame at the current playhead location.
   */
  currentFrame: number
  /**
   * The zero-based index for the currently active layer. A value of 0 specifies the top layer, a value of 1 specifies the layer below it, and so on.
   */
  currentLayer: number
  /**
   * An integer that represents the number of frames in this timeline’s longest layer.
   */
  readonly frameCount: number
  /**
   * An integer that represents the number of layers in the specified timeline.
   */
  readonly layerCount: number
  /**
   * An array of layer objects.
   */
  readonly layers: Layer[]
  /**
   * If the timeline's libraryItem property is null, the timeline belongs to a scene. If it's not null, you can treat it like a LibraryItem object.
   */
  readonly libraryItem: null | Item
  /**
   * A string that specifies the name of the current timeline. This name is the name of the current scene, screen (slide or form), or symbol that is being edited.
   */
  name: string
  /**
   * Adds a motion guide layer above the current layer and attaches the current layer to the newly added guide layer, converting the current layer to a layer of type "Guided".
   * This method functions only on a layer of type "Normal". It has no effect on a layer whose type is "Folder", "Mask", "Masked", "Guide", or "Guided".
   * @returns An integer that represents the zero-based index of the newly added guide layer. If the current layer type is not of type "Normal", Flash returns -1.
   */
  addMotionGuide(): number
  /**
   * Adds a new layer to the document and makes it the current layer.
   * @returns An integer value of the zero-based index of the newly added layer.
   * @param name A string that specifies the name for the new layer. If you omit this parameter, a new default layer name is assigned to the new layer (“Layer n,” where n is the total number of layers created and deleted for that particular instance of the file). This parameter is optional.
   * @param layerType A string that specifies the type of layer to add. If you omit this parameter, a “Normal” type layer is created. This parameter is optional. Acceptable values are "normal", "guide", "guided", "mask", "masked", and "folder".
   * @param bAddAbove A Boolean value that, if set to true (the default), causes Flash to add the new layer above the current layer; false causes Flash to add the layer below the current layer. This parameter is optional.
   */
  addNewLayer(name: string, layerType?: string, bAddAbove?: boolean): number
  /**
   * Deletes all the contents from a frame or range of frames on the current layer.
   * @param startFrameIndex A zero-based index that defines the beginning of the range of frames to clear. If you omit startFrameIndex, the method uses the current selection. This parameter is optional.
   * @param endFrameIndex A zero-based index that defines the end of the range of frames to clear. The range goes up to, but does not include, endFrameIndex. If you specify only startFrameIndex, endFrameIndex defaults to the value of startFrameIndex. This parameter is optional.
   */
  clearFrames(startFrameIndex?: number, endFrameIndex?: number): void
  /**
   * Converts a keyframe to a regular frame and deletes its contents on the current layer.
   * @param startFrameIndex A zero-based index that defines the beginning of the range of frames to clear. If you omit startFrameIndex, the method uses the current selection. This parameter is optional.
   * @param endFrameIndex A zero-based index that defines the end of the range of frames to clear. The range goes up to, but does not include, endFrameIndex. If you specify only startFrameIndex, endFrameIndex defaults to the value of startFrameIndex. This parameter is optional.
   */
  clearKeyframes(startFrameIndex?: number, endFrameIndex?: number): void
  /**
   * Converts frames to blank keyframes on the current layer.
   * @param startFrameIndex A zero-based index that specifies the starting frame to convert to keyframes. If you omit startFrameIndex, the method converts the currently selected frames. This parameter is optional.
   * @param endFrameIndex A zero-based index that specifies the frame at which the conversion to keyframes will stop. The range of frames to convert goes up to, but does not include, endFrameIndex. If you specify only startFrameIndex, endFrameIndex defaults to the value of startFrameIndex. This parameter is optional.
   */
  convertToBlankKeyframes(startFrameIndex?: number, endFrameIndex?: number): void
  /**
   * Converts a range of frames to keyframes (or converts the selection if no frames are specified) on the current layer.
   * @param startFrameIndex A zero-based index that specifies the first frame to convert to keyframes. If you omit startFrameIndex, the method converts the currently selected frames. This parameter is optional.
   * @param endFrameIndex A zero-based index that specifies the frame at which conversion to keyframes will stop. The range of frames to convert goes up to, but does not include, endFrameIndex. If you specify only startFrameIndex, endFrameIndex defaults to the value of startFrameIndex. This parameter is optional.
   */
  convertToKeyframes(startFrameIndex?: number, endFrameIndex?: number): void
  /**
   * Copies a range of frames on the current layer to the clipboard.
   * @param startFrameIndex A zero-based index that specifies the beginning of the range of frames to copy. If you omit startFrameIndex, the method uses the current selection. This parameter is optional.
   * @param endFrameIndex A zero-based index that specifies the frame at which to stop copying. The range of frames to copy goes up to, but does not include, endFrameIndex. If you specify only startFrameIndex, endFrameIndex defaults to the value of startFrameIndex. This parameter is optional.
   */
  copyFrames(startFrameIndex?: number, endFrameIndex?: number): void
  /**
   * Copies the layers that are currently selected in the Timeline, or the layers in the specified range. Optional arguments can be provided in order to specify a layer or range of layers to copy.
   * @param startFrameIndex Optional. A zero-based index that specifies the beginning of the range of layers to copy. If you omit startLayerIndex, the method uses the current selection.
   * @param endFrameIndex Optional. A zero-based index that specifies the layer at which to stop copying. The range of layers to copy goes up to and including endLayerIndex . If you specify only startLayerIndex, then endLayerIndex defaults to the value of startLayerIndex.
   */
  copyLayers(startFrameIndex?: number, endFrameIndex?: number): void
  /**
   * Copies motion on selected frames, either from a motion tween or from frame-by-frame animation. You can then use timeline.pasteMotion() to apply the motion to other frames.
   * To copy motion as text (code) that you can paste into a script, see timeline.copyMotionAsAS3().
   */
  copyMotion(): void
  /**
   * Copies motion on selected frames, either from a motion tween or from frame-by-frame animation, to the clipboard as ActionScript 3.0 code. You can then paste this code into a script.
   * To copy motion in a format that you can apply to other frames, see timeline.copyMotion().
   */
  copyMotionAsAS3(): void
  /**
   * Creates a new motion object. The parameters are optional, and if specified set the timeline selection to the indicated frames prior to creating the motion object.
   * @param startFrameIndex Specifies the first frame at which to create motion objects. If you omit startFrameIndex, the method uses the current selection; if there is no selection, all frames at the current playhead on all layers are removed. This parameter is optional.
   * @param endFrameIndex Specifies the frame at which to stop creating motion objects; the range of frames goes up to, but does not include, endFrameIndex. If you specify only startFrameIndex, endFrameIndex defaults to the startFrameIndex value. This parameter is optional.
   */
  createMotionObject(startFrameIndex?: number, endFrameIndex?: number): void
  /**
   * Sets the frame.tweenType property to motion for each selected keyframe on the current layer, and converts each frame’s contents to a single symbol instance if necessary. This property is the equivalent to the Create Motion Tween menu item in the Flash authoring tool.
   * @param startFrameIndex A zero-based index that specifies the beginning frame at which to create a motion tween. If you omit startFrameIndex, the method uses the current selection. This parameter is optional.
   * @param endFrameIndex A zero-based index that specifies the frame at which to stop the motion tween. The range of frames goes up to, but does not include, endFrameIndex. If you specify only startFrameIndex, endFrameIndex defaults to the startFrameIndex value. This parameter is optional.
   */
  createMotionTween(startFrameIndex?: number, endFrameIndex?: number): void
  /**
   * Cuts a range of frames on the current layer from the timeline and saves them to the clipboard.
   * @param startFrameIndex A zero-based index that specifies the beginning of a range of frames to cut. If you omit startFrameIndex, the method uses the current selection. This parameter is optional.
   * @param endFrameIndex A zero-based index that specifies the frame at which to stop cutting. The range of frames goes up to, but does not include, endFrameIndex. If you specify only startFrameIndex, endFrameIndex defaults to the startFrameIndex value. This parameter is optional.
   */
  cutFrames(startFrameIndex?: number, endFrameIndex?: number): void
  /**
   * Cuts the layers that are currently selected in the Timeline, or the layers in the specified range. Optional arguments can be provided in order to specify a layer or range of layers to cut.
   * @param startFrameIndex Optional. A zero-based index that specifies the beginning of the range of layers to cut. If you omit startLayerIndex, the method uses the current selection.
   * @param endFrameIndex Optional. A zero-based index that specifies the layer at which to stop cutting. The range of layers to cut goes up to and including endLayerIndex. If you specify only startLayerIndex, then endLayerIndex defaults to the value of startLayerIndex.
   */
  cutLayers(startFrameIndex?: number, endFrameIndex?: number): void
  /**
   * Deletes a layer. If the layer is a folder, all layers within the folder are deleted. If you do not specify the layer index, Flash deletes the currently selected layers.
   * @param index A zero-based index that specifies the layer to be deleted. If there is only one layer in the timeline, this method has no effect. This parameter is optional.
   */
  deleteLayer(index?: number): void
  /**
   * Duplicates the layers that are currently selected in the Timeline, or the layers in the specified range. Optional arguments can be provided in order to specify a layer or range of layers to duplicate.
   * @param startFrameIndex Optional. A zero-based index that specifies the beginning of the range of layers to copy. It also specifies the layer above which the layers on the clipboard are pasted. If you omit startLayerIndex, the method uses the current layer selection.
   * @param endFrameIndex Optional. A zero-based index that specifies the layer at which to stop copying. The range of layers to copy goes up to and including endLayerIndex. If you specify only startLayerIndex, then endLayerIndex defaults to the value of startLayerIndex.
   */
  duplicateLayers(startFrameIndex?: number, endFrameIndex?: number): void
  /**
   * Expands or collapses the specified folder or folders. If you do not specify a layer, this method operates on the current layer.
   * @param bExpand A Boolean value that, if set to true, causes the method to expand the folder; false causes the method to collapse the folder.
   * @param bRecurseNestedParents A Boolean value that, if set to true, causes all the layers within the specified folder to be opened or closed, based on the bExpand parameter. This parameter is optional.
   * @param index A zero-based index of the folder to expand or collapse. Use -1 to apply to all layers (you also must set bRecurseNestedParents to true). This property is equivalent to the Expand All/Collapse All menu items in the Flash authoring tool. This parameter is optional.
   */
  expandFolder(bExpand: boolean, bRecurseNestedParents?: boolean, index?: number): void
  /**
   * Finds an array of indexes for the layers with the given name. The layer index is flat, so folders are considered part of the main index.
   * @returns An array of index values for the specified layer. If the specified layer is not found, Flash returns undefined.
   * @param name A string that specifies the name of the layer to find.
   */
  findLayerIndex(name: string): number[] | undefined
  /**
   * Returns the bounding rectangle for all elements on all layers on the Timeline, for a given frame.
   * @returns The bounding rectangle for all elements on all layers on the Timeline, for the specified frame.
   * @param frameIndex The number of the frame for which you want the bounds. Defaults to 1, which is the first frame. This parameter is optional.
   * @param includeHiddenLayers Indicates whether to include element bounds from hidden layers. Defaults to the SWF publish setting value for "include hidden layers". This parameter is optional.
   */
  getBounds(frameIndex?: number, includeHiddenLayers?: boolean): SimpleShape
  /**
   * Retrieves the specified property’s value for the selected frames.
   * @returns A value for the specified property, or undefined if all the selected frames do not have the same property value.
   * @param property A string that specifies the name of the property for which to get the value. See the Property summary for the Frame object for a complete list of properties.
   * @param startframeIndex A zero-based index that specifies the starting frame number for which to get the value. If you omit startFrameIndex, the method uses the current selection. This parameter is optional.
   * @param endFrameIndex A zero-based index that specifies the end of the range of frames to select. The range goes up to, but does not include, endFrameIndex. If you specify only startFrameIndex, endFrameIndex defaults to the value of startFrameIndex. This parameter is optional.
   */
  getFrameProperty(
    property: string,
    startframeIndex?: number,
    endFrameIndex?: number,
  ): string | undefined
  /**
   * Returns an XML string that represents the current positions of the horizontal and vertical guide lines for a timeline (View > Guides >Show Guides). To apply these guide lines to a timeline, use timeline.setGuidelines().
   * @returns An XML string.
   */
  getGuidelines(): string
  /**
   * Retrieves the specified property’s value for the selected layers.
   * @returns The value of the specified property. Flash looks at the layer’s properties to determine the type. If all the specified layers don’t have the same property value, Flash returns undefined.
   * @param property A string that specifies the name of the property whose value you want to retrieve. For a list of properties, see the Property summary for the Frame object.
   */
  getLayerProperty(property: string): any | undefined
  /**
   * Retrieves the currently selected frames in an array.
   * @returns An array containing 3n integers, where n is the number of selected regions. The first integer in each group is the layer index, the second integer is the start frame of the beginning of the selection, and the third integer specifies the ending frame of that selection range. The ending frame is not included in the selection.
   */
  getSelectedFrames(): number[]
  /**
   * Gets the zero-based index values of the currently selected layers.
   * @returns An array of the zero-based index values of the selected layers.
   */
  getSelectedLayers(): number[]
  /**
   * Inserts a blank keyframe at the specified frame index; if the index is not specified, the method inserts the blank keyframe by using the playhead/selection. See also timeline.insertKeyframe().
   * @param frameNumIndex A zero-based index that specifies the frame at which to insert the keyframe. If you omit frameNumIndex, the method uses the current playhead frame number. This parameter is optional.
   * If the specified or selected frame is a regular frame, the keyframe is inserted at the frame. For example, if you have a span of 10 frames numbered 1-10 and you select Frame 5, this method makes Frame 5 a blank keyframe, and the length of the frame span is still 10 frames. If Frame 5 is selected and is a keyframe with a regular frame next to it, this method inserts a blank keyframe at Frame 6. If Frame 5 is a keyframe and the frame next to it is already a keyframe, no keyframe is inserted but the playhead moves to Frame 6.
   */
  insertBlankKeyframe(frameNumIndex?: number): void
  /**
   * Inserts the specified number of frames at the specified index.
   * If no parameters are specified, this method works as follows:
   * •If one or more frames are selected, the method inserts the selected number of frames at the location of the first selected frame in the current layer. That is, if frames 6 through 10 are selected (a total of five frames), the method adds five frames at Frame 6 in the layer containing the selected frames.
   * •If no frames are selected, the method inserts one frame at the current frame on all layers.
   * If parameters are specified, the method works as follows:
   * •If only numFrames is specified, inserts the specified number of frames at the current frame on the current layer.
   * •If numFrames is specified and bAllLayers is true, inserts the specified number of frames at the current frame on all layers.
   * •If all three parameters are specified, inserts the specified number of frames at the specified index (frameIndex); the value passed for bAllLayers determines if the frames are added only to the current layer or to all layers.
   * If the specified or selected frame is a regular frame, the frame is inserted at that frame. For example, if you have a span of 10 frames numbered 1-10 and you select Frame 5 (or pass a value of 4 for frameIndex), this method adds a frame at Frame 5, and the length of the frame span becomes 11 frames. If Frame 5 is selected and it is a keyframe, this method inserts a frame at Frame 6 regardless of whether the frame next to it is also a keyframe.
   * @param numFrames An integer that specifies the number of frames to insert. If you omit this parameter, the method inserts frames at the current selection in the current layer. This parameter is optional.
   * @param bAllLayers A Boolean value that, if set to true, causes the method to insert the specified number of frames in the numFrames parameter into all layers; if set to false (the default), the method inserts frames into the current layer. This parameter is optional.
   * @param frameNumIndex A zero-based index that specifies the frame at which to insert a new frame. This parameter is optional.
   */
  insertFrames(numFrames?: number, bAllLayers?: boolean, frameNumIndex?: number): void
  /**
   * Inserts a keyframe at the specified frame. If you omit the parameter, the method inserts a keyframe using the playhead or selection location.
   * @param frameNumIndex A zero-based index that specifies the frame index at which to insert the keyframe in the current layer. If you omit frameNumIndex, the method uses the frame number of the current playhead or selected frame. This parameter is optional.
   */
  insertKeyframe(frameNumIndex?: number): void
  /**
   * Pastes the range of frames from the clipboard into the specified frames.
   * @param startFrameIndex A zero-based index that specifies the beginning of a range of frames to paste. If you omit startFrameIndex, the method uses the current selection. This parameter is optional.
   * @param endFrameIndex A zero-based index that specifies the frame at which to stop pasting frames. The method pastes up to, but not including, endFrameIndex. If you specify only startFrameIndex, endFrameIndex defaults to the startFrameIndex value. This parameter is optional.
   */
  pasteFrames(startFrameIndex?: number, endFrameIndex?: number): void
  /**
   * Paste layers that have been previously cut or copied above the currently selected layer, or above the specified layer index. If the specified layer is a folder layer, the layers are pasted into the folder. Returns the lowest layer index of the layers that were pasted. This action does not affect the system clipboard.
   * @returns Integer indicating the lowest layer index of the layers that were pasted.
   * @param layerIndex Optional. A zero-based index that specifies the layer above which the layers on the clipboard are pasted. If you omit layerIndex, the method uses the current selection.
   */
  pasteLayers(layerIndex?: number): number
  /**
   * Pastes the range of motion frames retrieved by timeline.copyMotion() to the Timeline. If necessary, existing frames are displaced (moved to the right) to make room for the frames being pasted.
   */
  pasteMotion(): void
  /**
   * Pastes motion on selected frames. Applies only to a copied classic tween, not a motion tween. Displays a dialog box whose options let the user choose which parts of a classic tween to apply when pasting: X position, Y position, Horizontal scale, Vertical scale, Rotation and skew, Color, Filters, Blend mode.
   */
  pasteMotionSpecial(): void
  /**
   * Deletes the frame.
   * @param startFrameIndex A zero-based index that specifies the first frame at which to start removing frames. If you omit startFrameIndex, the method uses the current selection; if there is no selection, all frames at the current playhead on all layers are removed. This parameter is optional.
   * @param endFrameIndex A zero-based index that specifies the frame at which to stop removing frames; the range of frames goes up to, but does not include, endFrameIndex. If you specify only startFrameIndex, endFrameIndex defaults to the startFrameIndex value. This parameter is optional.
   */
  removeFrames(startFrameIndex?: number, endFrameIndex?: number): void
  /**
   * Removes the motion object and converts the frame(s) back to static frames. The parameters are optional, and if specified set the timeline selection to the indicated frames prior to removing the motion object.
   * @param startFrameIndex Specifies the first frame at which to start removing motion objects. If you omit startFrameIndex, the method uses the current selection; if there is no selection, all frames at the current playhead on all layers are removed. This parameter is optional.
   * @param endFrameIndex Specifies the frame at which to stop removing motion objects; the range of frames goes up to, but does not include, endFrameIndex. If you specify only startFrameIndex, endFrameIndex defaults to the startFrameIndex value. This parameter is optional.
   */
  removeMotionObject(startFrameIndex?: number, endFrameIndex?: number): void
  /**
   * Moves the first specified layer before or after the second specified layer.
   * @param layerToMove A zero-based index that specifies which layer to move.
   * @param layerToPutItBy A zero-based index that specifies which layer you want to move the layer next to. For example, if you specify 1 for layerToMove and 0 for layerToPutItBy, the second layer is placed next to the first layer.
   * @param bAddBefore Specifies whether to move the layer before or after layerToPutItBy. If you specify false, the layer is moved after layerToPutItBy. The default value is true. This parameter is optional.
   */
  reorderLayer(layerToMove: number, layerToPutItBy: number, bAddBefore?: boolean): void
  /**
   * Reverses a range of frames.
   * @param startFrameIndex A zero-based index that specifies the first frame at which to start reversing frames. If you omit startFrameIndex, the method uses the current selection. This parameter is optional.
   * @param endFrameIndex A zero-based index that specifies the first frame at which to stop reversing frames; the range of frames goes up to, but does not include, endFrameIndex. If you specify only startFrameIndex, endFrameIndex defaults to the value of startFrameIndex. This parameter is optional.
   */
  reverseFrames(startFrameIndex?: number, endFrameIndex?: number): void
  /**
   * Selects all the frames in the current timeline.
   */
  selectAllFrames(): void
  /**
   * Sets the property of the Frame object for the selected frames.
   * @param property A string that specifies the name of the property to be modified. For a complete list of properties and values, see the Property summary for the Frame object.
   * You can’t use this method to set values for read-only properties such as frame.duration and frame.elements.
   * @param value Specifies the value to which you want to set the property. To determine the appropriate values and type, see the Property summary for the Frame object.
   * @param startFrameIndex A zero-based index that specifies the starting frame number to modify. If you omit startFrameIndex, the method uses the current selection. This parameter is optional.
   * @param endFrameIndex A zero-based index that specifies the first frame at which to stop. The range of frames goes up to, but does not include, endFrameIndex. If you specify startFrameIndex but omit endFrameIndex, endFrameIndex defaults to the value of startFrameIndex. This parameter is optional.
   */
  setFrameProperty(
    property: string,
    value: any,
    startFrameIndex?: number,
    endFrameIndex?: number,
  ): void
  /**
   * Replaces the guide lines for the timeline (View > Guides > Show Guides) with the information specified in xmlString. To retrieve an XML string that can be passed to this method, use timeline.getGuidelines().
   * To view the newly set guide lines, you may have to hide them and then view them.
   * @returns A Boolean value of true if the guidelines are successfully applied; false otherwise.
   * @param xmlString An XML string that contains information on the guidelines to apply.
   */
  setGuidelines(xmlString: string): boolean
  /**
   * Sets the specified property on all the selected layers to a specified value.
   * @param property A string that specifies the property to set. For a list of properties, see “Layer object” on page 355.
   * @param value The value to which you want to set the property. Use the same type of value you would use when setting the property in the layer object.
   * @param layersToChange A string that identifies which layers should be modified. Acceptable values are "selected", "all", and "others". The default value is "selected" if you omit this parameter. This parameter is optional.
   */
  setLayerProperty(property: string, value: any, layersToChange?: string): void
  /**
   * Selects a range of frames in the current layer or sets the selected frames to the selection array passed into this method.
   * @param startFrameIndex A zero-based index that specifies the beginning frame to set.
   * @param endFrameIndex A zero-based index that specifies the end of the selection; endFrameIndex is the frame after the last frame in the range to select.
   * @param bReplaceCurrentSelection A Boolean value that, if it is set to true, causes the currently selected frames to be deselected before the specified frames are selected. The default value is true.
   */
  setSelectedFrames(
    startFrameIndex: number,
    endFrameIndex: number,
    bReplaceCurrentSelection?: boolean,
  ): void
  /**
   * Selects a range of frames in the current layer or sets the selected frames to the selection array passed into this method.
   * @param selectionList An array of three integers, as returned by timeline.getSelectedFrames().
   * @param bReplaceCurrentSelection A Boolean value that, if it is set to true, causes the currently selected frames to be deselected before the specified frames are selected. The default value is true.
   */
  setSelectedFrames(selectionList: number[], bReplaceCurrentSelection?: boolean): void
  /**
   * Sets the layer to be selected, and also makes the specified layer the current layer. Selecting a layer also means that all the frames in the layer are selected.
   * @param index A zero-based index for the layer to select.
   * @param bReplaceCurrentSelection A Boolean value that, if it is set to true, causes the method to replace the current selection; false causes the method to extend the current selection. The default value is true. This parameter is optional.
   */
  setSelectedLayers(index: number, bReplaceCurrentSelection?: boolean): void
  /**
   * Shows the layer masking during authoring by locking the mask and masked layers. This method uses the current layer if no layer is specified. If you use this method on a layer that is not of type Mask or Masked, Flash displays an error in the Output panel.
   * @param layerIndex A zero-based index of a mask or masked layer to show masking during authoring. This parameter is optional.
   */
  showLayerMasking(layerIndex?: number): void
  /**
   * Starts automatic playback of the timeline if it is currently playing. This method can be used with SWF panels to control timeline playback in the authoring environment.
   */
  startPlayback(): void
  /**
   * Stops automatic playback of the timeline if it is currently playing. This method can be used with SWF panels to control timeline playback in the authoring environment.
   */
  stopPlayback(): void
}

/**
 * The Layer object represents a layer in the timeline. The timeline.layers property contains an array of Layer objects, which can be accessed by fl.getDocumentDOM().getTimeline().layers.
 */
declare class Layer {
  /**
   * A string value indicating the animation type of the layer. Possible values include: "none", "motion object", "IK pose".
   */
  readonly animationType: string
  /**
   * The color assigned to outline the layer, in one of the following formats:
   * •A string in the format "#RRGGBB" or "#RRGGBBAA"
   * •A hexadecimal number in the format 0xRRGGBB
   * •An integer that represents the decimal equivalent of a hexadecimal number
   * This property is equivalent to the Outline color setting in the Layer Properties dialog box.
   */
  color: string | number
  /**
   * An integer that specifies the number of frames in the layer.
   */
  readonly frameCount: number
  /**
   * An array of Frame objects (see Frame object).
   */
  readonly frames: Frame[]
  /**
   * An integer that specifies the percentage layer height; equivalent to the Layer height value in the Layer Properties dialog box. Acceptable values represent percentages of the default height: 100, 200, or 300.
   */
  height: number
  /**
   * A string that specifies the current use of the layer; equivalent to the Type setting in the Layer Properties dialog box. Acceptable values are "normal", "guide", "guided", "mask", "masked", and "folder".
   */
  layerType: string
  /**
   * A Boolean value that specifies the locked status of the layer. If set to true, the layer is locked. The default value is false.
   */
  locked: boolean
  /**
   * A string that specifies the name of the layer.
   */
  name: string
  /**
   * A Boolean value that specifies the status of outlines for all objects in the layer. If set to true, all objects in the layer appear only with outlines. If false, objects appear as they were created.
   */
  outline: boolean
  /**
   * A Layer object that represents the layer’s containing folder, guiding, or masking layer. The parent layer must be a folder, guide, or mask layer that precedes the layer, or the parentLayer of the preceding or following layer. Setting the layer’s parentLayer does not move the layer’s position in the list; trying to set a layer’s parentLayer to a layer that would require moving it has no effect. Uses null for a top-level layer.
   */
  parentLayer: Layer
  /**
   * A Boolean value that specifies whether the layer’s objects on the Stage are shown or hidden. If set to true, all objects in the layer are visible; if false, they are hidden. The default value is true.
   */
  visible: boolean
}

/**
 * The Frame object represents frames in the layer.
 */
declare class Frame {
  /**
   * A string that represents ActionScript code. To insert a new line character, use "\n".
   */
  actionScript: string
  /**
   * An integer that represents the number of frames in a frame sequence.
   */
  readonly duration: number
  /**
   * An array of Element objects (see Element object). The order of elements is the order in which they are stored in the FLA file. If there are multiple shapes on the Stage, and each is ungrouped, Flash treats them as one element. If each shape is grouped, so there are multiple groups on the Stage, Flash sees them as separate elements. In other words, Flash treats raw, ungrouped shapes as a single element, regardless of how many separate shapes are on the Stage. If a frame contains three raw, ungrouped shapes, for example, then elements.length in that frame returns a value of 1. To work around this issue, select each shape individually and group it.
   */
  readonly elements: Element[]
  /**
   * A Boolean value. If true, the frame gets its ease information from the custom ease curve. If false, the frame gets its ease information from the ease value.
   */
  hasCustomEase: boolean
  /**
   * A string that specifies the type of Frame name. Acceptable values are "none", "name", "comment", and "anchor". Setting a label to "none" clears the frame.name property.
   */
  labelType: string
  /**
   * A Boolean value that specifies whether the tweened element rotates the element as it moves along a path to maintain its angle with respect to each point on the path (true) or whether it does not rotate (false).
   * If you want to specify a value for this property, you should set frame.motionTweenRotate to "none".
   */
  motionTweenOrientToPath: boolean
  /**
   * A string that specifies how the tweened element rotates. Acceptable values are "none", "auto", "clockwise", and "counter-clockwise". A value of "auto" means the object will rotate in the direction requiring the least motion to match the rotation of the object in the following keyframe.
   * If you want to specify a value for frame.motionTweenOrientToPath, set this property to "none".
   */
  motionTweenRotate: string
  /**
   * An integer that specifies the number of times the tweened element rotates between the starting keyframe and the next keyframe.
   */
  motionTweenRotateTimes: number
  /**
   * A Boolean value that specifies whether the tweened element scales to the size of the object in the following keyframe, increasing its size with each frame in the tween (true), or doesn't scale (false).
   */
  motionTweenScale: boolean
  /**
   * A Boolean value that specifies whether the tweened element automatically snaps to the nearest point on the motion guide layer associated with this frame’s layer (true) or not (false).
   */
  motionTweenSnap: boolean
  /**
   * A Boolean value that if set to true, synchronizes the animation of the tweened object with the main timeline.
   */
  motionTweenSync: boolean
  /**
   * A string that specifies the name of the frame.
   */
  name: string
  /**
   * A string that specifies how a shape tween is blended between the shape in the keyframe at the start of the tween and the shape in the following keyframe. Acceptable values are "distributive" and "angular".
   */
  shapeTweenBlend: string
  /**
   * A string that specifies effects for a sound that is attached directly to a frame (frame.soundLibraryItem). Acceptable values are "none", "left channel", "right channel", "fade left to right", "fade right to left", "fade in", "fade out", and "custom".
   */
  soundEffect: string
  /**
   * A library item (see SoundItem object) used to create a sound. The sound is attached directly to the frame.
   */
  soundLibraryItem: SoundItem
  /**
   * An integer value that specifies the number of times a sound that is attached directly to a frame (frame.soundLibraryItem) plays. If you want to specify a value for this property, set frame.soundLoopMode to "repeat".
   */
  soundLoop: number
  /**
   * A string that specifies whether a sound that is attached directly to a frame (frame.soundLibraryItem) should play a specific number of times or loop indefinitely. Acceptable values are "repeat" and "loop". To specify the number of times the sound should play, set a value for frame.soundLoop.
   */
  soundLoopMode: string
  /**
   * A string that specifies the name of a sound that is attached directly to a frame (frame.soundLibraryItem), as stored in the library.
   */
  soundName: string
  /**
   * A string that specifies the sync behavior of a sound that is attached directly to a frame (frame.soundLibraryItem). Acceptable values are "event", "stop", "start", and "stream".
   */
  soundSync: string
  /**
   * The index of the first frame in a sequence.
   */
  readonly startFrame: number
  /**
   * An integer that specifies the amount of easing that should be applied to the tweened object. Acceptable values are -100 to 100. To begin the motion tween slowly and accelerate the tween toward the end of the animation, use a value between -1 and -100. To begin the motion tween rapidly and decelerate the tween toward the end of the animation, use a positive value between 1 and 100.
   */
  tweenEasing: number
  /**
   * A string that assigns an instance name to the selected motion object.
   */
  tweenInstanceName: string
  /**
   * A string that specifies the type of tween; acceptable values are "motion", "shape", or "none". The value "none" removes the motion tween. Use the timeline.createMotionTween() method to create a motion tween.
   * If you specify "motion", the object in the frame must be a symbol, text field, or grouped object. It will be tweened from its location in the current keyframe to the location in the following keyframe.
   * If you specify "shape", the object in the frame must be a shape. It will blend from its shape in the current keyframe to the shape in the following keyframe.
   */
  tweenType: string
  /**
   * A Tween Object.
   */
  tweenObj: Tween
  /**
   * A Boolean value. If true, a single custom ease curve is used for easing information for all properties. If false, each property has its own ease curve.
   * This property is ignored if the frame doesn't have custom easing applied.
   */
  useSingleEaseCurve: boolean
  /**
   * Converts the selected motion object to a 2D motion object.
   */
  convertMotionObjectTo2D(): void
  /**
   * Converts the selected motion object to a 3D motion object.
   */
  convertMotionObjectTo3D(): void
  /**
   * Converts the current frame to Frame-by-Frame Animation.
   * @returns boolean. Returns true if the frame contains animation that can be converted to frame by frame animation. For example: return true for Motion Tween frame or Classic Tween frame; return false for other type of frame such as static.
   */
  convertToFrameByFrameAnimation(): boolean
  /**
   * Returns an array of objects that represent the control points for the cubic Bézier curve that defines the ease curve.
   * @returns Returns an array of JavaScript objects, each of which has an x and y property.
   * @param property An optional string that specifies the property for which you want to return the custom ease value. Acceptable values are "all", "position", "rotation", "scale", "color", and "filters" . The default value is "all".
   */
  getCustomEase(property?: string): Point[]
  /**
   * Returns a string of the motion XML from the selected motion object.
   * @returns Returns a string of the motion XML from the selected motion object.
   */
  getMotionObjectXML(): string
  /**
   * Gets the sound envelope data of any frame.
   * @returns Returns a Sound object.
   */
  getSoundEnvelope(): SoundItem
  /**
   * Gets the limits (start, end) for a custom Sound envelope that is applied to the frame sound.
   * @returns Returns a structure that contain start and end fields.
   */
  getSoundEnvelopeLimits(): Limits
  /**
   * A Boolean value. Lets you know whether the current selection includes a motion path.
   */
  hasMotionPath(): boolean
  /**
   * A Boolean value. Lets you know whether the current selection is a 3D motion object.
   */
  is3DMotionObject(): boolean
  /**
   * A Boolean value. Lets you know whether the frame contains any elements.
   */
  isEmpty(): boolean
  /**
   * A Boolean value. Lets you know whether the current selection is a motion object.
   */
  isMotionObject(): boolean
  /**
   * A Boolean value. Selects (true) or deselects (false) the motion path of the current motion object.
   */
  selectMotionPath(): boolean
  /**
   * Specifies an array of control point and tangent endpoint coordinates that describe a cubic Bézier curve to be used as a custom ease curve. This array is constructed by the horizontal (ordinal: left to right) position of the control points and tangent endpoints.
   * @param property A string that specifies the property the ease curve should be used for. Acceptable values are "all", "position", "rotation", "scale", "color", and "filters".
   * @param easeCurve An array of objects that defines the ease curve. Each array element must be a JavaScript object with x and y properties.
   */
  setCustomEase(property: string, easeCurve: Point[]): void
  /**
   * Sets the duration (the tween span length) of the currently selected motion object.
   * @param duration Specifies the number of frames for the tween span of the selected motion object.
   * @param stretchExistingKeyframes A boolean value that determines whether the tween span is stretched, or if frames are added, to the end of the last frame.
   */
  setMotionObjectDuration(duration: number, stretchExistingKeyframes?: boolean): void
  /**
   * Applies the specified motion XML to the selected motion object.
   * @param xmlstr A string value that specifies the XML string.
   * @param endAtCurrentLocation A boolean value that determines whether the tween starts or ends at the current position.
   */
  setMotionObjectXML(xmlstr: string, endAtCurrentLocation?: boolean): void
  /**
   * Sets the sound envelope of any frame with sound file. The soundEnv object is an array and every element of array contains the following properties:
   * •mark
   * •leftChannel
   * •rightChannel
   * @param soundEnv A sound envelope.
   */
  setSoundEnvelope(soundEnv: SoundItem): void
  /**
   * Sets the sound envelope limits of any frame with a sound file.
   * @param limits A structure that contains start and end fields that signify the limits for a custom sound envelope.
   */
  setSoundEnvelopeLimits(limits: Limits): void
}

// Element
/**
 * Everything that appears on the Stage is of the type Element. The following code example lets you select an element:
 * var el = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0];
 */
declare class Element {
  /**
   * an integer that has a value greater than 0 for the depth of the object in the view. The drawing order of objects on the Stage specifies which one is on top of the others. Object order can also be managed with the Modify > Arrange menu item.
   * Example: Select an object and run this script: fl.trace("Depth of selected object: " + fl.getDocumentDOM().selection[0].depth);
   */
  readonly depth: number
  /**
   * A string that represents the type of the specified element. The value is one of the following: "shape", "text", "tlfText" (Flash Pro CS5 and later), "instance", "shapeObj"
   */
  readonly elementType: string
  /**
   * A float value that specifies the height of the element in pixels. Do not use this property to resize a text field. Instead, select the text field and use document.setTextRectangle(). Using this property with a text field scales the text.
   */
  height: number
  /**
   * Represents the Layer object on which the element is located.
   */
  readonly layer: Layer
  /**
   * A float value that represents the left side of the element. The value of element.left is relative to the upper left of the Stage for elements that are in a scene and is relative to the symbol’s registration point (also origin point or zero point) if the element is stored within a symbol. Use document.setSelectionBounds() or document.moveSelectionBy() to set this property.
   */
  readonly left: number
  /**
   * A Boolean value: true if the element is locked; false otherwise. If the value of element.elementType is "shape", this property is ignored.
   */
  locked: boolean
  /**
   * A Matrix object. A matrix has properties a, b, c, d, tx, and ty. The a, b, c, and d properties are floating-point values; the tx and ty properties are coordinates. See Matrix object.
   */
  matrix: Matrix
  /**
   * A string that specifies the name of the element, normally referred to as the Instance name. If the value of element.elementType is "shape", this property is ignored. See element.elementType.
   */
  name: string
  /**
   * An integer or float value between -180 and 180 that specifies the object’s clockwise rotation, in degrees.
   */
  rotation: number
  /**
   * A float value that specifies the x scale value of symbols, drawing objects, and primitive rectangles and ovals. A value of 1 indicates 100 percent scale.
   */
  scaleX: number
  /**
   * A float value that specifies the y scale value of symbols, drawing objects, and primitive rectangles and ovals. A value of 1 indicates 100 percent scale.
   */
  scaleY: number
  /**
   * A Boolean value that specifies whether the element is selected (true) or not (false).
   */
  selected: boolean
  /**
   * A float value between -180 and 180 that specifies the x skew value of symbols, drawing objects, and primitive rectangles and ovals.
   */
  skewX: number
  /**
   * A float value between -180 and 180 that specifies the y skew value of symbols, drawing objects, and primitive rectangles and ovals.
   */
  skewY: number
  /**
   * Top side of the element. The value of element.top is relative to the upper left of the Stage for elements that are in a scene and is relative to the symbol’s registration point if the element is stored within a symbol. Use document.setSelectionBounds() or document.moveSelectionBy() to set this property.
   */
  readonly top: number
  /**
   * A floating-point number that specifies the x value of the selected element’s transformation point, within the coordinate system of the element's parent. Setting this property to a new value moves the element. By contrast, the element.setTransformationPoint() method moves the transformation point but does not move the element.
   */
  transformX: number
  /**
   * A floating-point number that specifies the y value of the selected element’s transformation point, within the coordinate system of the element’s parent. Setting this property to a new value moves the element. By contrast, the element.setTransformationPoint() method moves the transformation point but does not move the element.
   */
  transformY: number
  /**
   * A float value that specifies the width of the element in pixels. Do not use this property to resize a text field. Instead, select the text field and use document.setTextRectangle(). Using this property with a text field scales the text.
   */
  width: number
  /**
   * A float value that specifies the x value of the selected element’s registration point.
   */
  x: number
  /**
   * A float value that specifies the y value of the selected element’s registration point.
   */
  y: number
  /**
   * Retrieves the value of the data specified by the name parameter.
   * The type of data depends on the type of the data that was stored (see element.setPersistentData()).
   * Only symbols and bitmaps support persistent data.
   * @returns The data specified by the name parameter, or 0 if the data doesn't exist.
   * @param name A string that identifies the data to be returned.
   */
  getPersistentData(name: string): any | number
  /**
   *  Indicates whether publishing of a specified persistent data item is enabled for the specified format on an element.
   * Note:  _EMBED_SWF_ is a special built-in publishing format for persistent data. If set, the persistent data will be embedded in the SWF file every time a document is published. The persistent data can then be accessed via ActionScript with the .metaData property. This requires SWF version 19 (Flash Player 11.6) and above and is only for symbol instances onstage. Other custom publishing formats may be specified for custom JSFL scripts if this method is called with the same format.
   * @returns True if the specified persistent data is enabled for the specified format. Otherwise False.
   * @param name A string that specifies the name of the persistent data item (set with element.setPersistentData()).
   * @param format A string that specifies the publishing format. Ex: "_EMBED_SWF_"
   */
  getPublishPersistentData(name: string, format: string): boolean
  /**
   * gets the value of the specified element’s transformation point.
   * Transformation points are relative to different locations, depending on the type of item selected. For more information, see element.setTransformationPoint().
   * @returns A point (for example, {x:10, y:20}, where x and y are floating-point numbers) that specifies the position of the transformation point (also origin point or zero point) within the element’s coordinate system.
   */
  getTransformationPoint(): Point
  /**
   * Determines whether the specified data has been attached to the specified element. Only symbols and bitmaps support persistent data.
   * @returns A Boolean value: true if the specified data is attached to the object; false otherwise.
   * @param name A string that specifies the name of the data item to test.
   */
  hasPersistentData(name: string): boolean
  /**
   * Removes any persistent data with the specified name that has been attached to the object. Only symbols and bitmaps support persistent data.
   * @param name A string that specifies the name of the data to remove.
   * @returns A Boolean value: true if data was removed; false otherwise.
   */
  removePersistentData(name: string): boolean
  /**
   * Stores data with an element. The data is available when the FLA file containing the element is reopened. Only symbols and bitmaps support persistent data.
   * @param name A string that specifies the name to associate with the data. This name is used to retrieve the data.
   * @param type  A string that defines the type of the data. The allowable values are "integer", "integerArray", "double", "doubleArray", "string", and "byteArray".
   * @param value Specifies the value to associate with the object. The data type of value depends on the value of the type parameter. The specified value should be appropriate to the data type specified by the type parameter.
   */
  setPersistentData(name: string, type: string, value: any): void
  /**
   *  Enables or disables publishing of persistent data for a specified format.
   * @param name A string that specifies the name of the persistent data item (set with element.setPersistentData()).
   * @param format A string that specifies the publishing format. Note:  _EMBED_SWF_ is a special built-in publishing format for persistent data. If set, the persistent data will be embedded in the SWF file every time a document is published. The persistent data can then be accessed via ActionScript with the .metaData property. This requires SWF version 19 (Flash Player 11.6) and above and is only for symbol instances onstage. Other custom publishing formats may be specified for custom JSFL scripts if this method is called with the same format.
   * @param publish A boolean that indicates whether to enable or disable publishing of persistent data for the specified format.
   */
  setPublishPersistentData(name: string, format: string, publish: boolean): void
  /**
   * Sets the position of the element’s transformation point. This method is almost identical to document.setTransformationPoint(). It is different in the following way: • You can set transformation points for elements without first selecting them. This method moves the transformation point but does not move the element. By contrast, the element.transformX and element.transformY properties move the element.
   * @param transformationPoint A point (for example, {x:10, y:20}, where x and y are floating-point numbers) that specifies values for an element’s or group’s transformation point.
   * • Shapes: transformationPoint is set relative to the document (0,0 is the upper-left corner of the Stage).
   * • Symbols: transformationPoint is set relative to the symbol’s registration point (0,0 is located at the registration point).
   * • Text: transformationPoint is set relative to the text field (0,0 is the upper-left corner of the text field). • Bitmaps/videos: transformationPoint is set relative to the bitmap/video (0,0 is the upper-left corner of the bitmap or video).
   * • Drawing objects, primitive objects, and groups: transformationPoint is set relative to the stage.

   */
  setTransformationPoint(transformationPoint: Point): void
}

/**
 * The Matrix object represents a transformation matrix.
 */
declare class Matrix {
  /**
   * A floating-point value that specifies the (0,0) element in the transformation matrix. This value represents the scale factor of the object’s x-axis.
   * The a and d properties in a matrix represent scaling.
   */
  a: number
  /**
   * A floating-point value that specifies the (0,1) element in the matrix. This value represents the vertical skew of a shape; it causes Flash to move the shape’s right edge along the vertical axis.
   * The matrix.b and matrix.c properties in a matrix represent skewing (see matrix.c).
   */
  b: number
  /**
   * A floating-point value that specifies the (1,0) element in the matrix. This value causes Flash to skew the object by moving its bottom edge along a horizontal axis.
   * The matrix.b and matrix.c properties in a matrix represent skewing.
   */
  c: number
  /**
   * A floating-point value that specifies the (1,1) element in the matrix. This value represents the scale factor of the object’s y-axis.
   */
  d: number
  /**
   * A floating-point value that specifies the x-axis location of a symbol’s registration point (also origin point or zero point) or the center of a shape. It defines the x translation of the transformation.
   * You can move an object by setting the matrix.tx and matrix.ty properties (see matrix.ty).
   */
  tx: number
  /**
   * A floating-point value that specifies the y-axis location of a symbol’s registration point or the center of a shape. It defines the y translation of the transformation.
   * You can move an object by setting the matrix.tx and matrix.ty properties.
   */
  ty: number
}

// Instance
declare class Instance extends Element {
  /**
   * A string that represents the type of instance. Possible values are "symbol", "bitmap", "embedded video", "linked video", "video", and "compiled clip".
   */
  readonly instanceType: string
  /**
   * A library item used to instantiate this instance. You can change this property only to another library item of the same type (that is, you cannot set a symbol instance to refer to a bitmap).
   */
  libraryItem: Library
}

// BitmapInstance
declare interface BitMap {
  width: number
  height: number
  depth: number
  bits: number[]
  cTab?: string[]
}

/**
 * The BitmapInstance object is a subclass of the Instance object and represents a bitmap in a frame (see Instance object).
 */
declare class BitmapInstance extends Instance {
  /**
   * Lets you create bitmap effects by getting the bits out of the bitmap, manipulating them, and then returning them to Flash.
   * @returns An object that contains width, height, depth, bits, and, if the bitmap has a color table, cTab properties. The bits element is an array of bytes. The cTab element is an array of color values of the form "#RRGGBB". The length of the array is the length of the color table. The byte array is meaningful only when referenced by a DLL or shared library. You typically use it only when creating an extensible tool or effect. For information on creating DLLs for use with Flash JavaScript.
   */
  getBits(): BitMap
  /**
   * Sets the bits of an existing bitmap element. This lets you create bitmap effects by getting the bits out of the bitmap, manipulating them, and then returning the bitmap to Flash.
   * @param bitmap An object that contains height, width, depth, bits, and cTab properties. The height, width, and depth propertiesare integers. The bits property is a byte array. The cTab property is required only for bitmaps with a bit depth of 8 or less and is a string that represents a color value in the form "#RRGGBB". Note: The byte array is meaningful only when referenced by an external library. You typically use it only when creating an extensible tool or effect.
   */
  setBits(bitmap: BitMap): void
  /**
   * An integer that represents the width of the bitmap—that is, the number of pixels in the horizontal dimension.
   */
  readonly hPixels: number
  /**
   * An integer that represents the height of the bitmap—that is, the number of pixels in the vertical dimension.
   */
  readonly vPixels: number
}

/**
 * The CompiledClipInstance object is a subclass of the Instance object. It is essentially an instance of a movie clip that has been converted to a compiled clip library item (see Instance object).
 */
declare class CompiledClipInstance extends Instance {
  /**
   * A string that is equivalent to the Name field in the Accessibility panel. Screen readers identify objects by reading the name aloud.
   */
  accName: string
  /**
   * A string that specifies the matte color when Opaque is selected. This is a string in hexadecimal #rrggbb format or an integer containing the value.
   */
  backgroundColor: string | number
  /**
   * A string that is equivalent to the Description field in the Accessibility panel. The description is read by the screen reader.
   */
  description: string
  /**
   * A string that specifies the blend mode. Valid blend modes are: normal, layer, darken, multiply, lighten, screen, overlay, hardlight, add, subtract, difference, invert, alpha, and erase.
   */
  blendMode: string
  /**
   * An int that contains the value set in the Color Effect Property Inspector for brightness when colorMode == 'brightness'. Specify a percentage between -100 and 100. Returns an error if colorMode is a different setting.
   */
  readonly brightness: number
  /**
   * A boolean that indicates whether to cache bitmaps. (Equivalent to Use runtime bitmap caching in the Property Inspector). The default is false.
   */
  cacheAsBitmap: boolean
  /**
   * An int that reduces or increases the tint and alpha values by a constant amount. This value is added to the current value. This setting is most useful if used in conjunction with colorAlphaPercent. Valid values are -255 to 255. This setting is the same as selecting Color > Advanced in the Instance Property Inspector and adjusting the controls on the right of the dialog.
   */
  colorAlphaAmount: number
  /**
   * An int that reduces or increases the tint and alpha values by a specified percentage. The current values are multiplied by this percentage. Valid values are -100 to 100. This setting is the same as selecting Color > Advanced in the Instance Property Inspector and adjusting the controls on the left of the dialog.
   */
  colorAlphaPercent: number
  /**
   * An int that either reduces or increases the blue tint by a constant amount. This value is added to the current value. Valid values are -255 to 255. This setting is the same as selecting Color > Advanced in the Instance Property Inspector.
   */
  colorBlueAmount: number
  /**
   * An int that reduces or increases the blue tint values by a specified percentage. The current values are multiplied by this percentage. Valid values are -100 to 100. This setting is the same as selecting Color > Advanced in the Instance Property Inspector.
   */
  colorBluePercent: number
  /**
   * An int that either reduces or increases the green tint by a constant amount. This value is added to the current value. Valid values are -255 to 255. This setting is the same as selecting Color > Advanced in the Instance Property Inspector.
   */
  colorGreenAmount: number
  /**
   * An int that reduces or increases the green tint values by a specified percentage. The current values are multiplied by this percentage. Valid values are -100 to 100. This setting is the same as selecting Color > Advanced in the Instance Property Inspector.
   */
  colorGreenPercent: number
  /**
   * A string that specifies the color mode, as identified in the Symbol Properties dialog. Valid values are “none”, “brightness”, “tint”, “alpha”, and “advanced”.
   */
  colorMode: string
  /**
   * An int that either reduces or increases the red tint by a constant amount. This value is added to the current value. Valid values are -255 to 255. This setting is the same as selecting Color > Advanced in the Instance Property Inspector.
   */
  colorRedAmount: number
  /**
   * An int that reduces or increases the red tint values by a specified percentage. The current values are multiplied by this percentage. Valid values are -100 to 100. This setting is the same as selecting Color > Advanced in the Instance Property Inspector.
   */
  colorRedPercent: number
  /**
   * An array of Filter objects. The properties of Filter object in the filters array can be read but cannot be written directly by accessing the filters array. To set the properties of the filter objects in the filters array, first retrieve the array, set the properties, set it back to the filters array.
   */
  filters: Filter[]
  /**
   * A Boolean value that enables and disables the children of the object to be accessible. This is equivalent to the inverse logic of the Make Child Objects Accessible setting in the Accessibility panel. If forceSimple is true, it is the same as the Make Child Objects Accessible option being unchecked. If forceSimple is false, it is the same as the Make Child Object Accessible option being checked.
   */
  forceSimple: boolean
  /**
   * A string that is equivalent to the Shortcut field in the Accessibility panel. The shortcut is read by the screen reader. This property is not available for dynamic text fields.
   */
  shortcut: string
  /**
   * A Boolean value that enables or disables the accessibility of the object; equivalent to the inverse logic of Make Object Accessible setting in the Accessibility panel. That is, if silent is true, then Make Object Accessible is unchecked. If silent is false, then Make Object Accessible is checked.
   */
  silent: boolean
  /**
   * An integer that is equivalent to the Tab Index field in the Accessibility panel. Creates a tab order in which objects are accessed when the user presses the Tab key.
   */
  tabIndex: number
  /**
   * A Color object that, when the Color Effect Property Inspector is using style tint (colorMode == 'tint'), returns the color applied to the tint. Otherwise, using this property results in an error.
   */
  readonly tintColor: string | number
  /**
   * A string that, when the Color Effect Property Inspector is using style tint (colorMode == 'tint'), returns the tint percentage from -100 to 100. Otherwise, using this property results in an error.
   */
  readonly tintPercent: string
  /**
   * A boolean that sets the background color:
   * • true - Use 32-bit with alpha.
   * • false - Use the background color.
   */
  useBackgroundColor: boolean
  /**
   * A boolean that sets visibility. Equivalent to the visible checkbox in the Display section of the Property Inspector for symbols.
   */
  visible: boolean
}

declare class ComponentInstance extends SymbolInstance {
  /**
   * An array of ActionScript 2.0 properties that are accessible from the component Property inspector.
   */
  readonly parameters: Parameter[]
}

/**
 * The Parameter object type is accessed from the componentInstance.parameters array (which corresponds to the component Property inspector in the authoring tool).
 */
declare class Parameter {
  /**
   * A string that specifies the category property for the screen parameter or componentInstance parameter. This property provides an alternative way of presenting a list of parameters. This functionality is not available through the Flash user interface.
   */
  category: string
  /**
   * The value of the selected list item. This property is valid only if parameter.valueType is "List".
   */
  listIndex: number
  /**
   * A string that specifies the name of the parameter.
   */
  readonly name: string
  /**
   * Corresponds to the Value field in the Parameters tab of the Component inspector, the Parameters tab of the Property inspector, or the screen Property inspector. The type of the value property is determined by the valueType property for the parameter (see parameter.valueType).
   */
  value: any
  /**
   * A string that indicates the type of the screen or component parameter. The type can be one of the following values: "Default", "Array", "Object", "List", "String", "Number", "Boolean", "Font Name", "Color", "Collection", "Web Service URL", or "Web Service Operation".
   */
  readonly valueType: string
  /**
   * Specifies where the parameter is displayed. If the value of this property is 0 (nonverbose), the parameter is displayed only in the Component inspector. If it is 1 (verbose), the parameter is displayed in the Component inspector and in the Parameters tab of the Property inspector.
   */
  verbose: string
  /**
   * Inserts an item in an object or array. If a parameter is an object or array, the value property is an array.
   * @param index A zero-based integer index that indicates where the item will be inserted in the object or array. If the index is 0, the item is inserted at the beginning. If the index is greater than the list size, the new item is inserted at the end.
   * @param name A string that specifies the name of the item to insert. This is a required parameter for object parameters.
   * @param value A string that specifies the value of the item to insert.
   * @param type A string that specifies the type of item to insert.
   */
  insertItem(index: number, name: string, value: string, type: string): void
  /**
   * Removes an element of the object or array type of a screen or component parameter.
   * @param index The zero-based integer index of the item to be removed from the screen or component property.
   */
  removeItem(index: number): void
}

/**
 * SymbolInstance is a subclass of the Instance object and represents a symbol in a frame (see Instance object).
 */
declare class SymbolInstance extends Instance {
  /**
   * A string that is equivalent to the Name field in the Accessibility panel. Screen readers identify objects by reading the name aloud. This property is not available for graphic symbols.
   */
  accName: string
  /**
   * A string that specifies the matte color when 24 bit mode is selected for the instance. This is a string in hexadecimal #rrggbb format or an integer containing the value.
   */
  backgroundColor: string | number
  /**
   * A string that sets the display type for the symbol.
   * Acceptable values include:
   * •“none”
   * •“cache” - sets the symbol to be cached as a bitmap by Flash Player at runtime.
   * •“export” - sets the symbol to be exported as a bitmap when the SWF is compiled.
   * The older “symbolInstance.cacheAsBitmap” on page 472 property is similar to this property, but it offers fewer choices since it's a boolean. In the future, the cacheAsBitmap property may be deprecated, so users should switch to this new property. The true/false options in the boolean cacheAsBitmap property are the same as the "cache" / "none" values for this new property.
   */
  bitmapRenderMode: string
  /**
   * A string that specifies the blending mode to be applied to a movie clip symbol. Acceptable values are "normal", "layer", "multiply", "screen", "overlay", "hardlight", "lighten", "darken", "difference", "add", "subtract", "invert", "alpha", and "erase".
   */
  blendMode: string
  /**
   * Returns the value set in the color effect Property Inspector for brightness (percentage between -100 and 100) when colorMode == 'brightness';. Error if colorMode is a different setting.
   */
  readonly brightness: number
  /**
   * A string that, for button symbols only, sets the same property as the pop-up menu for Track As Button or Track As Menu Item in the Property inspector. For other types of symbols, this property is ignored. Acceptable values are "button" or "menu".
   */
  buttonTracking: string
  /**
   * A Boolean value that specifies whether run-time bitmap caching is enabled.
   * Note: Starting w/ Flash Professional CS5.5, users should switch to using the “symbolInstance.bitmapRenderMode” on page 470 property instead of this property.
   */
  cacheAsBitmap: boolean
  /**
   * An integer that is part of the color transformation for the instance, specifying the Advanced Effect Alpha settings. This property is equivalent to using the Color > Advanced setting in the Property inspector and adjusting the controls on the right of the dialog box. This value either reduces or increases the tint and alpha values by a constant amount. This value is added to the current value. This property is most useful if used with symbolInstance.colorAlphaPercent. Allowable values are from -255 to 255.
   */
  colorAlphaAmount: number
  /**
   * An integer that specifies part of the color transformation for the instance. This property is equivalent to using the Color > Advanced setting in the instance Property inspector (the percentage controls on the left of the dialog box). This value changes the tint and alpha values to a specified percentage. Allowable values are from -100 to 100. See also symbolInstance.colorAlphaAmount.
   */
  colorAlphaPercent: number
  /**
   * An integer that is part of the color transformation for the instance. This property is equivalent to using the Color > Advanced setting in the instance Property inspector. Allowable values are from -255 to 255.
   */
  colorBlueAmount: number
  /**
   * An integer that is part of the color transformation for the instance. This property is equivalent to using the Color > Advanced setting in the instance Property inspector (the percentage controls on the left of the dialog box). This value sets the blue values to a specified percentage. Allowable values are from -100 to 100.
   */
  colorBluePercent: number
  /**
   * An integer that is part of the color transformation for the instance. This property is equivalent to using the Color > Advanced setting in the instance Property inspector. Allowable values are from -255 to 255.
   */
  colorGreenAmount: number
  /**
   * Part of the color transformation for the instance. This property is equivalent to using the Color > Advanced setting in the instance Property inspector (the percentage controls on the left of the dialog box). This value sets the green values by a specified percentage. Allowable values are from -100 to 100.
   */
  colorGreenPercent: number
  /**
   * A string that specifies the color mode as identified in the symbol Property inspector Color pop-up menu. Acceptable values are "none", "brightness", "tint", "alpha", and "advanced".
   */
  colorMode: string
  /**
   * An integer that is part of the color transformation for the instance. This property is equivalent to using the Color > Advanced setting in the instance Property inspector. Allowable values are from -255 to 255.
   */
  colorRedAmount: number
  /**
   * art of the color transformation for the instance. This property is equivalent to using the Color > Advanced setting in the instance Property inspector (the percentage controls on the left of the dialog box). This value sets the red values to a specified percentage. Allowable values are from -100 to 100.
   */
  colorRedPercent: number
  /**
   * A string that is equivalent to the Description field in the Accessibility panel. The description is read by the screen reader. This property is not available for graphic symbols.
   */
  description: string
  /**
   * An array of Filter objects (see Filter object). To modify filter properties, you don’t write to this array directly. Instead, retrieve the array, set the individual properties, and then set the array to reflect the new properties.
   */
  filters: Filter[]
  /**
   * A zero-based integer that specifies the first frame to appear in the timeline of the graphic. This property applies only to graphic symbols and sets the same property as the First field in the Property inspector. For other types of symbols, this property is undefined.
   */
  firstFrame: number
  /**
   * A Boolean value that enables and disables the accessibility of the object’s children. This property is equivalent to the inverse logic of the Make Child Objects Accessible setting in the Accessibility panel. For example, if forceSimple is true , it is the same as the Make Child Object Accessible option being unchecked. If forceSimple is false, it is the same as the Make Child Object Accessible option being checked.
   * This property is available only for MovieClip objects.
   */
  forceSimple: boolean
  /**
   * A boolean value that indicates whether the symbol instance contains a 3D matrix (transform).
   */
  readonly is3D: boolean
  /**
   * A string that, for graphic symbols, sets the same property as the Loop pop-up menu in the Property inspector. For other types of symbols, this property is undefined. Acceptable values are "loop", "play once", and "single frame" to set the graphic’s animation accordingly.
   */
  loop: string
  /**
   * A string that is equivalent to the shortcut key associated with the symbol. This property is equivalent to the Shortcut field in the Accessibility panel. This key is read by the screen readers. This property is not available for graphic symbols.
   */
  shortcut: string
  /**
   * A Boolean value that enables or disables the accessibility of the object. This property is equivalent to the inverse logic of the Make Object Accessible setting in the Accessibility panel. For example, if silent is true, it is the same as the Make Object Accessible option being unchecked. If silent is false, it is the same as the Make Object Accessible option being checked.
   * This property is not available for graphic objects.
   */
  silent: boolean
  /**
   * A string that specifies the type of symbol. This property is equivalent to the value for Behavior in the Create New Symbol and Convert To Symbol dialog boxes. Acceptable values are "button", "movie clip", and "graphic".
   */
  symbolType: string
  /**
   * An integer that is equivalent to the Tab index field in the Accessibility panel. Creates a tab order in which objects are accessed when the user presses the Tab key. This property is not available for graphic symbols.
   */
  tabIndex: number
  /**
   * When the Color Effect Property Inspector is using style tint (colorMode == 'tint'), return the color applied to the tint. Otherwise using this property results in an error.
   */
  tintColor: string | number
  /**
   * When the Color Effect Property Inspector is using style tint (colorMode == 'tint'), then return the tint percentage from -100 to 100. Otherwise using this property results in an error.
   */
  tintPercent: number
  /**
   * A boolean value that indicates whether to use 24 bit mode (true) or 32 bit mode with alpha (false) for the instance. If true, the backgroundColor specified for the instance is used.
   */
  useBackgroundColor: boolean
  /**
   * A boolean value that sets the Visible property of an object to on (true) or off (false).
   */
  visible: boolean
}

/**
 * The Text object represents a single text item in a document. All properties of the text pertain to the entire text block.
 * To set properties of a text run within the text field, see the Property summary for the TextAttrs object. To change properties of a selection within a text field, you can use document.setElementTextAttr() and specify a range of text, or use the current selection.
 * To set generic properties of the selected text field, use document.setElementProperty(). The following example sets the x value of the selected text field's registration point to 50:
 * fl.getDocumentDOM().setElementProperty("x", 50);
 */
declare class Text extends Element {
  /**
   * A string that is equivalent to the Name field in the Accessibility panel. Screen readers identify objects by reading the name aloud. This property cannot be used with dynamic text.
   */
  accName: string
  /**
   * A float value that specifies the anti-aliasing sharpness of the text. This property controls how crisply the text is drawn; higher values specify sharper (or crisper) text. A value of 0 specifies normal sharpness. This property is available only if text.fontRenderingMode is set to customThicknessSharpness.
   */
  antiAliasSharpness: number
  /**
   * A float value that specifies the anti-aliasing thickness of the text. This property controls how thickly the text is drawn, with higher values specifying thicker text. A value of 0 specifies normal thickness. This property is available only if text.fontRenderingMode is set to customThicknessSharpness.
   */
  antiAliasThickness: number
  /**
   * A Boolean value. For static text fields, a value of true causes the bounding width to expand to show all text. For dynamic or input text fields, a value of true causes the bounding width and height to expand to show all text.
   */
  autoExpand: boolean
  /**
   * A Boolean value. A value of true causes Flash to show a border around text.
   */
  border: boolean
  /**
   * A string that is equivalent to the Description field in the Accessibility panel. The description is read by the screen reader.
   */
  description: string
  /**
   * A string that specifies characters to embed. This is equivalent to entering text in the Character Embedding dialog box.
   * This property works only with dynamic or input text; it generates a warning if used with other text types.
   * Note: Beginning in Flash Professional CS5, font embedding is controlled at the document level instead of the text object level. Use the “fontItem.embeddedCharacters” on page 310 property instead of the text.embeddedCharacters property.
   */
  embeddedCharacters: string
  /**
   * A string that consists of delimited integers that correspond to the items that can be selected in the Character Embedding dialog box. This property works only with dynamic or input text; it is ignored if used with static text.
   * This property corresponds to the XML file in the Configuration/Font Embedding folder.
   * Note: Beginning in Flash Professional CS5, font embedding is controlled at the document level instead of the text object level. Use the “fontItem.embedRanges” on page 311 property instead of the text.embedRanges property.
   */
  embedRanges: string
  /**
   * A Boolean value that specifies whether to enable the embedding of variant glyphs (true) or not (false). This property works only with dynamic or input text; it is ignored if used with static text. The default value is false.
   * Note: Beginning in Flash Professional CS5, font embedding is controlled at the document level instead of the text object level. Use the “fontItem.embedVariantGlyphs” on page 311 property instead of the text.embedVariantGlyphs property. In Flash Professional CS5, the text.embedVariantGlyphs property no longer has any effect because Flash always embeds variant glyphs for TLF text and never embeds them for Classic text.
   */
  embedVariantGlyphs: boolean
  /**
   * An array of filters applied to the text element. To modify filter properties, you don’t write to this array directly. Instead, retrieve the array, set the individual properties, and then set the array to reflect the new properties.
   */
  filters: Filter[]
  /**
   * A string that specifies the rendering mode for the text. This property affects how the text is displayed both on the Stage and in Flash Player. Acceptable values are described below:
   * device => Renders the text with device fonts.
   * bitmap => Renders aliased text as a bitmap, or as a pixel font would.
   * standard => Renders text using the standard anti-aliasing method used by Flash MX 2004. This is the best setting to use for animated, very large, or skewed text.
   * advanced => Renders text using the advanced anti-aliasing font rendering technology implemented in Flash 8, which produces better anti-aliasing and improves readability, especially for small text.
   * customThicknessSharpness => Lets you specify custom settings for the sharpness and thickness of the text when using the advanced anti-aliasing font rendering technology implemented in Flash 8.
   */
  fontRenderingMode: string
  /**
   * An integer that represents the number of characters in the Text object.
   */
  readonly length: number
  /**
   * A string that sets the line type. Acceptable values are "single line", "multiline", "multiline no wrap", "password".
   */
  lineType: string
  /**
   * An integer that specifies the maximum number of characters the user can enter in this Text object.
   * Note: This property works only with input text; if used with other text types, the property generates a warning.
   */
  maxCharacters: number
  /**
   * A string that specifies the orientation of the text field. Acceptable values are "horizontal", "vertical left to right" , and "vertical right to left".
   * This property works only with static text; it generates a warning if used with other text types.
   */
  orientation: string
  /**
   * A Boolean value. If the value is true, Flash draws the text as HTML and interprets embedded HTML tags. This property works only with dynamic or input text; it generates a warning if used with other text types.
   */
  renderAsHTML: boolean
  /**
   * A Boolean value. If the value is true, the text can be scrolled.
   * This property works only with dynamic or input text; it generates a warning if used with static text.
   */
  scrollable: boolean
  /**
   * A Boolean value. If the value is true, the text can be selected.
   * Input text is always selectable. Flash generates a warning when this property is set to false and used with input text.
   */
  selectable: boolean
  /**
   * A zero-based integer that specifies the end of a text subselection. For more information, see text.selectionStart.
   */
  selectionEnd: number
  /**
   * A zero-based integer that specifies the beginning of a text subselection. You can use this property with text.selectionEnd to select a range of characters. Characters up to, but not including, text.selectionEnd are selected. See text.selectionEnd.
   * •If there is an insertion point or no selection, text.selectionEnd is equal to text.selectionStart.
   * •If text.selectionStart is set to a value greater than text.selectionEnd, text.selectionEnd is set to text.selectionStart, and no text is selected.
   */
  selectionStart: number
  /**
   * A string that is equivalent to the Shortcut field in the Accessibility panel. The shortcut is read by the screen reader. This property cannot be used with dynamic text.
   */
  shortcut: string
  /**
   * A Boolean value that specifies whether the object is accessible. This is equivalent to the inverse logic of the Make Object Accessible setting in the Accessibility panel. That is, if silent is true, Make Object Accessible is deselected. If it is false, Make Object Accessible is selected.
   */
  silent: boolean
  /**
   * An integer that is equivalent to the Tab Index field in the Accessibility panel. This value lets you determine the order in which objects are accessed when the user presses the Tab key.
   */
  tabIndex: number
  /**
   * An array of TextRun objects (see TextRun object).
   */
  readonly textRuns: TextRun[]
  /**
   * A string that specifies the type of text field. Acceptable values are "static", "dynamic", and "input".
   */
  textType: string
  /**
   * A Boolean value. A value of true causes Flash to draw text using device fonts.
   */
  useDeviceFonts: boolean
  /**
   * A string that contains the name of the variable associated with the Text object. This property works only with dynamic or input text; it generates a warning if used with other text types.
   * This property is supported only in ActionScript 1.0 and ActionScript 2.0.
   */
  variableName: string
  /**
   * Retrieves the attribute specified by the attrName parameter for the text identified by the optional startIndex and endIndex parameters. If the attribute is not consistent for the specified range, Flash returns undefined. If you omit the optional parameters startIndex and endIndex, the method uses the entire text range. If you specify only startIndex, the range used is a single character at that position. If you specify both startIndex and endIndex, the range starts from startIndex and goes up to, but does not include, endIndex.
   * @returns The value of the attribute specified in the attrName parameter.
   * @param attrName A string that specifies the name of the TextAttrs object property to be returned. For a list of possible values for attrName, see the Property summary for the TextAttrs object.
   * @param startIndex An integer that is the index of first character. This parameter is optional.
   * @param endIndex An integer that specifies the end of the range of text, which starts with startIndex and goes up to, but does not include, endIndex. This parameter is optional.
   */
  getTextAttr(attrName: string, startIndex?: number, endIndex?: number): any | undefined
  /**
   * Retrieves the specified range of text. If you omit the optional parameters startIndex and endIndex, the whole text string is returned. If you specify only startIndex, the method returns the string starting at the index location and ending at the end of the field. If you specify both startIndex and endIndex, the method returns the string starting from startIndex and goes up to, but does not include, endIndex.
   * @returns A string of the text in the specified range.
   * @param startIndex An integer that specifies the index (zero-based) of the first character. This parameter is optional.
   * @param endIndex An integer that specifies the end of the range of text, which starts from startIndex and goes up to, but does not include, endIndex. This parameter is optional.
   */
  getTextString(startIndex?: number, endIndex?: number): string
  /**
   * Sets the attribute specified by the attrName parameter associated with the text identified by startIndex and endIndex to the value specified by attrValue. This method can be used to change attributes of text that might span TextRun elements (see TextRun object), or that are portions of existing TextRun elements. Using it may change the position and number of TextRun elements within this object’s text.textRuns array (see text.textRuns).
   * If you omit the optional parameters, the method uses the entire Text object’s character range. If you specify only startIndex, the range is a single character at that position. If you specify both startIndex and endIndex, the range starts from startIndex and goes up to, but does not include, the character located at endIndex.
   * @param attrName A string that specifies the name of the TextAttrs object property to change.
   * @param attrValue The value for the TextAttrs object property.
   * For a list of possible values for attrName and attrValue, see the Property summary for the TextAttrs object.
   * @param startIndex An integer that is the index (zero-based) of the first character in the array. This parameter is optional.
   * @param endIndex An integer that specifies the index of the end point in the selected text string, which starts at startIndex and goes up to, but does not include, endIndex. This parameter is optional.
   */
  setTextAttr(attrName: string, attrValue: any, startIndex?: number, endIndex?: number): void
  /**
   * Changes the text string within this Text object. If you omit the optional parameters, the whole Text object is replaced. If you specify only startIndex, the specified string is inserted at the startIndex position. If you specify both startIndex and endIndex, the specified string replaces the segment of text starting from startIndex up to, but not including, endIndex.
   * @param text A string that consists of the characters to be inserted into this Text object.
   * @param startIndex An integer that specifies the index (zero-based) of the character in the string where the text will be inserted. This parameter is optional.
   * @param endIndex An integer that specifies the index of the end point in the selected text string. The new text overwrites the text from startIndex up to, but not including, endIndex. This parameter is optional.
   */
  setTextString(text: string, startIndex?: number, endIndex?: number): void
}

/**
 * The TextRun object represents a run of characters that have attributes that match all of the properties in the TextAttrs object. This object is a property of the Text object (text.textRuns).
 */
declare class TextRun {
  /**
   * The text contained in the TextRun object.
   */
  characters: string
  /**
   * The TextAttrs object containing the attributes of the run of text.
   */
  textAttrs: TextAttrs
}

/**
 * The TextAttrs object contains all the properties of text that can be applied to a subselection. This object is a property of the TextRun object (textRun.textAttrs).
 */
declare class TextAttrs {
  /**
   * A Boolean value that specifies that Flash should draw the text using a method optimized for increasing the legibility of small text.
   */
  aliasText: boolean
  /**
   * A string that specifies paragraph justification. Acceptable values are "left" , "center", "right", and "justify".
   */
  alignment: string
  /**
   * A Boolean value that determines whether Flash uses (true) or ignores (false) pair kerning information in the font(s) when it kerns the text.
   */
  autoKern: boolean
  /**
   * Boolean value. A value of true causes text to appear with the bold version of the font.
   */
  bold: boolean
  /**
   * A string that determines the baseline for the text. Acceptable values are "normal", "subscript", and "superscript". This property applies only to static text.
   */
  characterPosition: string
  /**
   * An integer that represents the space between characters. Acceptable values are -60 through 60.
   * This property applies only to static text; it generates a warning if used with other text types.
   */
  characterSpacing: number
  /**
   * A string that represents the name of the font, such as "Arial".
   */
  face: string
  /**
   * The color of the fill, in one of the following formats:
   * •A string in the format "#RRGGBB" or "#RRGGBBAA"
   * •A hexadecimal number in the format 0xRRGGBB
   * •An integer that represents the decimal equivalent of a hexadecimal number
   */
  fillColor: string | number
  /**
   * An integer that specifies paragraph indentation. Acceptable values are -720 through 720.
   */
  indent: number
  /**
   * A Boolean value. A value of true causes text to appear with the italic version of the font.
   */
  italic: boolean
  /**
   * An integer that specifies the paragraph’s left margin. Acceptable values are 0 through 720.
   */
  leftMargin: number
  /**
   * An integer that represents the space between characters. Acceptable values are -60 through 60.
   * This property applies only to static text; it generates a warning if used with other text types.
   */
  letterSpacing: number
  /**
   * An integer that specifies the line spacing (leading) of the paragraph. Acceptable values are -360 through 720.
   */
  lineSpacing: number
  /**
   * An integer that specifies the paragraph’s right margin. Acceptable values are 0 through 720.
   */
  rightMargin: number
  /**
   * A Boolean value. A value of true causes Flash to rotate the characters of the text 90º. The default value is false. This property applies only to static text with a vertical orientation; it generates a warning if used with other text types.
   */
  rotation: boolean
  /**
   * An integer that specifies the size of the font.
   */
  size: number
  /**
   * A string that represents the target property of the text field. This property works only with static text.
   */
  target: string
  /**
   * A string that represents the URL property of the text field. This property works only with static text.
   */
  url: string
}

/**
 * The Shape object is a subclass of the Element object. The Shape object provides more precise control than the drawing APIs when manipulating or creating geometry on the Stage. This control is necessary so that scripts can create useful effects and other drawing commands (see Element object).
 * All Shape methods and properties that change a shape or any of its subordinate parts must be placed between shape.beginEdit() and shape.endEdit() calls to function correctly.
 */
declare class Shape extends Element {
  /**
   * An array of Contour objects for the shape (see Contour object).
   */
  readonly contours: Contour[]
  /**
   * An array of Edge objects (see Edge object).
   */
  readonly edges: Edge[]
  /**
   * If true, the shape is a drawing object.
   */
  readonly isDrawingObject: boolean
  /**
   * If true, the shape is floating above the parent frame’s (or group’s) shape. Also, if true, this type of shape will have it's own matrix, similar to a drawing object.
   */
  readonly isFloating: boolean
  /**
   * If true, the shape is a group. A group can contain different types of elements, such as text elements and symbols. However, the group itself is considered a shape, and you can use the shape.isGroup property no matter what types of elements the group contains.
   */
  readonly isGroup: boolean
  /**
   * If true, the shape is a primitive Oval object (was created using the Oval Primitive tool).
   */
  readonly isOvalObject: boolean
  /**
   * If true, the shape is a primitive Rectangle object (was created using the Rectangle Primitive tool).
   */
  readonly isRectangleObject: boolean
  /**
   * An array of objects in the currently selected group. This property is available only if the value of shape.isGroup is true. Raw shapes in the group are not included in the shape.members array.
   * For example, if the group contains three drawing objects and three raw shapes, the shape.members array contains three entries, one for each of the drawing objects. If the group contains only raw shapes, the array is empty.
   */
  members: any[]
  /**
   * The number of cubic segments in the shape.
   */
  readonly numCubicSegments: number
  /**
   * An array of Vertex objects (see Vertex object).
   */
  readonly vertices: Vertex[]
  /**
   * Returns an array of points that define a cubic curve.
   * @returns An array of points that define a cubic curve for the Edge object that corresponds to the specified cubicSegmentIndex (see edge.cubicSegmentIndex).
   * @param cubicSegmentIndex An integer that specifies the cubic segment for which points are returned.
   */
  getCubicSegmentPoints(cubicSegmentIndex: number): Point[]
  /**
   * Defines the start of an edit session. You must use this method before issuing any commands that change the Shape object or any of its subordinate parts.
   */
  beginEdit(): void
  /**
   * Deletes the specified edge. You must call shape.beginEdit() before using this method.
   * @param index A zero-based index that specifies the edge to delete from the shape.edges array. This method changes the length of the shape.edges array.
   */
  deleteEdge(index: number): void
  /**
   * Defines the end of an edit session for the shape. All changes made to the Shape object or any of its subordinate parts will be applied to the shape. You must use this method after issuing any commands that change the Shape object or any of its subordinate parts.
   */
  endEdit(): void
}

/**
 * The Oval object is a shape that is drawn using the Oval Primitive tool. To determine if an item is an Oval object, use shape.isOvalObject.
 */
declare class Oval extends Shape {
  /**
   * A Boolean value that specifies whether the Close Path check box in the Property inspector is selected. If the start angle and end angle values for the object are the same, setting this property has no effect until the values change.
   * To set this value, use document.setOvalObjectProperty().
   */
  readonly closePath: boolean
  /**
   * A float value that specifies the end angle of the Oval object. Acceptable values are from 0 to 360.
   * To set this value, use document.setOvalObjectProperty().
   */
  readonly endAngle: number
  /**
   * A float value that specifies the inner radius of the Oval object as a percentage. Acceptable values are from 0 to 99.
   * To set this value, use document.setOvalObjectProperty().
   */
  readonly innerRadius: number
  /**
   * A float value that specifies the start angle of the Oval object. Acceptable values are from 0 to 360.
   * To set this value, use document.setOvalObjectProperty().
   */
  readonly startAngle: number
}

/**
 * The Rectangle object is a shape that is drawn using the Rectangle Primitive tool. To determine if an item is a Rectangle object, use shape.isRectangleObject.
 */
declare class Rectangle extends Shape {
  /**
   * A float value that sets the radius of the bottom-left corner of the Rectangle object. If RectangleObject.lockFlag is true, trying to set this value has no effect.
   * To set this value, use document.setRectangleObjectProperty().
   */
  readonly bottomLeftRadius: number
  /**
   * A float value that sets the radius of the bottom-right corner of the Rectangle object. If RectangleObject.lockFlag is true, trying to set this value has no effect.
   * To set this value, use document.setRectangleObjectProperty().
   */
  readonly bottomRightRadius: number
  /**
   * A Boolean value that determines whether different corners of the rectangle can have different radius values.If this value is true, all corners have the value assigned to RectangleObject.topLeftRadius. If it is false, each corner radius can be set independently.
   * To set this value, use document.setRectangleObjectProperty().
   */
  readonly lockFlag: number
  /**
   * A float value that sets the radius of all corners of the rectangle (if RectangleObject.lockFlag is true) or that sets only the radius of the top-left corner (if RectangleObject.lockFlag is false).
   * To set this value, use document.setRectangleObjectProperty().
   */
  readonly topLeftRadius: number
  /**
   * A float value that sets the radius of the top-right corner of the Rectangle object. If RectangleObject.lockFlag is true, trying to set this value has no effect.
   * To set this value, use document.setRectangleObjectProperty().
   */
  readonly topRightRadius: number
}

/**
 * A Contour object represents a closed path of half edges on the boundary of a shape.
 */
declare class Contour {
  /**
   * A Fill object.
   */
  fill: Fill
  /**
   * The value is true if the contour encloses an area; false otherwise.
   */
  readonly interior: boolean
  /**
   * An integer indicating the orientation of the contour. The value of the integer is -1 if the orientation is counterclockwise, 1 if it is clockwise, and 0 if it is a contour with no area.
   */
  readonly orientation: number
  /**
   * Returns a HalfEdge object on the contour of the selection.
   * @returns A HalfEdge object
   */
  getHalfEdge(): HalfEdge
}

/**
 * The HalfEdge object is the directed side of the edge of a Shape object. An edge has two half edges. You can transverse the contours of a shape by “walking around” these half edges. For example, starting from a half edge, you can trace all the half edges around a contour of a shape, and return to the original half edge.
 * Half edges are ordered. One half edge represents one side of the edge; the other half edge represents the other side.
 */
declare class HalfEdge {
  /**
   * A unique integer identifier for the HalfEdge object.
   */
  readonly id: number
  /**
   * Gets the Edge object for the HalfEdge object. See Edge object.
   */
  getEdge(): Edge
  /**
   * Gets the next half edge on the current contour.
   * Note: Although half edges have a direction and a sequence order, edges do not.
   */
  getNext(): HalfEdge
  /**
   * Gets the HalfEdge object on the other side of the edge.
   */
  getOppositeHalfEdge(): HalfEdge
  /**
   * Gets the preceding HalfEdge object on the current contour.
   * Note: Although half edges have a direction and a sequence order, edges do not.
   */
  getPrev(): HalfEdge
  /**
   * Gets the Vertex object at the head of the HalfEdge object. See Vertex object.
   */
  getVertex(): Vertex
}

/**
 * The Vertex object is the part of the shape data structure that holds the coordinate data.
 */
declare class Vertex {
  /**
   * The x location of the vertex, in pixels.
   */
  readonly x: number
  /**
   * The y location of the vertex, in pixels.
   */
  readonly y: number
  /**
   * Gets a HalfEdge object that shares this vertex.
   */
  getHalfEdge(): HalfEdge
  /**
   * Sets the location of the vertex. You must call shape.beginEdit() before using this method.
   * @param x A floating-point value that specifies the x coordinate of where the vertex should be positioned, in pixels.
   * @param y A floating-point value that specifies the y coordinate of where the vertex should be positioned, in pixels.
   */
  setLocation(x: number, y: number): void
}

/**
 * The Edge object represents an edge of a shape on the Stage.
 */
declare class Edge {
  /**
   * An integer that specifies the index value of a cubic segment of the edge (see shape.getCubicSegmentPoints()).
   */
  readonly cubicSegmentIndex: number
  /**
   * An integer that represents a unique identifier for the edge.
   */
  readonly id: number
  /**
   * An integer with a value of 0 or 1. A value of 1 indicates that the edge is a straight line. In that case, the middle control point bisects the line joining the two end points.
   */
  readonly isLine: number
  /**
   * A Stroke object;
   */
  stroke: Stroke
  /**
   * Gets a point object set to the location of the specified control point of the edge.
   * @returns The specified control point.
   * @param i An integer that specifies which control point of the edge to return. Specify 0 for the first control point, 1 for the middle control point, or 2 for the end control point. If the edge.isLine property is true, the middle control point is set to the midpoint of the segment joining the beginning and ending control points.
   */
  getControl(i: number): Point
  /**
   * Returns a HalfEdge object.
   * @returns A HalfEdge object.
   * @param index An integer that specifies which half edge to return. The value of index must be either 0 for the first half edge or 1 for the second half edge.
   */
  getHalfEdge(index: number): HalfEdge
  /**
   * Sets the position of the control point of the edge. You must call shape.beginEdit() before using this method. See shape.beginEdit().
   * @param index An integer that specifies which control point to set. Use values 0, 1, or 2 to specify the beginning, middle, and end control points, respectively.
   * @param x A floating-point value that specifies the horizontal location of the control point. If the Stage is in edit or edit-in-place mode, the point coordinate is relative to the edited object. Otherwise, the point coordinate is relative to the Stage.
   * @param y A floating-point value that specifies the vertical location of the control point. If the Stage is in edit or edit-in-place mode, the point coordinate is relative to the edited object. Otherwise, the point coordinate is relative to the Stage.
   */
  setControl(index: number, x: number, y: number): void
  /**
   * Splits the edge into two pieces. You must call shape.beginEdit() before using this method.
   * @param t A floating-point value between 0 and 1 that specifies where to split the edge. A value of 0 represents one end point and a value of 1represents the other. For example, passing a value of 0.5 splits the edge in the middle, which, for a line is exactly in the center. If the edge represents a curve, 0.5 represents the parametric middle of the curve.
   */
  splitEdge(t: number): void
}

/**
 * The drawingLayer object is accessible from JavaScript as a child of the flash object. The drawingLayer object is used for extensible tools when the user wants to temporarily draw while dragging—for example, when creating a selection marquee. You should call drawingLayer.beginFrame() before you call any other drawingLayer methods.
 */
declare class DrawingLayer {
  /**
   * Puts Flash in drawing mode. Drawing mode is used for temporary drawing while the mouse button is pressed. You typically use this method only when creating extensible tools.
   * @param persistentDraw A Boolean value (optional). If set to true, it indicates that the drawing in the last frame remains on the Stage until a new beginDraw() or beginFrame() call is made. (In this context, frame refers to where you start and end drawing; it does not refer to timeline frames.) For example, when users draw a rectangle, they can preview the outline of the shape while dragging the mouse. If you want that preview shape to remain after the user releases the mouse button, set persistentDraw to true.
   */
  beginDraw(persistentDraw?: boolean): void
  /**
   * Erases what was previously drawn using the drawingLayer and prepares for more drawing commands. Should be called after drawingLayer.beginDraw(). Everything drawn between drawingLayer.beginFrame() and an drawingLayer.endFrame() remains on the Stage until you call the next beginFrame() and endFrame(). (In this context, frame refers to where you start and end drawing; it does not refer to timeline frames.) You typically use this method only when creating extensible tools. See drawingLayer.beginDraw().
   */
  beginFrame(): void
  /**
   * Draws a cubic curve from the current pen location using the parameters as the coordinates of the cubic segment. You typically use this method only when creating extensible tools.
   * @param x1Ctrl A floating-point value that is the x location of the first control point.
   * @param y1Ctrl A floating-point value that is the y location of the first control point.
   * @param x2Ctl A floating-point value that is the x position of the middle control point.
   * @param y2Ctl A floating-point value that is the y position of the middle control point.
   * @param xEnd A floating-point value that is the x position of the end control point.
   * @param yEnd A floating-point value that is the y position of the end control point.
   */
  cubicCurveTo(
    x1Ctrl: number,
    y1Ctrl: number,
    x2Ctl: number,
    y2Ctl: number,
    xEnd: number,
    yEnd: number,
  ): void
  /**
   * Draws a quadratic curve segment starting at the current drawing position and ending at a specified point. You typically use this method only when creating extensible tools.
   * @param xCtl A floating-point value that is the x position of the control point.
   * @param yCtl A floating-point value that is the y position of the control point.
   * @param xEnd A floating-point value that is the x position of the end control point.
   * @param yEnd A floating-point value that is the y position of the end control point.
   */
  curveTo(xCtl: number, yCtl: number, xEnd: number, yEnd: number): void
  /**
   * Draws the path specified by the path parameter. You typically use this method only when creating extensible tools.
   * @param path A Path object to draw.
   */
  drawPath(path: Path): void
  /**
   * Exits drawing mode. Drawing mode is used when you want to temporarily draw while the mouse button is pressed. You typically use this method only when creating extensible tools.
   */
  endDraw(): void
  /**
   * Signals the end of a group of drawing commands. A group of drawing commands refers to everything drawn between drawingLayer.beginFrame() and drawingLayer.endFrame(). The next call to drawingLayer.beginFrame() will erase whatever was drawn in this group of drawing commands. You typically use this method only when creating extensible tools.
   */
  endFrame(): void
  /**
   * Draws a line from the current drawing position to the point (x,y). You typically use this method only when creating extensible tools.
   * @param x A floating-point value that is the x coordinate of the end point of the line to draw.
   * @param y A floating-point value that is the y coordinate of the end point of the line to draw.
   */
  lineTo(x: number, y: number): void
  /**
   * Sets the current drawing position. You typically use this method only when creating extensible tools.
   * @param x A floating-point value that specifies the x coordinate of the position at which to start drawing.
   * @param y A floating-point value that specifies the y coordinate of the position at which to start drawing.
   */
  moveTo(x: number, y: number): void
  /**
   * Returns a new Path object. You typically use this method only when creating extensible tools. See Path object.
   */
  newPath(): Path
  /**
   * Sets the color of subsequently drawn data. Applies only to persistent data. To use this method, the parameter passed to drawingLayer.beginDraw() must be set to true. You typically use this method only when creating extensible tools. See drawingLayer.beginDraw().
   * @param color The color of subsequently drawn data, in one of the following formats:
   * •A string in the format "#RRGGBB" or "#RRGGBBAA"
   * •A hexadecimal number in the format 0xRRGGBB
   * •An integer that represents the decimal equivalent of a hexadecimal number
   */
  setColor(color: string | number): void
  /**
   * This method is not available.
   */
  setFill(): void
  /**
   * This method is not available.
   */
  setStroke(): void
}

/**
 * The Path object defines a sequence of line segments (straight, curved, or both), which you typically use when creating extensible tools. The following example shows an instance of a Path object being returned from the flash object:
 * path = fl.drawingLayer.newPath();
 * See also the drawingLayer object.
 */
declare class Path {
  /**
   * An integer representing the number of points in the path. A new path has 0 points.
   */
  readonly nPts: number
  /**
   * Appends a cubic Bézier curve segment to the path.
   * @param xAnchor A floating-point number that specifies the x position of the first control point.
   * @param yAnchor A floating-point number that specifies the y position of the first control point.
   * @param x2 A floating-point number that specifies the x position of the second control point.
   * @param y2 A floating-point number that specifies the y position of the second control point.
   * @param x3 A floating-point number that specifies the x position of the third control point.
   * @param y3 A floating-point number that specifies the y position of the third control point.
   * @param x4 A floating-point number that specifies the x position of the fourth control point.
   * @param y4 A floating-point number that specifies the y position of the fourth control point.
   */
  addCubicCurve(
    xAnchor: number,
    yAnchor: number,
    x2: number,
    y2: number,
    x3: number,
    y3: number,
    x4: number,
    y4: number,
  ): void
  /**
   * Appends a quadratic Bézier segment to the path.
   * @param xAnchor A floating-point number that specifies the x position of the first control point.
   * @param yAnchor A floating-point number that specifies the y position of the first control point.
   * @param x2 A floating-point number that specifies the x position of the second control point.
   * @param y2 A floating-point number that specifies the y position of the second control point.
   * @param x3 A floating-point number that specifies the x position of the third control point.
   * @param y3 A floating-point number that specifies the y position of the third control point.
   */
  addCurve(xAnchor: number, yAnchor: number, x2: number, y2: number, x3: number, y3: number): void
  /**
   * Adds a point to the path.
   * @param x A floating-point number that specifies the x position of the point.
   * @param y A floating-point number that specifies the y position of the point.
   */
  addPoint(x: number, y: number): void
  /**
   * Removes all points from the path.
   */
  clear(): void
  /**
   * Appends a point at the location of the first point of the path and extends the path to that point, which closes the path. If the path has no points, no points are added.
   */
  close(): void
  /**
   * Creates a shape on the Stage by using the current stroke and fill settings. The path is cleared after the shape is created. This method has two optional parameters for suppressing the fill and stroke of the resulting shape object. If you omit these parameters or set them to false, the current values for fill and stroke are used.
   * @param bSuppressFill A Boolean value that, if set to true, suppresses the fill that would be applied to the shape. The default value is false. This parameter is optional.
   * @param bSuppressStroke A Boolean value that, if set to true, suppresses the stroke that would be applied to the shape. The default value is false. This parameter is optional.
   */
  makeShape(bSuppressFill?: boolean, bSuppressStroke?: boolean): void
  /**
   * Starts a new contour in the path.
   */
  newContour(): void
}

/**
 * The Math object is available as a read-only property of the flash object; see fl.Math. This object provides methods that perform common mathematical operations.
 */
declare class _Math {
  /**
   * Performs a matrix concatenation and returns the result.
   * @returns A concatenated object matrix.
   * @params Specify the Matrix objects to be concatenated (see Matrix object). Each parameter must be an object withfields a, b, c, d, tx, and ty.
   */
  concatMatrix(mat1: Matrix, mat2: Matrix): Matrix
  /**
   *
   * @param mat Indicates the Matrix object to invert (see Matrix object). It must have the following fields: a, b, c, d, tx, and ty.
   */
  invertMatrix(mat: Matrix): Matrix
  /**
   * Computes the distance between two points.
   * @returns A floating-point value that represents the distance between the points.
   * @params Specify the points between which distance is measured.
   */
  pointDistance(pt1: Point, pt2: Point): number
  /**
   * Applies a matrix to a point.
   * @returns The transformed point.
   * @param matrix Contains the matrix obejct applied to the point.
   * @param point Contains the point to which the matrix is applied.
   */
  transformPoint(matrix: Matrix, point: Point): Point
}

/**
 * This object represents the Output panel, which displays troubleshooting information such as syntax errors. To access this object, use fl.outputPanel (or flash.outputPanel). See fl.outputPanel.
 */
declare class OutputPanel {
  /**
   * Clears the contents of the Output panel. You can use this method in a batch processing application to clear a list of errors, or to save them incrementally by using this method with outputPanel.save().
   */
  clear(): void
  /**
   * Saves the contents of the Output panel to a local text file, either by overwriting the file or by appending to the file.
   * If fileURI is invalid or unspecified, an error is reported.
   * This method is useful for batch processing. For example, you can create a JSFL file that compiles several components. Any compile errors appear in the Output panel, and you can use this method to save the resulting errors to a text file, which can be automatically parsed by the build system in use.
   * @param fileURI A string, expressed as a file:/// URI, that specifies the local file to contain the contents of the Output panel.
   * @param bAppendToFile An optional Boolean value. If true, it appends the Output panel’s contents to the output file, and if false, the method overwrites the output file if it already exists. The default value is false.
   * @param bUseSystemEncoding An optional Boolean value. If true, it saves the Output panel text using the system encoding; if false, it saves the Output panel text using UTF-8 encoding, with Byte Order Mark characters at the beginning of the text. The default value is false.
   */
  save(fileURI: string, bAppendToFile?: boolean, bUseSystemEncoding?: boolean): void
  /**
   * ends a text string to the Output panel, terminated by a new line, and displays the Output panel if it is not already visible. This method is identical to fl.trace(), and works in the same way as the trace() statement in ActionScript.
   * To send a blank line, use outputPanel.trace("") or outputPanel.trace("\n"). You can use the latter command inline, making \n a part of the message string.
   * @param message A string that contains the text to add to the Output panel.
   */
  trace(message: string): void
}

/**
 * The presetPanel object represents the Motion Presets panel (Window > Motion Presets). It is a property of the flash object (fl.presetPanel).
 */
declare class PresetPanel {
  /**An array of presetItem objects in the Motion Presets panel (see presetItem object). Each item in the array represents either a folder or a preset. */
  items: PresetItem[]
  /**
   * If a single motion tween is currently selected on the Stage, adds that motion to the Motion Presets panel in the specified folder with the specified name. The path specified in namePath must exist in the panel.
   * If a preset matching namePath exists, this method has no effect, and returns false.
   * If you don’t pass a value for namePath, the item is added to the Custom Presets folder with the name “Custom preset n,” where n is incremented each time you add an item in this fashion.
   * @returns A Boolean value of true if the item was successfully added; false otherwise.
   * @param namePath A string that specifies the path and name of the item to add to the Motion Presets panel. This parameter is optional.
   */
  addNewItem(namePath?: string): boolean
  /**
   * Applies the specified or currently selected preset to the currently selected item on the Stage. The item must be a motion tween, a symbol, or an item that can be converted to a symbol. If the item is a motion tween, its current motion is replaced with the selected preset without requesting user confirmation.
   * This method fails in the following situations:
   * •The path you specify as presetPath doesn't exist.
   * •You don’t pass a value for presetPath and no preset is selected.
   * •You don’t pass a value for presetPath and multiple presets are selected.
   * •The selected item on the Stage is not a symbol and can’t be converted to a symbol.
   * @returns A Boolean value of true if the preset is successfully applied, false otherwise.
   * @param presetPath string that specifies the full path and name of the preset to be applied, as it appears in the Motion Presets panel. This parameter is optional; if you don’t pass a value, the currently selected preset is applied.
   */
  applyPreset(presetPath?: string): boolean
  /**
   * Deletes the specified folder and any of its subfolders from the folder tree of the Motion Presets panel. Any presets in the folders are also deleted. You can’t delete folders from the Default Presets folder.
   * If you don’t pass a value for folderPath, any folders that are currently selected are deleted.
   * Note: Folders are deleted without requesting user confirmation, and there is no way to undo this action.
   * @returns A Boolean value of true if the folder or folders are successfully deleted; false otherwise.
   * @param folderPath A string that specifies the folder to delete from the Motion Presets panel. This parameter is optional.
   */
  deleteFolder(folderPath?: string): boolean
  /**
   * Deletes the specified preset from the Motion Presets panel. If you don’t pass a value for namePath, any presets that are currently selected are deleted. You can’t delete items from the Default Presets folder.
   * Note: Items are deleted without requesting user confirmation, and there is no way to undo this action.
   * @returns A Boolean value of true if the item or items are successfully deleted; false otherwise.
   * @param namePath A string that specifies the path and name of the item to delete from the Motion Presets panel. This parameter is optional.
   */
  deleteItem(namePath?: string): boolean
  /**
   * Expands or collapses the currently selected folder or folders in the Motion Presets panel. To expand or collapse folders other than the folders that are currently selected, pass a value for folderPath.
   * @returns A Boolean value of true if the folder or folders are successfully expanded or collapsed; false otherwise.
   * @param bExpand A Boolean value that specifies whether to expand the folder (true) or collapse it (false). This parameter is optional; the default value is true.
   * @param bRecurse A Boolean value that specifies whether to expand or collapse the folder’s subfolders (true) or not (false). This parameter is optional; the default value is false.
   * @param folderPath A string that specifies the path to the folder to expand or collapse. This parameter is optional.
   */
  expandFolder(bExpand?: boolean, bRecurse?: boolean, folderPath?: string): boolean
  /**
   * Exports the currently selected or the specified preset to an XML file. Only presets can be exported; the method fails if you try to export a folder. This method also fails if you try to overwrite a file on disk.
   * If you don’t specify a filename as part of fileURI (that is, if the last character of fileURI is a slash (/)), the exported file is saved with the same name as the preset being exported. If you don’t specify a value for namePath, the currently selected preset is exported. See the example below.
   * @returns A Boolean value of true if the preset was exported successfully; false otherwise.
   * @param fileURI A string, expressed as a file:/// URI, that specifies the path and optionally a filename for the exported file. See “Description,” below, for more information.
   * @param namePath A string that specifies the path and name of the item to select from the Motion Presets panel. This parameter is optional.
   */
  exportItem(fileURI: string, namePath?: string): boolean
  /**
   * Returns an integer that represents the index location of an item in the Motion Presets panel.
   * @returns An integer that represents the index of the specified preset in the presetPanel.items array. If you don’t pass a value for presetName, the index of the currently specified preset is returned. This method returns -1 in the following situations:
   * •You don’t pass a value for presetName and no preset is selected.
   * •You don’t pass a value for presetName and multiple presets are selected.
   * •You pass a value for presetName that doesn't correspond to an item in the panel.
   * @param presetName A string that specifies the name of the preset for which the index value is returned. This parameter is optional.
   */
  findItemIndex(presetName?: string): number
  /**
   * Returns an array of presetItem objects corresponding to the currently selected items in the Motion Presets panel (see presetItem object). Each item in the array represents either a folder or a preset.
   */
  getSelectedItems(): PresetItem[]
  /**
   * Adds a preset to the Motion Presets panel from a specified XML file. The path specified in namePath must exist in the panel.
   * To create XML files that can be imported, use presetPanel.exportItem().
   * If you don’t pass a value for namePath, the imported preset is placed in the Custom Presets folder and given the same name as the imported file (without the XML extension).
   * @returns A Boolean value of true if the file is successfully imported; false otherwise.
   * @param fileURI A string, expressed as a file:/// URI, that specifies the XML file to be imported as a preset in the Motion Presets panel.
   * @param namePath A string that specifies in which folder to place the imported file and what to name it. This parameter is optional.
   */
  importItem(fileURI: string, namePath?: string): boolean
  /**
   * Moves the specified item to the specified folder.
   * If you pass an empty string ("") for folderPath, the items are moved to the Custom Presets folder. If you don’t pass a value for namePath, the currently selected items are moved.
   * You can’t move items to or from the Default Presets folder.
   * @returns A Boolean value of true if the items are successfully moved; false otherwise.
   * @param folderPath A string that specifies the path to the folder in the Motion Presets panel to which the item or items are moved.
   * @param namePath A string that specifies the path and name of the item to move. This parameter is optional.
   */
  moveToFolder(folderPath: string, namePath?: string): boolean
  /**
   * Creates a folder in the folder tree of the Motion Presets panel. You can create only one new folder level with this method. That is, if you pass “Custom Presets/My First Folder/My Second Folder" for folderPath, “Custom Presets/My First Folder“ must exist in the folder tree.
   * If you don’t pass a value for folderPath, a folder named “Untitled folder n” is created at the first level below “Custom Presets,” where n is incremented each time a folder is added in this fashion.
   * @returns A Boolean value of true if the folder is successfully added; false otherwise.
   * @param folderPath A string that specifies where to add a new folder in the Motion Presets panel, and the name of the new folder. This parameter is optional.
   */
  newFolder(folderPath?: string): boolean
  /**
   * Renames the currently selected preset or folder to a specified name. This method succeeds only if a single preset or folder in the Custom Presets folder is selected. This method fails in the following situations:
   * •No item is selected.
   * •Multiple items are selected.
   * •The selected item is in the Default Presets folder.
   * •An item named newName exists in the same location as the selected item.
   * @returns A Boolean value of true if the preset or folder is successfully renamed; false otherwise.
   * @param newName A string that specifies the new name for the preset or folder.
   */
  renameItem(newName: string): boolean
  /**
   * Selects or deselects an item in the Motion Presets panel, optionally replacing any items currently selected.
   * @returns A Boolean value of true if the item was successfully selected or deselected; false otherwise.
   * @param namePath A string that specifies the path and name of the item to select from the Motion Presets panel.
   * @param bReplaceCurrentSelection A Boolean value that specifies whether the specified item replaces any current selection (true) or is added to the current selection (false). This parameter is optional; the default value is true.
   * @param bSelect A Boolean value that specifies whether to select the item (true) or deselect the item (false). This parameter is optional; the default value is true. If you pass false for bSelect, the value of bReplaceCurrentSelection is ignored.
   */
  selectItem(namePath: string, bReplaceCurrentSelection?: boolean, bSelect?: boolean): boolean
}

/**
 * The presetItem object represents an item (preset or folder) in the Motion Presets panel (Window > Motion Presets). The array of presetItem objects is a property of the presetPanel object (presetPanel.items).
 * All properties of the presetItem object are read only. To perform tasks such as deleting, renaming, or moving items, use the methods of the presetPanel object.
 */
declare class PresetItem {
  /**
   * A Boolean value that specifies whether the item is installed along with Flash (true) or is a custom item that you or someone else has created (false). If this value is true, you can consider it a “read-only” item; it can’t be moved, deleted, or have any similar operations applied to it.
   */
  readonly isDefault: boolean
  /**
   * Boolean value that specifies whether the item in the Motion Presets panel is a folder (true) or a preset (false).
   */
  readonly isFolder: boolean
  /**
   * An integer that specifies the level of the item in the folder structure of the Motion Presets panel. The Default Folder and Custom Presets folder are level 0.
   */
  readonly level: number
  /**
   * A string that represents the name of the preset or folder, without path information.
   */
  readonly name: string
  /**
   * Specifies whether a folder in the Motion Presets panel is currently expanded (true) or not (false).
   * This property is true if the item is not a folder. To determine if an item is a folder or a preset, use presetItem.isFolder.
   */
  readonly open: boolean
  /**
   * A string that represents the path to the item in the Motion Presets panel folder tree, and the item name.
   */
  readonly path: string
}

/**
 * The swfPanel object represents a Window SWF panel. Window SWF panels are SWF files that implement applications you can run from the Flash authoring environment; they are available from the Window > Other Panels menu. By default, Window SWF panels are stored in a subfolder of the Configuration folder (see “Saving JSFL files” on page 2).
 * For example, on Windows XP, the folder is in boot drive\Documents and Settings\user\Local Settings\Application Data\Adobe\Flash CS4\language\Configuration\WindowSWF. A sample Window SWF panel is available; see “Sample Trace Bitmap panel” on page 17 (https://help.adobe.com/archive/en_US/flash/cs5/flash_cs5_extending.pdf). The array of registered Window SWF panels is stored in the fl.swfPanels property.
 */
declare class SWFPanel {
  /**
   * A string that contains the DPI scale factor (scaleX) for swfPanel. Depending on this scale-factor, SwfPanel can adjust its contents.
   */
  readonly dpiScaleFactorX: string
  /**
   * A string that contains the DPI scale factor (scaleY) for swfPanel. Depending on this scale-factor, SwfPanel can adjust its contents.
   */
  readonly dpiScaleFactorY: string
  /**
   * A string that represents the name of the specified Window SWF panel.
   */
  readonly name: string
  /**
   * A string that represents the path to the SWF file used in the specified Window SWF panel.
   */
  readonly path: string
  /**
   * Works in conjunction with the ActionScript ExternalInterface.addCallback() and MMExecute() methods to communicate with the SWF panel from the authoring environment.
   * Example
   * The following example illustrates how to use ActionScript and JavaScript code to create a Window SWF panel and communicate with it from the authoring environment.
   * 1 Create an ActionScript 3.0 FLA file, set its color to a medium gray, and set its size to 400 pixels wide and 250 pixels high.
   * 2 Place a dynamic text box in the center of the Stage, set its Instance name to myTextField, and type the word "Status" in the text box.
   * 3 Set other text box properties similar to the following:
   * •Center aligned
   * •355 pixels wide and 46 pixels high
   * •Times New Roman font, 28 points, red
   * 4 Add the following ActionScript code:
   * // Here's the callback function to be called from JSAPI
   * function callMeFromJavascript(arg:String):void {
   *  try {
   *    var name:String = String(arg);
   *    myTextField.text = name;
   *  } catch (e:Error) {}
   * }
   * // Expose the callback function as "callMySWF"
   * ExternalInterface.addCallback("callMySWF", callMeFromJavascript);
   * // run the JSAPI to wire up the callback
   * MMExecute("fl.runScript( fl.configURI + \"WindowSWF/fileOp.jsfl\" );");
   * MMExecute("fl.trace(\"AS3 File Status Panel Initialized\");");
   * 5 Save the file as fileStatus.fla, and publish the SWF file with the default Publish settings.
   * 6 Close Flash.
   * 7 Copy the fileStatus.swf file to the WindowSWF folder, which is a subfolder of the Configuration folder (see “Saving JSFL files” on page 2). For example, on Windows XP, the folder is in boot drive\Documents and Settings\user\Local Settings\Application Data\Adobe\Flash CS4\language\Configuration\WindowSWF.
   * 8 Start Flash.
   * 9 Create a JSFL file with the following code:
   * function callMyPanel(panelName, arg) {
   *  if(fl.swfPanels.length > 0){
   *    for(x = 0; x < fl.swfPanels.length; x++){
   *      // look for a SWF panel of the specified name, then call the specified AS3 function
   *      // in this example, the panel is named "test" and the AS3 callback is "callMySWF"
   *      if(fl.swfPanels[x].name == panelName) // name busted?
   *      {
   *        fl.swfPanels[x].call("callMySWF",arg);
   *        break;
   *      }
   *    }
   *  } else {
   *    fl.trace("no panels");
   *  }
   * }
   * // define the various handlers for events
   * documentClosedHandler = function () { callMyPanel("fileStatus", "Document Closed");};
   * fl.addEventListener("documentClosed", documentClosedHandler );
   * var dater = "New Document";
   * documentNewHandler = function () { callMyPanel("fileStatus", dater );};
   * fl.addEventListener("documentNew", documentNewHandler );
   * documentOpenedHandler = function () { callMyPanel("fileStatus", "Document Opened");};
   * fl.addEventListener("documentOpened", documentOpenedHandler );
   * 10 Save the JSFL file in the same directory as the SWF file, with the name fileOp.jsfl.
   * 11 Choose Window > Other panels > fileStatus.
   * Now, as you create, open, and close FLA files, the fileStatus panel displays a message indicating the action you have taken.
   * @returns Either null or a string that is returned by the function call. The function result could be an empty string.
   * @param request Parameters to pass to the function (see “Description” and “Example” below).
   */
  call(request: any): string | null | any
  /**
   * Reloads content in the SWF panel.
   */
  reload(): void
  /**
   * Sets the keyboard focus to the specified SWF panel.
   */
  setFocus(): void
}

/**
 * The Tools object is accessible from the flash object (fl.tools). The tools.toolObjs property contains an array of ToolObj objects, and the tools.activeTool property returns the ToolObj object for the currently active tool. (See also ToolObj object and the list of Extensible tools in “Top-Level Functions and Methods” on page 18.)
 * Note: The following methods and properties are used only when creating extensible tools.
 */
declare class Tools {
  /**
   * Returns the ToolObj object for the currently active tool.
   */
  readonly activeTool: ToolObj
  /**
   * A Boolean value that identifies if the Alt key is being pressed. The value is true if the Alt key is pressed, and false otherwise.
   */
  readonly altIsDown: boolean
  /**
   * A Boolean value that is true if the Control key is pressed; false otherwise.
   */
  readonly ctlIsDown: boolean
  /**
   * A Boolean value that is true if the left mouse button is currently down; false otherwise.
   */
  readonly mouseIsDown: boolean
  /**
   * A point that represents the position of the last mouse-down event on the Stage. The tools.penDownLoc property comprises two properties, x and y, corresponding to the x, y location of the mouse pointer.
   */
  readonly penDownLoc: Point
  /**
   * A point that represents the current location of the mouse pointer. The tools.penLoc property comprises two properties, x and y, corresponding to the x,y location of the mouse pointer.
   */
  readonly penLoc: Point
  /**
   * A Boolean value that is true if the Shift key is pressed; false otherwise.
   */
  readonly shiftIsDown: boolean
  /**
   * An array of ToolObj objects (see ToolObj object).
   */
  readonly toolObjs: ToolObj[]
  /**
   * Takes two points and returns a new adjusted or constrained point. If the Shift key is pressed when the command is run, the returned point is constrained to follow either a 45º constrain (useful for something such as a line with an arrowhead) or to constrain an object to maintain its aspect ratio (such as pulling out a perfect square with the Rectangle tool).
   * @returns A new adjusted or constrained point.
   * @param pt1 A point to specify the starting-click point
   * @param pt2 A point to specify the drag-to point
   */
  constrainPoint(pt1: Point, pt2: Point): Point
  /**
   * Returns the most recently pressed key.
   * @returns The integer value of the key.
   */
  getKeyDown(): number
  /**
   * Sets the pointer to a specified appearance.
   * @param cursor An integer that defines the pointer appearance, as described in the following list:
   * •0 = Plus cursor (+)
   * •1 = black arrow
   * •2 = white arrow
   * •3 = four-way arrow
   * •4 = two-way horizontal arrow
   * •5 = two-way vertical arrow
   * •6 = X
   * •7 = hand cursor
   */
  setCursor(cursor: number): void
  /**
   * Takes a point as input and returns a new point that may be adjusted or snapped to the nearest geometric object. If snapping is disabled in the View menu in the Flash user interface, the point returned is the original point.
   * @returns A new point that may be adjusted or snapped to the nearest geometric object.
   * @param pt Specifies the location of the point for which you want to return a snap point.
   */
  snapPoint(pt: Point): Point
}

/**
 * A ToolObj object represents an individual tool in the Tools panel. To access a ToolObj object, use properties of the Tools object: either the tools.toolObjs array or tools.activeTool.
 */
declare class ToolObj {
  /**
   * An integer that specifies the depth of the tool in the pop-up menu in the Tools panel. This property is used only when creating extensible tools.
   */
  depth: number
  /**
   * An integer with a value of -1. This property is used only when you create extensible tools. An iconID value of -1 means that Flash will not try find an icon for the tool. Instead, the script for the tool should specify the icon to display in the Tools panel; see toolObj.setIcon().
   */
  iconID: number
  /**
   * An integer that specifies the position of the tool in the Tools panel. This property is used only when you create extensible tools.
   */
  readonly position: number
  /**
   * Enables or disables the specified control in a Property inspector. Used only when creating extensible tools.
   * @param control A string that specifies the name of the control to enable or disable. Legal values depend on the Property inspector invoked by this tool; see toolObj.setPI().
   * A shape Property inspector has the following controls:
   * stroke, fill
   * A text Property inspector has the following controls:
   * type, font, pointsize, color, bold, italic, direction, alignLeft, alignCenter, alignRight, alignJustify, spacing, position, autoKern, small, rotation, format, lineType, selectable, html, border, deviceFonts, varEdit, options, link, maxChars, target
   * A movie Property inspector has the following controls:
   * size, framerate, publish, player, background, profile
   * @param bEnable A Boolean value that determines whether to enable (true) or disable (false) the control.
   */
  enablePIControl(control: string, bEnable: boolean): void
  /**
   * Identifies a PNG file to use as a tool icon in the Tools panel. This method is used only when you create extensible tools.
   * @param file A string that specifies the name of the PNG file to use as the icon. The PNG file must be placed in the same folder as the JSFL file.
   */
  setIcon(file: string): void
  /**
   * Sets the string that appears in the pop-up menu as the name for the tool. This method is used only when you create extensible tools.
   * @param menuStr A string that specifies the name that appears in the pop-up menu as the name for the tool.
   */
  setMenuString(menuStr: string): void
  /**
   * Associates an XML file with the tool. The file specifies the options to appear in a modal panel that is invoked by an Options button in the Property inspector. You would usually use this method in the configureTool() function inside your JSFL file. See configureTool().
   * For example, the PolyStar.xml file specifies three options associated with the Polygon tool:
   * @param xmlFile A string that specifies the name of the XML file that has the description of the tool’s options. The XML file must be placed in the same folder as the JSFL file.
   * <properties>
   *  <property name="Style"
   *    variable="style"
   *    list="polygon,star"
   *    defaultValue="0"
   *    type="Strings"/>
   *  <property name="Number of Sides"
   *    variable="nsides"
   *    min="3"
   *    max="32"
   *    defaultValue="5"
   *    type="Number" />
   *  <property name="Star point size"
   *    variable="pointParam"
   *    min="0"
   *    max="1"
   *    defaultValue=".5"
   *    type="Double" />
   * </properties>
   */
  setOptionsFile(xmlFile: string): void
  /**
   * Specifies which Property inspector should be used when the tool is activated. This method is used only when you create extensible tools. Acceptable values are "shape" (the default), "text", and "movie".
   * @param pi A string that specifies the Property inspector to invoke for this tool.
   */
  setPI(pi: string): void
  /**
   * Assigns a name to the tool for the configuration of the Tools panel. This method is used only when you create extensible tools. The name is used only by the XML layout file that Flash reads to construct the Tools panel. The name does not appear in the Flash user interface.
   * @param name A string that specifies the name of the tool.
   */
  setToolName(name: string): void
  /**
   * Sets the tooltip that appears when the mouse is held over the tool icon. This method is used only when you create extensible tools.
   * @param toolTip A string that specifies the tooltip to use for the tool.
   */
  setToolTip(toolTip: string): void
  /**
   * Shows or hides a control in the Property inspector. This method is used only when you create extensible tools.
   * @param control A string that specifies the name of the control to show or hide. This method is used only when you create extensible tools. Valid values depend on the Property inspector invoked by this tool (see toolObj.setPI()).
   * A shape Property inspector has the following controls: stroke, fill
   * A text Property inspector has the following controls:
   * type, font, pointsize, color, bold, italic, direction, alignLeft, alignCenter, alignRight, alignJustify, spacing, position, autoKern, small, rotation, format, lineType, selectable, html, border, deviceFonts, varEdit, options, link, maxChars, target
   * The movie Property inspector has the following controls:
   * size, publish, background, framerate, player, profile
   * @param bShow A Boolean value that determines whether to show or hide the specified control (true shows the control; false hides the control).
   */
  showPIControl(control: string, bShow: boolean): void
  /**
   * Called in the configureTool() method of an extensible tool’s JavaScript file to indicate that the free transform handles should appear when the tool is active. This method is used only when you create extensible tools.
   * @param bShow A Boolean value that determines whether to show or hide the free transform handles for the current tool (true shows the handles; false hides them).
   */
  showTransformHandles(bShow: boolean): void
}

declare interface XMLUIObj {
  label: string
  value?: string
}

/**
 * Flash 8 supports custom dialog boxes written in a subset of the XML User Interface Language (XUL). An XML User Interface (XMLUI) dialog box can be used by several Flash features, such as commands and behaviors, to provide a user interface for features that you build using extensibility. The XMLUI object provides the ability to get and set properties of an XMLUI dialog box, and accept or cancel out of one. The XMLUI methods can be used in callbacks, such as oncommand handlers in buttons.
 * You can write a dialog.xml file and invoke it from the JavaScript API using the document.xmlPanel() method. To retrieve an object representing the current XMLUI dialog box, use fl.xmlui.
 */
declare class XMLUI {
  /**
   * Closes the current XMLUI dialog box with an accept state, which is equivalent to the user clicking the OK button.
   */
  accept(): void
  /**
   * Closes the current XMLUI dialog box with a cancel state, which is equivalent to the user clicking the Cancel button.
   */
  cancel(): void
  /**
   * Retrieves the value of the specified property of the current XMLUI dialog box.
   * @returns A string that represents the value of the specified property. In cases where you might expect a Boolean value of true or false, it returns the string "true" or "false".
   * @param controlPropertyName A string that specifies the name of the XMLUI property whose value you want to retrieve.
   */
  get(controlPropertyName: string): string
  /**
   * Returns the label and value of the line selected in a ListBox or ComboBox control for the control specified by controlPropertyName.
   * @returns An object that represents the current control item for the control specified by controlPropertyName.
   * @param controlPropertyName A string that specifies the property whose control item element you want to retrieve.
   */
  getControlItemElement(controlPropertyName: string): XMLUIObj
  /**
   * Returns a Boolean value that specifies whether the control is enabled or disabled (dimmed).
   * @returns A Boolean value of true if the control is enabled; false otherwise.
   * @param controlID A string that specifies the ID attribute of the control whose status you want to retrieve.
   */
  getEnabled(controlID: string): boolean
  /**
   * Returns a Boolean value that specifies whether the control is visible or hidden.
   * @returns A Boolean value of true if the control is visible, or false if it is invisible (hidden).
   * @param controlID A string that specifies the ID attribute of the control whose visibility status you want to retrieve.
   */
  getVisible(controlID: string): boolean
  /**
   * Modifies the value of the specified property of the current XMLUI dialog box.
   * @param controlPropertyName A string that specifies the name of XMLUI property to modify.
   * @param value A string that specifies the value to which you want to set the XMLUI property.
   */
  set(controlPropertyName: string, value: string): void
  /**
   * Sets the label and value of the currently selected line in the ListBox or ComboBox control specified by controlPropertyName.
   * @param controlPropertyName A string that specifies the control item element to set.
   * @param elementItem A JavaScript object with a string property named label and an optional string property named value. If the value property does not exist, then it is created and assigned the same value as label.
   */
  setControlItemElement(controlPropertyName: string, elementItem: XMLUIObj): void
  /**
   * Clears the values of the ListBox or ComboBox control specified by controlID and replaces the list or menu items with the label, value pairs specified by elementItemArray.
   * @param controlID A string that specifies the ID attribute of the control you want to set.
   * @param elementItemArray An array of JavaScript objects, where each object has a string property named label and an optional string property named value. If the value property does not exist, then it is created and assigned the same value as label.
   */
  setControlItemElements(controlID: string, elementItemArray: XMLUIObj[]): void
  /**
   * Enables or disables (dims) a control.
   * @param controlID A string that specifies the ID attribute of the control you want to enable or disable.
   * @param enable A Boolean value of true if you want to enable the control, or false if you want to disable (dim) it.
   */
  setEnabled(controlID: string, enable: boolean): void
  /**
   * Shows or hides a control.
   * @param controlID A string that specifies the ID attribute of the control you want to show or hide.
   * @param visible A Boolean value of true if you want to show the control; false if you want to hide it.
   */
  setVisible(controlID: string, visible: boolean): void
}

/***** Classes *****/

/**
 * The actionsPanel object, which represents the currently displayed Actions panel, is a property of the flash object (see fl.actionsPanel).
 */
declare class ActionsPanel {
  /**
   * Returns the text that is currently selected in the Actions panel.
   * @returns A string that contains the text that is currently selected in the Actions panel.
   */
  getSelectedText(): string
  /**
   * Returns the text in the Actions panel.
   * @returns A string that contains all the text in the Actions panel.
   */
  getText(): string
  /**
   * Specifies whether any text is currently selected in the Actions panel.
   * @returns A Boolean value that specifies whether any text is selected in the Actions panel (true) or not (false).
   */
  hasSelection(): boolean
  /**
   * Replaces the currently selected text with the text specified in replacementText.
   * If replacementText contains more characters than the selected text, any characters following the selected text now follow replacementText; that is, they are not overwritten.
   * @returns A Boolean value of true if the Actions panel is found; false otherwise.
   * @param replacementText A string that represents text to replace selected text in the Actions panel.
   */
  replaceSelectedText(replacementText: string): boolean
  /**
   * Selects a specified set of characters in the Actions panel.
   * @returns A Boolean value that specifies whether the requested characters can be selected (true) or not (false).
   * @param startIndex A zero-based integer that specifies the first character to be selected.
   * @param numberOfChars  An integer that specifies how many characters to select.
   */
  setSelection(startIndex: number, numberOfChars: number): boolean
  /**
   * Clears any text in the Actions panel and then adds the text specified in replacementText.
   * @returns A Boolean value of true if the specified text was placed in the Actions panel; false otherwise.
   * @param replacementText A string that represents text to place in the Actions panel.
   */
  setText(replacementText: string): boolean
}

/**
 * Represents the color object returned from Tween.getColorTransform().
 */
declare interface TweenColor {
  colorAlphaAmount: number
  colorAlphaPercent: number
  colorRedAmount: number
  colorRedPercent: number
  colorGreenAmount: number
  colorGreenPercent: number
  colorBlueAmount: number
  colorBluePercent: number
}

/**
 * The Tween object can be used to access interpolated properties of tweens. Accessing properties for a non-tween frame throws errors.
 */
declare class Tween {
  /**
   * Duration of a tween span that is equal to number of frames in a tween.
   */
  duration: number
  /**
   * Start frame of a tween.
   */
  startFrame: number
  /**
   * Specifies the type of tween. For example, "motion" or "shape".
   */
  tweenType: string
  /**
   * Gets color transformation data between frames.
   * @param frameIndex Offset index of interpolated frame;
   */
  getGeometricTransform(frameIndex: number): TweenColor
  /**
   * Returns filters data of a selected frame from a tween span.
   * @returns Returns array of Filter objects.
   * @param frameIndex Index of the frame from which filter data is to be retrieved.
   */
  getFilters(frameIndex: number): Filter[]
  /**
   * Returns Matrix object that represents geometric transformation of a tween within a user-defined range (from offset to a selected frame).
   * @returns Matrix object that represents geometric transformations at the frame offset.
   * @param frameIndex Offset index of the frame from which geometric transformations have to be retrieved.
   */
  getGeometricTransform(frameIndex: number): Matrix
  /**
   * Returns interpolated shape of a selected frame within a tween-span.
   * @returns Returns shape coordinates at the frame offset.
   * @param frameIndex Offset index of the frame from which shape data has to be retrieved.
   */
  getShape(frameIndex: number): Shape | SimpleShape
}
