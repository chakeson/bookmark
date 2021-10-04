import react from 'react';
import TileBookmark from '../components/tileBookmark';
//import './index.css';
import bookmarksData from "../data"
import TopBookmarks from'../components/topbookmarks';
import SubBookmarks from '../components/subbookmarks';
import Container from 'react-bootstrap/Container';

const topCategory = [...new Set(bookmarksData.map((item)=> item.category))];


function Bookmarks() {
    //const [ topMenu, setTopMenu] = useState(topCategory);
    //const [submenu, setSubMenu] = useState(null);
    

    return (
        <Container>
            <div>
                <TopBookmarks topCategory={topCategory} />
            </div>
        </Container>
    )
}

export default Bookmarks;