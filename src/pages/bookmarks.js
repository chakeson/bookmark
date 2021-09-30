import react from 'react';
//import './index.css';
import bookmarksData from "../data"

const category = ["all",...new Set(bookmarksData.map((item)=> item.category))];


function Bookmarks() {
    

    return null
}

export default Bookmarks;