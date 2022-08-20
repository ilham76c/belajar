import React from 'react';
import { createRoot } from 'react-dom/client';

// import style
import './styles/index.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <div className='bg-gradient-to-r from-violet-900 to-fuchsia-700 h-screen w-screen'>
    <div className='flex flex-row p-5 text-white'>
      {/* content */}
      <div className='basis-[75%]'>
        <h1>Personal Notes</h1>
        <div className='flex items-center gap-x-5 bg-blue-500 rounded-lg px-3 py-4 mt-4'>
          {/* icon filter */}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-funnel" viewBox="0 0 16 16">
            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
          </svg>

          {/* input filter */}
          <select className='bg-transparent'>
            <option value='done'>Done</option>
            <option value='undone'>Undone</option>
          </select>

          <div className='self-stretch bg-white w-px'></div>

          {/* icon search */}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>

          {/* input search */}
          <input type='text' className='w-full bg-transparent focus:outline-none placeholder-white' placeholder='Search' />
        </div>
        <div className='flex gap-x-5 mt-3'>
          <input type='button' value='Done' />
          <input type='button' value='Undone' />
        </div>
        <div className='grid grid-cols-4 gap-4 mt-3'>
          <div className='flex flex-col gap-2 rounded-lg bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'>
            <div className='px-2 py-3'>
              <h1 className='font-bold'>Judul</h1>
              <span className='text-sm my-1'>Minggu, 21 Agustus 2022</span>
              <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem doloribus minima necessitatibus similique voluptate reiciendis ab? Neque fuga voluptas impedit?
              </p>
            </div>
            <div className='flex'>
              <input className='flex-1 rounded-bl border border-gray-100 py-1' type='button' value='Delete'/>
              <input className='flex-1 rounded-br border border-gray-100 py-1' type='button' value='Arsipkan'/>
            </div>
          </div>
        </div>
      </div>
      {/* sidebar */}
      <div className='basis-[25%]'>
        <h1>Calendar</h1>
      </div>
    </div>
  </div>
);