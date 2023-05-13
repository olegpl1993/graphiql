import React from 'react';
import './Editor.scss';
import Subquest from '../Subquest/Subquest';

function Editor() {
  return (
    <section className="editor">
      <div className="request">
        <textarea className="request_area" name="reqest_editor" />
      </div>
      <Subquest />
    </section>
  );
}

export default Editor;
