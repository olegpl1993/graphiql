import React from 'react';
import './Response.scss';
import CodeMirror from '@uiw/react-codemirror';

interface Props {
  response: string;
}

function Response(props: Props) {
  const { response } = props;
  return (
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
