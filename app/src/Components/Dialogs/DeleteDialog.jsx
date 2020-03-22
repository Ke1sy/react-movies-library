import React from 'react';
import {
    Button,
    DialogTitle,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CancelIcon from '@material-ui/icons/Cancel';


const DeleteDialog = ({isOpen, setIsOpen, deleteAction, itemToDelete}) => {
    const handleClose = () => {
        setIsOpen(false);
    };

    const deleteActionSubmit= () => {
        deleteAction(itemToDelete.id);
    };

    return (
        <div>
            <Dialog
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Are you sure you want to delete element?</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        If you  click 'CONFIRM' the element will be removed from database.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        <CancelIcon fontSize="small"/>
                        Cancel
                    </Button>
                    <Button onClick={deleteActionSubmit} color="primary" autoFocus>
                        <DeleteIcon fontSize="small"/>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default DeleteDialog;