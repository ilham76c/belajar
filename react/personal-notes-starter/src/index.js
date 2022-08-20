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
        <div className='flex'>
          <select className='bg-transparent'>
            <option value='done'>done</option>
            <option value='undone'>undone</option>
          </select>
          <input type='text' className='w-full' />
          <span>icon</span>
        </div>
      </div>
      {/* sidebar */}
      <div className='basis-[25%]'>
        <h1>Calendar</h1>
      </div>
    </div>
  </div>
);