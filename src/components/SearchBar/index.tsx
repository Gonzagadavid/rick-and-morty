import { Search } from '@mui/icons-material';
import { Box, Button, TextField } from '@mui/material';
import { EMPTY } from 'constants/strings';
import {
  useState, useCallback, ChangeEvent, FC, KeyboardEvent,
} from 'react';
import { styles } from './styles';

interface SearchBarProps {
  handleFilter: (name: string) => void
}

export const SearchBar:FC<SearchBarProps> = ({ handleFilter }) => {
  const [text, setText] = useState(EMPTY);

  const onChangeText = useCallback(({ target: { value } }:ChangeEvent<HTMLInputElement>) => {
    setText(value);
  }, [setText]);

  const onSearch = useCallback(() => {
    handleFilter(text);
  }, [handleFilter, text]);

  const onKey = useCallback(({ code }: KeyboardEvent<HTMLInputElement>) => {
    if (code === 'Enter') onSearch();
  }, [onSearch, text]);

  return (
    <Box sx={styles.container}>
      <TextField sx={styles.input} value={text} onChange={onChangeText} onKeyDown={onKey} />
      <Button sx={styles.button} onClick={onSearch}>
        <Search />
      </Button>
    </Box>
  );
};
