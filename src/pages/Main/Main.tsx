import './Main.scss';
import React from 'react';
import { Avatar } from '@mui/material';
import ava1 from '../../assets/ava1.jpg';

function Main() {
  return (
    <div className="main">
      <section className="about">
        <h1 className="title">GraphiQL is a playground/IDE for graphQL requests.</h1>
        <div className="text">Technologies that were used in the development process:</div>
        <ul className="list">
          <li>- TypeScript</li>
          <li>- HTML / CSS / SASS(SCSS) </li>
          <li>- React / Redux toolkit</li>
          <li>- NPM / VITE</li>
          <li>- Git / GitHub</li>
          <li>- Material-UI / React-hook-form</li>
        </ul>
      </section>

      <section className="developers">
        <h2 className="title">Developers</h2>
        <div className="text">
          This app is the final project of React Course - The Rolling Scopes School. The project was
          developed by a team of three students.
        </div>
        <div className="row">
          <div className="developer">
            <img src={ava1} alt="logoVape" height={200} />
            <div className="col">
              <div className="position">Team Lead</div>
              <div className="name">Oleh Pluhatyrov</div>
            </div>
            <div className="col">
              <div className="contribution">Contribution to the project:</div>
              <ul>
                <li>- Architecture development</li>
                <li>- Workflow organization</li>
                <li>- Meetings</li>
                <li>- Distribution of tasks</li>
                <li>- Code review</li>
                <li>- Programming</li>
              </ul>
            </div>
          </div>

          <div className="developer">
            <Avatar src="/broken-image.jpg" sx={{ height: [200], width: [200] }} />
            <div className="col">
              <div className="position">Frontend Developer</div>
              <div className="name">Maryia Pashkovich</div>
            </div>
            <div className="col">
              <div className="contribution">Contribution to the project:</div>
              <ul className="contrList">
                <li>- Architecture development</li>
                <li>- Workflow organization</li>
                <li>- Meetings</li>
                <li>- Distribution of tasks</li>
                <li>- Code review</li>
                <li>- Programming</li>
              </ul>
            </div>
          </div>

          <div className="developer">
            <Avatar src="/broken-image.jpg" sx={{ height: [200], width: [200] }} />
            <div className="col">
              <div className="position">Frontend Developer</div>
              <div className="name">Dzmitry Shiwe</div>
            </div>
            <div className="col">
              <div className="contribution">Contribution to the project:</div>
              <ul>
                <li>- Architecture development</li>
                <li>- Workflow organization</li>
                <li>- Meetings</li>
                <li>- Distribution of tasks</li>
                <li>- Code review</li>
                <li>- Programming</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="rss">
        <h2 className="title">The Rolling Scopes School</h2>
        <div className="text">
          RS School is free-of-charge and community-based education program conducted by The Rolling
          Scopes developer community since 2013. Everyone can study at RS School, regardless of age,
          professional employment, or place of residence.
        </div>
      </section>

      <section className="course">
        <h2 className="title">React Course</h2>
        <div className="text">
          React Course Students of the RS School from the 2022Q3, which has passed RS School Stage
          #2 as well as new students with practical experience and knowledge of:
        </div>
        <ul className="list">
          <li>- JavaScript</li>
          <li>- TypeScript</li>
          <li>
            - Git, GitHub (clone, add, commit, push, pull, merge, rebase, working with Pull Request)
          </li>
          <li>- NPM, Webpack</li>
          <li>- CSS3 / HTML5</li>
          <li>- Chrome DevTools, Figma</li>
          <li>- Understanding of the REST</li>
        </ul>
      </section>
    </div>
  );
}

export default Main;
