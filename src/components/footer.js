import React, { useEffect, useState } from 'react';
import { BsSun , BsMoon} from "react-icons/bs";



const storageAccess = () => {
    let startingTheme = "lightTheme";
    if (localStorage.getItem("theme")){
        startingTheme = localStorage.getItem("theme")
    }
    return startingTheme;
}

function Footer() {
    const [checked, setChecked] = useState(false);
    const [theme, setTheme] = useState(storageAccess());
    
    
    const handleChange = (e) => {
        //e.preventDefault()
        setChecked(!checked)
        
        if (theme === "lightTheme") {
            setTheme("darkTheme");
        }
        else {
            setTheme("lightTheme");
        }
  
    }

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    },[theme])

    return (
    <footer className="container">
        <div className="row">
            <div className="lada">
                {(theme==="lightTheme") && <BsMoon/>}
                {(theme==="darkTheme") && <BsSun/>}
                <div style={{width:"1rem",height:"1rem"}}></div>
                <label>
                    <input type="checkbox" checked={checked} onChange={e=>handleChange(e)}/>
                    <span className="check"></span>
                </label>
            </div>
        </div>
    </footer>
    )
}

export default Footer;
