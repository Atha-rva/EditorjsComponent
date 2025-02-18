import React, { useState } from "react";
import Editor from "./Component/EditorComponent/index"; 

const App: React.FC = () => {


  return (
    <div >
      <h1>Editor Example</h1>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <Editor placeholder="Enter your content here..." />
      </div>

      {/* Display the saved editor data */}
      {/* <div style={{ marginTop: "20px" }}>
        <h2>Saved Data:</h2>
        <pre>{JSON.stringify(editorData, null, 2)}</pre>
      </div> */}
    </div>
  );
};

export default App;