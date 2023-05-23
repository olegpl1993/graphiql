import React, { useEffect, useState } from 'react';
import './Editor.scss';
import CodeMirror from '@uiw/react-codemirror';
import { IconButton } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { GraphQLSchema, getIntrospectionQuery } from 'graphql';
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

const requestSchema = async () => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getIntrospectionQuery(),
    }),
  });
  const response = await res.json();
  return response.data.__schema;
};

function Editor() {
  const [requestContent, setRequestContent] = useState('query {}');
  const [response, setResponse] = useState('');
  const [headersContent, setHeadersContent] = useState('');
  const [variablesContent, setVariablesContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [schema, setSchema] = useState<GraphQLSchema | null>(null);

  useEffect(() => {
    (async () => {
      setSchema(await requestSchema());
    })();
  }, []);

  const handleRequest = async () => {
    setLoading(true);
    try {
      const data = await request(requestContent, variablesContent, headersContent);
      setResponse(data);
    } catch (e) {
      const { message } = e as Error;
      setResponse(message);
    }
    setLoading(false);
  };

  return (
    <section className="editor">
      <Docs schema={schema} />
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
          <IconButton className="requestBtn" onClick={handleRequest}>
            <PlayCircleIcon
              className="requestIcon"
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
      <Response loading={loading} response={response} />
    </section>
  );
}

export default Editor;
