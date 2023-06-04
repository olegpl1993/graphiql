import React from 'react';
import './Editor.scss';
import CodeMirror from '@uiw/react-codemirror';
import { graphql } from 'cm6-graphql';
import { githubLight } from '@uiw/codemirror-theme-github';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Box, IconButton, TextField } from '@mui/material';
import Subquest from '../Subquest/Subquest';
import Response from '../Response/Response';
import Docs from '../Docs/Docs';
import { useAppDispatch, useAppSelector } from '../../hook';
import { setQuery } from '../../store/querySlice';
import { setLoading } from '../../store/loadingSlice';
import { setResponse } from '../../store/responseSlice';
import { setUrl } from '../../store/urlSlice';
import request from './request';

function Editor() {
  const dispatch = useAppDispatch();

  const query = useAppSelector((state) => state.queryState.value);
  const headersContent = useAppSelector((state) => state.headersState.headers);
  const variablesContent = useAppSelector((state) => state.variableState.variables);
  const url = useAppSelector((state) => state.urlState.url);

  const handleRequest = async () => {
    dispatch(setLoading(true));
    try {
      const data = await request(query, variablesContent, headersContent, url);
      dispatch(setResponse(data));
    } catch (e) {
      const { message } = e as Error;
      dispatch(setResponse(message));
    }
    dispatch(setLoading(false));
  };

  return (
    <section className="editor">
      <Docs url={url} />
      <div className="wrapper">
        <div className="request">
          <div className="request_row">
            <IconButton className="requestBtn" onClick={handleRequest}>
              <PlayCircleIcon
                className="requestIcon"
                fontSize="large"
                sx={{ color: 'rgb(255, 0, 187)' }}
              />
            </IconButton>

            <Box
              component="form"
              sx={{
                '& > :not(style)': { width: '240px' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                value={url}
                variant="standard"
                onChange={(e) => dispatch(setUrl(e.target.value))}
              />
            </Box>
          </div>

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
        </div>
        <Subquest />
      </div>
      <Response />
    </section>
  );
}

export default Editor;
