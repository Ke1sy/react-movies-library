import React from 'react';
import {Header, Footer, Main} from './Components/Layouts'
import {ThemeProvider} from '@material-ui/styles';
import theme from './Components/theme'
import {Container} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import TabsContainer from "./Components/Tabs/TabsContainer";
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

const client = new ApolloClient({
    uri: '/graphql'
});

const useStyles = makeStyles(theme => ({
    wrapper: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.paper
    }
}));

const App = () => {
    const classes = useStyles();
    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <Container maxWidth="xl" disableGutters className={classes.wrapper}>
                    <Header/>
                    <Main>
                        <TabsContainer/>
                    </Main>
                    <Footer/>
                </Container>
            </ThemeProvider>
        </ApolloProvider>
    );
};

export default App;
