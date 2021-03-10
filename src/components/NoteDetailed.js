import React from 'react';

import notes from '../modal/db';

const NoteDetailed = props => {

    const title = props.match.params.title;
    const resultNote = notes.find(note => note.title = title);
    //console.log(resultNote);    

    const feedDataHandler = (event) => {
        event.preventDefault();
        const noteContent = event.target.elements.content.value;
        notes.forEach(note => {
            if (note.title === title) {
                note.contents = noteContent;
            }
        });
        console.log(notes);
    }


    return (
        <div className="noteDetailed" >
            <h1>{resultNote.title}</h1>
            <p>Author: {resultNote.author}</p>
            <form onSubmit={feedDataHandler}>
                <textarea type="text" name="content" rows="20" column="30" defaultValue={resultNote.contents} >
                </textarea>
                <button>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default NoteDetailed;