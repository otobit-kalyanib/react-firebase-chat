import { useState } from 'react';
import './chatList.css';
import AddUser from './addUser/addUser';

const ChatList = () =>{
    const [addMode, setAddMode] = useState(false);
    return (
      <div className='chatlist'>
        <div className="search">
            <div className="searchBar">
                <img src="./search.png" className='img' alt="" />
                <input className="inp" type="text" name="" placeholder='Search' id="" />
            </div>
            <img src={addMode ? "./minus.png" : "./plus.png"} alt="" className='add' onClick={()=>setAddMode((prev) => !prev)}/>
        </div>
        <div className="item">
            <img className='img' src="./avatar.png" alt="" />
            <div className="texts">
                <span className='span'>Jane Doe</span>
                <p className='p'>Hello</p>
            </div>
        </div>
        <div className="item">
            <img className='img' src="./avatar.png" alt="" />
            <div className="texts">
                <span className='span'>Jane Doe</span>
                <p className='p'>Hello</p>
            </div>
        </div>
        <div className="item">
            <img className='img' src="./avatar.png" alt="" />
            <div className="texts">
                <span className='span'>Jane Doe</span>
                <p className='p'>Hello</p>
            </div>
        </div>
        <div className="item">
            <img className='img' src="./avatar.png" alt="" />
            <div className="texts">
                <span className='span'>Jane Doe</span>
                <p className='p'>Hello</p>
            </div>
        </div>
        {addMode && <AddUser/>}
      </div>
    )
  }
  
  export default ChatList