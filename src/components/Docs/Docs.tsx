import React, { useState } from 'react';
import './Docs.scss';
import DescriptionIcon from '@mui/icons-material/Description';
import { IconButton } from '@mui/material';

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
            {`query {
  characters(page: 2, filter: { name: "rick" }) {
    info {
      count
    }
    results {
      name
    }
  }
  location(id: 1) {
    id
  }
  episodesByIds(ids: [1, 2]) {
    id
  }
}`}
          </div>
        </div>
      )}
    </section>
  );
}

export default Docs;
