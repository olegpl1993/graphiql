import React, { useState, Suspense, lazy } from 'react';
import './Docs.scss';
import DescriptionIcon from '@mui/icons-material/Description';
import { IconButton } from '@mui/material';
import Spinner from '../Spinner/Spinner';

const url = 'https://rickandmortyapi.com/graphql';
const RenderDocs = lazy(() => import('create-graphql-docs/RenderDocs'));

function Docs() {
  const [isOpenDocs, setOpenDocs] = useState(false);
  const handleOpenDocs = () => {
    setOpenDocs(!isOpenDocs);
  };

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
            <Suspense fallback={<Spinner />}>
              <RenderDocs url={url} />
            </Suspense>
          </div>
        </div>
      )}
    </section>
  );
}

export default Docs;
