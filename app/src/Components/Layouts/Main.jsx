import React from 'react';
import {Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        backgroundColor: '#212121',
    }
});

const Main = (props) => {
    const classes = useStyles();
    return (
        <Container maxWidth={false} className={classes.root}>
            {props.children}
        </Container>
    )
};

export default Main

