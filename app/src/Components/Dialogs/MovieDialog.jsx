import React, {useState, useEffect} from 'react';
import {
    Button,
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    TextField,
    Checkbox,
    MenuItem,
    FormControl,
    FormControlLabel
} from '@material-ui/core';
import useStyles from "./styles";
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const MovieDialog = ({createUpdateMovie, isOpen, movie, directors, openCreateUpdateDialog}) => {
    const classes = useStyles();
    const [actionType, setActionType] = useState('add');
    const [formData, setFormData] = useState({
        id: null,
        name: '',
        genre: '',
        rate: 0,
        director: '',
        watched: false
    });

    useEffect(() => {
        if (movie) {
            setActionType('edit');
            const {id, name, genre, rate, watched, director} = movie;
            setFormData({
                id,
                name,
                genre,
                rate,
                director: director ? director.name : '',
                watched
            })
        } else {
            setActionType('add');
            ClearFormValues();
        }
    }, [movie]);

    const handleChange = name => ({target}) => {
        const {type, value} = target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? target.checked : value
        })
    };

    const handleClose = () => {
        openCreateUpdateDialog(false);
        ClearFormValues();
    };

    const createUpdateMovieSubmit = () => {
        const { id, name, genre, rate, director, watched} = formData;
        const directorId = director ? directors.find(item => item.name === director).id : null;
        createUpdateMovie({
            id,
            name,
            genre,
            rate: Number(rate),
            directorId,
            watched
        }, actionType);
        handleClose();
    };

    const ClearFormValues = () => {
        setFormData({
            id: null,
            name: '',
            genre: '',
            rate: '',
            director: '',
            watched: false
        })
    };

    let {name, genre, rate, director, watched} = formData;

    return (
        <Dialog
            maxWidth="sm"
            fullWidth={true}
            open={isOpen}
            onClose={handleClose}
            className={classes.paper}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title" className={classes.title}>
                {
                    actionType === 'add'
                        ? 'Create New Movie'
                        : 'Update Movie'
                }
            </DialogTitle>
            <DialogContent className={classes.content}>
                <FormControl className={classes.formControl}>
                    <TextField
                        autoFocus
                        id="movieName"
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
                        id="movieGenre"
                        label="Genre"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={genre}
                        required={true}
                        onChange={handleChange('genre')}
                    />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <TextField
                        id="movieRate"
                        label="Rate"
                        type="number"
                        fullWidth
                        variant="outlined"
                        value={rate}
                        inputProps={{
                            'min': "1",
                            'max': "10"
                        }}
                        onChange={handleChange('rate')}
                    />
                </FormControl>

                <FormControl className={classes.formControl}>
                    <TextField
                        id="movieDirector"
                        select
                        fullWidth
                        label="Director"
                        value={director}
                        variant="outlined"
                        onChange={handleChange('director')}
                    >
                        {directors.map(director => (
                            <MenuItem key={director.id} value={director.name}>
                                {director.name}
                            </MenuItem>
                        ))}
                    </TextField>
                </FormControl>
                <FormControlLabel className={classes.formControl}
                                  control={<Checkbox checked={watched} onChange={handleChange('watched')} value="watched"/>}
                                  label="Watched movie"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    <CancelIcon fontSize="small"/>Cancel
                </Button>
                <Button onClick={createUpdateMovieSubmit} color="primary">
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

export default MovieDialog;


