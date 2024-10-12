import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';
import Main from './components/main/Main';



function App() {

  const [toggle, setToggle] = useState(false)

  return (
    <div className="App">
      <Navbar setToggleState={() => setToggle(!toggle)}/>
      <Sidebar toggleState={toggle}/>
      <Main toggleState={toggle}/>
    </div>
  );
}

export default App;
