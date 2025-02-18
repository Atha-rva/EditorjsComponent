import Embed from "@editorjs/embed";

// Definition: Embed tool for ZEditor
export const EmbedTool = {
  class: Embed,
  inlineToolbar: true,
  config: {
    services: {
      youtube: true,
      twitter: true,
      instagram: true,
      facebook: true,
      codepen: true,
      // Add more services as needed
    },
  },
};