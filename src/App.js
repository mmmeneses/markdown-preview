import React, { useState } from "react";
import { marked } from "marked";
import "./App.css";

marked.setOptions({
  breaks: true, // Interpreta los saltos de línea como <br>
});

const App = () => {

  const defaultMarkdown = `
  # Encabezado principal (H1)
  ## Subencabezado (H2)
  [Enlace](https://www.example.com)
  \`Código en línea\`
  \`\`\`
  Bloque de código
  \`\`\`
  - Elemento de lista
  > Cita en bloque
  ![Imagen](https://via.placeholder.com/150)
  **Texto en negrita**
  `;

  const [markdown, setMarkdown] = useState(defaultMarkdown);

  return (
    <div className="app-container">
      <h1 className="app-title">Markdown Previewer</h1>
      <div className="editor-preview-container">
        <div className="editor-container">
          <h2>Editor</h2>
          <textarea 
            id="editor"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          />
        </div>
        <div className="preview-container">
          <h2>Preview</h2>
          <div 
            id="preview"
            dangerouslySetInnerHTML={{__html: marked(markdown) }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
