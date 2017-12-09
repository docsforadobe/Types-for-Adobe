interface FileConstructor {
	readonly prototype: File;

	/**
	 * Creates and returns a new File object referring to a given file system location.
	 * @param path The full or partial path name of the file,in platform-specific or URI format. The value stored in the object is the absolute path. The file that the path refers to does not need to exist.If the path refers to an existing folder: The File function returns a Folder object instead of a File object. The new operator returns a File object for a nonexisting file with the same name.
	 */
	new(path?: string): File;
	(path?: string): File;

	/**
	 * The name of the file system.
	 * This is a class property accessed through the File constructor. Valid values are "Windows", "Macintosh", and "Unix".
	 */
	readonly fs: string;
	
	/**
	 * Decodes a UTF-8 encoded string as required by RFC 2396, and returns the decoded string.
	 * See also String.decodeURI().
	 * @param uri The UTF-8 encoded string to decode.
	 */
	decode(uri: string): string;

	/**
	 * Encodes a string as required by RFC 2396, and returns the encoded string.
	 * All special characters are encoded in UTF-8 and stored as escaped characters starting with the percent sign followed by two hexadecimal digits. For example, the string "my file" is encoded as "my%20file".
	 * Special characters are those with a numeric value greater than 127, except the following: / - _ . ! ~ * ' ( )
	 * See also encodeURI().
	 * @param name The string to encode.
	 */
	encode(name: string): string;
	
	/**
	 * Reports whether a given encoding is available.
	 * @param name The encoding name. Typical values are "ASCII", "binary", or "UTF-8".For a complete list of supported encodings, see the JavaScript Tools Guide.
	 */
	isEncodingAvailable(name: string): boolean;
	
	/**
	 * Opens a dialog so the user can select one or more files to open.
	 * Opens the built-in platform-specific file-browsing dialog in which a user can select an existing file or multiple files, and creates new File objects to represent the selected files.
	 * If the user clicks OK, returns a File object for the selected file, or an array of objects if multiple files are selected.
	 * If the user cancels, returns null.
	 * @param prompt The prompt text, displayed if the dialog allows a prompt.
	 * @param filter A filter that limits the types of files displayed in the dialog. In Windows,a filter expression such as "Javascript files:*.jsx;All files:*.*". In Mac OS, a filter function that takes a File instance and returns true if the file should be included in the display, false if it should not.
	 * @param multiSelect When true, the user can select multiple files and the return value is an array.
	 */
	openDialog(prompt?: string, filter?: any, multiSelect?: boolean): File;
	
	/**
	 * Opens a dialog so the user can select a file name to save to.
	 * Opens the built-in platform-specific file-browsing dialog in which a user can select an existing file location to which to save information, and creates a new File object to represent the selected file location.
	 * If the user clicks OK, returns a File object for the selected file location.
	 * If the user cancels, returns null.
	 * @param prompt The prompt text, displayed if the dialog allows a prompt.
	 * @param filter In Windows only, a filter that limits the types of files displayed in the dialog. In Windows only,a filter expression such as "Javascript files:*.jsx;All files:*.*". Not used In Mac OS.
	 */
	saveDialog(prompt?: string, filter?: any): File;

}
declare const File: FileConstructor;

/**
 * Represents a file in the local file system in a platform-independent manner.
 */
interface File {
	/**
	 * The full path name for the referenced file in URI notation.
	 */
	readonly absoluteURI: string;

	/**
	 * If true, the object refers to a file system alias or shortcut.
	 */
	readonly alias: boolean;

	/**
	 * The creation date of the referenced file, or null if the object does not refer to a file on disk.
	 */
	readonly created: Date;

	/**
	 * In Mac OS, the file creator as a four-character string. In Windows or UNIX, value is "????".
	 */
	readonly creator: string;

	/**
	 * The localized name of the referenced file, without the path specification.
	 */
	readonly displayName: string;

	/**
	 * Gets or sets the encoding for subsequent read/write operations.
	 * One of the encoding constants listed in the JavaScript Tools Guide. If the value is not recognized, uses the system default encoding.A special encoder, BINARY, is used to read binary files. It stores each byte of the file as one Unicode character regardless of any encoding. When writing, the lower byte of each Unicode character is treated as a single byte to write.
	 */
	encoding: string;

	/**
	 * When true, a read attempt caused the current position to be at the end of the file, or the file is not open.
	 */
	readonly eof: boolean;

	/**
	 * A string containing a message describing the most recent file system error.
	 * Typically set by the file system, but a script can set it. Setting this value clears any error message and resets the error bit for opened files. Contains the empty string if there is no error.
	 */
	error: string;

	/**
	 * If true, this object refers to a file or file-system alias that actually exists in the file system.
	 */
	readonly exists: boolean;

	/**
	 * The platform-specific full path name for the referenced file.
	 */
	readonly fsName: string;

	/**
	 * The full path name for the referenced file in URI notation.
	 */
	readonly fullName: string;

	/**
	 * When true, the file is not shown in the platform-specific file browser.
	 * If the object references a file-system alias or shortcut, the flag is altered on the alias, not on the original file.
	 */
	hidden: boolean;

	/**
	 * The size of the file in bytes.
	 * Can be set only for a file that is not open, in which case it truncates or pads the file with 0-bytes to the new length.
	 */
	length: number;

	/**
	 * How line feed characters are written in the file system.
	 * One of the values "Windows", "Macintosh", or "Unix".
	 */
	lineFeed: string;

	/**
	 * The date of the referenced file's last modification, or null if the object does not refer to a file on the disk.
	 */
	readonly modified: Date;

	/**
	 * The file name portion of the absolute URI for the referenced file, without the path specification.
	 */
	readonly name: string;

	/**
	 * The Folder object for the folder that contains this file.
	 */
	readonly parent: Folder;

	/**
	 * The path portion of the absolute URI for the referenced file, without the file name.
	 */
	readonly path: string;

	/**
	 * When true, prevents the file from being altered or deleted.
	 * If the referenced file is a file-system alias or shortcut, the flag is altered on the alias, not on the original file.
	 */
	readonly: boolean;

	/**
	 * The path name for the object in URI notation, relative to the current folder.
	 */
	readonly relativeURI: string;

	/**
	 * The file type as a four-character string.
	 * In Mac OS, the Mac OS file type.
	 * In Windows, "appl" for .EXE files, "shlb" for .DLL files and "TEXT" for any other file.
	 */
	readonly type: string;

	/**
	 * Changes the path specification of the referenced file.
	 * @param path A string containing the new path, absolute or relative to the current folder.
	 */
	changePath(path: string): boolean;

	/**
	 * Closes this open file.
	 * Returns true if the file was closed successfully, false if an I/O error occurred.
	 */
	close(): boolean;

	/**
	 * Copies this object’s referenced file to the specified target location.
	 * Resolves any aliases to find the source file. If a file exists at the target location, it is overwritten.
	 * Returns true if the copy was successful.
	 * @param target A string with the URI path to the target location, or a File object that references the target location.
	 */
	copy(target: string): boolean;

	/**
	 * Makes this file a file-system alias or shortcut to the specified file.
	 * The referenced file for this object must not yet exist on disk. Returns true if the operation was successful.
	 * @param path A string containing the path of the target file.
	 */
	createAlias(path: string): void;

	/**
	 * Executes or opens this file using the appropriate application, as if it had been double-clicked in a file browser.
	 * You can use this method to run scripts, launch applications, and so on.Returns true immediately if the application launch was successful.
	 */
	execute(): boolean;

	/**
	 * Retrieves and returns the path for this file, relative to the specified base path, in URI notation.
	 * If no base path is supplied, the URI is relative to the path of the current folder.Returns a string containing the relative URI.
	 * @param basePath A base path in URI notation.
	 */
	getRelativeURI(basePath: string): string;

	/**
	 * Opens the referenced file for subsequent read/write operations. The method resolves any aliases to find the file.
	 * Returns true if the file was opened successfully.The method attempts to detect the encoding of the open file. It reads a few bytes at the current location and tries to detect the Byte Order Mark character 0xFFFE. If found, the current position is advanced behind the detected character and the encoding property is set to one of the strings UCS-2BE, UCS-2LE, UCS4-BE, UCS-4LE, or UTF-8. If the marker character is not found, it checks for zero bytes at the current location and makes an assumption about one of the above formats (except UTF-8). If everything fails, the encoding property is set to the system encoding.
	 * IMPORTANT: Be careful about opening a file more than once. The operating system usually permits you to do so, but if you start writing to the file using two different File objects, you can destroy your data.
	 * @param mode The read-write mode, a single-character string. One of these characters: r (read) Opens for reading. If the file does not exist or cannot be found, the call fails. w (write) Opens a file for writing. If the file exists, its contents are destroyed. If the file does not exist, creates a new, empty file. e (edit) Opens an existing file for reading and writing. a (append) Opens an existing file for reading and writing, and moves the current position to the end of the file.
	 * @param type In Mac OS, the type of a newly created file, a 4-character string. Ignored in Windows and UNIX.
	 * @param creator In Mac OS, the creator of a newly created file, a 4-character string. Ignored in Windows and UNIX.
	 */
	open(mode: string, type?: string, creator?: string): boolean;

	/**
	 * Opens the built-in platform-specific file-browsing dialog, in which the user can select an existing file or files, and creates new File objects to represent the selected files.
	 * Differs from the class method openDialog() in that it presets the current folder to this File object’s parent folder and the current file to this object’s associated file.
	 * If the user clicks OK, returns a File or Folder object for the selected file or folder, or an array of objects.
	 * If the user cancels, returns null.
	 * @param prompt A string containing the prompt text, if the dialog allows a prompt.
	 * @param filter A filter that limits the types of files displayed in the dialog. In Windows,a filter expression such as "Javascript files:*.jsx;All files:*.*". In Mac OS, a filter function that takes a File instance and returns true if the file should be included in the display, false if it should not.
	 * @param multiSelect When true, the user can select multiple files and the return value is an array.
	 */
	openDlg(prompt?: string, filter?: any, multiSelect?: boolean): File;

	/**
	 * Reads the contents of the file, starting at the current position.
	 * Returns a string that contains up to the specified number of characters. If a number of characters is not supplied, reads from the current position to the end of the file. If the file is encoded, multiple bytes might be read to create single Unicode characters.
	 * @param chars An integer specifying the number of characters to read.
	 */
	read(chars?: number): string;

	/**
	 * Reads a single text character from the file at the current position.
	 * Line feeds are recognized as CR, LF, CRLF or LFCR pairs.If the file is encoded, multiple bytes might be read to create a single Unicode character. Returns a string that contains the character.
	 */
	readch(): string;

	/**
	 * Reads a single line of text from the file at the current position.
	 * Line feeds are recognized as CR, LF, CRLF or LFCR pairs.. If the file is encoded, multiple bytes might be read to create single Unicode characters. Returns a string that contains the text.
	 */
	readln(): string;

	/**
	 * Deletes the file associated with this object from disk immediately, without moving it to the system trash.
	 * Does not resolve aliases; instead, deletes the referenced alias or shortcut file itself. Returns true if the file was successfully removed.
	 * IMPORTANT: Cannot be undone. It is recommended that you prompt the user for permission before deleting.
	 */
	remove(): boolean;

	/**
	 * Renames the associated file.
	 * Does not resolve aliases, but renames the referenced alias or shortcut file itself. Returns true if the file was successfully renamed.
	 * @param newName The new file name, with no path information.
	 */
	rename(newName: string): boolean;

	/**
	 * Attempts to resolve the file-system alias or shortcut that this object refers to.
	 * If successful, creates and returns a new File object that points to the resolved file system element. Returns null if this object does not refer to an alias, or if the alias could not be resolved.
	 */
	resolve(): File;

	/**
	 * Opens the built-in platform-specific file-browsing dialog, in which the user can select an existing file location to which to save information, and creates a new File object to represent the selected file.
	 * Differs from the class method saveDialog() in that it presets the current folder to this File object’s parent folder and the file to this object’s associated file.
	 * If the user clicks OK, returns a File object for the selected file.
	 * If the user cancels, returns null.
	 * @param prompt A string containing the prompt text, if the dialog allows a prompt.
	 * @param filter In Windows only, a filter that limits the types of files displayed in the dialog. In Windows only,a filter expression such as "Javascript files:*.jsx;All files:*.*". Not used In Mac OS.
	 */
	saveDlg(prompt?: string, filter?: any): File;

	/**
	 * Seeks to a given position in the file.
	 * The new position cannot be less than 0 or greater than the current file size. Returns true if the position was changed.
	 * @param pos The new current position in the file as an offset in bytes from the start, current position, or end, depending on the mode.
	 * @param mode The seek mode. One of: 0: Seek to absolute position, where pos=0 is the first byte of the file. This is the default. 1: Seek relative to the current position. 2. Seek backward from the end of the file.
	 */
	seek(pos: number, mode?: number): boolean;

	/**
	 * Retrieves the current position as a byte offset from the start of the file.
	 * Returns a number, the position index.
	 */
	tell(): number;

	/**
	 * Creates and returns a serialized string representation of this object.
	 * Pass the resulting string to eval() to recreate the object.
	 */
	toSource(): string;

	/**
	 * Converts this object to a string.
	 */
	toString(): string;

	/**
	 * Writes the specified text to the file at the current position.
	 * You can supply multiple text values; the strings are concatenated to form a single string.For encoded files, writing a single Unicode character may write multiple bytes. Returns true if the write was successful.IMPORTANT: Be careful not to write to a file that is open in another application or object, as this can overwrite existing data.
	 * @param text A text string to be written.
	 */
	write(text: string): boolean;

	/**
	 * Writes a string to the file at the current position and appends a line-feed sequence.
	 * You can supply multiple text values. The strings are concatenated into a single string, which is written in the file followed by one line-feed sequence, of the style specified by this object's linefeed property.For encoded files, writing a single Unicode character may write multiple bytes.Returns true if the write was successful.IMPORTANT: Be careful not to write to a file that is open in another application or object, as this can overwrite existing data.
	 * @param text A text string to be written.
	 */
	writeln(text: string): boolean;

}

interface FolderConstructor {
	readonly prototype: Folder;
	
	/**
	 * Creates and returns a new Folder object referring to a given file-system location.
	 * If the path name refers to an already existing disk file, a File object is returned instead.Returns the new Folder object.
	 * @param path The absolute or relative path to the folder associated with this object, specified in URI format. The value stored in the object is the absolute path.The path need not refer to an existing folder. If the path refers to an existing file, rather than a folder: The Folder() function returns a File object instead of a Folder object. The new operator returns a Folder object for a nonexisting folder with the same name.
	 */
	new(path?: string): Folder;
	(path?: string): Folder;
	
	/**
	 * The folder containing the application data for all users.
	 * In Windows, the value of %APPDATA% (by default, C:\\Documents and Settings\\All Users\\Application Data)
	 * In Mac OS, /Library/Application Support
	 */
	readonly appData: Folder;

	/**
	 * In Mac OS, a Folder object for the folder containing the bundle of the running application.
	 */
	readonly appPackage: Folder;

	/**
	 * A Folder object for the folder containing common files for all programs installed by the user.
	 * In Windows, the value of %CommonProgramFiles% (by default, C:\\Program Files\\Common Files)
	 * In Mac OS, /Library/Application Support
	 */
	readonly commonFiles: Folder;

	/**
	 * A Folder object for the current folder.
	 * Assign a Folder object or a string containing the new path name to set the current folder. This is a class property accessed through the Folder constructor.
	 */
	current: Folder;

	/**
	 * A Folder object for the folder that contains the user’s desktop.
	 * In Windows, C:\\Documents and Settings\\username\\Desktop
	 * In Mac OS, ~/Desktop
	 */
	readonly desktop: Folder;

	/**
	 * The name of the current file system.
	 * One of "Windows", "Macintosh", or "Unix".
	 */
	readonly fs: string;
	
	/**
	 * A folder pointing to the user's My Documents folder.
	 * In Windows, C:\\Documents and Settings\\username\\My Documents
	 * In Mac OS,~/Documents
	 */
	readonly myDocuments: Folder;

	/**
	 * A Folder object for the folder containing the executable image of the running application.
	 */
	readonly startup: Folder;

	/**
	 * A Folder object for the folder containing the operating system files.
	 * In Windows, the value of %windir% (by default, C:\\Windows)
	 * In Mac OS, /System
	 */
	readonly system: Folder;

	/**
	 * A Folder object for the default folder for temporary files.
	 */
	readonly temp: Folder;

	/**
	 * A Folder object for the folder containing deleted items. On Windows, the trash folder is a virtual
	 * folder containing a database; therefore, the property value is null on Windows.
	 */
	readonly trash: Folder;

	/**
	 * A Folder object for the folder containing the user's application data.
	 * In Windows, the value of %USERDATA% (by default, C:\\Documents and Settings\\username\\Application Data)
	 * In Mac OS,~/Library/Application Support.
	 */
	readonly userData: Folder;

	/**
	 * Decodes a UTF-8 encoded string as required by RFC 2396, and returns the decoded string.
	 * See also String.decodeURI().
	 * @param uri The UTF-8 string to decode.
	 */
	decode(uri: string): string;

	/**
	 * Encodes a string as required by RFC 2396, and returns the encoded string.
	 * All special characters are encoded in UTF-8 and stored as escaped characters starting with the percent sign followed by two hexadecimal digits. For example, the string "my file" is encoded as "my%20file".
	 * Special characters are those with a numeric value greater than 127, except the following: / - _ . ! ~ * ' ( )
	 * See also encodeURI().
	 * @param name The string to encode.
	 */
	encode(name: string): string;

	/**
	 * Reports whether a given encoding is available.
	 * @param name The encoding name. Typical values are "ASCII", "binary", or "UTF-8".For a complete list of supported encodings, see the JavaScript Tools Guide.
	 */
	isEncodingAvailable(name: string): boolean;

	/**
	 * Opens the built-in platform-specific file-browsing dialog, and creates a new File or Folder object for the selected file or folder.
	 * Differs from the object method selectDlg() in that it does not preselect a folder.
	 * If the user clicks OK, returns a File or Folder object for the selected file or folder.
	 * If the user cancels, returns null.
	 * @param prompt The prompt text, if the dialog allows a prompt.
	 */
	selectDialog(prompt?: string): Folder;
	
}
declare const Folder: FolderConstructor;

/**
 * Represents a file-system folder or directory in a platform-independent manner.
 */
interface Folder {
	/**
	 * The full path name for the referenced folder in URI notation.
	 */
	readonly absoluteURI: string;

	/**
	 * When true, the object refers to a file system alias or shortcut.
	 */
	readonly alias: boolean;

	/**
	 * The creation date of the referenced folder, or null if the object does not refer to a folder on disk.
	 */
	readonly created: Date;

	/**
	 * The localized name portion of the absolute URI for the referenced folder, without the path specification.
	 */
	readonly displayName: string;

	/**
	 * A message describing the most recent file system error.
	 * Typically set by the file system, but a script can set it. Setting this value clears any error message and resets the error bit for opened files. Contains the empty string if there is no error.
	 */
	error: string;

	/**
	 * When true, this object refers to a folder that currently exists in the file system.
	 */
	readonly exists: boolean;

	/**
	 * The platform-specific name of the referenced folder as a full path name.
	 */
	readonly fsName: string;

	/**
	 * The full path name for the referenced folder in URI notation. .
	 */
	readonly fullName: string;

	/**
	 * The date of the referenced folder's last modification, or null if the object does not refer to a folder on disk.
	 */
	readonly modified: Date;

	/**
	 * The folder name portion of the absolute URI for the referenced file, without the path specification.
	 */
	readonly name: string;

	/**
	 * TThe Folder object for the folder that contains this folder, or null if this object refers to the root folder of a volume.
	 */
	readonly parent: Folder;

	/**
	 * The path portion of the object absolute URI for the referenced file, without the folder name.
	 */
	readonly path: string;

	/**
	 * The path name for the referenced folder in URI notation, relative to the current folder.
	 */
	readonly relativeURI: string;

	/**
	 * Changes the path specification of the referenced folder.
	 * @param path A string containing the new path, absolute or relative to the current folder.
	 */
	changePath(path: string): boolean;

	/**
	 * Creates a folder at the location given by this object's path property.
	 * Returns true if the folder was created.
	 */
	create(): boolean;

	/**
	 * Opens this folder in the platform-specific file browser (as if it had been double-clicked in the file browser).
	 * Returns true immediately if the folder was opened successfully.
	 */
	execute(): boolean;

	/**
	 * Retrieves the contents of this folder, filtered by the supplied mask.
	 * Returns an array of File and Folder objects, or null if this object's referenced folder does not exist.
	 * @param mask A search mask for file names, specified as a string or a function. A mask string can contain question mark (?) and asterisk (*) wild cards. Default is "*", which matches all file names. Can also be the name of a function that takes a File or Folder object as its argument. It is called for each file or folder found in the search; if it returns true, the object is added to the return array. NOTE: In Windows, all aliases end with the extension .lnk. ExtendScript strips this from the file name when found, in order to preserve compatibility with other operating systems. You can search for all aliases by supplying the search mask "*.lnk", but note that such code is not portable.
	 */
	getFiles(mask: any): Array<File | Folder>;

	/**
	 * Retrieves and returns the path for this file, relative to the specified base path, in URI notation.
	 * If no base path is supplied, the URI is relative to the path of the current folder.Returns a string containing the relative URI.
	 * @param basePath A base path in URI notation.
	 */
	getRelativeURI(basePath?: string): string;

	/**
	 * Deletes the folder associated with this object from disk immediately, without moving it to the system trash.
	 * Folders must be empty before they can be deleted. Does not resolve aliases; instead, deletes the referenced alias or shortcut file itself. Returns true if the file was successfully removed.
	 * IMPORTANT: Cannot be undone. It is recommended that you prompt the user for permission before deleting.
	 */
	remove(): boolean;

	/**
	 * Renames the associated folder.
	 * Does not resolve aliases, but renames the referenced alias or shortcut file itself. Returns true if the folder was successfully renamed.
	 * @param newName The new folder name, with no path information.
	 */
	rename(newName: string): boolean;

	/**
	 * Attempts to resolve the file-system alias or shortcut that this object refers to.
	 * If successful, creates and returns a new Folder object that points to the resolved file system element. Returns null if this object does not refer to an alias, or if the alias could not be resolved.
	 */
	resolve(): Folder;

	/**
	 * Opens the built-in platform-specific file-browsing dialog, and creates a new File or Folder object for the selected file or folder.
	 * Differs from the class method selectDialog() in that it preselects this folder.
	 * If the user clicks OK, returns a File or Folder object for the selected file or folder.
	 * If the user cancels, returns null.
	 * @param prompt The prompt text, if the dialog allows a prompt.
	 */
	selectDlg(prompt?: string): Folder;

	/**
	 * Creates and returns a serialized string representation of this object.
	 * Pass the resulting string to eval() to recreate the object.
	 */
	toSource(): string;

	/**
	 * Converts this object to a string.
	 */
	toString(): string;

}

interface SocketConstructor {
	readonly prototype: Socket;
	
	/**
	 * Creates a new Socket object.
	 */
	new(): Socket;
	(): Socket;
	
}
declare const Socket: SocketConstructor;

/**
 * Creates a TCP/IP connection, or establishes a TCP/IP server.
 */
interface Socket {
	/**
	 * When true, the connection is active.
	 */
	readonly connected: boolean;

	/**
	 * Sets or retrieves the name of the encoding used to transmit data.
	 * Typical values are "ASCII", "BINARY", or "UTF-8".
	 */
	encoding: string;

	/**
	 * When true, the receive buffer is empty.
	 */
	readonly eof: boolean;

	/**
	 * A message describing the most recent error. Setting this value clears any error message.
	 */
	error: string;

	/**
	 * The name of the remote computer when a connection is established.
	 * If the connection is shut down or does not exist, the property contains the empty string.
	 */
	readonly host: string;

	/**
	 * The timeout in seconds to be applied to read or write operations.
	 */
	timeout: number;

	/**
	 * Terminates the open connection.
	 * Returns true if the connection was closed, false on I/O errors.
	 * Deleting the object also closes the connection, but not until JavaScript garbage-collects the object. The connection might stay open longer than you wish if you do not close it explicitly.
	 */
	close(): boolean;

	/**
	 * Instructs the object to start listening for an incoming connection.
	 * The call to open() and the call to listen()are mutually exclusive. Call one function or the other, not both.
	 * @param port The TCP/IP port number to listen on. Valid port numbers are 1 to 65535. Typical values are 80 for a Web server, 23 for a Telnet server and so on.
	 * @param encoding The encoding to be used for the connection Typical values are "ASCII", "BINARY", or "UTF-8".
	 */
	listen(port: number, encoding?: string): boolean;

	/**
	 * Opens the connection for subsequent read/write operations.
	 * The call to open() and the call to listen() are mutually exclusive. Call one function or the other, not both.
	 * @param host The server to connect to. This can be a DNS name, an IPv4 address, or an IPv6 address, followed by a colon and a port number.
	 * @param encoding The encoding to be used for the connection Typical values are "ASCII", "binary", or "UTF-8".
	 */
	open(host: string, encoding?: string): boolean;

	/**
	 * Checks a listening object for a new incoming connection.
	 * If a connection request was detected, the method returns a new Socket object that wraps the new connection. Use this connection object to communicate with the remote computer. After use, close the connection and delete the JavaScript object. If no new connection request was detected, the method returns null.
	 */
	poll(): Socket;

	/**
	 * Reads up to the specified number of characters from the connection. CR characters are ignored unless the encoding is set to "BINARY".
	 * Returns a string that contains up to the number of characters that were supposed to be read, or the number of characters read before the connection closed or timed out.
	 * @param count The number of characters to read. If not supplied, the connection attempts to read as many characters it can get and returns immediately.
	 */
	read(count?: number): string;

	/**
	 * Reads one line of text up to the next line feed.
	 * Line feeds are recognized as LF or CRLF pairs. CR characters are ignored. Returns a string containing the characters.
	 */
	readln(): string;

	/**
	 * Concatenates all arguments into a single string and writes that string to the connection.
	 * @param text Any number of string values. All arguments are concatenated to form the string to be written. CRLF sequences are converted to LFs unless the encoding is set to "BINARY".
	 */
	write(text: string): boolean;

	/**
	 * Concatenates all arguments into a single string, appends a LF character, and writes that string to the connection.
	 * @param text Any number of string values. All arguments are concatenated to form the string to be written. CRLF sequences are converted to LFs unless the encoding is set to "BINARY".
	 */
	writeln(text: string): boolean;

}

/**
 * Provides information about a method, a property or a method parameters.
 */
interface ReflectionInfo {
	/**
	 * The description of method or function arguments.
	 */
	readonly arguments: ReflectionInfo[];

	/**
	 * The data type.
	 */
	readonly dataType: string;

	/**
	 * The default value.
	 */
	readonly defaultValue: any;

	/**
	 * The long description text.
	 */
	readonly description: string;

	/**
	 * The short description text.
	 */
	readonly help: string;

	/**
	 * Contains true if the class describes a collection class.
	 */
	readonly isCollection: boolean;

	/**
	 * The maximum value.
	 */
	readonly max: number;

	/**
	 * The minimum value.
	 */
	readonly min: number;

	/**
	 * The element name.
	 */
	readonly name: string;

	/**
	 * The class object that this element belongs to.
	 */
	readonly parent: Reflection;

	/**
	 * Sample code, if present.
	 */
	readonly sampleCode: string;

	/**
	 * A file containing sample code. May be null.
	 */
	readonly sampleFile: File;

	/**
	 * The element type.
	 * One of unknown, readonly, readwrite, createonly, method or parameter.
	 */
	readonly type: string;

}
declare const ReflectionInfo: ReflectionInfo;

/**
 * Provides information about a class.
 */
interface Reflection {
	/**
	 * The long description text.
	 */
	readonly description: string;

	/**
	 * The short description text.
	 */
	readonly help: string;

	/**
	 * An array of method descriptions.
	 */
	readonly methods: ReflectionInfo[];

	/**
	 * The class name.
	 */
	readonly name: string;

	/**
	 * An array of property descriptions.
	 */
	readonly properties: ReflectionInfo[];

	/**
	 * Sample code, if present.
	 */
	readonly sampleCode: string;

	/**
	 * A file containing sample code. May be null.
	 */
	readonly sampleFile: File;

	/**
	 * An array of class method descriptions.
	 */
	readonly staticMethods: ReflectionInfo[];

	/**
	 * An array of class property descriptions.
	 */
	readonly staticProperties: ReflectionInfo[];

	/**
	 * Finds an element description by name.
	 * @param name The name of the element to find.
	 */
	find(name: string): ReflectionInfo;

	/**
	 * Returns this class information as XML in OMV format.
	 */
	toXML(): XML;

}
declare const Reflection: Reflection;

interface QNameConstructor {
	readonly prototype: QName;

	/**
	 * Creates a QName object.
	 * @param uri The URI, specified as a Namespace object, an existing QName object, or string. If this is a Namespace object, the URI is set to the namespace URI, and there is no local name. If this is a QName object, the URI and localName is set to those of that object. If this is a string, the URI is set to that string.
	 * @param name The local name. Used only if URI is given as a string.
	 */
	new(uri: any, name?: string): QName;
	(uri: any, name?: string): QName;

}
declare const QName: QNameConstructor;

/**
 * A qualified XML name, containing the URI and the local name.
 */
interface QName {
	/**
	 * The local name part of the qualified name.
	 */
	readonly localName: string;

	/**
	 * The URI part of the qualified name.
	 */
	readonly uri: string;

}

interface NamespaceConstructor {
	readonly prototype: Namespace;

	/**
	 * Creates a Namespace object.
	 * @param prefix The URIprefix, specified as an existing Namespace object, QName object, or string. If this is a Namespace or a QName object, the URI and prefix are set to that of the object. If this is a string, the prefix is set to that string, and the URI must be specified.
	 * @param uri The URI if the prefix is specified as a string.
	 */
	new(prefix: any, uri?: string): Namespace;
	(prefix: any, uri?: string): Namespace;
	
}
declare const Namespace: NamespaceConstructor;

/**
 * A XML namespace object.
 */
interface Namespace {
	/**
	 * The named prefix.
	 */
	readonly prefix: string;

	/**
	 * The URI.
	 */
	readonly uri: string;

}

interface XMLConstructor {
	readonly prototype: XML;

	/**
	 * Parses an XML string. Throws an error if the XML is incorrect.
	 * @param text The text to parse.
	 */
	new(text: string): XML;
	(text: string): XML;

	/**
	 * Controls whether XML comments should be parsed (false) or ignored (true).
	 */
	ignoreComments: boolean;

	/**
	 * Controls whether XML preprocessing instructions should be parsed (false) or ignored (true).
	 */
	ignoreProcessingInstructions: boolean;

	/**
	 * Controls whether whitespace should be parsed (false) or ignored (true).
	 */
	ignoreWhitespace: boolean;

	/**
	 * The number of spaces used to indent pretty-printed XML.
	 */
	prettyIndent: number;

	/**
	 * When true, XML is pretty-printed when converting to a string.
	 */
	prettyPrinting: boolean;

	/**
	 * Returns an object containing the default parsing and print settings for XML.
	 */
	defaultSettings(): Object;
	
	/**
	 * Sets the parsing and print setting for XML using an object returned by the settings() method.
	 * @param obj The object containing the settings to set.
	 */
	setSettings(obj: Object): void;

	/**
	 * Returns an object containing the current parsing and print settings for XML.
	 */
	settings(): Object;
	
}
declare const XML: XMLConstructor;

/**
 * Wraps XML into an object.
 */
interface XML {
	/**
	 * Adds a namespace declaration to the node. Returns the XML object itself.
	 * @param namespace The namespace to add.
	 */
	addNamespace(namespace: Namespace): XML;

	/**
	 * Appends the given XML to this XML as a child. Returns the XML object itself.
	 * If the argument is not XML, creates a new XML element containing the argument as text. The element name of that new XML is the same as the last element in the original XML.
	 * @param child The child XML to add.
	 */
	appendChild(child: XML): XML;

	/**
	 * Returns a list containing all attribute elements matching the given name.
	 * @param name The attribute name to look for.
	 */
	attribute(name: string): XML;

	/**
	 * Returns a list containing all attribute elements.
	 */
	attributes(): XML;

	/**
	 * Returns a list containing all children of this XML matching the given element name.
	 * If the argument is a number, uses the number as index into the array of children.
	 * @param name The name or the index of the child element.
	 */
	child(name: string): XML;

	/**
	 * Returns a number representing the ordinal position of this XML object within the context of its parent.
	 */
	childIndex(): number;

	/**
	 * Returns an XML object containing all the properties of this XML object in order.
	 */
	children(): XML;

	/**
	 * Returns an XML object containing the properties of this XML object that represent XML comments.
	 */
	comments(): XML;

	/**
	 * Checks if this XML object contains the given XML object.
	 * @param xml The XML to search for.
	 */
	contains(xml: XML): boolean;

	/**
	 * Creates a copy of this XML object.
	 */
	copy(): XML;

	/**
	 * Returns all the XML-valued descendants of this XML object with the given name.
	 * If the name parameter is omitted, returns all descendants of this XML object.
	 * @param name The name of the descendant to find.
	 */
	descendants(name?: string): XML;

	/**
	 * Returns a list of XML children that are elements with a given name, or all children that are XML elements.
	 * @param name The element name. If not supplied, gets all children that are XML elements.
	 */
	elements(name?: string): XML;

	/**
	 * Reports whether this XML object contains complex content.
	 * An XML object is considered to contain complex content if it represents an XML element that has child elements. XML objects representing attributes, comments, processing instructions and text nodes do not have complex content. The existence of attributes, comments, processing instructions and text nodes within an XML object is not significant in determining if it has complex content.
	 */
	hasComplexContent(): boolean;

	/**
	 * Reports whether this XML object contains simple content.
	 * An XML object is considered to contain simple content if it represents a text node, represents an attribute node or if it represents an XML element that has no child elements. XML objects representing comments and processing instructions do not have simple content. The existence of attributes, comments, processing instructions and text nodes within an XML object is not significant in determining if it has simple content.
	 */
	hasSimpleContent(): boolean;

	/**
	 * Returns an array of Namespace objects mirroring the current list of valid namespaces at this element.
	 * The last element of thereturned array is the default namespace.
	 */
	inScopeNamespaces(): Namespace[];

	/**
	 * Inserts the given child2 after the given child1 in this XML object and returns this XML object.
	 * If child1 is null, the method inserts child2 before all children of this XML object (that is, after none of them). If child1 does not exist in this XML object, the method returns without modifying this XML object.
	 * @param child1 The child to insert the other child after. If null, the method inserts child2 before all children of this XML object.
	 * @param child2 The XML to insert.
	 */
	insertChildAfter(child1: XML, child2: XML): void;

	/**
	 * Inserts the given child2 before the given child1 in this XML object and returns this XML object.
	 * If child1 is null, the method inserts child2 after all children of this XML object (that is, before none of them). If child1 does not exist in this XML object, the method returns without modifying this XML object.
	 * @param child1 The child to search for. If null, the method inserts child2 after all children of this XML object.
	 * @param child2 The XML to insert.
	 */
	insertChildBefore(child1: XML, child2: XML): void;

	/**
	 * Returns the number of elements contained in an XML list. If this XML object is not a list, returns 1.
	 */
	length(): number;

	/**
	 * Returns the local name of this XML object.
	 * This value corresponds to the element name unless the name has a namespace prefix. For example, if the element has the name "ns:tag", the return value is "tag".
	 */
	localName(): string;

	/**
	 * Returns a QName object containing the URI and the local name of the element.
	 */
	name(): QName;

	/**
	 * Returns a Namespace object containing the namespace URI of the current element.
	 */
	namespace(): Namespace;

	/**
	 * Returns an array containing all namespace declarations of this XML object.
	 */
	namespaceDeclarations(): Namespace[];

	/**
	 * Returns the type of this XML object as one of the strings "element", "attribute", "comment", "processing-instruction", or "text".
	 */
	nodeKind(): string;

	/**
	 * Puts all text nodes in this and all descendant XML objects into a normal form by merging adjacent text nodes and eliminating empty text nodes. Returns this XML object.
	 */
	normalize(): XML;

	/**
	 * Returns the parent object of this XML object.
	 * The root object, as returned by the XML constructor, does not have a parent and returns null. Note that the E4X standard does not define what happens if this XML object is a list containing elements with multiple parents.
	 */
	parent(): XML;

	/**
	 * Inserts a given child into this object before its existing XML properties, and returns this XML object.
	 * @param child The XML to insert.
	 */
	prependChild(child: XML): XML;

	/**
	 * Returns a list of preprocessing instructions.
	 * Collects processing-instructions with the given name, if supplied. Otherwise, returns an XML list containing all the children of this XML object that are processing-instructions regardless of their name.
	 * @param name The name of the preprocessing instruction to return.
	 */
	processingInstructions(name?: string): XML;

	/**
	 * Removes the given namespace from this XML, and returns this XML.
	 * @param namespace The namespace to remove.
	 */
	removeNamespace(namespace: Namespace): XML;

	/**
	 * Replaces the value of specified XML properties of this XML object returns this XML object.
	 * This method acts like the assignment operator.
	 * @param name The property name. Can be a numeric property name, a name for a set of XML elements, or the properties wildcard “*”. If this XML object contains no properties that match the name, the method returns without modifying this XML object.
	 * @param value The XML with which to replace the value of the matching property. Can be an XML object, XML list or any value that can be converted to a String with toString().
	 */
	replace(name: string, value: XML): XML;

	/**
	 * Replaces all of the XML-valued properties in this object with a new value, and returns this XML object.
	 * @param value The new value, which can be a single XML object or an XML list.
	 */
	setChildren(value: XML): XML;

	/**
	 * Replaces the local name of this XML objectwith a string constructed from the given name
	 * The local name is any part behind a colon character. If there is no colon, it is the entire name.
	 * @param name The name to set.
	 */
	setLocalName(name: string): void;

	/**
	 * Replaces the name of this XML object with the given QName object.
	 * @param name The fully qualified name.
	 */
	setName(name: QName): void;

	/**
	 * Sets the namespace for this XML element.
	 * If the namespace has not been declared in the tree above this element, adds a namespace declaration.
	 * @param namespace The namespace to set.
	 */
	setNamespace(namespace: Namespace): void;

	/**
	 * Returns an XML list containing all XML properties of this XML object that represent XML text nodes.
	 */
	text(): XML;

	/**
	 * Returns the string representation of this object.
	 * For text and attribute nodes, this is the textual value of the node; for other elements, this is the result of calling the toXMLString() method. If this XML object is a list, concatenates the result of calling toString() on each element.
	 */
	toString(): string;

	/**
	 * Returns an XML-encoded string representation of this XML object.
	 * Always includes the start tag, attributes and end tag of the XML object regardless of its content. It is provided for cases when the default XML to string conversion rules are not desired. Interprets the global settings XML.prettyPrint and XML.prettyIndent.
	 */
	toXMLString(): string;

	/**
	 * Evaluates the given XPath expression in accordance with the W3C XPath recommendation, using this XML object as the context node.
	 * @param expr The XPath expression to use.
	 */
	xpath(expr: string): XML;

}

/**
 * An XML list object.
 * In this implementation, an XMLList object is synonymous to the XML object. The constructor accepts an XML list, but everything else works like theXML object.
 */
interface XMLList {
}
declare const XMLList: XMLList;

interface UnitValueConstructor {
	readonly prototype: UnitValue;

	/**
	 * Creates a new UnitValue object.
	 */
	new(value: string | UnitValue): UnitValue;
	(value: string | UnitValue): UnitValue;

	/**
	 * The base unit for all conversions.
	 */
	baseUnit: UnitValue;

}
declare const UnitValue: UnitValueConstructor;

/**
 * Represents a measurement as a combination of values and unit.
 * Note that this object is not available in all applications.
 */
interface UnitValue {
	/**
	 * The base unit.
	 */
	baseUnit: UnitValue;

	/**
	 * The unit name.
	 */
	readonly type: string;

	/**
	 * The numeric value.
	 */
	value: number;

	/**
	 * Returns this instance as a different unit.
	 * @param unitName The unit name.
	 */
	as(unitName: string): UnitValue;

	/**
	 * Converts this instance to a different unit.
	 * @param unitName The unit name.
	 */
	convert(unitName: string): any;

}