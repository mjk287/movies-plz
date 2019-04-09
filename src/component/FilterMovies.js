import React from 'react'

const FilterMovies = (props) => {
    return(
      <form>
        <select name='sortBy' onChange={props.handleFilter}>
          <option value='all'>Most Recent</option>
          <option value='alphabetical'>Alphabetical</option>
        </select>

        <input name='filterBy' value={props.searchBy} onChange={props.handleFilter}/>
      </form>
    )
}

export default FilterMovies
