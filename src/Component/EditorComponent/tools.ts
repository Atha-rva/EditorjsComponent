import type { ToolConstructable, ToolSettings } from "@editorjs/editorjs";
import ReadOnlyTextBlock from "./Custom_Tools/ReadOnlyTextBlock";
import { Header } from "./Tools/header";
import { List } from "./Tools/list";
import { Paragraph } from "./Tools/paragraph";
import { Table } from "./Tools/table";
import { Image } from "./Tools/image";
import { Code } from "./Tools/code";
import { Quote } from "./Tools/quote";
import { Warning } from "./Tools/warning";
import { InlineCode } from "./Tools/inlineCode";
import { Delimiter } from "./Tools/delimiter";
import { EmbedTool } from "./Tools/embed";

// Define the tools that will be used in the editor
export const EDITOR_JS_TOOLS: {
  [key: string]: ToolConstructable | ToolSettings;
} = {
  // Official Tools
  header: Header,
  list: List,
  paragraph: Paragraph,
  table: Table,
  image: Image,
  code: Code,
  quote: Quote,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  warning: Warning,
  // Custom Tools
  readOnlyText: ReadOnlyTextBlock
};
