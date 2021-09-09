/// <reference path="../shared/global.d.ts" />

interface ObjectConstructor {
  readonly prototype: Object

  /**
   * Creates and returns a new object of a given type.
   * @param what The object type.
   */
  new(what: any): Object
  (): any
  (what: any): any

  /**
   * Reports whether an object is still valid.
   * @param what The object to check.
   */
  isValid(what: Object): boolean
}
declare const Object: ObjectConstructor

/**
 * The base class of all JavaScript objects.
 */
interface Object {
  /**
   * Points to the constructor function that created this object.
   * Note that this property is treated as an XML element in the XML class.
   */
  readonly constructor: Function

  /**
   * Points to the prototype object for this object.
   * Note that this property is treated as an XML element in the XML class.
   */
  readonly prototype: Object

  /**
   * Retrieves and returns the Reflection object associated with this method or a property.
   * Note that this property is treated as an XML element in the XML class.
   */
  readonly reflect: Reflection

  /**
   * Reports whether a given property is defined with an instance or within the prototype chain.
   * @param name The name of the property to check.
   */
  hasOwnProperty(name: string): boolean

  /**
   * Checks whether the given object is a prototype of this object.
   * @param what The object to check.
   */
  isPrototypeOf(what: Object): boolean

  /**
   * Reports whether a given property is enumerable.
   * @param name The name of the property to check.
   */
  propertyIsEnumerable(name: string): boolean

  /**
   * Creates and returns a string representing this object, localized for the current locale. See toString().
   */
  toLocaleString(): string

  /**
   * Creates and returns a string representation of this object.
   * This function serializes the object, so that it can, for example, be passed between engines. Pass the returned string back to eval() to recreate the object. Works only with built-in classes.
   */
  toSource(): string

  /**
   * Creates and returns a string representing this object.
   * Many objects (such as Date) override this method in favor of their own implementation. If an object has no string value and no user-defined toString() method, the default method returns [object type], where type is the object type or the name of the constructor function that created the object.
   */
  toString(): string

  /**
   * Removes the watch function of a property.
   * @param name The name of the property to unwatch.
   */
  unwatch(name: string): void

  /**
   * Retrieves and returns the primitive value of this object.
   * If the object has no primitive value, returns the object itself.Note that you rarely need to call this method yourself.The JavaScript interpreter automatically invokes it when encountering an object where a primitive value is expected.
   */
  valueOf(): Object

  /**
   * Adds a watch function to a property, which is called when the value changes.
   * This function can accept, modify, or reject a new value that the user, application, or a script has attempted to place in a property.
   * @param name The name of the property to watch.
   * @param func The function to be called when the value of this property changes. This function must three arguments, and return as its result the value to be stored in the property. The arguments are: name: the name of the property that changes. oldValue: The old property value. newValue: The new property value that was specified.
   */
  watch(name: string, func: Function): void
}

interface ArrayConstructor {
  readonly prototype: Array<any>

  /**
   * Creates and returns a new array.
   * Takes any number of parameters, which become the elements of the array, or a single value which becomes the length of an empty array. Note that you cannot create a one-element array, as the single parameter value is interpreted as the length. Returns the new array.
   * @param arrayLength If no other parameters are passed, the initial length of the empty array. Otherwise, the first element.
   * @param values If there is more than one parameter, the array is initialized with the given parameters.
   */
  new(arrayLength?: number): any[]
  new <T>(arrayLength: number): T[]
  new <T>(...values: T[]): T[]
  (arrayLength?: number): any[]
  <T>(arrayLength: number): T[]
  <T>(...values: T[]): T[]
}
declare const Array: ArrayConstructor

/**
 * An array with integer indexing and a length property.
 */
interface Array<T> {
  [n: number]: T

  /**
   * The length of the array
   */
  length: number

  /**
   * Returns a new array created by concatenating the given values to the end of the original array.
   * The original array is unchanged.If an array is provided as a parameter to concat(), each of its elements are appended as separate array elements at the end of the new array.Returns a new array, the result of concatenation the given values to the end of the original array.
   * @param values Any number of values to be added to the end of the array. Can also be arrays.
   */
  concat(...values: T[][]): T[]

  /**
   * Joins all elements of the array into a string; optionally, each element is separated by delimiter.
   * Returns the string containing the joined elements and delimiters.
   * @param delimiter A string used to separate each element of the array. If omitted, the array elements are separated with a comma.
   */
  join(delimiter?: string): string

  /**
   * Removes the last element from the array, decreases the length by 1, and returns the value of the element.
   * Returns the value of the deleted array element.
   */
  pop(): T | undefined

  /**
   * Places one or more values onto the end of the array and increases length by n.
   * Returns the new length of the array.
   * @param values Any number of values to be pushed onto the end of the array.
   */
  push(...values: T[]): number

  /**
   * Reverses the order of the elements in the array.
   * Returns the reversed array.
   */
  reverse(): T[]

  /**
   * Removes the first element from the array, decreases the length by 1, and returns the value of the element.
   * Returns the value of the deleted array element.
   */
  shift(): T | undefined

  /**
   * Creates a new array, which contains a subset of the original array's elements.
   * The slice begins with the index start, and continues up to, but not including the index, end.If start or end is a negative number, the indexed is resolved counting backwards from the end of the array resulting in the element array[array. length + negativeIndex]. Returns a new array containing elements array[start] through array[end-1].
   */
  slice(start?: number, end?: number): T[]

  /**
   * Sorts the elements of the array in place, using the given function to compare to elements.
   * If no function is provided, the elements are sorted alphabetically.Returns no return value.
   * @param userFunction A user-supplied function of the form userFunction(a, b) which returns less than 0 if a is greater than b, 0 if a and b are equal, and greater than 0 if b is greater than a.
   */
  sort(userFunction?: (a: T, b: T) => number): this

  /**
   * Removes num elements from the array beginning with index, start.
   * Optionally insert new elements beginning at index start.To ensure contiguity, elements are moved up to fill in any gaps.Returns a new array containing any elements deleted from the original array.
   * @param start The index of the first element to remove. Negative values are relative to the end of the array.
   * @param deleteCount The number of array elements to remove, including start. If omitted, all elements from array index start to the end of the array are removed.
   * @param values A list of one or more values to be added to the array starting at index start. Must specify a value for num, to use this argument.
   */
  splice(start: number, deleteCount?: number, ...values: T[]): T[]

  /**
   * Converts an array to a string and returns the string (localized).
   */
  toLocaleString(): string

  /**
   * Creates a string representation of this object that can be fed back to eval() to re-create an object. Works only with built-in classes.
   */
  toSource(): string

  /**
   * Converts an array to a string and returns the string.
   * Yields the same result as array. join() when called without a parameter.Returns a comma-separated list of all the elements of the array.
   */
  toString(): string

  /**
   * Adds one or more elements to the beginning of the array.
   * Returns the new array length.
   * @param values The values of one or more elements to be added to the beginning of the array.
   */
  unshift(...values: T[]): number
}

/**
 * A global object containing a set of math functions and constants.
 */
interface Math {
  /**
   * Euler's constant and the base of natural logarithms.
   */
  readonly E: number

  /**
   * The natural logarithm of 10.
   */
  readonly LN10: number

  /**
   * The natural logarithm of 2.
   */
  readonly LN2: number

  /**
   * The base 10 logarithm of e.
   */
  readonly LOG10E: number

  /**
   * The base 2 logarithm of e.
   */
  readonly LOG2E: number

  /**
   * The ratio of the circumference of a circle to its diameter.
   */
  readonly PI: number

  /**
   * The reciprocal of the square root of 1/2.
   */
  readonly SQRT1_2: number

  /**
   * The square root of 2.
   */
  readonly SQRT2: number

  /**
   * Returns the absolute value of a number.
   * @param x A number.
   */
  abs(x: number): number

  /**
   * Returns the arc cosine(in radians) of a number.
   * @param x A number.
   */
  acos(x: number): number

  /**
   * Returns the arc sin(in radians) of a number.
   * @param x A number.
   */
  asin(x: number): number

  /**
   * Returns the arc tangent(in radians) of a number.
   * @param x A number.
   */
  atan(x: number): number

  /**
   * Returns the arc tangent of the quotient of its arguments (y/x).
   * @param y A number.
   * @param x A number.
   */
  atan2(y: number, x: number): number

  /**
   * Rounds the number up to the nearest integer.
   * @param x A number.
   */
  ceil(x: number): number

  /**
   * Returns the cosine of an angle provided in radians.
   * @param x An angle, in radians.
   */
  cos(x: number): number

  /**
   * Returns Math.E raised to the power of a number.
   * @param x A number.
   */
  exp(x: number): number

  /**
   * Rounds a number down to the nearest integer.
   * @param x A number.
   */
  floor(x: number): number

  /**
   * Returns the natural logarithm of a number.
   * @param x A number.
   */
  log(x: number): number

  /**
   * Returns the largest of zero or more numbers.
   * @param rest Numbers.
   */
  max(...rest: number[]): number

  /**
   * Returns the smallest of zero or more numbers.
   * @param rest Numbers.
   */
  min(...rest: number[]): number

  /**
   * Returns x raised to the power of y.
   * @param x Numbers.
   * @param y
   */
  pow(x: number, y: number): number

  /**
   * Returns a pseudo-random number from 0.0 up to but not including 1.0.
   */
  random(): number

  /**
   * Rounds a number to the nearest integer.
   * @param x A number.
   */
  round(x: number): number

  /**
   * Returns the sine of an angle provided in radians.
   * @param x An angle, in radians.
   */
  sin(x: number): number

  /**
   * Returns the square root of a number.
   * @param x A number.
   */
  sqrt(x: number): number

  /**
   * Returns the tangent of an angle provided in radians.
   * @param x An angle, in radians.
   */
  tan(x: number): number
}
declare const Math: Math

interface DateConstructor {
  readonly prototype: Date

  /**
   * Returns a new Date object holding the current date and time.
   * If parameters are supplied, returns a new Date object holding the supplied date and time.
   * @param year The year expressed in four digits.
   * @param month An integer value from 0 (Jan) to 11 (Dec).
   * @param day An integer value from 1 to 31, If this argument is not supplied, its value is set to 0.
   * @param hours An integer value from 0 (midnight) to 23 (11 PM). If this argument is not supplied, its value is set to 0.
   * @param min An integer value from 0 to 59. If this argument is not supplied, its value is set to 0.
   * @param sec An Integer value from 0 to 59. If this argument is not supplied, its value is set to 0.
   * @param ms An integer value from 0 to 999. If this argument is not supplied, its value is set to 0.
   */
  new(): Date
  new(value: number): Date
  new(value: string): Date
  new(
    year: number,
    month: number,
    day?: number,
    hours?: number,
    min?: number,
    sec?: number,
    ms?: number,
  ): Date

  /**
   * Parses a string, returning a new Date object. The string should be similar to the string returned bt toString().
   * @param text The string to parse.
   */
  parse(text: string): Date

  /**
   * Returns the number of milliseconds between midnight January 1, 1970, UTC, and the specified time.
   * @param year The year expressed in four digits, for example, 2001. To indicate for a year from 1900 to 1999, you can specify a value from 0 to 99.
   * @param month An integer value from 0 (Jan) to 11 (Dec).
   * @param day An integer value from 1 to 31, If this argument is not supplied, its value is set to 0.
   * @param hours An integer value from 0 (midnight) to 23 (11 PM). If this argument is not supplied, its value is set to 0.
   * @param min An integer value from 0 to 59. If this argument is not supplied, its value is set to 0.
   * @param sec An Integer value from 0 to 59. If this argument is not supplied, its value is set to 0.
   * @param ms An integer value from 0 to 999. If this argument is not supplied, its value is set to 0.
   */
  UTC(
    year: number,
    month?: number,
    day?: number,
    hours?: number,
    min?: number,
    sec?: number,
    ms?: number,
  ): Date
}
declare const Date: DateConstructor

/**
 * A date/time object.
 */
interface Date {
  /**
   * Returns the day of the month of the specified Date object in local time.
   */
  getDate(): number

  /**
   * Returns the day of the week for the specified Date object in local time.
   * This is an integer from 0 (Sunday) to 6 (Saturday).Returns the day of the week for date.
   */
  getDay(): number

  /**
   * Returns the four digit year of the specified Date object in local time.
   */
  getFullYear(): number

  /**
   * Returns the hour of the specified Date object in local time.
   */
  getHours(): number

  /**
   * Returns the milliseconds of the specified Date object in local time.
   */
  getMilliseconds(): number

  /**
   * Returns the minutes of the specified Date object in local time.
   */
  getMinutes(): number

  /**
   * Returns the month of the specified Date object in local time.
   */
  getMonth(): number

  /**
   * Returns the seconds of the specified Date object in local time.
   */
  getSeconds(): number

  /**
   * Returns the number of milliseconds since midnight January 1,1970 UTC for the specified Date object.
   */
  getTime(): number

  /**
   * Returns the difference in minutes between the computer's local time and UTC.
   */
  getTimezoneOffset(): number

  /**
   * Returns the day of the month of the specified Date object according to UTC.
   */
  getUTCDate(): number

  /**
   * Returns the day of the week for the specified Date object according to UTC.
   */
  getUTCDay(): number

  /**
   * Returns the four digit year of the specified Date object according to UTC.
   */
  getUTCFullYear(): number

  /**
   * Returns the hour of the specified Date object according to UTC.
   */
  getUTCHours(): number

  /**
   * Returns the milliseconds of the specified Date object according to UTC.
   */
  getUTCMilliseconds(): number

  /**
   * Returns the minutes of the specified Date object according to UTC.
   */
  getUTCMinutes(): number

  /**
   * Returns the month of the specified Date object according to UTC.
   */
  getUTCMonth(): number

  /**
   * Returns the seconds of the specified Date object according to UTC.
   */
  getUTCSeconds(): number

  /**
   * Returns the year of the specified Date object, as a difference from 1900, in local time.
   */
  getYear(): number

  /**
   * Sets the day of the month of a specified Date object according to local time.
   * Returns the number of milliseconds between the new date and midnight, January 1, 1970.
   * @param date An integer from 1 to 31 indicating the day of the month.
   */
  setDate(date: number): number

  /**
   * Sets the year of a specified Date object according to local time.
   * This method can also set month and date if those arguments are specified. Returns the number of milliseconds between the new date and midnight, January 1, 1970.
   * @param year A four-digit integer value indicating the year to set.
   */
  setFullYear(year: number): number

  /**
   * Sets the hours of a specified Date object according to local time.
   * Returns the number of milliseconds between the new date and midnight, January 1, 1970.
   * @param hour An integer value from 0 (midnight) to 23 (11 PM).
   */
  setHours(hour: number): number

  /**
   * Sets the milliseconds of a specified Date object according to local time.
   * Returns the number of milliseconds between the new date and midnight, January 1, 1970.
   * @param ms An integer value from 0 to 999.
   */
  setMilliseconds(ms: number): number

  /**
   * Sets the minutes of a specified Date object according to local time.
   * Returns the number of milliseconds between the new date and midnight, January 1, 1970.
   * @param minutes An integer value from 0 to 59.
   */
  setMinutes(minutes: number): number

  /**
   * Sets the month of a specified Date object according to local time.
   * Returns the number of milliseconds between the new date and midnight, January 1, 1970.
   * @param month An integer value from 0 (Jan) to 11 (Dec).
   */
  setMonth(month: number): number

  /**
   * Sets the seconds of a specified Date object according to local time.
   * Returns the number of milliseconds between the new date and midnight, January 1, 1970.
   * @param seconds An integer value from 0 to 59.
   */
  setSeconds(seconds: number): number

  /**
   * Sets the date of a specified Date object in milliseconds since midnight, January 1, 1970.
   * Returns the value of ms.
   * @param ms An integer indicating the number of milliseconds between the date set and midnight, January 1, 1970.
   */
  setTime(ms: number): number

  /**
   * Sets the date of a specified Date object according to universal time.
   * Returns the number of milliseconds between the new date and midnight, January 1, 1970 in UTC time.
   * @param date An integer from 1 to 31 indicating the day of the month.
   */
  setUTCDate(date: number): number

  /**
   * Sets the year of a specified Date object according to UTC, can also set the month and date.
   * Returns the number of milliseconds between the date set and midnight, January 1, 1970, in UTC.
   * @param year The year expressed in four digits.
   */
  setUTCFullYear(year: number): number

  /**
   * Sets the hours of a specified Date object according to UTC.
   * Returns the number of milliseconds between the date set and midnight, January 1, 1970, in UTC.
   * @param hours An integer value from 0 (midnight) to 23 (11 PM) indicating the hour to be set.
   */
  setUTCHours(hours: number): number

  /**
   * Sets the milliseconds of a specified Date object according to UTC.
   * Returns the number of milliseconds between the date set and midnight, January 1, 1970, in UTC.
   * @param ms An integer value in the range of 0 to 999 indicating the number of milliseconds to set.
   */
  setUTCMilliseconds(ms: number): number

  /**
   * Sets the minutes of a specified Date object according to UTC.
   * Returns the number of milliseconds between the date set and midnight, January 1, 1970, in UTC.
   * @param min An integer value in the range 0 to 59 indicating the number of minutes to be set.
   */
  setUTCMinutes(min: number): number

  /**
   * Sets the month of a specified Date object according to UTC.
   * Returns the number of milliseconds between the date set and midnight, January 1, 1970, in UTC.
   * @param month An integer value in the range 0 (Jan.) to 11 (Dec.) indicating the month to set.
   */
  setUTCMonth(month: number): number

  /**
   * Sets the seconds of a specified Date object according to UTC.
   * Returns the number of milliseconds between the date set and midnight, January 1, 1970, in UTC.
   * @param sec An integer value in the range 0 to 59 indicating the number of seconds to set.
   */
  setUTCSeconds(sec: number): number

  /**
   * Sets the year of a specified Date object according to local time, as a difference between the current year and 1900.
   * Returns the number of milliseconds between the date set and midnight, January 1, 1970.
   * @param year An integer value indicating the year to set. The method interprets a 1- or 2- digit value to mean the 1900s; for example, 13 is interpreted to mean 1913.
   */
  setYear(year: number): number

  /**
   * Returns the date as a string.
   */
  toDateString(): string

  /**
   * Returns the date and time adjusted to GMT (UTC) as a string.
   */
  toGMTString(): string

  /**
   * Returns the date as a localized string.
   */
  toLocaleDateString(): string

  /**
   * Returns a string value representing the date and time stored in the Date object in human readable format (localized).
   */
  toLocaleString(): string

  /**
   * Returns the time as a localized string.
   */
  toLocaleTimeString(): string

  /**
   * Creates a string representation of this object that can be fed back to eval() to re-create an object. Works only with built-in classes.
   */
  toSource(): string

  /**
   * Returns a string value representing the date and time stored in the Date object in human readable format.
   * Returns the following string is an example of the format returned by this method: Mon Aug 13, 10:54:21 GMT-0700 2001.
   */
  toString(): string

  /**
   * Returns the time as a string.
   */
  toTimeString(): string

  /**
   * Returns the date and time adjusted to UTC as a string.
   */
  toUTCString(): string

  /**
   * The valueOf() method returns the number of milliseconds that have passed since midnight, Returns an integer.
   */
  valueOf(): number
}

interface FunctionConstructor {
  readonly prototype: Function

  /**
   * The Function constructor parses the argument list and creates a Function object.
   * @param arguments The list of formal arguments, separated by commas. The formal arguments can also be supplied one by one; in this case, the last argument to the Function constructor is considered to be the function body.
   * @param body The body of the function to create.
   */
  new(arguments: string, body: string): Function
  (arguments: string, body: string): Function
}
declare const Function: FunctionConstructor

/**
 * Wraps a built-in or JavaScript function.
 */
interface Function {
  /**
   * The function arguments, packed into an array.
   * This property is deprecated; use the arguments property within the function body.
   */
  arguments: object

  /**
   * The number of formal arguments.
   * This property is deprecated; use the length property instead.
   */
  readonly arity: number

  /**
   * The number of formal arguments.
   */
  readonly length: number

  /**
   * The function name.
   */
  readonly name: string

  /**
   * Apply a this object and an argument list to a function.
   * This function is different from call(); here, the arguments are suppliedas an Array object.
   * @param thisObj The object to be used as this.
   * @param args An array of arguments.
   */
  apply(thisObj: object, args: any): any

  /**
   * Apply a this object and arguments to a function.
   * This function is different from apply(); here, the arguments are supplied one by one.
   * @param thisObj The object to be used as this.
   * @param arguments The first agument to the function. Add as many as needed.
   */
  call(thisObj: object, ...arguments: any[]): any

  /**
   * Creates a string representation of this object that can be fed back to eval() to re-create an object. Works only with JavaScript functions.
   */
  toSource(): string

  /**
   * Returns the function definition as a string.
   */
  toString(): string
}

interface StringConstructor {
  readonly prototype: String

  /**
   * Returns a string representation of the value given as an argument.
   * @param value A number, variable, or object to convert to a string.
   */
  new(value?: any): String
  (value: any): string

  /**
   * Returns a string created by concatenation one or more characters specified as ASCII values.
   * @param value1 One or more ASCII values.
   */
  fromCharCode(value1: number): string
}
declare const String: StringConstructor

/**
 * A character string. Each character is adressable by index.
 */
interface String {
  /**
   * The length of the string.
   */
  readonly length: number

  /**
   * Get character at index.
   */
  readonly [index: number]: string

  /**
   * Returns a string consisting of this string enclosed in a <a> tag.
   * @param name The text to be stored in the anchors' name attribute.
   */
  anchor(name: string): string

  /**
   * Returns a string consisting of this string enclosed in a <big> tag.
   */
  big(): string

  /**
   * Returns a string consisting of this string enclosed in a <blink> tag.
   */
  blink(): string

  /**
   * Returns a string consisting of this string enclosed in a <b> tag.
   */
  bold(): string

  /**
   * Returns the character at the specified index.
   * @param index An integer between 0 and string.length -1, specifying the character to return.
   */
  charAt(index: number): string

  /**
   * Returns the Unicode value of the character at the given index.
   * @param index An integer between 0 and string.length -1, specifying the character.
   */
  charCodeAt(index: number): number

  /**
   * If necessary, converts the one or more given values to strings.
   * Those values are concatenated with the original string, the result is returned. The original string is not effected.Returns the concatenated string.
   * @param value The values to be concatenated with the given string.
   */
  concat(value: string): string

  /**
   * Returns a string consisting of this string enclosed in a <tt> tag.
   */
  fixed(): string

  /**
   * Returns a string consisting of this string enclosed in a <font> tag.
   * @param color The value to be stored in the tag's color attribute.
   */
  fontcolor(color: string): string

  /**
   * Returns a string consisting of this string enclosed in a <font> tag.
   * @param size The value to be stored in the tag's size attribute.
   */
  fontsize(size: number): string

  /**
   * Returns the index within the string of the first occurrence of the specified string, starting the search at fromIndex if provided.
   * @param searchValue The string for which to search.
   * @param offset The starting offset of the search.
   */
  indexOf(searchValue: string, offset?: number): number

  /**
   * Returns a string consisting of this string enclosed in a <i> tag.
   */
  italics(): string

  /**
   * Returns the index within the string of the last occurrence of the specified value.
   * The string is searched backward, starting at fromIndex.Returns the index within the string where the last occurrence of searchValue was found, or -1 if it was not found.
   * @param searchValue The string for which to search.
   * @param offset The starting offset of the search.
   */
  lastIndexOf(searchValue: string, offset?: number): number

  /**
   * Returns a string consisting of this string enclosed in a <a> tag.
   * @param href The value to be stored in the tag's href attribute.
   */
  link(href: string): string

  /**
   * Performs a localized comparison of two strings.
   * @param what The string to compare with.
   */
  localeCompare(what: string): number

  /**
   * Matches a string against a regular expression.
   * @param regexp The regular expression to use.
   */
  match(regexp: RegExp | string): RegExpMatchArray | null

  /**
   *
   * @param what
   * @param with_
   */
  replace(what: any, with_: string): string

  /**
   *
   * @param search
   */
  search(search: RegExp): number

  /**
   * Extracts a substring of the given string and returns it as a new string.
   * The substring begins at startSlice, and includes all characters up to, but not including the character at the index endSlice. A negative value indexes from the end of the string.For example, a negative value for startSlice is resolved as: string. length + startSlice.The original string is unchanged.Returns a substring of characters from the given string, starting at startSlice and ending with endSlice-1.
   * @param startSlice The index at which to begin extraction.
   * @param endSlice The index at which to end extraction. If omitted, slice extracts to the end of the string.
   */
  slice(startSlice: number, endSlice?: number): string

  /**
   * Returns a string consisting of this string enclosed in a <small> tag.
   */
  small(): string

  /**
   * Splits a string into a group of substrings, places those strings in an array, and returns the array.
   * The substrings are created by breaking the original string at places that match delimiter, the delimiter characters are removed.Returns an array whose elements are the substrings.
   * @param delimiter Specifies the string to use for delimiting. If delimiter is omitted, the array returned contains one element, consisting of the entire string.
   * @param limit
   */
  split(delimiter: string, limit?: number): string[]

  /**
   * Returns a string consisting of this string enclosed in a <strike> tag.
   */
  strike(): string

  /**
   * Returns a string consisting of this string enclosed in a <sub> tag.
   */
  sub(): string

  /**
   * Returns a string containing the characters beginning at the specified index, start, through the specified number of characters.
   * The original string is unchanged.Returns a string containing the extracted characters.
   * @param start Location at which to begin extracting characters.
   * @param length The number of characters to extract.
   */
  substr(start: number, length?: number): string

  /**
   * Returns a substring of the given string by extracting characters from indexA up to but not including indexB.
   * The original string is unchanged.Returns a substring of characters from the given string, starting at indexA and ending with indexB-1.
   * @param indexA The index to begin extracting.
   * @param indexB The index at which to end extraction. If omitted, slice extracts to the end of the string.
   */
  substring(indexA: number, indexB?: number): string

  /**
   * Returns a string consisting of this string enclosed in a <sup> tag.
   */
  sup(): string

  /**
   * Returns a new string which contains all the characters of the original string converted to lowercase (localized).
   * The original string is unchanged.
   */
  toLocaleLowerCase(): string

  /**
   * Returns a new string which contains all the characters of the original string converted to uppercase (localized).
   * The original string is unchanged.
   */
  toLocaleUpperCase(): string

  /**
   * Returns a new string which contains all the characters of the original string converted to lowercase.
   * The original string is unchanged.
   */
  toLowerCase(): string

  /**
   * Creates a string representation of this object that can be fed back to eval() to re-create an object. Works only with built-in classes.
   */
  toSource(): string

  /**
   * Returns itself.
   */
  toString(): string

  /**
   * Returns a new string which contains all the characters of the original string converted to uppercase.
   * The original string is unchanged.
   */
  toUpperCase(): string

  /**
   * The valueOf() method returns the number of milliseconds that have passed since midnight, Returns an integer.
   */
  valueOf(): string
}

interface NumberConstructor {
  readonly prototype: Number

  /**
   * Returns a new Number object set to the value of the argument converted to a number.
   * @param value The value of the object being created.
   */
  new(value?: any): Number
  (value: any): number

  /**
   * A constant representing the largest representable number.
   */
  readonly MAX_VALUE: number

  /**
   * A constant representing the smallest representable number.
   */
  readonly MIN_VALUE: number

  /**
   * A constant representing negative infinity.
   */
  readonly NEGATIVE_INFINITY: number

  /**
   * A constant representing the special "Not a Number" value.
   */
  readonly NaN: number

  /**
   * A constant representing positive infinity.
   */
  readonly POSITIVE_INFINITY: number
}
declare const Number: NumberConstructor

/**
 * Wraps a numeric value.
 */
interface Number {
  /**
   * Converts the Number object to a string in scientific notation.
   * @param decimals The number of decimals.
   */
  toExponential(decimals: number): string

  /**
   * Converts the Number object to a string with fixed decimals.
   * @param decimals The number of decimals.
   */
  toFixed(decimals: number): string

  /**
   * Returns the value of a Number object converted to a string, using localized conventions.
   */
  toLocaleString(): string

  /**
   * Converts the Number object to a string in either scientific or fixed notation, epending on its value.
   * @param decimals The number of decimals.
   */
  toPrecision(decimals: number): string

  /**
   * Creates a string representation of this object that can be fed back to eval() to re-create an object. Works only with built-in classes.
   */
  toSource(): string

  /**
   * Returns the value of a Number object converted to a string.
   * @param radix The optional conversion radix.
   */
  toString(radix?: number): string

  /**
   * Returns the value of a Number object as a primitive number.
   */
  valueOf(): number
}

interface BooleanConstructor {
  readonly prototype: Boolean

  /**
   * Creates and returns a new Boolean object set to the value of the argument converted to a boolean.
   * @param value The value to be converted to a Boolean.
   */
  new(value?: any): Boolean
  (value: any): boolean
}
declare const Boolean: BooleanConstructor

/**
 * Wraps a Boolean value.
 */
interface Boolean {
  /**
   * Creates a string representation of this object that can be fed back to eval() to re-create an object. Works only with built-in classes.
   */
  toSource(): string

  /**
   * Returns the string representation of the value of bool.
   * The method returns the string true if the primitive value of bool is true; otherwise it returns the string false.
   */
  toString(): string

  /**
   * Returns the primitive value of bool.
   * The method returns true if the primitive value of bool is true; otherwise it returns false.
   */
  valueOf(): boolean
}

interface RegExpConstructor {
  readonly prototype: RegExp

  /**
   * Creates and returns a new RegExp object set to the value of the argument converted to a regular expression.
   * @param pattern The pattern to convert.
   * @param flags Flags that control how the conversion is performed. A string containing any combination of the letters i, m, g: "i" -- ignore case in pattern matching "m" -- treat the string as multiple lines "g" -- do global pattern matching
   */
  new(pattern: string | RegExp, flags?: string): RegExp
  (pattern: string | RegExp, flags?: string): RegExp

  /**
   * The matched subexpression #1.
   */
  readonly $1: string

  /**
   * The matched subexpression #2.
   */
  readonly $2: string

  /**
   * The matched subexpression #3.
   */
  readonly $3: string

  /**
   * The matched subexpression #4.
   */
  readonly $4: string

  /**
   * The matched subexpression #5.
   */
  readonly $5: string

  /**
   * The matched subexpression #6.
   */
  readonly $6: string

  /**
   * The matched subexpression #7.
   */
  readonly $7: string

  /**
   * The matched subexpression #8.
   */
  readonly $8: string

  /**
   * The matched subexpression #9.
   */
  readonly $9: string

  /**
   * Indicates whether the match is a global match.
   */
  global: boolean

  /**
   * Indicates whether the match is not case sensitive.
   */
  ignoreCase: boolean

  /**
   * The original input string.
   */
  input: string

  /**
   * The last match.
   */
  readonly lastMatch: string

  /**
   * The value of the last matched subexpression.
   */
  readonly lastParen: string

  /**
   * The string before the match.
   */
  readonly leftContext: string

  /**
   * Indicates whether the match matches multiple lines.
   */
  multiline: boolean

  /**
   * The string after the match.
   */
  readonly rightContext: string
}
declare const RegExp: RegExpConstructor

/**
 * Wraps a regular expression.
 */
interface RegExp {
  /**
   * Compiles a string to a regular expression. Returns true if the compilation was successful.
   * @param pattern The pattern to compile.
   */
  compile(pattern: string): boolean

  /**
   * Execute a regular expression.
   * The return value is an array of matches, with the first element containing the match, and successive elements containing the results of any matching subexpression in their order of appearance. If there is no match, the result is null.
   * @param text The string to match.
   */
  exec(text: string): RegExpExecArray | null

  /**
   * Execute a regular expression, and return true if there is a match.
   * @param text The string to match.
   */
  test(text: string): boolean

  /**
   * Converts this RegExp object to a string.
   */
  toString(): string
}

interface RegExpMatchArray extends Array<string> {
  index?: number
  input?: string
}

interface RegExpExecArray extends Array<string> {
  index: number
  input: string
}

interface ErrorConstructor {
  readonly prototype: Error

  /**
   * Creates a new Error object.
   * @param msg The error message.
   * @param file The name of the file.
   * @param line The line number.
   */
  new(msg: string, file?: string, line?: number): Error
  (msg: string, file?: string, line?: number): Error
}
declare const Error: ErrorConstructor

/**
 * Wraps a runtime error.
 */
interface Error {
  /**
   * The error message.
   */
  description: string

  /**
   * Creates a string representation of this object that can be fed back to eval() to re-create an object. Works only with built-in classes.
   */
  toSource(): string

  /**
   * Convert this object to a string.
   */
  toString(): string
}

/**
 * Only for TypeScript compatibility
 */
interface CallableFunction extends Function {

}

interface NewableFunction extends Function {

}

interface IArguments {
  [index: number]: any
  length: number
  callee: Function
}

/**
 * Make all properties in T optional
 */
type Partial<T> = { [P in keyof T]?: T[P] }

/**
 * Make all properties in T readonly
 */
type Readonly<T> = { readonly [P in keyof T]: T[P] }

/**
 * From T pick a set of properties K
 */
type Pick<T, K extends keyof T> = { [P in K]: T[P] }

/**
 * Construct a type with a set of properties K of type T
 */
type Record<K extends string, T> = { [P in K]: T }
