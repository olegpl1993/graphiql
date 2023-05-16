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
    <section className={isOpenDocs ? 'docs _open' : 'docs'}>
      <div className="docs_row">
        <div className="docs_openBtn">
          <IconButton onClick={handleOpenDocs}>
            {isOpenDocs ? (
              <DescriptionIcon fontSize="large" sx={{ color: 'rgb(255, 0, 187)' }} />
            ) : (
              <DescriptionIcon fontSize="large" color="primary" />
            )}
          </IconButton>
        </div>
      </div>

      <div className={isOpenDocs ? 'docs_text _open' : 'docs_text'}>
        <div className="docs_box">
          <p>
            {'{characters(page: 1, filter: {name: "rick"}) {info {count}results {name}}location(id: 1) {id}episodesByIds(ids: [1, 2]) {id}}'}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Docs;
