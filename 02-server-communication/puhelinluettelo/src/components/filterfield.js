import React from 'react';

function FilterField({filter, updateFilter}) {
  return (
    <div>
      <form>
        <span>search:</span>
        <input type="" value={filter} onChange={updateFilter} />
      </form>
    </div>
  )
}

export default FilterField;
