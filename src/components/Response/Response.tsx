import React from 'react';
import './Response.scss';
import CodeMirror from '@uiw/react-codemirror';
import { graphql } from 'cm6-graphql';
import { githubLight } from '@uiw/codemirror-theme-github';
import Spinner from '../Spinner/Spinner';
import { useAppDispatch, useAppSelector } from '../../hook';
import { setResponse } from '../../store/responseSlice';

function Response() {
  const resp = useAppSelector((state) => state.responseState.resp);
  const loading = useAppSelector((state) => state.loadingState.loads);
  const dispatch = useAppDispatch();

  return loading ? (
    <Spinner />
  ) : (
    <section className="response">
      <CodeMirror
        theme={githubLight}
        value={resp ? JSON.stringify(resp, null, '\t') : ''}
        height="100%"
        width="100%"
        readOnly
        extensions={[graphql()]}
        onChange={(value) => dispatch(setResponse(value))}
      />
    </section>
  );
}

export default Response;
