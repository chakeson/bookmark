import React, { useCallback, useState } from 'react';
import Card from 'react-bootstrap/card'
import Button from 'react-bootstrap/button'


const urlBase = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"


function APOD() {
    const [APODData, setAPODData] = useState([]);
    const [loadedData, setLoadedData] = useState(false);
    const [showAPOD, setShowAPOD] = useState(false);


    const getAPOD = useCallback( async () => {
        try {
            //API call
            const response = await fetch(urlBase)
            const data = await response.json()
            setAPODData(data)
            setLoadedData(true);
            //console.log(data);
        } catch (error) {
            if (error.message === "Failed to fetch") {
                setAPODData("Adblock")
                setLoadedData(false);
            } else {
                console.log(error)
            }
            //const {setLoadedData} = useGlobalContext;
            setLoadedData(false);
        }

    },[setLoadedData,setAPODData])


    const handleClick = () => {
        if (loadedData === false){
            getAPOD();
            setShowAPOD(true);
            return
        }
        if (loadedData === true){
            setShowAPOD(!showAPOD);
            return
        }
    }

    return (
        <Card style={{width:"95%"}}>
            {showAPOD && (APODData.media_type==="image") &&
                <><Card.Img variant="top" src={APODData.url}/>
                <Card.Body>
                    <Card.Title>{APODData.title}</Card.Title>
                    <Card.Text>{APODData.explanation}</Card.Text>
                </Card.Body>
                </>
            }
            {showAPOD && (APODData.media_type==="video") &&
                <>
                    <div className="yt-embed">
                        <iframe src={APODData.url} title="YouTube video player" frameBorder="0" allow="encrypted-media; picture-in-picture" allowFullScreen>
                        </iframe>
                    </div>
                <Card.Body>
                    <Card.Title>{APODData.title}</Card.Title>
                    <Card.Text>{APODData.explanation}</Card.Text>
                </Card.Body>
                </>
            }
            <div style={{padding:10}} className="d-grid">
                <Button variant="primary" size="m" onClick={()=>(handleClick())}>
                    {!loadedData && "Load todays space picture"}
                    {(loadedData && showAPOD) && "Hide"}
                    {(loadedData && !showAPOD) && "Show"}
                </Button>
            </div>
        </Card>
        
    )
}


export default APOD;