import React from 'react';
import'./style.css'

const Sidebar = () => {
  return (
    <aside sticky="top" className='Sidebar' >
      <h2>Dashboard</h2>
      {/* <p>This is the sidebar.</p> */}
      <ul className='Sidebar-ul'>
        
        <li>Projects</li>
        <li>Milestones</li>
        <li>Notifications</li>
        <li>Backlogs</li>
        <li>Supervisors</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
