import React, { useState } from 'react';
import './Subquest.scss';
import { Button, IconButton } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Subquest() {
  const [headersVariables, setHeadersVariables] = useState(true);
  const handleHeaders = () => {
    setHeadersVariables(true);
  };
  const handleVariables = () => {
    setHeadersVariables(false);
  };

  const [isOpenSubquest, setOpenSubquest] = useState(false);
  const handleOpenSubquest = () => {
    setOpenSubquest(!isOpenSubquest);
  };

  const [headersContent, setHeadersContent] = useState('Headers');
  const [variablesContent, setVariablesContent] = useState('Variables');

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
            <ExpandMoreIcon fontSize="large" sx={{ color: 'rgb(255, 0, 187)' }} />
          ) : (
            <ExpandLessIcon fontSize="large" color="primary" />
          )}
        </IconButton>
      </div>
      <div className={isOpenSubquest ? 'subquest_box _open' : 'subquest_box'}>
        {headersVariables ? (
          <textarea
            className="headers_area"
            value={headersContent}
            onChange={(e) => setHeadersContent(e.target.value)}
          />
        ) : (
          <textarea
            className="variables_area"
            value={variablesContent}
            onChange={(e) => setVariablesContent(e.target.value)}
          />
        )}
      </div>
    </div>
  );
}

export default Subquest;
