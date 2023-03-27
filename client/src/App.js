import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import UserAdd from './pages/user-add';
import UserList from './pages/user-list';
function App() {
  const [renderList, setRenderList] = useState(1);
  
  return (
    <div className="App">
      <div className="sidebar">
        <div className="sidebar_logo">
          <p style={{fontWeight: '900', fontSize: '2em', textAlign:"center"}}>Demo</p>
        </div>
        <div className="sidebar_menu">
            <div className="sidebar_item">
              List user
            </div>
            <div className="sidebar_item">
              Add user
            </div>
          </div>
      </div>
      <div className="wrapper">
        <UserAdd setRenderList={setRenderList}/>
        <hr />
        <UserList key={renderList} renderList={renderList}/>
      </div>
    </div>
  );
}

export default App;
