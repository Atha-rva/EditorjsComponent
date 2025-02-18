/**
 * Unique identifier of a block
 */
export type BlockId = string;

/**
 * Object returned by Tool's {@link BlockTool#save} method
 * Specified by Tool developer, so leave it as object
 */
export type BlockToolData<T extends object = any> = T;

/**
 * Data for block tunes
 */
export type BlockTuneData = any;

/**
 * Output of one Tool
 *
 * @template Type - the string literal describing a tool type
 * @template Data - the structure describing a data object supported by the tool
 */
export interface OutputBlockData<
  Type extends string = string,
  Data extends object = any
> {
  /**
   * Unique Id of the block
   */
  id?: BlockId;

  /**
   * Tool type
   * @readOnlyText - Used for the ReadOnlyTextBlock tool
   * @header - Used for the Header tool
   * @paragraph - Used for the Paragraph tool
   * @list - Used for the List tool
   * @image - Used for the Image tool
   * @embed - Used for the Embed tool
   * @table - Used for the Table tool
   * @code - Used for the Code tool
   * @delimiter - Used for the Delimiter tool
   * @linkTool - Used for the LinkTool tool
   * @warning - Used for the Warning tool
   * @quote - Used for the Quote tool
   * @marker - Used for the Marker tool
   * @inlineCode - Used for the InlineCode tool
   * @checklist - Used for the Checklist tool
   */
  type: Type;

  /**
   * Saved Block data
   */
  data: BlockToolData<Data>;

  /**
   * Block Tunes data
   */
  tunes?: { [name: string]: BlockTuneData };
}
