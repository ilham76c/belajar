import React from "react";

function NoteItem({
  id,
  title,
  body,
  createdAt,
  archived,
  deleteNote,
  arsipNote,
}) {
  return (
    <div
      key={id}
      className="flex flex-col justify-between gap-2 rounded-lg bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100"
    >
      <div className="p-3">
        <h1 className="font-bold text-lg">{title}</h1>
        <span className="text-sm text-yellow-200 my-1">
          {new Date(createdAt).toLocaleString()}
        </span>
        <p className="mt-2">{body}</p>
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
          {archived ? "Pindahkan" : "Arsipkan"}
        </button>
      </div>
    </div>
  );
}

export default NoteItem;
