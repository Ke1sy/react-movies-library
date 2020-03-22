import React from "react";
import MoviesTable from "./MoviesTable";
import AddButton from "../Buttons/AddButton";
import MovieDialog from "../Dialogs/MovieDialog";
import DeleteDialog from "../Dialogs/DeleteDialog";
import Search from "../Search/Search";

const Movies = ({
                    movies,
                    directors,
                    createUpdateMovie,
                    dialogIsOpen,
                    selectedMovie,
                    openCreateUpdateDialog,
                    deleteDialogIsOpen,
                    openDeleteDialog,
                    deleteMovie,
                    searchAction
                }) => {
    return (
        <>
            <Search
                searchAction={searchAction}
                liveSearch={true}
                placeholder='Search Movie'
                ariaLabel='Search Movie'
            />
            <MovieDialog
                createUpdateMovie={createUpdateMovie}
                isOpen={dialogIsOpen}
                movie={selectedMovie}
                directors={directors}
                openCreateUpdateDialog={openCreateUpdateDialog}
            />
            <DeleteDialog
                isOpen={deleteDialogIsOpen}
                setIsOpen={openDeleteDialog}
                deleteAction={deleteMovie}
                itemToDelete={selectedMovie}
            />
            <MoviesTable
                movies={movies}
                openCreateUpdateDialog={openCreateUpdateDialog}
                openDeleteDialog={openDeleteDialog}
            />
            <AddButton onClick={() => openCreateUpdateDialog(true)}/>
        </>
    )
};

export default Movies