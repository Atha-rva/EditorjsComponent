import { ToolSettings } from "@editorjs/editorjs";
import table from "@editorjs/table";

//Definition: Table tool for ZEditor
export const Table: ToolSettings = {
  class: table as any,
  inlineToolbar: true,
};
