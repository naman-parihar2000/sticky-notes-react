import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
    return (
        <div className='header'>
            <h1>Your Notes!</h1>
            <button
                onClick={() =>
                    handleToggleDarkMode(
                        (previousDarkMode) => !previousDarkMode
                    )
                }
                className='save'
            >
                Change Mode
            </button>
        </div >
    );
};

export default Header;