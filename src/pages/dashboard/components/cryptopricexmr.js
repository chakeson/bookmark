import React, { useCallback, useEffect, useState } from 'react';
import CryptoCardXMR from './subcomponentscrypto/cryptocardxmr';
import Table from 'react-bootstrap/table';

const urlBTC = "https://data.messari.io/api/v1/assets/btc/metrics?fields=id,name,slug,symbol,market_data/price_usd,market_data/real_volume_last_24_hours,market_data/ohlcv_last_1_hour,market_data/ohlcv_last_24_hour,marketcap/current_marketcap_usd,marketcap/marketcap_dominance_percent"
const urlETH = "https://data.messari.io/api/v1/assets/eth/metrics?fields=id,name,slug,symbol,market_data/price_usd,market_data/real_volume_last_24_hours,market_data/ohlcv_last_1_hour,market_data/ohlcv_last_24_hour,marketcap/current_marketcap_usd,marketcap/marketcap_dominance_percent"
const urlXMR = "https://data.messari.io/api/v1/assets/xmr/metrics?fields=id,name,slug,symbol,market_data/price_usd,market_data/real_volume_last_24_hours,market_data/ohlcv_last_1_hour,market_data/ohlcv_last_24_hour,marketcap/current_marketcap_usd,marketcap/marketcap_dominance_percent"


function CryptoPriceXMR() {
    const [succesfulFetchCryptoPriceXMR, setSuccesfulFetchCryptoPriceXMR] =  useState(false);
    const [fetchDataCryptoPriceXMR, setFetchDataCryptoPriceXMR] = useState([]);

    const getCryptoPrice = useCallback( async (url) => {
        try {
            //API call
            const response = await fetch(url);
            const data = await response.json();
            //console.log(...fetchDataCryptoPriceXMR)
            setFetchDataCryptoPriceXMR(() => fetchDataCryptoPriceXMR.concat(data))
            //const data1 = {url:data}
            //setFetchDataCryptoPriceXMR(() => (fetchDataCryptoPriceXMR.concat(data1)))
            //setFetchDataCryptoPriceXMR((oldData) => [...oldData, data1])
        } catch (error) {
            if (error.message === "Failed to fetch") {
                //setFetchDataCryptoPriceXMR("Adblock")
                setSuccesfulFetchCryptoPriceXMR(false);
            } else {
                console.log(error)
            }
            setSuccesfulFetchCryptoPriceXMR(false);
        }

    },[setSuccesfulFetchCryptoPriceXMR,setFetchDataCryptoPriceXMR])

    useEffect(()=>{
        //console.log(fetchDataCryptoPriceXMR)
        getCryptoPrice(urlBTC)
        //console.log(fetchDataCryptoPriceXMR)
        getCryptoPrice(urlETH)
        //console.log(fetchDataCryptoPriceXMR)
        getCryptoPrice(urlXMR)
        console.log(fetchDataCryptoPriceXMR)
        setSuccesfulFetchCryptoPriceXMR(true);
    },[])
    
    console.log(...fetchDataCryptoPriceXMR)
    return (
        <div>
            <div className="table-responsive">
            <Table className="card-table table-bordeless table-striped">
                <thead className="table-dark">
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">1H range</th>
                        <th scope="col">24H range</th>
                        <th scope="col">Marketcap</th>
                        <th scope="col">Dominance%</th>
                        <th scope="col">Volume Real(24h)</th>
                    </tr>
                </thead>
                <tbody>
                    {succesfulFetchCryptoPriceXMR ? fetchDataCryptoPriceXMR.map((data123) => (console.log(fetchDataCryptoPriceXMR[data123]))) : "Loading"}
                </tbody>
            </Table>
            </div>
        </div>
        
    )
}

export default CryptoPriceXMR;


//fetchDataCryptoPriceXMR.map((data,index) => (<CryptoCardXMR {...data} key={index}/>))

// <CryptoCardXMR {...fetchDataCryptoPriceXMR} />
// <CryptoCard {...fetchDataCryptoPriceXMR} key={fetchDataCryptoPriceXMR.data.id}/>
//fetchDataCryptoPriceXMR.data.map((data) => (<CryptoCardXMR {...data} key={data.id}/>))