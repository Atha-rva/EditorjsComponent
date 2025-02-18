import { OutputBlockData } from "./OutputBlockData";

export interface OutputData {
  /**
   * Editor's version
   */
  version?: string;

  /**
   * Timestamp of saving in milliseconds
   */
  time?: number;

  /**
   * Saved Blocks
   */
  blocks: OutputBlockData[];
}
