import React, { Dispatch, SetStateAction, useState } from 'react';
import './Subquest.scss';
import CodeMirror from '@uiw/react-codemirror';
import { Button, IconButton } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useAppSelector } from '../../hook';
import text from '../../language/Language';
// interface TextKey {
//   header: string;
//   variable: string;
// }
// interface Text {
//   [key: string]: TextKey;
// }
// const text: Text = {
//   en: {
//     header: 'Headers',
//     variable: 'Variables',
//   },
//   ru: {
//     header: 'Заголовок',
//     variable: 'Переменные',
//   },
// };

interface Props {
  headersContent: string;
  setHeadersContent: Dispatch<SetStateAction<string>>;
  variablesContent: string;
  setVariablesContent: Dispatch<SetStateAction<string>>;
}

function Subquest(props: Props) {
  const { headersContent, setHeadersContent, variablesContent, setVariablesContent } = props;
  const lang = useAppSelector((state) => state.langState.lang);

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

  return (
    <div className="subquest">
      <div className="subquest_btnRow">
        <div className="startBtn">
          <Button variant="contained" onClick={handleHeaders}>
            {text[lang].headerGraph}
          </Button>
          <Button variant="contained" onClick={handleVariables}>
            {text[lang].variableGraph}
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
            value={headersContent}
            height="100%"
            width="100%"
            onChange={(value) => setHeadersContent(value)}
          />
        ) : (
          <CodeMirror
            value={variablesContent}
            height="100%"
            width="100%"
            onChange={(value) => setVariablesContent(value)}
          />
        )}
      </div>
    </div>
  );
}

export default Subquest;
