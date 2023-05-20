import React, { useState } from 'react';
import './Editor.scss';
import CodeMirror from '@uiw/react-codemirror';
import { IconButton } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Subquest from '../Subquest/Subquest';
import Response from '../Response/Response';
import Docs from '../Docs/Docs';

const url = 'https://rickandmortyapi.com/graphql';

const request = async (
  requestContent: string,
  variablesContent: string,
  headersContent: string
): Promise<string> => {
  const variables = variablesContent ? { ...JSON.parse(variablesContent) } : {};
  const headers = headersContent
    ? { ...JSON.parse(headersContent), 'Content-type': 'application/json' }
    : { 'Content-type': 'application/json' };
  const res = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query: requestContent,
      variables,
    }),
  });
  return res.json();
};

function Editor() {
  const [requestContent, setRequestContent] = useState('query {}');
  const [response, setResponse] = useState('');
  const [headersContent, setHeadersContent] = useState('');
  const [variablesContent, setVariablesContent] = useState('');

  const handleReqest = async () => {
    const data = await request(requestContent, variablesContent, headersContent);
    if (data) setResponse(data);
  };

  console.log(response);

  return (
    <section className="editor">
      <Docs />
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
        <Subquest
          headersContent={headersContent}
          setHeadersContent={setHeadersContent}
          variablesContent={variablesContent}
          setVariablesContent={setVariablesContent}
        />
      </div>
      <Response response={response} />
    </section>
  );
}

export default Editor;
