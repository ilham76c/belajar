import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, deleteNote, arsipNote }) {
  return (
    <div className='grid grid-cols-4 gap-x-4 gap-y-5 items-stretch mt-3'>
      {notes.map((note, index) => (
        <div key={index} className='grid grid-rows-[minmax(250px,_1fr)]'>
          <NoteItem
            key={note.id}
            deleteNote={deleteNote}
            arsipNote={arsipNote}
            {...note}
          />
        </div>
      ))}
    </div>
  );
}

export default NoteList;
