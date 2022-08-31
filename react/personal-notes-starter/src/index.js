import React from "react";
import { createRoot } from "react-dom/client";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import SearchBar from "./components/SearchBar";
import Button from "./components/Button";

// import style
import "./styles/index.css";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi nilai count di dalam state
    this.state = {
      showModal: false,
      notes: [],
      search: "",
      filter: "nofilter",
    };

    // binding event handler
    this.toggleModalForm = this.toggleModalForm.bind(this);
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.arsipNote = this.arsipNote.bind(this);
    this.searchEventHandler = this.searchEventHandler.bind(this);
    this.getListNotes = this.getListNotes.bind(this);
    this.filterEventHandler = this.filterEventHandler.bind(this);
  }

  toggleModalForm() {
    this.setState((previousState) => {
      return {
        showModal: !previousState.showModal,
      };
    });
  }

  addNote(note) {
    const notes = this.state.notes;
    notes.push(note);
    this.setState({ notes });
  }

  deleteNote(id) {
    const notes = this.state.notes.filter((obj) => obj.id !== id);
    this.setState({ notes });
  }

  arsipNote(id) {
    const notes = this.state.notes.map((obj) => {
      if (obj.id === id) {
        obj.arsip = !obj.arsip;
      }

      return obj;
    });
    this.setState({ notes });
  }

  searchEventHandler(e) {
    this.setState({
      search: e.target.value,
    });
  }

  filterEventHandler(e) {
    this.setState({
      filter: e.target.value,
    });
  }

  searchText(obj, text) {
    return `${obj.title} ${obj.note}`.toLocaleLowerCase().includes(text);
  }

  getListNotes() {
    return this.state.notes.filter(
      (obj) =>
        obj.arsip === false &&
        this.searchText(obj, this.state.search) &&
        ["nofilter", "aktif"].includes(this.state.filter)
    );
  }

  getListArsip() {
    return this.state.notes.filter(
      (obj) =>
        obj.arsip === true &&
        this.searchText(obj, this.state.search) &&
        ["nofilter", "arsip"].includes(this.state.filter)
    );
  }

  render() {
    return (
      <div className="bg-gradient-to-r from-violet-900 to-fuchsia-700 min-h-screen w-screen">
        <div className="flex flex-row text-white">
          {/* content */}
          <div className="basis-full p-5">
            <div className="flex items-center justify-between">
              {/* title */}
              <h1 className="text-xl">Personal Notes</h1>
              {/* button add new note */}
              <Button
                onClickEventHandler={this.toggleModalForm}
                value="New Note"
              />
            </div>
            {/* filter & search bar */}
            <SearchBar
              searchEventHandler={this.searchEventHandler}
              filterEventHandler={this.filterEventHandler}
            />
            <div className="flex gap-x-4 mt-3 text-sm">
              <span>
                Catatan{" "}
                <span className="inline-block rounded-full px-1 bg-rose-400 text-center">
                  {this.state.notes.filter((obj) => obj.arsip === false).length}
                </span>
              </span>
              <span>
                Diarsipkan{" "}
                <span className="inline-block rounded-full px-1 bg-rose-400 text-center">
                  {this.state.notes.filter((obj) => obj.arsip === true).length}
                </span>
              </span>
            </div>
            {/* catatan */}
            <div className="flex flex-col mt-4">
              <h1 className="text-lg font-bold">Catatan</h1>
              <NoteList
                notes={this.getListNotes()}
                deleteNote={this.deleteNote}
                arsipNote={this.arsipNote}
              />
            </div>
            {/* arsip */}
            <div className="flex flex-col mt-4">
              <h1 className="text-lg font-bold">Arsip</h1>
              <NoteList
                notes={this.getListArsip()}
                deleteNote={this.deleteNote}
                arsipNote={this.arsipNote}
              />
            </div>
          </div>
        </div>

        {/* modal form add note */}
        <NoteForm
          showModal={this.state.showModal}
          toggleModalForm={this.toggleModalForm}
          addNote={this.addNote}
          arsipNote={this.arsipNote}
        />
      </div>
    );
  }
}

const root = createRoot(document.getElementById("root"));
root.render(<NotesApp />);
