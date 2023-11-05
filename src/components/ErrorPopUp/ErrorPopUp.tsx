import React from 'react';
import './ErrorPopUp.scss';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import { ModalButton } from '../ModalButton';

type Props = {
  open: boolean,
  onUpdatePage: (date: Date) => void,
};

export const ErrorPopUp: React.FC<Props> = ({ open, onUpdatePage }) => {
  return (
    <div className="ErrorPopUp">
      <Modal
        sx={{
          backdropFilter: 'blur(5px)',
        }}
        open={open}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box
            className="ErrorPopUp__box"
          >
            <p
              className="ErrorPopUp__header"
            >
              Something went wrong
            </p>

            <ModalButton
              title="Reload"
              onClick={() => onUpdatePage(new Date())}
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
