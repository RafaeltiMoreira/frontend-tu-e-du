import PropTypes from 'prop-types';
import { Fragment, useState } from 'react';
import { Button, Dialog, Grid, } from '@mui/material'
import MuiDialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';

const LocationMap = ({ maxWidth, button, buttonClass = '', onClose }) => {
  const [open, setOpen] = useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
    if (onClose) {
      onClose();
    }
  }


  const DialogTitle = ((props) => {
    const { onClose } = props;
    return (
      <MuiDialogTitle>
        {onClose ? (
          <IconButton className='event-close-btn' aria-label="close" onClick={onClose}>
            <i className="ti-close"></i>
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });


  return (
    <Fragment>
      <Button
        className={`btn ${buttonClass}`}
        onClick={handleClickOpen}>
        {button}
        <ion-icon name="location-outline" class="icon"></ion-icon>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        className="modalWrapper quickview-dialog"
        maxWidth={maxWidth}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}> </DialogTitle>
        <Grid className="modalBody modal-body">
          <Grid className="modalBody modal-body">
            {/*<iframe title='iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671"></iframe>*/}
            <iframe title='iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.8272804953863!2d-47.809587623980754!3d-15.760273722117608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3de8c5188411%3A0xe66b48a42cd694c8!2sEspa%C3%A7o%20Panorama%20Bras%C3%ADlia!5e0!3m2!1spt-BR!2sbr!4v1718676238158!5m2!1spt-BR!2sbr" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </Grid>
        </Grid>
      </Dialog>
    </Fragment>
  );
}

// Definindo os tipos das propriedades esperadas
LocationMap.propTypes = {
  maxWidth: PropTypes.string.isRequired, 
  button: PropTypes.node.isRequired,    
  buttonClass: PropTypes.string,
  onClose: PropTypes.func.isRequired        
};

export default LocationMap