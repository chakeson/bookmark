import react from 'react';
import bookmarksData from "../../data/data"
import { Container } from 'react-bootstrap';
const topCategory = [...new Set(bookmarksData.map((item)=> item.category))];


function Bookmarks() {

    return (
        <Container>
            <div>
                
            </div>
        </Container>
    )
}

export default Bookmarks;