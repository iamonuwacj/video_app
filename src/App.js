import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';



function App() {

  const [toggle, setToggle] = useState(false)

  return (
    <div className="App">
      <Navbar setToggleState={() => setToggle(!toggle)}/>
      <Sidebar toggleState={toggle}/>
    </div>
  );
}

export default App;
