import React, {useState, useEffect} from 'react';
import {
    Button,
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    TextField,
    FormControl,
} from '@material-ui/core';
import useStyles from "./styles";
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const DirectorDialog = ({createUpdateDirector, isOpen, director, openCreateUpdateDialog}) => {
    const classes = useStyles();
    const [actionType, setActionType] = useState('add');
    const [formData, setFormData] = useState({
        id: null,
        name: '',
        age: 0
    });

    useEffect(() => {
        if (director) {
            setActionType('edit');
            const {name, age, id} = director;
            setFormData({
                name, age, id
            })
        } else {
            setActionType('add');
            ClearFormValues();
        }
    }, [director]);

    const handleChange = name => ({target: {value}}) => {
        setFormData({
            ...formData,
            [name]: value
        })
    };

    const handleClose = () => {
        openCreateUpdateDialog(false);
        ClearFormValues();
    };

    const createUpdateDirectorSubmit = () => {
        createUpdateDirector({...formData, age: Number(age)}, actionType);
        handleClose();
    };

    const ClearFormValues = () => {
        setFormData({
            id: null,
            name: '',
            age: 0,
        })
    };

    let {name, age} = formData;
    return (
        <Dialog
            maxWidth="xs"
            fullWidth={true}
            open={isOpen}
            onClose={handleClose}
            className={classes.paper}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title" className={classes.title}>
                {
                    actionType === 'add'
                        ? 'Create New Director'
                        : 'Update Director'
                }
            </DialogTitle>
            <DialogContent className={classes.content}>
                <FormControl className={classes.formControl}>
                    <TextField
                        autoFocus
                        id="directorName"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={name}
                        required={true}
                        onChange={handleChange('name')}
                    />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <TextField
                        id="directorAge"
                        label="Age"
                        fullWidth
                        variant="outlined"
                        value={age}
                        type="number"
                        required={true}
                        onChange={handleChange('age')}
                    />
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    <CancelIcon fontSize="small"/>Cancel
                    Cancel
                </Button>
                <Button onClick={createUpdateDirectorSubmit} color="primary">
                    <CheckCircleIcon fontSize="small"/>
                    {
                        actionType === 'add'
                            ? 'Create'
                            : 'Update'
                    }
                </Button>
            </DialogActions>
        </Dialog>
    )
};

export default DirectorDialog;


