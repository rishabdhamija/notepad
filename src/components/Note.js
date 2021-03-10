import React, { useState } from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import CreateIcon from '@material-ui/icons/Create';
import CancelIcon from '@material-ui/icons/Cancel';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import BorderColorRoundedIcon from '@material-ui/icons/BorderColorRounded';
const Note = (props) => {

    const [noteClickedStatus, setNoteClicked] = useState(false);

    function noteClicked() {
        console.log("the note was clicked!!");
        console.log("noteclickedStatus = ", noteClickedStatus);
        setNoteClicked(prevState => !prevState);
    }


    const detailedNoteHandler = (event) => {
        event.preventDefault();
        const contents = event.target.elements.content.value;
        const { title, author } = props;
        const obj = {
            title,
            author,
            contents
        }
        props.updateNote(obj);
        setNoteClicked(prevState => !prevState);
    }

    const newNoteHandler = event => {
        event.preventDefault();
        const { title, author, contents } = event.target.elements;
        const obj = {
            title: title.value,
            author: author.value,
            content: contents.value
        }
        props.addNote(obj);
        setNoteClicked(prevState => !prevState);
    }

    const deleteNoteHandler = () => {
        const { title, author } = props;
        const obj = {
            title,
            author
        }
        props.deleteNote(obj)
        setNoteClicked(prevState => !prevState);
    }

    const cancelHandler = () => {
        setNoteClicked(prevState => !prevState);
    }
    const customStyle = {
        //'z-index': "+1",
        width: "800px",
        height: "800px"
    }

    const cancelButtonStyle = {
        'border-radius': '50%',
        'fontSize': '43px'
    }

    const cancelButtonNewNoteStyle = {
        'border-radius': '50%',
        'fontSize': '43px',
        'margin-left': '95%'
    }
    return (
        <div className="note-container">
            { (!noteClickedStatus && props.title !== "New Note") &&
                <div className="note" onClick={noteClicked}
                    style={noteClickedStatus ? customStyle : null} >
                    <h1>{props.title}</h1>
                    <p>{props.author}</p>
                </div>}

            { (!noteClickedStatus && props.title === "New Note") &&
                <div className="note" onClick={noteClicked}
                    style={noteClickedStatus ? customStyle : null} >
                    <h1>{props.title}</h1>
                    <Fab size="large" color="primary" aria-label="add" >
                        <AddIcon/>
                    </Fab>
                </div>}

            {noteClickedStatus &&
                <div className="noteDetailed" >
                    <button><CancelIcon style={cancelButtonStyle} onClick={cancelHandler} /></button>
                    <h1>{props.title}</h1>
                    <p>Author(s): {props.author}</p>
                    <form onSubmit={detailedNoteHandler}>
                        <textarea type="text" name="content" rows="10" column="15" defaultValue={props.contents} >
                        </textarea>
                        <button>
                            <BorderColorRoundedIcon type="submit" style={{ fontSize: '53px', "margin-right": '0px' }} />
                        </button>
                    </form>
                    {/* <button onClick={deleteNoteHandler}> */}
                    <Fab onClick={deleteNoteHandler} size="large" color="secondary" aria-label="add" >
                        <DeleteForeverIcon />
                    </Fab>
                    {/* </button> */}

                </div>}

            {(noteClickedStatus && props.title === "New Note") &&
                <div className="newNote"  >
                    <CancelIcon style={cancelButtonNewNoteStyle} onClick={cancelHandler} />
                    <h1> New Note</h1>
                    <form onSubmit={newNoteHandler}>
                        <label for="title"><h2>Title: </h2></label>
                        <input type="text" name="title" />
                        <label for="author"><h2>Author(s):</h2></label>
                        <input type="text" name="author" />
                        <textarea type="text" name="contents" rows="10" column="15"
                            defaultValue={props.contents} >
                        </textarea>
                        {/* <button > */}
                        <Fab type="submit" size="medium" color="primary" aria-label="add" >
                            <CreateRoundedIcon />
                        </Fab>
                        {/* </button> */}
                    </form>
                    {/* <button onClick={cancelHandler}>Cancel</button> */}
                </div>
            }
        </div>


    )
}

export default Note;