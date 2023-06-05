import React, { Suspense, lazy } from 'react';
import './Docs.scss';
import DescriptionIcon from '@mui/icons-material/Description';
import { IconButton } from '@mui/material';
import Spinner from '../Spinner/Spinner';
import { useAppDispatch, useAppSelector } from '../../hook';
import { setOpenDocs } from '../../store/openDocsSlice';

const RenderDocs = lazy(() => import('create-graphql-docs/Docs'));

interface Props {
  url: string;
}

function Docs(props: Props) {
  const { url } = props;
  const dispatch = useAppDispatch();
  const isOpenDocs = useAppSelector((state) => state.openDocsState.openDocs);
  const handleOpenDocs = () => {
    dispatch(setOpenDocs(!isOpenDocs));
  };

  return (
    <section className="docs-wrapper">
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
