/// <reference path="JavaScript.d.ts" />

/**
 * Defines the boundaries of a window within the screen’s coordinate space, or of a UI element within the container’s coordinate space.
 * A Bounds object is created when you set an element’s bounds property. You can set the property using a JavaScript object with properties namedleft, top, right, bottom or x, y, width, height, or an array with 4 values in the order [x, y, wd, ht].
 */
declare type Bounds = [number, number, number, number];

/**
 * Defines the size of a window or UI element. Contains a 2-element array.
 * Specifies the height and width of an element in pixels. A Dimension object is created when you set an element’s size property. You can set the property using a JavaScript object with named properties {width: wd, height: ht}, or an array with 2 values in the order [wd, ht].
 */
declare type Dimension = [number, number];

/**
 * Defines the location of a window or UI element. Contains a 2-element array.
 * Specifies the origin point of an element as horizontal and vertical pixel offsets from the origin of the element's coordinate space.
 * A Point object is created when you set an element’s location property. You can set the property using a JavaScript object with properties named x and y, or an array with 2 values in the order [x, y].
 */
declare type Point = [number, number];

/**
 * Defines the number of pixels between the edges of a container and its outermost child elements. Contains an array [ left, top, right, bottom ] whose elements define the margins between the left edge of a container and its leftmost child element, and so on.
 */
declare type Margins = [number, number, number, number];


declare type Alignment = number | 'top' | 'bottom' | 'left' | 'right' | 'fill' | 'center';

/**
 * A global module containing central information about ScriptUI. Not instantiable.
 */
declare module ScriptUI {
	/**
	 * Collects the enumerated values that can be used in the alignment and alignChildren properties of controls and containers.
	 * Predefined alignment values are: TOP, BOTTOM, LEFT, RIGHT, FILL, CENTER
	 */
	export enum Alignment {
		TOP,
		BOTTOM,
		LEFT,
		RIGHT,
		FILL,
		CENTER
	}

	/**
	 * Collects the enumerated values that can be used as the style argument to the ScriptUI.newFont() method.
	 * Predefined styles are REGULAR, BOLD, ITALIC, BOLDITALIC.
	 */
	export enum FontStyle {
		REGULAR,
		BOLD,
		ITALIC,
		BOLDITALIC
	}
}

/**
 * A global class containing central information about ScriptUI. Not instantiable.
 */
declare class ScriptUI {
	/**
	 * The font constants defined by the host application.
	 */
	static readonly applicationFonts: Object;

	/**
	 * An object whose properties are the names of compatability modes supported by the host application.
	 * The presence of ScriptUI.compatability.su1PanelCoordinates means that the application allows backward compatibility with the coordinate system of Panel elements in ScriptUI version 1.
	 */
	static readonly compatibility: any;

	/**
	 * A string containing the internal version number of the ScriptUI module.
	 */
	static readonly coreVersion: string;

	/**
	 * An object whose properties define attributes of the environment in which ScriptUI operates.
	 */
	static readonly environment: Environment;

	/**
	 * An object whose properties and methods provide access to objects used in the ScriptUI event system.
	 * It contains one function, createEvent(), which allows you to create event objects in order to simulate user-interaction event
	 */
	static readonly events: Events;

	/**
	 * A string containing the name of the UI component framework with which this version of ScriptUI is compatible.
	 */
	static readonly frameworkName: string;

	/**
	 * A string containing the version number of the ScriptUI component framework
	 */
	static readonly version: string;

	/**
	 * Finds and returns the resource for a given text string from the host application's resource data.
	 * If no string resource matches the given text, the text itself is returned.
	 * @param text The text to match.
	 */
	static getResourceText(text: string): string;

	/**
	 * Creates a new font object for use in text controls and titles.
	 * @param name The font name, or the font family name.
	 * @param style The font style; can be string, or one of the values of ScriptUI.FontStyle.
	 * @param size The font size in points.
	 */
	static newFont(name: string, style: string, size: number): ScriptUIFont;

	/**
	 * Loads a new image from resources or disk files into an image object.
	 * Creates a new global image object for use in controls that can display images, loading the associated images from the specified resources or image files.
	 * @param normal The resource name or the disk file path to the image used for the normal state.
	 * @param disabled The resource name, or the disk file path to the image used for the disabled state.
	 * @param pressed The resource name, or the file-system path to the image used for the pressed state.
	 * @param rollover The resource name, or the file-system path to the image used for the rollover state.
	 */
	static newImage(normal: string, disabled?: string, pressed?: string, rollover?: string): ScriptUIImage;
}


declare class _WindowOrContainer {
	/**
	 * Specifies how to align the child elements.
	 */
	alignChildren: Alignment | [Alignment, Alignment];

	/**
	 * The alignment style for this element. If defined, this value overrides the alignChildren setting for the parent container.
	 * This can be a single string, which indicates the alignment for the orientation specified in the parent container, or an array of two strings, indicating both the horizontal and vertical alignment (in that order). Allowed values depend on the orientation value of the parent container. They are not case sensitive.
	 * For orientation=row:top, bottom, fill
	 * For orientation=column: left, right, fill
	 * For orientation=stack:top, bottom, left, right, fill
	 */
	alignment: Alignment | [Alignment, Alignment];

	/**
	 * The boundaries of the element, in parent-relative coordinates.
	 * Setting an element's size or location changes its bounds property, and vice-versa.
	 */
	bounds: Bounds;

	/**
	 * An array of child elements.
	 */
	readonly children: (_Container|_Control)[];

	/**
	 * True if this element is enabled.
	 * An enabled element can accept input, according to its type. When false, control elements do not accept input, and all types of elements have a dimmed appearance.
	 */
	enabled: boolean;

	/**
	 * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
	 */
	graphics: ScriptUIGraphics;

	/**
	 * The help text that is displayed when the mouse hovers over the element.
	 */
	helpTip: string;

	/**
	 * The layout manager for this container.
	 * The first time a container object is made visible, ScriptUI invokes this layout manager by calling its layout() function. Default is an instance of the LayoutManager class that is automatically created when the container element is created.
	 */
	layout: _LayoutManager;

	/**
	 * The upper left corner of this element's frame relative to its parent.
	 * The location is defined as [bounds.x, bounds.y]. Setting an element's location changes its bounds property, and vice-versa.
	 */
	location: Point;

	/**
	 * The number of pixels between the edges of a container and the outermost child elements.
	 * You can specify different margins for each edge of the container. The default value is based on the type of container, and is chosen to match the standard Adobe UI guidelines.
	 */
	margins: Margins|number;

	/**
	 * The maximum height and width to which the element can be resized.
	 */
	maximumSize: Dimension;

	/**
	 * The layout orientation of children in a container.
	 * Interpreted by the layout manager for the container. The default LayoutManager  Object accepts the (case-insensitive) values row, column, or stack.For window and panel, the default is column, and for group the default is row. The allowed values for the container’s alignChildren and its children’s alignment properties depend on the orientation.
	 */
	orientation: 'row' | 'column' | 'stack';

	/**
	 * The parent element.
	 */
	readonly parent: _WindowOrContainer;

	/**
	 * The preferred size, used by layout managers to determine the best size for each element.
	 * If not explicitly set by a script, value is established by the UI framework in which ScriptUI is employed, and is based on such attributes of the element as its text, font, font size, icon size, and other UI framework-specific attributes.A script can explicitly set this value before the layout manager is invoked in order to establish an element size other than the default.
	 */
	preferredSize: Dimension;

	/**
	 * An object that contains one or more creation properties of the container (properties used only when the element is created).
	 * Creation properties of a Window object can include:
	 * resizeable: When true, the window can be resized by the user. Default is false.
	 * su1PanelCoordinates: Photoshop only. When true, the child panels of this window automatically adjust the positions of their children for compatability with Photoshop CS (in which the vertical coordinate was measured from outside the frame). Default is false. Individual panels can override the parent window’s setting.
	 * closeButton: Bridge only. When true, the title bar includes a button to close the window, if the platform and window type allow it. When false, it does not. Default is true. Not used for dialogs.
	 * maximizeButton: Bridge only. When true, the title bar includes a button to expand the window to its maximum size (typically, the entire screen), if the platform and window type allow it. When false, it does not. Default is false for type palette, true for type window. Not used for dialogs.
	 */
	properties: any;

	/**
	 * The current dimensions of this element.
	 * Initially undefined, and unless explicitly set by a script, it is defined by a LayoutManager . A script can explicitly set size before the layout manager is invoked to establish an element size other than the preferredSize or the default size, but this is not recommended. Defined as [bounds.width, bounds.height]. Setting an element's size changes its bounds property, and vice-versa.
	 */
	size: Dimension;

	/**
	 * The number of pixels separating one child element from its adjacent sibling element.
	 * Because each container holds only a single row or column of children, only a single spacing value is needed for a container. The default value is based on the type of container, and is chosen to match standard Adobe UI guidelines.
	 */
	spacing: number;

	/**
	 * The element type
	 */
	readonly type: string;

	/**
	 * True if this element is shown, false if it is hidden.
	 * When a container is hidden, its children are also hidden, but they retain their own visibility values, and are shown or hidden accordingly when the parent is next shown.
	 */
	visible: boolean;

	/**
	 * The window that this element belongs to.
	 */
	readonly window: Window;

	/**
	 * The bounds of this element relative to the top-level parent window.
	 */
	readonly windowBounds: Bounds;

	add(type: 'button', bounds?: Bounds, text?: string, creation_properties?: {
		name?: string;
	}): Button;

	add(type: 'checkbox', bounds?: Bounds, text?: string, creation_properties?: {
		name?: string;
	}): Checkbox;

	add(type: 'dropdownlist', bounds?: Bounds, items?: string[], creation_properties?: {
		name?: string;
		items?: string[];
	}): DropDownList;

	add(type: 'edittext', bounds?: Bounds, text?: string, creation_properties?: {
		name?: string;
		readonly?: boolean;
		noecho?: boolean;
		enterKeySignalsOnChange?: boolean;
		borderless?: boolean;
		multiline?: boolean;
		scrollable?: boolean;
	}): EditText;

	add(type: 'flashplayer', bounds?: Bounds, movieToLoad?: string | File, creation_properties?: {
		name?: string;
	}): FlashPlayer;

	add(type: 'group', bounds?: Bounds, creation_properties?: {
		name?: string;
	}): Group;

	add(type: 'iconbutton', bounds?: Bounds, icon?: string | File, creation_properties?: {
		name?: string;
		style?: string;
		toggle?: boolean;
	}): IconButton;

	add(type: 'image', bounds?: Bounds, icon?: string | File, creation_properties?: {
		name?: string;
	}): Image;

	add(type: 'listbox', bounds?: Bounds, items?: string[], creation_properties?: {
		name?: string;
		multiselect?: boolean;
		items?: string[];
		numberOfColumns?: number;
		showHeaders?: boolean;
		columnWidths?: number[];
		columnTitles?: string[];
	}): ListBox;

	add(type: 'panel', bounds?: Bounds, text?: string, creation_properties?: {
		name?: string;
		borderStyle?: string;
		su1PanelCoordinates?: boolean;
	}): Panel;

	add(type: 'progressbar', bounds?: Bounds, value?: number, minvalue?: number, maxvalue?: number, creation_properties?: {
		name?: string;
	}): ProgressBar;

	add(type: 'radiobutton', bounds?: Bounds, text?: string, creation_properties?: {
		name?: string;
	}): RadioButton;

	add(type: 'scrollbar', bounds?: Bounds, value?: number, minvalue?: number, maxvalue?: number, creation_properties?: {
		name?: string;
	}): Scrollbar;

	add(type: 'slider', bounds?: Bounds, value?: number, minvalue?: number, maxvalue?: number, creation_properties?: {
		name?: string;
	}): Slider;

	add(type: 'statictext', bounds?: Bounds, text?: string, creation_properties?: {
		name?: string;
		multiline?: boolean;
		scrolling?: boolean;
		truncate?: string;
	}): StaticText;

	add(type: 'tab', bounds?: Bounds, text?: string, creation_properties?: {
		name?: string;
	}): Tab;

	add(type: 'tabbedpanel', bounds?: Bounds, text?: string, creation_properties?: {
		name?: string;
	}): TabbedPanel;

	add(type: 'treeview', bounds?: Bounds, items?: string[], creation_properties?: {
		name?: string;
		items?: string[];
	}): TreeView;

	/**
	 * Registers an event handler for a particular type of event occuring in this element.
	 * @param eventName The name of the event. Event names are listed in the JavaScript Tools Guide.
	 * @param handler The function that handles the event. This can be the name of a function defined in the extension, or a locally defined handler function to be executed when the event occurs. A handler function takes one argument, the UIEvent object.
	 * @param capturePhase When true, the handler is called only in the capturing phase of the event propagation. Default is false, meaning that the handler is called in the bubbling phase if this object is an ancestor of the target, or in the at-target phase if this object is itself the target.
	 */
	addEventListener(eventName: string, handler: (e: UIEvent) => void, capturePhase?: boolean): void;

	/**
	 * Simulates the occurrence of an event in this target.
	 * A script can create a UIEvent object for a specific event and pass it to this method to start the event propagation for the event.
	 */
	dispatchEvent(): UIEvent;

	/**
	 * Searches for the named element among the children of this window or container, and returns the object if found.
	 * @param name The name of the element, as specified in the name creation property.
	 */
	findElement(name: string): _Control | null;

	/**
	 * Hides this element.
	 */
	hide(): void;

	/**
	 * Sends a notification message, simulating the specified user interaction event.
	 * @param eventName The name of the control event handler to call. One of: onClick, onChange, onChanging. By default, simulates the onChange event for an edittext control, an onClick event for controls that support that event.
	 */
	notify(eventName?: string): void;

	/**
	 * Removes the specified child control from this group's children array.
	 * No error results if the child does not exist.
	 * @param what The child control to remove, specified by 0-based index, text property value, or as a control object.
	 */
	remove(index: number): void;

	/**
	 * Removes the specified child control from this group's children array.
	 * No error results if the child does not exist.
	 * @param what The child control to remove, specified by 0-based index, text property value, or as a control object.
	 */
	remove(text: string): void;

	/**
	 * Removes the specified child control from this group's children array.
	 * No error results if the child does not exist.
	 * @param what The child control to remove, specified by 0-based index, text property value, or as a control object.
	 */
	remove(what: any): void;

	/**
	 * Unregisters an event handler for a particular type of event occuring in this element.
	 * All arguments must be identical to those that were used to register the event handler.
	 * @param eventName The name of the event.
	 * @param handler The function that handles the event.
	 * @param capturePhase Whether to call the handler only in the capturing phase of the event propagation.
	 */
	removeEventListener(eventName: string, handler: (e: UIEvent) => void, capturePhase?: boolean): boolean;

	/**
	 * Shows this element.
	 * When a window or container is hidden, its children are also hidden, but when it is shown again, the children retain their own visibility states.
	 */
	show(): void;

	/**
	 * An event-handler callback function, called when the panel is about to be drawn.
	 * Allows the script to modify or control the appearance, using the control’s associated ScriptUIGraphics object. Handler takes one argument, a DrawState object.
	 */
	onDraw: Function;

	/**
	 * An event-handler callback function, called when the element acquires the keyboard focus.
	 * Called when the user gives the control the keyboard focus by clicking it or tabbing into it.
	 */
	onActivate: Function;

	/**
	 * An event-handler callback function, calledwhen the window is about to be closed.
	 * Called when a request is made to close the window, either by an explicit call to the close() function or by a user action (clicking the OS-specific close icon in the title bar). The function is called before the window actually closes; it can return false to cancel the close operation.
	 */
	onClose: Function;

	/**
	 * An event-handler callback function, called when the window loses the keyboard focus.
	 * Called when the user moves the keyboard focus from the previously active window to another window.
	 */
	onDeactivate: Function;

	/**
	 * An event-handler callback function, calledwhen the windowhas been moved
	 */
	onMove: Function;

	/**
	 * An event-handler callback function, calledwhen the window is being moved
	 * Called while a window in being moved, each time the position changes. A handler can monitor the move operation.
	 */
	onMoving: Function;

	/**
	 * An event-handler callback function, called after the window has been resized
	 */
	onResize: Function;

	/**
	 * An event-handler callback function, called while a window is being resized
	 * Called while a window is being resized, each time the height or width changes. A handler can monitor the resize operation.
	 */
	onResizing: Function;

	/**
	 * In Windows only, an event-handler callback function, called a shortcut-key sequence is typed that matches the shortcutKey value for this window.
	 */
	onShortcutKey: Function;

	/**
	 * An event-handler callback function, called just before the window is displayed
	 * Called when a request is made to open the window using the show() method, before the window is made visible, but after automatic layout is complete. A handler can modify the results of the automatic layout.
	 */
	onShow: Function;
}

/**
 * The instance represents a top-level window or dialog box, which contains user-interface elements.
 * The globally available Window object provides access to predefined and script-defined windows.
 */
declare class Window extends _WindowOrContainer {
	/**
	 * Deprecated. Use ScriptUI.frameworkName instead.
	 */
	static frameworkName: string;

	/**
	 * Deprecated. Use ScriptUI.version instead.
	 */
	static readonly version: any;

	/**
	 * Displays a platform-standard dialog containing a short message and an OK button.
	 * @param message TThe string for the displayed message.
	 * @param title A string to appear as the title of the dialog, if the platform supports a title. Ignored in Mac OS, which does not support titles for alert dialogs. The default title string is "Script Alert".
	 * @param errorIcon When true, the platform-standard alert icon is replaced by the platform-standard error icon in the dialog. Ignored in Mac OS, which does not support icons for alert dialogs.
	 */
	static alert(message: string, title?: string, errorIcon?: boolean): void;

	/**
	 * Displays a platform-standard dialog containing a short message and two buttons labeled Yes and No.
	 * Returns true if the user clicked Yes, false if the user clicked No.
	 * @param message The string for the displayed message.
	 * @param noAsDefault When true, the No button is the default choice, selected when the user types Enter. Default is false, meaning that Yes is the default choice.
	 * @param title A string to appear as the title of the dialog, if the platform supports a title. Ignored in Mac OS, which does not support titles for alert dialogs. The default title string is "Script Alert".
	 */
	static confirm(message: string, noAsDefault?: boolean, title?: string): boolean;

	/**
	 * Use this method to find an existing window.
	 * This includes windows defined by ScriptUI resource strings, windows already created by a script, and windows created by the application (if the application supports this case). This function is not supported by all applications. Returns a Window object found or generated from the resource, or null if no such window or resource exists.
	 * @param type The name of a predefined resource available to JavaScript in the current application; or the window type. If a title is specified, the type is used if more than one window with that title is found. Can be null or the empty string.
	 * @param title The window title.
	 */
	static find(type: string, title: string): Window;

	/**
	 * Displays a modal dialog that returns the user’s text input.
	 * Returns the value of the text edit field if the user clicked OK, null if the user clicked Cancel.
	 * @param prompt The string for the displayed message.
	 * @param default_ The initial value to be displayed in the text edit field.
	 * @param title A string to appear as the title of the dialog. In Windows, this appears in the window’s frame; in Mac OS it appears above the message. The default title string is "Script Prompt".
	 */
	static prompt(prompt: string, default_?: string, title?: string): string;

	/**
	 * Creates a new window.
	 * @param type The window type. One of:
	 * window: Creates a simple window that can be used as a main window for an application. (Not supported by Photoshop CS3.)
	 * palette: Creates a modeless dialog, also called a floating palette. (Not supported by Photoshop CS3.)
	 * dialog: Creates a modal dialog. This argument can also be a ScriptUI resource specification; in that case, all other arguments are ignored.
	 * @param title The window title, a localizable string.
	 * @param bounds The window's position and size.
	 * @param properties An object containing creation-only properties. Can contain any of these properties: resizeable: When true, the window can be resized by the user. Default is false. su1PanelCoordinates: Photoshop only. When true, the child panels of this window automatically adjust the positions of their children for compatability with Photoshop CS (in which the vertical coordinate was measured from outside the frame). Default is false. Individual panels can override the parent window’s setting. closeButton:When true, the title bar includes a button to close the window, if the platform and window type allow it. When false, it does not. Default is true. Not used for dialogs. maximizeButton:When true, the title bar includes a button to expand the window to its maximum size (typically, the entire screen), if the platform and window type allow it. When false, it does not. Default is false for type palette, true for type window. Not used for dialogs. minimizeButton: When true, the title bar includes a button to minimize or iconify the window, if the platform and window type allow it. When false, it does not. Default is false for type palette, true for type window. Main windows cannot have a minimize button in Mac OS. Not used for dialogs. independent:When true, a window of type window is independent of other application windows, and can be hidden behind them in Windows. In Mac OS, has no effect. Default is false. borderless:When true, the window has no title bar or borders. Properties that control those features are ignored.
	 */
	constructor(type: string, title?: string, bounds?: Bounds, properties?: {
		resizeable?: boolean;
		closeButton?: boolean;
		maximizeButton?: boolean;
		minimizeButton?: boolean;
		independent?: boolean;
		borderless?: boolean;
	});

	/**
	 * Set to true to make this window active.
	 * A modal dialog that is visible is by definition the active dialog.
	 * An active palette is the front-most window.
	 * An active control is the one with focus—that is, the one that accepts keystrokes, or in the case of a Button, be selected when the user typesReturn or Enter.
	 */
	active: boolean;

	/**
	 * For windows of type dialog, the UI element to notify when the user presses a cancellation key combination.
	 * The cancellation key is the Esc key. By default, looks for a button whose name or text is "cancel" (case disregarded).
	 */
	cancelElement: any;

	/**
	 * For windows of type dialog, the UI element to notify when the user presses a Enter key.
	 * By default, looks for a button whose name or text is "ok" (case disregarded).
	 */
	defaultElement: any;

	/**
	 * The bounds of the window frame in screen coordinates.
	 * The frame consists of the title bar and borders that enclose the content region of a window, depending on the windowing system.
	 */
	readonly frameBounds: Bounds;

	/**
	 * The top left corner of the window frame in screen coordinates.
	 * The same as [frameBounds.x, frameBounds.y]. Set this value to move the window frame to the specified location on the screen. The frameBounds value changes accordingly.
	 */
	frameLocation: Point;

	/**
	 * The size and location of the window's frame in screen coordinates.
	 */
	readonly frameSize: Dimension;

	/**
	 * True if the window is expanded.
	 */
	maximized: boolean;

	/**
	 * True if the window is minimized or iconified.
	 */
	minimized: boolean;

	/**
	 * The opacity of the window, in the range [0..1].
	 * A value of 1.0 (the default) makes the window completely opaque, a value of 0 makes it completely transparent. Intermediate values make it partially transparent to any degree.
	 */
	opacity: number;

	/**
	 * When true, the window can be resized by the user. Default is false.
	 */
	resizeable: boolean;

	/**
	 * The keypress combination that invokes this element's onShortcutKey() callback.
	 */
	shortcutKey: string;

	/**
	 * The title, label, or displayed text, a localizeable string.
	 * Does not apply to containers of type group.
	 */
	text: string;

	/**
	 * Centers this window on screen or with repect to another window.
	 * @param window The relative window. If not specified, centers on the screen.
	 */
	center(window?: Window): void;

	/**
	 * Closes this window.
	 * . If an onClose() callback is defined for the window, calls that function before closing the window.
	 * @param return A number to be returned from the show() method that invoked this window as a modal dialog.
	 */
	close(return_?: any): void;

	update(): void;
}

declare class _Container extends _WindowOrContainer {
	/**
	 * A number of characters for which to reserve space when calculating the preferred size of the window.
	 */
	characters: number;
}

/**
 * A container for other types of controls, with an optional frame.
 * A panel can specify layout options for its child elements. Hiding a panel hides all its children. Making it visible makes visible those children that are not individually hidden.
 */
declare class Panel extends _Container {
	/**
	 * True if this element is enabled.
	 * An enabled element can accept input, according to its type. When false, control elements do not accept input, and all types of elements have a dimmed appearance.
	 */
	enabled: boolean;

	/**
	 * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
	 */
	readonly graphics: ScriptUIGraphics;

	/**
	 * The help text that is displayed when the mouse hovers over the element.
	 */
	helpTip: string;

	/**
	 * The number of pixels to indent the element during automatic layout.
	 * Applies for column orientation and left alignment, or row orientation and top alignment.
	 */
	indent: number;

	/**
	 * The default text justification style for child text elements.
	 * One of left, center, or right. Justification only works if this value is set on creation of the element.
	 */
	justify: string;

	/**
	 * The layout manager for this container.
	 * The first time a container object is made visible, ScriptUI invokes this layout manager by calling its layout() function. Default is an instance of the LayoutManager class that is automatically created when the container element is created.
	 */
	layout: LayoutManager;

	/**
	 * The upper left corner of this element's frame relative to its parent.
	 * The location is defined as [bounds.x, bounds.y]. Setting an element's location changes its bounds property, and vice-versa.
	 */
	location: Point;

	/**
	 * The number of pixels between the edges of a container and the outermost child elements.
	 * You can specify different margins for each edge of the container. The default value is based on the type of container, and is chosen to match the standard Adobe UI guidelines.
	 */
	margins: number;

	/**
	 * The maximum height and width to which the element can be resized.
	 */
	maximumSize: Dimension;

	/**
	 * The minimum height and width to which the element can be resized.
	 */
	minimumSize: Dimension;

	/**
	 * The layout orientation of children in a container.
	 * Interpreted by the layout manager for the container. The default LayoutManager  Object accepts the (case-insensitive) values row, column, or stack.For window and panel, the default is column, and for group the default is row. The allowed values for the container’s alignChildren and its children’s alignment properties depend on the orientation.
	 */
	orientation: 'row' | 'column' | 'stack';

	/**
	 * The preferred size, used by layout managers to determine the best size for each element.
	 * If not explicitly set by a script, value is established by the UI framework in which ScriptUI is employed, and is based on such attributes of the element as its text, font, font size, icon size, and other UI framework-specific attributes.A script can explicitly set this value before the layout manager is invoked in order to establish an element size other than the default.
	 */
	preferredSize: Dimension;

	/**
	 * An object that contains one or more creation properties of the control (properties used only when the element is created).
	 * Creation properties of a Panel object can include:
	 * borderStyle: A string that specifies the appearance of the border drawn around the panel. One of black, etched, gray, raised, sunken. Default is etched.
	 * su1PanelCoordinates: Photoshop only. When true, this panel automatically adjusts the positions of its children for compatability with Photoshop CS. Default is false, meaning that the panel does not adjust the positions of its children, even if the parent window has automatic adjustment enabled.
	 */
	properties: Object;

	/**
	 * The current dimensions of this element.
	 * Initially undefined, and unless explicitly set by a script, it is defined by a LayoutManager . A script can explicitly set size before the layout manager is invoked to establish an element size other than the preferredSize or the default size, but this is not recommended. Defined as [bounds.width, bounds.height]. Setting an element's size changes its bounds property, and vice-versa.
	 */
	size: Dimension;

	/**
	 * The number of pixels separating one child element from its adjacent sibling element.
	 * Because each container holds only a single row or column of children, only a single spacing value is needed for a container. The default value is based on the type of container, and is chosen to match standard Adobe UI guidelines.
	 */
	spacing: number;

	/**
	 * The title or label text, a localizable string.
	 */
	text: string;

	/**
	 * The element type; "panel".
	 */
	readonly type: string;

	/**
	 * True if this element is shown, false if it is hidden.
	 * When a container is hidden, its children are also hidden, but they retain their own visibility values, and are shown or hidden accordingly when the parent is next shown.
	 */
	visible: boolean;

	/**
	 * The window that this element belongs to.
	 */
	readonly window: Window;

	/**
	 * The bounds of this element relative to the top-level parent window.
	 */
	readonly windowBounds: Bounds;

	/**
	 * Registers an event handler for a particular type of event occuring in this element.
	 * @param eventName The name of the event. Event names are listed in the JavaScript Tools Guide.
	 * @param handler The function that handles the event. This can be the name of a function defined in the extension, or a locally defined handler function to be executed when the event occurs. A handler function takes one argument, the UIEvent object.
	 * @param capturePhase When true, the handler is called only in the capturing phase of the event propagation. Default is false, meaning that the handler is called in the bubbling phase if this object is an ancestor of the target, or in the at-target phase if this object is itself the target.
	 */
	addEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;

	/**
	 * Simulates the occurrence of an event in this target.
	 * A script can create a UIEvent object for a specific event and pass it to this method to start the event propagation for the event.
	 */
	dispatchEvent(): UIEvent;

	/**
	 * Hides this element.
	 */
	hide(): void;

	/**
	 * Removes the specified child control from this group's children array.
	 * No error results if the child does not exist.
	 * @param what The child control to remove, specified by 0-based index, text property value, or as a control object.
	 */
	remove(what: any): void;

	/**
	 * Unregisters an event handler for a particular type of event occuring in this element.
	 * All arguments must be identical to those that were used to register the event handler.
	 * @param eventName The name of the event.
	 * @param handler The function that handles the event.
	 * @param capturePhase Whether to call the handler only in the capturing phase of the event propagation.
	 */
	removeEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;

	/**
	 * Shows this element.
	 * When a window or container is hidden, its children are also hidden, but when it is shown again, the children retain their own visibility states.
	 */
	show(): void;
}

/**
 * A panel that contains only Tab objects as its immediate children. It has a selection property that contains the currently active Tab child. When the value of the selection property changes, either by a user selecting a different tab, or by a script setting the property, the TabbedPanel receives an onChange notification.
 */
declare class TabbedPanel extends _Container {
	selection: Tab;

	/**
	 * The text to display, a localizable string.
	 */
	text: string;

	/**
	 * The title of the element.
	 */
	title: string;

	/**
	 * The way the text label is shown in relation to the element.
	 */
	titleLayout: _TitleLayout;
}

/**
 * A general container whose parent is a TabbedPanel, with a selectable tab showing a localizable text value. Its size and position are determined by the parent.
 */
declare class Tab extends _Container {
	/**
	 * The text to display, a localizable string.
	 */
	text: string;
}

/**
 * A container for other controls within a window.
 * A group can specify layout options for its child elements. Hiding a group hides all its children. Making it visible makes visible those children that are not individually hidden.
 */
declare class Group extends _Container {}

/**
 * An object used to draw custom graphics, found in the graphics property of window, container, and control objects.
 * Allows a script to customize aspects of the element’s appearance, such as the color and font. Use an onDraw callback function to set these properties or call the functions.All measurements are in pixels.
 */
declare class ScriptUIGraphics {
	/**
	 * Contains the enumerated constants for the type argument of newBrush().
	 * Type constants are: SOLID_COLOR, THEME_COLOR.
	 */
	BrushType: {
		SOLID_COLOR: number;
		THEME_COLOR: number;
	};

	/**
	 * Contains the enumerated constants for the type argument of newPen().
	 * Type constants are: SOLID_COLOR, THEME_COLOR.
	 */
	PenType: {
		SOLID_COLOR: number;
		THEME_COLOR: number;
	};

	/**
	 * The background color for containers; for non-containers, the parent background color.
	 * The paint color and style is defined in this brush object.This property is only supported for controls likedropdownlist, edittext, and listbox.
	 */
	backgroundColor: ScriptUIBrush;

	/**
	 * The current drawing path, encapsulated in a path object.
	 */
	currentPath: ScriptUIPath;

	/**
	 * The current position in the current drawing path.
	 */
	currentPoint: Point;

	/**
	 * The background color for containers when disabled or inactive; for non-containers, the parent background color.
	 * The paint color and style is defined in this brush object.This property is only supported for controls likedropdownlist, edittext, and listbox.
	 */
	disabledBackgroundColor: ScriptUIBrush;

	/**
	 * The text color when the element is disabled or inactive.
	 * The paint color and style is defined in this pen object.
	 */
	disabledForegroundColor: ScriptUIPen;

	/**
	 * The default font to use for displaying text.
	 */
	font: ScriptUIFont;

	/**
	 * The text color.
	 * The paint color and style is defined in this pen object.
	 */
	foregroundColor: ScriptUIPen;

	/**
	 * Closes the current path.
	 * Defines a line from the current postion (currentPoint) to the start point of the current path (the value of currentPath).
	 */
	closePath(): void;

	/**
	 * Draws a focus ring within a region of this element.
	 * @param left The left coordinate of the region. Value is relative to the origin of this element.
	 * @param top The top coordinate of the region. Value is relative to the origin of this element.
	 * @param width The width of the region in pixels.
	 * @param height The height of the region in pixels.
	 */
	drawFocusRing(left: number, top: number, width?: number, height?: number): void;

	/**
	 * Draws an image within a given region of the element.
	 * Uses the version of the image that is appropriate to the element's current state.
	 * @param image The image to draw. This object contains different versions of an image appropriate to various element states, such as a dimmed version for the disabled state.
	 * @param left The left coordinate of the region, relative to the origin of this element.
	 * @param top The top coordinate of the region, relative to the origin of this element.
	 * @param width The width in pixels. If provided, the image is stretched or shrunk to fit. If omitted, uses the original image width.
	 * @param height The height in pixels. If provided, the image is stretched or shrunk to fit. If omitted, uses the original image height.
	 */
	drawImage(image: ScriptUIImage, left: number, top: number, width?: number, height?: number): void;

	/**
	 * Draw the platform-specific control associated with this element.
	 */
	drawOSControl(): void;

	/**
	 * Draw a string of text starting at a given point in this element, using a given drawing pen and font.
	 * @param text The text string.
	 * @param pen The drawing pen to use.
	 * @param x The left coordinate, relative to the origin of this element.
	 * @param y The top coordinate, relative to the origin of this element.
	 * @param font The font to use. Default is the  font value in this object.
	 */
	drawString(text: string, pen: ScriptUIPen, x: number, y: number, font?: ScriptUIFont): void;

	/**
	 * Defines an elliptical path within a given rectangular area in the currentPath object, which can be filled using fillPath() or stroked using strokePath().
	 * Returns a Point object for the upper left corner of the area, which is the new currentPoint.
	 * @param left The left coordinate of the region, relative to the origin of this element.
	 * @param top The top coordinate of the region, relative to the origin of this element.
	 * @param width The width of the region in pixels.
	 * @param height The height of the region in pixels.
	 */
	ellipsePath(left: number, top: number, width?: number, height?: number): Point;

	/**
	 * Fills a path using a given painting brush.
	 * @param brush The brush object that defines the fill color.
	 * @param path The path object. Default is the currentPath.
	 */
	fillPath(brush: ScriptUIBrush, path?: ScriptUIPath): void;

	/**
	 * Adds a path segment to the currentPath.
	 * The line is defined from the currentPoint to the specified destination point. Returns the Point objectfor the destination point, which becomes the new value of currentPoint.
	 * @param x The X coordinate for the destination point, relative to the origin of this element.
	 * @param y The Y coordinate for the destination point, relative to the origin of this element.
	 */
	lineto(x: number, y: number): Point;

	/**
	 * Calculates the size needed to display a string using the given font.
	 * Returns a Dimension object that contains the height and width of the string in pixels.
	 * @param text The text string to measure.
	 * @param font The font to use. Default is the font value in this object.
	 * @param boundingWidth The bounding width.
	 */
	measureString(text: string, font?: ScriptUIFont, boundingWidth?: number): Dimension;

	/**
	 * Adds a given point to the currentPath, and makes it the current drawing position.
	 * Returns the Point object which is the new value of currentPoint.
	 * @param x The X coordinate for the new point, relative to the origin of this element.
	 * @param y The Y coordinate for the new point, relative to the origin of this element.
	 */
	moveto(x: number, y: number): Point;

	/**
	 * Creates a new painting brush object.
	 * @param type The brush type, solid or theme. One of the constants ScriptUIGraphics.BrushType.SOLID_COLOR or ScriptUIGraphics.BrushType.THEME_COLOR.
	 * @param color The brush color. If type is SOLID_COLOR, the color expressed as an array of three or four values, in the form [R, B, G, A] specifying the red, green, and blue values of the color and, optionally, the opacity (alpha channel). All values are numbers in the range [0.0..1.0]. An opacity of 0 is fully transparent, and an opacity of 1 is fully opaque. If the type is THEME_COLOR, the name string of the theme. Theme colors are defined by the host application.
	 */
	newBrush(brushType: number, color: [number, number, number, number] | string): ScriptUIBrush;

	/**
	 * Creates a new, empty path object.
	 * Replaces any existing path in currentPath.
	 */
	newPath(): ScriptUIPath;

	/**
	 * Creates a new drawing pen object.
	 * @param type The pen type, solid or theme. One of the constants ScriptUIGraphics.PenType.SOLID_COLOR or ScriptUIGraphics.PenType.THEME_COLOR.
	 * @param color The pen color. If type is SOLID_COLOR, the color expressed as an array of three or four values, in the form [R, B, G, A] specifying the red, green, and blue values of the color and, optionally, the opacity (alpha channel). All values are numbers in the range [0.0..1.0]. An opacity of 0 is fully transparent, and an opacity of 1 is fully opaque. If the type is THEME_COLOR, the name string of the theme. Theme colors are defined by the host application.
	 * @param width The width of the pen line in pixels. The line is centered around the current point. For example, if the value is 2, drawing a line from (0, 10) to (5, 10) paints the two rows of pixels directly above and below y-position 10.
	 */
	newPen(penType: number, color: [number, number, number, number] | string, lineWidth: number): ScriptUIPen;

	/**
	 * Defines a rectangular path in the currentPath object.
	 * The rectangle can be filled using fillPath() or stroked using strokePath().Returns the Point objectfor the upper left corner of the rectangle, which becomes the new value of currentPoint.
	 * @param left The left coordinate relative to the origin of this element.
	 * @param top The top coordinate relative to the origin of this element.
	 * @param width The width in pixels.
	 * @param height The height in pixels.
	 */
	rectPath(left: number, top: number, width: number, height: number): Point;

	/**
	 * Strokes the path segments of a path with a given drawing pen.
	 * @param pen The drawing pen that defines the color and line width.
	 * @param path The path object. Default is the currentPath.
	 */
	strokePath(pen: ScriptUIPen, path?: ScriptUIPath): void;
}

/**
 * A painting brush that encapsulates a color or pattern used to fill paths.
 * Create with ScriptUIGraphics.newBrush(). Use as a value of  backgroundColor properties, and pass as an argument to the fillPath() method.
 */
declare class ScriptUIBrush {
	/**
	 * The brush color.
	 * The paint color to use when the type is SOLID_COLOR. An array in the form [R, B, G, A] specifying the red, green, blue values of the color and the opacity (alpha channel) value as numbers in the range [0.0..1.0]. An opacity of 0 is fully transparent, and an opacity of 1 is fully opaque.
	 */
	readonly color: [number, number, number, number];

	/**
	 * The theme name.
	 * The name of a color theme to use for drawing when the type is THEME_COLOR. Theme colors are defined by the host application.
	 */
	readonly theme: string;

	/**
	 * The brush type, solid or theme.
	 * One of these constants: ScriptUIGraphics.BrushType.SOLID_COLOR or ScriptUIGraphics.BrushType.THEME_COLOR
	 */
	readonly type: number;
}

/**
 * Encapsulates the qualities of a font used to draw text into a control.
 * Create with the newFont() method.Used as a value of font. Passed as an argument to drawString() and measureString().
 */
declare class ScriptUIFont {
	/**
	 * The font family name.
	 */
	readonly family: string;

	/**
	 * The complete font name, consisting of the family and style, if specified.
	 */
	readonly name: string;

	/**
	 * The font point size.
	 */
	readonly size: number;

	/**
	 * The font style. One of the constants in ScriptUIGraphics.FontStyle.
	 */
	readonly style: ScriptUI.FontStyle;

	/**
	 * The name of a substitution font, a fallback font to substitute for this font if the requested font family or style is not available.
	 */
	readonly substitute: string;
}

/**
 * Encapsulates a set of images that can be drawn into a control.
 * Different images can reflect the current state, such as a dimmed version for a disabled control. Create with the newImage() method. Passed as an argument to drawImage().
 */
declare class ScriptUIImage {
	/**
	 * The image format. One of: resource, JPEG, GIF, TIFF, PNG, or PICT (Macintosh).
	 */
	readonly format: string;

	/**
	 * The image name. Either the file name, or the resource name.
	 */
	readonly name: string;

	/**
	 * The full path to the file that contains the image.
	 */
	readonly pathname: string;

	/**
	 * The image size in pixels.
	 */
	readonly size: Dimension;
}

/**
 * A helper object that encapsulates a drawing path for a figure to be drawn into a window or control.
 * Create with the newPath(), moveto(), lineto(), rectPath(), and ellipsePath() methods.Used as value of currentPath, where it is acted upon by methods such as closePath().Pass as optional argument to fillPath() and strokePath(), which otherwise act upon the current path.
 */
declare class ScriptUIPath {}

/**
 * A drawing pen that defines a color and line width used to stroke paths.
 * Create with ScriptUIGraphics.newPen(). Use as a value of  foregroundColor properties, and pass as an argument to drawString() and strokePath() methods.
 */
declare class ScriptUIPen {
	/**
	 * The pen color.
	 * The paint color to use when the type is SOLID_COLOR. An array in the form [R, B, G, A] specifying the red, green, blue values of the color and the opacity (alpha channel) value as numbers in the range [0.0..1.0]. An opacity of 0 is fully transparent, and an opacity of 1 is fully opaque.
	 */
	readonly color: [number, number, number, number];

	/**
	 * The pixel width of the drawing line.
	 */
	lineWidth: number;

	/**
	 * The theme name.
	 * The name of a color theme to use for drawing when the type is THEME_COLOR. Theme colors are defined by the host application.
	 */
	readonly theme: string;

	/**
	 * The pen type, solid or theme.
	 * One of these constants: ScriptUIGraphics.PenType.SOLID_COLOR or ScriptUIGraphics.PenType.THEME_COLOR
	 */
	readonly type: string;
}

/**
 * Describes an input state at the time of the triggering  ScriptUIGraphics.onDraw() event.
 * Contains properties that report whether the current control has the input focus, and the particular mouse button and keypress state. Passed in as argument to ScriptUIGraphics.onDraw().
 */
declare class DrawState {
	/**
	 * True if the Alt key is being pressed (in Windows only).
	 */
	readonly altKeyPressed: boolean;

	/**
	 * True if the Caps Lock key is being pressed.
	 */
	readonly capsLockKeyPressed: boolean;

	/**
	 * True if the Command key is being pressed (in Mac OS only).
	 */
	readonly cmdKeyPressed: boolean;

	/**
	 * True if the Ctrl key is being pressed.
	 */
	readonly ctrlKeyPressed: boolean;

	/**
	 * True if the element has the input focus.
	 */
	readonly hasFocus: boolean;

	/**
	 * True if the left mouse button is being pressed.
	 */
	readonly leftButtonPressed: boolean;

	/**
	 * True if the middle mouse button is being pressed.
	 */
	readonly middleButtonPressed: boolean;

	/**
	 * True if the cursor is hovering over this element.
	 */
	readonly mouseOver: boolean;

	/**
	 * True if the Num Lock key is being pressed.
	 */
	readonly numLockKeyPressed: boolean;

	/**
	 * True if the Option key is being pressed (in Mac OS only).
	 */
	readonly optKeyPressed: boolean;

	/**
	 * True if the right mouse button is being pressed.
	 */
	readonly rightButtonPressed: boolean;

	/**
	 * True if the Shift key is being pressed.
	 */
	readonly shiftKeyPressed: boolean;
}

/**
 * Base class for UIEvent.
 * Encapsulates input event information for an event that propagates through a container and control hierarchy.Implements W3C standard event handling.
 */
declare class UIEvent {
	/**
	 * True if the event is of a type that bubbles.
	 */
	readonly bubbles: boolean;

	/**
	 * True if the default action associated with the event can be canceled with preventDefault().
	 */
	readonly cancelable: boolean;

	/**
	 * The event target object which is currently handling the event. During capturing and bubbling, this is different from the property target.
	 */
	readonly currentTarget: boolean;

	/**
	 * The current phase of event propagation; one of none, target, capture, bubble.
	 */
	readonly eventPhase: string;

	/**
	 * The event target object for this event.
	 */
	readonly target: Object;

	/**
	 * The date and time at which the event occurred.
	 */
	readonly timeStamp: Date;

	/**
	 * The name of the event that this object represents.
	 * Event types are listed in the JavaScript Tools Guide.
	 */
	readonly type: string;

	/**
	 * The container or control object that dispatched the event.
	 */
	view: any;

	/**
	 * Modifies an event before it is dispatched to its targets. Takes effect only if UIEvent.eventPhase is Event.NOT_DISPATCHING. Ignored at all other phases.
	 * @param eventName The event name string.
	 * @param bubble When true, the event should be triggered in ancestors of the target object during the bubbling phase.
	 * @param isCancelable When true, the event can be cancelled.
	 * @param view The container or control object that dispatched the event.
	 * @param detail Details of the event, which vary according to the event type. The value is 1 or 2 for the click event, indicating a single or double click.
	 */
	initUIEvent(eventName: string, bubble: boolean, isCancelable: boolean, view: any, detail: number): void;

	/**
	 * Prevents the default action associated with this event from being called.
	 */
	preventDefault(): void;

	/**
	 * Stops the propagation of this event.
	 */
	stopPropagation(): void;
}

declare class KeyboardEvent extends UIEvent {
	/**
	 * True if the Alt or Option key is pressed.
	 */
	altKey: boolean;

	/**
	 * True if the Ctrl key is pressed.
	 */
	ctrlKey: boolean;

	/**
	 * True if the Cmd key (in Mac OS) or Windows key (in Windows) is pressed.
	 */
	metaKey: boolean;

	/**
	 * True if the Shift key is pressed.
	 */
	shiftKey: boolean;

	/**
	 * The key whose keypress generated the event, as a W3C identifier contained in a string; for example, "U+0044"
	 */
	keyIdentifier: string;

	/**
	 * A constant that identifies where on the keyboard the keypress occurred. One of:
	 * - DOM_KEY_LOCATION_STANDARD
	 * - DOM_KEY_LOCATION_LEFT
	 * - DOM_KEY_LOCATION_RIGHT
	 * - DOM_KEY_LOCATION_NUMPAD
	 */
	keyLocation: number;

	/**
	 * The key whose keypress generated the event, as a simple key name; for example "A".
	 */
	keyName: string;

	/**
	 * The name of the event that occurred. Key events types are:
	 * - keyup
	 * - keydown
	 */
	type: string;

	/**
	 * Returns true if the given modifier was active when the event occurred, false otherwise.
	 * @param keyIdentifier A string containing a modifier key identifier, one of: Alt, CapsLock, Control, Meta, NumLock, Scroll, Shift
	 */
	getModifierState(keyIdentifier: string): boolean;

	/**
	 * Reinitializes the object, allowing you to change the event properties after construction. Arguments set the corresponding properties. Returns undefined.
	 * @param eventName The event name string.
	 * @param bubble When true, the event should be triggered in ancestors of the target object during the bubbling phase.
	 * @param isCancelable When true, the event can be cancelled.
	 * @param view The container or control object that dispatched the event.
	 * @param keyID Sets the keyIdentifier value.
	 * @param keyLocation Sets the keyLocation value.
	 * @param modifiersList A whitespace-separated string of modifier key names, such as “Control Alt”.
	 */
	initKeyboardEvent(eventName: string, bubble: boolean, isCancelable: boolean, view: any, keyID: string, keyLocation: number, modifiersList: string): void;
}

/**
 * This type of object is passed to your registered event handler when a mouse-input event occurs.
 * The properties reflect the button and modifier-key state and pointer position at the time the event was generated.
 * In the case of nested elements, mouse event types are always targeted at the most deeply nested element.
 * Ancestors of the targeted element can use bubbling to obtain notification of mouse events which occur within its descendent elements.
 */
declare class MouseEvent extends UIEvent {
	/**
	 * When true, the ALT key was active. Value is undefined if the keyIdentifier is for a modifier key.
	 */
	altKey: boolean;

	/**
	 * Which mouse button changed state. (Some mice may provide or simulate more buttons, and values higher than 2 represent such buttons)
	 * 0 - The left button of a two- or three-button mouse or the one button on a one-button mouse, used to activate a UI button or select text.
	 * 1 - The middle button of a three-button mouse, or the mouse wheel.
	 * 2 - The right button, used to display a context menu, if present.
	 */
	button: number;

	/**
	 * The horizontal coordinate at which the event occurred relative to the target object. The origin is the top left of the control or window, inside any border decorations.
	 */
	clientX: number;

	/**
	 * The vertical coordinate at which the event occurred relative to the target object. The origin is the top left of the control or window, inside any border decorations.
	 */
	clientY: number;

	/**
	 * When true, the CTRL key was active. Value is undefined if the keyIdentifier is for a modifier key.
	 */
	ctrlKey: boolean;

	/**
	 * Details of the event, which vary according to the event type. For the click, mousedown, and mouseup events, the value is 1 for a single click, or 2 for a double click.
	 */
	detail: number;

	/**
	 * When true, the META or COMMAND` key was active. Value is undefined if the keyIdentifier is for a modifier key.
	 */
	metaKey: boolean;

	/**
     * - For a mouseover event, the UI element the pointer is leaving, if any.
     * - For a mouseout event, the UI element the pointer is entering, if any.
     * - Otherwise undefined.
	 */
	relatedTarget: any;

	/**
	 * The horizontal coordinate at which the event occurred relative to the screen.
	 */
	screenX: number;

	/**
	 * The vertical coordinate at which the event occurred relative to the screen.
	 */
	screenY: number;

	/**
	 * When true, the SHIFT key was active. Value is undefined if the keyIdentifier is for a modifier key.
	 */
	shiftKey: boolean;

	/**
	 * The name of the event that occurred. Mouse events types are:
	 * - mousedown
	 * - mouseup
	 * - mousemove
	 * - mouseover
	 * - mouseout
	 * - click (detail = 1 for single, 2 for double)
	 * The sequence of click events is: mousedown, mouseup, click.
	 */
	type: string;

	/**
	 * Returns true if the given modifier was active when the event occurred, false otherwise.
	 * @param keyIdentifier A string containing a modifier key identifier, one of: Alt, CapsLock, Control, Meta, NumLock, Scroll, Shift
	 */
	getModifierState(keyIdentifier: string): boolean;

	/**
	 * Reinitializes the object, allowing you to change the event properties after construction. Arguments set the corresponding properties.
	 * @param eventName The event name string.
	 * @param bubble When true, the event should be triggered in ancestors of the target object during the bubbling phase.
	 * @param isCancelable When true, the event can be cancelled.
	 * @param view The container or control object that dispatched the event.
	 * @param detail Sets the single-double click value for the click event.
	 * @param screenX Sets the event coordinates relative to the screen.
	 * @param screenY Sets the event coordinates relative to the screen.
	 * @param clientX Sets the event coordinates relative to the target object. The origin is the top left of the control or window, inside any border decorations.
	 * @param clientY Sets the event coordinates relative to the target object. The origin is the top left of the control or window, inside any border decorations.
	 * @param ctrlKey Sets the modifier key states.
	 * @param altKey Sets the modifier key states.
	 * @param shiftKey Sets the modifier key states.
	 * @param metaKey Sets the modifier key states.
	 * @param button Sets the mouse button.
	 * @param relatedTarget Optional. Sets the related target, if any, for a mouseover or mouseout event.
	 */
	initMouseEvent (eventName: string, bubble: boolean, isCancelable: boolean, view: any, detail: number, screenX: number, screenY: number, clientX: number, clientY: number, ctrlKey: boolean, altKey: boolean, shiftKey: boolean, metaKey: boolean, button: number, relatedTarget?: any): void;
}

/**
 * Controls the automatic layout behavior for a window or container.
 * The subclass AutoLayoutManager implements the default automatic layout behavior.
 */
declare interface _LayoutManager {
	/**
	 * Invokes the automatic layout behavior for the managed container.
	 * Adjusts sizes and positions of the child elements of this window or container according to the placement and alignment property values in the parent and children.
	 * Invoked automatically the first time the window is displayed. Thereafter, the script must invoke it explicitly to change the layout in case of changes in the size or position of the parent or children.
	 */
	layout(recalculate?: boolean): void;

	/**
	 * Performs a layout after a Window is resized, based on the new size.
	 * Resizes the child elements of the managed container with a given alignment type, after the window has been resized by the user.
	 */
	resize(): void;
}

declare class AutoLayoutManager implements _LayoutManager {
	layout(recalculate?: boolean): void;

	resize(): void;
}

interface _TitleLayout {
	/**
	 * The position of the title relative to the element, an array of [horizontal_alignment, vertical_alignment].
	 * For possible alignment values, see Alignment. Note that fill is not a valid alignment value for either horizontal or vertical alignment in this context.
	 */
	alignment: [Alignment, Alignment];

	/**
	 * A number; if 1 or greater, reserves a title width wide enough to hold the specified number of “X” characters in the font for this element. If 0, the title width is calculated based on the value of the title property during layout operations.
	 */
	characters: number;

	/**
	 * A number; 0 or greater. The number of pixels separating the title from the element.
	 */
	spacing: number;

	/**
	 * An array of numbers, [left, top, right, bottom] for the number of pixels separating each edge of an element and the visible content within that element. This overrides the default margins.
	 */
	margins: Margins;

	/**
	 * One of 'left', 'center', or 'right', how to justify the text when the space allocated for the title width is greater than the actual width of the text.
	 */
	justify: string;

	/**
	 * If 'middle' or 'end', defines where to remove characters from the text and replace them with an ellipsis (…) if the specified title does not fit within the space reserved for it. If 'none', and the text does not fit, characters are removed from the end, without any replacement ellipsis character.
	 */
	truncate: string;
}

declare class __Control {
	/**
	 * Registers an event handler for a particular type of event occurring in this control.
	 * @param eventName The event name string. Predefined event names include: change, changing, move, moving, resize, resizing, show, enterKey, focus, blur, mousedown, mouseup, mousemove, mouseover, mouseout, keyup, keydown, click
	 * @param handler The function to register for the specified event in this target. This can be the name of a function defined in the extension, or a locally defined handler function to be executed when the event occurs.
	 * @param capturePhase Optional. When true, the handler is called only in the capturing phase of the event propagation. Default is false, meaning that the handler is called in the bubbling phase if this object is an ancestor of the target, or in the at-target phase if this object is itself the target.
	 */
	addEventListener(eventName: string, handler: (e: UIEvent) => void, capturePhase?: boolean): void;

	/**
	 * Simulates the occurrence of an event in this target. A script can create an event object for a specific event, using ScriptUI.events.createEvent(), and pass it to this method to start the event propagation for the event.
	 * Returns false if any of the registered listeners that handled the event called the event object’s preventDefault() method, true otherwise.
	 * @param eventObj An object of the UIEvent base class.
	 */
	dispatchEvent(eventObj: UIEvent): boolean;

	/**
	 * Hides this container or control. When a window or container is hidden, its children are also hidden, but when it is shown again, the children retain their own visibility states.
	 */
	hide(): void;

	/**
	 * Sends a notification message, simulating the specified user interaction event.
	 * @param event Optional. The name of the control event handler to call. One of: onClick, onChange, onChanging. By default, simulates the onChange event for an EditText control, an onClick event for controls that support that event.
	 */
	notify(event?: string): void;

	/**
	 * Unregisters an event handler for a particular type of event occurring in this control. All arguments must be identical to those that were used to register the event handler.
	 * @param eventName The event name string.
	 * @param handler The function that was registered to handle the event.
	 * @param capturePhase Optional. Whether the handler was to respond only in the capture phase.
	 */
	removeEventListener(eventName: string, handler: (e: UIEvent) => void, capturePhase?: boolean): void;

	/**
	 * Shows this container or control. When a window or container is hidden, its children are also hidden, but when it is shown again, the children retain their own visibility states.
	 */
	show(): void;

	/**
	 * Called when a container or control is about to be drawn. Allows the script to modify or control the appearance, using the control’s associated ScriptUIGraphics object. Handler takes one argument, a DrawState object.
	 */
	onDraw: Function;

	onEnterKey: Function;

	/**
	 * Called when the user gives a control the keyboard focus by clicking it or tabbing into it.
	 */
	onActivate: Function;

	/**
	 * Called when the user removes keyboard focus from a previously active control by clicking outside it or tabbing out of it.
	 */
	onDeactivate: Function;
}

declare class _Control extends __Control {
	/**
	 * The alignment style for this element. If defined, this value overrides the alignChildren setting for the parent container.
	 * This can be a single string, which indicates the alignment for the orientation specified in the parent container, or an array of two strings, indicating both the horizontal and vertical alignment (in that order). Allowed values depend on the orientation value of the parent container. They are not case sensitive.
	 * For orientation=row:top, bottom, fill
	 * For orientation=column: left, right, fill
	 * For orientation=stack:top, bottom, left, right, fill
	 */
	alignment: Alignment | [Alignment, Alignment];

	/**
	 * The boundaries of the element, in parent-relative coordinates.
	 * Setting an element's size or location changes its bounds property, and vice-versa.
	 */
	bounds: Bounds;

	/**
	 * An array of child elements.
	 */
	children: any[];

	/**
	 * True if this element is enabled.
	 * An enabled element can accept input, according to its type. When false, control elements do not accept input, and all types of elements have a dimmed appearance.
	 */
	enabled: boolean;

	/**
	 * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
	 */
	graphics: ScriptUIGraphics;

	/**
	 * The help text that is displayed when the mouse hovers over the element.
	 */
	helpTip: string;

	/**
	 * The number of pixels to indent the element during automatic layout.
	 * Applies for column orientation and left alignment, or row orientation and top alignment.
	 */
	indent: number;

	/**
	 * The upper left corner of this element relative to its parent.
	 * The location is defined as [bounds.x, bounds.y]. Setting an element's location changes its bounds property, and vice-versa.
	 */
	location: Point;

	/**
	 * The maximum height and width to which the element can be resized.
	 */
	maximumSize: Dimension;

	/**
	 * The minimum height and width to which the element can be resized.
	 */
	minimumSize: Dimension;

	/**
	 * The parent element.
	 */
	parent: _WindowOrContainer;

	/**
	 * The preferred size, used by layout managers to determine the best size for each element.
	 * If not explicitly set by a script, value is established by the UI framework in which ScriptUI is employed, and is based on such attributes of the element as its text, font, font size, icon size, and other UI framework-specific attributes.A script can explicitly set this value before the layout manager is invoked in order to establish an element size other than the default.
	 */
	preferredSize: Dimension;

	properties: any;

	/**
	 * The current dimensions of this element.
	 * Initially undefined, and unless explicitly set by a script, it is defined by a LayoutManager . A script can explicitly set size before the layout manager is invoked to establish an element size other than the preferredSize or the default size, but this is not recommended. Defined as [bounds.width, bounds.height]. Setting an element's size changes its bounds property, and vice-versa.
	 */
	size: Dimension;

	/**
	 * The element type
	 */
	type: string;

	/**
	 * True if this element is shown, false if it is hidden.
	 * When a container is hidden, its children are also hidden, but they retain their own visibility values, and are shown or hidden accordingly when the parent is next shown.
	 */
	visible: boolean;

	/**
	 * The window that this element belongs to.
	 */
	window: Window;

	/**
	 * The bounds of this element relative to the top-level parent window.
	 */
	windowBounds: Bounds;
}

declare class _ListControl extends _Control {
	/**
	 * The array of choice items displayed in the drop-down or pop-up list.
	 * Access this array with a 0-based index. To obtain the number of items in the list, use items.length.The objects are created when items are specified on creation of the parent list object, or afterward using the list control’s add() method. Items in a drop-down list can be of type separator, in which case they cannot be selected, and are shown as a horizontal line. Each item has a selected property that is true when it is in the selected state.
	 */
	items: ListItem[];

	/**
	 * The width and height in pixels of each item in the list.
	 * Used by auto-layout to determine the preferredSize of the list, if not otherwise specified. If not set explicitly, the size of each item is set to match the largest height and width among all items in the list
	 */
	itemSize: Dimension;

	/**
	 * Adds an item to the choices in this list.
	 * Returns the item control object
	 * @param type The type of the child element. a basic, selectable item with a text label
	 * @param text The localizable text label for the item.
	 */
	add(type: 'item', text: string, index?: number): ListItem;

	/**
	 * Adds an separator to the choices in this list.
	 * Returns null.
	 * @param type The type of the child element. a separator.
	 * @param text The localizable text label for the item.
	 */
	add(type: 'separator', text: string, index?: number): null;

	/**
	 * Adds a node to the choisec in this list
	 * @param type The type of the child element. a node.
	 * @param text The localizable text label for the item
	 */
	add(type: 'node', text: string, index?: number): _Node;

	/**
	 * Retrieves an item object from the list that has a given text label.
	 * @param text The text string to match.
	 */
	find(text: string): ListItem;

	/**
	 * Removes a child item from the list.
	 * @param what The item or child to remove, specified by 0-based index
	 */
	remove(index: number): void;

	/**
	 * Removes a child item from the list.
	 * @param what The item or child to remove, specified by text value
	 */
	remove(text: string): void;

	/**
	 * Removes a child item from the list.
	 * @param what The item or child to remove, specified by ListItem object.
	 */
	remove(child: ListItem): void;

	/**
	 * Removes all child items from the list.
	 */
	removeAll(): void;

	/**
	 * An event-handler callback function, called when the content of the element has been changed
	 */
	onChange: Function;
}

/**
 * A pushbutton element containing a mouse-sensitive text string.
 * Calls the onClick() callback if the control is clicked or if its notify() method is called.
 */
declare class Button extends _Control {
	/**
	 * An object that contains one or more creation properties of the container (properties used only when the element is created).
	 * A Button object has no creation properties, but the third argument to the add() method that creates it can be the initial text value.
	 */
	properties: Object;

	/**
	 * True if this element is active.
	 * An active control is the one with keyboard focus—that is, the one that accepts keystrokes, or in the case of a Button, is selected when the user types Return or Enter in Windows, or the space bar in Mac OS.
	 */
	active: boolean;

	/**
	 * The text justification style.
	 * One of left, center, or right. Justification only works if this value is set on creation of the element.
	 */
	justify: string;

	/**
	 * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
	 */
	shortcutKey: string;

	/**
	 * The text to display, a localizable string.
	 */
	text: string;

	/**
	 * An event-handler callback function, called when the element has been clicked
	 */
	onClick: Function;

	/**
	 * An event-handler callback function, called when the element's shortcutKey sequence is typed in the active window.
	 * In Windows only.
	 */
	onShortcutKey: Function;
}

declare class Checkbox extends _Control {
	/**
	 * An object that contains one or more creation properties of the item (properties used only when the element is created).
	 * A CheckBox object has no creation properties. The third argument to the add() method that creates it is the text to be displayed.
	 */
	properties: Object;

	/**
	 * True if this element is active.
	 * An active control is the one with keyboard focus—that is, the one that accepts keystrokes, or in the case of a Button, is selected when the user types Return or Enter in Windows, or the space bar in Mac OS.
	 */
	active: boolean;

	/**
	 * A number of characters for which to reserve space when calculating the preferred size of the element.
	 */
	characters: number;

	/**
	 * The default text justification style for child text elements.
	 * One of left, center, or right. Justification only works if this value is set on creation of the element.
	 */
	justify: string;

	/**
	 * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
	 */
	shortcutKey: string;

	/**
	 * The text to display, a localizable string.
	 */
	text: string;

	/**
	 * The selection state of the control.
	 * When true, the control is in the selected or set state and displays the check mark. When false, shows an empty box.
	 */
	value: boolean;

	/**
	 * An event-handler callback function, called when the element has been clicked.
	 */
	onClick: Function;

	/**
	 * An event-handler callback function, called when the element's shortcutKey sequence is typed in the active window.
	 * In Windows only.
	 */
	onShortcutKey: Function;
}

/**
 * Displays a single visible item. When you click the control, a list drops down or pops up, and allows you to select one of the other items in the list.
 * Drop-down lists can have nonselectable separator items for visually separating groups of related items, as in a menu. You can specify the items on creation of the list object, or afterward using the list object’s add() method. You can remove items programmatically with the list object’s remove() and removeAll() methods. Calls the onChange() callback if the item selection is changed or if its notify() method is called.
 */
declare class DropDownList extends _ListControl {
	/**
	 * True if this element is active.
	 * An active control is the one with keyboard focus—that is, the one that accepts keystrokes, or in the case of a Button, is selected when the user types Return or Enter in Windows, or the space bar in Mac OS.
	 */
	active: boolean;

	/**
	 * The currently selectedlist item.
	 * Setting this value causes the selected item to be highlighted and to be scrolled into view if necessary. If no items are selected, the value is null. Set to null to deselect all items.You can set the value using the index of an item, rather than an object reference. If set to an index value that is out of range, the operation is ignored. When set with an index value, the property still returns an object reference.
	 */
	selection: ListItem | number;

	/**
	 * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
	 */
	shortcutKey: string;

	/**
	 * The title of the element.
	 */
	title: string;

	/**
	 * The way the text label is shown in relation to the element.
	 */
	titleLayout: _TitleLayout;

	/**
	 * An event-handler callback function, called when the element's shortcutKey sequence is typed in the active window.
	 * In Windows only.
	 */
	onShortcutKey: Function;
}

/**
 * An editable text field that the user can select and change.
 * Calls the onChange() callback if the text is changed and the user types Enter or the control loses focus, or if its notify() method is called. Calls the onChanging() callback when any change is made to the text. The textselection property contains currently selected text.
 */
declare class EditText extends _Control {
	/**
	 * True if this element is active.
	 * An active control is the one with keyboard focus—that is, the one that accepts keystrokes, or in the case of a Button, is selected when the user types Return or Enter in Windows, or the space bar in Mac OS.
	 */
	active: boolean;

	/**
	 * A number of characters for which to reserve space when calculating the preferred size of the element.
	 */
	characters: number;

	/**
	 * The text justification style.
	 * One of left, center, or right. Justification only works if this value is set on creation of the element.
	 */
	justify: string;

	/**
	 * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
	 */
	shortcutKey: string;

	/**
	 * The current text displayed in the field, a localizable string.
	 */
	text: string;

	/**
	 * The currently selected text, or the empty string if there is no text selected.
	 * Setting the value replaces the current text selection and modifies the value of the text property. If there is no current selection, inserts the new value into the text string at the current insertion point. The textselection value is reset to an empty string after it modifies the text value. Note that setting the textselection property before the element’s parent Window exists is an undefined operation.
	 */
	textselection: string;

	/**
	 * An event-handler callback function, called when the content of the element has been changed
	 * The handler is called only when the change is complete—that is, when focus moves to another control, or the user types Enter. The exact behavior depends on the creation parameter enterKeySignalsOnChange;see the properties property.
	 */
	onChange: Function;

	/**
	 * An event-handler callback function, called when the content of the element is in the process of changing
	 * The handler is called for each keypress while this control has the input focus.
	 */
	onChanging: Function;

	/**
	 * An event-handler callback function, called when the element's shortcutKey sequence is typed in the active window.
	 * In Windows only.
	 */
	onShortcutKey: Function;
}

/**
 * A control that contains a Flash Player, which can load and play Flash movies stored in SWF files.
 * The ScriptUI FlashPlayer element runs the Flash application within an Adobe application. The Flash application runs ActionScript, a different implementation of JavaScript from the ExtendScript version of JavaScript that Adobe applications run. A control object of this type contains functions that allow your script to load SWF files, control movie playback, and communicate with the ActionScript environment.
 */
declare class FlashPlayer extends _Control {
	/**
	 * An object that contains one or more creation properties of the container (properties used only when the element is created).
	 * A FlashPlayer object has no creation properties.
	 */
	properties: Object;

	/**
	 * True if this element is active.
	 * An active control is the one with keyboard focus—that is, the one that accepts keystrokes, or in the case of a Button, is selected when the user types Return or Enter in Windows, or the space bar in Mac OS.
	 */
	active: boolean;

	/**
	 * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
	 */
	shortcutKey: string;

	/**
	 * The title of the element.
	 */
	title: string;

	/**
	 * The way the text label is shown in relation to the element.
	 */
	titleLayout: _TitleLayout;

	/**
	 * Invokes an ActionScript function defined in the Flash application.
	 * Returns the result of the invoked function, which must be one of the allowed types. The ActionScript class and date objects are not supported as return values.
	 * @param name The name of a Flash ActionScript function that has been registered with the ExternalInterface object by the currently loaded SWF file.
	 * @param argument An argument to pass through to the function. There can be any number of arguments. An argument must be one of these data types:Number, String, Boolean, null, undefined, Object, Array. No other data types are supported.
	 */
	invokePlayerFunction(fnName: string, ...args: any[]): any;

	/**
	 * Loads a movie into the Flash Player, and begins playing it.
	 * @param file The File object for the SWF file to load.
	 */
	loadMovie(file: File): void;

	/**
	 * Restarts a movie that has been stopped.
	 * Do not use on a movie that is currently playing.The stopMovie()-playMovie() sequence does not work for SWF files produced by Flex, or for some files produced by Flash Authoring (depending on how they were implemented).
	 * @param rewind When true, restarts the movie from the beginning; otherwise, starts playing from the	point where it was stopped.
	 */
	playMovie(rewind: boolean): void;

	/**
	 * Halts playback of the current movie.
	 * The stopMovie()-playMovie() sequence does not work for SWF files produced by Flex, or for some files produced by Flash Authoring (depending on how they were implemented).Using stopMovie() from the player's hosting environment has no effect on an SWF file playing in a ScriptUI Flash Player element. It is, however, possible to produce an SWF using Flash Authoring that can stop itself in response to user interaction.
	 */
	stopMovie(): void;

	/**
	 * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
	 */
	onShortcutKey: Function;
}

/**
 * Amouse-sensitive pushbutton that displays an image instead of text.
 * Calls the onClick() callback if the control is clicked or if its notify() method is called.
 */
declare class IconButton extends _Control {
	/**
	 * An object that contains one or more creation properties of the container (properties used only when the element is created).
	 * Creation properties of an IconButton object can include:
	 * style:A string for the visual style, either "button", which has a visible border with a raised or 3D appearance, or "toolbutton", which has a flat appearance, appropriate for inclusion in a toolbar.
	 */
	properties: Object;

	/**
	 * True if this element is active.
	 * An active control is the one with keyboard focus—that is, the one that accepts keystrokes, or in the case of a Button, is selected when the user types Return or Enter in Windows, or the space bar in Mac OS.
	 */
	active: boolean;

	icon: string | File;

	/**
	 * The image object that defines the image to be drawn.
	 */
	image: ScriptUIImage | string | File;

	/**
	 * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
	 */
	shortcutKey: string;

	/**
	 * The current text displayed in the field, a localizable string.
	 */
	text: string;

	/**
	 * The title of the element.
	 */
	title: string;

	/**
	 * The way the text label is shown in relation to the element.
	 */
	titleLayout: _TitleLayout;

	/**
	 * An event-handler callback function, called when the element has been clicked.
	 */
	onClick: Function;

	/**
	 * An event-handler callback function, called when the element's shortcutKey sequence is typed in the active window.
	 * In Windows only.
	 */
	onShortcutKey: Function;
}

declare class Image extends _Control {
	/**
	 * True if this element is active.
	 * An active control is the one with keyboard focus—that is, the one that accepts keystrokes, or in the case of a Button, is selected when the user types Return or Enter in Windows, or the space bar in Mac OS.
	 */
	active: boolean;

	icon: string | File;

	/**
	 * The image object that defines the image to be drawn.
	 */
	image: ScriptUIImage | string | File;

	/**
	 * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
	 */
	shortcutKey: string;

	/**
	 * The title of the element.
	 */
	title: string;

	/**
	 * The way the text label is shown in relation to the element.
	 */
	titleLayout: _TitleLayout;

	/**
	 * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
	 */
	onShortcutKey: Function;
}

/**
 * Displays a list of choices, represented by ListItem objects.
 * When you create the object, you specify whether it allows the user to select only one or multiple items. If a list contains more items than can be displayed in the available area, a scrollbar may appear that allows the user to scroll through all the list items.You can specify the items on creation of the list object, or afterward using the list object’s add() method. You can remove items programmatically with the list object’s remove() and removeAll() methods. You can create a list box with multiple columns; in this case, each row is a selectable choice, and each ListItem represents one row.
 */
declare class ListBox extends _ListControl {
	/**
	 * An object that contains one or more creation properties of the control (properties used only when the element is created).
	 * Creation properties of a ListBox object can include:
	 * multiselect: When false (the default), only one item can be selected. When true, multiple items can be selected.
	 * items: An array of strings for the text of each list item. An item object is created for each item. An item with the text string "-" creates a separator item. Supply this property, or the items argument to the add() method, not both. This form is most useful for elements defined using Resource Specifications.
	 * numberOfColumns: A number of columns in which to display the items; default is 1. When there are multiple columns, each ListItem object represents a selectable row. Its text and image values specify the label in the first column, and the subitems property specifies the labels in the additional columns.
	 * showHeaders: True to display column titles.
	 * columnWidths: An array of numbers for the preferred width in pixels of each column.
	 * columnTitles: A corresponding array of strings for the title of each column, to be shown if showHeaders is true.
	 */
	properties: Object;

	/**
	 * True if this element is active.
	 * An active control is the one with keyboard focus—that is, the one that accepts keystrokes, or in the case of a Button, is selected when the user types Return or Enter in Windows, or the space bar in Mac OS.
	 */
	active: boolean;

	/**
	 * For a multi-column list box, the column properties.
	 * A JavaScript object with two read-only properties whose values are set by the creation parameters:
	 * titles: An array of column title strings, whose length matches the number of columns specified at creation.
	 * preferredWidths: An array of column widths, whose length matches the number of columns specified at creation.
	 * visible: An array of boolean visible attributes, whose length matches the number of columns specified at creation.This property can be used to show/hide a column. Avaiblable in ScriptUI Version 6.0 or later provided ScriptUI.frameworkName == 'Flex'.
	 */
	columns: {
		titles: string[],
		preferredWidths: number[]
	};

	/**
	 * The currently selected item for a single-selection list, or an array of items for current selection in a multi-selection list.
	 * Setting this value causes the selected item to be highlighted and to be scrolled into view if necessary. If no items are selected, the value is null. Set to null to deselect all items. You can set the value using the index of an item or an array of indices, rather than object references. If set to an index value that is out of range, the operation is ignored. When set with index values, the property still returns object references.
	 * If you set the value to an array for a single-selection list, only the first item in the array is selected.
	 * If you set the value to a single item for a multi-selection list, that item is added to the current selection.
	 */
	selection: ListItem[] | ListItem | number;

	/**
	 * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
	 */
	shortcutKey: string;

	/**
	 * Scrolls the list to make the specified item visible, if necessary.
	 * @param item The item or child to reveal, a control object.
	 */
	revealItem(item: ListItem): void;

	/**
	 * An event-handler callback function, called when an item in the listbox is double-clicked
	 * Check the selection property to identify the item that was double-clicked.
	 */
	onDoubleClick: Function;

	/**
	 * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
	 */
	onShortcutKey: Function;
}

/**
 * An item in a list box, drop-down list, or tree view.
 * You can specify initial items in the creation parameters when creating the parent list. Create new items using the add() method (ListBox.add(), DropDownList.add(), TreeView.add()) in the parent list with control type="item", or, for DropDownList controls, type="separator".For a multi-column list box, the object represents one selectable row. Its text and image values specify the label in the first column, and the subitems property specifies the labels in the additional columns.
 */
declare class ListItem extends __Control{
	/**
	 * The checked state of an item in a list.
	 * When true, the item is marked with the platform-appropriate checkmark. When false, no checkmark is drawn, but space is reserved for it in the left margin, so that the item lines up with other checkable items. When undefined, no space is reserved for a checkmark.
	 */
	checked: boolean;

	/**
	 * True if this element is enabled.
	 * An enabled element can accept input, according to its type. When false, control elements do not accept input, and all types of elements have a dimmed appearance.
	 */
	enabled: boolean;

	/**
	 * The expansion state of an item of type node that is a child of a TreeView list control.
	 * When true, the item is in the expanded state and its children are shown, when false, it is collapsed and children are hidden.
	 */
	expanded: boolean;

	icon: string | File;

	/**
	 * An image object for an icon to display in the item.
	 * When specified, the image appropriate to the selections state is drawn to the left of the text label. If the parent is a multi-column list box, this describes the label in the first column. Labels in additional columns are described by the subitems property.
	 */
	image: ScriptUI | string | File;

	/**
	 * The 0-based index of this item in the items collection of its parent list control.
	 */
	index: number;

	/**
	 * The parent element, a list control.
	 */
	parent: any;

	/**
	 * An object that contains one or more creation properties of the item (properties used only when the element is created).
	 * A ListItem object has no creation properties.
	 */
	properties: any;

	/**
	 * The selection state of this item.
	 * When true, the item is part of the selection for its parent list. When false, the item is not selected. Set to true to select this item in a single-selection list, or to add it to the selection array for a multi-selection list.
	 */
	selected: boolean;

	/**
	 * When the parent is a multi-column ListBox, this describes the labels for this selectable row in additional columns.
	 * A array of JavaScript objects whose length is one less than the number of columns. The first member describes the label in the second column. Each member object has two properties, of which you can specify one or both:
	 * text: A display string for the corresponding label.
	 * image: An ScriptUIImage object for the corresponding label.
	 */
	subitems: {
		text: string;
		image: Image;
	}[];

	/**
	 * The label text to display for the item, a localizable string.
	 * If the parent is a multi-column list box, this describes the label in the first column. Labels in additional columns are described by the subitems property.
	 */
	text: string;

	/**
	 * The element type.
	 * Normally "item", but an item whose parent is a DropDownList control can have type "separator". A separator item is not mouse-sensitive and is drawn as a horizontal line across the drop-down or pop-up menu.
	 */
	type: string;

	/**
	 * Retrieves the value of this item’s text property as a string.
	 */
	toString(): string;

	/**
	 * Retrieves the index number of this item in the parent list’s items array.
	 */
	valueOf(): number;
}

declare class _Node extends ListItem {
	add(type: 'item', name: string): ListItem;

	add(type: 'node', name: string): _Node;

	find(text: string): ListItem;

	remove(index: number): void;

	remove(text: string): void;

	remove(child: ListItem): void;

	removeAll(): void;
}

/**
 * A horizontal bar with an indicator that shows the progress of an operation.
 * All progressbar controls have a horizontal orientation. The value property contains the current position of the progress indicator; the default is 0. There is a minvalue property, but it is always 0; attempts to set it to a different value are silently ignored.
 */
declare class ProgressBar extends _Control {
	/**
	 * An object that contains one or more creation properties of the container (properties used only when the element is created).
	 * A ProgressBar object has no creation properties. The third argument of the add() method that creates it is the initial value (default 0), and the fourth argument is the maximum value of the range (default 100).
	 */
	properties: Object;

	/**
	 * The maximum value in the range. Default is 100.
	 */
	maxvalue: number;

	/**
	 * The minimum value in the range; always 0. If set to a different value, it is ignored.
	 */
	minvalue: number;

	text: string;

	/**
	 * The current position of the indicator.
	 * If set to a value outside the range specified by 0 to maxvalue, it is automatically reset to the closest boundary.
	 */
	value: number;
}

/**
 * A dual-state control, grouped with other radiobuttons, of which only one can be in the selected state.
 * Shows the selected state when value=true, empty when value=false. Calls the onClick() callback if the control is clicked or if its notify() method is called.
 */
declare class RadioButton extends _Control {
	/**
	 * An object that contains one or more creation properties of the container (properties used only when the element is created).
	 * A RadioButton object has no creation properties. The third argument of the add() method that creates can be the label text.
	 */
	properties: Object;

	/**
	 * True if this element is active.
	 * An active control is the one with keyboard focus—that is, the one that accepts keystrokes, or in the case of a Button, is selected when the user types Return or Enter in Windows, or the space bar in Mac OS.
	 */
	active: boolean;

	/**
	 * The default text justification style for child text elements.
	 * One of left, center, or right. Justification only works if this value is set on creation of the element.
	 */
	justify: string;

	/**
	 * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
	 */
	shortcutKey: string;

	/**
	 * The label text for this button, a localizable string.
	 */
	text: string;

	/**
	 * The selection state of this button, selected when true.
	 */
	value: boolean;

	/**
	 * An event-handler callback function, called when the element has been clicked.
	 */
	onClick: Function;

	/**
	 * An event-handler callback function, called when the element's shortcutKey sequence is typed in the active window.
	 * In Windows only.
	 */
	onShortcutKey: Function;
}

/**
 * A scrollbar with a draggable scroll indicator and stepper buttons to move the indicator.
 * The scrollbar control has a horizontal orientation if the width is greater than the height at creation time, or vertical if its height is greater than its width.
 * Calls the onChange() callback after the position of the indicator is changed or if its notify() method is called. Calls the onChanging() callback repeatedly while the user is moving the indicator. Scrollbars are often created with an associated EditText field to display the current value of the scrollbar, and to allow setting the scrollbar's position to a specific value.
 */
declare class Scrollbar extends _Control {
	/**
	 * True if this element is active.
	 * An active control is the one with keyboard focus—that is, the one that accepts keystrokes, or in the case of a Button, is selected when the user types Return or Enter in Windows, or the space bar in Mac OS.
	 */
	active: boolean;

	/**
	 * The amount to increment or decrement a scrollbar indicator's position when the user clicks ahead or behind the moveable element.
	 * Default is 20% of the range between the maxvalue and minvalue property values.
	 */
	jumpdelta: number;

	/**
	 * The maximum value allowed in the value property.
	 * Together with minvalue, sets the scrolling range. Default is 100.
	 */
	maxvalue: number;

	/**
	 * The minimum value allowed in the value property.
	 * Together with  maxvalue, sets the scrolling range.Default is 0.
	 */
	minvalue: number;

	/**
	 * The key sequence that invokes the  onShortcutKey() callback for this element (in Windows only).
	 */
	shortcutKey: string;

	/**
	 * The amount by which to increment or decrement a scrollbar element's position when the user clicks a stepper button.
	 */
	stepdelta: number;

	/**
	 * The current position of the indicator.
	 * If set to a value outside the range specified by minvalue and maxvalue, it is automatically reset to the closest boundary.
	 */
	value: number;

	/**
	 * An event-handler callback function, called when the user has finished dragging the position indicator, or has clicked the control.
	 */
	onChange: Function;

	/**
	 * An event-handler callback function, called when the content of the element is in the process of changing
	 * The handler is called for any motion of the position indicator while this control has the input focus.
	 */
	onChanging: Function;

	/**
	 * An event-handler callback function, called when the element's shortcutKey sequence is typed in the active window.
	 * In Windows only.
	 */
	onShortcutKey: Function;
}

/**
 * A slider bar that indicates a numeric value with a moveable position indicator.
 * All slider controls have a horizontal orientation. Calls the onChange() callback after the position of the indicator is changed or if its notify() method is called. Calls the onChanging() callback repeatedly while the user is moving the indicator. The value property contains the current position of the indicator within the range of minvalue to maxvalue.
 */
declare class Slider extends _Control {
	/**
	 * True if this element is active.
	 * An active control is the one with keyboard focus—that is, the one that accepts keystrokes, or in the case of a Button, is selected when the user types Return or Enter in Windows, or the space bar in Mac OS.
	 */
	active: boolean;

	/**
	 * The maximum value allowed in the value property.
	 * Together with minvalue, sets therange.Default is 100.
	 */
	maxvalue: number;

	/**
	 * The minimum value allowed in the value property.
	 * Together with maxvalue, sets the range.Default is 0.
	 */
	minvalue: number;

	/**
	 * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
	 */
	shortcutKey: string;

	text: string;

	/**
	 * The current position of the indicator.
	 * If set to a value outside the range specified by minvalue and maxvalue, it is automatically reset to the closest boundary.
	 */
	value: number;

	/**
	 * An event-handler callback function, called when the user has finished dragging the position indicator, or has clicked the control.
	 */
	onChange: Function;

	/**
	 * An event-handler callback function, called when the content of the element is in the process of changing
	 * The handler is called for any motion of the position indicator while this control has the input focus.
	 */
	onChanging: Function;

	/**
	 * An event-handler callback function, called when the element's shortcutKey sequence is typed in the active window.
	 * In Windows only.
	 */
	onShortcutKey: Function;
}

/**
 * A text label that the user cannot change.
 */
declare class StaticText extends _Control {
	/**
	 * Always false. This element cannot have input focus.
	 * An active control is the one with keyboard focus—that is, the one that accepts keystrokes, or in the case of a Button, is selected when the user types Return or Enter in Windows, or the space bar in Mac OS.
	 */
	active: boolean;

	/**
	 * An object that contains one or more creation properties of the container (properties used only when the element is created).
	 * Creation properties of a StaticText object can include:
	 * multiline: When false (the default), the control displays a single line of text. When true, the control displays multiple lines, in which case the text wraps within the width of the control.
	 * scrolling: When false (the default), the displayed text cannot be scrolled. When true, the displayed text can be vertically scrolled using the Up Arrow and Down Arrow; this case implies multiline=true.
	 */
	properties: Object;

	/**
	 * A number of characters for which to reserve space when calculating the preferred size of the element.
	 */
	characters: number;

	/**
	 * The text justification style.
	 * One of left, center, or right. Justification only works if this value is set on creation of the element.
	 */
	justify: string;

	/**
	 * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
	 */
	shortcutKey: string;

	/**
	 * The text to display, a localizable string.
	 */
	text: string;

	/**
	 * An event-handler callback function, called when the element's shortcutKey sequence is typed in the active window.
	 * In Windows only.
	 */
	onShortcutKey: Function;
}

/**
 * A hierarchical list whose items can contain child items.
 * The ListItem children of this control (in the items array) can be of type node, which means that they can contain child items. An item with child items can expanded, so that the child items are displayed, or collapsed, so that the child items are hidden Individual items can be selected at any level of the tree.
 */
declare class TreeView extends _ListControl {
	/**
	 * Always false. This element cannot have input focus.
	 * An active control is the one with keyboard focus—that is, the one that accepts keystrokes, or in the case of a Button, is selected when the user types Return or Enter in Windows, or the space bar in Mac OS.
	 */
	active: boolean;

	/**
	 * The currently selectedlist item.
	 * Setting this value causes the selected item to be highlighted and to be scrolled into view if necessary. If no items are selected, the value is null. Set to null to deselect all items.You can set the value using the index of an item, rather than an object reference. If set to an index value that is out of range, the operation is ignored. When set with an index value, the property still returns an object reference.
	 */
	selection: ListItem

	/**
	 * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
	 */
	shortcutKey: string;

	/**
	 * An event-handler callback function, called when the user expands (opens) a collapsed node in the treeview.
	 * @param item The ListItem node that expanded.
	 */
	onExpand: Function;

	/**
	 * An event-handler callback function, called when the user collapses (closes) an expanded node in the treeview.
	 * @param item The ListItem node that collapsed.
	 */
	onCollapse: Function;

	/**
	 * An event-handler callback function, called when the element's shortcutKey sequence is typed in the active window.
	 * In Windows only.
	 */
	onShortcutKey: Function;
}

/**
 * Controls the automatic layout behavior for a window or container.
 * The subclass AutoLayoutManager implements the default automatic layout behavior.
 */
declare class LayoutManager {
	/**
	 * Invokes the automatic layout behavior for the managed container.
	 * Adjusts sizes and positions of the child elements of this window or container according to the placement and alignment property values in the parent and children.
	 * Invoked automatically the first time the window is displayed. Thereafter, the script must invoke it explicitly to change the layout in case of changes in the size or position of the parent or children.
	 */
	layout(): void;

	/**
	 * Performs a layout after a Window is resized, based on the new size.
	 * Resizes the child elements of the managed container with a given alignment type, after the window has been resized by the user.
	 */
	resize(): void;
}

/**
 * Defines attributes of the ScriptUI environment.
 * Access through the ScriptUI.environment property.
 */
declare class Environment {
	/**
	 * An object that reports the active state of the keyboard at any time.
	 * Provides access to the key state independent of the event-handling framework.
	 */
	readonly keyboardState: KeyboardState;
}

/**
 * Provides access to objects used in the ScriptUI event system.
 * Access through the ScriptUI.events property.
 */
declare class Events {
	/**
	 * Creates an instance of the specified Event subclass.
	 * The Event returned is a UIEvent,
	 * KeyboardEvent or MouseEvent object,
	 * depending on the requested type. This object can be passed as a parameter to an element's dispatchEvent
	 * function in order to simulate a user-interaction event.
	 * @param eventType The name of an event type: one of "UIEvent", "KeyboardEvent", or "MouseEvent".
	 */
	createEvent(eventType: string): UIEvent;
}

/**
 * Reports the active state of the keyboard.
 * Access through the ScriptUI.environment.keyboardState property.
 * Query the properties of this object at any time to determine the current key that is down and any modifiers that are pressed.
 */
declare class KeyboardState {
	/**
	 * True if the Alt or Option key is pressed.
	 */
	readonly altKey: boolean;

	/**
	 * True if the Ctrl key is pressed.
	 */
	readonly ctrlKey: boolean;

	/**
	 * A string containing the name of the currently pressed key, such as "a", or an empty string.
	 */
	readonly keyName: string;

	/**
	 * True if the Cmd key (in Mac OS) or Windows key (in Windows) is pressed.
	 */
	readonly metaKey: boolean;

	/**
	 * True if the Shift key is pressed.
	 */
	readonly shiftKey: boolean;
}
