import { useEffect, useRef, useState } from 'react'
import './chat.css'
import EmojiPicker from 'emoji-picker-react'

const Chat = () =>{
    const [open,setOpen] = useState(false);
    const [text,setText] = useState("");

    const endRef = useRef(null);

    useEffect(()=> {
        endRef.current?.scrollIntoView({ behavior:'smooth' });
    },[])

    const handleEmoji = (e) =>{
        setText((prev) => prev + e.emoji);
        setOpen(false)
    }
  return (
    <div className='chat'>
        <div className="top">
            <div className="user">
                <img src="./avatar.png" className='img' alt="" />
                <div className="texts">
                    <span className='span'>John Doe</span>
                    <p className='p'>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                </div>
            </div>
            <div className="icons">
                <img src="./phone.png" className='img' alt="" />
                <img src="./video.png" className='img' alt="" />
                <img src="./info.png" className='img' alt="" />
            </div>
        </div>
        <div className="center">
            <div className="message">
                <img className='img' src="./avatar.png" alt="" />
                <div className="texts">
                    <p className='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus officiis cupiditate quam velit? Itaque quaerat odit ab mollitia, deserunt facere blanditiis provident animi quisquam possimus qui laborum molestiae, nam dolorem.</p>
                    <span className='span'>1 min ago</span>
                </div>
            </div>
            <div className="message own">

                <div className="texts">
                    <p className='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus officiis cupiditate quam velit? Itaque quaerat odit ab mollitia, deserunt facere blanditiis provident animi quisquam possimus qui laborum molestiae, nam dolorem.</p>
                    <span className='span'>1 min ago</span>
                </div>
            </div>
            <div className="message">
                <img className='img' src="./avatar.png" alt="" />
                <div className="texts">
                    <p className='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus officiis cupiditate quam velit? Itaque quaerat odit ab mollitia, deserunt facere blanditiis provident animi quisquam possimus qui laborum molestiae, nam dolorem.</p>
                    <span className='span'>1 min ago</span>
                </div>
            </div>
            <div className="message own">

                <div className="texts">
                    <p className='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus officiis cupiditate quam velit? Itaque quaerat odit ab mollitia, deserunt facere blanditiis provident animi quisquam possimus qui laborum molestiae, nam dolorem.</p>
                    <span className='span'>1 min ago</span>
                </div>
            </div>
            <div className="message">
                <img className='img' src="./avatar.png" alt="" />
                <div className="texts">
                    <p className='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus officiis cupiditate quam velit? Itaque quaerat odit ab mollitia, deserunt facere blanditiis provident animi quisquam possimus qui laborum molestiae, nam dolorem.</p>
                    <span className='span'>1 min ago</span>
                </div>
            </div>
            <div className="message own">

                <div className="texts">
                    <p className='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus officiis cupiditate quam velit? Itaque quaerat odit ab mollitia, deserunt facere blanditiis provident animi quisquam possimus qui laborum molestiae, nam dolorem.</p>
                    <span className='span'>1 min ago</span>
                </div>
            </div>
            <div className="message">
                <img className='img' src="./avatar.png" alt="" />
                <div className="texts">
                    <p className='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus officiis cupiditate quam velit? Itaque quaerat odit ab mollitia, deserunt facere blanditiis provident animi quisquam possimus qui laborum molestiae, nam dolorem.</p>
                    <span className='span'>1 min ago</span>
                </div>
            </div>
            <div className="message own">
                <div className="texts">
                <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" className='pimg' alt="" />
                    <p className='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus officiis cupiditate quam velit? Itaque quaerat odit ab mollitia, deserunt facere blanditiis provident animi quisquam possimus qui laborum molestiae, nam dolorem.</p>
                    <span className='span'>1 min ago</span>
                </div>
            </div>
            <div ref={endRef}></div>
        </div>
        <div className="bottom">
            <div className="icons">
                <img src="./img.png" className='img' alt="" />
                <img src="./camera.png" className='img' alt="" />
                <img src="./mic.png" className='img' alt="" />
            </div>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder='Type a message...' className='msg' />
            <div className="emoji">
                <img src="./emoji.png" className='img' alt="" onClick={()=>setOpen(prev=>!prev)}/>
                <EmojiPicker className='picker' open={open} onEmojiClick={handleEmoji}/>
            </div>
            <button className='sendButton'>Send</button>
        </div>
    </div>
  )
}

export default Chat