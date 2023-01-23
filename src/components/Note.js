import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote, darkMode }) => {
    return (
        <div className='note' style={{ backgroundColor: ` ${darkMode ? '#2C74B3' : '#FFF6BD'} ` }}>
            <span style={{ color: ` ${darkMode ? 'whitesmoke' : 'rgba(0, 0, 0, 0.807)'} ` }}>{text}</span>
            <div className='note-footer' >
                <small style={{ color: ` ${darkMode ? 'whitesmoke' : 'rgba(0, 0, 0, 0.807)'} ` }}>{date}</small>
                <MdDeleteForever
                    onClick={() => handleDeleteNote(id)}
                    className='delete-icon'
                    size='1.3em'
                    style={{ color: ` ${darkMode ? 'whitesmoke' : 'rgba(0, 0, 0, 0.807)'} ` }}
                />
            </div>
        </div>
    );
};

export default Note;