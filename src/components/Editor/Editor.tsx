import React, { useState } from 'react';
import './Editor.scss';
import { IconButton } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Subquest from '../Subquest/Subquest';
import Response from '../Response/Response';

function Editor() {
  const [requestContent, setRequestContent] = useState('Request');
  const handleReqest = () => {
    console.log(handleReqest);
  };
  return (
    <section className="editor">
      <div className="wrapper">
        <div className="request">
          <textarea
            className="request_area"
            value={requestContent}
            onChange={(e) => setRequestContent(e.target.value)}
          />
          <IconButton className="reqestBtn" onClick={handleReqest}>
            <PlayCircleIcon className="reqestIcon" fontSize="large" sx={{ color: 'rgb(255, 0, 187)' }} />
          </IconButton>
        </div>
        <Subquest />
      </div>
      <Response />
    </section>
  );
}

export default Editor;
