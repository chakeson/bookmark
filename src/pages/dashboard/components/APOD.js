import React, { useCallback, useState } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image'


const urlBase = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
//const urlIMGTest = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2021-10-31"
//const urlVideoTest = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2021-10-26"

function APOD() {
    const [APODData, setAPODData] = useState([]);
    const [loadedData, setLoadedData] = useState(false);
    const [showAPOD, setShowAPOD] = useState(false);
    const [isIMGModal, setIsIMGModal] = useState(false);

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
        <>
        <Card>
            {showAPOD && (APODData.media_type==="image") &&
                <>
                    <Card.Img variant="top" src={APODData.url} className="img-card" onClick={()=>setIsIMGModal(true)}/>
                    <Card.Body>
                        <Card.Title>{APODData.title}</Card.Title>
                        <Card.Text>{APODData.explanation}</Card.Text>
                    </Card.Body>
                </>
            }
            {showAPOD && (APODData.media_type==="video") &&
                <>
                    <div className="ratio ratio-16x9">
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
        
        
        <Modal size="xl" fullscreen={false} show={isIMGModal} onHide={() => setIsIMGModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>{APODData.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <span className="d-flex justify-content-center align-items-center">
                    <Image src={APODData.url} fluid/>
                </span>
            </Modal.Body>
        </Modal>
        

        </>
    )
}


export default APOD;

/*

        {isIMGModal && 
            <div className={`${isIMGModal ? "modal modal-show" : "modal" }`}>
                <img src={APODData.url} alt="Astronmical image of the day" />
                <div className="d-grid">
                    <button className="btn btn-primary btn-m" onClick={()=>setIsIMGModal(false)}>
                        Close
                    </button>
                </div>
            </div>
        }

*/