import Note from './Note'
import AddNote from './AddNote'


const NotesList = ({notes, handleAddNote, handleDeleteNote}) => {
    // destructured the props received from App.js
    return (
        <div className = 'notes-list'>
            {notes.map((note) => (
                <Note id = {note.id} text = {note.text} date = {note.date} handleDeleteNote = {handleDeleteNote}/>
            ))}
            {/* use of map function to create a set of note objects */}
            <AddNote handleAddNote = {handleAddNote}/>
            {/* create the addnote object in the list. but also pass the handleAddNote function down to addnote.js */}
        </div>
    )
} 

export default NotesList
