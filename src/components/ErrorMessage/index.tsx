import { Close } from '@mui/icons-material';
import {
  Alert, Avatar, Collapse, IconButton,
} from '@mui/material';
import { FC, useState } from 'react';
import rickIcon from 'images/rickError.png';
import { styles } from './styles';

export const ErrorMesage: FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <Collapse in={open}>
      <Alert
        icon={<Avatar sx={styles.icon} src={rickIcon} variant="square" />}
        severity="error"
        sx={styles.container}
        action={(
          <IconButton
            aria-label="close"
            color="inherit"
            size="medium"
            onClick={() => {
              setOpen(false);
            }}
          >
            <Close fontSize="inherit" />
          </IconButton>
  )}
      >
        Error: Could not complete the operation
      </Alert>
    </Collapse>
  );
};
