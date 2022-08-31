import React from 'react';
import { createRoot } from 'react-dom/client';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

// import style
import './styles/index.css';

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi nilai count di dalam state
    this.state = {
      showModal: false,
      notes: [],
      search: ''
    };

    // binding event handler
    this.toggleModalForm = this.toggleModalForm.bind(this);
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.arsipNote = this.arsipNote.bind(this);
    this.searchEventHandler = this.searchEventHandler.bind(this);
  }

  toggleModalForm() {
    this.setState((previousState) => {
      return {
        showModal: !previousState.showModal
      };
    });
  }

  addNote(note) {
    const notes = this.state.notes;
    notes.push(note)
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
      search: e.target.value
    });
  }

  searchText(obj, text) {
    return `${obj.title} ${obj.note}`.toLocaleLowerCase().includes(text);
  }

  render() {
    return (
      <div className='bg-gradient-to-r from-violet-900 to-fuchsia-700 min-h-screen w-screen'>
        <div className='flex flex-row text-white'>
          {/* content */}
          <div className='basis-full p-5'>
            {/* title */}
            <div className='flex items-center justify-between'>
              <h1 className='text-xl'>Personal Notes</h1>
              <button
                className='rounded bg-rose-600 px-2 py-1'
                type='button'
                data-modal-toggle='defaultModal'
                onClick={this.toggleModalForm}
              >
                New Note
              </button>
            </div>
            <div className='flex items-center gap-x-4 bg-violet-600 rounded-lg px-3 py-4 mt-4'>
              {/* icon filter */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                fill='currentColor'
                className='bi bi-funnel'
                viewBox='0 0 16 16'
              >
                <path d='M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z' />
              </svg>

              {/* input filter */}
              <select name='filter' className='bg-violet-600' defaultValue='no'>
                <option id='1' value='no'>No Filter</option>
                <option id='2' value='aktif'>Aktif</option>
                <option id='3' value='arsip'>Arsip</option>
              </select>

              <div className='self-stretch bg-white w-px'></div>

              {/* icon search */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                fill='currentColor'
                className='bi bi-search'
                viewBox='0 0 16 16'
              >
                <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
              </svg>

              {/* input search */}
              <input
                type='text'
                className='w-full bg-transparent focus:outline-none placeholder-white'
                placeholder='Search'
                onChange={this.searchEventHandler}
              />
            </div>
            <div className='flex gap-x-5 mt-3 text-sm'>
              <span>Catatan Aktif <span className='inline-block rounded-full px-1 bg-rose-500 text-center'>{this.state.notes.filter(obj => obj.arsip === false).length}</span></span>
              <span>Arsip <span className='inline-block rounded-full px-1 bg-rose-500 text-center'>{this.state.notes.filter(obj => obj.arsip === true).length}</span></span>
            </div>
            <NoteList notes={this.state.notes.filter(obj => obj.arsip === false && this.searchText(obj, this.state.search))} deleteNote={this.deleteNote} arsipNote={this.arsipNote}/>

            <div className='flex flex-col mt-4'>
              <h1 className='text-sm'>Arsip</h1>
              <NoteList notes={this.state.notes.filter(obj => obj.arsip === true && this.searchText(obj, this.state.search))} deleteNote={this.deleteNote} arsipNote={this.arsipNote}/>
            </div>
          </div>
        </div>

        {/* Form Add Note */}
        <NoteForm showModal={this.state.showModal} toggleModalForm={this.toggleModalForm} addNote={this.addNote} arsipNote={this.arsipNote}/>
      </div>
    );
  }
}

const root = createRoot(document.getElementById('root'));
root.render(<NotesApp />);
