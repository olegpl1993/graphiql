import { Box, Button } from '@mui/material';
import './Header.scss';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function Header() {
  const [lang, setLeng] = useState('en');
  const handleChangeLang = (event: SelectChangeEvent) => {
    setLeng(event.target.value as string);
  };

  const [scrollPos, setScrollPos] = useState(window.pageYOffset);
  window.addEventListener('scroll', () => {
    setScrollPos(window.pageYOffset);
  });

  return (
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
        <Button variant="contained">Sign In</Button>
        <Button variant="contained">Sign Up</Button>
      </div>
    </div>
  );
}

export default Header;
