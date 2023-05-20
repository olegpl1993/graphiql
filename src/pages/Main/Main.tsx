import './Main.scss';
import React from 'react';
import { Snackbar, Alert } from '@mui/material';
import ava1 from '../../assets/ava1.jpg';
import kuroneko1 from '../../assets/kuroneko1.jpg';
import brokenImage from '../../assets/brokenImage.webp';
import { useAppDispatch, useAppSelector } from '../../hook';
import { changeIsOpenSnackbar } from '../../store/snackbarSlice';
import text from '../../language/Language';

// interface TextKey {
//   title: string;
//   titledev: string;
//   tileproject: string;
//   nameteam: string;
//   namedevelop1: string;
//   namedevelop2: string;
//   deposit: string;
//   tecstack: string;
//   community: string;
// }
// interface Text {
//   [key: string]: TextKey;
// }
// const text: Text = {
//   en: {
//     title: 'GraphiQL is a playground/IDE for graphQL requests.',
//     titledev: 'Developers',
// eslint-disable-next-line max-len
//     tileproject: This app is the final project of React Course - The Rolling Scopes School. The project
//                   was developed by a team of three students.,
//     nameteam: 'Oleh Pluhatyrov',
//     namedevelop1: 'Dzmitry Shiwe',
//     namedevelop2: 'Maryia Pashkovich',
//     deposit: 'Contribution',
//     tecstack: 'Technical stack:',
// eslint-disable-next-line max-len
//     community: `RS School is free-of-charge and community-based education program conducted by The
//                 Rolling Scopes developer community since 2013. Everyone can study at RS School,
//                 regardless of age, professional employment, or place of residence.`,
//   },
//   ru: {
//     title: 'GraphiQL — это приложение/IDE для graphQL запросов.',
//     titledev: 'Разработчики',
// eslint-disable-next-line max-len
//     tileproject: `Это приложение является финальным проектом React Course - The Rolling Scopes School. Проект
//                   был разработан командой из трех студентов.`,
//     nameteam: 'Олег Плугатырёв',
//     namedevelop1: 'Дмитрий Шиве',
//     namedevelop2: 'Мария Пашкович',
//     deposit: 'Вклад в проект',
//     tecstack: 'Используемые технологии',
//     community: `RS School — это бесплатная образовательная программа, проводимая
// eslint-disable-next-line max-len
//                 сообществом разработчиков The Rolling Scopes с 2013 года. Учиться в RS School может каждый,
//                 независимо от возраста, профессиональной занятости или места жительства.`,
//   },
// };

function Main() {
  const { isOpenSnackbar, success, snackbarMessage } = useAppSelector(
    (state) => state.snackbarState
  );
  const dispatch = useAppDispatch();
  const handleCloseSnackbar = () => {
    dispatch(changeIsOpenSnackbar(false));
  };

  const lang = useAppSelector((state) => state.langState.lang);

  return (
    <>
      <Snackbar open={isOpenSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert
          onClose={handleCloseSnackbar}
          variant="filled"
          severity={success ? 'success' : 'error'}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
      <div className="main">
        <section className="about">
          <h1 className="title">{text[lang].titleapp}</h1>
        </section>

        <section className="developers">
          <h2 className="title">{text[lang].titledev}</h2>
          <div className="text">
            {text[lang].tileproject}
          </div>
          <div className="row">
            <div className="developer">
              <img src={ava1} alt="ava" height={200} />
              <div className="col">
                <div className="position">Team Lead</div>
                <div className="name">{text[lang].nameteam}</div>
              </div>
              <div className="col">
                <div className="contribution">{text[lang].deposit}</div>
                <ul>
                  <li>- Architecture development</li>
                  <li>- Workflow organization</li>
                  <li>- Meetings</li>
                  <li>- Distribution of tasks</li>
                  <li>- Site layout</li>
                  <li>- Code review</li>
                </ul>
              </div>
            </div>

            <div className="developer">
              <img src={kuroneko1} alt="ava" height={200} />
              <div className="col">
                <div className="position">Frontend developer</div>
                <div className="name">{text[lang].namedevelop1}</div>
              </div>
              <div className="col">
                <div className="contribution">{text[lang].deposit}</div>
                <ul>
                  <li>- Setting Firebase</li>
                  <li>- Registration</li>
                  <li>- Authorization</li>
                  <li>- Validation form</li>
                  <li>- Site layout</li>
                  <li>- Code review</li>
                </ul>
              </div>
            </div>

            <div className="developer">
              <img src={brokenImage} alt="ava" height={200} />
              <div className="col">
                <div className="position">Frontend Developer</div>
                <div className="name">{text[lang].namedevelop2}</div>
              </div>
              <div className="col">
                <div className="contribution">{text[lang].deposit}</div>
                <ul className="contrList">
                  <li>- Design development</li>
                  <li>- Creating a Layout</li>
                  <li>- Localization</li>
                  <li>- Site layout</li>
                  <li>- Code review</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="stack">
          <div className="title">{text[lang].tecstack}</div>
          <ul className="list">
            <li>- Javascript / TypeScript</li>
            <li>- HTML / CSS / SASS(SCSS) </li>
            <li>- React / Redux toolkit</li>
            <li>- NPM / VITE</li>
            <li>- Git / GitHub</li>
            <li>- Material-UI / React-hook-form</li>
            <li>- Firebase</li>
          </ul>
        </section>

        <section className="rss">
          <h2 className="title">The Rolling Scopes School</h2>
          <div className="text">
            {text[lang].community}
          </div>
        </section>
      </div>
    </>
  );
}

export default Main;
