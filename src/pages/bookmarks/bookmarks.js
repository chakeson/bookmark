import react, { useState } from 'react';
import bookmarksData from "../../data/data"
import { Container } from 'react-bootstrap';
import { AiOutlineFolderAdd , AiOutlineFolderOpen} from "react-icons/ai";
import link from "../../data/link.png"


const Node = ({id,title,url,img,children}) => {
    const [nodeshow, setNodeShow] = useState(false);

    const handleClick = () => {
        setNodeShow(!nodeshow);
    }


    return (
        <div className="">
            {url==="" ? (
                <div className="d-inline-flex flex-row" style={{alignItems:"baseline"}} onClick={()=>handleClick()}>
                    {(img!=="folder") && (children==="") && <img src={img} alt="icon" className="iconOwn" onError={(e)=>{e.target.onerror = null; e.target.src=link}}/>}
                    {(img==="folder") && (nodeshow?<AiOutlineFolderOpen style={{fontSize:"1.3rem"}} /> : <AiOutlineFolderAdd style={{fontSize:"1.3rem"}} />)}
                    <h4>{title}</h4>
                </div>
                )
            : 
            (
                <a href={url} target="_blank" rel="noreferrer noopener" className="d-inline-flex flex-row linkOwn" style={{alignItems:"baseline"}} >
                    {(children==="") && (img!=="folder") && <img src={img} alt="icon" className="iconOwn" onError={(e)=>{e.target.onerror = null; e.target.src=link}}/>}
                    {(img==="folder") && (nodeshow?<AiOutlineFolderOpen style={{fontSize:"1.3rem"}} /> : <AiOutlineFolderAdd style={{fontSize:"1.3rem"}} />)}
                    <h4>{title}</h4>
                </a>
            )
            }

            <div className="subfolder">
                {nodeshow && (children!=="") && children.map((subnode) => (
                    <Node {...subnode} key={subnode.id}/>
                ))}
            </div>
        </div>
    )

}


function Bookmarks() {

    return (
        <Container>
            {bookmarksData.map((firstLayerNodes,index) => (
                <Node {...firstLayerNodes} key={index}/>
            ))}
            
        </Container>
    )
}

export default Bookmarks;



/*
    {nodeshow ? (<h4 className="fontWeightOwn">{title}</h4>) : (<h4 className="fontWeightOwnNormal">{title}</h4>) }
    <h4 style={{fontWeight: nodeshow ? "bold":"normal"}}>{title}</h4>
*/