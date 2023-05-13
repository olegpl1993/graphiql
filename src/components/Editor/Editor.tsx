import React, { useState } from 'react';
import './Editor.scss';
import Subquest from '../Subquest/Subquest';

function Editor() {
  const [requestContent, setRequestContent] = useState('Request');
  return (
    <section className="editor">
      <div className="request">
        <textarea
          className="request_area"
          value={requestContent}
          onChange={(e) => setRequestContent(e.target.value)}
        />
      </div>
      <Subquest />
    </section>
  );
}

export default Editor;
