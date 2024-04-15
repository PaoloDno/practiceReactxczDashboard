import { useState } from 'react';
import Sidebar from './components/dashsidebarsection/sidebar';
import DashBody from './components/dashBody';
function App() {
 
  return (
    <div className="container">
      <Sidebar />
      <DashBody />
    </div>
  )
}

export default App
