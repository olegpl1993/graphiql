import React from 'react';
import './Response.scss';
import CodeMirror from '@uiw/react-codemirror';
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
        value={response ? JSON.stringify(response, null, '\t') : ''}
        height="100%"
        width="100%"
        readOnly
      />
    </section>
  );
}

export default Response;
