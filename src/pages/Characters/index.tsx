import { useQuery } from '@apollo/client';
import { Box } from '@mui/material';
import { CardComponent } from 'components/Card';
import { CHARATERS } from 'graphql/getCharacters';
import { FC } from 'react';

interface CharacterType {
  name: string, image: string, id:number
}

export const Characters:FC = () => {
  const { data, loading, error } = useQuery(CHARATERS);
  if (loading) return <p>loading...</p>;
  if (error) return <p>error</p>;

  const { characters: { results } } = data;
  return (
    <Box>
      {results.map(({ name, image, id }: CharacterType) => (
        <CardComponent name={name} image={image} key={id} />
      ))}
    </Box>
  );
};
