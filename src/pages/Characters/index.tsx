import { useQuery } from '@apollo/client';
import { Box } from '@mui/material';
import { CHARATERS } from 'graphql/getCharacters';
import { FC } from 'react';

export const Characters:FC = () => {
  const { data, loading, error } = useQuery(CHARATERS);
  if (loading) return <p>loading...</p>;
  if (error) return <p>error</p>;
  return (
    <Box>
      {JSON.stringify(data)}
    </Box>
  );
};
