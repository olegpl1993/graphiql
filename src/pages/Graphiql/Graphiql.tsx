import { Button, IconButton } from '@mui/material';
import './Graphiql.scss';
import React, { useState } from 'react';
import DescriptionIcon from '@mui/icons-material/Description';

function Graphiql() {
  const handleVariables = () => {
    console.log('handleVariables');
  };

  const handleHeaders = () => {
    console.log('handleHeaders');
  };

  const [isOpenDocs, setOpenDocs] = useState(false);
  const handleOpenDocs = () => {
    console.log('handleOpenDocs');
    setOpenDocs(!isOpenDocs);
  };

  return (
    <div className="graphiql">
      <section className={isOpenDocs ? 'docs _open' : 'docs'}>
        <div className="docs_openBtn">
          <IconButton onClick={handleOpenDocs}>
            <DescriptionIcon fontSize="large" color="primary" />
          </IconButton>
        </div>
        <div className={isOpenDocs ? 'docs_text _open' : 'docs_text'}>
          <p>documentation</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto velit temporibus
            incidunt totam molestiae ipsum, inventore magni. Maiores quos velit itaque dignissimos
            rerum necessitatibus laboriosam! Totam laborum debitis assumenda vitae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quos dolore inventore
            mollitia impedit optio vero similique, dolorum pariatur reiciendis reprehenderit nisi
            rem et porro consequatur aperiam, assumenda tempora! Iste harum quis vitae hic omnis,
            consequatur consectetur blanditiis accusantium quisquam praesentium. Laboriosam animi
            quaerat corporis dolores dignissimos aspernatur aperiam minima, voluptatibus alias
            facere possimus quasi hic, quisquam ducimus, nam vel! Magni dolore hic tempore totam
            eligendi est obcaecati nostrum. Explicabo omnis placeat non tenetur praesentium magni
            facilis necessitatibus ab? Sapiente ipsa facilis tenetur animi illum! Delectus ipsam
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aut debitis, illo
            magni officiis, alias esse, incidunt laborum ratione consequatur exercitationem veniam
            veritatis pariatur. Suscipit rem quis odio quisquam sunt.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, exercitationem odit
            deleniti explicabo enim pariatur vitae rerum aut possimus odio impedit magni minima
            corrupti quidem repellendus dicta dolore delectus deserunt. Sequi id iste deleniti
            exercitationem in ad recusandae dolore tempora earum aut ab quaerat deserunt esse
            voluptates fugiat, pariatur itaque voluptatum natus. Sapiente eum iusto eaque officiis
            nulla exercitationem qui numquam libero suscipit minus! Debitis dolores velit sequi
            laboriosam beatae id, numquam cum eaque accusamus veritatis nihil blanditiis officia,
            magnam tempora error ducimus suscipit neque provident corporis! Eos magni minima itaque
            odit voluptatibus, possimus ab, nam nulla quibusdam, excepturi repudiandae numquam ipsam
          </p>
        </div>
      </section>

      <section className="editor">
        <div className="request">editor </div>
        <div className="subquest">
          <div className="subquest_btnRow">
            <Button variant="contained" onClick={handleVariables}>
              Variables
            </Button>
            <Button variant="contained" onClick={handleHeaders}>
              Headers
            </Button>
          </div>
          <div className="subquest_box">Headers an variables box</div>
        </div>
      </section>

      <section className="response">response</section>
    </div>
  );
}

export default Graphiql;
