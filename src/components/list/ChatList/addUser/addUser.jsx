import './addUser.css'

const AddUser = () =>{
    return (
      <div className='addUser'>
        <form className='form'>
            <input type="text" className='input' name='username' placeholder='Username' />
            <button className='button'>Search</button>
        </form>
        <div className="user">
            <div className="detail">
                <img className='img' src="./avatar.png" alt="" />
                <span className='span'>Jane Doe</span>
            </div>
            <button className='button'>Add User</button>
        </div>
      </div>
    )
  }
  
  export default AddUser