// Custom tool for ZEditor
class ReadOnlyTextBlock {
  private data: { text: string; readOnly: boolean };
  private wrapper: HTMLDivElement;
  private readOnly: boolean;

  constructor({ data, readOnly }: { data: any; readOnly: boolean }) {
    this.data = {
      text: data.text || "",
      readOnly: data.readOnly ?? readOnly,
    };
    this.readOnly = this.data.readOnly;
    this.wrapper = document.createElement("div");
  }

  render(): HTMLDivElement {
    this.wrapper.contentEditable = (!this.readOnly).toString();
    this.wrapper.innerHTML = this.data.text;
    this.wrapper.style.border = "1px solid #ccc";
    this.wrapper.style.padding = "10px";
    this.wrapper.style.marginBottom = "10px";
    this.wrapper.style.background = this.readOnly ? "#f4f4f4" : "#fff";
    return this.wrapper;
  }

  save(): { text: string; readOnly: boolean } {
    return {
      text: this.wrapper.innerHTML,
      readOnly: this.readOnly,
    };
  }
}

export default ReadOnlyTextBlock;
