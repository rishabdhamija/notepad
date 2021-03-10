import React, { useState } from "react";
// import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import notes from '../modal/db';


import Note from './Note';
const Notes = (props) => {

 const [notesState, setNotesState] = useState(notes);

    const addNoteHandler = (note) => {
        console.log("it reached here!!");
      console.log(note); 
      setNotesState(prevState => {
          return [...prevState , note]
      }) 
    }

    const updateNoteHandler = (note) => {
        //console.log("It reached here");
        console.log(note);
        const {title, author, contents} = note;

        // const index = notesState.findIndex(item => item.title === title && item.author === author );
        // console.log(index);

        setNotesState(prevState => {
            const currentNotes = [...prevState];
            const index = currentNotes.findIndex(item => item.title === title && item.author === author );
            console.log("the found index is " , index);
            currentNotes[index].contents = contents;
            return currentNotes;
        })
    }

    const deleteNoteHandler = note => {
        const {title, author} = note;
        console.log("delete Note handler was called!!");
        setNotesState(prevState => {
            const currentNotes = [...prevState];
            const index = currentNotes.findIndex(item => item.title === title && item.author === author );
            currentNotes.splice(index,1 );
            return currentNotes;
        })
    }

    return (
        <div className="container">
            {notesState.map((note, i) => {
                return (
                    <Note key={i} index={i} title={note.title} author={note.author} contents={note.contents}
                        updateNote={updateNoteHandler} deleteNote={deleteNoteHandler}
                    />
                )
            })}
            <Note class="newNoteIcon" title="New Note" addNote={addNoteHandler} />

        </div>
    )
}

export default Notes;