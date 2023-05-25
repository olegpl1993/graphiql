import React from 'react';
import './Editor.scss';
import CodeMirror from '@uiw/react-codemirror';
import { graphql } from 'cm6-graphql';
import { githubLight } from '@uiw/codemirror-theme-github';
import { IconButton } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Subquest from '../Subquest/Subquest';
import Response from '../Response/Response';
import Docs from '../Docs/Docs';
import { useAppDispatch, useAppSelector } from '../../hook';
import { setQuery } from '../../store/querySlice';
import { setLoading } from '../../store/loadingSlice';
import { setResponse } from '../../store/responseSlice';

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
  const dispatch = useAppDispatch();

  const query = useAppSelector((state) => state.queryState.value);
  const headersContent = useAppSelector((state) => state.headersState.headers);
  const variablesContent = useAppSelector((state) => state.variableState.variables);

  const handleRequest = async () => {
    dispatch(setLoading(true));
    try {
      const data = await request(query, variablesContent, headersContent);
      dispatch(setResponse(data));
    } catch (e) {
      const { message } = e as Error;
      dispatch(setResponse(message));
    }
    dispatch(setLoading(false));
  };

  return (
    <section className="editor">
      <Docs />
      <div className="wrapper">
        <div className="request">
          <div className="request_area">
            <CodeMirror
              theme={githubLight}
              value={query}
              height="100%"
              width="100%"
              extensions={[graphql()]}
              onChange={(value) => dispatch(setQuery(value))}
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
        <Subquest />
      </div>
      <Response />
    </section>
  );
}

export default Editor;
