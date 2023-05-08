import React from 'react';
import { Box } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useAppDispatch, useAppSelector } from '../../hook';
import { changeLang } from '../../store/langSlice';
import { Languages } from '../../types';

function LangSelect() {
  const dispatch = useAppDispatch();
  const lang = useAppSelector((state) => state.langState.lang);
  const handleChangeLang = (event: SelectChangeEvent) => {
    dispatch(changeLang(event.target.value as Languages));
  };

  return (
    <Box sx={{ minWidth: 50 }}>
      <FormControl fullWidth size="small" variant="standard">
        <Select sx={{ fontSize: 18, textAlign: 'center' }} value={lang} onChange={handleChangeLang}>
          <MenuItem value="en" sx={{ fontSize: 16 }}>
            en
          </MenuItem>
          <MenuItem value="ru" sx={{ fontSize: 16 }}>
            ru
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default LangSelect;
