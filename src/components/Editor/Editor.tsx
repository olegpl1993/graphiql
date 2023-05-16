import React, { useState } from 'react';
import './Editor.scss';
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
  const [requestContent, setRequestContent] = useState('Request');
  const [response, setResponse] = useState('');

  const handleReqest = async () => {
    const data = await request(requestContent);
    if (data) setResponse(JSON.stringify(data, null, 2));
  };

  console.log(response);

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
