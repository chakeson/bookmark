import react from 'react';

function TileBookmark({title,url}) {
       

    return (
        <div>
            <a href={url}><div>{title}</div></a>
        </div>
    )
    
}

export default TileBookmark;