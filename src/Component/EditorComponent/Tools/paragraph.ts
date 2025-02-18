import { ToolSettings } from "@editorjs/editorjs";
import paragraph from "@editorjs/paragraph";

//Definition: Paragraph tool for ZEditor
export const Paragraph: ToolSettings = {
  class: paragraph as any,
  inlineToolbar: true,
};
