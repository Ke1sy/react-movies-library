import React, {useState} from "react";
import {IconButton, Menu, MenuItem, Typography} from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    menuItemText: {
        paddingLeft: 10
    },
});

const TableContextMenu = ({onEdit, onDelete, data}) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = ({ currentTarget }) => {
        setAnchorEl(currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                aria-label="more"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon/>
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => onEdit(data)}>
                    <EditIcon fontSize="small"/>
                    <Typography variant="body2" className={classes.menuItemText}>
                        Edit
                    </Typography>
                </MenuItem>
                <MenuItem onClick={() => onDelete(data)}>
                    <DeleteIcon fontSize="small"/>
                    <Typography variant="body2" className={classes.menuItemText}>
                        Delete
                    </Typography>
                </MenuItem>
            </Menu>
        </div>
    )
};

export default TableContextMenu;