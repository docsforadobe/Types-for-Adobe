// Copyright (C) 2015 Felix Schlitter All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
//
// Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
// Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
// THIS SOFTWARE IS PROVIDED BY AUTHOR AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL AUTHOR OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, // INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

declare class $ {

    /*
     * The Internet name of the application’s default character encoding, such
     * as “CP1252” or “X-SHIFT-JIS”. Valid values are implementation- and
     * OS-dependent.
     *
     * Set to change the default encoding for the application. The returned
     * value can differ from the value set. In Windows, for example, if set to
     * “x-latin1”, the returned value is the synonymous “ISO-8859-1”.
     */
    static appEncoding: string

    /*
     * The version information for the current ExtendScript build. Read only.
     */
    static build: string

    /*
     * The date the current JavaScript engine was built. Read only.
     */
    static buildDate: Date

    /*
     * The character used in formatted numeric output for a decimal point, for
     * the current locale. Read only.
     */
    static decimalPoint: string

    /*
     * The name of the current JavaScript engine, if set. Read only.
     */
    static engineName: string

    /*
     * The most recent run-time error information, contained in a JavaScript
     * Error object.
     */
    static error: Error

    /*
     * The file name of the current script. Read only.
     */
    static fileName: string

    /*
     * Gets or sets low-level debug output flags. A logical AND of the following
     * bit flag values:
     * 0x0002 (2): Displays each line with its line number as it is executed.
     * 0x0040 (64): Enables excessive garbage collection. Usually, garbage
     * collection starts when the number of objects has increased by a certain
     * amount since the last garbage collection. This flag causes ExtendScript
     * to garbage collect after almost every statement. This impairs performance
     * severely, but is useful when you suspect that an object gets released too
     * soon.
     * 0x0080 (128): Displays all calls with their arguments and the return
     * value.
     * 0x0100 (256): Enables extended error handling (see strict).
     * 0x0200 (512): Enables the localization feature of the toString method.
     * Equivalent to the localize property.
     *
     * NOTE: Other bit values are not public and should not be used.
     */
    static flags: number

    /*
     * Provides access to the Global object, which contains the JavaScript
     * global namespace.
     */
    static global: Global

    /*
     * A high-resolution timer that measures the number of microseconds since
     * this property was last accessed. Value is initialized as early as
     * possible, so the first access returns the startup time for ExtendScript.
     * The property is thread-local; that is, the first access on a thread
     * returns the time needed to create and initialize that thread. Read only.
     */
    static hiresTimer: number

    /*
     * The path for include files for the current script. Read only.
     */
    static includePath: string

    /*
     * The current debugging level, which enables or disables the JavaScript
     * debugger. Read only. One of:
     * 0: No debugging
     * 1: Break on runtime errors
     * 2: Full debug mode
     */
    static level: number

    /*
     * The current line of the currently executing script; the first line is
     * number 1. Read only.
     */
    static line: number

    /*
     * Gets or sets the current locale. The string contains five characters in
     * the form LL_RR, where LL is an ISO 639 language specifier, and RR is an
     * ISO 3166 region specifier.
     * Initially, this is the value that the application or the platform returns
     * for the current user. You can set it to temporarily change the locale for
     * testing. To return to the application or platform setting, set to
     * undefined, null, or the empty string.
     */
    static locale: string

    /*
     * Enable or disable the extended localization features of the built-in
     * toString method. See Localizing ExtendScript strings.
     */
    static localize: boolean

    /*
     * Gets or sets the ExtendScript memory cache size in bytes.
     */
    static memCache: number

    /*
     * The current operating system version information. Read only.
     */
    static os: string

    /*
     * An array of objects containing information about the display screens
     * attached to your computer. Each object has the properties left, top,
     * right, and bottom, which contain the four corners of the drawable area of
     * each screen in global coordinates. A property primary is true if that
     * object describes the primary display.
     *
     * TODO: Type up a screen. There is no formal type in the docs, just the
     * shape.
     */
    static screens: {left: number; top: number; right: number; bottom: number; primary: boolean;}[]

    /*
     * The current stack trace.
     */
    static stack: string

    /*
     * When true, any attempt to write to a read-only property causes a runtime
     * error. Some objects do not permit the creation of new properties when
     * true.
     */
    static strict: boolean

    /*
     * The version number of the JavaScript engine as a three-part number and
     * description; for example: "3.92.95 (debug)" Read only.
     */
    static version: string

    /*
     * Displays the About box for the ExtendScript component, and returns the
     * text of the About box as a string.
     */
    static about(): string

    /*
     * Executes a breakpoint at the current position.
     *
     * @param condition string containing a JavaScript statement to be used as a
     * condition. If the statement evaluates to true or nonzero when this point
     * is reached, execution stops. If no condition is needed, it is recommended
     * that you use the JavaScript debugger statement in the script, rather than
     * this method
     */
    static bp(condition?: string): void

    /*
     * Invokes the platform-specific color selection dialog, and returns the
     * selected color as a hexadecimal RGB value: 0xRRGGBB.
     *
     * @param name number The color to be preselected in the dialog, as a
     * hexadecimal RGB value (0xRRGGBB), or -1 for the platform default.
     */
    static colorPicker(name: number): number

    /*
     *
     * Loads a JavaScript script file from disk, evaluates it, and returns the
     * result of evaluation.
     *
     * @param path string The name and location of the file.
     *
     * @param timeout number of milliseconds to wait before returning undefined,
     * if the script cannot be evaluated. Default is 10000 milliseconds.
     */
    static evalFile(path: string, timeout?: number): any

    /*
     * Initiates garbage collection in the JavaScript engine.
     */
    static gc(): void

    /*
     * Retrieves the value of the specified environment variable, or null if no
     * such variable is defined.
     *
     * @param envname string The name of the environment variable.
     */
    static getenv(envname: string): string

    /*
     * Sets the value of the specified environment variable, if no such variable
     * is defined.
     *
     * @param envname string The name of the environment variable.
     *
     * @param value string The new value
     */
    static setenv(envname: string, value: string): void

    /*
     * Suspends the calling thread for the given number of milliseconds.
     * During a sleep period, checks at 100 millisecond intervals to see whether
     * the sleep should be terminated. This can happen if there is a break
     * request, or if the script timeout has expired.
     *
     * @param milliseconds number of milliseconds to wait.
     */
    static sleep(milliseconds: number): void

    /*
     * Writes the specified text to the JavaScript Console.
     * @param text One or more strings to write, which are concatenated to form
     * a single string.
     */
    static write(text: any,  ...texts: any[]): void

    /*
     * Writes the specified text to the JavaScript Console and appends a
     * linefeed sequence.
     *
     * @param text One or more strings to write, which are concatenated to form
     * a single string.
     */
    static writeln(text: any,  ...texts: any[]): void
}
