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
  appendArrayItem(
    namespace: string,
    property: string,
    arrayOptions: string,
    valueToAppend: string,
    valueOptions: string,
  ): boolean
  countArrayItems(namespace: string, property: string): number
  doesPropertyExist(namespace: string, value: string): boolean
  getProperty(namespace: string, property: string): XMPProperty
  getArrayItem(namespace: string, property: string, itemIndex: number): XMPProperty
  deleteProperty(namespace: string, property: string): boolean
  deleteQualifier(schemaNS: string, propName: string, qualNS: string, qualName: string): void
  deleteStructField(schemaNS: string, structName: string, fieldNS: string, fieldName: string): void
  doesQualifierExist(schemaNS: string, propName: string, qualNS: string, qualName: string): boolean
  dumpObject(): string
  serialize(): string
  getNamespaceURI(ns: string): string
  doesStructFieldExist(
    schemaNS: string,
    structName: string,
    fieldNS: string,
    fieldName: string,
  ): boolean
  getStructField(
    schemaNS: string,
    structName: string,
    fieldNS: string,
    fieldName: string,
  ): XMPProperty
  setStructField(
    schemaNS: string,
    structName: string,
    fieldNS: string,
    fieldName: string,
    fieldValue: string,
  ): void
  setProperty(namespace: string, property: string, value: string): boolean
}

declare const XMPMeta: XMPMetaConstructor

interface XMPConstConstructor {
  new (): XMPConstInstance
  ARRAY_ITEM_NAME: string
  ARRAY_LAST_ITEM: number
  FALSESTR: string
  NS_ADOBESTOCKPHOTO: string
  NS_ASF: string
  NS_BWF: string
  NS_CAMERARAW: string
  NS_CCV: string
  NS_CREATOR_ATOM: string
  NS_DC: string
  NS_DC_DEPRECATED: string
  NS_DICOM: string
  NS_DM: string
  NS_EXIF: string
  NS_EXIF_AUX: string
  NS_EXIFX: string
  NS_IPTCCORE: string
  NS_IPTCEXT: string
  NS_IX: string
  NS_JP2K: string
  NS_JPEG: string
  NS_PDF: string
  NS_PDFA_EXTENSION: string
  NS_PDFA_FIELD: string
  NS_PDFA_ID: string
  NS_PDFA_PROPERTY: string
  NS_PDFA_SCHEMA: string
  NS_PDFA_TYPE: string
  NS_PDFX: string
  NS_PDFX_ID: string
  NS_PHOTOSHOP: string
  NS_PLUS: string
  NS_PNG: string
  NS_PSALBUM: string
  NS_RDF: string
  NS_RIFFINFO: string
  NS_SCRIPT: string
  NS_SWF: string
  NS_TIFF: string
  NS_TRANSIENT: string
  NS_TXMP: string
  NS_WAV: string
  NS_X: string
  NS_XML: string
  NS_XMP: string
  NS_XMP_BJ: string
  NS_XMP_MM: string
  NS_XMP_NOTE: string
  NS_XMP_RIGHTS: string
  RDF_TYPE: string
  TAG_XAPMETA: string
  TAG_XMPMETA: string
  TRUESTR: string
  TYPE_DIMENSIONS: string
  TYPE_FONT: string
  TYPE_GRAPHICS: string
  TYPE_IDENTIFIERQUAL: string
  TYPE_IMAGE: string
  TYPE_MANIFESTITEM: string
  TYPE_PAGEDFILE: string
  TYPE_RESOURCEEVENT: string
  TYPE_RESOURCEREF: string
  TYPE_ST_JOB: string
  TYPE_ST_VERSION: string
  TYPE_TEXT: string
  X_DEFAULT: string
  XML_LANG: string
  XMP_PI: string
}

interface XMPConstInstance {
  // Instance stuff.
}

declare const XMPConst: XMPConstConstructor
