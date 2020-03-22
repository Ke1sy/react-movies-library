import React from 'react';
import {AppBar, IconButton, Typography, Toolbar} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    title: {
        flexGrow: 1,
    },
});

export default props => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Header
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

