import image from "@editorjs/image";

//Definition: Image tool for ZEditor
export const Image = {
  class: image,
  config: {
    uploader: {
      uploadByFile(file: File) {
        // Add your image upload logic here
        return Promise.resolve({
          success: 1,
          file: {
            url: "https://example.com/image.png",
          },
        });
      },
    },
  },
};
