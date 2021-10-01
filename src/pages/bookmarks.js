import react, { useState } from 'react';
import TileBookmark from '../components/tileBookmark';
//import './index.css';
import bookmarksData from "../data"
import Subbookmarks from '../components/subbookmarks';
import Container from 'react-bootstrap/Container';

const topCategory = ["all",...new Set(bookmarksData.map((item)=> item.category))];


function Bookmarks() {
    const [ topMenu, setTopMenu] = useState(topCategory);
    //const [submenu, setSubMenu] = useState(null);
    

    return (
        <Container>

        </Container>
    )
}

export default Bookmarks;