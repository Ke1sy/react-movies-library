import React, {useState} from "react";
import MyTabs from "./Tabs";
import MovieIcon from '@material-ui/icons/Movie';
import VideocamIcon from '@material-ui/icons/Videocam';

const tabsList = [
    {
        id: 1,
        title: 'Movies',
        icon: <MovieIcon/>
    }, {
        id: 2,
        title: 'Directors',
        icon: <VideocamIcon/>
    }
];

const TabsContainer = () => {
    const [selectedTab, setSelectedTab] = useState(null);

    const onChangeTab = id => {
        setSelectedTab(id);
    };

    return (
        <MyTabs
            tabsList={tabsList}
            selectedTab={selectedTab}
            onChangeTab={onChangeTab}
        />
    )
};

export default TabsContainer;