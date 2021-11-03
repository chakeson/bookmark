import React, { useState, useEffect } from 'react';
import { AiOutlineArrowUp } from "react-icons/ai";

function GoToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const goToTop = () => {
        window.scrollTo({top:0,left:0,behavior:"smooth"})
    }

    const handleVisibleChange = () => {
        if ( window.pageYOffset > 600 ) {
            setIsVisible(true)
        }
        else {
            setIsVisible(false)
        }
    }
    
    useEffect(()=>{
        window.addEventListener( "scroll" , handleVisibleChange );
        
        //Removes the eventlister when this componet is destroyed.
        return () => {
            window.removeEventListener( "scroll" , handleVisibleChange );
        };
    },[])

    return (
        <div className="btn-to-top">
            <button onClick={goToTop} type="button" className={`btn-primary ${isVisible ? "opacity-full":"opacity-empty"}`} >
                <AiOutlineArrowUp size="2em"/>
            </button>
        </div>
    )
}

export default GoToTop;
