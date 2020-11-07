import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div>
            <input 
                type='search' 
                placeholder='search robots'
                className='pa2 ba b--green bg-lightest-blue'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;