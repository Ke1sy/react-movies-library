import React, {useState} from "react";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from '@material-ui/icons/Search';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        margin: '15px 0',
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        color: theme.palette.primary.main
    },
    iconButton: {
        padding: 10,
        color: theme.palette.primary.main
    },
}));

const Search = ({searchAction, placeholder, ariaLabel, liveSearch}) => {
    const classes = useStyles();
    const [searchValue, setSearchValue] = useState('');
    const [typingTimeout, setTypingTimeout] = useState(null);

    const handleLiveChange = ({target: {value}})  => {
        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }
        setSearchValue(value);
        setTypingTimeout(setTimeout( () => {
            searchAction(value);
        }, 300));
    };

    const handleChange = ({target: {value}}) => {
        setSearchValue(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        searchAction(searchValue);
    };

    const onChangeAction = liveSearch ? handleLiveChange : handleChange;

    return (
        <>
            <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon/>
                </IconButton>
                <InputBase
                    onChange={onChangeAction}
                    className={classes.input}
                    placeholder={placeholder}
                    value={searchValue}
                    inputProps={{
                        'aria-label': ariaLabel,
                    }}
                />
            </Paper>
        </>
    )
};

export default Search;