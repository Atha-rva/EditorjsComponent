import { OutputData } from "./types/OutputData";

export type ZEditorProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  data?: OutputData;
  getData?: (data: OutputData) => void;
  placeholder?: string;
};
