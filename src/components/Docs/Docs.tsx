import React, { useEffect, useState } from 'react';
import './Docs.scss';
import DescriptionIcon from '@mui/icons-material/Description';
import { IconButton } from '@mui/material';
import { GraphQLSchema, getIntrospectionQuery } from 'graphql';

const url = 'https://rickandmortyapi.com/graphql';

const requestSchema = async () => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getIntrospectionQuery(),
    }),
  });
  const response = await res.json();
  return response.data.__schema;
};

function Docs() {
  const [isOpenDocs, setOpenDocs] = useState(false);
  const handleOpenDocs = () => {
    setOpenDocs(!isOpenDocs);
  };

  const [schema, setSchema] = useState<GraphQLSchema | null>(null);

  useEffect(() => {
    (async () => {
      setSchema(await requestSchema());
    })();
  }, []);

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
