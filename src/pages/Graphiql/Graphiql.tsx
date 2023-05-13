import './Graphiql.scss';
import React from 'react';
import Docs from '../../components/Docs/Docs';
import Editor from '../../components/Editor/Editor';
import Response from '../../components/Response/Response';

function Graphiql() {
  return (
    <div className="graphiql">
      <Docs />
      <Editor />
      <Response />
    </div>
  );
}

export default Graphiql;
