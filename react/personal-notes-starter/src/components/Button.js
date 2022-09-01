import React from 'react';

function Button({ onClickEventHandler, value }) {
  return (
    <button
      className='rounded bg-sky-500 px-2 py-1'
      type='button'
      onClick={onClickEventHandler}
    >
      {value}
    </button>
  );
}

export default Button;
