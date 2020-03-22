import React from "react";
import {Paper} from "@material-ui/core";
import Box from "@material-ui/core/Box";

const TabPanel = ({ children, value, index, ...other }) => {
    return (
        <Paper
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={1}>{children}</Box>}
        </Paper>
    );
};

export default TabPanel