import './Header.scss';
import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Modal from '../Modal/Modal';
import Signin from '../Signin/Signin';
import Signup from '../Signup/Signup';

function Header() {
  const [lang, setLeng] = useState('en');
  const handleChangeLang = (event: SelectChangeEvent) => {
    setLeng(event.target.value as string);
  };

  const [scrollPos, setScrollPos] = useState(window.pageYOffset);
  window.addEventListener('scroll', () => {
    setScrollPos(window.pageYOffset);
  });

  const [signinModalActiv, setSigninModalActiv] = useState(false);
  const [signupModalActiv, setSignupModalActiv] = useState(false);

  return (
    <>
      {signinModalActiv && (
        <Modal modalActiv={signinModalActiv} setModalActiv={setSigninModalActiv}>
          <Signin />
        </Modal>
      )}
      {signupModalActiv && (
        <Modal modalActiv={signupModalActiv} setModalActiv={setSignupModalActiv}>
          <Signup />
        </Modal>
      )}
      <div className={scrollPos ? 'header _scroll' : 'header'}>
        <div className="row">
          <Box sx={{ minWidth: 80 }}>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">Lang</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={lang}
                label="Age"
                onChange={handleChangeLang}
              >
                <MenuItem value="en">en</MenuItem>
                <MenuItem value="ru">ru</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <nav className="navigation">
            <Button variant="text">
              <NavLink to="/">Main</NavLink>
            </Button>
            <Button variant="text">
              <NavLink to="/graphiql">Graphiql</NavLink>
            </Button>
          </nav>
        </div>
        <div className="row">
          <Button variant="contained" onClick={() => setSigninModalActiv(true)}>
            Sign In
          </Button>
          <Button variant="contained" onClick={() => setSignupModalActiv(true)}>
            Sign Up
          </Button>
        </div>
      </div>
    </>
  );
}

export default Header;
