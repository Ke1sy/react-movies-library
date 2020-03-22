import React from "react";
import {Paper, Tabs, Tab} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import TabPanel from "./TabPanel";
import MoviesContainer from "../Movies/MoviesContainer";
import DirectorsContainer from "../Directors/DirectorsContainer";

const useStyles = makeStyles(theme => ({
    paper: {
        backgroundColor: theme.palette.background.paper,
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2),
    },

    tab: {
        "&.Mui-selected": {
            color: theme.palette.text.secondary
        }
    },

}));

const MyTabs = ({tabsList, selectedTab, onChangeTab}) => {
    const classes = useStyles();

    const handleChange = (e, newValue) => {
        onChangeTab(tabsList[newValue - 1]);
    };

    const index = selectedTab ? tabsList.findIndex(tab => tab === selectedTab) + 1 : 0;

    return (
        <div>
            <Paper className={classes.paper}>
            <Tabs
                value={index}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
            >
                {tabsList.map(({title, id, icon}) =>
                    <Tab
                        label={title}
                        icon={icon}
                        key={id}
                        className={classes.tab}
                    />
                )}
            </Tabs>
            <TabPanel value={index} index={0}>
               <MoviesContainer/>
            </TabPanel>
            <TabPanel value={index} index={1}>
                <DirectorsContainer/>
            </TabPanel>
        </Paper>
        </div>
    )
};


export default MyTabs