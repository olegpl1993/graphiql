interface TextKey {
  graphEditor: string;
  headerGraph: string;
  variableGraph: string;
  signinHeader: string;
  signupHeader: string;
  titlesigin: string;
  signin: string;
  successin: string;
  faillin: string;
  titlesigup: string;
  signup: string;
  successup: string;
  faillup: string;
  mailreq: string;
  mailredx: string;
  passreq: string;
  passredx: string;
  minlength: string;
  logout: string;
  titleapp: string;
  titledev: string;
  tileproject: string;
  nameteam: string;
  namedevelop1: string;
  namedevelop2: string;
  deposit: string;
  tecstack: string;
  community: string;
  texterror: string;
}

interface Text {
  [key: string]: TextKey;
}

const text: Text = {
  en: {
    graphEditor: 'Code editor',
    headerGraph: 'Headers',
    variableGraph: 'Variables',
    signinHeader: 'sign in',
    signupHeader: 'sign up',
    titlesigin: 'Authorization',
    signin: 'SIGN IN',
    successin: 'Login successfully!',
    faillin: 'Login failure!',
    titlesigup: 'Registration',
    signup: 'SIGN UP',
    successup: 'Successful registration!',
    faillup: 'Registration failure!',
    mailreq: 'Email is required',
    mailredx: 'Enter valid E-mail',
    passreq: 'Password is required',
    passredx: 'Should contain at least one letter, one digit, one special character',
    minlength: 'Should be at least 8 chars',
    logout: 'log out',
    titleapp: 'GraphiQL is a playground/IDE for graphQL requests.',
    titledev: 'Developers',
    tileproject: `This app is the final project of React Course - The Rolling Scopes School. The project
                  was developed by a team of three students.`,
    nameteam: 'Oleh Pluhatyrov',
    namedevelop1: 'Dzmitry Shiwe',
    namedevelop2: 'Maryia Pashkovich',
    deposit: 'Contribution',
    tecstack: 'Technical stack:',
    community: `RS School is free-of-charge and community-based education program conducted by The
                Rolling Scopes developer community since 2013. Everyone can study at RS School,
                regardless of age, professional employment, or place of residence.`,
    texterror: 'Error 404: Page not found',
  },
  ru: {
    graphEditor: 'Редактор кода',
    headerGraph: 'Заголовок',
    variableGraph: 'Переменные',
    signinHeader: 'войти',
    signupHeader: 'регистрация',
    titlesigin: 'Авторизация',
    signin: 'ВОЙТИ',
    successin: 'Вход успешен',
    faillin: 'Вход не удался',
    titlesigup: 'Зарегаться',
    signup: 'РЕГИСТРАЦИЯ',
    successup: 'Регистрация успеша',
    faillup: 'Регистрация не удалась',
    mailreq: 'Электронная почта',
    mailredx: 'Действительная эл. почта',
    passreq: 'Введите пароль',
    passredx: 'Должен содержать хотя бы одну букву, одну цифру, один специальный символ',
    minlength: 'Должно быть не менее 8 символов',
    logout: 'выйти',
    titleapp: 'GraphiQL — это приложение/IDE для graphQL запросов.',
    titledev: 'Разработчики',
    tileproject: `Это приложение является финальным проектом React Course - The Rolling Scopes School. Проект
                  был разработан командой из трех студентов.`,
    nameteam: 'Олег Плугатырёв',
    namedevelop1: 'Дмитрий Шиве',
    namedevelop2: 'Мария Пашкович',
    deposit: 'Вклад в проект',
    tecstack: 'Используемые технологии',
    community: `RS School — это бесплатная образовательная программа, проводимая 
                сообществом разработчиков The Rolling Scopes с 2013 года. Учиться в RS School может каждый,
                независимо от возраста, профессиональной занятости или места жительства.`,
    texterror: 'Ошибка 404 - Страница Не Найдена',
  },
};

export default text;
