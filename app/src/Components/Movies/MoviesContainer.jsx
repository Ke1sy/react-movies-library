import React, {useState} from "react";
import Movies from "./Movies";
import {compose} from 'recompose';
import {graphql} from 'react-apollo';
import {moviesPageQuery} from '../../queries/movies';
import {addMovieMutation, deleteMovieMutation, updateMovieMutation} from '../../mutations/movies';


const MoviesContainer = ({data, addMovie, deleteMovie, updateMovie}) => {
    const {movies = [], directors = []} = data;
    const [dialogIsOpen, setDialogIsOpen] = useState(false);
    const [deleteDialogIsOpen, setDeleteDialogIsOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const openCreateUpdateDialog = (value, movie) => {
        setSelectedMovie(movie ? movie : null);
        setDialogIsOpen(value);
    };

    const openDeleteDialog = (value, movie) => {
        setSelectedMovie(movie ? movie : null);
        setDeleteDialogIsOpen(value);
    };

    const createUpdateMovieAction = (formData, type) => {
        switch (type) {
            case 'add':
                addMovie(formData);
                break;
            case 'edit':
                updateMovie(formData);
                break;
            default:
                return false
        }
    };

    const searchMovieAction = (searchValue) => {
        data.fetchMore({
            variables: {name: searchValue},
            updateQuery: (previousResult, {fetchMoreResult})  => fetchMoreResult
        })
    };

    const deleteMovieAction = (id) => {
        deleteMovie({id});
        setDeleteDialogIsOpen(false);
        setSelectedMovie(null);
    };

    return (
        <Movies
            movies={movies}
            directors={directors}
            createUpdateMovie={createUpdateMovieAction}
            dialogIsOpen={dialogIsOpen}
            selectedMovie={selectedMovie}
            openCreateUpdateDialog={openCreateUpdateDialog}
            deleteDialogIsOpen={deleteDialogIsOpen}
            openDeleteDialog={openDeleteDialog}
            deleteMovie={deleteMovieAction}
            searchAction={searchMovieAction}
        />
    )
};

const withGraphQLQuery = graphql(moviesPageQuery, {
    options: ({name = '', directorsName=''}) => ({
        variables: {name, directorsName}
    })
});

const withGraphQLMutations = compose(
    graphql(addMovieMutation, {
        props: ({mutate}) => ({
            addMovie: movie => mutate({
                variables: movie,
                refetchQueries: [{
                    query: moviesPageQuery,
                    variables: {name: '', directorsName: ''}
                }]
            })
        })
    }),
    graphql(updateMovieMutation, {
        props: ({mutate}) => ({
            updateMovie: movie => mutate({
                variables: movie,
                refetchQueries: [{
                    query: moviesPageQuery,
                    variables: {name: '', directorsName: ''}
                }]
            })
        })
    }),
    graphql(deleteMovieMutation, {
        props: ({mutate}) => ({
            deleteMovie: id => mutate({
                variables: id,
                refetchQueries: [{
                    query: moviesPageQuery,
                    variables: {name: '', directorsName: ''}
                }]
            })
        })
    }),

);

export default compose(
    withGraphQLQuery,
    withGraphQLMutations
)(MoviesContainer);