import './Graphiql.scss';
import React from 'react';
import Docs from '../../components/Docs/Docs';
import Editor from '../../components/Editor/Editor';

function Graphiql() {
  return (
    <div className="graphiql">
      <Docs />
      <Editor />
    </div>
  );
}

export default Graphiql;
