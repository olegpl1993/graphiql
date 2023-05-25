import React, { useEffect, useState } from 'react';
import './Docs.scss';
import DescriptionIcon from '@mui/icons-material/Description';
import { IconButton } from '@mui/material';
import { GraphQLSchema, getIntrospectionQuery, buildClientSchema } from 'graphql';
import Schema from '../Schema/Schema';

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
  const result = await res.json();
  const schema = buildClientSchema(result.data);
  return schema;
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
            <Schema schema={schema} />
          </div>
        </div>
      )}
    </section>
  );
}

export default Docs;
