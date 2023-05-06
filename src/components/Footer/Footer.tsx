import './Footer.scss';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <a href="https://rs.school/react/" className="link" target="_blank" rel="noreferrer">
          <div className="rsslogo" />
        </a>
        GraphiQL 2023
        <a href="https://github.com/olegpl1993" className="link" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
        <a href="https://github.com/dzmitrysh" className="link" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
        <a href="https://github.com/pashkovichma" className="link" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
}

export default Footer;
