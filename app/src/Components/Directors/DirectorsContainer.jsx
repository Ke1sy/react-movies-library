import React, {useState} from "react";
import Directors from "./Directors";
import {compose} from "recompose";
import {graphql} from "react-apollo";
import {directorsQuery} from "../../queries/directors";
import {addDirectorMutation, deleteDirectorMutation, updateDirectorMutation} from "../../mutations/directors";

const DirectorsContainer = ({data, addDirector, deleteDirector, updateDirector}) => {
    const {directors = []} = data;
    const [dialogIsOpen, setDialogIsOpen] = useState(false);
    const [deleteDialogIsOpen, setDeleteDialogIsOpen] = useState(false);
    const [selectedDirector, setSelectedDirector] = useState(null);

    const openCreateUpdateDialog = (value, director) => {
        setSelectedDirector(director ? director : null);
        setDialogIsOpen(value);
    };

    const openDeleteDialog = (value, director) => {
        setSelectedDirector(director);
        setDeleteDialogIsOpen(value);
    };

    const createUpdateDirectorAction = (formData, type) => {
        switch (type) {
            case 'add':
                addDirector(formData);
                break;
            case 'edit':
                updateDirector(formData);
                break;
            default:
                return false
        }
    };

    const deleteDirectorAction = (id) => {
        deleteDirector({id});
        setDeleteDialogIsOpen(false);
        setSelectedDirector(null)
    };

    const searchDirectorAction = (searchValue) => {
        data.fetchMore({
            variables: {name: searchValue},
            updateQuery: (previousResult, {fetchMoreResult})  => fetchMoreResult
        });
    };

    return (
        <Directors
            directors={directors}
            createUpdateDirector={createUpdateDirectorAction}
            dialogIsOpen={dialogIsOpen}
            deleteDialogIsOpen={deleteDialogIsOpen}
            selectedDirector={selectedDirector}
            openCreateUpdateDialog={openCreateUpdateDialog}
            openDeleteDialog={openDeleteDialog}
            deleteDirector={deleteDirectorAction}
            searchAction={searchDirectorAction}
        />
    )
};

const withGraphQLQuery = graphql(directorsQuery, {
    options: ({name = ''}) => ({
        variables: {name}
    })
});

const withGraphQLMutations = compose(
    graphql(addDirectorMutation, {
        props: ({mutate}) => ({
            addDirector: director => mutate({
                variables: director,
                refetchQueries: [{
                    query: directorsQuery,
                    variables: {name: ''}
                }]
            })
        })
    }),
    graphql(updateDirectorMutation, {
        props: ({mutate}) => ({
            updateDirector: director => mutate({
                variables: director,
                refetchQueries: [{
                    query: directorsQuery,
                    variables: {name: ''}
                }]
            })
        })
    }),
    graphql(deleteDirectorMutation, {
        props: ({mutate}) => ({
            deleteDirector: id => mutate({
                variables: id,
                refetchQueries: [{
                    query: directorsQuery,
                    variables: {name: ''}
                }]
            })
        })
    })
);


export default compose(
    withGraphQLQuery,
    withGraphQLMutations
)(DirectorsContainer);
