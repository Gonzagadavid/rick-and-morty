import { useQuery } from '@apollo/client';
import { Box } from '@mui/material';
import { CardComponent } from 'components/Card';
import { Pagination } from 'components/Pagination';
import { CHARATERS } from 'graphql/getCharacters';
import {
  ChangeEvent, FC, useState,
} from 'react';
import { styles } from './styles';

interface CharacterType {
  name: string, image: string, id:number
}

export const Characters:FC = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, loading, error } = useQuery(CHARATERS, { variables: { page: pageNumber } });
  if (loading) return <p>loading...</p>;
  if (error) return <p>error</p>;

  const handlePage = (_event: ChangeEvent<unknown>, page: number) => {
    setPageNumber(page);
  };
  const { characters: { results, info: { pages } } } = data;
  return (
    <Box sx={styles.container}>
      {results.map(({ name, image, id }: CharacterType) => (
        <CardComponent name={name} image={image} key={id} />
      ))}
      <Pagination
        count={pages}
        page={pageNumber}
        onChange={handlePage}
      />
    </Box>
  );
};
