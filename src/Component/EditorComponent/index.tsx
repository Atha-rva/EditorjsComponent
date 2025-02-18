import React, { useEffect, useRef, useCallback } from "react";
import EditorJS from "@editorjs/editorjs";
import { EDITOR_JS_TOOLS } from "./tools";
import { ZEditorProps } from "./Props";

const Editor: React.FC<ZEditorProps> = ({ data, getData, ...props }) => {
  const editorInstance = useRef<EditorJS | null>(null);
  const editorRef = useRef<HTMLDivElement>(null);
  const saveTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleSave = useCallback(() => {
    if (!editorInstance.current) {
      console.error("Editor instance is not initialized.");
      return;
    }

    if (saveTimeout.current) clearTimeout(saveTimeout.current);

    saveTimeout.current = setTimeout(async () => {
      try {
        const savedData: any = await editorInstance.current?.save();
        // console.log("Editor Data:", savedData);
        getData?.(savedData);
      } catch (error) {
        console.error("Failed to save editor data:", error);
      }
    }, 1000);
  }, [getData]);

  useEffect(() => {
    if (!editorRef.current) return;

    const editor = new EditorJS({
      holder: editorRef.current,
      tools: EDITOR_JS_TOOLS,
      placeholder: "Start writing your story...",
      data: data || { blocks: [] },
      onChange: handleSave,
    });

    editorInstance.current = editor;

    return () => {
      if (
        editorInstance.current &&
        typeof editorInstance.current.destroy === "function"
      ) {
        editorInstance.current.destroy();
      }
      editorInstance.current = null;
    };
  }, [data, handleSave]);

  return <div ref={editorRef} />;
};

export default Editor;
