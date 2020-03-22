import React from "react";
import {
    TableContainer,
    Table,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import TableContextMenu from "../Movies/TableContextMenu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    tableCell: {
        padding: 5
    },

    textCenter: {
        textAlign: 'center'
    }
});

const DirectorsTable = ({directors, openCreateUpdateDialog, openDeleteDialog}) => {
    const classes = useStyles();

    const onEdit = (director) => {
        openCreateUpdateDialog(true, director);
    };

    const onDelete = (director) => {
        openDeleteDialog(true, director);
    };
    return (
        <TableContainer component={'div'}>
            <Table className={classes.table} aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="center">Age</TableCell>
                        <TableCell align="center">Movies</TableCell>
                        <TableCell align="right"> </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {directors.map(({id, name, age, movies}) => (
                        <TableRow key={id}>
                            <TableCell  className={classes.tableCell} component="th" scope="row">
                                {name}
                            </TableCell>
                            <TableCell  className={classes.tableCell} align="center">{age}</TableCell>
                            <TableCell  className={classes.tableCell} align="left">
                                <List>
                                    {movies.map((movie, index) =>
                                        <ListItem key={movie.id} className={classes.textCenter}>
                                            <ListItemText
                                                primary={index + 1 + '. ' + movie.name}
                                            />
                                        </ListItem>,
                                    )}
                                </List>
                            </TableCell>
                            <TableCell  className={classes.tableCell} align="right">
                                <TableContextMenu
                                    data={{id, name, age}}
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

export default DirectorsTable