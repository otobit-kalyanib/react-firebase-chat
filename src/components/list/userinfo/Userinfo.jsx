import './userinfo.css';

const Userinfo = () =>{
    return (
      <div className='userinfo'>
        <div className="user">
            <img className='img' src="./avatar.png" alt="" />
            <h4>Jhon Doe</h4>
        </div>
        <div className="icons">
            <img className='img' src="./more.png" alt="" />
            <img className='img' src="./video.png" alt="" />
            <img className='img' src="./edit.png" alt="" />
        </div>
      </div>
    )
  }
  
  export default Userinfo