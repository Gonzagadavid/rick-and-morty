import { Avatar } from '@mui/material';
import { FC } from 'react';

import rickIcon from 'images/rick_88915.svg';
import mortyIcon from 'images/morty_88916.svg';
import { styles } from '../../styles';

export const Icon: FC<{isOdd: boolean}> = ({ isOdd }) => (
  <Avatar sx={styles.icon} src={isOdd ? rickIcon : mortyIcon} />
);
