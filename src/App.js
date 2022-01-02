import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([]);
  

  const [searchText, setSearchText] = useState("");
  
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data")) //parses data into js object

    if (savedNotes){
      setNotes(savedNotes)
    }
    
  }, []); //only run on the first load when empty array

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]); // run when there is change in notes array


  const addNote = (text) => {
    const date = new Date();
    // getting the date using js functions
    const newNote = {
      id: nanoid(), // calling a function that generates a unique id.
      text: text,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];
    // Never append to an existing list, just create a new list every time
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode ? "dark-mode" : 'light-mode'}`}>
      {/* if dark mode is true then append dark-mode to the template string */}
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText.toLowerCase())
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
        {/* we do the filter function for search here because we do not want to change the original list */}
        {/* Notes list is passing down 2 props. notes that contains an array of note items & a function called handleAddNote to add new notes */}
      </div>
    </div>
  );
};

export default App;
