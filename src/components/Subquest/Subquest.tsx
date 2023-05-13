import React, { useState } from 'react';
import './Subquest.scss';
import { Button, IconButton } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Subquest() {
  const [headersVariables, setHeadersVariables] = useState(true);
  const handleHeaders = () => {
    console.log('handleHeaders');
    setHeadersVariables(true);
  };
  const handleVariables = () => {
    console.log('handleVariables');
    setHeadersVariables(false);
  };

  const [isOpenSubquest, setOpenSubquest] = useState(false);
  const handleOpenSubquest = () => {
    setOpenSubquest(!isOpenSubquest);
    console.log('handleOpenSubquest', !isOpenSubquest);
  };
  return (
    <div className="subquest">
      <div className="subquest_btnRow">
        <div className="startBtn">
          <Button variant="contained" onClick={handleHeaders}>
            Headers
          </Button>
          <Button variant="contained" onClick={handleVariables}>
            Variables
          </Button>
        </div>
        <IconButton onClick={handleOpenSubquest}>
          {isOpenSubquest ? (
            <ExpandMoreIcon fontSize="large" color="primary" />
          ) : (
            <ExpandLessIcon fontSize="large" color="primary" />
          )}
        </IconButton>
      </div>
      <div className={isOpenSubquest ? 'subquest_box _open' : 'subquest_box'}>
        {headersVariables ? (
          <div className="subquest_headers">Headers</div>
        ) : (
          <div className="subquest_variables">Variables</div>
        )}
      </div>
    </div>
  );
}

export default Subquest;
