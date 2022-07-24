import {
  Typography, Box, Avatar, Paper, Chip,
} from '@mui/material';
import { ONE } from 'constants/numbers';
import { EMPTY, UNKNOW } from 'constants/strings';
import { useChatacterQuery } from 'generated/graphql';
import { FC, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { dateFormat } from 'utils/dateFormat';
import { generateRGBA } from 'utils/randomColor';
import { SkeletonCharacter } from './SkeletonCharacter';
import { styles } from './styles';

const styleChip = () => [styles.chip, { background: generateRGBA(0.5) }];

const Character: FC = () => {
  const { id } = useParams();
  const { data, loading } = useChatacterQuery({ variables: { id: id || `${ONE}` } });
  const episodes = useMemo(() => (
    data && data.character?.episode && data.character.episode.map((episode) => (
      <Chip sx={styleChip()} key={episode?.id} label={episode?.name} />
    ))
  ), [data]);
  return (
    !loading
      ? (
        <>
          <Typography sx={styles.title}>{data?.character?.name}</Typography>
          <Box sx={styles.container}>
            <Avatar src={data?.character?.image ?? EMPTY} sx={styles.image} variant="square" />
            <Box sx={styles.infoContainer}>
              <Paper sx={styles.infoPaper}>
                <Typography sx={styles.infoText}>{`Species: ${data?.character?.species || UNKNOW}`}</Typography>
              </Paper>
              <Paper sx={styles.infoPaper}>
                <Typography sx={styles.infoText}>{`Origin: ${data?.character?.origin?.name || UNKNOW}`}</Typography>
              </Paper>
              <Paper sx={styles.infoPaper}>
                <Typography sx={styles.infoText}>{`Type: ${data?.character?.type || UNKNOW}`}</Typography>
              </Paper>
              <Paper sx={styles.infoPaper}>
                <Typography sx={styles.infoText}>{`Gender: ${data?.character?.gender || UNKNOW}`}</Typography>
              </Paper>
              <Paper sx={styles.infoPaper}>
                <Typography sx={styles.infoText}>{`Created: ${dateFormat(data?.character?.created || EMPTY)}`}</Typography>
              </Paper>
              <Box sx={styles.chipContainer}>
                {episodes}
              </Box>
            </Box>
          </Box>
        </>
      ) : <SkeletonCharacter />
  );
};

export default Character;
