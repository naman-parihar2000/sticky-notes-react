import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({
    notes,
    handleAddNote,
    handleDeleteNote,
    darkMode,
    setDarkMode
}) => {
    return (
        <div className='notes-list'>
            {notes.map((note) => (
                <Note
                    id={note.id}
                    text={note.text}
                    date={note.date}
                    handleDeleteNote={handleDeleteNote}
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                />
            ))}
            <AddNote handleAddNote={handleAddNote} />
        </div>
    );
};

export default NotesList;