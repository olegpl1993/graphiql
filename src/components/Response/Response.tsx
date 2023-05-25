import React from 'react';
import './Response.scss';
import CodeMirror from '@uiw/react-codemirror';
import { graphql } from 'cm6-graphql';
import { githubLight } from '@uiw/codemirror-theme-github';
import Spinner from '../Spinner/Spinner';

interface Props {
  response: string;
  loading: boolean;
}

function Response(props: Props) {
  const { response, loading } = props;
  return loading ? (
    <Spinner />
  ) : (
    <section className="response">
      <CodeMirror
        theme={githubLight}
        value={response ? JSON.stringify(response, null, '\t') : ''}
        height="100%"
        width="100%"
        readOnly
        extensions={[graphql()]}
      />
    </section>
  );
}

export default Response;
