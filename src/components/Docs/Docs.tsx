import React, { useState } from 'react';
import './Docs.scss';
import DescriptionIcon from '@mui/icons-material/Description';
import { IconButton } from '@mui/material';
import { GraphQLSchema } from 'graphql';

interface Props {
  schema: GraphQLSchema | null;
}

function Docs(props: Props) {
  const { schema } = props;
  const [isOpenDocs, setOpenDocs] = useState(false);
  const handleOpenDocs = () => {
    setOpenDocs(!isOpenDocs);
  };

  console.log(schema);

  return (
    <section className="docs">
      <div className="btnRow">
        <IconButton className="docsOpenBtn" onClick={handleOpenDocs}>
          {isOpenDocs ? (
            <DescriptionIcon fontSize="large" sx={{ color: 'rgb(255, 0, 187)' }} />
          ) : (
            <DescriptionIcon fontSize="large" color="primary" />
          )}
        </IconButton>
      </div>
      {isOpenDocs && (
        <div className="docsText">
          <div className="docsBox">
            <p>Example query without variable:</p>
            <p>{'query { characters(page: 1, filter: { name: "Alien" }) { info { count } results { name } } }'}</p>
            <br />
            <br />
            <p>Example query:</p>
            <p>{'query ($pageNumber: Int, $nameChar: String) { characters(page: $pageNumber, filter: { name: $nameChar }) { info { count } results { name } } }'}</p>
            <br />
            <p>Example variable:</p>
            <p>{'{ "pageNumber": 1, "nameChar": "Alien" }'}</p>
            <div className="schema">Schema</div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Docs;
