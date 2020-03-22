import React from "react";
import AddButton from "../Buttons/AddButton";
import DirectorDialog from "../Dialogs/DirectorDialog";
import DirectorsTable from "./DirectorsTable";
import DeleteDialog from "../Dialogs/DeleteDialog";
import Search from "../Search/Search";

const Directors = ({
                       createUpdateDirector,
                       dialogIsOpen,
                       selectedDirector,
                       directors,
                       openCreateUpdateDialog,
                       openDeleteDialog,
                       deleteDialogIsOpen,
                       deleteDirector,
                       searchAction
                   }) => {
    return (
        <>
            <Search
                searchAction={searchAction}
                liveSearch={true}
                placeholder='Search Director'
                ariaLabel='Search Director'
            />
            <DirectorDialog
                createUpdateDirector={createUpdateDirector}
                isOpen={dialogIsOpen}
                director={selectedDirector}
                openCreateUpdateDialog={openCreateUpdateDialog}
            />
            <DeleteDialog
                isOpen={deleteDialogIsOpen}
                setIsOpen={openDeleteDialog}
                deleteAction={deleteDirector}
                itemToDelete={selectedDirector}
            />
            <DirectorsTable
                directors={directors}
                openCreateUpdateDialog={openCreateUpdateDialog}
                openDeleteDialog={openDeleteDialog}
            />
            <AddButton onClick={() => openCreateUpdateDialog(true)}/>
        </>
    )
};

export default Directors