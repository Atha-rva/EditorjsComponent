import header from "@editorjs/header";
import type { ToolSettings } from "@editorjs/editorjs";

//Definition : Header tool for ZEditor
export const Header: ToolSettings = {
  class: header as any,
  config: {
    levels: [1, 2, 3, 4],
    defaultLevel: 3,
  },
};
