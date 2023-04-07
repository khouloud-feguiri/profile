

import './App.css';
import Navb from './components/Navb';
import { FullName } from './components/Profile/FullName';
import ProfilePhoto from './components/Profile/ProfilePhoto';
import Address from './components/Profile/Adress';

function App() {
  return (
    <div className="App">
      
    <Navb/>
    <ProfilePhoto/>
    <br/>
    <FullName/> 
    <br/>
    <Address/>

    </div>
  );
}

export default App;
