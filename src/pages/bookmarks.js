import react, { useState } from 'react';
//import './index.css';
import bookmarksData from "../data"
import Subbookmarks from '../components/subbookmarks';

const topCategory = ["all",...new Set(bookmarksData.map((item)=> item.category))];


function Bookmarks() {
    const [ topMenu, setTopMenu] = useState(topCategory);
    const [submenu, setSubMenu] = useState(null);
    

    return null
}

export default Bookmarks;