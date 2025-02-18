import warning from "@editorjs/warning";

//Definition: Warning tool for ZEditor
export const Warning = {
  class: warning,
  inlineToolbar: true,
  config: {
    titlePlaceholder: "Title",
    messagePlaceholder: "Message",
  },
};
