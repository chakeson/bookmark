import react, { useState } from 'react';
import TileBookmark from '../components/tileBookmark';
//import './index.css';
//import bookmarksData from "../data"

function TopBookmarks({topCategory}) {
    //const [ TopBookmarks, setTopBookmarks] = useState(topCategory);
    
    
    return (
        <div>
        
            {topCategory.map( (items, index) => {
                return 
                    {<TileBookmark key={index} {...items} />};
            })}
        
        </div>
    )
}

export default TopBookmarks;