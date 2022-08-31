import React from "react";

function NoteItem({ id, title, note, date, arsip, deleteNote, arsipNote }) {
  return (
    <div key={id} className="flex flex-col justify-between gap-2 rounded-lg bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
      <div className="p-3">
        <h1 className="font-bold text-lg">{title}</h1>
        <span className="text-sm my-1">{date}</span>
        <p className="mt-2">
          {note}
        </p>
      </div>
      <div className="flex">
        <button
          className="flex-1 rounded-bl border border-gray-100 py-1 cursor-pointer text-red-500"
          onClick={() => deleteNote(id)}
        >
          Delete
        </button>
        <button
          className="flex-1 rounded-br border border-gray-100 py-1 cursor-pointer text-yellow-500"
          onClick={() => arsipNote(id)}
        >
            { arsip ? 'Pindahkan' : 'Arsipkan' }
        </button>
      </div>
    </div>
  );
}

export default NoteItem;
