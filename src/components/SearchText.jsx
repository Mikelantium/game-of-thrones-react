import React from 'react'

const SearchText = ({search}) => {
    const handleChange = (event) => {
        const {value} = event.target;
        search(value);
    }
  return (
    
    <div>
    <input type="text" name="filter" placeholder="" onChange={handleChange} />
    </div>
  )
}

export default SearchText


