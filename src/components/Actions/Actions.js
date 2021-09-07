import './Actions.css';
import React, {useState} from 'react';

const Actions = () => {
    const [input, setInput] = useState();
    const [dt, setDT] = useState();

    function printToday() {
        setDT(new Date().toDateString());
    }
    return (
        <div>
            <label htmlFor="myinput">Enter here: </label>
           <input id="myinput" type="text" onChange={e => setInput(e.target.value)}></input> 
            <div>

           Your input:
           <div className='answer'>
               <p><strong>Capital: </strong>{input && input.toUpperCase()}</p>
               <p><strong>Small: </strong>{input && input.toLowerCase()}</p>
               {dt && <p><strong>Date: </strong>{dt}</p>}
           </div>
            </div>

            <button onClick={e => printToday()}>Today</button>
        </div>
    )
};

export default Actions;
