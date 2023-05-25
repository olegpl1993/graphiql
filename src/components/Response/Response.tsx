import React from 'react';
import './Response.scss';
import CodeMirror from '@uiw/react-codemirror';
import { graphql } from 'cm6-graphql';
import { githubLight } from '@uiw/codemirror-theme-github';
import Spinner from '../Spinner/Spinner';
import { useAppDispatch, useAppSelector } from '../../hook';
import { setResponse } from '../../store/responseSlice';

interface Props {
  response: string;
  loading: boolean;
}

function Response(props: Props) {
  const { response, loading } = props;
  const resp = useAppSelector((state) => state.responseState.resp);
  const dispatch = useAppDispatch();

  return loading ? (
    <Spinner />
  ) : (
    <section className="response">
      <CodeMirror
        theme={githubLight}
        value={response ? JSON.stringify(response, null, '\t') : resp}
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
