import React, { useContext } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { useNavigate } from 'react-router-dom';
import './SuccessModal.scss';
import { ModalButton } from '../../ModalButton';
import { CartContext } from '../../../context/CartContext';

type Props = {
  open: boolean,
  setOpen: (open: boolean) => void,
};

export const SuccessModal: React.FC<Props> = ({ open, setOpen }) => {
  const { setCart } = useContext(CartContext);
  const handleOpen = () => setOpen(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      navigate('/');
      setCart([]);
    }, 500);
  };

  return (
    <div className="SuccessModal">
      <ModalButton
        onClick={handleOpen}
        title="Chekout"
      />

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box className="SuccessModal__box">
            <h1
              id="transition-modal-title"
              className="SuccessModal__title"
            >
              Success
            </h1>

            <p
              id="transition-modal-description"
              className="SuccessModal__content"
            >
              Thank you for your purchase
            </p>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
