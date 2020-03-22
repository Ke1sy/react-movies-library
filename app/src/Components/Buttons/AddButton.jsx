import React from 'react';
import {Fab} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    addIcon: {
        marginRight: theme.spacing(1),
        position: 'fixed',
        bottom: theme.spacing(3),
        right: theme.spacing(2),
    },
}));

const AddButton = ({onClick}) => {
    const classes = useStyles();
    return (
        <Fab color="primary" aria-label="add" className={classes.addIcon} onClick={onClick}>
            <AddIcon/>
        </Fab>
    )
};

export default AddButton;


