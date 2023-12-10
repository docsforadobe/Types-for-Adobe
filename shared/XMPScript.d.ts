/// <reference path="./PlugPlugExternalObject.d.ts" />

// A commonly used construct for loading XMPScript into
// ExtendScript contexts.
interface ExternalObjectConstructor {
  AdobeXMPScript: ExternalObject | undefined
}

interface XMPMetaConstructor {
  /** Creates an empty object. */
  new (): XMPMetaInstance
  /**
   * @param packet A String containing an XML file or an XMP packet.
   */
  new (packet: string): XMPMetaInstance
  /**
   * @param buffer The UTF-8 or UTF-16 encoded bytes of an XML file
   * or an XMP packet. This array is the result of a call to `serializeToArray`
   * on an `XMPMeta` instance.
   */
  new (buffer: number[]): XMPMetaInstance
  /**
   * @param prefix The prefix of the namespace.
   * @example XMPMeta.getNamespacePrefix('xmp'); // 'http://ns.adobe.com/xap/1.0/'
   */
  getNamespaceURI(prefix: string): string
  /**
   * @param uri The URI of the namespace.
   * @example XMPMeta.getNamespacePrefix('http://ns.adobe.com/xap/1.0/'); // 'xmp:'
   */
  getNamespacePrefix(uri: string): string
}
type XMPProperty = {
  locale: string
  namespace: string
  options: string
  path: string
  value: string
}
interface XMPMetaInstance {
  doesPropertyExist(namespace: string, value: string): boolean
  getProperty(namespace: string, property: string): XMPProperty
  setProperty(namespace: string, property: string, value: string): boolean
  countArrayItems(namespace: string, property: string): number
  getArrayItem(namespace: string, property: string, itemIndex: number): XMPProperty
  deleteProperty(namespace: string, property: string): boolean
  appendArrayItem(
    namespace: string,
    property: string,
    arrayOptions: string,
    valueToAppend: string,
    valueOptions: string,
  ): boolean
  dumpObject(): string
  serialize(): string
  getNamespaceURI(ns: string): string
}

declare const XMPMeta: XMPMetaConstructor | undefined

interface XMPConstConstructor {
  new (): XMPConstInstance
  NS_DM: string
  NS_DC: string
  ARRAY_IS_ORDERED: string
}

interface XMPConstInstance {
  // Instance stuff.
}

declare const XMPConst: XMPConstConstructor | undefined
