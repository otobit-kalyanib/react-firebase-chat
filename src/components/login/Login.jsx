import { useState } from 'react'
import './login.css'
import { toast } from 'react-toastify'

const Login = () =>{
  const [avatar,setAvatar] = useState({
    file:null,
    url:""
  })

  const handleAvatar = e => {
    if(e.target.files[0]){
      setAvatar({
        file:e.target.files[0],
        url: URL.createObjectURL(e.target.files[0])
      })
    }
  }

  const handleLogin = e => {
    e.preventDefault();
    toast.success('hello')
  }

    return (
      <div className='login'>
       <div className="item">
        <h3>Welcome back,</h3>
            <form className='form' onSubmit={handleLogin}>
                <input type="text" className='input' name="Email" placeholder='Email' />
                <input type="password" name="password" className='input' placeholder='Password' />
                <button className='btn'>Sign In</button>
            </form>
       </div>
       <div className="saperator"></div>
       <div className="item">
       <h3>Create an Account</h3>
            <form className='form'>
                <label htmlFor="file" className='label'>
                  <img src={avatar.url || "./avatar.png"} className='img' alt="" />
                  Upload an Image
                </label>
                <input type="file"  name="file" id='file' style={{display:"none"}} onChange={handleAvatar}/>
                <input type="text" className='input' name="Username" placeholder='username' />
                <input type="text" name="Email" className='input' placeholder='Email' />
                <input type="password" name="password" className='input' placeholder='Password' />
                <button className='btn'>Sign Up</button>
            </form>
       </div>
      </div>
    )
  }
  
  export default Login