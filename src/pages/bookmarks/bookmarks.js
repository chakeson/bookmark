import React, { useState } from 'react';
import bookmarksDataLeft from "../../data/dataleft"
import bookmarksDataRight from "../../data/dataright"
import { Container } from 'react-bootstrap';
import { AiOutlineFolderAdd , AiOutlineFolderOpen} from "react-icons/ai";
import link from "../../data/link.png"


const Node = ({id,title,url,img,children}) => {
    const [nodeshow, setNodeShow] = useState(false);
    const [hoverOn, setHoverOn] = useState(false);

    const handleClick = () => {
        setNodeShow(!nodeshow);
    }


    return (
        <>
            {url==="" ? 
            (
                <div onMouseEnter={()=>setHoverOn(true)} onMouseLeave={()=>setHoverOn(false)} className="d-inline-flex flex-row" style={{alignItems:"center", marginTop:5}} onClick={()=>handleClick()}>
                    {(img!=="folder") && (children==="") && <img src={img} alt="icon" className="iconOwn" onError={(e)=>{e.target.onerror = null; e.target.src=link}}/>}
                    {(img==="folder") && (nodeshow ? 
                        <div className={`d-grid align-items-center justify-content-center icon-container ${hoverOn ? "icon-container-hover" : ""}`}>
                            <AiOutlineFolderOpen style={{fontSize:"1.3rem"}} />
                        </div> 
                        : 
                        <div className={`d-grid align-items-center justify-content-center icon-container ${hoverOn ? "icon-container-hover" : ""}`}>
                            <AiOutlineFolderAdd style={{fontSize:"1.3rem"}} />
                        </div>)}
                    <span>{title}</span>
                </div>
            )
            : 
            (
                <a  onMouseEnter={()=>setHoverOn(true)} onMouseLeave={()=>setHoverOn(false)} href={url} target="_blank" rel="noreferrer noopener" className="d-inline-flex flex-row linkOwn" style={{alignItems:"center", marginTop:5}} >
                    {(children==="") && (img!=="folder") && 
                    <div className={`d-grid icon-container ${hoverOn ? "icon-container-hover" : ""}`}>
                        <img src={img} alt="icon" className="iconOwn" onError={(e)=>{e.target.onerror = null; e.target.src=link}}/>
                    </div>}
                    {/*(img==="folder") && (nodeshow ? <AiOutlineFolderOpen style={{fontSize:"1.3rem"}} /> : <AiOutlineFolderAdd style={{fontSize:"1.3rem"}} />)*/}
                    <span>{title}</span>
                </a>
            )
            }

            <div className="subfolder">
                {nodeshow && (children!=="") && children.map((subnode) => (
                    <Node {...subnode} key={subnode.id}/>
                ))}
            </div>
        </>
    )

}


function Bookmarks() {

    return (
        <Container className="fullHeight">
            <div className="row">
                <div className="col-12 col-md-6">
                    {bookmarksDataLeft.map((firstLayerNodes,index) => (
                        <Node {...firstLayerNodes} key={index}/>
                    ))}
                </div>
                <div className="col-12 col-md-6">
                    {bookmarksDataRight.map((firstLayerNodes,index) => (
                        <Node {...firstLayerNodes} key={index}/>
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default Bookmarks;


