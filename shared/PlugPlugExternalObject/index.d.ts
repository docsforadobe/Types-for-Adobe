/// <reference path="../JavaScript.d.ts" />

interface CSXSEvent {
	/**
	 * Retrieves the unique identifier of the application from which this event was dispatched.
	 */
	readonly appId: string;

	/**
	 * Retrieves or sets the payload of this event.
	 */
	data: string;

	/**
	 * Retrieves the unique identifier of the extension from which this event was dispatched.
	 */
	readonly extensionId: string;

	/**
	 * Retrieves the scope of this event.
	 */
	scope: string;

	/**
	 * Retrieves the type of this event.
	 */
	type: string;

	/**
	 * Dispatch the event
	 */
	dispatch(): void;
}

interface CSXSEventConstructor {
	readonly prototype: CSXSEvent;

	/**
	 * Creates a new CSXSEvent object.
	 */
	new(type?: string, scope?: string, data?: string): CSXSEvent;
	(type?: string, scope?: string, data?: string): CSXSEvent;
}

declare const CSXSEvent: CSXSEventConstructor;