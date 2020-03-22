import React from "react";
import {
    TableContainer,
    Table,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
    Checkbox,
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import TableContextMenu from "./TableContextMenu";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    tableCell: {
        padding: 5
    }
});

const MoviesTable = ({movies, openCreateUpdateDialog, openDeleteDialog}) => {
    const classes = useStyles();

    const onEdit = (movie) => {
        openCreateUpdateDialog(true, movie);
    };

    const onDelete = (movie) => {
        openDeleteDialog(true, movie);
    };

    return (
        <TableContainer component={'div'}>
            <Table className={classes.table} aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="center">Genre</TableCell>
                        <TableCell align="center">Rate</TableCell>
                        <TableCell align="center">Director</TableCell>
                        <TableCell align="center">Watched</TableCell>
                        <TableCell align="right"> </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {movies.map(({id, name, genre, rate, director, watched}) => (
                        <TableRow key={id}>
                            <TableCell className={classes.tableCell} component="th" scope="row">
                                {name}
                            </TableCell>
                            <TableCell className={classes.tableCell} align="center">{genre}</TableCell>
                            <TableCell className={classes.tableCell} align="center">{rate}</TableCell>
                            <TableCell className={classes.tableCell} align="center">{director ? director.name : null}</TableCell>
                            <TableCell className={classes.tableCell} align="center">
                                <Checkbox
                                    checked={watched}
                                    disabled
                                    color="primary"
                                    inputProps={{'aria-label': 'primary checkbox'}}
                                />
                            </TableCell>
                            <TableCell className={classes.tableCell} align="right">
                                <TableContextMenu
                                    data={{id, name, genre, rate, director, watched}}
                                    onEdit={onEdit}
                                    onDelete={onDelete}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
};

export default MoviesTable