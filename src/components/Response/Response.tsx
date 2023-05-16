import React from 'react';
import './Response.scss';

interface Props {
  response: string;
}

function Response(props: Props) {
  const { response } = props;
  return <section className="response">{response}</section>;
}

export default Response;
