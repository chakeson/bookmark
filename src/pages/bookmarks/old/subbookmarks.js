import react, { useState } from 'react';
import TileBookmark from '../components/tileBookmark';
//import './index.css';
import bookmarksData from "../data"

const subCategoryData = ["go up",...new Set(bookmarksData.map((item)=> item.subCategory))];


function SubBookmarks() {
    const [ subBookmarks, setSubBookmarks] = useState(subCategoryData);
    
    

    return null
}

export default SubBookmarks;