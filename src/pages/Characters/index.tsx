import { useQuery } from '@apollo/client';
import { Box } from '@mui/material';
import { CardComponent } from 'components/Card';
import { Pagination } from 'components/Pagination';
import { CHARATERS } from 'graphql/getCharacters';
// import { useLoading } from 'hooks/useLoading';
import {
  ChangeEvent, FC, useMemo, useRef, useState,
} from 'react';
import { styles } from './styles';

interface CharacterType {
  name: string, image: string, id:number
}

export const Characters:FC = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const {
    data: dataResult, loading, error,
  } = useQuery(CHARATERS, { variables: { page: pageNumber } });
  const dataRef = useRef(dataResult);
  const data = useMemo(() => {
    if (!loading) {
      dataRef.current = dataResult;
    }
    return dataRef.current;
  }, [dataResult]);
  if (error) return <p>error</p>;

  const handlePage = (_event: ChangeEvent<unknown>, page: number) => {
    setPageNumber(page);
  };

  const cards = useMemo(() => (
    data ? data?.characters?.results.map(({ name, image, id }: CharacterType) => (
      <CardComponent name={name} image={image} key={id} />
    )) : null
  ), [data]);

  return (
    <Box sx={styles.container}>
      <Box sx={styles.cardContainer}>{cards}</Box>
      <Pagination
        count={data?.characters?.info?.pages}
        page={pageNumber}
        onChange={handlePage}
      />
    </Box>
  );
};

export default Characters;
