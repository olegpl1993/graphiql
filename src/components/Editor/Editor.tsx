import React, { useState } from 'react';
import './Editor.scss';
import CodeMirror from '@uiw/react-codemirror';
import { IconButton } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Subquest from '../Subquest/Subquest';
import Response from '../Response/Response';

const url = 'https://rickandmortyapi.com/graphql';

const request = async (query: string): Promise<string> => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: {},
    }),
  });
  return res.json();
};

function Editor() {
  const [requestContent, setRequestContent] = useState('query {}');
  const [response, setResponse] = useState('');

  const handleReqest = async () => {
    const data = await request(requestContent);
    if (data) setResponse(data);
  };

  console.log(response);

  return (
    <section className="editor">
      <div className="wrapper">
        <div className="request">
          <div className="request_area">
            <CodeMirror
              value={requestContent}
              height="100%"
              width="100%"
              onChange={(value) => setRequestContent(value)}
            />
          </div>
          <IconButton className="reqestBtn" onClick={handleReqest}>
            <PlayCircleIcon
              className="reqestIcon"
              fontSize="large"
              sx={{ color: 'rgb(255, 0, 187)' }}
            />
          </IconButton>
        </div>
        <Subquest />
      </div>
      <Response response={response} />
    </section>
  );
}

export default Editor;
