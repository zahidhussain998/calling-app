import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Homepage() {
    const [room, setroom] = useState("")

     const navigate = useNavigate();

    const handlefrom = (ev) => {
        ev.preventDefault();
        navigate(`/room/${room}`)

    }
  return (
    <div className='home-page'>
        <form className='form' onSubmit={handlefrom}> 
            <div>
                <label>Username</label>
                <input 
                value={room}
                onChange={(e)=> setroom(e.target.value)}
                
                type='text' name='username' required />
                <button>Enter Room</button>
            </div>
        </form>

    </div>
  )
}

export default Homepage