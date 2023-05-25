import React, { Dispatch, SetStateAction, useState } from 'react';
import './Subquest.scss';
import CodeMirror from '@uiw/react-codemirror';
import { graphql } from 'cm6-graphql';
import { githubLight } from '@uiw/codemirror-theme-github';
import { Button, IconButton } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useAppSelector } from '../../hook';
import text from '../../language/Language';

interface Props {
  headersContent: string;
  setHeadersContent: Dispatch<SetStateAction<string>>;
  variablesContent: string;
  setVariablesContent: Dispatch<SetStateAction<string>>;
}

function Subquest(props: Props) {
  const { headersContent, setHeadersContent, variablesContent, setVariablesContent } = props;
  const lang = useAppSelector((state) => state.langState.lang);

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
            onChange={(value) => setHeadersContent(value)}
          />
        ) : (
          <CodeMirror
            theme={githubLight}
            value={variablesContent}
            height="100%"
            width="100%"
            extensions={[graphql()]}
            onChange={(value) => setVariablesContent(value)}
          />
        )}
      </div>
    </div>
  );
}

export default Subquest;
