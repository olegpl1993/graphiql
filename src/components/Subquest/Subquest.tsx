import React, { useState } from 'react';
import './Subquest.scss';
import CodeMirror from '@uiw/react-codemirror';
import { graphql } from 'cm6-graphql';
import { githubLight } from '@uiw/codemirror-theme-github';
import { Button, IconButton } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useAppSelector, useAppDispatch } from '../../hook';
import { setVariables } from '../../store/variablesSlice';
import text from '../../language/Language';
import { setHeaders } from '../../store/headersSlice';

function Subquest() {
  const dispatch = useAppDispatch();

  const lang = useAppSelector((state) => state.langState.lang);
  const variablesContent = useAppSelector((state) => state.variableState.variables);
  const headersContent = useAppSelector((state) => state.headersState.headers);

  const [headersVariables, setHeadersVariables] = useState(false);
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

  return (
    <div className="subquest">
      <div className="subquest_btnRow">
        <div className="startBtn">
          <Button variant={headersVariables ? 'outlined' : 'contained'} onClick={handleVariables}>
            {text[lang].variableGraph}
          </Button>
          <Button variant={headersVariables ? 'contained' : 'outlined'} onClick={handleHeaders}>
            {text[lang].headerGraph}
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
          <CodeMirror
            theme={githubLight}
            value={headersContent}
            height="100%"
            width="100%"
            extensions={[graphql()]}
            onChange={(value) => dispatch(setHeaders(value))}
          />
        ) : (
          <CodeMirror
            theme={githubLight}
            value={variablesContent}
            height="100%"
            width="100%"
            extensions={[graphql()]}
            onChange={(value) => dispatch(setVariables(value))}
          />
        )}
      </div>
    </div>
  );
}

export default Subquest;
