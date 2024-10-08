import React from "react";
import { createRoot } from "react-dom/client";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import SearchBar from "./components/SearchBar";
import Button from "./components/Button";
import { getInitialData } from "./utils/index";

// import style
import "./styles/style.css";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi nilai count di dalam state
    this.state = {
      showModal: false,
      notes: getInitialData(),
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
        obj.archived = !obj.archived;
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
    return `${obj.title} ${obj.body}`.toLocaleLowerCase().includes(text);
  }

  getListNotes() {
    return this.state.notes.filter(
      (obj) => obj.archived === false && this.searchText(obj, this.state.search)
    );
  }

  getListArsip() {
    return this.state.notes.filter(
      (obj) => obj.archived === true && this.searchText(obj, this.state.search)
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
                  {
                    this.state.notes.filter((obj) => obj.archived === false)
                      .length
                  }
                </span>
              </span>
              <span>
                Diarsipkan{" "}
                <span className="inline-block rounded-full px-1 bg-rose-400 text-center">
                  {
                    this.state.notes.filter((obj) => obj.archived === true)
                      .length
                  }
                </span>
              </span>
            </div>

            {/* catatan */}
            {["nofilter", "aktif"].includes(this.state.filter) && (
              <div className="flex flex-col mt-4">
                <h1 className="text-lg font-bold">Catatan</h1>

                <NoteList
                  notes={this.getListNotes()}
                  deleteNote={this.deleteNote}
                  arsipNote={this.arsipNote}
                />
                {this.getListNotes().length === 0 ? (
                  this.state.search.length ? (
                    <span className="mt-2 text-slate-400">
                      Pencarian tidak ditemukan
                    </span>
                  ) : (
                    <span className="mt-2 text-slate-400">
                      Tidak ada catatan
                    </span>
                  )
                ) : (
                  ""
                )}
              </div>
            )}

            {/* arsip */}
            {["nofilter", "arsip"].includes(this.state.filter) && (
              <div className="flex flex-col mt-4">
                <h1 className="text-lg font-bold">Arsip</h1>
                <NoteList
                  notes={this.getListArsip()}
                  deleteNote={this.deleteNote}
                  arsipNote={this.arsipNote}
                />
                {this.getListArsip().length === 0 ? (
                  this.state.search.length ? (
                    <span className="mt-2 text-slate-400">
                      Pencarian tidak ditemukan
                    </span>
                  ) : (
                    <span className="mt-2 text-slate-400">Tidak ada arsip</span>
                  )
                ) : (
                  ""
                )}
              </div>
            )}
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
