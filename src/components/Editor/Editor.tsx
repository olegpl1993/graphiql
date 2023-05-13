import React from 'react';
import './Editor.scss';
import { Button } from '@mui/material';

function Editor() {
  const handleVariables = () => {
    console.log('handleVariables');
  };

  const handleHeaders = () => {
    console.log('handleHeaders');
  };

  return (
    <section className="editor">
      <div className="request">editor </div>
      <div className="subquest">
        <div className="subquest_btnRow">
          <Button variant="contained" onClick={handleVariables}>
            Variables
          </Button>
          <Button variant="contained" onClick={handleHeaders}>
            Headers
          </Button>
        </div>
        <div className="subquest_box">Headers an variables box</div>
      </div>
    </section>
  );
}

export default Editor;
