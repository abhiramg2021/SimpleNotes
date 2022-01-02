import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
    const characterLimit = 200;

    const [noteText, setNoteText] = useState('');
    // contain the note text, and function used to update it

    // this function takes the user input and updates the state prop noteText
    const handleChange = (event) => {

        // contains the text that is inputed into the textbox

        if (characterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value);
        }

    }


    // this function adds a new note to notes list when save button is pressed
    const handleSaveClick = () => {
        console.log(noteText)

        // if noteText is not a set of empty strings, then add a new note to the stack.
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText('');
        }
    }
    return (
        <div className='note new'>
            <textarea
                rows="8"
                cols='10'
                placeholder="Type to add note..."
                value={noteText}
                onChange={handleChange}>
            </textarea>
            <div className='note-footer'>
                <small>{characterLimit - noteText.length} Remaining</small>
                <button className='save' onClick={handleSaveClick}> Save</button>
            </div>

        </div>
    )
}

export default AddNote;
