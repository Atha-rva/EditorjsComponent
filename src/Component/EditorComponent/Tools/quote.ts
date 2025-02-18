import quote from "@editorjs/quote";

//Definition: Quote tool for ZEditor
export const Quote = {
  class: quote,
  inlineToolbar: true,
  shortcut: "CMD+SHIFT+O",
  config: {
    quotePlaceholder: "Enter a quote",
    captionPlaceholder: "Quote's author",
  },
};
