import React, { useState, useEffect } from 'react';
import { IconContext } from "react-icons";
import { AiOutlineArrowUp } from "react-icons/ai";

function GoToTop() {
    const [isVisible, setIsVisible] = useState(true);

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
            {isVisible && <button onClick={goToTop} type="button" className="btn-primary">
                <AiOutlineArrowUp size="2em"/>
            </button>}
        </div>
    )
}

export default GoToTop;
