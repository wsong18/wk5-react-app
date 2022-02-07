import { useState } from 'react';

function ClickCounter(props){
    const [numClicks, setNumClicks] = useState(0);

    // function increaseNumClicks(e){ // 'e' is the current event object
    function increaseNumClicks(e, message){  // adding parameter "message"
        console.log(message + numClicks);
        setNumClicks(prevClicks => prevClicks + 1);
    }

    return (
        <div>
            <h2>ClickCounter Component</h2>
            <p>Handling Events</p>
            {/* <button onClick={increaseNumClicks}>Clicks: {numClicks}</button> */}
            {/* <button onClick={function(e) {increaseNumClicks(e, "Hello")}}>Clicks: {numClicks}</button> */}
            <button onClick={e=>increaseNumClicks(e, "Hello")}>Clicks: {numClicks}</button>
            <br /><br />
        </div>
    ) 
    
}

export default ClickCounter;